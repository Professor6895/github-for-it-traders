<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateUsersTableAddExtraFields extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('contact_number', 20)->nullable()->after('email');
            $table->string('avatar')->after('contact_number')->nullable();
            $table->string('address')->nullable()->after('avatar');
            $table->date('date_of_birth')->nullable()->after('address');
            $table->string('social_platform')->nullable()->after('date_of_birth');
            $table->string('social_id')->nullable()->after('social_platform');
            $table->string('institute_name')->nullable()->after('social_id');
            $table->string('password')->nullable()->change();
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
            $table->dropColumn(['contact_number', 'avatar', 'address', 'date_of_birth', 'social_platform', 'social_id', 'institute_name']);
        });
    }
}
