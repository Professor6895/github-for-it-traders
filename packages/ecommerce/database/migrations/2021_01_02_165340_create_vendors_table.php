<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVendorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vendors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->text('address');
            $table->text('inventory_location')->nullable();
            $table->string('email', 60);
            $table->string('avatar')->nullable();
            $table->string('contact', 15);
            //CONTACT PERSON
            $table->string('full_name', 60);
            $table->string('contact_person_phone', 15);
            $table->string('contact_person_address');
            $table->string('pan_no', 30);
            $table->string('password')->nullable();
            $table->tinyInteger('status')->default(1); //1=  Active --- 2 = Inactive
            $table->rememberToken();
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
        Schema::dropIfExists('vendors');
    }
}
