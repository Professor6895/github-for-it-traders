<?php

namespace Jed\PaymentMethod\App\Helpers\PaymentMethods;

use Jed\PaymentMethod\App\PaymentMethod;
use Omnipay\Omnipay;

/**
 * Class PayPal
 * @package App
 */
class PayPal
{
 /**
  * @return mixed
  */
 public function gateway()
 {

  $gateway = Omnipay::create('PayPal_Express');
  $paypal = PaymentMethod::where('slug', 'paypal')->first();
  $config = json_decode($paypal->config, true);
  $gateway->setUsername($config['username']);
  $gateway->setPassword($config['password']);
  $gateway->setSignature($config['signature']);
  $gateway->setTestMode($paypal->test_mode ? true : false);
  return $gateway;
 }

 /**
  * @param array $parameters
  * @return mixed
  */
 public function purchase(array $parameters)
 {
  $response = $this->gateway()
   ->purchase($parameters)
   ->send();

  return $response;
 }

 /**
  * @param array $parameters
  */
 public function complete(array $parameters)
 {
  $response = $this->gateway()
   ->completePurchase($parameters)
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
