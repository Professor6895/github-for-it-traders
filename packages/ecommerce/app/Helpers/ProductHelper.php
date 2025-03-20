<?php

namespace Jed\Ecommerce\App\Helpers;

use Illuminate\Http\Request;
use Jed\Ecommerce\App\Product;
use Jed\Ecommerce\App\ProductAttribute;
use Jed\Ecommerce\App\ProductBrand;
use Jed\Ecommerce\App\ProductCategory;
use Jed\Ecommerce\App\ProductVariant;

/**
 * ProductHelper
 */
class ProductHelper
{

    /**
     * __construct
     *
     * @return void
     */
    public function __construct()
    {
        $this->fiters = [];
        $this->get_filters = false;
    }

    /**
     * getProductsByCategory
     *
     * @param  mixed $category
     * @param  mixed $limit
     * @param  mixed $paginate
     * @return void
     */
    public function getProductsByCategory($category, $limit = null, $paginate = false, $random = false)
    {
        $cat_arrays = array_merge($category->getAllChildren()->pluck('id')->toArray(), [$category->id]);
        $products = Product::with('media', 'reviews:id,product_id,rating', 'discountcampaign')->enabled()
          ->join('categories_products', 'products.id', '=', 'categories_products.product_id')
          ->whereIn('categories_products.product_category_id', $cat_arrays);

        if ($random) {
            $products = $products->inRandomOrder();
        }
        if ($limit) {
            $products = $products->limit($limit);
        }



        return $paginate ? $products->paginate(env('PER_PAGE_PAGINATION', 30)) : $products->get();
    }


    /**
     * getLatestProducts
     *
     * @param  mixed $limit
     * @return void
     */
    public function getLatestProducts($limit)
    {
        $products = Product::with('media', 'reviews:id,product_id,rating')->enabled();
        if ($limit) {
            $products = $products->limit($limit);
        }
        return $products->get();
    }

    /**
     * getProductsForList
     *
     * @param  mixed $request
     * @param  mixed $paginate
     * @return mixed
     */
    public function getProductsForList(Request $request, $paginate = false, $return_query = false)
    {
        $per_page_products =settings()['ecommerce']['website_per_page_pagination'] ?? 28;
        $this->get_filters = $request->has('get_filters') && isTrue($request->get_filters);
        $products = Product::with('media', 'reviews:id,product_id,rating')->enabled();
        if ($request->has('product_filters')) {
            $product_filters = json_decode($request->product_filters, true);
            $products = $products->filter($product_filters);
        }
        if ($request->has('category')) {
            $products = $this->applyCategoryFilter($request->category, $products);
        }
        if ($request->has('brand')) {
            $brand = ProductBrand::where('slug', $request->brand)->first();
            $products = $products->where('brand_id', $brand->id);
        }

        if ($request->has('sorting') && !isNull($request->sorting)) {
            $products = $this->applyProductSorting($request->sorting, $products);
        }

        if ($request->has('min_price') && is_numeric($request->min_price)) {
            $products = $products->where('price', '>=', $request->min_price);
        }

        if ($request->has('max_price') && is_numeric($request->max_price) && $request->max_price != 100000) {
            $products = $products->where('price', '<=', $request->max_price);
        }

        $extra_products = collect();
        if ($request->has('keyword')) {
            $keyword_splitted = explode(' ', $request->keyword);
            if(sizeof($keyword_splitted) > 1) {
                foreach($keyword_splitted as $keyword) {
                    $product__ = $products->where('name', 'like', "%{$keyword}%")->get();
                    $extra_products = $extra_products->merge($product__);
                }
            }

            if (strlen($request->keyword) < 2) {
                abort(404);
            }
            $products_queried = $products->search($request->keyword)->get();
            if ($extra_products->count()) {
                $products_queried = $products_queried->merge($extra_products);
            }
            $this->getProductFilters($products_queried);
            $products_queried = $products_queried->paginate($per_page_products);
        } else {
            if (!$return_query) {
                $products_queried =  $paginate ? $products->paginate($per_page_products) : $products->get();
                if ($this->get_filters) {
                    $all_products = $products->get();
                    $this->getProductFilters($all_products);
                }
            } else {
                $products_queried = $products;
            }
        }
        
        return $products_queried;
    }

