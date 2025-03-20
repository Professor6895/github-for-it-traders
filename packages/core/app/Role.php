<?php

namespace Jed\Core\App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'name', 'permissions'
  ];

  protected $casts = [
    'permissions' => 'array',
  ];
}
