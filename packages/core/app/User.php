<?php

namespace Jed\Core\App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Jed\Core\Notifications\PasswordResetNotification;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable; 
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
protected $fillable = [
        "id",
        "name",
        "email",
        "contact_number",
        "avatar",
        "address",
        "date_of_birth",
        "social_platform",
        "social_id",
        "institute_name",
        "password"
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $appends = ['avatar_image'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getAvatarImageAttribute()
    {
        return [
            "thumb" => $this->avatar ? url("/storage/uploads/avatars/users/{$this->id}/400x400{$this->avatar}") : "",
            "full" => $this->avatar ? url("/storage/uploads/avatars/users/{$this->id}/{$this->avatar}") : ""
        ];
    }

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new PasswordResetNotification($token));
    }
}
