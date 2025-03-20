@extends('packages.core.website.layouts.master')

@section('content')
    <section class="mt-2 blog-detail-page ratio2_3">
        <div class="custom-container">
            <div class="row">
                <div class="col-12">
                    <div class="slide-1 mb-2">
                        @foreach ($brand->images as $media)
                            <div>
                                <div class="slider-banner">
                                    <div class="slider-img">
                                        <a href="{{ (isset($media->custom_properties['link'])) ?$media->custom_properties['link'] : '#' }}">
                                            <img src="{{ $media->getUrl() }}" class="w-full" alt="slider" loading="lazy">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
                <div class="col-xl-9 col-lg-8 col-md-7 blog-detail mb-4">
                    <div class="creative-card p-3">
                        
                        <h1 class="font-30">{{ $brand->name }} price in Nepal</h1>
                        <div class="mt-4 row">
                            <div class="col-12">
                                <table class="table table-bordered table-responsive">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Options</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($products as $product)
                                            <tr>
                                                <td class="p-2" width="10%"><img
                                                        src="{{ $product->default_media['thumb'] }}" alt="" width="50">
                                                </td>
                                                <td width="50%">
                                                    <h3 class="font-18"><a class="text-black "
                                                        href="{{ route('website.product-detail', $product->slug) }}">{{ $product->name }}</a>
                                                </h3>
                                                </td>
                                                <td>
                                                    <p class="font-18">Rs. {{ $product->price }}</p>
                                                </td>
                                                <td>
                                                    <button class="btn btn-secondary btn-sm product--quick-view"
                                                        data-product-id="{{ $product->id }}"><i
                                                            class="bi bi-search"></i></button>
                                                </td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-5  blog-page">
                    @include('packages.ecommerce.website.price-in-nepal.sidebar')
                </div>
            </div>
        </div>
    </section>
@endsection

{{-- @push('js')
    <script>
         window.onload = function() {
             $('.blog--content').find('table').addClass('table')
         }
    </script>
@endpush --}}
