<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Banners\Helpers\BannerHelper;
use Jed\Ecommerce\App\Helpers\ProductHelper;
use Jed\Ecommerce\App\Product;
use Jed\Ecommerce\App\ProductAttribute;
use Jed\Ecommerce\App\ProductCategory;
use Jed\Ecommerce\Cart\Cart;

class PCBuilderController extends Controller
{
    protected $product_helper;
    public function __construct(ProductHelper $productHelper)
    {
        $this->product_helper = $productHelper;
    }

    public function getProducts(Request $request)
    {
        $conds = json_decode($this->analyzePreviousSelections($request), true);
        $products = $this->product_helper->getProductsForList($request, false, true);

        $products = $products->where(function($query) use ($conds) {
            foreach ($conds as $key => $filter) {
                if (sizeof($filter)) {
                    $query->orWhereIn("attributes->product_attributes->$key", $filter);
                }
            }
        });
        $response = [
          'success' => true,
          'products' => $products->get(),
        ];
        return response()->json($response);
    }

    public function analyzePreviousSelections($request) {
        $previous_category = '';
        if ($request->category == 'cpu') {
            $previous_category = 'graphics-cards';
        } 
        if ($request->category == 'motherboards') {
            $previous_category = 'cpu'; 
        }

        if ($previous_category != '') {
            $previous_selections = json_decode($request->previous_selections, true);
            $previous_product = Product::find($previous_selections[$previous_category]);
            $previous_attributes = $previous_product->attributes['product_attributes'] ?? [];

            $filterable_attributes = ProductAttribute::where([
                'class_id' => $previous_product->attribute_class_id,
                'use_in_filter'=>1
            ])->get()->pluck('name')->toArray();

            $values_to_check = [];
            foreach ($filterable_attributes as $filterable) {
                if (isset($previous_attributes[$filterable])) {
                    $values_to_check[$filterable] = [$previous_attributes[$filterable]];
                }
            }

            $values_to_check = json_encode($values_to_check);

            return $values_to_check ?? '[]';
        }
        return '[]';
    }

    public function pcBuilder() {
        return view('packages.core.website.pc-builder');
    }

    public function addProductsToCart(Request $request)
    {
        $product_ids = json_decode($request->product_ids, true);
        foreach ($product_ids as $product_id) {
            $data = [
                'product_id' => $product_id,
                'quantity' => 1
            ];

            $cart = Cart::getCart();
            $cart->addProduct($data);
        }
        return response()->json([
            'success' => true
        ]);
    }
}
