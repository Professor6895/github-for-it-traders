<?php
use Illuminate\Support\Facades\Route;
 

Route::group(['prefix' => 'admin', 'middleware' => 'auth:apiAdmin'], function () {
  //USER MANAGEMENT
  Route::get('get-import-modules', 'Dashboard\DataImportController@getImportModules');
});