<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDiscountCampaignProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('discount_campaign_products', function (Blueprint $table) {
            $table->id();
            $table->integer('product_id');
            $table->tinyInteger('discount_type');
            $table->float('discount_value');
            $table->integer('campaign_id');
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
        Schema::dropIfExists('discount_campaign_products');
    }
}
