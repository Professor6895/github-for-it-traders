<?php

namespace Jed\Ecommerce\App;

use Carbon\Carbon;

use Illuminate\Database\Eloquent\Model;

class FAQ extends Model
{
    protected $table = 'faqs';
    protected $fillable = [
      'type', 'type_id', 'question', 'answer',
    ];
}
