<?php

namespace Jed\Ecommerce\App;

use Illuminate\Database\Eloquent\Model;
use Jed\Core\App\User;

class PreOrder extends Model
{

    const STATUS_PLACED = 0;
    const STATUS_CONFIRMED = 1;
    const STATUS_REJECTED = 2;

    protected $table = 'pre_orders';

    protected $fillable = [ 'user_id', 'name', 'email', 'phone', 'address', 'message', 'product_id', 'status'];

    protected $appends = ['pre_order_status'];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }


    public function product()
    {
        return $this->hasOne(Product::class, 'id', 'product_id');
    }

    public function getPreOrderStatusAttribute()
    {
        switch ($this->status) {
            case 0:
                $status = "Placed";
                break;
            case 1:
                $status = "Confirmed";
                break;
            case 2:
                $status = "Rejected";
                break;
        }

        return $status;
    }
}
