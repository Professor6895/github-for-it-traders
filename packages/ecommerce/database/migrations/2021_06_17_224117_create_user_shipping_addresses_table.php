<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserShippingAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_shipping_addresses', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->string('first_name', 50);
            $table->string('last_name', 50);
            $table->string('contact_number', 15);
            $table->string('country');
            $table->string('province');
            $table->string('district');
            $table->string('city');
            $table->string('landmark');
            $table->boolean('is_default')->default(false);
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
        Schema::dropIfExists('user_shipping_addresses');
    }
}
