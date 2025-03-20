
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
  'module' => "Contacts Inquires",
  "permissions" => [
   'contacts-view' => 'View Inquiries',
   'contacts-reply' => 'Reply Contacts'
  ]
 ],
 [
  'module' => "User Management",
  "permissions" => [
   'users-view' => 'View Users',
   'admins-view' => 'View Admins',
   'admins-add' => "Add Admins",
   'admins-edit' => 'Edit Admins',
   'admins-delete' => 'Delete Admins',

   'roles-view' => 'View Roles',
   'roles-add' => "Add Roles",
   'roles-edit' => 'Edit Roles',
   'roles-delete' => 'Delete Roles',
  ]
  ],
  [
     'module' => 'Core',
     'permissions' => [
        'access-settings' => 'Access Settings'
     ]
  ]
];
