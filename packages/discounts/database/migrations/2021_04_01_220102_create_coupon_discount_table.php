<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCouponDiscountTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('coupon_discounts', function (Blueprint $table) {
            $table->id();
            $table->string('title', 100);
            $table->string('code', 40)->index();
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->tinyInteger('discount_type'); //1 = Money Value, 2 = Percentage Value
            $table->double('discount_value');
            $table->double("minimum_value")->nullable();
            $table->integer('usage_per_user')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('coupon_discounts');
    }
}
