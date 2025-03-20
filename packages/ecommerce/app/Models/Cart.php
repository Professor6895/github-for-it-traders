<?php

namespace Jed\Ecommerce\Cart;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Session;
use Jed\Discounts\App\CouponDiscount;
use Jed\Discounts\Helpers\DiscountHelper;
use Jed\Ecommerce\App\Product;
use Jed\Ecommerce\App\ProductVariant;

class Cart extends Model
{
    protected $fillable =['user_id', 'ip_address', 'is_processed', 'discount_coupon', 'shipping_address_id', 'shipping_cost'];

    public function items()
    {
        return $this->hasMany(CartItem::class, 'cart_id')->with('product.media');
    }

    public static function getCart($auth_check = true)
    {
        if ($auth_check && auth('web')->check()) {
            return self::firstOrCreate([
                'user_id' => auth('web')->user()->id,
                'is_processed' => 0
            ]);
        }

        return self::firstOrCreate([
            'ip_address' => request()->ip(),
            'is_processed' => 0
        ]);
    }

    public function addProduct($data)
    {
        $product = Product::with('discountcampaign')->find($data['product_id']);
        $discount_campaign = $product->discountcampaign;
        $price = $product->discounted_price;
        $cart_item = CartItem::where(['product_id' =>  $data['product_id'], 'cart_id' => $this->id]);
        if (isset($data['product_attributes']) && !isNull($data['product_attributes'])) {
            $cart_item= $cart_item->checkAttributes($data['product_attributes']);
            $variant = ProductVariant::where('product_id', $product->id)->checkAttributes($data['product_attributes'])->first();
            if ($variant) {
                if ($discount_campaign) {
                    $price = $variant->calculateDiscountedPrice($discount_campaign);
                } else {
                    $price = $variant->discounted_price;
                }
            }
        }
        $cart_item = $cart_item->first();
        if ($cart_item) {
            $cart_item->update([
                'quantity' => $cart_item->quantity + $data['quantity']
            ]);
        } else {
            $cart_item = CartItem::create([
                'product_id' => $data['product_id'],
                'quantity' => $data['quantity'],
                'cart_id' => $this->id,
                'vendor_id' => $product->vendor_id,
                'price' => $price,
                'product_attributes' => (isset($data['product_attributes'])) ? $data['product_attributes']: []
            ]);
        }
    }

    public static function transferToNewCart()
    {
        $cart = self::getCart();
        $old_cart = self::getCart(false);
        CartItem::where('cart_id', $old_cart->id)->update([
            'cart_id' => $cart->id
        ]);
    }

    public function getCartItemTotal()
    {
        return $this->items->sum(function ($item) {
            return $item->price * $item->quantity;
        }) ;
    }


    public function getCartTotal() {
        $discounted_price = with(new DiscountHelper)->calculateCouponDiscountedAmount($this->discount_coupon, $this->getCartItemTotal());
        return $discounted_price + $this->shipping_cost;
    }

    public function checkCartCouponDiscount() {
    }

    public function markAsDone()
    {
        $this->update([
            'is_processed' => 1
        ]);

        $this->items()->delete();
    }
    
    public function coupon()
    {
        return $this->belongsTo(CouponDiscount::class, 'discount_coupon', 'code');
    }
}
