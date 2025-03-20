<?php

namespace Jed\Pages\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Pages\App\PageSection;

class PageSectionsController extends Controller
{
  use ControllerTrait;

  public function index($page_id)
  {
    $sections = PageSection::latest()->where('page_id', $page_id)->get();
    return response()->json(['success' => true, 'data' => $sections]);
  }

  public function store($page_id, Request $request)
  {
    $this->validate($request, [
      'title' => 'required|max:255',
      'content' => 'required|min:5'
    ]);

    $page_section = PageSection::create([
      'title' => $request->title,
      'content' => $request->content,
      'excerpt' => $request->excerpt,
      'page_id' => $page_id
    ]);

    if ($request->file('thumbnail')) { 
      $page_section->addMedia($request->file('thumbnail'))->toMediaCollection();
    }

    return response()->json(['success' => true, 'message' => 'Page section successfully added']);
  }
 
  public function update($page_id, $section_id, Request $request)
  {
    $this->validate($request, [
      'title' => 'required|max:255',
      'content' => 'required|min:5'
    ]);

    $section = PageSection::find($section_id);
    $section->update([
      'title' => $request->title,
      'content' => $request->content,
      'excerpt' => $request->excerpt,
    ]);

    if ($request->file('thumbnail')) {
      if ($section->getFirstMedia())
        $section->getFirstMedia()->delete();
      $section->addMedia($request->file('thumbnail'))->toMediaCollection();
    }


    return response()->json(['success' => true, 'message' => 'Page section successfully updated']);
  }

  public function destroy($page_id, $id)
  {
    $section = PageSection::find($id);
    $section->delete();
    return response()->json(['success' => true, 'message' => 'Page section successfully deleted']);
  }
}
