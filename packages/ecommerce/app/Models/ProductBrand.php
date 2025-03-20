<?php

namespace Jed\Ecommerce\App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Jed\Core\App\MetaModelTrait;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Illuminate\Support\Facades\URL;

class ProductBrand extends Model implements HasMedia
{
    use SoftDeletes;
    use MetaModelTrait;
    use InteractsWithMedia;

    protected $table = 'product_brands';
  /**
   * The attributes that are mass assignable.
   *s
   * @var array
   */
    protected $fillable = [
    'name', 'slug', 'status', 'description', 'meta_keywords', 'meta_title', 'meta_description', 'custom_code'
    ];

    protected $appends = ['meta'];
    protected $hidden = ['meta_title', 'meta_keywords', 'meta_description'];


    public function toArray()
    {
        return array_merge(parent::toArray(), [
        'brand_image' => [
        "full" => $this->getFirstMediaUrl(),
        "thumb" => ($first_media = $this->getFirstMedia()) ? $first_media->getUrl('thumb') :  asset('/website/images/placeholder-sm.png')
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

    public function getBrandImageAttribute()
    {
        return [
            "full" => $this->getFirstMediaUrl() ? : asset('/website/images/placeholder-lg.png'),
            "thumb" => ($first_media = $this->getFirstMedia()) ? $first_media->getUrl('thumb') : asset('/website/images/placeholder-sm.png')
        ];
    }

    public function images()
    {
        return $this->media()->where('collection_name', 'banners');
    }

    public function products()
    {
        return $this->hasMany(Product::class, 'brand_id');
    }

    public function faqs()
    {
        return $this->hasMany(FAQ::class, 'type_id')->where('type', 'brand');
    }

    public function setMeta()
    {
        $meta = $this->meta;
        $settings = settings();
        $data['title'] = $meta['meta_title'] ?: $this->name;
        $data['description'] = $meta['meta_description'] ?: "Buy {$this->name} products with best price on " . config('app.name');
        $data['image'] = ($first_media = $this->getFirstMedia()) ? $first_media->getUrl() : asset($settings['core']['logo']);
        $data['url'] = URL::full();
        $data['keywords'] = $meta['meta_keywords'];
        $this->generateSiteMeta($data);
    }
}
