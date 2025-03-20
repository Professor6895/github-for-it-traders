<?php

namespace Jed\Ecommerce\App;

use Illuminate\Database\Eloquent\Model;

class EmiBank extends Model
{
    protected $table = 'emi_banks';
    protected $fillable = [
      'name',
      'bank_code',
      'email',
      'contact_number',
      'emi_form_file',
      'finance_amount_percentage'
    ];

    protected $appends = ['emi_form_file_url'];

    protected $casts = [
      'finance_amount_percentage' => 'array'
    ];

    public function getEmiFormFileUrlAttribute()
    {
        return  url("/storage/uploads/emi-forms/{$this->id}/{$this->emi_form_file}");
    }
}
