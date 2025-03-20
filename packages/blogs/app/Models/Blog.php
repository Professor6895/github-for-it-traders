<?php

namespace Jed\Blogs\App;

use CyrildeWit\EloquentViewable\Contracts\Viewable;
use CyrildeWit\EloquentViewable\InteractsWithViews;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\URL;
use Jed\Core\App\MetaModelTrait;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Blog extends Model implements HasMedia, Viewable
{
    use InteractsWithMedia;
    use MetaModelTrait;
    use InteractsWithViews;

  /**
   * fillable : Mass assianable fields
   *
   * @var array
   */
    protected $fillable = [
    'title', 'slug', 'short_desc', 'content', 'author', 'is_featured', 'status',  'meta_title', 'meta_keywords', 'meta_description', 'category_id', 'publish_date'
    ];

    protected $appends = ['meta'];

    public function toArray()
    {
        return array_merge(parent::toArray(), [
        'thumbnail_image' => [
        "full" => $this->getFirstMediaUrl(),
        "thumb" => ($first_media = $this->getFirstMedia()) ? $first_media->getUrl('thumb') : ""
        ]
        ]);
    }

    public function getBlogThumbnailAttribute()
    {
        return [
            "full" => $this->getFirstMediaUrl() ? : asset('/website/images/placeholder-landscape.png'),
            "thumb" => ($first_media = $this->getFirstMedia()) ? $first_media->getUrl('thumb') : asset('/website/images/placeholder-landscape.png'),
            'alt_text' => ($first_media = $this->getFirstMedia()) ? $first_media->getCustomProperty('alt_text') ?? null : null
        ];
    }
    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')
        ->nonQueued()
        ->width(400)
        ->height(400)
        ->sharpen(10);
    }

    public function getDates()
    {
        return array('created_at', 'publish_date', 'updated_at');
    }

    public function category()
    {
        return $this->belongsTo(BlogCategory::class, 'category_id');
    }

    public function setMeta()
    {
        $meta = $this->meta;
        $settings = settings();
        $data['title'] = $meta['meta_title'] ?: $this->title;
        $data['description'] = $meta['meta_description'] ?: $this->short_desc;
        $data['image'] = ($first_media = $this->getFirstMedia()) ? $first_media->getUrl() : asset($settings['core']['logo']);
        $data['url'] = URL::current();
        $data['keywords'] = $meta['meta_keywords'];
        $data['type'] = 'article';
        $this->generateSiteMeta($data);
    }
}
