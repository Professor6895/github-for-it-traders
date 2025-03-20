<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Jed\Ecommerce\App\Product;
use Jed\Ecommerce\App\ProductBrand;
use Jed\Ecommerce\App\ProductCategory;

class ImportOldData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import-old-data {--oldcat=} {--newcat=} {--brand=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $old_category_slug = $this->option('oldcat');
        if (!$old_category_slug) {
            $this->error('Please specify old category slug');
            return 0;
        }

        $old_category = DB::connection('mysql2')->table('categories')->where('categories_slug', $old_category_slug)->first();
        if (!$old_category) {
            $this->error('Old category not found');
            return 0;
        }

        $new_category = ProductCategory::where('slug', $this->option('newcat'))->first();
        if (!$new_category) {
            $this->error('New category not found');
            return 0;
        }

        $sku = "FATAFAT-";

        if ($this->option('brand')) {
            $brand = ProductBrand::where('slug', $this->option('brand'))->first();
            if (!$brand) {
                $this->error("Brand not found");
                return 0;
            }
            $sku = $brand->name."-";
        }

        $old_products =  DB::connection('mysql2')->table('products')
        ->join('products_description', 'products_description.products_id', '=', 'products.products_id')
        ->join('products_to_categories', 'products_to_categories.products_id', '=', 'products.products_id')
        ->where('products_to_categories.categories_id', $old_category->categories_id)
        ->get();


        foreach ($old_products as $key => $product) {
            $product_new = Product::where('slug', $product->products_slug)->first();

            if (!$product_new) {
                $product_new = Product::create([
                    'name' => $product->products_name,
                    'slug' => $product->products_slug,
                    'short_description' => '',
                    'description' => $product->products_description,
                    'sku' => $sku. ($key+1),
                    'price' =>  $product->products_price,
                    'quantity' => 10,
                    'status' => 1,
                    'highlights' => $product->highlight_specifications,
                    'product_video_url' => (filter_var($product->products_video_link, FILTER_VALIDATE_URL)) ? $product->products_video_link:''
                ]);

                if ($product->products_image) {
                    $image = DB::connection('mysql2')->table('image_categories')
                    ->where(['image_id' =>  $product->products_image, 'image_type' => "ACTUAL"])
                    ->first();
                    if ($image) {
                        $image_url = 'https://fatafatsewa.com/'.$image->path;
                        $product_new->addMediaFromUrl($image_url)
                        ->withCustomProperties(['is_default' => true])->toMediaCollection();
                    }
                }
                $images = DB::connection('mysql2')->table('products_images')
                ->join('image_categories', 'image_categories.image_id', '=', 'products_images.image')
                ->where('products_images.products_id', $product->products_id)
                ->where('image_categories.image_type', 'ACTUAL')
                ->get();
                foreach ($images as $image_) {
                    $image_url = 'https://fatafatsewa.com/'.$image_->path;
                    $product_new->addMediaFromUrl($image_url)->toMediaCollection();
                }
            }
            if (isset($brand)) {
                $product_new->update([
                    'brand_id' => $brand->id
                ]);
            }
            $product_new->categories()->sync([$new_category->id]);
            echo($key + 1). ".  Added '". $product->products_name."' \n";
        }
    }

    public function validateData()
    {
        //OLD CATEGORY
       

        //NEW CATEGORY
    }
}
