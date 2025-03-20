<?php

namespace Jed\Core\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VueApplicationController extends Controller
{
    public function __invoke()
    {
        return view('core::vue_application');
    }
}
