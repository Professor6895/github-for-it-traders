<?php

namespace Jed\PaymentMethod\App\Helpers;

use Jed\PaymentMethod\App\PaymentMethod;

class PaymentMethodsHelper
{
  public function getPaymentMethods()
  {
    $methods = PaymentMethod::where('status', 1)->get();
    return $methods;
  }
}
