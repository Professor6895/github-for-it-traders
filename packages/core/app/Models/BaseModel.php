<?php

namespace Jed\Core\App;

use Illuminate\Support\Facades\Storage;

use Illuminate\Database\Eloquent\Model;

class BaseModel extends Model
{
    public static function boot()
    {
        parent::boot();
    }
    
    public function scopeExclude($query, $value = [])
    {
        return $query->select(array_diff($this->fillable, (array) $value));
    }

    public function scopeEnabled($query)
    {
        return $query->where('status', 1);
    }

    public function deleteFile($file_name, $path)
    {
        if ($file_name) {
            $check_image = Storage::disk('local')->exists($path . '/' . $file_name);
            if ($check_image) {
                Storage::disk('local')->delete($path . '/' . $file_name);
            }
            $check_thumbnail = Storage::disk('local')->exists($path . '/400x400' . $file_name);
            if ($check_thumbnail) {
                Storage::disk('local')->delete($path . '/400x400' . $file_name);
            }
        }
    }
}
