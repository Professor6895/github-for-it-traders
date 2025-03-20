<?php

namespace Jed\Ecommerce\Listeners;

use Jed\Ecommerce\Cart\Cart;

class UserLoginListener
{
    /**
     * Handle the event.
     *
     * @param  \Illuminate\Auth\Events\Registered  $event
     * @return void
     */
    public function handle()
    {
        Cart::transferToNewCart();
    }
}
