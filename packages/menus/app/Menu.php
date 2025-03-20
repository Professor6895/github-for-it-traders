<?php

namespace Jed\Menus\App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Menu extends Model
{
    use SoftDeletes;
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
    protected $fillable = [
    'title', 'slug', 'menu_items'
    ];
 
    protected $casts = [
    'menu_items' => 'array',
    ];
}
