<?php

namespace Jed\Pages\App;

use Artesaos\SEOTools\Facades\SEOMeta;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Jed\Core\App\MetaModelTrait;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

/**
 * Page
 */
class Page extends Model implements HasMedia
{
    use SoftDeletes, MetaModelTrait, InteractsWithMedia;
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
    protected $fillable = [
    'title', 'slug', 'excerpt', 'content', 'meta_title', 'meta_keywords', 'meta_description'
    ];
  
  /**
   * appends
   *
   * @var array
   */
    protected $appends = ['meta'];
  
  /**
   * hidden
   *
   * @var array
   */
    protected $hidden = ['meta_title', 'meta_keywords', 'meta_descripiton'];

  /**
   * sections
   *
   * @return void
   */
    public function sections()
    {
        return $this->hasMany(PageSection::class, 'page_id');
    }
  
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

    public function getPageThumbnailImageAttribute()
    {
        return [
            "full" => $this->getFirstMediaUrl() ? : asset('/website/images/placeholder-lg.png'),
            "thumb" => ($first_media = $this->getFirstMedia()) ? $first_media->getUrl('thumb') : asset('/website/images/placeholder-sm.png')
        ];
    }
  /**
   * boot
   *
   * @return void
   */
    public static function boot()
    {
        parent::boot();
        static::deleting(function ($page) {
            $page->sections()->delete(); //
            return true;
        });
    }
  
  /**
   * setMeta
   *
   * @return void
   */
    public function setMeta()
    {
        $meta = $this->meta;
        SEOMeta::setTitle($meta['meta_title']  ?: $this->title);
        SEOMeta::setDescription($meta['meta_description' ? : $this->excerpt]);
    }
}