    /**
     * applyCategoryFilter
     *
     * @param  mixed $category_slug
     * @param  mixed $products
     * @return Object
     */
    public function applyCategoryFilter($category_slug, $products)
    {
        $category = ProductCategory::with('media', 'images')->where('slug', $category_slug)->firstOrFail();
        if ($category) {
            $cat_arrays = array_merge($category->getAllChildren()->pluck('id')->toArray(), [$category->id]);
            $products = $products->join('categories_products', 'products.id', '=', 'categories_products.product_id')
              ->whereIn('categories_products.product_category_id', $cat_arrays);
        }

        return $products;
    }

    public function applyProductSorting($sorting, $products)
    {
        switch ($sorting) {
            case 'a-z':
                $products = $products->orderBy('name', 'asc');
                break;
            case 'z-a':
                $products = $products->orderBy('name', 'desc');
                break;
            case 'lth':
                $products = $products->orderBy('price', 'asc');
                break;
            case 'htl':
                $products = $products->orderBy('price', 'desc');
                break;
            case 'latest':
                $products = $products->latest();
        }
        return $products;
    }

    /**
     * getProductFilters
     *
     * @param  mixed $products
     * @return void
     */
    public function getProductFilters($products)
    {
        $attribute_class_id_array = $products->pluck('attribute_class_id')->toArray();
        $attribute_class_id_array = array_unique(array_values(array_filter($attribute_class_id_array)));
        $attributes = ProductAttribute::select('name', 'values')->whereIn('class_id', $attribute_class_id_array)->where(['type' =>  'option', 'use_in_filter' => true])->get()->toArray();
        $this->filters['filterables'] = $attributes;


        $this->filters['price'] = [
        'max' => $products->max('price'),
        'min' => $products->min('price'),
        ];
        //BRANDS
        $brand_ids = array_unique(array_values($products->pluck('brand_id')->toArray()));
        $brands = ProductBrand::select('id', 'name', 'slug')->whereIn('id', $brand_ids)->get()->toArray();
        $this->filters['brands'] = $brands;
    }

    public function checkProductAvailability($product_data)
    {
        $product = Product::find($product_data['product_id']);
        if (!$product) {
            return ['status' => false, 'message' => "Product not available."];
        }
        if ($product->quantity == 0) {
            return ['status' => false, 'message' => "Currently out of stock"];
        }
        if ($product->quantity < $product_data['quantity']) {
            return ['status' => false, 'message' => "Only {$product->quantity} item(s) available."];
        }

        if (isset($product_data['product_attributes']) && !isNull($product_data['product_attributes'])) {
            $variant = ProductVariant::where('product_id', $product->id)->checkAttributes($product_data['product_attributes'])->first();
            if (!$variant) {
                return ['status' => false, 'message' => "Variant with selected attributes not available."];
            }

            if ($variant->quantity == 0) {
                return ['status' => false, 'message' => "Selected variant is currently out of stock"];
            }
            if ($variant->quantity < $product_data['quantity']) {
                return ['status' => false, 'message' => "Only {$variant->quantity} item(s) available for selected variant."];
            }
        }

        return ['status' => true];
    }

    public function searchProducts(Request $request)
    {
        $products = Product::select('id', 'slug', 'name', 'price', 'original_price')->with('media', 'reviews', 'categories:id,title', 'categories.media')->enabled();
        if ($request->has('keyword')) {
            $extra_products = collect();
            $keyword_splitted = explode(' ', $request->keyword);
            if(sizeof($keyword_splitted) > 1) {
                foreach($keyword_splitted as $keyword) {
                    $product__ = $products->where('name', 'like', "%{$keyword}%")->get();
                    $extra_products = $extra_products->merge($product__);
                }
            }

            if (strlen($request->keyword) < 2) {
                abort(404);
            }
            $products_queried = $products->search($request->keyword)->get();
            if ($extra_products->count()) {
                $products_queried = $products_queried->merge($extra_products);
            }

            // $products = $products->search($request->keyword);
        }
        $products = $products_queried->take(env('PER_PAGE_PAGINATION', 20))->makeHidden(['media', 'reviews', 'meta']);
        return $products;
    }
}
