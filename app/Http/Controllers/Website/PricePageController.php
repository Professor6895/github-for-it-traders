<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Artesaos\SEOTools\Facades\JsonLd;
use Artesaos\SEOTools\Facades\OpenGraph;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\TwitterCard;
use Illuminate\Http\Request;
use Jed\Ecommerce\App\Product;
use Jed\Ecommerce\App\ProductBrand;
use Jed\Ecommerce\App\ProductCategory;

class PricePageController extends Controller
{
    public function getBrandPrice($keyword)
    {
        if (!$keyword) {
            abort(404);
        }
        if (strpos($keyword, 'price-in-nepal') === false) {
            abort(404);
        }
        $brand_keyword = str_replace('-price-in-nepal', '', $keyword);
        $brand = ProductBrand::with('media')->where('slug', $brand_keyword)->firstOrFail();
        $brand->setMeta();
        $products = Product::select('id', 'name', 'slug', 'price', 'original_price')->where('brand_id', $brand->id)->get();
        $brands = ProductBrand::with('media')->inRandomOrder()->limit(6)->withCount('products')->get();
        $categories = ProductCategory::with('media')->inRandomOrder()->limit(6)->withCount('products')->get();
        return view('packages.ecommerce.website.price-in-nepal.brands', compact('brand', 'products', 'brands', 'categories'));
    }

    public function getCategoryPrice($keyword) {
        if (!$keyword) {
            abort(404);
        }
        if (strpos($keyword, 'price-in-nepal') === false) {
            abort(404);
        }
        $category_keyword = str_replace('-price-in-nepal', '', $keyword);
        $category = ProductCategory::with('media')->where('slug', $category_keyword)->firstOrFail();
        $category->setMeta();

        $cat_arrays = array_merge($category->getAllChildren()->pluck('id')->toArray(), [$category->id]);

        $products = Product::select('id', 'name', 'slug', 'price', 'original_price', 'brand_id')->with('media', 'brand:id,name');
        $products = $products->join('categories_products', 'products.id', '=', 'categories_products.product_id')
              ->whereIn('categories_products.product_category_id', $cat_arrays)->get();

        $brands = ProductBrand::with('media')->inRandomOrder()->limit(6)->withCount('products')->get();
        $categories = ProductCategory::with('media')->where('parent_id', NULL)->inRandomOrder()->limit(6)->get();
        return view('packages.ecommerce.website.price-in-nepal.categories', compact('category', 'products', 'brands', 'categories'));
    }
}
