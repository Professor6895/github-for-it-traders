<?php

namespace Jed\Ecommerce\Cart;

use Illuminate\Database\Eloquent\Model;
use Jed\Core\App\User;

class Order extends Model
{

    const STATUS_DRAFT = 0;
    const STATUS_PLACED = 1;
    const STATUS_CONFIRMED = 2;
    const STATUS_DISPATCHED = 3;
    const STATUS_COMPLETED = 4;
    const STATUS_CANCELED = 5;

    protected $table = 'orders';

    protected $fillable = [ 'user_id', 'cart_id', 'shipping_address_id', 'invoice_number', 'status', 'discount_coupon', 'shipping_cost', 'cancel_reason', 'discounts_total', 'order_total', 'total', 'payment_type'];

    protected $appends = ['order_status'];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }


    public function items()
    {
        return $this->hasMany(OrderItem::class, 'order_id')->with('product.media');
    }

    public function shippingAddress()
    {
        return $this->hasOne(UserShippingAddress::class, 'id', 'shipping_address_id');
    }

    public function getOrderStatusAttribute()
    {
        switch ($this->status) {
            case 1:
                $status = "Placed";
                break;
            case 2:
                $status = "Confirmed";
                break;
            case 3:
                $status = "Dispatched";
                break;
            case 4:
                $status = "Completed";
                break;
            case 5:
                $status = "Canceled";
                break;
            default:
                $status = "Draft";
                break;
        }

        return $status;
    }
}
