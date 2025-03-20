<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateUsersTableAddReferralFields extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->integer('referred_by')->nullable()->after('social_id');
            $table->string('referral_code', 50)->nullable()->after('referred_by');
            $table->double('reward_points')->default(0)->after('referral_code');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['referred_by', 'referral_code', 'reward_points']);
        });
    }
}
