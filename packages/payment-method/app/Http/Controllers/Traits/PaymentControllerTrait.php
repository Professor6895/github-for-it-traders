<?php

namespace Jed\PaymentMethod\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Http\Controllers\Nicasia;
use Jed\PaymentMethod\App\Helpers\PaymentMethods\Esewa;
use Jed\PaymentMethod\App\Helpers\PaymentMethods\Khalti;
use Jed\PaymentMethod\App\Helpers\PaymentMethods\PayPal;

trait PaymentControllerTrait
{
    public function processPaypal($data, Request $request)
    {
        $gateway = with(new PayPal);
        try {
            $response = $gateway->purchase([
                'amount' => $gateway->formatAmount($data['amount_in_dollar']),
                'transactionId' => $data['transactionId'],
                'currency' => 'USD',
                'cancelUrl' => $data['cancelUrl'],
                'returnUrl' => $data['returnUrl'],
            ], $request);
        } catch (Exception $e) {
            //TODO: Research on redirectable response ABORTING for NOW
            // abort(404);
            return redirect()
                ->back()
                ->with('error', sprintf("Your payment failed with error: %s", $e->getMessage()));
        }
        if ($response->isRedirect()) {
            $response->redirect();
        }

        return false;
    }

    public function verifyPaypal($data, Request $request)
    {
        $gateway = with(new PayPal);
        $response = $gateway->complete([
            'amount' => $gateway->formatAmount($data['amount_in_dollar']),
            'transactionId' => $data['transactionId'],
            'currency' => 'USD',
            'cancelUrl' => $data['cancelUrl'],
            'returnUrl' => $data['returnUrl'],
        ], $request);

        if ($response->isSuccessful()) {
            return [
                'status' => true,
                'transaction_code' => $response->getTransactionReference()
            ];
        }

        return [
            'status' => false,
        ];
    }


    public function processEsewa($data, Request $request)
    {
        $gateway = with(new Esewa);
        try {
            $response = $gateway->purchase([
                'amount' => $gateway->formatAmount($data['amount']),
                'totalAmount' => $gateway->formatAmount($data['amount']),
                'productCode' => $data['transactionId'],
                'failedUrl' =>  $data['cancelUrl'],
                'returnUrl' =>  $data['returnUrl'],
            ], $request);
        } catch (Exception $e) {
            return redirect()
                ->back()
                ->with('message', sprintf("Your payment failed with error: %s", $e->getMessage()));
        }
        if ($response->isRedirect()) {
            $response->redirect();
        }
        return false;
    }


    public function verifyEsewa($data, Request $request)
    {
        $gateway = with(new Esewa);
        $response = $gateway->verifyPayment([
            'amount' => $gateway->formatAmount($data['amount']),
            'referenceNumber' => $request->get('refId'),
            'productCode' => $request->get('oid'),
        ], $request);

        if ($response->isSuccessful()) {
            return [
                'status' => true,
                'transaction_code' => $request->get('refId')
            ];
        }

        return [
            'status' => false,
        ];
    }

    public function verifyKhalti($data, Request $request)
    {
        $args = http_build_query(array(
            'token' => $request->input('token'),
            'amount'  => $request->input('amount')
        ));
        $gateway = with(new Khalti);
        $response = $gateway->verifyPayment($args);
        return $response;
    }

    public function processNicasia($data, Request $request)
    {
 
        $gateway = with(new Nicasia);
         $order_id = $data['transactionId']; 
        $amount = $gateway->formatAmount($data['amount']); 
        $full_name = 'Ashish'; 
        $first_name='Ashish'; 
        $last_name = 'Ashish'; 
        $phone = '9849982369'; 
        $email = 'arsiosdhal@gmail.com'; 
        $address = 'N/A'; 
        $city = 'N/A'; 
        $country="NP";
        $currency="NPR"; 
      return view('nicasia.nicasia',compact('currency','order_id', 'amount', 'first_name', 'last_name', 'phone', 'email', 'address', 'city','country')); 
        
    }


    public function verifyNicasia($data, Request $request)
    {
        $gateway = with(new Nicasia);
       $response = $gateway->verifyPayment($args);
        return $response;
    }
}
