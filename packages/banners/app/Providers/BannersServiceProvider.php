<?php

namespace Jed\Banners\Providers;

use Illuminate\Support\ServiceProvider;
use Jed\Core\Helpers\ConfigHelper;

class BannersServiceProvider extends ServiceProvider
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
        $this->mergeConfigFrom(__DIR__ . '/../../config/app.php', 'app');
        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'banners');
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