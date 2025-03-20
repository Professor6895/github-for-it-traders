<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name', 500);
            $table->string('slug', 500)->index();
            $table->text('short_description')->nullable();
            $table->longText('description')->nullable();
            $table->string('sku', 30)->index();
            $table->double('price')->nullable();
            $table->double('original_price')->nullable();
            $table->integer('brand_id')->nullable()->index();
            $table->integer('vendor_id')->nullable()->index();
            $table->integer('quantity')->default(0);
            $table->string('unit', 10)->nullable(); //PCS - KG - Ltr
            $table->text('highlights')->nullable();
            $table->string('product_video_url')->nullable();
            //SHIPPING DETAILS
            $table->float('weight')->nullable();
            $table->float('length')->nullable();
            $table->float('width')->nullable();
            $table->float('height')->nullable();
            $table->tinyInteger('status')->default(1);
            $table->tinyInteger('is_featured')->default(0);
            $table->integer('attribute_class_id')->nullable();

            //META SEO
            $table->string('meta_title')->nullable();
            $table->string('meta_keywords')->nullable();
            $table->string('meta_description')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
