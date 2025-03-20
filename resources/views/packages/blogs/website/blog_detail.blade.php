@extends('packages.core.website.layouts.master')
@inject('blog_helper', 'Jed\Blogs\Helpers\BlogHelper')
@php
    $featured_blogs = $blog_helper->getBlogs(5, true);
@endphp
@section('content')
    <div class="page-content mt-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-9">
                    <article class="entry single-entry">
                        <figure class="entry-media">
                            <img src="{{ $blog->blog_thumbnail['full'] }}" alt="{{ $blog->blog_thumbnail['alt_text'] ?? $blog->title }}">
                        </figure><!-- End .entry-media -->

                        <div class="entry-body">
                            <div class="entry-meta mb-2">
                                <span class="entry-author">
                                    by <a href="#">{{ $blog->author }}</a>
                                </span>
                                <span class="meta-separator">|</span>
                                <a href="#">{{ $blog->publish_date->format('d M Y') }}</a>
                                <span class="meta-separator">|</span>
                                <a href="#">{{ views($blog)->count() }} Views</a>
                            </div><!-- End .entry-meta -->

                            <h2>
                                {{ $blog->title }}
                            </h2><!-- End .entry-title -->
                        </div>

                        <div class="social-share mb-3">
                            <a href="javascript:void(0)" data-url="{{ request()->url() }}"
                                data-title="{{ $blog->meta_title ?? $blog->title }}"
                                data-text="{{ $blog->meta_description ?? $blog->short_desc }}"
                                data-image="{{ $blog->blog_thumbnail['full'] }}" class="social_share s_facebook">
                                <img src="{{ asset('website/images/faecbook.png') }}" width="40px" alt=""
                                    loading="lazy">
                            </a>

                            <a href="javascript:void(0)" data-url="{{ request()->url() }}"
                                data-title="{{ $blog->meta_title ?? $blog->title }}"
                                data-text="{{ $blog->meta_description ?? $blog->short_desc }}"
                                data-image="{{ $blog->blog_thumbnail['full'] }}" class="social_share s_twitter">
                                <img src="{{ asset('website/images/twitter.png') }}" width="40px" alt=""
                                    loading="lazy">
                            </a>
                            <a href="javascript:void(0)" data-url="{{ request()->url() }}"
                                data-title="{{ $blog->meta_title ?? $blog->title }}"
                                data-text="{{ $blog->meta_description ?? $blog->short_desc }}"
                                data-image="{{ $blog->blog_thumbnail['full'] }}" class="social_share s_linkedin">
                                <img src="{{ asset('website/images/linkedin.png') }}" width="40px" alt=""
                                    loading="lazy">
                            </a>
                        </div>

                        <div class="entry-content editor-content">
                            {!! $blog->content !!}
                        </div>
                    </article>
                </div>
                <div class="col-lg-3">
                    @include('packages.blogs.website.partials.sidebar')
                </div>
            </div>
        </div>
    </div>
    {{-- <section class="section-big-py-space blog-detail-page ratio2_3">
        <div class="custom-container">
            <div class="row">
                <!--Blog sidebar start-->
                <div class="col-xl-9 col-lg-8 col-md-7 blog-detail mb-4">
                    <div class="creative-card p-4">
                        <img src="{{ $blog->blog_thumbnail['full'] }}" class="img-fluid w-100 " loading="lazy"
                            alt="{{ $blog->title }}">
                        <h1 class="font-30">{{ $blog->title }} </h1>
                        <ul class="post-social mt-3">
                            <li>{{ $blog->publish_date->format('d M Y') }}</li>
                            <li>Posted By : {{ $blog->author }}</li>
                            <li><i class="bi bi-heart"></i> {{ views($blog)->count() }} Hits</li>
                        </ul>

                        <div class="social-share m-3 mb-3">
                            <span class="font-20">Share this on: </span>
                            <a href="javascript:void(0)" data-url="{{ request()->url() }}"
                                data-title="{{ $blog->meta_title ?? $blog->title }}"
                                data-text="{{ $blog->meta_description ?? $blog->short_desc }}"
                                data-image="{{ $blog->blog_thumbnail['full'] }}" class="social_share s_facebook">
                                <img src="{{ asset('website/images/faecbook.png') }}" width="40px" alt=""
                                    loading="lazy">
                            </a>

                            <a href="javascript:void(0)" data-url="{{ request()->url() }}"
                                data-title="{{ $blog->meta_title ?? $blog->title }}"
                                data-text="{{ $blog->meta_description ?? $blog->short_desc }}"
                                data-image="{{ $blog->blog_thumbnail['full'] }}" class="social_share s_twitter">
                                <img src="{{ asset('website/images/twitter.png') }}" width="40px" alt=""
                                    loading="lazy">
                            </a>
                            <a href="javascript:void(0)" data-url="{{ request()->url() }}"
                                data-title="{{ $blog->meta_title ?? $blog->title }}"
                                data-text="{{ $blog->meta_description ?? $blog->short_desc }}"
                                data-image="{{ $blog->blog_thumbnail['full'] }}" class="social_share s_linkedin">
                                <img src="{{ asset('website/images/linkedin.png') }}" width="40px" alt=""
                                    loading="lazy">
                            </a>
                        </div>
                        <div class="blog--content">
                            {!! $blog->content !!}
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-5  blog-page">
                    @include('packages.blogs.website.partials.sidebar')
                </div>
            </div>
        </div>
    </section> --}}
@endsection

@push('js')
    <script>
        window.onload = function() {
            $('.blog--content').find('table').addClass('table')
        }
    </script>
@endpush
