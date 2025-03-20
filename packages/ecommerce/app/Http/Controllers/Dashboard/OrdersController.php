<?php

namespace Jed\Ecommerce\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Ecommerce\Cart\Order;
use Jed\Ecommerce\Mail\OrderUpdatedMail;
use Exception;
use Jed\Ecommerce\App\Exports\OrdersExport;
use Jed\Ecommerce\App\PreOrder;
use Jed\Ecommerce\Cart\OrderItem;
use Maatwebsite\Excel\Facades\Excel;

class OrdersController extends Controller
{
    use ControllerTrait;

    public function getOrders(Request $request)
    {
        $orders = $this->queryOrders($request);
        $orders = $orders->paginate(env('ADMIN_PER_PAGE_PAGINATION', 10));
        return response()->json(['success' => true, 'data' => $orders]);
    }

    public function queryOrders($request) {
        $orders = Order::with('user:id,name,email,avatar,contact_number')->where('status', '<>', Order::STATUS_DRAFT);
        $is_sorted = false;

        if ($request->has('sort')) {
            $sort = json_decode($request->sort, true);
            foreach($sort as $sort_key => $sort_as) {
                if ($sort_as != null) {
                    $is_sorted = true;
                    $orders = $orders->orderBy('orders.'.$sort_key, $sort_as);
                }
            }
        }

        $filters = json_decode($request->filters, true);
        if(isset($filters['date_range'])) {
            $date_range = $filters['date_range'];

            if (str_contains($filters['date_range'], 'to')) {
                $splited_date = explode('to', $filters['date_range']);
                $orders = $orders->whereBetween('orders.created_at', [trim($splited_date[0]), trim($splited_date[1])]);
            } else {
                $orders = $orders->whereDate('orders.created_at', $date_range);
            }
        }

        if (!$is_sorted) {
            $orders = $orders->orderBy('orders.created_at', 'desc');
        }
        if ($request->has('search') && !$this->isNull($request->search)) {
            $orders = $orders->join('users', 'orders.user_id', '=', 'users.id')->where('users.name', 'LIKE', "%{$request->search}%")->orWhere('orders.invoice_number', "{$request->search}");
        }

        return $orders;
    }

    public function getPreOrders()
    {
        $orders = PreOrder::with('user:id,name,email,avatar,contact_number', 'product')->latest()->paginate(env('ADMIN_PER_PAGE_PAGINATION', 10));
        return response()->json(['success' => true, 'data' => $orders]);
    }

    public function getOrderDetail($id)
    {
        $order = Order::with('user:id,name,email,avatar,contact_number', 'shippingAddress.provinceDetail', 'items.product:id,name,slug,sku')->findOrFail($id);
        return response()->json(['success' => true, 'data' => $order]);
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

    public function updateOrderItemWarrantySerial($order_item_id) {
        $order_item = OrderItem::find($order_item_id);
        $serial = rand(10000000, 10000000000);
        $order_item->update([
            'warranty_token' => $serial
        ]);
        return response()->json(['success' => true]);
    }

    public function exportOrders(Request $request) {
        $orders = $this->queryOrders($request)->get();
        ob_end_clean();
        ob_start();
        return Excel::download(new OrdersExport($orders), 'orders_export.xlsx');
    }
}
