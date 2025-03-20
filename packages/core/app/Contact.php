<?php

namespace Jed\Core\App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'name', 'email', 'contact', 'subject', 'message', 'reply', 'replied_at'
  ];
}
