@forelse ($blogs as $blog)
    @php
        $blog_url = route('website.blogs-detail', $blog->slug);
    @endphp
    <article class="entry entry-list">
        <div class="row align-items-center">
            <div class="col-md-5">
                <figure class="entry-media">
                    <a href="{{ $blog_url }}">
                        <img src="{{ $blog->blog_thumbnail['thumb'] }}"
                            alt="{{ $blog->blog_thumbnail['alt_text'] ?? $blog->title }}">
                    </a>
                </figure><!-- End .entry-media -->
            </div><!-- End .col-md-5 -->

            <div class="col-md-7">
                <div class="entry-body">
                    <div class="entry-meta">
                        <span class="entry-author">
                            by <a href="#">{{ $blog->author }}</a>
                        </span>
                        <span class="meta-separator">|</span>
                        <a href="#">{{ $blog->publish_date->format('d M Y') }}</a>
                        <span class="meta-separator">|</span>
                        <a href="#">{{ views($blog)->count() }} Views</a>
                    </div>

                    <h2 class="entry-title">
                        <a href="{{ $blog_url }}">{{ $blog->title }}</a>
                    </h2><!-- End .entry-title -->

                    {{-- <div class="entry-cats">
                        in <a href="#">Lifestyle</a>,
                        <a href="#">Shopping</a>
                    </div><!-- End .entry-cats --> --}}

                    <div class="entry-content">
                        <p>{{ $blog->short_desc }}</p>
                        <a href="{{ $blog_url }}" class="read-more">Continue Reading</a>
                    </div><!-- End .entry-content -->
                </div><!-- End .entry-body -->
            </div><!-- End .col-md-7 -->
        </div><!-- End .row -->
    </article><!-- End .entry -->
    {{-- @php
          $blog_url = route('website.blogs-detail', $blog->slug);
          
          if (strtolower($blog->category->title) == 'news') {
              $blog_url = '/news-detail/' . $blog->slug;
          }
      @endphp
      <div class="col-sm-4 mb-4">
          <div class="card">
              <a href="{{ $blog_url }}"><img loading="lazy" src="{{ $blog->blog_thumbnail['thumb'] }}"
                      class="img-fluid" alt="{{ $blog->title }}"></a>

              <div class="p-3 blog-desc">
                  <a href="{{ $blog_url }}">
                      <h4 class="text-black font-22">{{ $blog->title }}</h4>
                  </a>

                  <p class="text-muted font-13 mt-2">
                      <strong>Author: </strong> {{ $blog->author }}
                  </p>

                  <div class="mt-2">
                      <span>
                          <i class="bi bi-calendar"></i> &nbsp; {{ $blog->publish_date->format('d M Y') }}
                      </span>

                      <span class="float-right">
                          <i class="bi bi-eye"></i> {{ views($blog)->count() }}
                      </span>
                  </div>
                  <p class="mt-2">{{ $blog->short_desc }}</p>

              </div>
          </div>
      </div> --}}
@empty
    <div class="text-center mt-4 mb-4">
        <h3>NO BLOGS FOUND!!!</h3>
    </div>
@endforelse
