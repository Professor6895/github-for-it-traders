<?php

namespace Jed\Ecommerce\App;

use Illuminate\Database\Eloquent\Model;

class AttributeClass extends Model
{
  /**
   * The attributes that are mass assignable.
   *s
   * @var array
   */
  protected $fillable = [
    'name'
  ];

  public function attributes() {
    return $this->hasMany(ProductAttribute::class, 'class_id');
  }

  protected static function booted()
  {
      static::deleted(function ($class_) {
          $class_->attributes()->delete();
      });
  }
}
