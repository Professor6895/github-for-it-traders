<?php

namespace Jed\Core\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Jed\Core\Http\Traits\ControllerTrait;

class ProfileController extends Controller
{
    use ControllerTrait;
    public function getUserProfile()
    {
        $user = auth('web')->user();
        return view(resolveView('core::website.profile.profile-details'), compact('user'));
    }

    public function updateUserProfile(Request $request)
    {
        $this->validate($request, [
        'name' => 'required',
        'email' => 'required|email',
        'contact_number' => 'required|numeric',
        'address' => 'required',
        'date_of_birth' => 'required|date',
        ]);

        $user = auth('web')->user();

        $user->update([
        'name' =>  $request->name,
        'email' =>  $request->email,
        'contact_number' =>  $request->contact_number,
        'address' =>  $request->address,
        'date_of_birth' =>  $request->date_of_birth
        ]);

        return redirect()->back()->with('message', 'Profile updated successfully.');
    }

    public function getUserSecurity()
    {
        $user = auth('web')->user();
        return view(resolveView('core::website.profile.security'), compact('user'));
    }

    public function updateUserSecurity(Request $request)
    {
        $rules = [
        'current_password' => 'required',
        'password' => 'required|min:8|confirmed',
        ];

        if ($request->has('current_password')) {
            $rules['current_password'] = 'required';
        }

        $this->validate($request, $rules);

        $user = auth('web')->user();
        if ($request->has('current_password')) {
            if (!Hash::check($request->current_password, $user->password)) {
                $error = \Illuminate\Validation\ValidationException::withMessages([
                'current_password' => ['Invalid current password.'],
                ]);
                throw $error;
            } else {
                $user->update([
                'password' => bcrypt($request->password),
                ]);
            }
        } else {
            $user->update([
            'password' => bcrypt($request->password),
            ]);
        }
        return redirect()->back()->with('message', 'Password successfully changed.');
    }

    public function updateUserAvatar(Request $request)
    {
        $this->validate($request, [
        'avatar' => 'required|mimes:png,jpg|max:1024'
        ], [
        'avatar.max' => "Avatar image may not be greater than 1 MB"
        ]);

        $user = auth('web')->user();
        $asset_path = "public/uploads/avatars/users/{$user->id}";
        if ($request->file('avatar')) {
            $response = $this->uploadImage($request->file('avatar'), $asset_path, true);
            if ($user->avatar) {
                $this->deleteFile($user->avatar, $asset_path);
            }
            $user->update([
            'avatar' => $response['file_name']
            ]);
        }

        return redirect()->back()->with('success', 'Avatar image successfully updated.');
    }
}
