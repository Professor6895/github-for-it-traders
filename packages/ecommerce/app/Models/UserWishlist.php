<?php

namespace Jed\Ecommerce\Cart;

use Illuminate\Database\Eloquent\Model;
use Jed\Core\App\User;
use Jed\Ecommerce\App\Product;

class UserWishlist extends Model
{
    protected $table = 'user_wishlists';
    protected $fillable = [ 'user_id', 'product_id'];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}

