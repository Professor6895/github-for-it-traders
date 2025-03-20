<?php

namespace Jed\Core\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Contracts\Auth\Access\Gate;
use Jed\Core\Helpers\PermissionHelper;

class AuthServiceProvider extends ServiceProvider
{
     

  public function boot(Gate $gate)
  {
      $this->registerPolicies();
    
      foreach (config('permissions') as $module) {
        foreach ($module['permissions'] as $permission => $name) {
          $gate->define($permission, function ($user)  use ($permission){
            return (new PermissionHelper)->checkPermission($user, $permission);
        });
        }
      }
  }
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
      
    }
 
}
