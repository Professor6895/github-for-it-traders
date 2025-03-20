<?php

namespace Jed\Blogs\Helpers;

use Carbon\Carbon;
use Jed\Blogs\App\Blog;
use Jed\Blogs\App\BlogCategory;
use Jed\Ecommerce\App\Product;
use Spatie\Sitemap\Tags\Url;

class SitemapHelper
{
    public $urls;
    public function __construct()
    {
        $this->urls = [];
    }
    public function generate($map)
    {
        $map = $this->generateBlogSitemap($map);
        $map = $this->generateBlogCategorySitemap($map);
        return $map;
    }

    public function generateBlogSitemap($map)
    {
        $blogs = Blog::all();
        foreach ($blogs as $blog) {
            $map->add(Url::create(route('website.blogs-detail', $blog->slug))
            ->setPriority(0.8)
            ->setLastModificationDate(Carbon::now())
            ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY));
            $this->urls[] = route('website.blogs-detail', $blog->slug);
        }

        return $map;
    }

    public function generateBlogCategorySitemap($map)
    {
        $categories = BlogCategory::all();
        foreach ($categories as $category) {
            $map->add(Url::create(route('website.blog-category-detail', $category->slug))
            ->setPriority(0.8)
            ->setLastModificationDate(Carbon::now())
            ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY));
            $this->urls[] = route('website.blog-category-detail', $category->slug);
        }

        return $map;
    }
}
