<?php

namespace Jed\Blogs\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Blogs\App\BlogCategory;
use Illuminate\Support\Str;
use Jed\Core\Http\Traits\ControllerTrait;

class BlogCategoryController extends Controller
{
  use ControllerTrait;

  public function index()
  {
    $blogs = BlogCategory::latest()->get();
    return response()->json(['success' => true, 'data' => $blogs]);
  }

  public function store(Request $request)
  {
    $this->validate($request, [
      'title' => 'required|max:255',
      'short_desc' => 'required|min:5',
      'content' => 'required|min:5',
    ]);

    $blogCategory = BlogCategory::create([
      'title' => $request->title,
      'slug' => Str::slug($request->title),
      'short_desc' => $request->short_desc,
      'content' => $request->content,
      'status' => $this->isTrue($request->status) ? 1 : 0
    ]);
    $this->updateMeta($blogCategory, $request);

    if ($request->file('thumbnail')) {
      $blogCategory->addMedia($request->file('thumbnail'))->toMediaCollection();
    }

    return response()->json(['success' => true, 'message' => 'Blog Cateogry successfully added', 'blog' => $blogCategory]);
  }

  public function show($id)
  {
    $blogCategory = BlogCategory::findOrFail($id);
    return response()->json(['success' => true, 'data' => $blogCategory]);
  }

  public function update($id, Request $request)
  {
    $this->validate($request, [
      'title' => 'required|max:255',
      'short_desc' => 'required|min:5',
      'content' => 'required|min:5',
    ]);

    $blogCategory = BlogCategory::find($id);
    $blogCategory->update([
      'title' => $request->title,
      'slug' => Str::slug($request->title),
      'short_desc' => $request->short_desc,
      'content' => $request->content,
      'status' => $this->isTrue($request->status) ? 1 : 0
    ]);
    $this->updateMeta($blogCategory, $request);

    if ($request->file('thumbnail')) {
      if ($blogCategory->getFirstMedia())
        $blogCategory->getFirstMedia()->delete();
      $blogCategory->addMedia($request->file('thumbnail'))->toMediaCollection();
    }

    return response()->json(['success' => true, 'message' => 'Blog Category successfully updated', 'blog' => $blogCategory]);
  }

  public function destroy($id)
  {
    $blogCategory = BlogCategory::find($id);
    if ($blogCategory->blogs->count()) {
      return response()->json(['success' => false, 'message' => 'Cannot delete blog category. Category is not empty']);
    }
    $blogCategory->delete();
    return response()->json(['success' => true, 'message' => 'Blog Category successfully deleted']);
  }

  public function getCategoriesForDropdown()
  {
    $categories = BlogCategory::select(['id', 'title'])->get();
    return response()->json(['success' => true, 'data' => $categories]);
  }
}
