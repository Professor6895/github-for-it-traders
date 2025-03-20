<?php

namespace Jed\Core\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Jed\Core\App\Admin;
use Jed\Core\App\Role;
use Jed\Core\Notifications\AdminCreated;

/**
 * AdminUserController
 */
class AdminUserController extends Controller
{
  /**
   * index
   *
   * @return void
   */
    public function index()
    {
        $users = Admin::latest()->get();
        return response()->json(['success' => true, 'data' => $users]);
    }

    public function store(Request $request)
    {
        if (auth('apiAdmin')->user()->cannot('admins-add')) {
            return response()->json(['success' => false, 'message' => 'You are not authorized.']);
        }
        $this->validate($request, [
        'name' => 'required',
        'email' => 'required|email|unique:admins',
        'role_id' => 'required'
        ]);

        $password = mb_substr(md5(rand(10000, 1000000)), 0, 10);
        $admin = Admin::create([
        'name' => $request->name,
        'email' => $request->email,
        'role_id' => $request->role_id,
        'password' => bcrypt($password)
        ]);

        $admin->notify(new AdminCreated($admin, $password));
        return response()->json(['success' => true, 'message' => 'Admin successfully created.']);
    }

    public function show($id)
    {
        $admin = Admin::findOrFail($id);
        return response()->json(['success' => true, 'data' => $admin]);
    }

    public function update($id, Request $request)
    {
        if (auth('apiAdmin')->user()->cannot('admins-edit')) {
            return response()->json(['success' => false, 'message' => 'You are not authorized.']);
        }

        $this->validate($request, [
        'name' => 'required',
        'email' => ['required', Rule::unique('admins')->ignore($id)]
        ]);

        $admin = Admin::find($id);
        $admin->update([
        'name' => $request->name,
        'email' => $request->email
        ]);
        return response()->json(['success' => true, 'message' => 'Details successfully updated.']);
    }

    public function destroy($id)
    {
        $admin = Admin::find($id);
        $admin->delete();
        return response()->json(['success' => true, 'message' => 'User deleted successfully']);
    }

    public function getUserRoles()
    {
        $roles = Role::select('id', 'name')->get();
        return response()->json(['success' => true, 'data' => $roles]);
    }
}
