<?php

namespace Jed\Ecommerce\Http\Controllers\Vendor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Ecommerce\Cart\VendorCategory;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class StoreDecorationController extends Controller
{

    public function __construct()
    {
        $this->vendor = auth('apiVendor')->user();
    }

    public function getBannerImages()
    {
        $bannerImages = $this->vendor->getMedia('banner_image')->toArray();
        return response()->json([
          'success' => true,
          'data' => $bannerImages
        ]);
    }

    public function saveBannerImage(Request $request)
    {
        if ($request->has('image')) {
            $image = $request->file('image');
            $this->vendor->addMedia($image)->withCustomProperties(['link' => $request->link])->toMediaCollection('banner_image');
        }

        return response()->json(['success' => true, 'message' => "Banner image uploaded."]);
    }


    public function deleteBannerImage($id)
    {
        $media = Media::where('uuid', $id)->first();
        $media->delete();
        return response()->json(['success' => true, 'message' => "Banner image successfully deleted"]);
    }

    public function saveHomeCategory(Request $request)
    {
        $exists = VendorCategory::where('vendor_id', $this->vendor->id)->where('category_id', $request->category_id)->exists();

        if ($exists) {
            return response()->json(['success' => false, 'message' => "Category already exists."]);
        }
        VendorCategory::create([
            'vendor_id' => $this->vendor->id,
            'category_id' => $request->category_id,
            'show_on_dashboard' => 1
        ]);

        return response()->json(['success' => true, 'message' => "Home page category added."]);
    }

    public function getHomeCategory()
    {
        $homeCategory = VendorCategory::with('category:id,title')->where('vendor_id', $this->vendor->id)->where('show_on_dashboard', 1)->get();
        return response()->json([
          'success' => true,
          'data' => $homeCategory
        ]);
    }

    public function deleteHomeCategory($id)
    {
        $category = VendorCategory::find($id);
        $category->delete();
        return response()->json(['success' => true, 'message' => "Home page category successfully deleted"]);
    }
}
