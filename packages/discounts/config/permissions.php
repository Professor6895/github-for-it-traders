
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
      'module' => "Discounts",
      "permissions" => [
         'discounts-view' => 'View Discounts',
         'discounts-add' => "Add Discounts",
         'discounts-edit' => 'Edit Discount',
         'discounts-delete' => 'Delete Discount',
      ]
   ],
];
