<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin', 'middleware' => 'auth:apiAdmin'], function () {
  // Route::resource('pages', 'Dashboard\PagesController')->except(['craete', 'edit']);

  // Route::get('/payment-methods/get-config', 'Dashboard\PaymentMethodController@getPaymentConfig');
  Route::resource('payment-methods', 'Dashboard\PaymentMethodController');
});
