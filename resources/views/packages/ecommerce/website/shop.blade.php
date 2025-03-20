@extends('packages.core.website.layouts.master')

@php
    if (request()->has('keyword')) {
        SEOMeta::setTitle('Buy ' . request()->keyword . ' at best price in Nepal');
        SEOMeta::setDescription('Buy ' . request()->keyword . ' at best price in Nepal');
    }
    if (isset($model) && $model) {
        $model->setMeta();
    }
@endphp
@section('json-ld')
    @php
        if (isset($model) && $model) {
            JsonLd::setDescription(false);
            JsonLd::setUrl(false);
            JsonLd::setTitle(false);
            JsonLd::setImages([]);
            JsonLd::setType('ItemList');
        
            $item_lists = [];
            $products = $model
                ->products()
                ->latest()
                ->limit(10)
                ->get();
            foreach ($products as $key => $product) {
                $item_lists[] = [
                    '@type' => 'ListItem',
                    'position' => $key + 1,
                    'name' => $product->name,
                    'url' => route('website.product-detail', $product->slug),
                ];
            }
        
            JsonLd::addValue('itemListElement', $item_lists);
        }
    @endphp
    {!! JsonLd::generate() !!}
@endsection
@if (isset($model) && !empty($model->custom_code))
    @section('custom_code')
        {!! $model->custom_code !!}
    @endsection
@endif
@section('footer-description')
@endsection

@section('content')
    {{-- @if (isset($model) && count($model->images))
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
    @endif --}}
    <nav aria-label="breadcrumb" class="breadcrumb-nav mb-2">
        <div class="container-fluid">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/"><i class="icon-home"></i>&nbsp;Home</a></li>
                @if (request()->segment(1) == 'brand')
                    <li class="breadcrumb-item"><a href="/brands">Brands</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ $model->name }}</li>
                @elseif (request()->segment(1) == 'category')
                    <li class="breadcrumb-item"><a href="/categories">Categories</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ $model->title }}</li>
                @endif
            </ol>
        </div><!-- End .container -->
    </nav>
    <div class="page-content mt-3">
        <div class="container-fluid">
            @if (request()->segment(1) == 'category')
                <shop :url-filters="{{ json_encode(['category' => $model->slug]) }}"></shop>
            @elseif(request()->segment(1) == 'brand')
                <shop :url-filters="{{ json_encode(['brand' => $model->slug]) }}"></shop>
            @else
                <shop :url-filters="{{ json_encode([]) }}"></shop>
            @endif


            @if (isset($model) && $model->faqs->count())
                <h4>Frequently Asked Questions</h4>
                <div class="accordion accordion-rounded" id="faq--wrapper">
                    @foreach ($model->faqs as $index => $faq)
                        <div class="card card-box card-sm bg-light  faq--card mb-1">
                            <div class="card-header" id="heading-{{ $index }}">
                                <h2 class="card-title">
                                    <a class="collapsed" role="button" data-toggle="collapse"
                                        href="#collapse-{{ $index }}" aria-expanded="false"
                                        aria-controls="collapse-{{ $index }}">
                                        <p class="faq-question"><span class="d-inline-block">{{ $faq->question }}</span></p>
                                    </a>
                                </h2>
                            </div><!-- End .card-header -->
                            <div id="collapse-{{ $index }}" class="collapse"
                                aria-labelledby="heading-{{ $index }}" data-parent="#faq--wrapper">
                                <div class="card-body">
                                    {!! $faq->answer !!}
                                </div><!-- End .card-body -->
                            </div><!-- End .collapse -->
                        </div><!-- End .card -->
                    @endforeach
                </div>
            @endif
        </div>

        <div class="container-fluid">
            <section class="section-big-pt-space ratio_asos b-g-light">
                @if (isset($model) && $model->description)
                    <div class="custom-container footer-description--area">
                        {!! $model->description !!}
                    </div>
                @endif
            </section>
        </div>
    </div>
    @include('packages.core.website.includes.product-quickview')
@endsection
