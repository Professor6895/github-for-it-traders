  <!-- Mobile Menu -->
  <div class="mobile-menu-overlay"></div><!-- End .mobil-menu-overlay -->

  <div class="mobile-menu-container">
      <div class="mobile-menu-wrapper">
          <span class="mobile-menu-close"><i class="icon-close"></i></span>

          @if(request()->segment(1) != null)
            <form  method="GET" action="{{ route('website.product-list') }}" class="mobile-search">
                <label for="mobile-search" class="sr-only">Search</label>
                <input type="search" class="form-control" name="keyword" id="mobile-search"
                    placeholder="Search in..." required>
                <button class="btn btn-primary" type="submit"><i class="icon-search"></i></button>
            </form>
          @endif

          <ul class="nav nav-pills-mobile nav-border-anim" role="tablist">
              <li class="nav-item">
                  <a class="nav-link active" id="mobile-menu-link" data-toggle="tab" href="#mobile-menu-tab"
                      role="tab" aria-controls="mobile-menu-tab" aria-selected="true">Menu</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" id="mobile-cats-link" data-toggle="tab" href="#mobile-cats-tab" role="tab"
                      aria-controls="mobile-cats-tab" aria-selected="false">Categories</a>
              </li>
          </ul>

          <div class="tab-content">
              <div class="tab-pane fade show active" id="mobile-menu-tab" role="tabpanel"
                  aria-labelledby="mobile-menu-link">
                  <nav class="mobile-nav">
                      <ul class="mobile-menu">
                          @foreach ($website_menu['main-menu']['menu_items'] as $menu_item)
                              <li>
                                  <a href="{{ $menu_item['link'] }}">{{ $menu_item['name'] }}</a>

                                  @if (sizeof($menu_item['children']))
                                      <ul>
                                          @foreach ($menu_item['children'] as $mega_group)
                                              <li>
                                                  <a href="{{ $mega_group['link'] }}">{{ $mega_group['name'] }}</a>

                                                  @if (sizeof($mega_group['children']))
                                                      <ul>
                                                          @foreach ($mega_group['children'] as $mega_menu)
                                                              <li>
                                                                  <a
                                                                      href="{{ $mega_menu['link'] }}">{{ $mega_menu['name'] }}</a>
                                                              </li>
                                                          @endforeach
                                                      </ul>
                                                  @endif
                                              </li>
                                          @endforeach
                                      </ul>
                                  @endif
                              </li>
                          @endforeach
                      </ul>
                  </nav><!-- End .mobile-nav -->
              </div><!-- .End .tab-pane -->
              <div class="tab-pane fade" id="mobile-cats-tab" role="tabpanel" aria-labelledby="mobile-cats-link">
                  <nav class="mobile-cats-nav">
                      <ul class="mobile-cats-menu">
                          @foreach ($product_categories as $category)
                              <li><a
                                      href="{{ route('website.category-detail', $category->slug) }}">{{ $category->title }}</a>
                              </li>
                          @endforeach
                      </ul><!-- End .mobile-cats-menu -->
                  </nav><!-- End .mobile-cats-nav -->
              </div><!-- .End .tab-pane -->
          </div><!-- End .tab-content -->
{{-- 
          <div class="social-icons">
              <a href="#" class="social-icon" target="_blank" title="Facebook"><i class="icon-facebook-f"></i></a>
              <a href="#" class="social-icon" target="_blank" title="Twitter"><i class="icon-twitter"></i></a>
              <a href="#" class="social-icon" target="_blank" title="Instagram"><i class="icon-instagram"></i></a>
              <a href="#" class="social-icon" target="_blank" title="Youtube"><i class="icon-youtube"></i></a>
          </div><!-- End .social-icons --> --}}
      </div><!-- End .mobile-menu-wrapper -->
  </div><!-- End .mobile-menu-container -->
