<?php

namespace Jed\Core\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Jed\Core\App\Admin;

class ProfileController extends Controller
{
 protected $admin;
 public function __construct()
 {
  $this->admin = auth('apiAdmin')->user();
 }
 public function updateProfile(Request $request)
 {
  $this->validate($request, [
   'email' => 'required|unique:artists,email,' . $this->admin->id
  ]);
  $admin = Admin::find($this->admin->id);
  $admin->update([
   'name' => $request->name,
   'email' => $request->email,

  ]);
  $admin->refresh();
  return response()->json(['success' => true, 'userInfo' => $admin, 'message' => 'Profile successfully updated']);
 }

 public function updateSecurity(Request $request)
 {
   $this->validate($request, [
     'current_password' => 'required',
     'new_password' => [
       'required',
       'string',
       'min:8',             // must be at least 10 characters in length
       'regex:/[0-9]/',      // must contain at least one digit
       'regex:/[@$!%*#?&]/', // must contain a special character
     ],
     'confirm_password' => 'required|same:new_password'
   ], [
     'new_password.regex' => 'Password must contain at least one digit and one special character'
   ]);


   if (!Hash::check($request->current_password, $this->admin->password)) {
     $error = \Illuminate\Validation\ValidationException::withMessages([
       'current_password' => ['Invalid current password.'],
     ]);
     throw $error;
   } else {
     $this->admin->update([
       'password' => bcrypt($request->new_password),
       'password_changed' => 1
     ]);
   }

   return response()->json(['success' => true, 'message' => 'Security detail successfully updated.']);
 }

 public function refreshAuthUser() {
   $user = $this->admin->refresh();
   return response()->json(['success' => true, 'data' => $user]);
 }
}
