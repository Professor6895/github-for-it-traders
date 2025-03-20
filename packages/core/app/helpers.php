<?php

use Jed\Core\App\Setting;

if (!function_exists('resolveView')) {
  /**
   * Get an instance of the current request or an input item from the request.
   *
   * @param  array|string|null  $key
   * @param  mixed  $default
   * @return \Illuminate\Http\Request|string|array
   */
    function resolveView($view)
    {
        $new_view = str_replace('::', '.', 'packages.' . $view);
        return view()->exists($new_view) ? $new_view : $view;
    }
}

if (!function_exists('settings')) {
    function settings()
    {
        $settings = Setting::select('module', 'settings')->get();

        $keyed = $settings->mapWithKeys(function ($setting) {
            return [$setting['module'] => json_decode($setting['settings'], true)];
        });
        $settings_ = $keyed->all();
        return $settings_;
    }
}

if (!function_exists('randomString')) {
    function randomString($length = 20)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
}

if (!function_exists('isCurrentUrl')) {
    function isCurrentUrl($url)
    {
        return (url()->current() === $url) ? true: false;
    }
}

if (!function_exists('applicationModules')) {
    function applicationModules()
    {
        $modules = env('MIX_APPLICATION_MODULES');
        return explode(',', $modules);
    }
}


if (!function_exists('isNull')) {
    function isNull($value)
    {
        if ($value == null || $value == "null" || $value == "") {
            return true;
        }

        return false;
    }
}
if (!function_exists('isTrue')) {
    function isTrue($value)
    {
        if ($value === 'true' || $value === true || $value === 1 || $value === '1') {
            return true;
        }
        return false;
    }
}

if (!function_exists('getYoutubeEmbedUrl')) {
    function getYoutubeEmbedUrl($url)
    {
        $shortUrlRegex = '/youtu.be\/([a-zA-Z0-9_-]+)\??/i';
        $longUrlRegex = '/youtube.com\/((?:embed)|(?:watch))((?:\?v\=)|(?:\/))([a-zA-Z0-9_-]+)/i';

        if (preg_match($longUrlRegex, $url, $matches)) {
            $youtube_id = $matches[count($matches) - 1];
        }

        if (preg_match($shortUrlRegex, $url, $matches)) {
            $youtube_id = $matches[count($matches) - 1];
        }
        return 'https://www.youtube.com/embed/' . $youtube_id ;
    }
}

if (!function_exists('calculateVariationCampaignDiscount')) {
    function calculateVariationCampaignDiscount($variant, $discount_detail)
    {
        
    }
}
