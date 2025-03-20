<div class="container-fluid top tab-content tab-content-carousel">
    <div class="heading heading-flex mb-2">
        <div class="heading-left">
            <h2 class="title">{{ $title }}</h2><!-- End .title -->
        </div><!-- End .heading-left -->
    </div>
    <div class="row">
        @if (isset($category_image) && $category_image)
            <div class="col-sm-2" style="background-image: url('{{ $category_image->getUrl() }}'); background-size:contain">
                <a href="{{ $category_image->custom_properties['link'] ?? 'javascript:void(0)' }}" style="height:100%; width:100%; float:left"></a>
            </div>
        @endif
        <div class="{{ (isset($category_image) && $category_image) ? 'col-sm-10' : 'col-sm-12' }}">
            <div class="home--owl-carousel-slider owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-substract="{{ (isset($category_image) && $category_image) ? 1 : 0 }}">
                @each('packages.core.website.common.product-single-list', $products, 'product')
            </div>
        </div>
    </div>
</div>
