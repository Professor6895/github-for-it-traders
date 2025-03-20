<?php

namespace Jed\Pages\Helpers;

use Illuminate\Support\Arr;
use Jed\Pages\App\Page;

class PageHelper
{
    public function getPage(string $slug, $sections = false)
    {
        $page = Page::with('media')->where('slug', $slug);
        if ($sections) {
            $page = $page->with('sections.media');
        }
        return $page->first();
    }
}
