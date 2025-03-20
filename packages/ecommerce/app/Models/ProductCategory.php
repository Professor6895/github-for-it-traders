<?php

namespace Jed\Ecommerce\App;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\SoftDeletes;
use Jed\Core\App\BaseModel;
use Jed\Core\App\MetaModelTrait;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Illuminate\Support\Facades\URL;

class ProductCategory extends BaseModel implements HasMedia
{
    use SoftDeletes;
    use MetaModelTrait;
    use InteractsWithMedia;

    protected $table = 'product_categories';
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
    protected $fillable = [
    'title', 'slug', 'description', 'parent_id', 'status', 'meta_title', 'meta_keywords', 'meta_description', 'parent_tree', 'featured', 'order', 'custom_code'
    ];

    protected $appends = ['meta'];
    protected $hidden = ['meta_title', 'meta_keywords', 'meta_description'];


    public function toArray()
    {
        return array_merge(parent::toArray(), [
            'category_image' => [
                "full" => $this->getFirstMediaUrl('default') ? : asset('/website/images/placeholder-lg.png'),
                "thumb" => ($first_media = $this->getFirstMedia('default')) ? $first_media->getUrl('thumb') : asset('/website/images/placeholder-sm.png')
            ]
        ]);
    }

    public function getProductCategoryImageAttribute()
    {
        return [
            "full" => $this->getFirstMediaUrl('default') ? : asset('/website/images/placeholder-lg.png'),
            "thumb" => ($first_media = $this->getFirstMedia('default')) ? $first_media->getUrl('thumb') : asset('/website/images/placeholder-sm.png')
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

    public function images()
    {
        return $this->media()->where('collection_name', 'banners');
    }

    public function faqs()
    {
        return $this->hasMany(FAQ::class, 'type_id')->where('type', 'category');
    }

    public function children()
    {
        return $this->hasMany(ProductCategory::class, 'parent_id')->with('media', 'children');
    }

    public function parent()
    {
        return $this->belongsTo(ProductCategory::class, 'parent_id')->select('id', 'title', 'parent_id')->with('parent');
    }

    public function getParentsListAttribute()
    {
        $parents = $this->parentsArray();
        return implode(' / ', $parents->pluck('title')->toArray());
    }

    public function getCategoryFullNameAttribute()
    {
        return ($this->parent_tree) ? "{$this->parent_tree} / {$this->title}" : $this->title;
    }

    public function parentsArray()
    {
        $parents = collect([]);
        $parent = $this->parent;
        while (!is_null($parent)) {
            $parents->push($parent);
            $parent = $parent->parent;
        }
        return $parents->reverse();
    }

    public function getAllChildren()
    {
        $sections = new Collection();

        foreach ($this->children as $section) {
            $sections->push($section);
            $sections = $sections->merge($section->getAllChildren());
        }

        return $sections;
    }

    public static function boot()
    {
        parent::boot();
        static::created(function ($category) {
            $cat = $category->refresh();
            $cat->update([
            'parent_tree' => $cat->parents_list
            ]);
        });
        static::updated(function ($category) {
            $cat = $category->refresh();
            $cat->update([
            'parent_tree' => $cat->parents_list
            ]);
        });
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, 'categories_products', 'product_category_id', 'product_id');
    }

    public function getProductsCountAttribute()
    {
        $cat_arrays = array_merge($this->getAllChildren()->pluck('id')->toArray(), [$this->id]);
        $products = Product::join('categories_products', 'products.id', '=', 'categories_products.product_id')
              ->whereIn('categories_products.product_category_id', $cat_arrays)->count();
        return $products;
    }

    public function setMeta()
    {
        $meta = $this->meta;
        $settings = settings();
        $data['title'] = $meta['meta_title'] ?: $this->title;
        $data['description'] = $meta['meta_description'] ?: "Buy {$this->title} with best price on " . config('app.name');
        $data['image'] = ($first_media = $this->getFirstMedia()) ? $first_media->getUrl() : asset($settings['core']['logo']);
        $data['url'] = URL::full();
        $data['keywords'] = $meta['meta_keywords'];
        $this->generateSiteMeta($data);
    }
}
