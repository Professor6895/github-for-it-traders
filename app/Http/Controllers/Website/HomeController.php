<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Banners\Helpers\BannerHelper;
use Jed\Ecommerce\App\Helpers\ProductHelper;
use Jed\Ecommerce\App\ProductCategory;

class HomeController extends Controller
{
    public function getAdvertisementBanners($slug)
    {
        $banner_helper = new BannerHelper();
        $banner_images = $banner_helper->getBannerImages($slug)->toArray();
        $view = view('packages.core.website.includes.home.advertisement-banners', ['images' => $banner_images, 'banner_class' => $slug])->render();
        return response()->json(['success' => true, 'view' => $view]);
    }

    public function getCategoryProducts($category_slug)
    {
        $category = ProductCategory::where('slug', $category_slug)->first();
        if (!$category) {
            return response()->json(['success' => false, 'message' => 'Category not found']);
        }
        $product_helper = new ProductHelper();
        $products = $product_helper->getProductsByCategory($category, 8, false, true);
        $view_link = route('website.category-detail', $category_slug);
        $category_image = null;
        if($category->images) {
            $category_image = $category->images->first();
        }

        $view = view('packages.core.website.common.prodcut-slider', ['products' => $products, 'title' => $category->title, 'view_link' => $view_link, 'class' => 'home-product-slider', 'category_image' => $category_image])->render();
        return response()->json(['success' => true, 'view' => $view]);
    }

    public function pcBuilder() {
        return view('packages.core.website.pc-builder');
    }
}
