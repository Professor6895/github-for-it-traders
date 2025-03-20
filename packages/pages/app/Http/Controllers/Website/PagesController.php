<?php

namespace Jed\Pages\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Jed\Core\Http\Traits\Website\MetaTrait;
use Jed\Pages\App\Page;

class PagesController extends Controller
{
  use MetaTrait;
  public function index($page_slug)
  {
    $page = Page::where('slug', $page_slug)->firstOrFail(); 
    $page->setMeta();

    if(view()->exists(resolveView('pages::website.custom.'.$page_slug))) {
      return view(resolveView('pages::website.custom.'.$page_slug), compact('page'));
    }
    return view(resolveView('pages::website.page'), compact('page'));
  }
}
