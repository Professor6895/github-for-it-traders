<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateDiscountCampaignsTableAddShowOnHomeField extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('discount_campaigns', function (Blueprint $table) {
            $table->tinyInteger('show_on_home')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('discount_campaigns', function (Blueprint $table) {
            $table->removeColumn('show_on_home');
        });
    }
}
