<?php

namespace Jed\Core\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function signInUser(Request $request, $authType)
    {
        $guard = '';
        if ($authType) {
            $guard = 'api' . ucwords($authType);
        }
      // switch ($authType) {
      //   case 'admin':
      //     $guard = 'apiAdmin';
      //     break;
      //   default:
      //     $guard = '';
      // }

        if (!$token = auth($guard)->attempt($request->only('email', 'password'))) {
            return response(['error' => 'Unauthorized']);
        }

        return response()->json([
        'accessToken' => $token,
        'userData' => auth($guard)->user()
        ]);
    }

    public function refreshToken()
    {
    }
}
