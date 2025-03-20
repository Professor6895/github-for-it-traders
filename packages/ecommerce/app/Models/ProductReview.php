<?php

namespace Jed\Ecommerce\Cart;

use Illuminate\Database\Eloquent\Model;
use Jed\Core\App\User;
use Jed\Ecommerce\App\Product;

class ProductReview extends Model
{
    const STATUS_PENDING = 0;
    const STATUS_APPROVED = 1;

    protected $table = 'product_reviews';
    protected $fillable = ['product_id', 'user_id', 'vendor_id', 'review', 'rating', 'status'];

    protected $appends= ['review_formatted_date'];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function getReviewFormattedDateAttribute() {
        if ($this->created_at)
            return $this->created_at->diffForHumans();
    }
}
