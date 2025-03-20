@extends('packages.core.website.layouts.master')
@inject('blog_helper', 'Jed\Blogs\Helpers\BlogHelper')
@php
    $featured_blogs = $blog_helper->getBlogs(5, true);
@endphp
@section('content')
    <div class="page-content mt-4">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-9">
                    @if (request()->has('keyword') && !empty(request()->keyword))
                        <div class="text-center mb-3">
                            <h3>Search results for "{{ request()->keyword }}"</h3>
                        </div>
                    @endif
                    @include('packages.blogs.website.partials.blog-lists')
                </div>
                <div class="col-lg-3">
                    @include('packages.blogs.website.partials.sidebar')
                </div>
            </div>
        </div>
    </div>
@endsection
