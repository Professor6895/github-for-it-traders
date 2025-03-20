<?php

namespace Jed\Core\App;

use Illuminate\Database\Eloquent\Model;

class Province extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
    protected $fillable = [
    'name'
    ];

    public function districts()
    {
        return $this->hasMany(District::class, 'province_id');
    }
}
