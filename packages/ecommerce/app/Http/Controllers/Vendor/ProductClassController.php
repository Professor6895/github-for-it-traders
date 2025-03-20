<?php

namespace Jed\Ecommerce\Http\Controllers\Vendor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Ecommerce\App\AttributeClass;

class ProductClassController extends Controller
{

    public function getDropdown(Request $request)
    {
        $classes_ = AttributeClass::select('id', 'name');
        if ($request->has('attributes') && $request->attributes == true) {
            $classes_ = $classes_->with('attributes');
        }
        $classes_ = $classes_->get();
        return response()->json(['success' => true, 'data' => $classes_]);
    }
}
