<?php

namespace Jed\Ecommerce\Helpers;

use Jed\Ecommerce\Cart\Cart;

class CartHelper
{
public function checkCouponAvailability($coupon, $course_id)
  {
    $user = auth('web')->user();
    if ($coupon->usage_per_user) {
      $usage_count = Cart::where(['user_id' => $user->id, 'discount_coupon' => $coupon->code])->count();
      if($usage_count >= $coupon->usage_per_user) {
        return ['success' => false, 'message' => 'Coupon already used.'];
      }
    }

    return ['success' => true];
  }
}
