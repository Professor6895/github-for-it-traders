<?php

namespace Jed\Ecommerce\Cart;

use Illuminate\Database\Eloquent\Model;
use Jed\Core\App\Province;
use Jed\Ecommerce\App\Product;

class UserShippingAddress extends Model
{
    protected $table = 'user_shipping_addresses';
    protected $fillable = ['user_id',
     'first_name',
      'last_name',
       'contact_number',
        'country',
         'province',
          'district',
           'city',
            'landmark',
             'is_default'
            ];

    protected $appends = ['full_name'];

    public function provinceDetail()
    {
        return $this->hasOne(Province::class, 'id', 'province');
    }

    public function getFullNameAttribute()
    {
        return $this->first_name . ' ' . $this->last_name;
    }
}
