<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateEmiRequestsTableAddCardDetailsFields extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('emi_requests', function (Blueprint $table) {
            $table->string('bank_statement')->nullable();
            $table->string('card_holder_name')->nullable();
            $table->string('card_number')->nullable();
            $table->string('card_expiry_date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('emi_requests', function (Blueprint $table) {
            $table->dropColumn(['bank_statement', 'card_holder_name', 'card_number', 'card_expiry_date']);
        });
    }
}
