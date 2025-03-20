<?php

namespace Jed\Ecommerce\Http\Controllers\Vendor;

use App\Http\Controllers\Controller;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Ecommerce\App\Product;
use Jed\Ecommerce\Cart\OrderItem;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->vendor = auth('apiVendor')->user();
    }

    public function getDashboardData()
    {
        $proudcts_count = Product::where(['vendor_id' => $this->vendor->id])->count();
        $order_items = OrderItem::with('order')->where('vendor_id', $this->vendor->id)->get();

        $order_count = $order_items->pluck('order')->count();
        $total_sale = $order_items->sum('product_price');

        return response()->json([
            'products_count' => $proudcts_count,
            'order_count' => $order_count,
            'total_sale' => $total_sale,
        ]);
    }
}
