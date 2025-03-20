<?php

use Illuminate\Support\Facades\Route;

Route::get('/blogs', 'Website\BlogController@index')->name('website.blogs-list');
Route::get('/blog/{slug}', 'Website\BlogController@blogDetail')->name('website.blogs-detail');
Route::get('/blog-category/{slug}', 'Website\BlogController@getCategoryDetail')->name('website.blog-category-detail');
