<?php

namespace Jed\Menus\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Menus\App\Menu;

class MenuController extends Controller
{
  use ControllerTrait;

  public function index()
  {
    $menus = Menu::latest()->get();
    return response()->json(['success' => true, 'data' => $menus]);
  }

  public function store(Request $request)
  {
    if (auth('apiAdmin')->user()->cannot('add-menu')) return response()->json(['success' => false, 'message' => 'You are not authorized.']);
    $this->validate($request, [
      'title' => 'required|max:255',
    ]);

    $menu = Menu::create([
      'title' => $request->title,
      'slug' => Str::slug($request->title),
      'menu_items' => $request->menu_items
    ]);

    return response()->json(['success' => true, 'message' => 'Menu successfully added']);
  }

  public function show($id)
  {
    $menu = Menu::findOrFail($id);
    return response()->json(['success' => true, 'data' => $menu]);
  }

  public function update($id, Request $request)
  {
    if (auth('apiAdmin')->user()->cannot('edit-menu')) return response()->json(['success' => false, 'message' => 'You are not authorized.']);
    $this->validate($request, [
      'title' => 'required|max:255',
    ]);

    $menu = Menu::find($id);
    $menu->update([
      'title' => $request->title,
      'slug' => Str::slug($request->title),
      'menu_items' => $request->menu_items
    ]);

    return response()->json(['success' => true, 'message' => 'Menu successfully updated.']);
  }

  public function destroy($id)
  {
    $menu = Menu::find($id);
    $menu->delete();
    return response()->json(['success' => true, 'message' => 'Menu successfully deleted']);
  }
}
