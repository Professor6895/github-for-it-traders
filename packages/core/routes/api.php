<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'auth'], function () {
    Route::post('/{userType}/signIn', 'Dashboard\AuthController@signInUser');
});


Route::get('/settings/application-settings', 'Dashboard\SettingsController@getSettings');

//NOTIFICATIONS
Route::get('/dashboard/notifications', 'Dashboard\NotificationController@getNotifications');
Route::post('/dashboard/notifications/mark-as-read', 'Dashboard\NotificationController@markAsRead');

Route::group(['prefix' => 'admin', 'middleware' => 'auth:apiAdmin'], function () {
  //Dashboard Data
    Route::get('/dashboard-data', 'Dashboard\DashboardController@getDashboardData');

  //MEDIA
  Route::post('/media/update-image-alt', 'Dashboard\MediaController@updateImageAlt');

  //USER MANAGEMENT
    Route::get('/admin-users/user-roles', 'Dashboard\AdminUserController@getUserRoles');

    Route::resource('admin-users', 'Dashboard\AdminUserController');
    Route::resource('users', 'Dashboard\UsersController')->except(['show', 'create', 'edit']);

  //ROLES
    Route::get('/user-roles/all-permissions', 'Dashboard\RolesController@getAllPermissions');
    Route::resource('user-roles', 'Dashboard\RolesController')->except(['create', 'edit']);
  //SETTINGS
    Route::patch('/settings/{module}/update-settings', 'Dashboard\SettingsController@saveModuleSetting');

  //CONTACTS
    Route::get('/contact-inquiries', 'Dashboard\ContactsController@getContacts');
    Route::get('/contact-inquiries/{id}/detail', 'Dashboard\ContactsController@getContactDetail');
    Route::post('/contact-inquiries/{id}/send-reply', 'Dashboard\ContactsController@sendReply');

  //ADDRESSING
    Route::get('/provinces', 'Dashboard\AddressController@getProvinces');
    Route::get('/districts', 'Dashboard\AddressController@getDistricts');

  //Profile
    Route::post('reload-user', 'Dashboard\ProfileController@refreshAuthUser');
    Route::patch('update-profile', 'Dashboard\ProfileController@updateProfile');
    Route::patch('update-security', 'Dashboard\ProfileController@updateSecurity');

    Route::resource('redirects', 'Dashboard\RedirectController');
});


Route::get('/local-addresses', 'Website\API\AddressController@getAdddressJson');
