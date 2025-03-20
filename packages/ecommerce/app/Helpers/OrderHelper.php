<?php

namespace Jed\Ecommerce\App\Helpers;

class OrderHelper
{
    public function generateOrderMessageForUser($order)
    {
        $ecommerce_settings = settings()['ecommerce'];
        $message_index = "order_" . strtolower($order->order_status) . "_message";
        $message_template = $ecommerce_settings[$message_index];
        $message = str_replace('{user_name}', $order->user->name, $message_template);
        $message = str_replace('{order_id}', $order->invoice_number, $message);
        $message = str_replace('{order_total}', $order->total, $message);
        $message = str_replace('{order_url}', route('website.user-profile.order-detail', ['invoice_number' => $order->invoice_number]), $message);
        return $message;
    }
}
