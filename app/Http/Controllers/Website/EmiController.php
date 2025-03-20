<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Artesaos\SEOTools\Facades\JsonLd;
use Artesaos\SEOTools\Facades\OpenGraph;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\TwitterCard;
use Illuminate\Http\Request;
use Jed\Ecommerce\App\EmiBank;
use Jed\Ecommerce\App\Product;
use Jed\Ecommerce\App\ProductCategory;
use Jed\Ecommerce\App\ProductVariant;
use Jed\Ecommerce\Cart\EmiRequest;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class EmiController extends Controller
{
    public function getEmiCalculator(Request $request)
    {
        SEOMeta::setTitle("EMI Calculator");
        $products = Product::select('name', 'slug', 'id')->enabled();
        if ($request->has('category')) {
            $category = $request->get('category');
            $category = ProductCategory::where('slug', $category)->firstOrFail();
            if ($category) {
                $cat_arrays = array_merge($category->getAllChildren()->pluck('id')->toArray(), [$category->id]);
                $products = $products->join('categories_products', 'products.id', '=', 'categories_products.product_id')
                ->whereIn('categories_products.product_category_id', $cat_arrays);
            }
        }
        $products = $products->get();
        return view('packages.ecommerce.website.emi-calculator.emi-calculator', compact('products'));
    }
    public function renderEmiCalculator(Request $request)
    {
        if (!$request->ajax()) {
            abort(404);
        }

        if (!$request->has('product_id')) {
            abort(404);
        }
        $banks = EmiBank::select('id', 'name')->get();
        $product = Product::select('id', 'name', 'slug', 'price')->with('media', 'variants')->where('id', $request->product_id)->enabled()->firstOrFail();
        $view = view('packages.ecommerce.website.emi-calculator.ajax-render', compact('product', 'banks'))->render();
        return response()->json(['status' => 'success', 'view' => $view]);
    }

    public function calculateEMI(Request $request)
    {
        $product = Product::select('id', 'name', 'slug', 'price')->with('media', 'variants')->where('id', $request->product_id)->enabled()->firstOrFail();
        $product_price = $product->price;
        if ($request->has('product_variant')) {
            $variant = $product->variants()->checkAttributes(json_decode($request->product_variant))->first();
            if ($variant) {
                $product_price = $variant->price;
            }
        }
        if ($product_price < $request->down_payment) {
            return response()->json(['success' => false, 'message' => 'Down payment amount should be less than the product price']);
        }
        $bank = EmiBank::find($request->bank_id);
        $product_price = $product->price;
        $down_payment = $request->down_payment;
        $finance_amount = $product_price - $down_payment;

        $emi_mode = $request->emi_mode;
        $emi_per_month = $finance_amount / $emi_mode;

        //BANK CALCULATIONS
        $finance_amount_calculator = $bank->finance_amount_percentage;
        $finance_percent = $finance_amount_calculator["month_" . $emi_mode];

        if (!$finance_percent) {
            return response()->json(['success' => false, 'message' => 'This bank do not accept selected EMI mode']);
        }
        $service_charge = $finance_percent / 100 * $finance_amount;
        return response()->json([
            'success' => true,
            'data' => [
                'finance_amount' => $finance_amount,
                'product_price' => $product_price,
                'emi_per_month' => $emi_per_month,
                'service_charge' => $service_charge,
                'product_slug' => $product->slug
            ]
            ]);
    }
}
