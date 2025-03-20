<?php

namespace Jed\Ecommerce\Http\Controllers\Vendor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Ecommerce\App\Product;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Jed\Ecommerce\App\ProductAttribute;
use Jed\Ecommerce\App\ProductVariant;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Throwable;

class ProductVariantController extends Controller
{
    use ControllerTrait;

    public function __construct()
    {
        $this->vendor = auth('apiVendor')->user();
    }
    public function index($product_id)
    {
        $variants = ProductVariant::where(['product_id' => $product_id])->get();
        return response()->json(['success' => true, 'data' => $variants]);
    }

    public function store($product_id, Request $request)
    {
        $req_attributes = $request->get('attributes');
        $check_variant = ProductVariant::where(['product_id' => $product_id])->whereJsonContains('attributes', $req_attributes)->first();
        if (!$request->id) {
            if ($check_variant) {
                return response()->json(['success' => false, 'message' => "Variant already exists."]);
            }
        }
        $product = Product::select('id', 'variant_attributes')->find($product_id);
        $variant_attributes = ($product->variant_attributes == null) ? [] : $product->variant_attributes;

        foreach ($req_attributes as $att_key => $value) {
            $variant_attributes[$att_key] = isset($variant_attributes[$att_key]) ? array_merge($variant_attributes[$att_key], [$value]) : [$value];
        }

        $product->update([
        'variant_attributes' => $variant_attributes
        ]);

        $variant_data = [
        'product_id' => $product_id,
        'price' => $request->price,
        'quantity' => $request->quantity,
        'attributes' => $request->get('attributes')
        ];
        if ($request->id) {
            $variant = ProductVariant::find($request->id);
            $variant->update($variant_data);
            $action = 'added';
        } else {
            $variant = ProductVariant::create($variant_data);
            $action = 'updated';
        }

        return response()->json(['success' => true, 'message' => "Variant successfully {$action}."]);
    }

    public function destroy($product_id, $variant_id)
    {
        $variant = ProductVariant::where(['product_id' => $product_id, 'id' => $variant_id])->delete();
        return response()->json(['success' => true, 'message' => "Variant successfully deleted"]);
    }

    public function getVariantableAttributes($class_id)
    {
        $variantable = ProductAttribute::select('id', 'name', 'values')->where(['use_for_variant' => 1, 'class_id' => $class_id])->get();
        return response()->json(['success' => true, 'data' => $variantable]);
    }
}
