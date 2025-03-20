<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateBannerImagesTableAddOrderField extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('banner_images', function (Blueprint $table) {
            $table->integer('order')->default(0)->after('banner_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('banner_images', function (Blueprint $table) {
            $table->dropColumn('order');
        });
    }
}
