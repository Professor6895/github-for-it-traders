<?php

namespace Jed\Core\Helpers;
 
class PermissionHelper
{
  public function checkPermission($user, $action)
  {
    return in_array($action, $user->permissions);
  }
}