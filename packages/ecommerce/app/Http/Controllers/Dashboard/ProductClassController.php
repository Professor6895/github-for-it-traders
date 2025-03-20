<?php

namespace Jed\Ecommerce\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Ecommerce\App\AttributeClass;
use Jed\Ecommerce\App\Product;
use Jed\Ecommerce\App\ProductAttribute;

class ProductClassController extends Controller
{
    use ControllerTrait;

    public function index()
    {
        $classes = AttributeClass::latest()->get();
        return response()->json(['success' => true, 'data' => $classes]);
    }


    public function store(Request $request)
    {
        $this->validate($request, [
        'name' => 'required|max:100',
        ]);
        AttributeClass::create([
        'name' => $request->name
        ]);
        return response()->json(['success' => true, 'message' => 'Product class successfully added.']);
    }

    public function getDropdown(Request $request)
    {
        $classes_ = AttributeClass::select('id', 'name');
        if ($request->has('attributes') && $request->attributes == true) {
            $classes_ = $classes_->with('attributes');
        }
        $classes_ = $classes_->get();
        return response()->json(['success' => true, 'data' => $classes_]);
    }

    public function update($id, Request $request)
    {
        $this->validate($request, [
        'name' => 'required|max:100',
        ]);

        $attribute_class = AttributeClass::find($id);
        $attribute_class->update([
        'name' => $request->name
        ]);

        return response()->json(['success' => true, 'message' => 'Product class successfully updated.']);
    }

    public function destroy($id)
    {
        $is_used = Product::where('attribute_class_id', $id)->count();
        if ($is_used) {
            return response()->json(['success' => false, 'message' => 'Class cannot be deleted because it is already used by product.']);
        }
        $class_ = AttributeClass::find($id);
        $class_->delete();
        return response()->json(['success' => true, 'message' => 'Product class successfully deleted']);
    }


  //FOR ATTRIBuTES
    public function getClassAttributes($class_id)
    {
        $attributes = ProductAttribute::where('class_id', $class_id)->latest()->get();
        return response()->json(['success' => true, 'data' => $attributes]);
    }

    public function saveClassAttribute($class_id, Request $request)
    {
        if ($request->type === 'option' && $request->use_for_variant) {
            $varianatable_count = ProductAttribute::where(['use_for_variant' => 1, 'class_id' => $class_id])->count();
            if ($varianatable_count === 3) {
                return response()->json(['success' => false, 'message' => 'Only 3 fields can be used to create variants.']);
            }
        }
        $attribute = ProductAttribute::create([
        'class_id' => $class_id,
        'name' => $request->name,
        'type' => $request->type,
        'values' => $request->values,
        'use_for_variant' => isTrue($request->use_for_variant) ? 1: 0,
        'use_in_filter' => isTrue($request->use_in_filter) ? 1: 0
        ]);

        return response()->json(['success' => true, 'message' => 'Product attribute successfully saved']);
    }

    public function updateClassAttribute($class_id, $attribute_id, Request $request)
    {
        $attribute = ProductAttribute::find($attribute_id);
        $count_ = $attribute->use_for_variant === 1 || $attribute->use_for_variant === '1' ? 2 :3;
        if ($request->type === 'option' && $request->use_for_variant) {
            $varianatable_count = ProductAttribute::where(['use_for_variant' => 1, 'class_id' => $class_id])->count();

            if ($varianatable_count === $count_) {
                return response()->json(['success' => false, 'message' => 'Only 3 fields can be used to create variants.']);
            }
        }
        $attribute = ProductAttribute::find($attribute_id);

        $attribute->update(
            [
            'name' => $request->name,
            'type' => $request->type,
            'values' => ($request->type == 'option') ? $request->values : [],
            'use_for_variant' => ($request->type == 'option') ? $request->use_for_variant : false,
            'use_in_filter' => ($request->type == 'option') ? $request->use_in_filter : false,
            ]
        );
        return response()->json(['success' => true, 'message' => 'Product attribute successfully updated']);
    }

    public function deleteClassAttribute($class_id, $attribute_id)
    {
        $attribute = ProductAttribute::find($attribute_id);
        $attribute->delete();
        return response()->json(['success' => true, 'message' => 'Product attribute successfully deleted']);
    }

    public function getVariantableAttributes($class_id)
    {
        $variantable = ProductAttribute::select('id', 'name', 'values')->where(['use_for_variant' => 1, 'class_id' => $class_id])->get();
        return response()->json(['success' => true, 'data' => $variantable]);
    }
}
