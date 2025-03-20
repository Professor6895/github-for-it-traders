@extends('packages.core.website.layouts.master')
@section('content')
    <div class="page-content pb-3 mt-4">
        <div class="container">
            <div class="row">
                @if ($page->getFirstMediaUrl())
                    <img src="{{ $page->page_thumbnail_image['full'] }}" alt="" class="mb-4">
                @endif
                {!! $page->content !!}
            </div><!-- End .row -->

        </div><!-- End .container -->
    </div><!-- End .page-content -->
@endsection
