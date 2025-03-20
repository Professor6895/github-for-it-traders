<?php

namespace Jed\Banners\App;

use Illuminate\Database\Eloquent\Model;
use Jed\Core\App\BaseModel;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class BannerImage extends BaseModel implements HasMedia
{
    use InteractsWithMedia;

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
    protected $fillable = [
    "link", "content", "start_date", "end_date", "banner_id", "order"
    ];

    public function toArray()
    {
        return array_merge(parent::toArray(), [
        'banner_image' => [
        "full" => $this->getFirstMediaUrl(),
        "thumb" => $this->getFirstMedia()->getUrl('thumb')
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
}
