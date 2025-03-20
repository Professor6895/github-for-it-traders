<div class="blog-sidebar">
  <div class="theme-card">
      <h4>Prices by Brand</h4>
      @foreach ($brands as $brand)

          <div class="row mb-4 pb-2">
              <div class="col-sm-3">
                  <a href="/brand/{{ $brand->slug }}-price-in-nepal">
                      <img src="{{ $brand->brand_image['thumb'] }}" alt="{{ $brand->name }}" class="luid"
                          width="60px" loading="lazy" />
                  </a>
              </div>
              <div class="col-sm-9">
                  <p>
                      <a href="/brand/{{ $brand->slug }}-price-in-nepal" class="text-black font-18">
                          {{ $brand->name }} products price in Nepal
                      </a>
                  </p>
                  <p>{{ $brand->products_count }} Products</p>
              </div>
          </div>
      @endforeach

  </div>

  <div class="theme-card">
      <h4>Prices by Category</h4>
      @foreach ($categories as $category)

          <div class="row mb-4 pb-2">
              <div class="col-sm-3">
                  <a href="/category/{{ $category->slug }}-price-in-nepal">
                      <img src="{{ $category->product_category_image['thumb'] }}" alt="{{ $category->title }}" class="luid"
                          width="60px" loading="lazy" />
                  </a>
              </div>
              <div class="col-sm-9">
                  <p>
                      <a href="/category/{{ $category->slug }}-price-in-nepal" class="text-black font-18">
                          {{ $category->title }} price in Nepal
                      </a>
                  </p>
                  <p>{{ $category->products_count }} Products</p>
              </div>
          </div>
      @endforeach
  </div>
</div>