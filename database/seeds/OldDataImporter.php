<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Jed\Ecommerce\App\Product;

class OldDataImporter extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $old_products = DB::connection('mysql2')->table('products')
        ->join('products_description', 'products_description.products_id', '=', 'products.products_id')
        ->get();
        foreach ($old_products as $key => $product) {
            $product_new = Product::create([
                    'name' => $product->products_name,
            'slug' => $product->products_slug,
            'short_description' => '',
            'description' => $product->products_description,
            'sku' => "PRO-". ($key+1),
            'price' =>  $product->products_price,
            'quantity' => 10,
            'status' => 1,
            'highlights' => $product->highlight_specifications,
            'product_video_url' => $product->products_video_link
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

            echo ($key + 1). ".  Added '". $product->products_name."' \n";
        }
    }
}
