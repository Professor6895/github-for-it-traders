<?php

use Jed\Ecommerce\App\Helpers\OrderHelper;

if (!function_exists('sendOrderSMS')) {
    function sendOrderSMS($order)
    {
        try {
            $order_helper = new OrderHelper();
            $message = $order_helper->generateOrderMessageForUser($order);

            $sms_settings = settings()['sms_settings'];
            $args = http_build_query(array(
            'auth_token' =>  $sms_settings['token'],
            'to'    => $order->user->contact_number,
            'text'  => $message));
            $url = $sms_settings['api_endpoint'];

            # Make the call using API.
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_POST, 1); ///
            curl_setopt($ch, CURLOPT_POSTFIELDS, $args);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            // Response
            $response = curl_exec($ch);

            curl_close($ch);
        } catch (Exception $e) {
            echo 'Message: ' . $e->getMessage();
        }
    }
}
