
<?php

return [

   /*
    |--------------------------------------------------------------------------
    | Application Environment
    |--------------------------------------------------------------------------
    |
    | This value determines the "environment" your application is currently
    | running in. This may determine how you prefer to configure various
    | services your application utilizes. Set this in your ".env" file.
    |
    */
   /* {package-name}.{model or object}.{action}*/
   [
      'module' => "E-Commerce",
      "permissions" => [
         'view-product-categories' => 'View Product Categories',
         'add-product-category' => "Add Product Category",
         'edit-product-category' => 'Edit Product Category',
         'delete-product-category' => 'Delete Product Category',

         'view-brands' => 'View Brands',
         'add-brand' => "Add Brand",
         'edit-brand' => 'Edit Brand',
         'delete-brand' => 'Delete Brand',

         'view-products' => 'View Products',
         'add-product' => "Add Product",
         'edit-product' => 'Edit Product',
         'delete-product' => 'Delete Product',

         'access-orders' => "Access Orders",

         'access-emi' => "Access EMI",
         'access-campaigns' => "Access Campaigns",

         'access-shippings' => "Access Shippings"
      ]
   ],
];
