<?php

namespace Jed\Blogs\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Blogs\App\Blog;
use Illuminate\Support\Str;
use Jed\Core\Http\Traits\ControllerTrait;

class BlogController extends Controller
{
    use ControllerTrait;

    public function index()
    {
        $blogs = Blog::latest()->get();
        return response()->json(['success' => true, 'data' => $blogs]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
        'title' => 'required|max:255',
        'short_desc' => 'required|min:5',
        'content' => 'required|min:5',
        'author' => 'required',
        'category_id' => 'required',
        ], [
        'category_id.required' => 'Please select category.'
        ]);

        $blog = Blog::create([
        'title' => $request->title,
        'slug' => Str::slug($request->title),
        'category_id' => $request->category_id,
        'short_desc' => $request->short_desc,
        'content' => $request->content,
        'author' => $request->author,
        'is_featured' => $this->isTrue($request->is_featured) ? 1 : 0,
        'status' => $this->isTrue($request->status) ? 1 : 0,
        'publish_date' => $request->publish_date
        ]);
        $this->updateMeta($blog, $request);

        if ($request->file('thumbnail')) {
            $blog->addMedia($request->file('thumbnail'))->toMediaCollection();
        }
        return response()->json(['success' => true, 'message' => 'Blog successfully added', 'blog' => $blog]);
    }

    public function show($id)
    {
        $blog = Blog::with('media')->findOrFail($id);
        return response()->json(['success' => true, 'data' => $blog]);
    }

    public function update($id, Request $request)
    {
        $this->validate($request, [
        'title' => 'required|max:255',
        'slug' => 'required|max:255',
        'short_desc' => 'required|min:5',
        'content' => 'required|min:5',
        'author' => 'required',
        'category_id' => 'required',
        ], [
        'category_id.required' => 'Please select category.'
        ]);


        $blog = Blog::find($id);
        $blog->update([
        'title' => $request->title,
        'slug' => $request->has('slug') ? $request->slug : Str::slug($request->title),
        'category_id' => $request->category_id,
        'short_desc' => $request->short_desc,
        'content' => $request->content,
        'author' => $request->author,
        'is_featured' => $this->isTrue($request->is_featured) ? 1 : 0,
        'status' => $this->isTrue($request->status) ? 1 : 0,
        'publish_date' => $request->publish_date
        ]);
        $this->updateMeta($blog, $request);

        if ($request->file('thumbnail')) {
            if ($blog->getFirstMedia()) {
                $blog->getFirstMedia()->delete();
            }
            $blog->addMedia($request->file('thumbnail'))->toMediaCollection();
        }


        return response()->json(['success' => true, 'message' => 'Blog successfully updated', 'blog' => $blog]);
    }

    public function destroy($id)
    {
        $blog = Blog::find($id);
        $blog->delete();
        return response()->json(['success' => true, 'message' => 'Blog successfully deleted']);
    }

    public function toggleBlogStatus($blog_id)
    {
        $blog = Blog::find($blog_id);
        $blog->update([
          'status' => $blog->status === 0 ? 1 : 0
        ]);

        return response()->json(['success' => true, 'message' => "Blog successfully updated", 'status' => $blog->status]);
    }

    public function toggleBlogFeature($blog_id)
    {
        $blog = Blog::find($blog_id);
        $blog->update([
        'is_featured' => $blog->is_featured === 0 ? 1 : 0
        ]);

        return response()->json(['success' => true, 'message' => "Blog successfully updated", 'is_featured' => $blog->is_featured]);
    }
}
