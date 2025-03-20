<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Artesaos\SEOTools\Facades\JsonLd;
use Artesaos\SEOTools\Facades\OpenGraph;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\TwitterCard;
use Illuminate\Http\Request;
use Jed\Ecommerce\App\Helpers\ProductHelper;
use Jed\Ecommerce\App\PreOrder;
use Jed\Ecommerce\App\Product;
use Jed\Ecommerce\App\ProductBrand;
use Jed\Ecommerce\App\ProductCategory;
use Jed\Ecommerce\Cart\EmiRequest;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ProductController extends Controller
{
    public function getShop(Request $request)
    {
        if (empty($request->all())) {
            abort(404);
        }
        if (!$request->has('keyword')) {
            abort(404);
        }
        return view(resolveView('ecommerce::website.shop'));
    }

    public function getProductDetail($slug)
    {
        $product = Product::with('media', 'discountcampaign', 'variants', 'brand', 'reviews.user:name,id', 'vendor:id,name,slug')->where('slug', $slug)->enabled()->firstOrFail();
        $product->setMeta();
        SEOMeta::addMeta('product:plural_title', $product->name, 'property');
        SEOMeta::addMeta('product:price.amount', $product->price, 'property');
        SEOMeta::addMeta('product:price.currency', "NPR", 'property');

        JsonLd::setType('Product');
        JsonLd::addValue('name', $product->name);
        JsonLd::addValue('sku', $product->sku);
        JsonLd::setUrl(route('website.product-detail', $product->slug)); // url of twitter card tag
        JsonLd::addValue('brand', [
            '@type' => "Brand",
            'name' => $product->brand->name ?? "",
        ]);
        JsonLd::addValue('offers', [
            '@type' => "Offer",
            'price' => $product->price,
            'priceCurrency' => "NPR",
            'availability' => "http://schema.org/InStock",
            'url' => route('website.product-detail', $product->slug),
        ]);

        $expiresAt = now()->addHours(env('VIEW_COUNT_DURATION', 1));
        views($product)->cooldown($expiresAt)->record();
        return view(resolveView('ecommerce::website.product-detail'), ['product' => $product]);
    }

    public function renderProductQuickView($product_id)
    {
        $product = Product::with('media', 'variants', 'brand')->where('id', $product_id)->enabled()->firstOrFail();
        $view =  view('packages.ecommerce.website.partials.ajax-views.quick-view', ['product' => $product])->render();

        return response()->json($view);
    }

    public function getProductEmiApplication($slug)
    {
        $product = Product::select('id', 'name', 'slug', 'price')->with('media', 'variants')->where('slug', $slug)->enabled()->firstOrFail();
        $params = [
            'product' => $product,
        ];
        $product->setMeta();

        $title = "Apply Emi for {$product->name}";
        SEOMeta::setTitle($title);
        OpenGraph::setDescription($title);
        TwitterCard::setTitle($title); // title of twitter card tag
        JsonLd::setTitle($title);

        if (auth('web')->check()) {
            $user_emi = EmiRequest::where(['user_id' =>  auth('web')->user()->id,'product_id' => $product->id])
            ->first();
            if ($user_emi) {
                $params['user_emi'] = $user_emi;
                $params['emi_applied'] = true;
            } else {
                $params['emi_applied'] = false;
            }
        }
        return view(resolveView('ecommerce::website.product-apply-emi'), $params);
    }

    public function getProductVariantImage(Request $request)
    {
        $product = Product::select('id', 'name')->with('media')->where('id', $request->product_id)->enabled()->firstOrFail();

        $default_media = $product->getMedia('default', function (Media $media) use ($request) {
            return isset($media->custom_properties['color']) && $media->custom_properties['color'] == $request->color && isset($media->custom_properties['is_default']);
        })->first();

        $other_medias = $product->getMedia('default', function (Media $media) use ($request) {
            return isset($media->custom_properties['color']) && $media->custom_properties['color'] == $request->color && !isset($media->custom_properties['is_default']);
        });

        $def_media =  ["full" => ($default_media) ? $default_media->getUrl() : asset('/website/images/placeholder-lg.png'),
        "thumb" => ($default_media) ? $default_media->getUrl('thumbnail') : asset('/website/images/placeholder-sm.png')];
        $view = view('packages.ecommerce.website.partials.ajax-views.product-image', ['product' => $product, 'default_media' => $def_media, 'other_medias' => $other_medias])->render();

        return $view;
    }

    public function getProductCategory($category_slug)
    {
        $category = ProductCategory::where('slug', $category_slug)->firstOrFail();
        return view(resolveView('ecommerce::website.shop'), ['model' => $category]);
    }


    public function getProductBrand($brand_slug)
    {
        $brand = ProductBrand::where('slug', $brand_slug)->firstOrFail();
        return view(resolveView('ecommerce::website.shop'), ['model' => $brand]);
    }

    public function getEmiProducts()
    {
        $products = Product::with('media', 'reviews:id,product_id,rating')->enabled()->where('emi_enabled', 1)->paginate(56);
        return view('packages.ecommerce.website.emi-products', ['products' => $products]);
    }

    public function preOrderProduct($slug)
    {
        $product = Product::with('media', 'variants', 'brand')->where('slug', $slug)->enabled()->firstOrFail();
        $params['product'] = $product;
        if (auth('web')->check()) {
            $pre_order = PreOrder::where(['user_id' =>  auth('web')->user()->id,'product_id' => $product->id])
            ->first();
            if ($pre_order) {
                $params['pre_order'] = $pre_order;
                $params['pre_ordered'] = true;
            } else {
                $params['pre_ordered'] = false;
            }
        }
        return view(resolveView('ecommerce::website.product-pre-order'), $params);
    }

    public function setProductToCompare(Request $request)
    {
        $is_success = true;
        $message = 'Product successfully added to compare list.';
        $product_id = $request->product_id;
        $product = Product::with('categories')->find($product_id);
        $products_on_compare = session('products_on_compare');
        $compare_products_array = [];
        if ($products_on_compare) {
            $compare_products_array = explode(',', $products_on_compare);
            if (in_array($product_id, $compare_products_array)) {
                $is_success = false;
                $message = 'Product already added to compare list.';
                goto outofcond;
            }

            if (count($compare_products_array) >= 3) {
                $is_success = false;
                $message = 'You can only compare 3 products at a time.';
                goto outofcond;
            }

            $compare_product_detail = Product::with('categories')->find($compare_products_array[0]);
            if (!$compare_product_detail) {
                $is_success = false;
                goto outofcond;
            }
            $compare_product_category = $compare_product_detail->categories->first();
            if ($compare_product_category->id != $product->categories->first()->id) {
                $is_success = false;
                $message = 'You can compare only products from same category. If you wish to compare products from different category, please remove one of the product from compare list.';
                goto outofcond;
            }
            $compare_products_array[] = $product_id;
        } else {
            $compare_products_array[] = $product_id;
        }

        outofcond:
        session([
            'products_on_compare' => implode(',', $compare_products_array)
        ]);

        return response()->json(['success' => $is_success, 'message' => $message]);
    }

    public function removeProductFromCompare()
    {
        $product_id = request()->product_id;
        $products_on_compare = session('products_on_compare');
        $compare_products_array = [];
        if ($products_on_compare) {
            $compare_products_array = explode(',', $products_on_compare);
            if (($key = array_search($product_id, $compare_products_array)) !== false) {
                unset($compare_products_array[$key]);
            }
        }
        session([
            'products_on_compare' => implode(',', $compare_products_array)
        ]);
        return response()->json(['success' => true, 'message' => 'Product successfully removed from compare list.']);
    }

    public function getCompareProducts()
    {
        $products_on_compare = session('products_on_compare');
        $compare_products_array = [];
        if ($products_on_compare) {
            $compare_products_array = explode(',', $products_on_compare);
        }

        $product_attrs = [];
        $product_attribute_keys = [];

        $products = Product::with('media', 'reviews:id,product_id,rating')->whereIn('id', $compare_products_array)->get();
        foreach ($products as $product) {
            if (isset($product->attributes) && isset($product->attributes['product_attributes'])) {
                foreach ($product->attributes['product_attributes'] as $key => $value) {
                    $product_attrs[$product->id][$key] = $value;
                    $product_attribute_keys[] = $key;
                }
            } else {
                $product_attrs[$product->id] = [];
            }
        }
        return view('packages.ecommerce.website.compare-products', ['products' => $products, 'product_attrs' => $product_attrs, 'product_attribute_keys' => array_unique($product_attribute_keys)]);
    }
}
