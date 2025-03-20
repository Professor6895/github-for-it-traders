<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin', 'middleware' => 'auth:apiAdmin'], function () {
    Route::patch('blogs/{id}/toggle-status', 'Dashboard\BlogController@toggleBlogStatus');
    Route::patch('blogs/{id}/toggle-feature', 'Dashboard\BlogController@toggleBlogFeature');
    Route::resource('blogs', 'Dashboard\BlogController')->except(['craete', 'edit']);

    Route::get('/blog-categories/get-dropdown', 'Dashboard\BlogCategoryController@getCategoriesForDropdown');
    Route::resource('blog-categories', 'Dashboard\BlogCategoryController')->except(['craete', 'edit']);
});
