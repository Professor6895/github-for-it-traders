@inject('blog_helper', 'Jed\Blogs\Helpers\BlogHelper')
@php
$blogs = $blog_helper->getBlogs(10);
@endphp
<section class="blog ">
    <!--title start-->
    <div class="title3">
        <h4>latest blog</h4>
    </div>
    <!--title end-->
    <div class="custom-container">
        <div class="row">
            <div class="col pr-0">
                <div class="blog-slide no-arrow">
                    @foreach ($blogs as $blog)
                        @php
                            $blog_url = route('website.blogs-detail', $blog->slug);
                            
                            if (strtolower($blog->category->title) == 'news') {
                                $blog_url = '/news-detail/' . $blog->slug;
                            }
                        @endphp
                        <div>
                            <div class="blog-contain">
                                <div class="blog-img">
                                    <a href="{{ $blog_url }}">
                                        <img src="{{ $blog->blog_thumbnail['thumb'] }}" alt="blog"
                                            class="img-fluid  w-100" loading="lazy">
                                    </a>
                                </div>
                                <div class="blog-details">
                                    <a href="{{ $blog_url }}">
                                        <h4>{{ $blog->title }}</h4>
                                    </a>
                                    <p>{{ $blog->short_description }}</p>
                                    <span><a href="{{ $blog_url }}">read
                                            more</a></span>
                                </div>
                                <div class="blog-label">
                                    <p>{{ $blog->publish_date->diffForHumans() }}</p>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>
