<?php

namespace Jed\Core\Http\Controllers\Website\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Jed\Core\App\User;
use Laravel\Socialite\Facades\Socialite;

class SocialLoginController extends Controller
{
 protected $returnUrl = '/';
 public function redirectToProvider($provider)
 {
  return Socialite::driver($provider)->redirect();
 }

 /**
  * Obtain the user information from GitHub.
  *
  * @return \Illuminate\Http\Response
  */
 public function handleProviderCallback($provider)
 {
  try {
   $user = Socialite::driver($provider)->user();
   if ($user->getEmail()) {
    $auth_user = User::firstOrCreate([
     'email' => $user->getEmail()
    ]);
   } elseif ($user->getId()) {
    $auth_user = User::firstOrCreate([
     'social_id' => $user->getId()
    ]);
   } else {
    return redirect()->intended($this->returnUrl);
   }

   $auth_user->update([
    'name' => ($auth_user->name == '' || $auth_user->name == null) ? $user->getName() : $auth_user->name,
    'avatar' => ($auth_user->avatar == '' || $auth_user->avatar == null) ? $user->getAvatar() : $auth_user->avatar,
    'social_id' => $user->getId(),
    'social_platform' => $provider
   ]);
 
   $auth = Auth::loginUsingId($auth_user->id, true);
   if ($auth) {
    session()->flash('message', 'Successfully logged in');
    return redirect()->intended($this->returnUrl);
   } else {
    return redirect()->intended($this->returnUrl);
   }
  } catch (\Exception $e) {
   return redirect()->intended($this->returnUrl);
  }
 }
}
