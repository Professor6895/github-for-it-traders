<?php

namespace Jed\Core\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Jed\Blogs\App\Blog;
use Jed\Core\App\Contact;
use Jed\Core\App\User;
use Jed\Pages\App\Page;

class DashboardController extends Controller
{
 public function getDashboardData()
 { 
  $result = [];
  $modules = applicationModules();
  if(in_array('pages', $modules)) {
   $result['total_pages'] = Page::count();
  }
  if (in_array('blogs', $modules)) {
    $result['total_blogs'] = Blog::count();
  }
  $result['new_contacts'] = Contact::where('reply', null)->count();
  $result['total_users'] = User::count();
  return response()->json(['success' => true, 'data' => $result]);
 }
}
