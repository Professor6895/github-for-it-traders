<?php

namespace Jed\Blogs\App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\URL;
use Jed\Core\App\MetaModelTrait;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class BlogCategory extends Model implements HasMedia
{
    use InteractsWithMedia;
    use MetaModelTrait;

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
    protected $fillable = [
    'title', 'slug', 'short_desc', 'content', 'status', 'meta_title', 'meta_keywords', 'meta_description'
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

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')
        ->nonQueued()
        ->width(400)
        ->height(400)
        ->sharpen(10);
    }

    public function blogs()
    {
        return $this->hasMany(Blog::class, 'category_id');
    }

    public function getBlogsCountAttribute()
    {
        return $this->blogs->count();
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
        $this->generateSiteMeta($data);
    }
}
