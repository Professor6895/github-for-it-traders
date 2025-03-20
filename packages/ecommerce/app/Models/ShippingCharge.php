<?php

namespace Jed\Ecommerce\Cart;

use Illuminate\Database\Eloquent\Model;

class ShippingCharge extends Model
{
    protected $fillable =['district', 'shipping_charge'];

}
