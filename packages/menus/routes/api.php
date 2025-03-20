<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin', 'middleware' => 'auth:apiAdmin'], function () {
  Route::resource('menus', 'Dashboard\MenuController')->except(['create', 'edit']);
});
