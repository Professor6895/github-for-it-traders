@extends('packages.core.website.layouts.master')

@if (isset($model) && $model->description)
    @section('footer-description')
        <div class="col-12">
            {!! $model->description !!}
        </div>
    @endsection
@endif
@section('content')
    @if (isset($model) && count($model->images))
        <div class="custom-container mt-3">
            <div class="slide-1">
                @foreach ($model->images as $media)
                    <div>
                        <div class="slider-banner">
                            <div class="slider-img">
                                <img src="{{ $media->getUrl() }}" class="w-full" alt="slider" loading="lazy">
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    @endif
    <section class="section-big-pt-space ratio_asos b-g-light">
        <div class="custom-container">
            <div class="product-wrapper-grid product">
                <div class="row">
                    @foreach ($products as $product)
                        <div class="col-xl-3 col-md-4 col-6 col-grid-box product--shop-list">
                            @include('packages.core.website.common.product-single-list')
                        </div>
                    @endforeach
                    <div class="col-12 text-center mb-4 mt-4">
                      {{ $products->render() }}
                    </div>
                </div>
            </div>
        </div>
    </section>

    @include('packages.core.website.includes.product-quickview')
@endsection
