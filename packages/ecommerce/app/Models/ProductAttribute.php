<?php

namespace Jed\Ecommerce\App;

use Illuminate\Database\Eloquent\Model;

class ProductAttribute extends Model
{
  /**
   * The attributes that are mass assignable.
   *s
   * @var array
   */
    protected $fillable = [
      'name', 'type', 'values', 'class_id', 'use_for_variant', 'use_in_filter'
    ];

    protected $casts = ['values' => 'array'];
}
