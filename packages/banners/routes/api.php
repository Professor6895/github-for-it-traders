<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin', 'middleware' => 'auth:apiAdmin'], function () {
    Route::resource('banners', 'Dashboard\BannerController')->except(['craete', 'edit']);

    Route::resource('banner/{banner_id}/images', 'Dashboard\BannerImageController')->except(['create', 'edit']);
    Route::post('/banner/{banner_id}/images/sort-images', 'Dashboard\BannerImageController@sortImages');
});
