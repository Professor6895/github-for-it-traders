<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdatePagesTableAddMetaFields extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('pages', function (Blueprint $table) {
            $table->string('meta_title')->nullable()->after('content');
            $table->string('meta_keywords')->nullable()->after('meta_title');
            $table->string('meta_description')->nullable()->after('meta_keywords');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pages', function (Blueprint $table) {
            $table->dropColumn(['meta_title', 'meta_keywords', 'meta_description']);
        });
    }
}
