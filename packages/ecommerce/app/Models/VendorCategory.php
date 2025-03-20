<?php

namespace Jed\Ecommerce\Cart;

use Illuminate\Database\Eloquent\Model;
use Jed\Ecommerce\App\ProductCategory;

class VendorCategory extends Model
{
    protected $table = 'vendor_categories';
    protected $fillable = ['vendor_id', 'category_id', 'show_on_dashboard'];

    public function category()
    {
        return $this->belongsTo(ProductCategory::class, 'category_id');
    }
}
