<?php

namespace Jed\Banners\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Jed\Banners\App\Banner;
use Jed\Core\Http\Traits\ControllerTrait;

class BannerController extends Controller
{
  use ControllerTrait;

  public function index()
  {
    $banners = Banner::latest()->get();
    return response()->json(['success' => true, 'data' => $banners]);
  }

  public function store(Request $request)
  {
    if (auth('apiAdmin')->user()->cannot('add-banner')) return response()->json(['success' => false, 'message' => 'You are not authorized.']);
    $this->validate($request, [
      'name' => 'required|max:255',
    ]);

    $banner = Banner::create([
      'name' => $request->name,
      'slug' => Str::slug($request->name),
    ]);

    return response()->json(['success' => true, 'message' => 'Banner successfully added', 'banner' => $banner]);
  }

  public function show($id)
  {
    $banner = Banner::findOrFail($id);
    return response()->json(['success' => true, 'data' => $banner]);
  }

  public function update($id, Request $request)
  {
    if (auth('apiAdmin')->user()->cannot('edit-banner')) return response()->json(['success' => false, 'message' => 'You are not authorized.']);
    $this->validate($request, [
      'name' => 'required|max:255',
    ]);

    $banner = Banner::find($id);
    $banner->update([
      'name' => $request->name,
      'slug' => Str::slug($request->name),
    ]);
    return response()->json(['success' => true, 'message' => 'Banner successfully updated', 'banner' => $banner]);
  }

  public function destroy($id)
  {
    $banner = Banner::find($id);
    $banner->delete();
    return response()->json(['success' => true, 'message' => 'Banner successfully deleted']);
  }
}
