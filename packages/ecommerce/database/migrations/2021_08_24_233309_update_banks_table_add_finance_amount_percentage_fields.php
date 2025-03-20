<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateBanksTableAddFinanceAmountPercentageFields extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('emi_banks', function (Blueprint $table) {
            $table->json('finance_amount_percentage')->after('emi_form_file')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('emi_banks', function (Blueprint $table) {
            $table->dropColumn('finance_amount_percentage');
        });
    }
}
