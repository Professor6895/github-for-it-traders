<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Ecommerce\App\Vendor;
use Jed\Ecommerce\Cart\OrderItem;
use Jed\Ecommerce\Cart\VendorCategory;

class WarrantyController extends Controller
{
    public function getWarrentyCheck(Request $request) 
    {
        if (!auth('web')->check()) {
            abort(404);
        }

        if ($request->has('serial')) {
            $order_item_detail = OrderItem::with('order')->where('warranty_token', $request->serial)->first();
            if ($order_item_detail->order->user_id != auth()->user('web')->id) {
                abort(404);
            }

            return view(resolveView('ecommerce::website.warranty.warranty-check'), compact('order_item_detail'));
        }
        return view(resolveView('ecommerce::website.warranty.warranty-check'));
    }
}
