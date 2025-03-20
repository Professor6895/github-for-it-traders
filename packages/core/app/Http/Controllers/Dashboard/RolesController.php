<?php

namespace Jed\Core\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Core\App\Role;

class RolesController extends Controller
{
  public function index()
  {
    $roles = Role::latest()->get();
    return response()->json(['success' => true, 'data' => $roles]);
  }

  public function getAllPermissions()
  {
    $permissions = config('permissions');
    return response()->json(['success' => true, 'data' => $permissions]);
  }

  public function store(Request $request)
  {
    if (auth('apiAdmin')->user()->cannot('roles-add')) return response()->json(['success' => false, 'message' => 'You are not authorized.']);
    $request->validate([
      'name' => 'required|max:50',
      'permissions' => 'required|array|min:1'
    ]);

    Role::create([
      'name' => $request->name,
      'permissions' => $request->permissions
    ]);

    return response()->json(['success' => true, 'message' => 'Role successfully added.']);
  }

  public function update($id, Request $request)
  {
    if (auth('apiAdmin')->user()->cannot('roles-edit')) return response()->json(['success' => false, 'message' => 'You are not authorized.']);
    $request->validate([
      'name' => 'required|max:50',
      'permissions' => 'required|array|min:1'
    ]);

    $role = Role::find($id);
    $role->update([
      'name' => $request->name,
      'permissions' => $request->permissions
    ]);

    return response()->json(['success' => true, 'message' => 'Role successfully added.']);
  }

  public function show($id)
  {
    $role = Role::findOrFail($id);
    return response()->json(['success' => true, 'data' => $role]);
  }
  public function destroy($id)
  {
    if (auth('apiAdmin')->user()->cannot('roles-dekete')) return response()->json(['success' => false, 'message' => 'You are not authorized.']);
    $role = Role::find($id)->delete();
    return response()->json(['success' => true, 'message' => 'Role successfully deleted.']);
  }
}
