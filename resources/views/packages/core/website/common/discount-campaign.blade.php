<div class="container-fluid top tab-content tab-content-carousel">
    <div class="heading heading-flex mb-2">
        <div class="heading-left">
            <span class="title" style="color: black">{{ $discount_campaign->title }}</span>

            <span class="ml-3"> (
                <strong>Ending On:</strong>
                <div class="product-countdown offer--countdown ml-2" data-until="{{ $discount_campaign->end_date }}"
                    data-compact="true"></div>
                )
            </span>
        </div><!-- End .heading-left -->
    </div>

    <div class="home--owl-carousel-slider owl-carousel owl-full carousel-equal-height carousel-with-shadow">
        @each('packages.core.website.common.product-single-list', $discount_campaign->products, 'product')
    </div>
</div>
