<?php

namespace Jed\PaymentMethod\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\PaymentMethod\App\PaymentMethod;

class PaymentMethodController extends Controller
{
  use ControllerTrait;

  public function index() {
    $payment_methods = PaymentMethod::all();
    return response()->json(['success' => true, 'data' => $payment_methods]);
  }

  public function update($id, Request $request) {

    $config = $request->config;
    $payment_method = PaymentMethod::find($id);
    $payment_method->update([
      'config' => json_encode($config),
      'test_mode' => $this->isTrue($request->test_mode) ? 1: 0,
      'status' => $this->isTrue($request->status) ? 1:0
    ]);

    return response()->json(['success' => true, 'message' => 'Payment method config updated successfully']);
  }
}
