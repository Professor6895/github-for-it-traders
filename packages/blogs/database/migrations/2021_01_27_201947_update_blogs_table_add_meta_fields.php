<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateBlogsTableAddMetaFields extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('blogs', function (Blueprint $table) {
            $table->string('short_desc', 500)->nullable()->change();
            $table->integer('category_id')->after('slug');
            $table->timestamp('publish_date')->nullable()->before('created_at');
            $table->string('meta_title')->nullable()->before('created_at');
            $table->string('meta_keywords')->nullable()->before('created_at');
            $table->string('meta_description')->nullable()->before('created_at');
            $table->softDeletes();
        });

        Schema::table('blog_categories', function (Blueprint $table) {
            $table->string('meta_title')->nullable()->before('created_at');
            $table->string('meta_keywords')->nullable()->before('created_at');
            $table->string('meta_description')->nullable()->before('created_at');
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('blogs', function (Blueprint $table) {
            $table->dropColumn(['category_id', 'publish_date', 'meta_title', 'meta_keywords', 'meta_description']);
            $table->dropSoftDeletes();
        });
        Schema::table('blog_categories', function (Blueprint $table) {
            $table->dropColumn(['meta_title', 'meta_keywords', 'meta_description']);
            $table->dropSoftDeletes();
        });
    }
}
