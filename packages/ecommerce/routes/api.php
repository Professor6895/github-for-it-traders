<?php

use Illuminate\Support\Facades\Route;
use Jed\Ecommerce\App\Product;
use Jed\Ecommerce\App\ProductBrand;
use Jed\Ecommerce\App\ProductCategory;

Route::group(['prefix' => 'admin', 'middleware' => 'auth:apiAdmin'], function () {
    Route::get('ecommerce-dashboard-data', 'Dashboard\DashboardController@getDashboardData');

    //PRODUCT CATEGORIES
    Route::post('product-categories/sort-categories', 'Dashboard\ProductCategoryController@sortCategories');
    Route::get('/product-categories/{id}/images', 'Dashboard\ProductCategoryController@getProductCategoryImages');
    Route::post('/product-categories/{id}/images', 'Dashboard\ProductCategoryController@saveProductCategoryImage');
    Route::delete('/product-categories/{id}/images/{image_id}', 'Dashboard\ProductCategoryController@deleteProductCategoryImage');

    Route::resource('product-categories', 'Dashboard\ProductCategoryController')->except(['create', 'edit']);
    Route::get('product-categories-tree', 'Dashboard\ProductCategoryController@getCategoryTree');
    Route::get('product-categories-dropdown', 'Dashboard\ProductCategoryController@getCategoryDropdown');


    Route::get('/product-brands/get-dropdown', 'Dashboard\ProductBrandController@getBrandsDropdown');
    Route::get('/product-brands/{id}/images', 'Dashboard\ProductBrandController@getProductBrandImages');
    Route::post('/product-brands/{id}/images', 'Dashboard\ProductBrandController@saveProductBrandImage');
    Route::delete('/product-brands/{id}/images/{image_id}', 'Dashboard\ProductBrandController@deleteProductBrandImage');
    Route::resource('product-brands', 'Dashboard\ProductBrandController')->except(['create', 'edit']);

    //VENDORS
    Route::get('/vendors/get-dropdown', 'Dashboard\VendorController@getVendorsDropdown');
    Route::get('/vendors/{id}/products', 'Dashboard\ProductsController@getVendorsProducts');
    Route::resource('vendors', 'Dashboard\VendorController')->except(['create', 'edit']);

  //PRODUCT ROUTES
    Route::post('products/store-detail', 'Dashboard\ProductsController@storeProductDetail');
    Route::patch('products/{id}/update-detail', 'Dashboard\ProductsController@updateProductDetail');
    Route::patch('products/{id}/update-meta', 'Dashboard\ProductsController@updateMetaFields');
    Route::post('product/make-duplicate', 'Dashboard\ProductsController@duplicateProduct');
    Route::patch('products/{id}/update-price', 'Dashboard\ProductsController@updateProductPrice');
    Route::patch('products/{id}/save-attributes', 'Dashboard\ProductsController@saveProductAttributes');
    Route::patch('products/{id}/toggle-status', 'Dashboard\ProductsController@toggleProductStatus');
    Route::resource('products', 'Dashboard\ProductsController')->except(['create', 'edit', 'store']);
    Route::post('/products/export-excel', 'Dashboard\ProductsController@exportProducts');

  //PRODUCT VARIANTS
    Route::resource('/product/{product_id}/variants', 'Dashboard\ProductVariantController');

  //PRODUCT IMAGES
    Route::post('products/{id}/uploadImages', 'Dashboard\ProductsController@uploadProductImage');
    Route::get('products/{id}/get-product-images', 'Dashboard\ProductsController@getProductImages');
    Route::delete('products/product-image/{image_id}/delete-image', 'Dashboard\ProductsController@removeProductImages');
    Route::post('products/{product_id}/product-image/{image_id}/set-primary', 'Dashboard\ProductsController@setPrimaryImage');

  //PRODUCT CLASS AND ATTRIBUTE
    Route::get('/product-classes/get-dropdown', 'Dashboard\ProductClassController@getDropdown');
    Route::resource('product-classes', 'Dashboard\ProductClassController')->except(['create', 'edit', 'show']);
    Route::get('/product-class/{class_id}/attributes', 'Dashboard\ProductClassController@getClassAttributes');
    Route::post('/product-class/{class_id}/attribute', 'Dashboard\ProductClassController@saveClassAttribute');
    Route::patch('/product-class/{class_id}/attribute/{att_id}', 'Dashboard\ProductClassController@updateClassAttribute');
    Route::delete('/product-class/{class_id}/attribute/{att_id}', 'Dashboard\ProductClassController@deleteClassAttribute');
    Route::get('/product-class/{class_id}/variantable-attributes', 'Dashboard\ProductClassController@getVariantableAttributes');


    //ORDERS
    Route::get('orders/get-orders', 'Dashboard\OrdersController@getOrders');
    Route::get('orders/{id}/get-order-detail', 'Dashboard\OrdersController@getOrderDetail');
    Route::post('orders/{id}/update-order-status', 'Dashboard\OrdersController@updateOrderStatus');
    Route::get('orders/get-pre-orders', 'Dashboard\OrdersController@getPreOrders');
    Route::get('orders/{id}/get-pre-order-detail', 'Dashboard\OrdersController@getPreOrderDetail');
    Route::post('/orders/export-excel', 'Dashboard\OrdersController@exportOrders');

    Route::post('orders/order-item/{order_item_id}/generate-warranty-serial', 'Dashboard\OrdersController@updateOrderItemWarrantySerial');


    //DATAIMPORT
    Route::get('/data-import/product/get-import-images', 'Dashboard\DataImportController@getImportImages');
    Route::post('/data-import/product/extract-images', 'Dashboard\DataImportController@extractImportImages');
    Route::post('/data-import/product/validate-products', 'Dashboard\DataImportController@validateProudcts');
    Route::post('/data-import/product/import-products', 'Dashboard\DataImportController@importProducts');
    Route::post('/data-import/price-import/export-products', 'Dashboard\DataImportController@exportProductsForPriceImport');
    Route::post('/data-import/product/update-product-details', 'Dashboard\DataImportController@updateProductPrice');

    //EMI ROUTES
    Route::resource('/emi-banks', 'Dashboard\EmiBankController')->except(['create', 'edit', 'show']);
    Route::get('/emi-requests', 'Dashboard\EmiController@getEmiRequests');
    Route::get('/emi-request/{id}/get-detail', 'Dashboard\EmiController@getEmiRequestDetail');
    Route::delete('/emi-requests/{id}', 'Dashboard\EmiController@deleteEmiDetail');
    Route::post('/emi-request/{id}/process-application', 'Dashboard\EmiController@processEmiRequest');
    Route::post('/emi-request/{id}/approve-application', 'Dashboard\EmiController@approveEmiRequest');
    Route::post('/emi-request/{id}/complete-application', 'Dashboard\EmiController@completeEmiRequest');
    Route::post('/emi-request/{id}/decline-application', 'Dashboard\EmiController@declineEmiRequest');


  //Product REVIEWS
    Route::get('/product-reviews', 'Dashboard\ProductReviewsController@index');
    Route::patch('/product-reviews/{id}/toggle-status', 'Dashboard\ProductReviewsController@toggleStatus');


      //FAQS
      Route::get('/faqs', 'Dashboard\FAQController@index');
      Route::post('/store-faq', 'Dashboard\FAQController@storeFaq');
      Route::patch('/store-faq/{id}', 'Dashboard\FAQController@updateFaq');
      Route::delete('/faqs/{id}/delete', 'Dashboard\FAQController@deleteFaq');

      // Route::patch('/product-reviews/{id}/toggle-status', 'Dashboard\ProductReviewsController@toggleStatus');

      
    //ECOMMERCE SETTINGS
    Route::post('/ecommerce-settings/save-popup-settings', 'Dashboard\SettingController@savePopupSetting');

    // Discount Campaigns
    Route::resource('/discount-campaigns', 'Dashboard\DiscountCampaignController')->except(['create', 'edit', 'show']);
    Route::post('/discount-campaigns/{id}/add-products', 'Dashboard\DiscountCampaignController@addProductsInCampaign');
    Route::get('/discount-campaigns/{id}/get-products', 'Dashboard\DiscountCampaignController@getCampaignProducts');
    Route::delete('/discount-campaigns/product/{id}/remove', 'Dashboard\DiscountCampaignController@removeProductFromCampaign');

    //SHIPPING CHARGES
    Route::resource('shipping-charges', 'Dashboard\ShippingChargeController')->except(['create', 'edit']);

});

