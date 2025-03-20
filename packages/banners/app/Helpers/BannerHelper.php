<?php

namespace Jed\Banners\Helpers;

use Carbon\Carbon;
use Illuminate\Support\Arr;
use Jed\Banners\App\Banner;
use Jed\Banners\App\BannerImage;

class BannerHelper
{
    public function getBannerImages($slug, $count = null)
    {
        $banner = Banner::where('slug', $slug)->first();
        if (!$banner) {
            return collect();
        }
        $images = BannerImage::with('media')->where('banner_id', $banner->id)->where(function ($query) {
            $query->where('start_date', null)
            ->orWhere('start_date', '<=', Carbon::now());
        })
        ->where(function ($query) {
            $query->where('end_date', null)
            ->orWhere('end_date', '>', Carbon::now());
        })
        ->get();

        return $images;
    }

    public function getBanners($slugs)
    {
        $banners = Banner::with('images.media')->whereIn('slug', $slugs)
        ->get()->mapWithKeys(function ($banner) {
            return [$banner['slug'] => $banner->images];
        })->toArray();

        return $banners;
    }
}
