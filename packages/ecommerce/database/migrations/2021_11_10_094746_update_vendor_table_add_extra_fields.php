<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateVendorTableAddExtraFields extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('vendors', function (Blueprint $table) {
            $table->string('legal_business_name')->nullable();
            $table->string('pan_document')->nullable();
            $table->string('bank_account_name')->nullable();
            $table->string('bank_account_number')->nullable();
            $table->string('bank_name')->nullable();
            $table->string('bank_branch')->nullable();
            $table->string('bank_cheque_copy')->nullable();
            $table->tinyInteger('data_updated')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('vendors', function (Blueprint $table) {
            $table->dropColumn('legal_business_name');
            $table->dropColumn('pan_document');
            $table->dropColumn('bank_account_name');
            $table->dropColumn('bank_account_number');
            $table->dropColumn('bank_name');
            $table->dropColumn('bank_branch');
            $table->dropColumn('bank_cheque_copy');
            $table->dropColumn('data_updated');
        });
    }
}
