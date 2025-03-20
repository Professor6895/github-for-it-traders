<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CraeteOrderItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->integer('order_id')->index();
            $table->integer('product_id');
            $table->string('product_name');
            $table->string('product_sku')->nullable();
            $table->double('product_price');
            $table->double('compare_price')->nullable();
            $table->smallInteger('quantity');
            $table->integer('vendor_id')->nullable();
            $table->json('product_attributes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_items');
    }
}
