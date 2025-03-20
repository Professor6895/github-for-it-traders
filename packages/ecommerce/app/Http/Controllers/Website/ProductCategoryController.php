<?php

namespace Jed\Ecommerce\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Jed\Core\Http\Traits\Website\MetaTrait;
use Jed\Ecommerce\App\Helpers\ProductHelper;
use Jed\Ecommerce\App\ProductCategory;

class ProductCategoryController extends Controller
{
    use MetaTrait;
    public function __construct(ProductCategory $category, ProductHelper $productHelper)
    {
        $this->category = $category;
        $this->product_helper = $productHelper;
    }

    public function index($category_slug)
    {
        $category = $this->category->where(['slug' => $category_slug])->enabled()->firstOrFail();
        $products = $this->product_helper->getProductsByCategory($category, null, true);
        return view(resolveView('ecommerce::website.category-detail'), ['products' => $products]);
    }
}
