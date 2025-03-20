<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmiBanksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('emi_banks', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('bank_code');
            $table->string('email');
            $table->string('contact_number', 20)->nullable();
            $table->string('emi_form_file')->nullable();
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
        Schema::dropIfExists('emi_banks');
    }
}
