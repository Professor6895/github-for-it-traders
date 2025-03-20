<?php

namespace Jed\Ecommerce\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Ecommerce\App\ProductBrand;
use Jed\Ecommerce\Cart\ShippingCharge;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ShippingChargeController extends Controller
{
    use ControllerTrait;

    public function index()
    {
        $shipping_charges = ShippingCharge::all();
        return response()->json(['success' => true, 'data' => $shipping_charges]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'district' => 'required',
            'shipping_charge' => 'required',
        ]);

        $check = ShippingCharge::where('district', $request->district)->count();
        if ($check) {
            return response()->json(['success' => false, 'message' => 'Shipping charge for '. $request->district. ' already exists']);
        }

        ShippingCharge::create([
            'district' => $request->district,
            'shipping_charge' => $request->shipping_charge
        ]);
     
        return response()->json(['success' => true, 'message' => 'Shipping charge successfully added.']);
    }

    public function update($id, Request $request)
    {
        $this->validate($request, [
            'district' => 'required',
            'shipping_charge' => 'required',
        ]);

        $shipping_charge = ShippingCharge::find($id);
        $shipping_charge->update([
            'district' => $request->district,
            'shipping_charge' => $request->shipping_charge
        ]);


        return response()->json(['success' => true, 'message' => 'Shipping charge successfully updated']);
    }

    public function destroy($id)
    {
        $shipping_charge = ShippingCharge::find($id);
        $shipping_charge->delete();
        return response()->json(['success' => true, 'message' => 'Shipping charge successfully deleted']);
    }
}
