<?php

namespace Jed\Ecommerce\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Ecommerce\App\Product;
use Illuminate\Validation\Rule;
use Jed\Ecommerce\App\Exports\ProductsExport;
use Jed\Ecommerce\App\Helpers\ProductHelper;
use Jed\Ecommerce\Cart\CartItem;
use Maatwebsite\Excel\Facades\Excel;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Throwable;

class ProductsController extends Controller
{
    use ControllerTrait;

    public function index(Request $request)
    {
        $products = $this->queryProducts($request);
        $products  = $products->paginate(env('ADMIN_PER_PAGE_PAGINATION', 10));
        return response()->json(['success' => true, 'data' => $products]);
    }

    public function queryProducts($request) {
        $product_helper = new ProductHelper();
        $products = Product::with('media');
        if ($request->has('search') && !$this->isNull($request->search)) {
            $products = $products->where('name', 'LIKE', "%{$request->search}%");
        }

        $is_sorted = false;
        if ($request->has('sort')) {
            $sort = json_decode($request->sort, true);
            foreach($sort as $sort_key => $sort_as) {
                if ($sort_as != null) {
                    $is_sorted = true;
                    $products = $products->orderBy($sort_key, $sort_as);
                }
            }
        }

        $filters = json_decode($request->filters, true);
        if(isset($filters['category_slug'])) {
            $products = $product_helper->applyCategoryFilter($filters['category_slug'], $products);
        }
        if (isset($filters['brand_id'])) {
            $products = $products->where('brand_id', $filters['brand_id']);
        }
        if (!$is_sorted) {
            $products = $products->latest();
        }

        return $products;
    }

    public function getVendorsProducts($vendor_id)
    {
        if ($vendor_id == 0) {
            $products = Product::whereNull('vendor_id')->with('media')->latest()->get();
        } else {
            $products = Product::where('vendor_id', $vendor_id)->with('media')->latest()->get();
        }
        return response()->json(['success' => true, 'data' => $products]);
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
        'vendor_id' => $request->vendor_id,
        'warranty_description' => $request->warranty_description
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
            // 'slug' => Str::slug($request->name),
            'sku' => $request->sku,
            'brand_id' => $request->brand_id,
            'status' => ($product->status == Product::STATUS_DRAFT) ? Product::STATUS_DRAFT : (($this->isTrue($request->status)) ?  1 : 0),
            'short_description' => $request->short_description,
            'description' => $request->description,
            'highlights' => $request->highlights,
            'product_video_url' => $request->product_video_url,
            'emi_enabled' => isTrue($request->emi_enabled) ? true : false,
            'vendor_id' => $request->vendor_id,
            'warranty_description' => $request->warranty_description
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
        $product->update([
            'custom_code' => $request->custom_code,
            'slug' => $request->slug
        ]);
        return response()->json(['success' => true, 'message' => 'Meta detail successfully updated.']);
    }

    public function show($id)
    {
        $product = Product::with('variants')->findOrFail($id)->setAppends(['category_ids', 'meta']);
        return response()->json(['success' => true, 'data' => $product]);
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
            'files.*' => 'required|mimes:jpg,bmp,png,jpeg,gif,webp'
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
                unset($props['original_url']);
                unset($props['preview_url']);
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

    public function exportProducts(Request $request) {
        $products = $this->queryProducts($request)->get();
        ob_end_clean();
        ob_start();
        return Excel::download(new ProductsExport($products), 'products_export.xlsx');
    }
}
