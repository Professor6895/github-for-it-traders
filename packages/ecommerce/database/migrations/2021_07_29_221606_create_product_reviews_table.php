<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_reviews', function (Blueprint $table) {
            $table->id();
            $table->integer('vendor_id')->nullable();
            $table->integer('user_id');
            $table->integer('product_id');
            $table->text('review');
            $table->tinyInteger('rating');
            $table->tinyInteger('status')->default(0); // 0 = UnPublished | 1 = Published
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
        Schema::dropIfExists('product_reviews');
    }
}
