<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::prefix("admin")->group(function () {
//   Route::get('{any}', 'VueController@renderVuePage');
// });
 

Route::get('/admin/{any}', 'VueApplicationController')->where('any', '.*');


Route::get('/', 'Website\HomeController@index')->name('website.home');


// AUTH RELATED ROUTES
Route::get('/user-login', 'Website\Auth\LoginController@showLoginForm');
Route::post('/user-login', 'Website\Auth\LoginController@login')->name('website.user-login');
Route::get('/user-login/login-as/{id}/proceed', 'Website\Auth\LoginController@proceedLoginAs');

Route::get('/user/password/reset', 'Website\Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('/user/password/email', 'Website\Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('/user/password/reset/{token}', 'Website\Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('/user/password/reset', 'Website\Auth\ResetPasswordController@reset')->name('password.update');

// LOGIN VERIFICATION
Route::get('/email/verify', 'Website\Auth\VerificationController@show')->name('verification.notice');
Route::get('/email/verify/{id}/{hash}', 'Website\Auth\VerificationController@verify')->name('verification.verify');
Route::post('/email/resend', 'Website\Auth\VerificationController@resend')->name('verification.resend');
// Route::get('/email/verify', 'Website\Auth\VerificationController@show')->name('verification.notice');

//SOCIAL LOGIN
Route::get('/user/social-login/{provider}', 'Website\Auth\SocialLoginController@redirectToProvider')->name('website.user.social-login');
Route::get('/user/social-login/{provider}/callback', 'Website\Auth\SocialLoginController@handleProviderCallback');

// $this->post('logout', 'Website\Auth\LoginControllerr@logout')->name('logout');
Route::get('user-register', 'Website\Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('user-register', 'Website\Auth\RegisterController@register')->name('website.user-register');
Route::post('user-logout', 'Website\Auth\LoginController@logout')->name('website.user-logout');

Route::group(['prefix' =>'user-profile', 'middleware' => 'auth:web'], function () {
    Route::get('/details', 'Website\ProfileController@getUserProfile')->name('website.user-profile');
    Route::post('/details', 'Website\ProfileController@updateUserProfile')->name('website.user-profile.post');
    Route::post('/user/update-avatar', 'Website\ProfileController@updateUserAvatar')->name('website.user-avatar.post');

    Route::get('/security', 'Website\ProfileController@getUserSecurity')->name('website.user-security');
    Route::post('/security', 'Website\ProfileController@updateUserSecurity')->name('website.user-security.post');
});

Route::get('/contact-us', 'Website\ContactController@getContactForm')->name('website.contact-us');
Route::post('/contact-us', 'Website\ContactController@postContact')->name('website.contact-us-post');
// $this->get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
// $this->post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
// $this->get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
// $this->post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');

// $this->get('password/confirm', 'Auth\ConfirmPasswordController@showConfirmForm')->name('password.confirm');
// $this->post('password/confirm', 'Auth\ConfirmPasswordController@confirm');

// $this->get('email/verify', 'Auth\VerificationController@show')->name('verification.notice');
// $this->get('email/verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify');
// $this->post('email/resend', 'Auth\VerificationController@resend')->name('verification.resend');
