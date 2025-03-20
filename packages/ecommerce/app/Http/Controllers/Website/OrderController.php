<?php

namespace Jed\Ecommerce\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Jed\Core\Http\Traits\Website\NotificationTrait;
use Jed\Ecommerce\Cart\Cart;
use Jed\Ecommerce\Cart\Order;
use Jed\Ecommerce\Cart\OrderItem;
use Jed\Ecommerce\Notifications\OrderPlacedNotification;
use Jed\PaymentMethod\Http\Controllers\PaymentControllerTrait;
use Illuminate\Support\Facades\Auth;
class OrderController extends Controller
{
    use PaymentControllerTrait;
    use NotificationTrait;

    public function processOrder(Request $request)
    {
        $cart = Cart::getCart();
        $payment_method = $request->payment_method;

        $order_data = [
          'shipping_address_id' => $cart->shipping_address_id,
          'payment_type' => $request->payment_method,
          'status' => Order::STATUS_DRAFT,
          'cart_id' => $cart->id,
          'user_id' => auth('web')->user()->id,
          'order_total' => $cart->getCartItemTotal(),
          'total' => $cart->getCartTotal(),
          'discount_coupon' => $cart->discount_coupon,
          'shipping_cost' => $cart->shipping_cost
        ];
        $order = Order::where(['cart_id' => $cart->id, 'user_id' => auth('web')->user()->id])->first();
        if (!$order) {
            $order = Order::create($order_data);
        } else {
            $order->update($order_data);
        }
        if ($request->payment_method == 'khalti') {
            return response()->json(['success' => true, 'order' => $order, 'cart_items' => $cart->items]);
        }

        if ($payment_method !== 'cash_on_delivery') {
            $payment_data = $this->preparePaymentData($cart, $payment_method);
            $payment_method_ = ucwords($payment_method);
            $function = "process{$payment_method_}";
            return $this->$function($payment_data, $request);
        } else {
            $this->processCartOrder();
            return redirect()->route('website.cart-order-completed', ['order_id' =>  $order->id]);
        }
    }

    public function preparePaymentData($cart, $payment_method)
    {
        $data = [
            'amount_in_dollar' => $cart->getCartItemTotal(),
            'amount' => $cart->getCartItemTotal(),
            'transactionId' => 'U-' . auth('web')->user()->id . '-CART-' . $cart->id,
            'cancelUrl' => route('website.cart-payment.completed', ['status' => 'fail', 'payment_method' => $payment_method]),
            'returnUrl' => route('website.cart-payment.completed', ['status' => 'pass', 'payment_method' => $payment_method]),
        ];

        return $data;
    }
 
public function paymentCompletedNicasia(Request $request)
    {
 
if($_REQUEST['decision']=='ACCEPT'){
    //dd($_REQUEST);
// $payment_method = 'nicasia'; 
// $cart = Cart::getCart();
//$order = $this->processCartOrder();
// $user_id = auth('web')->user()->id;
      //  $orders =  Order::where('user_id', $user_id)->get();
    return $this->processNicCartOrder();
// if ($request->wantsJson()) {
//     return response()->json(['success' => true, 'order' => $order]);
// }
// return redirect()->route('website.cart-order-completed', ['order_id' =>  $order->id]);
}
else
{

  return redirect()->back()->with('error', 'Payment Failed. Please Retry!!');
}
  

    }

