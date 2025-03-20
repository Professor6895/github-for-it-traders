<?php

namespace Jed\Pages\App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class PageSection extends Model implements HasMedia
{
  use SoftDeletes, InteractsWithMedia;
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'title', 'excerpt', 'content', 'page_id'
  ];


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
}
