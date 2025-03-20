<?php

namespace Jed\Ecommerce\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Ecommerce\App\Product;
use Jed\Ecommerce\App\ProductBrand;
use Jed\Ecommerce\App\ProductCategory;
use ZipArchive;
use Illuminate\Support\Str;
use Excel;
use Jed\Ecommerce\App\Exports\ProductExportForPrice;

class DataImportController extends Controller
{
    use ControllerTrait;

    public function extractImportImages(Request $request)
    {
        $dir = public_path('import_images');
        File::deleteDirectory($dir);
        $file = $request->file('file');
        $file_name = 'file-' . Carbon::now()->timestamp . '.zip';
        $file->move(storage_path('import-data'), $file_name);


        $zip = new ZipArchive();
        $res = $zip->open(storage_path('import-data/') . $file_name);

        if ($res === true) {
          // Extract file
            $zip->extractTo(public_path('import_images'));
            $zip->close();
            File::delete(storage_path('import-data/') . $file_name);
            return response()->json(['success' => true, 'message' => 'Images successfully extracted']);
        } else {
            return response()->json(['success' => false]);
        }
    }

    public function getImportImages()
    {
        $files = File::files(public_path('import_images'));
        $files__ = [];
        foreach ($files as $file) {
            $files__[] = pathinfo($file);
        }
        return $files__;
    }

    public function validateProudcts(Request $request)
    {
        $products = collect($request->products);
        $validated = true;
        $responses = [];
        //CHECKING PRODUCT NAME AVAILABILITY
        $product_names = $products->pluck('name')->toArray();
        $product_With_name = Product::select('id', 'name')->whereIn('name', $product_names)->get();
        if ($product_With_name->count()) {
            $validated = false;
            foreach ($product_With_name as $product_) {
                $responses['name'][] = "Product with name '{$product_->name} already exists'";
            }
        }

         //CHECKING SKU AVAILABILITY
         $skus = $products->pluck('sku')->toArray();
         $product_with_skus = Product::select('id', 'name', 'sku')->whereIn('sku', $skus)->get()->unique('sku');
        if ($product_with_skus->count()) {
            $validated = false;
            foreach ($product_with_skus as $product_) {
                $responses['sku'][] = "Product with sku '{$product_->sku} already exists'";
            }
        }

        $categories = array_unique(explode(',', implode(',', $products->pluck('categories')->toArray())));
        $cats_check = ProductCategory::whereIn('slug', $categories)
            ->orWhereIn('title', $categories)
            ->pluck('title')
            ->toArray();

        $not_found_categories = array_diff($categories, $cats_check);
        if (count($not_found_categories)) {
            $validated = false;
            foreach ($not_found_categories as $category) {
                $responses['categories'][] = "Category '{$category}' not found";
            }
        }

        return response()->json(['success' => true, 'validated' => $validated, 'responses' => $responses]);
    }

    public function updateProductPrice(Request $request)
    {
        $products = collect($request->products);
        foreach ($products as $product) {
            if (isset($product['product_id']) && isset($product['sku'])) {
                $product_detail = Product::where(['id' => $product['product_id'], 'sku' => $product['sku']])->first();
                if ($product_detail) {
                    $update_data = [];
                    if (isset($product['price']) && !isNull($product['price'])) {
                        $update_data['price'] = $product['price'];
                    }

                    if (isset($product['original_price']) && !isNull($product['original_price'])) {
                        $update_data['original_price'] = $product['original_price'];
                    }

                    if (isset($product['quantity'])) {
                        $update_data['quantity'] = $product['quantity'];
                    }
                    $product_detail->update($update_data);
                }
            }
        }
        return response()->json(['success' => true, 'message' => "Products successfully updated"]);
    }

    public function importProducts(Request $request)
    {
        $products = collect($request->products);
        foreach ($products as $product) {
            $new_product = $this->insertProduct($product);
            $this->assignCategoryToProduct($new_product, $product);
            $this->updateProductImages($new_product, $product);
        }

        return response()->json(['success' => true, 'message' => "Products successfully imported"]);
    }

    public function updateProductImages($new_product, $product)
    {
        try {
            if (isset($product['product_images']) && !isNull($product['product_images'])) {
                $images = explode(',', $product['product_images']);
                foreach ($images as $key => $new_image) {
                    $exists = File::exists(public_path("import_images/{$new_image}"));
                    if ($exists) {
                        $media = $new_product->addMedia(public_path("import_images/{$new_image}"))->toMediaCollection();
                        if ($key === 0) {
                            $media->setCustomProperty('is_default', true);
                            $media->save();
                        }
                    }
                }
            }

            if (isset($product['image_urls']) && !isNull($product['image_urls'])) {
                $image_urls = explode('|', $product['image_urls']);
                foreach ($image_urls as $key => $new_image) {
                    if ($key === 0) {
                        $new_product->addMediaFromUrl($new_image)
                        ->withCustomProperties(['is_default' => true])->toMediaCollection();
                    } else {
                        $new_product->addMediaFromUrl($new_image)->toMediaCollection();
                    }
                }
            }
        } catch (Exception $e) {
        }
    }

    public function assignCategoryToProduct($new_product, $product)
    {
        if (isset($product['categories']) && !isNull($product['categories'])) {
            $category_slugs = explode(',', $product['categories']);
            $category_ids = ProductCategory::select('id')->whereIn('slug', $category_slugs)->orWhereIn('title', $category_slugs)->pluck('id')->toArray();
            $new_product->categories()->sync($category_ids);
        }
    }


    public function insertProduct($product)
    {
        if (isset($product['brand']) && !isNull($product['brand'])) {
            $brand = ProductBrand::where('slug', $product['brand'])->orWhere('name', $product['brand'])->first();
        }

        $new_product = Product::where('name', $product['name'])->first();
        if (!$new_product) {
            $new_product = Product::create([
            'name' => $product['name'],
            'slug' => Str::slug($product['name']),
            'sku' => $product['sku'],
            'description' => $product['description'],
            'short_description' => isset($product['short_description']) ? $product['short_description'] : null,
            'price' => $product['price'],
            'original_price' => isset($product['original_price']) && !isNull($product['original_price']) ? $product['original_price'] : null,
            'quantity' => $product['quantity'],
            'brand_id' => isset($brand) && $brand->exists() ? $brand->id : null,
            'status' => (isset($product['status']) && $product['status'] === 'enabled') ? Product::STATUS_ENABLED : Product::STATUS_DISABLED,
            'highlights' => $product['highlights'] ?? null,
            'product_video_url' => $product['product_video_url'] ?? null
            ]);
        }

        return $new_product;
    }



    public function exportProductsForPriceImport(Request $request)
    {
        $category_id = $request->category_id;
        ob_end_clean();
        ob_start();
        return Excel::download(new ProductExportForPrice($category_id), 'products_export.xlsx');
    }
}
