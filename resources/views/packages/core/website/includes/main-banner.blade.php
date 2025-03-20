@if (isset($banners['main-banner']))
    <div class="intro-section pb-1 mb-2 mt-2">
        <div class="container-fluid">
            <div class="row">
                <div class="{{ isset($banners['right-slider-thumbnail']) ? 'col-sm-9' : 'col-12' }}">
                    <div class="intro-slider owl-carousel owl-simple owl-dark owl-nav-inside" data-toggle="owl"
                        data-owl-options='{
                            "nav": false, 
                            "dots": true,
                            "autoplayTimeout":5000,
                            "autoplay":true,
                            "responsive": {
                                "768": {
                                    "nav": true,
                                    "dots": false
                                }
                            }
                        }'>
                        @foreach ($banners['main-banner'] as $main_banner)
                            <div class="intro-slide">
                                <img src="{{ $main_banner['banner_image']['full'] }}" alt="Image Desc" class="main--home-banner @if(!isset($banners['right-slider-thumbnail'])) banner--fix-height @endif ">
                            </div><!-- End .intro-slide -->
                        @endforeach
                    </div><!-- End .intro-slider owl-carousel owl-simple -->
                    <span class="slider-loader"></span><!-- End .slider-loader -->
                </div>
                @if (isset($banners['right-slider-thumbnail']))
                    <div class="col-sm-3">
                        <div class="intro-banners">
                            @foreach ($banners['right-slider-thumbnail'] as $right_banner)
                                <div class="banner mb-2">
                                    <a href="#">
                                        <img src="{{ $right_banner['banner_image']['full'] }}" alt="Banner">
                                    </a>
                                </div>
                            @endforeach
                        </div><!-- End .intro-banners -->
                    </div><!-- End .col-lg-4 -->
                @endif
            </div>
        </div>
    </div><!-- End .intro-section -->
@endif
