@extends('packages.core.website.layouts.master')

@section('content')
    <section class="section-big-pt-space ratio_asos b-g-light">
        <div class="custom-container">
            <div class="product-wrapper-grid product">
                <div class="row">
                  <div class="col-12">
                    <h1 class="font-30 mb-2">EMI Enabled Products</h1>
                  </div>
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
