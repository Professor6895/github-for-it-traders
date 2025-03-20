<?php

namespace Jed\Discounts\Helpers;

use Jed\Discounts\App\CouponDiscount;

class DiscountHelper
{
    public function calculateCouponDiscountedAmount($coupon_code, $initial_amount)
    {
        if (!$coupon_code) {
            return $initial_amount;
        }
        $discount = CouponDiscount::where(['code' => $coupon_code])->first();
        if (!$discount->is_active) {
            return $initial_amount;
        }
        if ($discount->discount_type == CouponDiscount::MONEY_VALUE_TYPE) {
            if ($discount->discount_value > $initial_amount) {
                return 0;
            }
            $discounted_amount = $initial_amount - $discount->discount_value;
        }

        if ($discount->discount_type == CouponDiscount::PERCENT_VALUE_TYPE) {
            $discounted_amount = $initial_amount - (($discount->discount_value / 100) * $initial_amount);
        }
        return $discounted_amount;
    }
}
