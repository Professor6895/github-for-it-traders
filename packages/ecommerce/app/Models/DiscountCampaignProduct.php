<?php

namespace Jed\Ecommerce\App;

use Carbon\Carbon;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DiscountCampaignProduct extends Model
{
    protected $table = 'discount_campaign_products';
    protected $fillable = [
      'product_id', 'discount_type', 'discount_value', 'campaign_id'
    ];

    public function product()
    {
        return $this->hasOne(Product::class, 'id', 'product_id');
    }

    public function campaign()
    {
        return $this->belongsTo(DiscountCampaign::class, 'campaign_id');
    }
}
