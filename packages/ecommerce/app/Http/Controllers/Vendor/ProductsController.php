<?php

namespace Jed\Ecommerce\Http\Controllers\Vendor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Ecommerce\App\Product;
use Jed\Ecommerce\App\ProductBrand;
use Jed\Ecommerce\App\ProductCategory;
use Jed\Ecommerce\Cart\CartItem;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Throwable;

class ProductsController extends Controller
{
    use ControllerTrait;

    public function __construct()
    {
        $this->vendor = auth('apiVendor')->user();
    }

    public function index(Request $request)
    {
        $products = Product::with('media')->where('vendor_id', $this->vendor->id)->latest();
        if ($request->has('search') && !$this->isNull($request->search)) {
            $products = $products->where('name', 'LIKE', "%{$request->search}%");
        }

        $products  = $products->paginate(env('ADMIN_PER_PAGE_PAGINATION', 10));
        return response()->json(['success' => true, 'data' => $products]);
    }

    public function getCategoryDropdown()
    {
        $categories = ProductCategory::with('media')->select('title', 'id', 'parent_tree')
          ->get()
          ->setAppends(['category_full_name']);
        return response()->json(['success' => true, 'data' => $categories]);
    }

    public function getBrandsDropdown()
    {
        $brands = ProductBrand::with('media')->select(['id', 'name'])->get();
        return response()->json(['success' => true, 'data' => $brands]);
    }

    public function storeProductDetail(Request $request)
    {
        $this->validate($request, $this->validationRules($request));
        $product = Product::create([
        'name' => $request->name,
        'slug' => Str::slug($request->name),
        'sku' => $request->sku,
        'brand_id' => $request->brand_id,
        'status' => Product::STATUS_DRAFT,
        'short_description' => $request->short_description,
        'description' => $request->description,
        'highlights' => $request->highlights,
        'product_video_url' => $request->product_video_url,
        'emi_enabled' => isTrue($request->emi_enabled) ? true : false,
        'vendor_id' => $this->vendor->id,
        ]);

        $product->categories()->sync($request->category_ids);

        return response()->json(['success' => true, 'message' => 'Product detail successfully added.', 'product_id' => $product->id]);
    }

    public function updateProductDetail($product_id, Request $request)
    {
        $validation_rules = $this->validationRules($request);
        // $validation_rules['sku'] = ['required', Rule::unique('products')->ignore($product_id)];
        $this->validate($request, $validation_rules);

        $product = Product::find($product_id);
        $product->update([
        'name' => $request->name,
        'slug' => Str::slug($request->name),
        'sku' => $request->sku,
        'brand_id' => $request->brand_id,
        'status' => ($product->status == Product::STATUS_DRAFT) ? Product::STATUS_DRAFT : (($this->isTrue($request->status)) ?  1 : 0),
        'short_description' => $request->short_description,
        'description' => $request->description,
        'highlights' => $request->highlights,
        'product_video_url' => $request->product_video_url,
        'emi_enabled' => isTrue($request->emi_enabled) ? true : false
        ]);

        $product->categories()->sync($request->category_ids);
        return response()->json(['success' => true, 'message' => 'Product detail successfully updated.', 'product_id' => $product->id]);
    }

    public function updateProductPrice($product_id, Request $request)
    {
        $rules = [
            'price' => 'required',
            'quantity' => 'required'
        ];
        if (!$this->isNull($request->original_price)) {
            $rules['original_price'] = 'gt:' . (int)$request->price;
        }
        $this->validate($request, $rules);

        $product = Product::find($product_id);
        $product->update([
            'price' => $request->price,
            'original_price' => ($this->isNull($request->original_price)) ? null : $request->original_price,
            'quantity' => $request->quantity,
            'pre_order' => isTrue($request->pre_order) ? true : false,
            'pre_order_price' => $request->pre_order_price,
        ]);
        return response()->json(['success' => true, 'message' => 'Price detail successfully updated.']);
    }


    public function updateMetaFields($product_id, Request $request)
    {
        $product = Product::find($product_id);
        $this->updateMeta($product, $request);
        return response()->json(['success' => true, 'message' => 'Meta detail successfully updated.']);
    }

    public function show($id)
    {
        $product = Product::with('variants')->where('vendor_id', $this->vendor->id)->findOrFail($id)->setAppends(['category_ids', 'meta']);
        return response()->json(['success' => true, 'data' => $product]);
    }

