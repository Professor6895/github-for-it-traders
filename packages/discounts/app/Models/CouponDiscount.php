<?php

namespace Jed\Discounts\App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CouponDiscount extends Model
{
  use SoftDeletes;

  const MONEY_VALUE_TYPE = 1;
  const PERCENT_VALUE_TYPE = 2;
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'title', 'code', 'start_date', 'end_date', 'discount_type', 'discount_value', 'minimum_value', 'usage_per_user'
  ];

  protected $appends = ['is_active'];

  public function getIsActiveAttribute() {
    $current_time = Carbon::now();
    if($this->start_date < $current_time && $this->end_date > $current_time) {
      return true;
    }
    return false;
  }
}
