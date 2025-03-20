<?php

namespace Jed\Core\Http\Traits;

use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;

use Carbon\Carbon;

trait ControllerTrait
{
    public function isNull($value)
    {
        if ($value == null || $value == "null" || $value == "") {
            return true;
        }

        return false;
    }

    public function isTrue($value)
    {
        if ($value === 'true' || $value === true || $value === 1 || $value === '1') {
            return true;
        }
        return false;
    }

    public function uploadImage($file, $path, $upload_thumb = true)
    {
        $extension = $file->getClientOriginalExtension();
        $name = Carbon::now()->timestamp . '-' . dechex(rand(1000, 10000)) . '.' . $extension;
        $img = Image::make($file->getRealPath());

        //SAVE ORG IMAGE
        $org_image = $img->resize(1000, 1000, function ($constraint) {
            $constraint->aspectRatio();
        });
        Storage::disk('local')->put($path . '/' . $name, (string) $org_image->encode());

        if ($upload_thumb) {
            $thumb_image = $img->resize(400, 400, function ($constraint) {
                $constraint->aspectRatio();
            });
            Storage::disk('local')->put($path . '/400x400' . $name, (string) $thumb_image->encode());
        }
        $file_url = Storage::url($path . '/' . $name);

        return [
            'file_name' => $name,
            'file_url' => $file_url
        ];
    }

    public function uploadFile($file, $path)
    {
        $extension = $file->getClientOriginalExtension();
        $name = Carbon::now()->timestamp . '-' . dechex(rand(1000, 10000)) . '.' . $extension;
        Storage::putFileAs(
            $path,
            $file,
            $name
        );
        $file_url = Storage::url($path . '/' . $name);
        return [
            'file_name' => $name,
            'file_url' => $file_url
        ];
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

    public function updateMeta($model, $request)
    {
        $meta = json_decode($request->meta, true);

        $model->update([
            'meta_title' => (isset($meta['meta_title'])) ? $meta['meta_title'] : null,
            'meta_keywords' => (isset($meta['meta_keywords'])) ? $meta['meta_keywords'] : null,
            'meta_description' => (isset($meta['meta_description'])) ? $meta['meta_description'] : null,
        ]);
    }
}
