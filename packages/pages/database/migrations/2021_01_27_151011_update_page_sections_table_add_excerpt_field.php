<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdatePageSectionsTableAddExcerptField extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('page_sections', function (Blueprint $table) {
            $table->text('excerpt')->nullable()->after('content');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('page_sections', function (Blueprint $table) {
            $table->dropColumn('excerpt');
        });
    }
}
