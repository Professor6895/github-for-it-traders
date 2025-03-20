<?php

namespace Jed\Discounts\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Discounts\App\CouponDiscount;
use Illuminate\Validation\Rule;

class CouponDiscountController extends Controller
{
    use ControllerTrait;

    public function index()
    {
        $discounts = CouponDiscount::latest()->get();
        return response()->json(['success' => true, 'data' => $discounts]);
    }

    public function store(Request $request)
    {
        $rules = $this->validationRules($request);
        $request->validate($rules);
        $discount = CouponDiscount::create([
        'title' => $request->title,
        'code' => $request->code,
        'start_date' => $request->start_date,
        'end_date' => $request->end_date,
        'discount_type' => $request->discount_type,
        'discount_value' => $request->discount_value,
        'minimum_value' => $request->minimum_value,
        'usage_per_user' => $request->usage_per_user
        ]);

        return response()->json(['success' => true, 'message' => 'Discount coupon  successfully added']);
    }

    public function show($id)
    {
        $discount = CouponDiscount::findOrFail($id);
        return response()->json(['success' => true, 'data' => $discount]);
    }

    public function validationRules(Request $request)
    {
        $rules = [
        'title' => 'required|max:100',
        'code' => 'required||unique:coupon_discounts',
        'start_date' => 'required',
        'end_date' => 'required|after:start_date',
        'discount_type' => 'required'
        ];
        if ($request->discount_type === 2 || $request->discount_type === "2") {
            $rules['discount_value'] = 'required|numeric|max:100';
        } else {
            $rules['discount_value'] = 'required';
        }
        return $rules;
    }
    public function update($id, Request $request)
    {
        $rules = $this->validationRules($request);
        $rules['code'] =  ['required', 'max:50', Rule::unique('coupon_discounts')->ignore($id)];
        $request->validate($rules);
        $discount = CouponDiscount::find($id);
        $discount->update([
        'title' => $request->title,
        'code' => $request->code,
        'start_date' => $request->start_date,
        'end_date' => $request->end_date,
        'discount_type' => $request->discount_type,
        'discount_value' => $request->discount_value,
        'minimum_value' => $request->minimum_value,
        'usage_per_user' => $request->usage_per_user
        ]);


        return response()->json(['success' => true, 'message' => 'Discount successfully updated']);
    }

    public function destroy($id)
    {
        $discount = CouponDiscount::find($id);
        $discount->delete();
        return response()->json(['success' => true, 'message' => 'Discount Coupon successfully deleted']);
    }
}
