<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmiRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('emi_requests', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('contact_number', 20);
            $table->string("address", 500);
            $table->date('dob_ad');
            $table->date('dob_bs');
            $table->string('gender', 10);
            $table->tinyInteger('credit_card');
            $table->integer('bank');
            $table->string('length_of_employment')->nullable();
            $table->double('monthly_income')->nullable();
            $table->integer('no_of_dependents')->nullable();
            $table->string('occupation')->nullable();
            $table->string('residental_status')->nullable();
            $table->string('vehicle')->nullable();
            $table->integer('emi_mode');
            $table->double('down_payment');
            $table->double('finance_amount');
            $table->double('emi_per_month');
            $table->json('product_attributes')->nullable();
            $table->string('salary_certificate')->nullable();
            $table->string('citizenship')->nullable();
            $table->string('photo')->nullable();
            $table->integer('product_id');
            $table->integer("user_id");
            $table->double('product_price');
            $table->tinyInteger('status')->default(0);
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
        Schema::dropIfExists('emi_requests');
    }
}
