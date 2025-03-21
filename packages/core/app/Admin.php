<?php

namespace Jed\Core\App;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Admin extends Authenticatable implements JWTSubject
{
    use Notifiable, SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'role_id', 'avatar'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $appends = ['full_name', 'permissions'];

    public function getFullNameAttribute()
    {
        return $this->name;
    }

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

    public function role(){ 
        return $this->hasOne(Role::class, 'id', 'role_id');
    }

    public function toArray()
    {
        return array_merge(parent::toArray(), ['userRole' => 'admin']); // TODO: Change the autogenerated stub
    }

    public function getPermissionsAttribute() {
        return $this->role->permissions ?? [];
    }
}