    public function update($id, Request $request)
    {
    }

    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();
        CartItem::where('product_id', $id)->delete();
        return response()->json(['success' => true, 'message' => 'Product successfully deleted']);
    }

    public function validationRules(Request $request)
    {
        $rules = [
        'name' => 'required|max:500',
        'description' => 'required',
        'sku' => 'required',
        'category_ids' => 'required'
        ];

        return $rules;
    }

    public function uploadProductImage($product_id, Request $request)
    {
        $has_variant = $request->has('color_variant') && !isNull($request->color_variant);
        $this->validate($request, [
            'files.*' => 'required|mimes:jpg,bmp,png,jpeg,gif'
        ]);

        $product = Product::find($product_id);
        $files = $request->file('files');

        if (!$has_variant) {
            $media_count = $product->getMedia()->filter(function ($value) {
                return !isset($value->custom_properties['color']);
            })->count();
            if ((count($files) + $media_count) > 7) {
                return response()->json(['success' => false, 'message' => 'Only 7 images allowed.']);
            }
        } else {
            $media_count = $product->getMedia('default', ['color' => $request->color_variant])->count();
            if ((count($files) + $media_count) > 7) {
                return response()->json(['success' => false, 'message' => 'Only 7 images allowed.']);
            }
        }
        foreach ($files as $key => $file) {
            if ($has_variant) {
                $media = $product->addMedia($file)->withCustomProperties(['color' => $request->color_variant])->toMediaCollection();
            } else {
                $media = $product->addMedia($file)->toMediaCollection();
            }
            if ($media_count == 0 && $key == 0) {
                $media->setCustomProperty('is_default', true);
                $media->save();
            }
        }

        return response()->json(['success' => true, 'message' => 'Product images successfully added.']);
    }

    public function getProductImages($product_id)
    {
        $product = Product::find($product_id);
        $medias = $product->getMedia();
        return response()->json(['success' => true, 'data' => $medias]);
    }

    public function removeProductImages($image_id)
    {
        $media = Media::where('uuid', $image_id)->first();
        if ($media->hasCustomProperty('is_default')) {
            return response()->json(['success' => false, 'message' => "Primary image cannot be deleted"]);
        }
        $media->delete();
        return response()->json(['success' => true, 'message' => "Image successfully deleted"]);
    }

    public function setPrimaryImage($product_id, $image_id, Request $request)
    {
        $has_variant = !isNull($request->color_variant);
        $product = Product::find($product_id);

        if ($has_variant) {
            $images = $product->getMedia('default', ['color' => $request->color_variant]);
        } else {
            $images = $product->getMedia()->filter(function ($value) {
                return !isset($value->custom_properties['color']);
            });
        }
        $image = $images->where('uuid', $image_id)->first();
        if ($image) {
            $image->setCustomProperty('is_default', true);
            $image->save();
        }
        foreach ($images as $image) {
            if ($image->uuid !== $image_id && $image->hasCustomProperty('is_default')) {
                $image->forgetCustomProperty('is_default');
                $image->save();
            }
        }
        return response()->json(['success' => true, 'message' => "Image set as primary image."]);
    }

    //Save Product Attributes
    public function saveProductAttributes($product_id, Request $request)
    {
        $product = Product::find($product_id);

        $data = [
        'attribute_class_id' => $request->attribute_class_id,
        'product_attributes' => $request->product_attributes
        ];

        $product->update([
        'attributes' => $data,
        'attribute_class_id' => $request->attribute_class_id
        ]);

        return response()->json(['success' => true, 'message' => "Product attribute successfully updated"]);
    }

    public function toggleProductStatus($product_id)
    {
        $product = Product::find($product_id);
        $product->update([
            'status' => $product->status === 0 || $product->status === 2 ? 1 : 0
        ]);

        return response()->json(['success' => true, 'message' => "Product successfully updated", 'status' => $product->status]);
    }


    public function duplicateProduct(Request $request)
    {
        $product = Product::find($request->product_id);
        $product_categories = $product->categories()->pluck('id')->toArray();
        $new_name = $product->name . "-copy";
        $new_slug = Str::slug($new_name);
        $new_sku = $product->sku . "-copy";

        $check_existtance = Product::where('slug', $new_slug)->first();
        if ($check_existtance) {
            return response()->json(['success' => false, 'message' => 'Product with same name already exists.']);
        }
        $new_product = $product->replicate();
        $new_product->name = $new_name;
        $new_product->slug = Str::slug($new_name);
        $new_product->sku = $new_sku;
        $new_product->save();

        //Assign categories to new product
        $new_product->categories()->sync($product_categories);

        if (isTrue($request->duplicate_images)) {
            $product->media->each(function (Media $media) use ($new_product) {
                $props = $media->toArray();
                unset($props['uuid']);
                unset($props['id']);

                $new_product->addMedia($media->getPath())
                    ->preservingOriginal()
                    ->withProperties($props)
                    ->toMediaCollection($media->collection_name);
            });
        }
        if (isTrue($request->duplicate_variants)) {
            foreach ($product->variants as $variant) {
                $new_variant = $variant->replicate();
                $new_variant->product_id = $new_product->id;
                $new_variant->save();
            }
        }
        return response()->json(['success' => true, 'message' => 'Product successfully duplicated']);
    }
}
