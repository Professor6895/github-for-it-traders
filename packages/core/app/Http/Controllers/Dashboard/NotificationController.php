<?php

namespace Jed\Core\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class NotificationController extends Controller
{
  public function getNotifications(Request $request) {
    $guard = '';
    if($request->has('guard')) {
      $guard = 'api'.ucwords($request->guard);
    }
    if(!auth($guard)->check()) {
      return response()->json(['message' => 'Unauthenticated']);
    }
    $user = auth($guard)->user();
    $unread_notifications = $user->unreadNotifications->count();
    $notifications = $user->notifications()->limit(20)->get();
    return response()->json(['unread_notifications' => $unread_notifications, 'notifications' => $notifications]);
  }   

  public function markAsRead(Request $request) {
    $guard = '';
    if($request->has('guard')) {
      $guard = 'api'.ucwords($request->guard);
    }
    if(!auth($guard)->check()) {
      return response()->json(['message' => 'Unauthenticated']);
    }
    $user = auth($guard)->user();
    $user->unreadNotifications->markAsRead();
    return response()->json(['success' => true]);
  }
}
