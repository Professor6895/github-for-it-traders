<?php

namespace Jed\Ecommerce\Http\Controllers\Website\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Ecommerce\App\Helpers\ProductHelper;
use Jed\Ecommerce\Cart\Cart;
use Jed\Ecommerce\Cart\CartItem;
use Jed\Ecommerce\Cart\ShippingCharge;
use Jed\Ecommerce\Cart\UserShippingAddress;

class CartController extends Controller
{
    public function __construct(ProductHelper $productHelper)
    {
        $this->productHelper = $productHelper;
    }

    public function getCustomerCart()
    {
        $cart = Cart::getCart();
        $cart_items = $cart->items;
        $cart_total = $cart_items->sum(function($product) {
            return $product->price * $product->quantity;
        });

        return response()->json([
            'success' => true,
            'cart' => $cart,
            'cart_items' => $cart_items,
            'cart_total' => $cart_total
        ]);
    }

    public function addTocart(Request $request)
    {
        $data = $request->all();
        if ($data['quantity'] > 10 || $data['quantity'] < 1) {
            return response()->json(['success' => false, 'message' => 'Quantity must be between 1 and 10']);
        }
        $availability = $this->productHelper->checkProductAvailability($data);
        if (!$availability['status']) {
            return response()->json(['success' => false, 'message' => $availability['message']]);
        }
        $cart = Cart::getCart();
        $cart->addProduct($data);

        return response()->json(['success' => true, 'message' => "Product added to cart"]);
    }

    public function applyShippingAddress(Request $request) {
        $cart = Cart::getCart();
        $shipping_address_id =$request->address_id;
        $shipping_address = UserShippingAddress::find($shipping_address_id);
        $shipping_charge = ShippingCharge::where('district', $shipping_address->district)->first();
        if(!$shipping_charge) {
            $shipping_charge = ShippingCharge::where('district', 'default')->first();
        }
        $cart->update([
            'shipping_address_id' => $shipping_address_id,
            'shipping_cost' => $shipping_charge->shipping_charge
        ]);
        session()->flash('message', 'Shipping Address Applied.');
        return response()->json(['success' => true, 'message' => "Shipping Address Applied."]);
    }

    public function removeCartItem(Request $request)
    {
        $item = CartItem::where(['id' => $request->cart_item_id])->delete();
        session()->flash('message', 'Product removed from cart successfully.');
        return response()->json(['success' => true]);
    }
}
