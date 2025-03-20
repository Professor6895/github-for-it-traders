<?php

namespace Jed\Blogs\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Jed\Blogs\App\Blog;
use Jed\Blogs\App\BlogCategory;
use Artesaos\SEOTools\Facades\SEOMeta;

class BlogController extends Controller
{
    public function index(Request $request)
    {
        $blogs = Blog::with(['media', 'category'])->latest()->where(['status' => 1])
        ->whereDate('publish_date', '<', Carbon::now()
        ->toDateTimeString());

        if ($request->has('category')) {
            $category = BlogCategory::where('slug', $request->category)->first();
            if ($category) {
                $blogs = $blogs->where('category_id', $category->id);
            }
        }

        if ($request->has('keyword')) {
            $blog = $blogs->where('title', 'LIKE', "%{$request->keyword}%");
        }
        $blogs = $blogs->paginate((env('PER_PAGE_PAGINATION')) ? env('PER_PAGE_PAGINATION') : '10');
        $blog_categories = BlogCategory::all();
        return view(resolveView('blogs::website.blogs'), compact('blogs', 'blog_categories'));
    }

    public function blogDetail($slug)
    {
        $blog = Blog::where(['status' => 1, 'slug' => $slug])->firstOrFail();
        $blog->setMeta();
        if ($blog->category) {
            SEOMeta::addMeta('article:section', $blog->category->title, 'property');
        }
        $expiresAt = now()->addHours(env('VIEW_COUNT_DURATION', 1));
        views($blog)->cooldown($expiresAt)->record();
        $blog_categories = BlogCategory::all();
        return view(resolveView('blogs::website.blog_detail'), compact('blog', 'blog_categories'));
    }

    public function getCategoryDetail($slug)
    {
        $category = BlogCategory::where('slug', $slug)->firstOrFail();
        $category->setMeta();
        $blogs = $category->blogs()->latest()->where(['blogs.status' => 1])->paginate((env('PER_PAGE_PAGINATION')) ? env('PER_PAGE_PAGINATION') : '10');
        $blog_categories = BlogCategory::all();
        return view(resolveView('blogs::website.category-detail'), compact('blogs', 'category', 'blog_categories'));
    }
}
