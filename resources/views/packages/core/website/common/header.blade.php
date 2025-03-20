<header class="header header-intro-clearance header-3">
    <div class="header-top">
        <div class="container-fluid">
            <div class="header-left">
                <a href="tel:#"><i class="icon-phone"></i>Call: {{ $settings['core']['contact_number'] }}</a>
            </div><!-- End .header-left -->

            <div class="header-right">
                <ul class="top-menu">
                    <li>
                        <a href="#">Account</a>
                        <ul>
                            @guest('web')
                                <li><a href="javascript:void(0)" class="website--login-toggler">Sign in / Sign up</a></li>
                            @endguest
                            @auth('web')
                                <li>
                                    <div class="header-dropdown">
                                        <a href="#"><i class="icon-user"></i>{{ auth('web')->user()->name }}</a>
                                        <div class="header-menu">
                                            <ul>
                                                <li><a href="{{ route('website.user-profile') }}">View Profile</a></li>
                                                <li><a href="#"
                                                        onclick="event.preventDefault();
                                                    document.getElementById('website-logout-form').submit();">Logout</a>
                                                </li>
                                                <form id="website-logout-form" action="{{ route('website.user-logout') }}"
                                                    method="POST" style="display: none;">
                                                    @csrf
                                                </form>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            @endauth
                        </ul>
                    </li>
                </ul><!-- End .top-menu -->
            </div><!-- End .header-right -->

        </div><!-- End .container -->
    </div><!-- End .header-top -->

    <div class="header-middle">
        <div class="container-fluid">
            <div class="header-left">
                <button class="mobile-menu-toggler">
                    <span class="sr-only">Toggle mobile menu</span>
                    <i class="icon-bars"></i>
                </button>

                <a href="/" class="logo">
                    @if (isset($settings['core']['logo']))
                        <img src="{{ $settings['core']['logo'] }}"
                            alt="It Traders Logo" width="155">
                    @endif
                </a>
            </div><!-- End .header-left -->

            <form method="GET" action="{{ route('website.product-list') }}">
                <div class="header-center">
                    <div class="header-search header-search-extended header-search-visible d-none d-lg-block">
                        <a href="#" class="search-toggle" role="button"><i class="icon-search"></i></a>
                        <div class="header-search-wrapper search-wrapper-wide">
                            <label for="q" class="sr-only">Search</label>
                            <button class="btn btn-primary" type="submit"><i class="icon-search"></i></button>
                            <input type="search" class="form-control website-product__search" name="keyword"
                                id="q" placeholder="Search product ..." required>
                            <div class="search--data-wrapper"></div>
                        </div><!-- End .header-search-wrapper -->
                    </div><!-- End .header-search -->
                </div>
            </form>

            <div class="header-right">
                @php
                    $compare_count = 0;
                    $compare_products = session('products_on_compare');
                    if ($compare_products) {
                        $compare_count = count(explode(',', $compare_products));
                    }
                @endphp
                <div class="wishlist">
                    <a href="/compare-products" title="Wishlist">
                        <div class="icon">
                            <i class="icon-random"></i>
                            <span class="wishlist-count badge">{{ $compare_count }}</span>
                        </div>
                        <p>Compare</p>
                    </a>
                </div>

                <div class="wishlist">
                    <a href="/wishlist" title="Wishlist">
                        <div class="icon">
                            <i class="icon-heart-o"></i>
                            @auth('web')
                                <span
                                    class="wishlist-count wishlist--product-counts badge">{{ Jed\Ecommerce\Cart\UserWishlist::where('user_id', auth('web')->user()->id)->count() }}</span>
                            @endauth

                            @guest('web')
                                <span class="wishlist-count wishlist--product-counts badge">0</span>
                            @endguest
                        </div>
                        <p>Wishlist</p>
                    </a>
                </div><!-- End .compare-dropdown -->

                <website-cart></website-cart>
            </div><!-- End .header-right -->
        </div><!-- End .container -->
    </div><!-- End .header-middle -->


    <div class="header-bottom sticky-header">
        <div class="container-fluid">
            <div class="header-left">
                <div class="dropdown category-dropdown">
                    <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false" data-display="static" title="Browse Categories">
                        Browse Categories <i class="icon-angle-down"></i>
                    </a>

                    <div class="dropdown-menu">
                        <nav class="side-nav">
                            <ul class="menu-vertical sf-arrows">
                                @foreach ($product_categories as $category)
                                    <li><a
                                            href="{{ route('website.category-detail', $category->slug) }}">{{ $category->title }}</a>
                                    </li>
                                @endforeach
                            </ul><!-- End .menu-vertical -->
                        </nav><!-- End .side-nav -->
                    </div><!-- End .dropdown-menu -->
                </div><!-- End .category-dropdown -->
            </div><!-- End .header-left -->

            <div class="header-center">
                <nav class="main-nav">
                    @if (isset($website_menu['main-menu']))
                        <ul class="menu sf-arrows">
                            @foreach ($website_menu['main-menu']['menu_items'] as $menu_item)
                                <li>
                                    <a href="{{ $menu_item['link'] }}"
                                        class="{{ sizeof($menu_item['children']) ? 'sf-with-ul' : '' }}">{{ $menu_item['name'] }}</a>
                                    @if (sizeof($menu_item['children']))
                                        <div class="megamenu megamenu-md">
                                            <div class="row no-gutters">
                                                <div class="col-md-12">
                                                    <div class="menu-col">
                                                        <div class="row">
                                                            @foreach ($menu_item['children'] as $mega_group)
                                                                <div class="col-md-4">
                                                                    <div class="menu-title">
                                                                        <a href="{{ $mega_group['link'] }}">
                                                                            {{ $mega_group['name'] }}
                                                                        </a>
                                                                    </div>
                                                                    <ul>
                                                                        @foreach ($mega_group['children'] as $mega_menu)
                                                                            <li><a
                                                                                    href={{ $mega_menu['link'] }}>{{ $mega_menu['name'] }}</a>
                                                                            </li>
                                                                        @endforeach
                                                                    </ul>
                                                                </div><!-- End .col-md-6 -->
                                                            @endforeach
                                                        </div><!-- End .row -->
                                                    </div><!-- End .menu-col -->
                                                </div><!-- End .col-md-8 -->
                                            </div><!-- End .row -->
                                        </div><!-- End .megamenu megamenu-md -->
                                    @endif
                                </li>
                            @endforeach


                        </ul><!-- End .menu -->
                    @endif
                </nav><!-- End .main-nav -->
            </div><!-- End .header-center -->

            {{-- <div class="header-right">
                <i class="la la-lightbulb-o"></i>
                <p>Clearance<span class="highlight">&nbsp;Up to 30% Off</span></p>
            </div> --}}
        </div><!-- End .container -->
    </div><!-- End .header-bottom -->
</header>
{{-- 

<div class="header-search-wrapper search-wrapper-wide" style="padding: 10px 10px 0px 10px">
    <form method="GET" action="{{ route('website.product-list') }}">
        <input type="search" class="form-control website-product__search" name="keyword" id="q"
            style="margin-bottom: 0px" placeholder="Search entire store here.." required>
            <button class="btn btn-primary" type="submit"><i class="icon-search"></i></button>

        <div class="search--data-wrapper"></div>
    </form>
</div><!-- End .header-search-wrapper --> --}}
@if (request()->segment(1) == null)
    <form method="GET" action="{{ route('website.product-list') }}" class="mobile-search d-block d-md-none">
        <label for="mobile-search" class="sr-only">Search</label>
        <input type="search" class="form-control" name="keyword" id="mobile-search" placeholder="Search entire store here.."
            required>
        <button class="btn btn-primary" type="submit"><i class="icon-search"></i></button>
    </form>
@endif
