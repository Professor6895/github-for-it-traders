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
Route::get('/shop', 'Website\ProductController@getShop')->name('website.product-list');
Route::get('/404', function () {
    abort(404);
});
// Nic Asia Payment 
Route::POST('/nicasia/payment/confirmation', 'Nicasia@paymentConfirmation')->name('nicasia.paymentconfirmation');
Route::get('/nicasia/payment/cancel', 'Nicasia@getCancel')->name('nicasia.cancel');
// Route::get('/nicasiasuccess', 'Nicasia@paymentSuccess');
Route::post('/nicasiapaymentcancelled', 'Nicasia@paymentFailure');


Route::get('/product/{slug}', 'Website\ProductController@getProductDetail')->name('website.product-detail');
Route::get('/product/{slug}/apply-emi', 'Website\ProductController@getProductEmiApplication')
    ->name('website.product-detail.apply-emi');
Route::get('/ajax/product-detail/{id}/quick-view', 'Website\ProductController@renderProductQuickView');

Route::get('/emi-products', 'Website\ProductController@getEmiProducts');
// Route::get('/category/{keyword}', 'Website\PricePageController@getCategoryPrice')->where('keyword', '.*price-in-nepal');
Route::get('/category/{category_slug}', 'Website\ProductController@getProductCategory')->name('website.category-detail');
Route::get('/brand/{brand_slug}', 'Website\ProductController@getProductBrand')->name('website.brand-detail');
// Route::get('/brand/{keyword}', 'Website\PricePageController@getBrandPrice');
Route::get('/news-detail/{slug}', 'Website\NewsController@getNewsDetail');

//EMI CALCULATOR
Route::get('/emi-calculator', 'Website\EmiController@getEmiCalculator');
Route::get('/emi-calculator/render', 'Website\EmiController@renderEmiCalculator');
Route::post('/emi-calculator/calculate', 'Website\EmiController@calculateEMI');

//PRODUCT CATEGORIES
//AJAX FOR PRODUCT IMAGE
Route::get('/ajax/product/get-variant-image', 'Website\ProductController@getProductVariantImage');


//PRE ORDER
Route::get('/product/{slug}/pre-order', 'Website\ProductController@preOrderProduct');

//HOME PAGE LAZY ROUTES
Route::get('/ajax/home-content/home-banns/{slug}', 'Website\HomeController@getAdvertisementBanners')
    ->name('website.ajax.home-banns');
Route::get('/ajax/home-content/category/{slug}/products', 'Website\HomeController@getCategoryProducts')
    ->name('website.ajax.category-products');

    //VENDOR DASHBOARD

Route::get('/vendor-store/{slug}', 'Website\VendorController@getVendorDashboard')->name('website.vendor-dashboard');

//COMPARE
Route::post('/ajax/product/set-to-compare', 'Website\ProductController@setProductToCompare');
Route::post('/ajax/product/remove-from-compare', 'Website\ProductController@removeProductFromCompare');
Route::get('/compare-products', 'Website\ProductController@getCompareProducts');

// Route::get('/user-emi/{id}/pdf/update', function ($id) {
//     $emiRequest = EmiRequest::find($id);
//     if (!$emiRequest) {
//         return "NOT FOUND";
//     }
//         $emiHelper = new EmiHelper();
//         $emiHelper->generateEmiPdf($emiRequest);
//         return "PDF UPDATED";
// });


Route::get('pc-builder', 'Website\HomeController@pcBuilder');
Route::get('/api/pc-builder/get-products', 'Website\PCBuilderController@getProducts');
Route::post('/api/pc-builder/add-to-cart', 'Website\PCBuilderController@addProductsToCart');
// Route::get('pc-builder')

// Route::get('/discount-campaign/{slug}', 'Website\DiscountController@getDiscountCampaign')->name('website.discount-campaign');
// Route::get('/warranty-check', 'Website\WarrantyController@getWarrentyCheck')->name('website.warranty-check')->middleware('auth');

// Route::get('api/get-users', function() {
//    $users = User::paginate(500)->makeVisible(['password']);
//     return $users;
// });

// Route::get('show-phpinfo', function() {
// 	phpinfo();
// });
