<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CraeteOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->nullable()->index();
            $table->integer('cart_id');
            $table->integer('shipping_address_id');
            $table->string('invoice_number', 50)->nullable();
            $table->tinyInteger('status')->default(0); // 0 = draft, 1 = placed, 2 = confirmed, 3 = dispached, 4 = confirmed, 5 = cancelled.
            $table->string('discount_coupon', 50)->nullable();
            $table->float('shipping_cost')->default(0);
            $table->string('cancel_reason')->nullable();
            $table->double('discounts_total')->default(0);
            $table->double('order_total');
            $table->double('total');
            $table->string('payment_type', 20)->nullable();
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
        Schema::dropIfExists('orders');
    }
}
