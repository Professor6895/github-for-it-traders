<?php

namespace Jed\Ecommerce\Helpers;

use Carbon\Carbon;
use Jed\Ecommerce\App\Product;
use Jed\Ecommerce\App\ProductBrand;
use Jed\Ecommerce\App\ProductCategory;
use Spatie\Sitemap\Tags\Url;

class SitemapHelper
{
    public $urls = [];
    public function __construct()
    {
        $this->urls = [];
    }

    public function generate($map)
    {
        $map = $this->generateProductsSitemap($map);
        $map = $this->generateCategorySitemap($map);
        $map = $this->generateBrandSitemap($map);

        return $map;
    }

    public function generateBrandSitemap($map)
    {
        $brands = ProductBrand::all();
        foreach ($brands as $brand) {
            $map->add(Url::create(url("/brand/{$brand->slug}"))
            ->setPriority(0.8)
            ->setLastModificationDate(Carbon::now())
            ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY));

            // $map->add(Url::create(url("/brand/{$brand->slug}-price-in-nepal"))
            // ->setPriority(0.8)
            // ->setLastModificationDate(Carbon::now())
            // ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY));

            $this->urls[]  = url("/brand/{$brand->slug}");
        }

        return $map;
    }

    public function generateCategorySitemap($map)
    {
        $categories = ProductCategory::all();
        foreach ($categories as $category) {
            $map->add(Url::create(url("/category/{$category->slug}"))
            ->setPriority(0.8)
            ->setLastModificationDate(Carbon::now())
            ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY));

            // $map->add(Url::create(url("/category/{$category->slug}-price-in-nepal"))
            // ->setPriority(0.8)
            // ->setLastModificationDate(Carbon::now())
            // ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY));
            $this->urls[]  = url("/category/{$category->slug}");
            // $this->urls[]  = url("/category/{$category->slug}-price-in-nepal");
        }

        return $map;
    }

    public function generateProductsSitemap($map)
    {
        $products = Product::all();
        foreach ($products as $product) {
            if ($product->emi_enabled) {
                $map->add(Url::create(route('website.product-detail.apply-emi', $product->slug))
                ->setPriority(0.8)
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY));
                $this->urls[]  = route('website.product-detail.apply-emi', $product->slug);
            }
            $map->add(Url::create(route('website.product-detail', $product->slug))
            ->setPriority(0.8)
            ->setLastModificationDate(Carbon::now())
            ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY));
            $this->urls[]  = route('website.product-detail', $product->slug);
        }

        return $map;
    }
}
