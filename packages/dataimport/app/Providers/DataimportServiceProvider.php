<?php

namespace Jed\Dataimport\Providers;

use Illuminate\Support\ServiceProvider;
use Jed\Core\Helpers\ConfigHelper;

class DataimportServiceProvider extends ServiceProvider
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
        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'dataimport');
        $this->mergeConfigFrom(__DIR__ . '/../../config/permissions.php', 'permissions');
    }
}
