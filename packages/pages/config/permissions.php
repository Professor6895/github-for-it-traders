
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
      'module' => "Pages",
      "permissions" => [
         'pages-view' => 'View Pages',
         'pages-add' => "Add Page",
         'pages-edit' => 'Edit Page',
         'pages-delete' => 'Delete Page',
         'page-sections-manage' => 'Manage Page Sections',
      ]
   ],
];
