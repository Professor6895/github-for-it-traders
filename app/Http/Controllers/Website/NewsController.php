<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Artesaos\SEOTools\Facades\SEOMeta;
use Illuminate\Http\Request;
use Jed\Blogs\App\Blog;
use Jed\Blogs\App\BlogCategory;

class NewsController extends Controller
{
    public function getNewsDetail($slug)
    {
        $blog = Blog::where(['status' => 1, 'slug' => $slug])->firstOrFail();
        if (!strtolower($blog->category->title) === 'news') {
            abort(404);
        }
        $blog->setMeta();
        if ($blog->category) {
            SEOMeta::addMeta('article:section', $blog->category->title, 'property');
        }
        $expiresAt = now()->addHours(env('VIEW_COUNT_DURATION', 1));
        views($blog)->cooldown($expiresAt)->record();
        $blog_categories = BlogCategory::all();
        return view(resolveView('blogs::website.blog_detail'), compact('blog', 'blog_categories'));
    }
}
