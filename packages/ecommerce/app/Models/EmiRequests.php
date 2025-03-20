<?php

namespace Jed\Ecommerce\Cart;

use Illuminate\Database\Eloquent\Model;
use Jed\Core\App\User;
use Jed\Ecommerce\App\EmiBank;
use Jed\Ecommerce\App\Product;

class EmiRequest extends Model
{
    const STATUS_PENDING = 0;
    const STATUS_PROCESSING = 1;
    const STATUS_APPROVED = 2;
    const STATUS_FINISHED = 3;
    const STATUS_CANCELLED = 4;

    protected $table = 'emi_requests';
    protected $fillable = [ 'name', 'email', 'contact_number', 'address', 'dob_ad', 'dob_bs', 'gender', 'credit_card', 'bank', 'length_of_employment', 'monthly_income', 'no_of_dependents', 'occupation', 'residental_status', 'vehicle', 'emi_mode', 'down_payment', 'finance_amount', 'emi_per_month', 'product_attributes', 'salary_certificate', 'citizenship', 'photo', 'product_id', 'user_id', 'status', 'product_price', 'bank_statement', 'card_holder_name', 'card_number', 'card_expiry_date'];

    protected $appends = ['citizenship_url', 'salary_certificate_url', 'photo_url'];
    protected $casts = ['product_attributes' => 'array'];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id')->withTrashed();
    }

    public function bankDetail()
    {
        return $this->belongsTo(EmiBank::class, 'bank');
    }

    public function getCitizenshipUrlAttribute()
    {
        return url("/storage/uploads/emi-requests/{$this->id}/{$this->citizenship}");
    }

    public function getSalaryCertificateUrlAttribute()
    {
        return url("/storage/uploads/emi-requests/{$this->id}/{$this->salary_certificate}");
    }
    public function getPhotoUrlAttribute()
    {
        return url("/storage/uploads/emi-requests/{$this->id}/{$this->photo}");
    }

    public function scopeSearch($query, $keyword)
    {
        return $query
            ->where('name', 'like', "%{$keyword}%")
            ->orWhere('email', 'like', "%{$keyword}%")
            ->orWhere('contact_number', 'like', "%{$keyword}%");
    }
}
