
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
      'module' => "Banners",
      "permissions" => [
         'view-banners' => 'View Banners',
         'add-banner' => "Add Banner",
         'edit-banner' => 'Edit Banner',
         'delete-banner' => 'Delete Banner',
         'manage-banner-images' => 'Manage Banner Images'
      ]
   ],
];
