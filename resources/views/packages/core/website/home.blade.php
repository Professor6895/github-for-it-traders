@extends('packages.core.website.layouts.master')

@inject('banner_helper', 'Jed\Banners\Helpers\BannerHelper')
@php
    $banners = $banner_helper->getBanners(['main-banner', 'right-slider-thumbnail']);
    $featured_categories = $product_categories->where('featured', 1)->all();
    $discount_campaigns = Jed\Ecommerce\App\DiscountCampaign::where('show_on_home', 1)->get();
@endphp
@section('content')
    @include('packages.core.website.includes.main-banner')
    @if ($discount_campaigns->count())
        @foreach ($discount_campaigns as $discount_campaign)
            @includeWhen($discount_campaign->is_active, 'packages.core.website.common.discount-campaign', ['discount_campaign' => $discount_campaign])
        @endforeach
    @endif
   
    @include('packages.core.website.includes.home.brands-list')

    @foreach ($featured_categories as $key => $featured_category)
        @php
            switch ($loop->iteration) {
                case 1:
                    $banner_class = 'home-banner-first';
                    break;
                case 2:
                    $banner_class = 'home-banner-second';
                    break;
                case 3:
                    $banner_class = 'home-banner-third';
                    break;
                case 4:
                    $banner_class = 'home-banner-fourth';
                    break;
                case 5:
                    $banner_class = 'home-banner-fifth';
                    break;
                case 6:
                    $banner_class = 'home-banner-sixth';
                    break;
                case 7:
                    $banner_class = 'home-banner-seventh';
                    break;
            }
        @endphp
        @if ($loop->iteration <= 7)
            <div data-src="{{ route('website.ajax.home-banns', $banner_class) }}" data-method="GET" data-loader="displayLoader"
                class="home-page-lazy-content home--lazy-content-area"></div>
        @endif
        <div data-src="{{ route('website.ajax.category-products', $featured_category->slug) }}" data-method="GET"
            data-loader="displayLoader" class="home-page-lazy-content home--lazy-content-area"></div>
    @endforeach
    @include(resolveView('ecommerce::website.popup'))
@endsection

@push('js')
    <script>
        var carousels = {};
        carousels.featuredOwl = function(element, substract = 0) {
            $(element).owlCarousel({
                loop: true,
                autoplay: false,
                "margin": 20,
                nav: false,
                navText: ["<i class='icon-angle-left'></i>", "<i class='icon-angle-right'></i>"],
                dots: false,
                autoplayHoverPause: true,
                '{{ session('direction') }}': false,
                responsive: {
                    //X-Small
                    0: {
                        items: 1
                    },
                    360: {
                        items: 2
                    },
                    375: {
                        items: 2
                    },
                    540: {
                        items: 2
                    },
                    //Small
                    576: {
                        items: 2
                    },
                    //Medium
                    768: {
                        items: 3
                    },
                    //Large
                    992: {
                        items: 4
                    },
                    //Extra large
                    1200: {
                        items: 5 - substract
                    },
                    //Extra extra large
                    1400: {
                        items: 6 - substract
                    }
                }
            });
        }
        $(document).ready(function() {
            $('.home-page-lazy-content').lazy({
                displayLoader: function(element) {
                    let req_method = element.data('method');
                    let url = element.data('src');
                    let callback = element.data('callback')
                    $.ajax({
                        url: url,
                        type: req_method,
                        cache: false,
                        success: function(res) {
                            element.append(res.view);
                        },
                    }).done(function() {
                        element.removeClass('home--lazy-content-area');
                        var item_slider = element.find('.home--owl-carousel-slider');
                        element.removeAttr('data-src');
                        element.removeAttr('data-method');
                        if (item_slider[0]) {
                            let substract_count = item_slider.data('substract')
                            console.log(substract_count)
                            carousels.featuredOwl(item_slider, substract_count);
                        }
                        $('.star--rating').each(function() {
                            let rating = $(this).data('rating');
                            $(this).rateYo({
                                starWidth: "20px",
                                halfStar: true,
                                rating: rating,
                                readOnly: true
                            });
                        })
                    });
                }
            })
        })
    </script>
@endpush
