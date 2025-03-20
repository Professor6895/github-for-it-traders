<?php

namespace Jed\Ecommerce\App;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Vendor extends Authenticatable implements JWTSubject, HasMedia
{
    use Notifiable;
    use SoftDeletes;
    use InteractsWithMedia;

    public const STATUS_ACTIVE = 1;
    public const STATUS_INACTIVE = 0;
    public const STATUS_REQUESTED = 2;
  /**
   * The attributes that are mass assignable.
   *s
   * @var array
   */
    protected $fillable = [
        'name', 'slug', 'address', 'inventory_location', 'email', 'avatar', 'contact', 'full_name', 'contact_person_phone', 'contact_person_address', 'pan_no', 'password', 'status', 'remember_token', 'deleted_at', 'created_at', 'updated_at', 'legal_business_name', 'pan_document', 'bank_account_name', 'bank_account_number', 'bank_name', 'bank_branch', 'bank_cheque_copy', 'data_updated'
    ];

    protected $appends = ['avatar_image', 'pan_document_image', 'bank_cheque_image'];

    /**
     * getAvatarImageAttribute
     *
     * @return void
     */
    public function getAvatarImageAttribute()
    {
        return [
        "thumb" => $this->image ? url("/storage/uploads/images/vendors/{$this->id}/400x400{$this->image}") : "",
        "full" => $this->image ? url("/storage/uploads/images/vendors/{$this->id}/{$this->image}") : ""
        ];
    }

    /**
     * getPanDocumentAttribute
     *
     * @return void
     */
    public function getBankChequeImageAttribute()
    {
        return $this->bank_cheque_copy ? url("/storage/uploads/vendors/{$this->id}/{$this->bank_cheque_copy}") : "";
    }

     /**
     * getPanDocumentAttribute
     *
     * @return void
     */
    public function getPanDocumentImageAttribute()
    {
        return $this->pan_document ? url("/storage/uploads/vendors/{$this->id}/{$this->pan_document}") : "";
    }

    public function toArray()
    {
        return array_merge(parent::toArray(), ['userRole' => 'vendor']);
    }

    /**
     * getJWTIdentifier
     *
     * @return void
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
