@php
    $other_medias = $product->getMedia('default', function () {
        return !isset($media->custom_properties['is_default']);
    });
@endphp
<div class="product-gallery product-gallery-vertical">
    <div class="row">
        <figure class="product-main-image">
            <img id="product-zoom" src="{{ $product->default_media['full'] }}"
                data-zoom-image="{{ $product->default_media['full'] }}" alt="{{ $product->name }}">
        </figure><!-- End .product-main-image -->

        <div id="product-zoom-gallery" class="product-image-gallery">
            <a class="product-gallery-item active" href="#" data-image="{{ $product->default_media['full'] }}"
                data-zoom-image="{{ $product->default_media['full'] }}">
                <img src="{{ $product->default_media['thumb'] }}"  alt="{{ $product->default_media['alt_text'] ?? $product->name }}">
            </a>

            @foreach ($product->other_medias as $media)
                <a class="product-gallery-item" href="#" data-image="{{ $media->getUrl() }}"
                    data-zoom-image="{{ $media->getUrl() }}">
                    <img src="{{ $media->getUrl('thumbnail') }}" alt="{{ $media->getCustomProperty('alt_text') ?? $product->name }}">
                </a>
            @endforeach
        </div><!-- End .product-image-gallery -->
    </div><!-- End .row -->
</div><!-- End .product-gallery -->
