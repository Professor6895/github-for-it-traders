<footer class="footer">
    <div class="footer-middle">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6 col-lg-3">
                    <div class="widget widget-about">
                        <img src="{{ $settings['core']['logo'] }}" class="footer-logo" alt="Footer Logo" width="250">
                        
                        <div class="widget-call">
                            <i class="icon-phone"></i>
                            Got Question? Call us 24/7
                            <a href="tel:#" class="mt-1">{{ $settings['core']['contact_number'] }}</a>
                        </div><!-- End .widget-call -->
                    </div><!-- End .widget about-widget -->
                </div><!-- End .col-sm-6 col-lg-3 -->

                @if (isset($website_menu['footer-menu-1']))
                    <div class="col-sm-6 col-lg-3">
                        <div class="widget">
                            <h4 class="widget-title">Useful Links</h4><!-- End .widget-title -->
                            <ul class="widget-list">
                                {{-- {{ dd($website_menu) }} --}}
                                @foreach ($website_menu['footer-menu-1']['menu_items'] as $menu_item)
                                    <li><a href="{{ $menu_item['link'] }}"
                                            @if (isset($menu_item['open_new_tab'])) target="_blank" @endif>{{ $menu_item['name'] }}</a>
                                    </li>
                                @endforeach
                            </ul><!-- End .widget-list -->
                        </div><!-- End .widget -->
                    </div><!-- End .col-sm-6 col-lg-3 -->
                @endif
                @if (isset($website_menu['footer-menu-2']))
                    <div class="col-sm-6 col-lg-3">
                        <div class="widget">
                            <h4 class="widget-title">Information</h4><!-- End .widget-title -->
                            <ul class="widget-list">
                                {{-- {{ dd($website_menu) }} --}}
                                @foreach ($website_menu['footer-menu-2']['menu_items'] as $menu_item)
                                    <li><a href="{{ $menu_item['link'] }}"
                                            @if (isset($menu_item['open_new_tab'])) target="_blank" @endif>{{ $menu_item['name'] }}</a>
                                    </li>
                                @endforeach
                            </ul><!-- End .widget-list -->
                        </div><!-- End .widget -->
                    </div><!-- End .col-sm-6 col-lg-3 -->
                @endif

                <div class="col-sm-6 col-lg-3">
                    <div class="widget">
                        <h4 class="widget-title">My Account</h4><!-- End .widget-title -->

                        <ul class="widget-list">
                            @guest('web')
                                <li><a href="javascript:void(0)" class="website--login-toggler">Sign In</a></li>
                            @endguest
                            <li><a href="/cart">View Cart</a></li>
                            <li><a href="/my-wishlist">My Wishlist</a></li>
                            <li><a href="/user-profile/orders">My Orders</a></li>
                            <li><a href="/user-profile/address-book">Address Book</a></li>
                        </ul><!-- End .widget-list -->
                    </div><!-- End .widget -->
                </div><!-- End .col-sm-6 col-lg-3 -->
            </div><!-- End .row -->
        </div><!-- End .container -->
    </div><!-- End .footer-middle -->

    <div class="footer-bottom">
        <div class="container-fluid">
            <p class="footer-copyright">Copyright © {{ date('Y') }} IT Traders. All Rights Reserved.</p>
            <!-- End .footer-copyright -->
            <figure class="footer-payments">
                Developed by <a href="https://jeevandhakal.com.np">Jeevan Dhakal</a>
            </figure><!-- End .footer-payments -->
        </div><!-- End .container -->
    </div><!-- End .footer-bottom -->
</footer><!-- End .footer -->
