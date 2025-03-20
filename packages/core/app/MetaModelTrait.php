<?php

namespace Jed\Core\App;

use Artesaos\SEOTools\Facades\JsonLd;
use Artesaos\SEOTools\Facades\OpenGraph;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\TwitterCard;

trait MetaModelTrait
{
    public function getMetaAttribute()
    {
        return [
        'meta_title' => $this->meta_title,
        'meta_keywords' => $this->meta_keywords,
        'meta_description' => $this->meta_description
        ];
    }

    public function generateSiteMeta($data)
    {
        SEOMeta::setTitle($data['title']);
        SEOMeta::setDescription($data['description']);
        SEOMeta::setKeywords($data['keywords']);

        OpenGraph::setDescription($data['description']);
        OpenGraph::setTitle($data['title']);
        OpenGraph::setUrl($data['url']);
        OpenGraph::addImage($data['image']);
        if (!empty($data['type'])) {
            SEOMeta::addMeta('og:type', $data['type'], 'property');
        }

        TwitterCard::setTitle($data['title']); // title of twitter card tag
        TwitterCard::setDescription($data['description']); // description of twitter card tag
        TwitterCard::setUrl($data['url']); // url of twitter card tag
        TwitterCard::setImage($data['image']); // add image url

        JsonLd::setTitle($data['title']); // title of twitter card tag
        JsonLd::setDescription($data['description']); // description of twitter card tag
        JsonLd::setUrl(url()->current()); // url of twitter card tag
        JsonLd::setImage($data['image']); // add image url
    }
}
