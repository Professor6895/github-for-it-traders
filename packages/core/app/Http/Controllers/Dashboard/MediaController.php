<?php

namespace Jed\Core\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class MediaController extends Controller
{
    public function updateImageAlt(Request $request) {
        $image = Media::where('uuid', $request->image_id)->first();
        if ($image) {
            $image->setCustomProperty('alt_text', $request->text);
            $image->save();
        }

        return response()->json([
            'success' =>true,
            'message' => "Image alt saved successfully"
        ]);
    }
}
