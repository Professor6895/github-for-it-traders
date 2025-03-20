<?php

namespace Jed\Ecommerce\Http\Controllers\Vendor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Ecommerce\Cart\Order;
use Jed\Ecommerce\Mail\OrderUpdatedMail;
use Exception;
use Jed\Ecommerce\App\PreOrder;
use Jed\Ecommerce\Cart\OrderItem;

class OrdersController extends Controller
{
    use ControllerTrait;

    public function __construct()
    {
        $this->vendor = auth('apiVendor')->user();
    }

    public function getOrders()
    {
        $orders = OrderItem::with('order', 'order.user:id,name,email,avatar,contact_number')->where('vendor_id', $this->vendor->id)->get()->pluck('order');
        return response()->json(['success' => true, 'data' => $orders]);
    }

    public function getPreOrders()
    {
        $orders = PreOrder::with('user:id,name,email,avatar,contact_number', 'product')->latest()->paginate(env('ADMIN_PER_PAGE_PAGINATION', 10));
        return response()->json(['success' => true, 'data' => $orders]);
    }

    public function getOrderItems($id)
    {
        $order_items = OrderItem::with('product:id,name,slug,sku')
            ->where(['order_id' => $id, 'vendor_id' => $this->vendor->id])->get();
        return response()->json(['success' => true, 'data' => $order_items]);
    }

    public function getPreOrderDetail($id)
    {
        $order = PreOrder::with('user:id,name,email,avatar,contact_number', 'product')->findOrFail($id);
        return response()->json(['success' => true, 'data' => $order]);
    }

    public function updateOrderStatus($order_id, Request $request)
    {
        $order = Order::find($order_id);
        $order->update([
            'status' => $request->status
        ]);

        if ($request->status !== 1 && isTrue($request->notify_user)) {
            if (isTrue($request->notify_via_email) && $order->user && $order->user->email) {
                try {
                    Mail::to($order->user->email)->send(new OrderUpdatedMail($order));
                } catch (Exception $e) {
                    // return response()->json(['success' => false, 'message' => $e->getMessage()]);
                }
            }
            if (isTrue($request->notify_via_sms) && $order->user && $order->user->contact_number) {
                if (function_exists('sendOrderSMS')) { //MAKE SURE THE FUNCTION SET ON OUTER HELPER FUNCTION
                    sendOrderSMS($order);
                }
            }
        }

        return response()->json(['success' => true, 'message' => "Order details successfully updated"]);
    }
}
