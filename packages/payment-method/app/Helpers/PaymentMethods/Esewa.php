<?php

namespace Jed\PaymentMethod\App\Helpers\PaymentMethods;

use Exception;
use Jed\PaymentMethod\App\PaymentMethod;
use Omnipay\Omnipay;

class Esewa
{
 /**
  * @return \SecureGateway
  */
 public function gateway()
 {
  $gateway = Omnipay::create('Esewa_Secure');
  $esewa = PaymentMethod::where('slug', 'esewa')->first();
  $config = json_decode($esewa->config, true);
  // dd($config);
  $gateway->setMerchantCode($config['merchant_code']);
  $gateway->setTestMode($esewa->test_mode ? true : false);
  return $gateway;
 }

 /**
  * @param array $parameters
  * @return $response
  */
 public function purchase(array $parameters)
 {
  try {
   $response = $this->gateway()
    ->purchase($parameters)
    ->send();
  } catch (Exception $e) {
   throw new Exception($e->getMessage());
  }

  return $response;
 }

 /**
  * @param array $parameters
  * @return $response
  */
 public function verifyPayment(array $parameters)
 {
  $response = $this->gateway()
   ->verifyPayment($parameters)
   ->send();

  return $response;
 }

 /**
  * @param $amount
  */
 public function formatAmount($amount)
 {
  return number_format($amount, 2, '.', '');
 }
}
