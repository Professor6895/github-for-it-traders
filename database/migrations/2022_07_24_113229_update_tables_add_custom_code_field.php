<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateTablesAddCustomCodeField extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->longText('custom_code')->nullable();
        });

        Schema::table('product_categories', function (Blueprint $table) {
            $table->longText('custom_code')->nullable();
        });

        Schema::table('product_brands', function (Blueprint $table) {
            $table->longText('custom_code')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn('custom_code');
        });

        Schema::table('product_categories', function (Blueprint $table) {
            $table->dropColumn('custom_code');
        });

        Schema::table('product_brands', function (Blueprint $table) {
            $table->dropColumn('custom_code');
        });
    }
}
