<?php

namespace Jed\Pages\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Pages\App\Page;
use Illuminate\Support\Str;
use Jed\Core\Http\Traits\ControllerTrait;

class PagesController extends Controller
{
    use ControllerTrait;

    public function index()
    {
        $pages = Page::latest()->get();
        return response()->json(['success' => true, 'data' => $pages]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
        'title' => 'required|max:255',
        'content' => 'required|min:5'
        ]);

        $page = Page::create([
        'title' => $request->title,
        'slug' => Str::slug($request->title),
        'excerpt' => $request->excerpt,
        'content' => $request->content
        ]);
        $this->updateMeta($page, $request);

        if ($request->file('thumbnail')) {
            $page->addMedia($request->file('thumbnail'))->toMediaCollection();
        }

        return response()->json(['success' => true, 'message' => 'Page successfully added', 'page' => $page]);
    }

    public function show($id)
    {
        $page = Page::findOrFail($id);
        return response()->json(['success' => true, 'data' => $page]);
    }

    public function update($id, Request $request)
    {
        $this->validate($request, [
          'title' => 'required|max:255',
          'content' => 'required|min:5'
        ]);

        $page = Page::find($id);
        $page->update([
        'title' => $request->title,
        'slug' => Str::slug($request->title),
        'excerpt' => $request->excerpt,
        'content' => $request->content
        ]);

        $this->updateMeta($page, $request);
        if ($request->has('delete_image') && $this->isTrue($request->delete_image)) {
            if ($page->getFirstMedia()) {
                $page->getFirstMedia()->delete();
            }
        }
        if ($request->file('thumbnail')) {
            if ($page->getFirstMedia()) {
                $page->getFirstMedia()->delete();
            }
            $page->addMedia($request->file('thumbnail'))->toMediaCollection();
        }

        return response()->json(['success' => true, 'message' => 'Page successfully updated', 'page' => $page]);
    }

    public function destroy($id)
    {
        $page = Page::find($id);
        $page->delete();
        return response()->json(['success' => true, 'message' => 'Page successfully deleted']);
    }
}
