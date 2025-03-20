<?php

namespace Jed\Core\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Jed\Core\Http\Traits\Website\MetaTrait;

class HomeController extends Controller
{
    use MetaTrait;

    public function index()
    {
        $this->defaultMeta();
        return view(resolveView('core::website.home'));
    }
}
