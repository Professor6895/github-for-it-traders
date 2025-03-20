<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    {{-- 
    @php
        $url_parsed = parse_url(url()->full());
        $canonical = 'https://ittradersnepal.com';
        if (isset($url_parsed['path'])) {
            $canonical .= $url_parsed['path'];
        }
        if (isset($url_parsed['query'])) {
            $canonical .= '?' . $url_parsed['query'];
        }
    @endphp
    <link rel="canonical" href="{{ $canonical }}" /> --}}
    {!! SEOMeta::generate() !!}
    {!! OpenGraph::generate() !!}
    {!! Twitter::generate() !!}
    <!-- Favicon -->
    @if (isset($settings['core']['favicon']))
        <link rel="apple-touch-icon" sizes="180x180" href="{{ $settings['core']['favicon'] }}">
        <link rel="icon" type="image/png" sizes="32x32" href="{{ $settings['core']['favicon'] }}">
        <link rel="icon" type="image/png" sizes="16x16" href="{{ $settings['core']['favicon'] }}">
        <link rel="mask-icon" href="{{ $settings['core']['favicon'] }}" color="#666666">
        <link rel="shortcut icon" href="{{ $settings['core']['favicon'] }}">
    @endif
    <link rel="stylesheet"
        href="{{ asset('/website/css/app.css?v=' . filemtime(public_path('/website/css/app.css'))) }}">

    @stack('css')
</head>
@inject('menu_helper', 'Jed\Menus\App\Helpers\MenuHelper')
@php
    $website_menu = $menu_helper->getMenus(['main-menu', 'footer-menu-1', 'footer-menu-2']);
@endphp

<body>
    <div class="page-wrapper" id="vue-app">
        @include('packages.core.website.auth.auth-modal')
        <!-- End .header -->
        @include('packages.core.website.common.header')
        <main class="main">
            @yield('content')
        </main><!-- End .main -->

        @include('packages.core.website.common.footer')


    </div><!-- End .page-wrapper -->
    <button id="scroll-top" title="Back to Top"><i class="icon-arrow-up"></i></button>

    @include('packages.core.website.common.mobile-menu')
    <!-- Sign in / Register Modal -->
    <!-- End .modal -->

    <div class="container newsletter-popup-container mfp-hide" id="newsletter-popup-form">
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="row no-gutters bg-white newsletter-popup-content">
                    <div class="col-xl-3-5col col-lg-7 banner-content-wrap">
                        <div class="banner-content text-center">
                            <img src="assets/images/popup/newsletter/logo.png" class="logo" alt="logo"
                                width="60" height="15">
                            <h2 class="banner-title">get <span>25<light>%</light></span> off</h2>
                            <p>Subscribe to the Molla eCommerce newsletter to receive timely updates from your favorite
                                products.</p>
                            <form action="#">
                                <div class="input-group input-group-round">
                                    <input type="email" class="form-control form-control-white"
                                        placeholder="Your Email Address" aria-label="Email Adress" required>
                                    <div class="input-group-append">
                                        <button class="btn" type="submit"><span>go</span></button>
                                    </div><!-- .End .input-group-append -->
                                </div><!-- .End .input-group -->
                            </form>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="register-policy-2" required>
                                <label class="custom-control-label" for="register-policy-2">Do not show this popup
                                    again</label>
                            </div><!-- End .custom-checkbox -->
                        </div>
                    </div>
                    <div class="col-xl-2-5col col-lg-5 ">
                        <img src="assets/images/popup/newsletter/img-1.jpg" class="newsletter-img" alt="newsletter">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Plugins JS File -->
    <script src="{{ asset('website/js/app.js?v=' . filemtime(public_path('/website/js/app.js'))) }}"></script>
    @include('packages.ecommerce.website.partials.scripts.product-scripts')
    @include('packages.core.website.common.message')
    @stack('js')
</body>

</html>
