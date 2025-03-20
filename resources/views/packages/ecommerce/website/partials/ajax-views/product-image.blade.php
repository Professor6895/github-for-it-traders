<div class="product-slick">
  <div><img src="{{ $default_media['full'] }}" alt="{{ $product->name }}"
          class="img-fluid image_zoom_cls-0" loading="lazy"></div>

  @foreach ($other_medias as $key => $product_image)
      <div><img src="{{ $product_image->getUrl() }}" alt="{{ $product->name }}"
              loading="lazy" class="img-fluid  image_zoom_cls-{{ $key+1 }}"></div>
  @endforeach
</div>
<div class="row mb-4">
  <div class="col-12 p-0">
      <div class="slider-nav">
          <div><img src="{{ $default_media['thumb'] }}" alt="{{ $product->name }}" width="100"
                  loading="lazy" class="img-fluid image--gallery" data-image-count="0"></div>

          @foreach ($other_medias as $key=>$product_image)
              <div><img src="{{ $product_image->getUrl('thumbnail') }}" width="100"
                      loading="lazy" alt="{{ $product->name }}" data-image-count="{{ $key+1 }}" class="image--gallery img-fluid">
              </div>
          @endforeach
      </div>
  </div>
</div>