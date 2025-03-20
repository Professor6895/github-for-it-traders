<?php

namespace Jed\Core\App;

use Illuminate\Database\Eloquent\Model;

class Redirect extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = '301_redirects';
    protected $fillable = [
        'to', 'from'
    ];
}
