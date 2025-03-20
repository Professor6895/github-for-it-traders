<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin', 'middleware' => 'auth:apiAdmin'], function () {
  Route::resource('pages', 'Dashboard\PagesController')->except(['craete', 'edit']);
  Route::resource('page/{page_id}/sections', 'Dashboard\PageSectionsController')->except(['craete', 'edit']);

});
