
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
      'module' => "Blogs",
      "permissions" => [
         'view-blog-categories' => 'View Blog Categories',
         'add-blog-category' => "Add Blog Category",
         'edit-blog-category' => 'Edit Blog Category',
         'delete-blog-category' => 'Delete Blog Category',

         'view-blogs' => 'View Blogs',
         'add-blog' => "Add Blog",
         'edit-blog' => 'Edit Blog',
         'delete-blog' => 'Delete Blog'
      ]
   ],
];