Route::group(['prefix' => 'vendor', 'middleware' => 'auth:apiVendor'], function () {
    Route::resource('products', 'Vendor\ProductsController')->except(['create', 'edit', 'store']);
    Route::get('product-categories-dropdown', 'Vendor\ProductsController@getCategoryDropdown');
    Route::get('/product-brands/get-dropdown', 'Vendor\ProductsController@getBrandsDropdown');
    Route::post('products/store-detail', 'Vendor\ProductsController@storeProductDetail');
    Route::patch('products/{id}/save-attributes', 'Vendor\ProductsController@saveProductAttributes');
    Route::patch('products/{id}/update-price', 'Dashboard\ProductsController@updateProductPrice');
    Route::patch('products/{id}/update-meta', 'Dashboard\ProductsController@updateMetaFields');

    Route::get('/product-classes/get-dropdown', 'Vendor\ProductClassController@getDropdown');

    Route::resource('/product/{product_id}/variants', 'Vendor\ProductVariantController');
    Route::patch('products/{id}/toggle-status', 'Vendor\ProductsController@toggleProductStatus');
    Route::get('/product-class/{class_id}/variantable-attributes', 'Vendor\ProductVariantController@getVariantableAttributes');

    //PRODUCT IMAGES
    Route::post('products/{id}/uploadImages', 'Vendor\ProductsController@uploadProductImage');
    Route::get('products/{id}/get-product-images', 'Vendor\ProductsController@getProductImages');
    Route::delete('products/product-image/{image_id}/delete-image', 'Vendor\ProductsController@removeProductImages');
    Route::post('products/{product_id}/product-image/{image_id}/set-primary', 'Vendor\ProductsController@setPrimaryImage');

    //ORDES
    Route::get('orders/get-orders', 'Vendor\OrdersController@getOrders');
    Route::get('orders/{id}/get-order-items', 'Vendor\OrdersController@getOrderItems');


    //STORE DECORATION
    Route::post('banner-image/upload', 'Vendor\StoreDecorationController@saveBannerImage');
    Route::get('banner-image/get-all', 'Vendor\StoreDecorationController@getBannerImages');
    Route::delete('banner-image/{id}/delete-image', 'Vendor\StoreDecorationController@deleteBannerImage');
    Route::get('home-categories', 'Vendor\StoreDecorationController@getHomeCategory');
    Route::delete('home-categories/{id}/delete', 'Vendor\StoreDecorationController@deleteHomeCategory');
    Route::post('vendor-category/save-home-category', 'Vendor\StoreDecorationController@saveHomeCategory');
    // Route::get

    //PROFILE
    Route::patch('update-profile', 'Vendor\ProfileController@updateProfile');
    Route::patch('update-security', 'Vendor\ProfileController@updateSecurity');
    Route::patch('update-business-information', 'Vendor\ProfileController@updateBusinessInformation');
    Route::patch('update-bank-information', 'Vendor\ProfileController@updateBankInformation');
    Route::get('/vendor-detail', 'Vendor\ProfileController@getVendorProfile');
    Route::get('dashboard-data', 'Vendor\DashboardController@getDashboardData');
});
//WEBSITE APIS


Route::get('/get-all-categories', function() {
  $categories = ProductCategory::all();
  return response()->json($categories);
});

Route::get('/get-all-brands', function() {
  $categories = ProductBrand::all();
  return response()->json($categories);
});

Route::get('/get-all-products', function() {
  // $categories = ProductBrand::all();
  $product = Product::with('media', 'categories', 'discountcampaign', 'variants', 'brand', 'reviews.user:name,id', 'vendor:id,name,slug')
    // ->where('id', 2037)
  ->paginate(100);
  return response()->json($product);
});
