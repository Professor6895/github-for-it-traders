<?php

namespace Jed\Ecommerce\App\Helpers;

use Jed\Ecommerce\Cart\UserShippingAddress;

class AddressHelper
{
    public function getUserShippingAddresses()
    {
        $shipping_addresses = UserShippingAddress::where('user_id', auth('web')->user()->id)->get();
        return $shipping_addresses;
    }
}
