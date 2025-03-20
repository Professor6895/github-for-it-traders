<?php

namespace Jed\Blogs\Providers;

use Illuminate\Support\ServiceProvider;
use Jed\Core\Helpers\ConfigHelper;

class BlogsServiceProvider extends ServiceProvider
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
        $this->registerIncludes();
    }


    public function registerIncludes()
    {
        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'blogs');
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

        $this->app['config']->set($key, with(new ConfigHelper())->mergeConfig(require $path, $config));
    }
}
