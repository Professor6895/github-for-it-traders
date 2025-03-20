<?php

namespace Jed\Ecommerce\Cart;

use Illuminate\Database\Eloquent\Model;
use Jed\Ecommerce\App\Product;
use Jed\Ecommerce\App\ProductVariant;

class CartItem extends Model
{
    protected $fillable =['cart_id', 'product_id', 'quantity', 'product_attributes', 'vendor_id', 'price'];

    protected $casts = ['product_attributes' => 'array'];


    public function product()
    {
        return $this->hasOne(Product::class, 'id', 'product_id');
    }

    public function variant()
    {
        $variant = ProductVariant::where('product_id', $this->product_id)->checkAttributes($this->product_attributes)->first();
        if ($variant) {
            return $variant;
        }
        return false;
    }

    public function scopeCheckAttributes($query, $attributes)
    {
        foreach ($attributes as $key => $attribute) {
                $query = $query->where("product_attributes->$key", $attribute);
        }

        return $query   ;
    }

    public function prepareOrderItem()
    {
        $product = $this->product;
        $item = [
            'product_id' => $this->product_id,
            'product_name' => $product->name,
            'product_sku' => $product->sku,
            'product_price' => $this->price,
            'product_attributes' => $this->product_attributes,
            'vendor_id' => $this->vendor_id,
            'compare_price' => 0,
            'quantity' => $this->quantity
        ];

        return $item;
    }
}
