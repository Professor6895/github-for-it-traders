<?php

namespace Jed\Blogs\Helpers;

use Carbon\Carbon;
use Illuminate\Support\Arr;
use Jed\Blogs\App\Blog;

class BlogHelper
{

    public function getBlogs($limit = null, $featured = false, $random = false)
    {
        $blogs = Blog::with('media', 'category')->latest()
            ->where(['status' => 1])
            ->whereDate('publish_date', '<', Carbon::now()
            ->toDateTimeString());

        if ($featured) {
            $blogs = $blogs->where('is_featured', 1);
        }

        if ($limit) {
            $blogs = $blogs->limit($limit);
        }

        return $blogs->get();
    }
}
