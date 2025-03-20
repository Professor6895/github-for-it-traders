
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
      'module' => "Menus",
      "permissions" => [
         'view-menus' => 'View Menus',
         'add-menu' => "Add Menu",
         'edit-menu' => 'Edit Menu',
         'delete-menu' => 'Delete Menu',
      ]
   ],
];
