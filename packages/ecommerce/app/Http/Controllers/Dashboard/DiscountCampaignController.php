<?php

namespace Jed\Ecommerce\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Ecommerce\App\DiscountCampaign;
use Jed\Ecommerce\App\DiscountCampaignProduct;
use Jed\Ecommerce\App\EmiBank;
use Jed\Ecommerce\App\Product;
use Jed\Ecommerce\App\ProductCategory;

class DiscountCampaignController extends Controller
{
    use ControllerTrait;

    public function index()
    {
        $campaigns = DiscountCampaign::latest()->get();
        return response()->json(['success' => true, 'data' => $campaigns]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|max:100',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
        ]);
        DiscountCampaign::create([
          'title' => $request->title,
          'slug' => \Str::slug($request->title),
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'show_on_home' => ($request->has('show_on_home') && isTrue($request->show_on_home)) ? 1: 0,
          ]);

        return response()->json(['success' => true, 'message' => 'Discount campaign successfully added.']);
    }


    public function update($campaign_id, Request $request)
    {
        $this->validate($request, [
            'title' => 'required|max:100',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
        ]);
        $discount_campaign = DiscountCampaign::find($campaign_id);
        $discount_campaign->update([
            'title' => $request->title,
            'slug' => \Str::slug($request->title),
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'show_on_home' => ($request->has('show_on_home') && isTrue($request->show_on_home)) ? 1: 0,
        ]);
       
        return response()->json(['success' => true, 'message' => 'Discount campaign successfully updated.']);
    }

    public function destroy($campaign_id)
    {
        $campaign = DiscountCampaign::find($campaign_id);
        $campaign->products()->detach();
        $campaign->delete();
        return response()->json(['success' => true, 'message' => 'Discount campaign successfully deleted.']);
    }

    public function addProductsInCampaign($campaign_id, Request $request)
    {
        $rules = [];
        if ($request->discount_type === 2 || $request->discount_type === "2") {
            $rules['discount_value'] = 'required|numeric|max:100';
        } else {
            $rules['discount_value'] = 'required';
        }
        $request->validate($rules);

        if ($request->select_type == 'product') {
            $product = $this->checkProductAlreadyOnCampaign($request->product_id, $campaign_id);
            if ($product) {
                $product->update([
                'campaign_id' => $campaign_id,
                'product_id' => $request->product_id,
                'discount_type' => $request->discount_type,
                'discount_value' => $request->discount_value,
                ]);
            } else {
                DiscountCampaignProduct::create([
                'campaign_id' => $campaign_id,
                'product_id' => $request->product_id,
                'discount_type' => $request->discount_type,
                'discount_value' => $request->discount_value,
                ]);
            }
        } else {
            $category = ProductCategory::find($request->category_id);
            if ($category) {
                $products = $this->getProductsByCategory($category);
                foreach ($products as $product_) {
                    $product = $this->checkProductAlreadyOnCampaign($request->product_id, $campaign_id);
                    if ($product) {
                        $product->update([
                        'campaign_id' => $campaign_id,
                        'product_id' => $product_->id,
                        'discount_type' => $request->discount_type,
                        'discount_value' => $request->discount_value,
                        ]);
                    } else {
                        DiscountCampaignProduct::create([
                        'campaign_id' => $campaign_id,
                        'product_id' => $product_->id,
                        'discount_type' => $request->discount_type,
                        'discount_value' => $request->discount_value,
                        ]);
                    }
                }
            }
        }

        return response()->json(['success' => true, 'message' => 'Product successfully added.']);
    }


    public function getProductsByCategory($category, $limit = null, $paginate = false, $random = false)
    {
        $cat_arrays = array_merge($category->getAllChildren()->pluck('id')->toArray(), [$category->id]);
        $products = Product::with('media', 'reviews:id,product_id,rating')->enabled()
          ->join('categories_products', 'products.id', '=', 'categories_products.product_id')
          ->whereIn('categories_products.product_category_id', $cat_arrays);

        if ($random) {
            $products = $products->inRandomOrder();
        }
        if ($limit) {
            $products = $products->limit($limit);
        }



        return $paginate ? $products->paginate(env('PER_PAGE_PAGINATION', 30)) : $products->get();
    }
    public function checkProductAlreadyOnCampaign($product_id, $campaign_id)
    {
        $product = DiscountCampaignProduct::where([
            'product_id' => $product_id,
        ])->first();

        return $product;
    }

    public function getCampaignProducts($campaign_id)
    {
        $products = DiscountCampaignProduct::latest()->with('product:name,id,slug,price,original_price')->where('campaign_id', $campaign_id)->get();
        return response()->json(['success' => true, 'data' => $products]);
    }

    public function removeProductFromCampaign($campaign_product_id)
    {
        $product = DiscountCampaignProduct::find($campaign_product_id);
        $product->delete();
        return response()->json(['success' => true, 'message' => 'Product successfully removed.']);
    }
}
