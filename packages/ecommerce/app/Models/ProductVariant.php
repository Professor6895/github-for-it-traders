<?php

namespace Jed\Ecommerce\App;

use Illuminate\Database\Eloquent\Model;

class ProductVariant extends Model
{
  /**
   * The attributes that are mass assignable.
   *s
   * @var array
   */
    protected $fillable = [
        'id', 'product_id', 'quantity', 'price', 'attributes'
    ];

    protected $casts = ['attributes' => 'array'];

    public function scopeCheckAttributes($query, $attributes)
    {
        foreach ($attributes as $key => $attribute) {
                $query = $query->where("attributes->$key", $attribute);
        }

        return $query;
    }

    public function getDiscountedPriceAttribute()
    {
        // if (isset($this->product->discountcampaign)) {
        //     $discount_campaign = $this->product->discountcampaign;
        //     if ($discount_campaign->campaign->is_active) {
        //         $price = $this->calculateDiscountedPrice($discount_campaign);
        //         return $price;
        //     }
        // }
        return $this->price;
    }

    public function calculateDiscountedPrice($discount_campaign)
    {
        $campaign = $discount_campaign;
        $product_price = $this->price;
        if ($campaign->discount_type == 1) {
            $product_price = $product_price - $campaign->discount_value;
        }
        if ($campaign->discount_type == 2) {
            $product_price = $product_price - ($product_price * $campaign->discount_value / 100);
        }

        return $product_price;
    }

    public function product() {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
