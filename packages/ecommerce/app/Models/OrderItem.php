<?php

namespace Jed\Ecommerce\Cart;

use Illuminate\Database\Eloquent\Model;
use Jed\Ecommerce\App\Product;

class OrderItem extends Model
{
    protected $table = 'order_items';
    public $timestamps = false;
    protected $fillable = [ 'order_id', 'product_id', 'product_name', 'product_sku', 'product_price', 'compare_price', 'quantity', 'vendor_id', 'product_attributes', 'warranty_token'];
    protected $casts = ['product_attributes' => 'array'];

    public function product()
    {
        return $this->hasOne(Product::class, 'id', 'product_id')->withTrashed();
    }

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }
}
