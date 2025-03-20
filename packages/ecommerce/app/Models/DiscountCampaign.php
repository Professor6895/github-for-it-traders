<?php

namespace Jed\Ecommerce\App;

use Carbon\Carbon;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DiscountCampaign extends Model
{
    use SoftDeletes;
    protected $table = 'discount_campaigns';
    protected $fillable = [
      "title", "slug", "start_date", "end_date", 'show_on_home'
    ];
    protected $dates = ['end_date'];
    protected $appends = ['is_active'];
    public function getIsActiveAttribute()
    {
        $current_time = Carbon::now();
        if ($this->start_date < $current_time && $this->end_date > $current_time) {
            return true;
        }
        return false;
    }

    public function products() {
        return $this->belongsToMany(Product::class, 'discount_campaign_products', 'campaign_id', 'product_id')->with('discountcampaign', 'reviews', 'media');
    }
}