    public function paymentCompleted(Request $request)
    {
        $status = $request->status;
        if ($status === 'fail') {
            return redirect()->back()->with('error', 'Payment Failed. Please Retry!!');
        }
        $payment_method = ucwords($request->payment_method);
        $cart = Cart::getCart();
        $function = "verify{$payment_method}";
        $data = $this->preparePaymentData($cart, $payment_method);
        $success = $this->$function($data, $request);

        if ($success['status']) {
            $order = $this->processCartOrder();
            if ($request->wantsJson()) {
                return response()->json(['success' => true, 'order' => $order]);
            }
            return redirect()->route('website.cart-order-completed', ['order_id' =>  $order->id]);
        }

        if ($request->wantsJson()) {
            session()->flash('error', 'The payment has been declined.');
            return response()->json(['success' => false]);
        }

        return redirect()->back()->with('error', 'The payment has been declined.');
    }
public function processNicCartOrder()
    {
        $cart = Cart::getCart();
        $order = Order::where(['cart_id' => $cart->id, 'user_id' => 10016])->first();
        if (!$order) {
            return redirect()->route('website.cart-checkout')->with('error', "Something went wrong while processing order. Please retry!!");
        }

        foreach ($cart->items as $cart_item) {
            $order_item =  $cart_item->prepareOrderItem();
            $order_item['order_id'] = $order->id;
            $product = $cart_item->product;
            if ($cart_item->product_attributes) {
                $variant = $cart_item->variant();
                if (!$variant) {
                    return redirect()->route('website.cart-checkout')->with('error', "Some of the cart item(s) are not available. Please recheck your cart items.");
                }

                $variant->update([
                  'quantity' => $variant->quantity - $cart_item->quantity
                ]);
            }

            $product->update([
              'quantity' => $product->quantity - $cart_item->quantity
            ]);
            OrderItem::create($order_item);
        }

        $order_data = [
          'invoice_number' => env('ECOMMERCE_ORDER_PREFIX', '') . $order->id,
          'status' => Order::STATUS_PLACED
        ];
        $order->update($order_data);
        try {
            $this->notifyAdmins(new OrderPlacedNotification($order, 'database'));
            //auth('web')->user()->notify(new OrderPlacedNotification($order, 'mail'));
        } catch (Exception $e) {
        }
        $cart->markAsDone();
        return redirect()->route('website.cart-order-completed', ['order_id' =>  $order->id]);
    }


    public function processCartOrder()
    {
        $cart = Cart::getCart();
        $order = Order::where(['cart_id' => $cart->id, 'user_id' => auth('web')->user()->id])->first();
        if (!$order) {
            return redirect()->route('website.cart-checkout')->with('error', "Something went wrong while processing order. Please retry!!");
        }

        foreach ($cart->items as $cart_item) {
            $order_item =  $cart_item->prepareOrderItem();
            $order_item['order_id'] = $order->id;
            $product = $cart_item->product;
            if ($cart_item->product_attributes) {
                $variant = $cart_item->variant();
                if (!$variant) {
                    return redirect()->route('website.cart-checkout')->with('error', "Some of the cart item(s) are not available. Please recheck your cart items.");
                }

                $variant->update([
                  'quantity' => $variant->quantity - $cart_item->quantity
                ]);
            }

            $product->update([
              'quantity' => $product->quantity - $cart_item->quantity
            ]);
            OrderItem::create($order_item);
        }

        $order_data = [
          'invoice_number' => env('ECOMMERCE_ORDER_PREFIX', '') . $order->id,
          'status' => Order::STATUS_PLACED
        ];
        $order->update($order_data);
        try {
            $this->notifyAdmins(new OrderPlacedNotification($order, 'database'));
            auth('web')->user()->notify(new OrderPlacedNotification($order, 'mail'));
        } catch (Exception $e) {
        }
        $cart->markAsDone();
        return $order;
    }

    public function orderCompleted(Request $request)
    {
        if (!$request->has('order_id')) {
            abort(404);
        }

        $order = Order::findOrFail($request->order_id);
        if ($order->user_id !== auth('web')->user()->id) {
            abort(404);
        }

        return view(resolveView('ecommerce::website.order-completed'), compact('order'));
    }

    public function getUserOrderList()
    {
        $user_id = auth('web')->user()->id;
        $orders =  Order::where('user_id', $user_id)->get();
        return view(resolveView('ecommerce::website.profile.orders-list'), compact('orders'));
    }

    public function getUserOrderDetail(Request $request)
    {
        if (!$request->has('invoice_number')) {
            abort(404);
        }
        $user_id = auth('web')->user()->id;
        $order = Order::with('user:id,name,email,avatar,contact_number', 'shippingAddress.provinceDetail', 'items.product:id,name,slug,sku')
            ->where(['user_id' => $user_id, 'invoice_number' => $request->invoice_number])
            ->firstOrFail();

        return view(resolveView('ecommerce::website.profile.order-detail'), compact('order'));
    }
}
