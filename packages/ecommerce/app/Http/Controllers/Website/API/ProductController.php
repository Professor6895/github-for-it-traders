<?php

namespace Jed\Ecommerce\Http\Controllers\Website\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Core\Http\Traits\Website\MetaTrait;
use Jed\Ecommerce\App\Helpers\ProductHelper;
use Jed\Ecommerce\App\Product;
use Jed\Ecommerce\App\ProductCategory;
use Jed\Ecommerce\App\ProductVariant;
use Jed\Ecommerce\Cart\UserWishlist;

class ProductController extends Controller
{
    public function __construct(ProductCategory $category, ProductHelper $productHelper)
    {
        $this->category = $category;
        $this->product_helper = $productHelper;
    }

    public function getProducts(Request $request)
    {
        $products = $this->product_helper->getProductsForList($request, true);
        $response = [
          'success' => true,
          'products' => $products,
        ];

        if ($request->has('get_filters') && isTrue($request->get_filters)) {
            $response['filters'] = $this->product_helper->filters;
        }
        return response()->json($response);
    }

    public function searchProduct(Request $request)
    {
        $products = $this->product_helper->searchProducts($request);
        return response()->json(['success' => true,'data' => $products]);
    }

    public function addToWishlist(Request $request) {
        $exists = UserWishlist::where([
            'user_id' => auth('web')->user()->id,
            'product_id' => $request->product_id
        ])->count();
        if ($exists) {
            return response()->json(['success' => true,'message' => "Product already on wishlist!"]);
        }

        UserWishlist::create([
            'user_id' => auth('web')->user()->id,
            'product_id' => $request->product_id
        ]);
        $wishlists_count = UserWishlist::where('user_id', auth('web')->user()->id)->count();
        return response()->json(['success' => true, 'message' => "Product added to wishlist!", 'count' => $wishlists_count]);
    }

    public function removeFromWishlist(Request $request) {
        $id = $request->id;
        UserWishlist::find($id)->delete();
        session()->flash('message',"Product removed from wishlist!");
        return response()->json(['success' => true]);
    }

    public function getVariationPrice($product_id, Request $request) {
        $product = Product::with('discountcampaign')->find($product_id);
        $data = $request->all();
        $discount_campaign = $product->discountcampaign;
        $variant_attributes = json_decode($data['attributes'], true);

        $variant = ProductVariant::where('product_id', $product_id);
        foreach($variant_attributes  as $att_key => $attribute) {
            $variant->where("attributes->{$att_key}", $attribute);
        }
        $variant = $variant->first();
        if ($variant) {
            if ($discount_campaign) {
                $discounted_price = $variant->calculateDiscountedPrice($discount_campaign);
                $org_price = $variant->price;
            } else {
                $discounted_price = $variant->discounted_price;
            }
            return response()->json([
                'success' => true,
                'discounted_price' => $discounted_price,
                'org_price' => $org_price ?? 0,
                'quantity' => $variant->quantity
            ]);
        } else {
            return response()->json(['success' => false, 'message' => "Selected Variation does not exist"]);
        }
    }
}
