<?php

use Jed\Ecommerce\App\ProductCategory;
use Illuminate\Support\Facades\Route;

Route::get('/vendor/{any}', '\Jed\Core\Http\Controllers\VueApplicationController')->where('any', '.*');

Route::get('/system/load-google-categories', function () {
    $fh = fopen(__DIR__ . '/../resources/files/google-categories.txt', 'r');
    while ($category_line = fgets($fh)) {
        $category_txt =  str_replace("\n", '', explode('-', $category_line)[1]);

        $cat_exploded = explode('>', $category_txt);
        $this_category_key = array_key_last($cat_exploded);
        $parent_id = null;
        if ($this_category_key !== 0) {
            $parent_category_name = trim($cat_exploded[$this_category_key - 1]);
            $parent_category = ProductCategory::where('name', $parent_category_name)->first();
            if ($parent_category) {
                $parent_id = $parent_category->id;
            }
        }
        $category_name = trim($cat_exploded[$this_category_key]);
        ProductCategory::create([
            'name' => $category_name,
            'slug' => Str::slug($category_name),
            'parent_id' => $parent_id
        ]);
    }
    fclose($fh);
});

Route::get('/product/{slug}', 'Website\ProductController@index');
Route::get('/cart', 'Website\CartController@getCart')->name('website.cart');
Route::post('/cart/remove-cart-item', 'Website\CartController@removeCartItem')->name('website.remove-cart-item');
Route::post('/cart/update-cart-item-quantity', 'Website\CartController@updateCartItemQuantity')->name('website.update-cart-item-quantity');
// Route::get('/checkout', 'Website\CheckoutController@getCheckout')->name('website.update-cart-item-quantity')->middleware('auth:web');

//VENDOR REQUEST
Route::get('/vendor-request', 'Website\VendorController@vendorRequestForm')->name('website.vendor-request');
Route::post('/vendor-request', 'Website\VendorController@postRequestForm');
Route::post('/nicasiasuccess', 'Website\OrderController@paymentCompletedNicasia')->name('website.cart-payment.nicasia');
Route::group(['middleware' => ['auth:web']], function () {
    Route::get("/wishlist", 'Website\ProductController@userWishlist')->name('website.user-wishlist');


    Route::get('/checkout', 'Website\CheckoutController@getCheckout')->name('website.cart-checkout');
    Route::post('/process-order', 'Website\OrderController@processOrder')->name('website.process-cart-order');
    Route::get('/checkout/payment-completed', 'Website\OrderController@paymentCompleted')->name('website.cart-payment.completed');
    
    Route::get('/order-completed', 'Website\OrderController@orderCompleted')->name('website.cart-order-completed');
    Route::view('user-profile/address-book', resolveView('ecommerce::website.profile.address-book'))->name('website.user-profile.address-book');
    Route::get('user-profile/orders', 'Website\OrderController@getUserOrderList')->name('website.user-profile.orders-list');
    Route::get('user-profile/order-detail', 'Website\OrderController@getUserOrderDetail')->name('website.user-profile.order-detail');

    //PRODUCT REVIEW
    Route::post('/product/store-review', 'Website\ProductReviewController@storeReview')
        ->name('website.product-review.store-review');
    Route::get('/product/{product_id}/get-user-review', 'Website\ProductReviewController@getUserReview');



    Route::post('/cart/apply-discount-coupon', 'Website\CartController@applyDiscountCoupon')->name('website.apply-cart-discount-coupon');
    Route::post('/cart/detach-discount-coupon', 'Website\CartController@detachDiscountCoupon')->name('website.detach-cart-discount-coupon');
    //PREORDER
    Route::post('/pre-order/apply', 'Website\PreOrderController@applyPreOrder')->name('website.pre-order.apply');
});
// API ROUTES
Route::prefix('api')->group(function () {
    Route::get('/get-products', 'Website\API\ProductController@getProducts');
    Route::post('/product/{product_id}/get-variation-price', 'Website\API\ProductController@getVariationPrice');
    Route::get('/product-category/get-all', 'Website\API\ProductCategoryController@getAllCategories');
    Route::post('/product/add-to-cart', 'Website\API\CartController@addToCart');
    Route::post('/product/add-to-wishlist', 'Website\API\ProductController@addToWishlist');
    Route::post('/product/remove-from-wishlist', 'Website\API\ProductController@removeFromWishlist');


    Route::post('/cart/remove-cart-item', 'Website\API\CartController@removeCartItem');
    Route::get('/get-cart', 'Website\API\CartController@getCustomerCart');
    Route::post('/save-shipping-address', 'Website\API\ShippingAddressController@saveShippingAddress');
    Route::post('/cart/assign-shipping-address', 'Website\API\CartController@applyShippingAddress');


    Route::get('/product/search', 'Website\API\ProductController@searchProduct');
    //EMI APPLICATION
    Route::group(['middleware' => ['auth:web']], function () {
        Route::get('/banks-list', 'Website\API\EmiController@getBanksList');
        Route::post('/emi/post-application', 'Website\API\EmiController@postEmiApplication');
    });
});
