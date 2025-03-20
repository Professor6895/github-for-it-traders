<?php

namespace Jed\Core\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Jed\Core\App\User;

class UsersController extends Controller
{
  public function index()
  {
    $users = User::latest()->get();
    return response()->json(['success' => true, 'data' => $users]);
  }
}
