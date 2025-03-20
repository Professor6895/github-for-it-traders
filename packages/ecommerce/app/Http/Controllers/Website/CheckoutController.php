<?php

namespace Jed\Ecommerce\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Jed\Ecommerce\Cart\Cart;
use Jed\Ecommerce\Cart\UserShippingAddress;

class CheckoutController extends Controller
{
    public function getCheckout()
    {
        $cart = Cart::getCart();
        if (!$cart->items->count()) {
            return redirect()->route('website.cart')->with('error', 'You don\'t have any items in your cart.');
        }
        $shipping_addresses = UserShippingAddress::where('user_id', auth('web')->user()->id)->get();
        return view(resolveView('ecommerce::website.checkout'), ['shipping_addresses' => $shipping_addresses, 'cart' => $cart]);
    }
}
