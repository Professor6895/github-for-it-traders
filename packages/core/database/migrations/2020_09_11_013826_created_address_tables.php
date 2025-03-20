<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedAddressTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('provinces', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->timestamps();
        });

        Schema::create('districts', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->tinyInteger('province_id');
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
        Schema::dropIfExists('provinces');
        Schema::dropIfExists('districts');
    }
}
