<?php

namespace Jed\Ecommerce\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Discounts\App\CouponDiscount;
use Jed\Ecommerce\Cart\Cart;
use Jed\Ecommerce\Cart\CartItem;
use Jed\Ecommerce\Helpers\CartHelper;

class CartController extends Controller
{
    public function getCart()
    {
        $cart = Cart::getCart();
        return view(resolveView('ecommerce::website.cart'), compact('cart'));
    }

    public function removeCartItem(Request $request)
    {
        $item = CartItem::where(['cart_id' => $request->cart_id, 'id' => $request->cart_item_id])->delete();
        return redirect()->back();
    }

    public function updateCartItemQuantity(Request $request)
    {
        if ($request->quantity > 10 || $request->quantity < 1) {
            return redirect()->back()->with('error', 'Quantity must be between 1 and 10');
        }

        $cart_item = CartItem::where(['cart_id' => $request->cart_id, 'id' => $request->cart_item_id])->update([
            'quantity' => $request->quantity
        ]);
        return redirect()->back()->with('message', 'Product quantity updated.');
    }

    public function applyDiscountCoupon(Request $request) {
        if (!auth('web')->check()) {
            return redirect()->back()->with(['error' => "Please login first"]);
        }
        $coupon = CouponDiscount::where('code', $request->coupon)->first();
        if (!$coupon || !$coupon->is_active) {
            return redirect()->back()->with(['error' => 'Discount coupon not valid!']);
        }
        $coupon_status = with(new CartHelper)->checkCouponAvailability($coupon, $request->course_id);
        if (!$coupon_status['success']) {
            return redirect()->back()->with('error', $coupon_status['message']);
        }

        $cart = Cart::getCart();
        if($cart->getCartItemTotal() < $coupon->minimum_value) {
            return redirect()->back()->with('error', "Cart total must be at least Rs. ". $coupon->minimum_value);
        }
        if ($cart) {
            $cart->update([
            'discount_coupon' => $request->coupon
            ]);
        }

        return redirect()->back()->with('success', 'Discount coupon successfully applied.');
    }

    public function detachDiscountCoupon() {
        $cart = Cart::getCart();
        if ($cart) {
            $cart->update([
                'discount_coupon' => null
            ]);
        }

        return redirect()->back()->with('success', 'Discount coupon successfully detached.');
    }
}
