<?php

namespace Jed\Ecommerce\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use CyrildeWit\EloquentViewable\Support\Period;
use Jed\Core\App\User;
use Jed\Ecommerce\App\Product;
use Jed\Ecommerce\Cart\Order;

class DashboardController extends Controller
{
    public function getDashboardData() {
        $products_count = Product::enabled()->count();
        $orders_count = Order::where('status', '<>', 0)->count();
        $completed_orders = Order::where('status', Order::STATUS_COMPLETED)->get();
        $total_earnings = $completed_orders->sum('total');
        $most_viewd_products = Product::orderByViews('desc', Period::pastDays(7))->limit(6)->get();
        $new_registrations = User::latest()->limit(7)->get();
        $orders = Order::with('user:id,name,avatar')->latest()->limit(6)->get();
        $result = [
            'products_count' => $products_count, 
            'orders_count' => $orders_count,
            'total_revenue' => $total_earnings,
            'most_viewd_products' => $most_viewd_products,
            'new_registrations' => $new_registrations,
            'orders' => $orders
        ];
        return response()->json(['success' => true, 'data' => $result]);
    }
}
