<?php

namespace Jed\Banners\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Banners\App\BannerImage;
use Jed\Core\Http\Traits\ControllerTrait;

class BannerImageController extends Controller
{
    use ControllerTrait;

    public function index($banner_id)
    {
        $images = BannerImage::orderBy('order')->where('banner_id', $banner_id)->get();
        return response()->json(['success' => true, 'data' => $images]);
    }

    public function store($banner_id, Request $request)
    {
        $this->validate($request, [
        'image' => 'required',
        ]);

        $images_count = BannerImage::where('banner_id', $banner_id)->count();

        $banner_image = BannerImage::create([
        'link' => $request->link,
        'start_date' => $request->start_date,
        'end_date' => $request->end_date,
        'banner_id' => $banner_id,
        'content' => $request->content,
        'order' => $images_count + 1
        ]);

        if ($request->file('image')) {
            $banner_image->addMedia($request->file('image'))->toMediaCollection();
        }

        return response()->json(['success' => true, 'message' => 'Banner image successfully added']);
    }

    public function update($banner_id, $image_id, Request $request)
    {
        $banner_image = BannerImage::find($image_id);
        $banner_image->update([
        'link' => $request->link,
        'start_date' => $request->start_date,
        'end_date' => $request->end_date,
        'content' => $request->content
        ]);

        if ($request->file('image')) {
            if ($banner_image->getFirstMedia()) {
                $banner_image->getFirstMedia()->delete();
            }
            $banner_image->addMedia($request->file('image'))->toMediaCollection();
        }

        return response()->json(['success' => true, 'message' => 'Banner imaged successfully updated.']);
    }

    public function destroy($banner_id, $id)
    {
        $banner_image = BannerImage::find($id);
        $banner_image->delete();
        return response()->json(['success' => true, 'message' => 'Banner imaged successfully deleted.']);
    }


    public function sortImages($banner_id, Request $request)
    {
        $order = $request->payload;
        foreach ($order as $order_item) {
            $b_image = BannerImage::find($order_item['image_id']);
            $b_image->update([
            'order' => $order_item['order']
            ]);
        }

        return response()->json(['success' => true, 'message' => 'Image successfully sorted']);
    }
}
