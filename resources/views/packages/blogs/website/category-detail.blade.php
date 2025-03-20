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
                        <div class=" mb-3">
                            <h3>{{ $category->title }}</h3>
                        </div>
                    @include('packages.blogs.website.partials.blog-lists')
                </div>
                <div class="col-lg-3">
                    @include('packages.blogs.website.partials.sidebar')
                </div>
                {{-- <div class="col-xl-3 col-lg-4 col-md-5">
            </div> --}}
            </div>
        </div>
    </div>
@endsection
