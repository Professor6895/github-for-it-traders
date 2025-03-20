<?php

namespace Jed\Ecommerce\Http\Controllers\Website\API;

use App\Http\Controllers\Controller;
use Jed\Core\Http\Traits\Website\MetaTrait;
use Jed\Ecommerce\App\Helpers\ProductHelper;
use Jed\Ecommerce\App\ProductCategory;

class ProductCategoryController extends Controller
{
    public function __construct(ProductCategory $category, ProductHelper $productHelper)
    {
        $this->category = $category;
        $this->product_helper = $productHelper;
    }

    public function getCategoryProducts($category_slug)
    {
        $category = $this->category->where(['slug' => $category_slug])->enabled()->first();
        $products = $this->product_helper->getProductsByCategory($category, null, true);
        return response()->json([
          'success' => true,
          'products' => $products
        ]);
    }

    public function getAllCategories()
    {
        $categories = ProductCategory::with('media')->with('children')->where('parent_id', null)->get();
        return response()->json(['success' => true, 'data' => $categories]);
    }
}
