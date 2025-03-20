<?php

namespace Jed\Pages\Helpers;

use Carbon\Carbon;
use Jed\Pages\App\Page;
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
        $map = $this->generatePagesSitemap($map);
        return $map;
    }

    public function generatePagesSitemap($map)
    {
        $pages = Page::all();
        foreach ($pages as $page) {
            $map->add(Url::create(route('website.page-detail', $page->slug))
            ->setPriority(0.8)
            ->setLastModificationDate(Carbon::now())
            ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY));

            $this->urls[] = route('website.page-detail', $page->slug);
        }

        return $map;
    }
}
