<?php

namespace Jed\Ecommerce\Http\Controllers\Website\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Ecommerce\Cart\UserShippingAddress;

class ShippingAddressController extends Controller
{
    public function saveShippingAddress(Request $request)
    {
        UserShippingAddress::create([
        'user_id' => auth('web')->user()->id,
        'first_name' => $request->first_name,
        'last_name' => $request->last_name,
         'contact_number' => $request->contact_number,
          'country' => "Nepal",
           'province' => $request->province,
            'district' => $request->district,
             'city' => $request->city,
              'landmark' => $request->landmark,
               'is_default' => 0
        ]);

        return response()->json(['success' => true, 'message' => 'Shipping address saved']);
    }

    public function removeShippingAddress($address_id)
    {
    }
}
