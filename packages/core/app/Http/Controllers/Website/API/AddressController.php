<?php

namespace Jed\Core\Http\Controllers\Website\API;

use App\Http\Controllers\Controller;
use Jed\Core\App\Province;

class AddressController extends Controller
{

    public function getAdddressJson()
    {
        $provinces = Province::with('districts:name,id,province_id')->get();
        return response()->json(['success' => true, 'data' => $provinces]);
    }
}
