{{-- <div class="blog-sidebar">
    <div class="theme-card">
        <h4>Featured BlogS</h4>
        <ul class="recent-blog">
            @foreach ($featured_blogs as $blog_)
                <li>
                    <div class="media">
                        <img class="img-fluid " src="{{ $blog_->blog_thumbnail['thumb'] }}" loading="lazy"
                            alt="{{ $blog_->title }}">
                        <div class="media-body align-self-center">
                            <br>
                            <p><a class="text-black"
                                    href="{{ route('website.blogs-detail', $blog_->slug) }}">{{ Str::limit($blog_->title, 50) }}</a>
                            </p>
                            <h6>{{ $blog_->publish_date->format('y M D') }}</h6>
                            <p>{{ views($blog_)->count() }} hits</p>
                        </div>
                    </div>
                </li>
            @endforeach
        </ul>
    </div>
    <div class="theme-card">
        <h4>Blog Categories</h4>
        <ul class="blog--categories" style="left: 0px;">
            @foreach ($blog_categories as $cat__)
                <li><a href="{{ route('website.blog-category-detail', $cat__->slug) }}"><i
                            class="bi bi-chevron-double-right"></i>&nbsp;&nbsp;{{ $cat__->title }}</a></li>
            @endforeach
        </ul>
    </div>
</div> --}}


<div class="sidebar">
    <div class="widget widget-search blog--sidebar-widget">
        <h3 class="widget-title">Search</h3><!-- End .widget-title -->

        <form method="get" action="/blogs">
            <label for="ws" class="sr-only">Search in blog</label>
            <input type="search" value="{{ request()->keyword }}" class="form-control" name="keyword" id="ws" placeholder="Search in blog">
            <button type="submit" class="btn"><i class="icon-search"></i><span
                    class="sr-only">Search</span></button>
        </form>
    </div><!-- End .widget -->

    <div class="widget widget-cats blog--sidebar-widget">
        <h3 class="widget-title">Categories</h3><!-- End .widget-title -->

        <ul>
            @foreach ($blog_categories as $cat__)
                <li><a href="{{ route('website.blog-category-detail', $cat__->slug) }}">{{ $cat__->title }}</a></li>
            @endforeach
        </ul>
    </div><!-- End .widget -->

    <div class="widget blog--sidebar-widget">
        <h3 class="widget-title">Featured Posts</h3><!-- End .widget-title -->
        <ul class="posts-list">
            @foreach ($featured_blogs as $blog_)
                <li>
                    <figure>
                        <a href="{{ route('website.blogs-detail', $blog_->slug) }}">
                            <img src="{{ $blog_->blog_thumbnail['thumb'] }}" alt="post">
                        </a>
                    </figure>
                    <div>
                        <span>{{ $blog_->publish_date->format('y M D') }}</span>
                        <h4><a href="{{ route('website.blogs-detail', $blog_->slug) }}">{{ $blog_->title }}</a></h4>
                    </div>
                </li>
            @endforeach
        </ul><!-- End .posts-list -->
    </div><!-- End .widget -->
{{-- 
    <div class="widget">
        <h3 class="widget-title">Browse Tags</h3><!-- End .widget-title -->

        <div class="tagcloud">
            <a href="#">fashion</a>
            <a href="#">style</a>
            <a href="#">women</a>
            <a href="#">photography</a>
            <a href="#">travel</a>
            <a href="#">shopping</a>
            <a href="#">hobbies</a>
        </div><!-- End .tagcloud -->
    </div><!-- End .widget --> --}}

</div><!-- End .sidebar -->
