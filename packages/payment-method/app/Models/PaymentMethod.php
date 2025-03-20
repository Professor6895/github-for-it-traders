<?php

namespace Jed\PaymentMethod\App;

use Illuminate\Database\Eloquent\Model;

class PaymentMethod extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
    protected $fillable = [
    "name", "slug", "config", "status", "is_international", 'test_mode', 'logo_url'
    ];

    protected $appends = ['payment_config'];

    public function getPaymentConfigAttribute()
    {
        return json_decode($this->config);
    }
}
