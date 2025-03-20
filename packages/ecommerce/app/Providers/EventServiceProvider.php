<?php

namespace Jed\Ecommerce\Providers;

use Illuminate\Auth\Events\Login;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Jed\Ecommerce\Listeners\UserLoginListener;

class EventServiceProvider extends ServiceProvider
{

    protected $listen = [
        Login::class => [
            UserLoginListener::class
        ],
    ];
}
