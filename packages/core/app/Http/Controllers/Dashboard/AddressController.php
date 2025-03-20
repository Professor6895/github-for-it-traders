<?php

namespace Jed\Core\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Core\App\District;
use Jed\Core\App\Province;

class AddressController extends Controller
{
    public function getProvinces()
    {
        $provinces = Province::select('id', 'name')->get();
        return response()->json(['success' => true, 'provinces' => $provinces]);
    }

    public function getDistricts(Request $request)
    {
        $districts = District::select('id', 'name', 'province_id');

        if ($request->has('province_id')) {
            $districts = $districts->where('province_id', $request->province_id);
        }

        $districts = $districts->get();
        return response()->json(['success' => true, 'districts' => $districts]);
    }
}
