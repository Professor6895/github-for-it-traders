<?php

namespace Jed\Ecommerce\App;

use CyrildeWit\EloquentViewable\Contracts\Viewable;
use CyrildeWit\EloquentViewable\InteractsWithViews;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\URL;
use Jed\Core\App\BaseModel;
use Jed\Core\App\MetaModelTrait;
use Jed\Ecommerce\Cart\ProductReview;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Product extends BaseModel implements HasMedia, Viewable
{
    use SoftDeletes;
    use InteractsWithMedia;
    use MetaModelTrait;
    use InteractsWithViews;

    const STATUS_ENABLED = 1;
    const STATUS_DISABLED = 0;
    const STATUS_DRAFT = 2;
    /**
     * The attributes that are mass assignable.
     *s
     * @var array
     */
    protected $fillable = [
    'name',
    'slug',
    'short_description',
    'description',
    'sku',
    'price',
    'original_price',
    'brand_id',
    'vendor_id',
    'quantity',
    'unit',
    'weight',
    'length',
    'width',
    'height',
    'status',
    'is_featured',
    'attributes',
    'attribute_class_id',
    'variant_attributes',
    'meta_title',
    'meta_keywords',
    'meta_description',
    'highlights',
    'product_video_url',
    'emi_enabled',
    'pre_order',
    'pre_order_price',
    'custom_code',
    'warranty_description',
    ];

    protected $casts = ['attributes' => 'array', 'variant_attributes' => 'array'];
    protected $appends = ['meta', 'average_rating', 'discounted_price'];
    protected $hidden = ['meta_title', 'meta_keywords', 'meta_description'];

    public function categories()
    {
        return $this->belongsToMany(ProductCategory::class, 'categories_products', 'product_id', 'product_category_id');
    }

    public function variants()
    {
        return $this->hasMany(ProductVariant::class, 'product_id');
    }

    public function brand()
    {
        return $this->belongsTo(ProductBrand::class, 'brand_id');
    }

    public function reviews()
    {
        return $this->hasMany(ProductReview::class, 'product_id')->where('status', ProductReview::STATUS_APPROVED);
    }

    public function vendor()
    {
        return $this->belongsTo(Vendor::class, 'vendor_id');
    }

    public function getAverageRatingAttribute()
    {
        return $this->reviews->avg('rating') ?? 0;
    }

    public function getCategoryIdsAttribute()
    {
        return $this->categories()->pluck('id')->toArray();
    }

    public function discountcampaign()
    {
        return $this->belongsTo(DiscountCampaignProduct::class, 'id', 'product_id')->with('campaign');
    }

    public function getDiscountedPriceAttribute()
    {
        if (isset($this->discountcampaign)) {
            if ($this->discountcampaign->campaign->is_active) {
                $price = $this->calculateDiscountedPrice();
                return $price;
            }
        }
        return $this->price;
    }

    public function calculateDiscountedPrice()
    {
        $campaign = $this->discountcampaign;
        $product_price = $this->price;
        if ($this->original_price) {
            $product_price = $this->original_price;
        }
        if ($campaign->discount_type == 1) {
            $product_price = $product_price - $campaign->discount_value;
        }
        if ($campaign->discount_type == 2) {
            $product_price = $product_price - ($product_price * $campaign->discount_value / 100);
        }

        return $product_price;
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('preview')
        ->nonQueued()
        ->width(400)
        ->height(400)
        ->sharpen(10);

        $this->addMediaConversion('thumbnail')
        ->nonQueued()
        ->width(200)
        ->height(200)
        ->sharpen(10);
    }


    public function toArray()
    {
        $default_media = $this->defaultMedia();
        return array_merge(parent::toArray(), [
        'product_image' => [
            "full" => ($default_media) ? $default_media->getUrl() : "",
            "thumb" => ($default_media) ? $default_media->getUrl('thumbnail') : "",
            'alt_text' => ($default_media) ? $default_media->getCustomProperty('alt_text') ?? null : null
        ]
        ]);
    }


    public function getDefaultMediaAttribute()
    {
        $default_media = $this->defaultMedia();
        return [
            "full" => ($default_media) ? $default_media->getUrl() : asset('/website/images/placeholder-lg.png'),
            "thumb" => ($default_media) ? $default_media->getUrl('thumbnail') : asset('/website/images/placeholder-sm.png'),
            'alt_text' => ($default_media) ? $default_media->getCustomProperty('alt_text') ?? null : null
        ];
    }

    public function getOtherMediasAttribute()
    {
        return  $this->getMedia()->filter(function ($value) {
            return !isset($value->custom_properties['is_default']) || $value->custom_properties['is_default'] != true ;
        });
    }

    public function getVariationCombinationAttribute()
    {
        $variants = $this->variants()->pluck('attributes')->toArray();
        $combinations = [];
        foreach ($variants as $variant) {
            foreach ($variant as $key => $value) {
                if (!isset($combinations[$key])) {
                    $combinations[$key][] = $value;
                } else {
                    if (!in_array($value, $combinations[$key])) {
                        $combinations[$key][] = $value;
                    }
                }
            }
        }

        return $combinations;
    }

    public function defaultMedia()
    {
        $default_media = $this->getMedia('default', function (Media $media) {
            return !isset($media->custom_properties['color']) && isset($media->custom_properties['is_default']);
        })->first();
        return $default_media;
    }

    public function scopeFilter($query, $filters)
    {
        foreach ($filters as $key => $filter) {
            if (sizeof($filter)) {
                $query = $query->whereIn("attributes->product_attributes->$key", $filter);
            }
        }

        return $query;
    }

    public function scopeSearch($query, $keyword)
    {
        return $query->where('name', 'like', "%{$keyword}%")->orWhere('description', 'like', "%{$keyword}%");
    }

    public function setMeta()
    {
        $meta = $this->meta;
        $settings = settings();
        $data['title'] = $meta['meta_title'] ?: $this->name;
        $data['description'] = $meta['meta_description'] ?: $this->short_description;
        $data['image'] = ($first_media = $this->defaultMedia()) ? $first_media->getUrl() : asset($settings['core']['logo']);
        $data['url'] = URL::current();
        $data['keywords'] = $meta['meta_keywords'];
        $data['type'] = 'product';
        $this->generateSiteMeta($data);
    }
}
