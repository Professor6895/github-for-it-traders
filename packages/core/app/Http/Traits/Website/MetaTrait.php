<?php

namespace Jed\Core\Http\Traits\Website;

use Artesaos\SEOTools\Facades\JsonLd;
use Artesaos\SEOTools\Facades\OpenGraph;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\TwitterCard;
use Illuminate\Support\Facades\URL;

trait MetaTrait
{

    public function __construct()
    {
        $this->settings = settings();
    }

    public function defaultMeta($title = null)
    {
        $meta_title = $title ? : $this->settings['core']['meta_title'];
        SEOMeta::setTitle($meta_title);
        SEOMeta::setDescription($this->settings['core']['meta_description']);
        SEOMeta::setKeywords($this->settings['core']['meta_keywords']);


        OpenGraph::setDescription($this->settings['core']['meta_description']);
        OpenGraph::setTitle($meta_title);
        OpenGraph::setUrl(URL::current());
        OpenGraph::addImage(asset($this->settings['core']['logo']));

        TwitterCard::setTitle($meta_title); // title of twitter card tag
        TwitterCard::setDescription($this->settings['core']['meta_description']); // description of twitter card tag
        TwitterCard::setUrl(URL::current()); // url of twitter card tag
        TwitterCard::setImage(asset($this->settings['core']['logo'])); // add image url

        JsonLd::setTitle($meta_title); // title of twitter card tag
        JsonLd::setDescription($this->settings['core']['meta_description']); // description of twitter card tag
        JsonLd::setUrl(URL::current()); // url of twitter card tag
        JsonLd::setImage(asset($this->settings['core']['logo'])); // add image url
    }
}
