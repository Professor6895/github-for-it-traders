<?php

namespace Jed\Ecommerce\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Ecommerce\App\ProductBrand;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ProductBrandController extends Controller
{
    use ControllerTrait;

    public function index()
    {
        $brands = ProductBrand::withCount('images')->latest()->get();
        return response()->json(['success' => true, 'data' => $brands]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
        'name' => 'required|max:100',
        ]);

        $brand = ProductBrand::create([
        'name' => $request->name,
        'slug' => Str::slug($request->name),
        'description' => $request->description,
        'custom_code'  => $request->custom_code,
        ]);

        $this->updateMeta($brand, $request);

        if ($request->file('image')) {
            $brand->addMedia($request->file('image'))->toMediaCollection();
        }

        return response()->json(['success' => true, 'message' => 'Product brand successfully added.']);
    }

    public function update($id, Request $request)
    {
        $this->validate($request, [
        'name' => 'required|max:100',
        ]);

        $product_brand = ProductBrand::find($id);
        $product_brand->update([
        'name' => $request->name,
        'slug' =>($request->slug) ? $request->slug : Str::slug($request->name),
        'description' => $request->description,
        'custom_code'  => $request->custom_code,
        ]);

        $this->updateMeta($product_brand, $request);

        if ($request->file('image')) {
            if ($product_brand->getFirstMedia()) {
                $product_brand->getFirstMedia()->delete();
            }
            $product_brand->addMedia($request->file('image'))->toMediaCollection();
        }

        return response()->json(['success' => true, 'message' => 'Product brand successfully updated']);
    }

    public function destroy($id)
    {
        $brand = ProductBrand::find($id);
        $brand->delete();
        return response()->json(['success' => true, 'message' => 'Product brand successfully deleted']);
    }

    public function getBrandsDropdown()
    {
        $brands = ProductBrand::with('media')->select(['id', 'name'])->get();
        return response()->json(['success' => true, 'data' => $brands]);
    }


    //PRODUCT Brand IMAGES
    public function getProductBrandImages($brand_id)
    {
        $images = collect();
        $brand = ProductBrand::find($brand_id);

        foreach ($brand->images as $media) {
            $images->push([
                'image_preview' => $media->getUrl('thumb'),
                'custom_properties' => $media->custom_properties,
                'id' => $media->uuid
            ]);
        }
        return response()->json(['success' => true, 'data' => $images]);
    }

    public function saveProductBrandImage($brand_id, Request $request)
    {
        $this->validate($request, [
        'image' => 'required|mimes:jpg,bmp,png,gif|max:2048',
        ]);
        $brand = ProductBrand::find($brand_id);
        if ($request->file('image')) {
            $media = $brand->addMedia($request->file('image'))->toMediaCollection('banners');

            if ($request->has('link')) {
                $media->setCustomProperty('link', $request->link);
                $media->save();
            }
        }
        return response()->json(['success' => true, 'message' => 'Product brand image successfully updated']);
    }

    public function deleteProductBrandImage($brand_id, $image_id)
    {
        $media = Media::where('uuid', $image_id)->first();
        $media->delete();
        return response()->json(['success' => true, 'message' => "Image successfully deleted"]);
    }
}
