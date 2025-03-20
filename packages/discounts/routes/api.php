<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin', 'middleware' => 'auth:apiAdmin'], function () {
  Route::resource('coupon-discounts', 'Dashboard\CouponDiscountController')->except(['craete', 'edit']);
});
