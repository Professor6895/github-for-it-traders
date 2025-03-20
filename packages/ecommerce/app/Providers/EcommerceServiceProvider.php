<?php

namespace Jed\Ecommerce\Providers;

use Illuminate\Support\ServiceProvider;
use Jed\Core\Helpers\ConfigHelper;

class EcommerceServiceProvider extends ServiceProvider
{ 
    public function boot()
    {
    }
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->register_includes();
    }


    public function register_includes()
    {
        $this->mergeConfigFrom(__DIR__ . '/../../config/auth.php', 'auth');
        $this->mergeConfigFrom(__DIR__ . '/../../config/app.php', 'app');
        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'ecommerce');
        $this->mergeConfigFrom(__DIR__ . '/../../config/permissions.php', 'permissions');
    }

     /**
     * Merge the given configuration with the existing configuration.
     *
     * @param  string  $path
     * @param  string  $key
     * @return void
     */
    protected function mergeConfigFrom($path, $key)
    {
        $config = $this->app['config']->get($key, []);
        $this->app['config']->set($key, with(new ConfigHelper)->mergeConfig(require $path, $config));
    }
}