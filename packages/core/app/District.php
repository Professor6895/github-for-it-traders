<?php

namespace Jed\Core\App;

use Illuminate\Database\Eloquent\Model;

class District extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
    protected $fillable = [
    'name', 'province_id'
    ];
}
