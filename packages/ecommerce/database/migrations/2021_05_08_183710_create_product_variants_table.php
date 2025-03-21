<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductVariantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_variants', function (Blueprint $table) {
            $table->id();
            $table->integer('product_id');
            $table->integer('quantity');
            $table->float('price');
            $table->json('attributes');
            $table->timestamps();
        });

        Schema::table('products', function(Blueprint $table) {
            $table->json('variant_attributes')->nullable()->after('attribute_class_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_variants');
        Schema::table('products', function(Blueprint $table) {
            $table->dropColumn('available_attributes');
        });
    }
}
