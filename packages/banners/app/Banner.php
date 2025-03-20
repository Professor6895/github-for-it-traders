<?php
namespace Jed\Banners\App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Banner extends Model
{
    use SoftDeletes;
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
    protected $fillable = [
    "name", "slug", "status"
    ];

   
    public function images()
    {
        return $this->hasMany(BannerImage::class, 'banner_id')
        ->where(function ($query) {
            $query->where('start_date', null)
            ->orWhere('start_date', '<=', Carbon::now());
        })
        ->where(function ($query) {
            $query->where('end_date', null)
            ->orWhere('end_date', '>', Carbon::now()->subDay());
        })
        ->orderBy('order');
    }

    public static function boot()
    {
        parent::boot();
        static::deleting(function ($banner) {
            $banner->images()->delete();
            return true;
        });
    }
}
