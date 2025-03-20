@php
    $brands = Jed\Ecommerce\App\ProductBrand::with('media')
        ->latest()
        ->get();
@endphp
<div class="container-fluid">
    <h3><strong>Brands</strong></h3>
    <div class="owl-carousel mb-5 owl-simple" data-toggle="owl"
        data-owl-options='{
                            "nav": false,
                            "dots": false,
                            "margin": 30,
                            "loop": true,
                            "responsive": {
                                "0": {
                                    "items":4
                                },
                                "420": {
                                    "items":5
                                },
                                "600": {
                                    "items":6
                                },
                                "900": {
                                    "items":8
                                },
                                "1024": {
                                    "items": 10
                                }
                            }
                        }'>
        @foreach ($brands as $brand)
            <div class="d-flex align-items-center justify-content-center" style="height:60px;margin:5px;">
                <a href="{{ route('website.brand-detail', $brand->slug) }}">
                    <img class="home--brand-logo" src="{{ $brand->brand_image['thumb'] }}" alt="{{ $brand->name }}"
                        width="50px" loading="lazy">
                </a>
            </div>
        @endforeach
    </div><!-- End .owl-carousel -->
</div><!-- End .container -->
