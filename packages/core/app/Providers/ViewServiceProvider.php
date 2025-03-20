<?php

namespace Jed\Core\Providers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{
    public function register()
    {
      //
    }

  /**
   * Bootstrap any application services.
   *
   * @return void
   */
    public function boot()
    {
        if (config('database.connections.mysql.database') != 'forge' && Schema::hasTable('settings')) {
            $settings = settings();
            view()->share('settings', $settings);
        }
      
      // Using Closure based composers...
      // View::composer(['core::website.layouts.layout', 'packages.core.website.layouts.layout'], function ($view) {
      //   // view()->share('settings', $settings);
      //   View::share
      //   // return $view->with('settings', $settings)
      // });
    }
}
