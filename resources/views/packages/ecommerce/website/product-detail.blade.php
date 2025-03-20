@extends('packages.core.website.layouts.master')
@inject('product_helper', 'Jed\Ecommerce\App\Helpers\ProductHelper')

@php
    $default_media = $product->default_media;
    $other_medias = $product->other_medias;
    $meta_description = $product->meta_description ?? "Buy {$product->name} with best price in Nepal | Get special offer on onlile payment with Fatafat Sewa";
    SEOMeta::setDescription($meta_description);
    OpenGraph::setDescription($meta_description);
    Twitter::setDescription($meta_description);
    JsonLd::setDescription($meta_description);
    
    //    $product->variants[0]->discounted_price;
    if (count($product->variants)) {
        $variants_json = [];
        foreach ($product->variants as $key => $variant) {
            $product_title = $product->name;
            $json_arr = [
                '@type' => 'ProductModel',
                'offers' => [
                    '@type' => 'Offer',
                    'price' => $variant->price,
                    'availability' => $variant->quantity > 0 ? 'InStock' : 'OutOfStock',
                ],
            ];
    
            foreach ($variant->attributes as $att_key => $attr) {
                if (strtolower($att_key) == 'color') {
                    $json_arr['color'] = $attr;
                } else {
                    if (str_contains($attr, 'GB')) {
                        $unit_text = 'GB';
                        $unit_code = 'E34';
                    } elseif (str_contains($attr, 'TB')) {
                        $unit_text = 'TB';
                        $unit_code = 'E33';
                    }
                    // $unit_code =
                    $json_arr['additionalProperty'] = [
                        '@type' => 'PropertyValue',
                        'name' => $att_key,
                        'unitCode' => isset($unit_code) ? $unit_code : '',
                        'unitText' => isset($unit_text) ? $unit_text : '',
                        'value' => $attr,
                    ];
                }
                $product_title = $product_title . ' ' . $attr;
            }
            $json_arr['name'] = $product_title;
            $json_arr['offers']['name'] = $product_title;
    
            $variants_json[] = $json_arr;
        }
    
        JsonLd::addValue('models', $variants_json);
    }
    
    $is_campaign_active = $product->discountcampaign && $product->discountcampaign->campaign->is_active;
    if ($is_campaign_active) {
        $campaign_detail = $product->discountcampaign;
    }
    
    $org_price = $product->original_price ? $product->original_price : $product->price;
    $category = $product->categories()->first();
@endphp
@section('custom_code')
    @if (isset($product) && !empty($product->custom_code))
        {!! $product->custom_code !!}
    @endif
@endsection
@section('content')
    <div id="product--variations--handle" data-campaign-active="{{ $is_campaign_active }}"
        data-campaign-value={{ $campaign_detail->discount_value ?? 0 }}
        data-campaign-type={{ $campaign_detail->discount_type ?? 0 }}
        data-variations="{{ json_encode($product->variants) }}"></div>
    <nav aria-label="breadcrumb" class="breadcrumb-nav mb-2">
        <div class="container-fluid">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/"><i class="icon-home"></i>&nbsp;Home</a></li>
                <li class="breadcrumb-item"><a href="/categories">Categories</a></li>
                <li class="breadcrumb-item"><a
                        href="{{ route('website.category-detail', $category->slug) }}">{{ $category->title }}</a></li>
                <li class="breadcrumb-item active" aria-current="page">{{ $product->name }}</li>
            </ol>
        </div><!-- End .container -->
    </nav>
    <div class="page-content mt-4">
        <div class="container-fluid">
            <div class="product-details-top">
                <div class="row">
                    <div class="col-md-5">
                        @include('packages.ecommerce.website.partials.product-images')
                    </div><!-- End .col-md-6 -->

                    <div class="col-md-7">
                        <div class="product-details">
                            <h1 class="product-title">{{ $product->name }}</h1><!-- End .product-title -->

                            <div class="ratings-container">
                                <div class="star--rating mb-1 mt-1" data-rating="{{ $product->average_rating }}"></div>
                                <a class="ratings-text" href="#product-review-link" id="review-link">(
                                    {{ $product->reviews->count() }} Reviews )</a>
                            </div><!-- End .rating-container -->

                            @if ($product->brand)
                                <h6 style="display:inline;">Brand : </h6><a
                                    href="{{ route('website.brand-detail', $product->brand->slug) }}">
                                    {{ $product->brand->name }}
                                    <!--<img src="{{ $product->brand->brand_image['thumb'] }}" class="mb-2" width="120px"
                                                alt="{{ $product->brand->name }}"> -->
                                </a>
                            @endif


                            @if ($product->price != 0 || $product->price != '0')
                                <div class="product-price product-detail--price">
                                    Rs. @convert($product->discounted_price)

                                    @if ($is_campaign_active)
                                        <div class="check-price ml-4"> <strike><span class="old-price">Rs.
                                                    @convert($product->original_price ? $product->original_price : $product->price)</span></strike>
                                        </div>
                                    @elseif ($product->original_price)
                                        <div class="check-price ml-4"> <strike><span class="old-price">Rs.
                                                    @convert($product->original_price)</span></strike>
                                        </div>
                                    @endif
                                </div>
                            @else
                                <ul class="pro-price mb-2">
                                    <li>Coming Soon</li>
                                </ul>
                            @endif
                            @if ($is_campaign_active)
                                <strong>{{ $campaign_detail->campaign->title }}</strong>
                                <div class="product-countdown  ml-2"
                                    data-until="{{ $product->discountcampaign->campaign->end_date }}"></div>
                            @endif
                            <!-- End .product-price -->

                            <div class="product-content">
                                <p>{{ $product->highlights }}</p>
                            </div><!-- End .product-content -->


                            <form class="form--add-to-cart">
                                <div id="selectSize"
                                    class="pro-group addeffect-section product-description border-product mb-0">

                                    @if (sizeof($product->variation_combination))
                                        @foreach ($product->variation_combination as $attribute => $values)
                                            <h6>{{ $attribute }}<span></h6>
                                            <div class="size-box product--variants">
                                                @foreach ($values as $key => $value)
                                                    <input type="radio" @if ($key === 0) checked @endif
                                                        name="product_attributes[{{ $attribute }}]"
                                                        value="{{ $value }}"
                                                        id="{{ $attribute }}-{{ $value }}" class="d-none">
                                                    <label data-variant-value="{{ $value }}"
                                                        class="product--variant-handle variant-{{ $attribute }} {{ $key === 0 ? 'active' : '' }}"
                                                        data-variant="{{ $attribute }}"
                                                        data-product-id="{{ $product->id }}"
                                                        for="{{ $attribute }}-{{ $value }}">{{ $value }}</label>
                                                    {{-- </li> --}}
                                                @endforeach
                                            </div>
                                        @endforeach
                                    @endif
                                    <input type="hidden" name="product_id" value="{{ $product->id }}">

                                    <div class="product_stock_message"
                                        style="color: red; font-weight:bold; font-size: 20px">
                                        @if (!count($product->variants) && $product->quantity == 0)
                                            <span>Out of Stock</span>
                                        @endif
                                    </div>
                                    <div class="details-filter-row details-row-size">
                                        <label for="qty">Qty:</label>
                                        <div class="product-details-quantity">
                                            <input type="number" id="qty" class="form-control" value="1"
                                                name="quantity" min="1" max="10" step="1"
                                                data-decimals="0" required>
                                        </div><!-- End .product-details-quantity -->
                                    </div><!-- End .details-filter-row -->

                                    <div class="product-details-action">
                                        <a href="javascript:void(0)" id="cartEffect"
                                            class="btn-product btn-cart btn--add-to-cart">
                                            <i class="fa fa-shopping-cart"></i>&nbsp;Add to Cart
                                        </a>
                                        <div class="details-action-wrapper">
                                            <a href="javascript:void(0)" data-product-id="{{ $product->id }}"
                                                class="btn-product btn-wishlist product--add-to-wishlist"
                                                title="Wishlist"><span>Add to
                                                    Wishlist</span></a>
                                            <a href="javascript:void(0)" data-product-id="{{ $product->id }}"
                                                class="btn-product btn-compare product--add-to-compare"
                                                title="Compare"><span>Add to
                                                    Compare</span></a>
                                        </div><!-- End .details-action-wrapper -->
                                    </div><!-- End .product-details-action -->
                                </div>
                            </form>
                            <div class="product-details-footer">
                                <div class="social-icons social-icons-sm">
                                    <span class="social-label">Share:</span>
                                    {{-- <a href="#" class="social-icon" title="Facebook" target="_blank"><i
                                            class="icon-facebook-f"></i></a>
                                    <a href="#" class="social-icon" title="Twitter" target="_blank"><i
                                            class="icon-twitter"></i></a>
                                    <a href="#" class="social-icon" title="Instagram" target="_blank"><i
                                            class="icon-instagram"></i></a>
                                    <a href="#" class="social-icon" title="Pinterest" target="_blank"><i
                                            class="icon-pinterest"></i></a> --}}
                                    <div class="social-share"></div>
                                </div>
                                {{-- <div class="social-share"></div> --}}
                            </div><!-- End .product-details-footer -->
                        </div><!-- End .product-details -->
                    </div><!-- End .col-md-6 -->
                </div><!-- End .row -->
            </div><!-- End .product-details-top -->

            <div class="product-details-tab">
                <ul class="nav nav-pills justify-content-center" role="tablist">

                    <li class="nav-item">
                        <a class="nav-link active" id="product-desc-link" data-toggle="tab" href="#product-desc-tab"
                            role="tab" aria-controls="product-desc-tab" aria-selected="true">Description</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="product-info-link" data-toggle="tab" href="#product-info-tab"
                            role="tab" aria-controls="product-info-tab" aria-selected="false">Specifications</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="product-review-link" data-toggle="tab" href="#product-review-tab"
                            role="tab" aria-controls="product-review-tab" aria-selected="false">Reviews
                            ({{ $product->reviews->count() }})</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="product-desc-tab" role="tabpanel"
                        aria-labelledby="product-desc-link">
                        <div class="product-desc-content">
                            {!! $product->description !!}
                        </div><!-- End .product-desc-content -->
                    </div><!-- .End .tab-pane -->

                    <div class="tab-pane fade" id="product-info-tab" role="tabpanel"
                        aria-labelledby="product-info-link">
                        <div class="product-desc-content">
                            @if (isset($product->attributes) && sizeof($product->attributes['product_attributes']))
                                @php
                                    $attribute_classes = Jed\Ecommerce\App\ProductAttribute::select('name')
                                        ->where('class_id', $product->attribute_class_id)
                                        ->pluck('name')
                                        ->toArray();
                                    $product_atts = $product->attributes['product_attributes'];
                                @endphp

                                <table class="table table-bordered">
                                    <tbody>
                                        @foreach ($attribute_classes as $attribute_class)
                                            @if (isset($product_atts[$attribute_class]))
                                                <tr>
                                                    <th class="p-4">{{ $attribute_class }}</th>
                                                    <td class="p-4">
                                                        @foreach (explode('|', $product_atts[$attribute_class]) as $attr)
                                                            <p class="font-18 p-0 mb-1">
                                                                {!! $attr !!}</p>
                                                        @endforeach
                                                </tr>
                                            @endif
                                        @endforeach

                                    </tbody>
                                </table>
                            @endif
                        </div><!-- End .product-desc-content -->
                    </div><!-- .End .tab-pane -->

                    <div class="tab-pane fade" id="product-shipping-tab" role="tabpanel"
                        aria-labelledby="product-shipping-link">
                        <div class="product-desc-content">
                            <h3>Delivery & returns</h3>
                            <p>We deliver to over 100 countries around the world. For full details of the delivery options
                                we offer, please view our <a href="#">Delivery information</a><br>
                                We hope you’ll love every purchase, but if you ever need to return an item you can do so
                                within a month of receipt. For full details of how to make a return, please view our <a
                                    href="#">Returns information</a></p>
                        </div><!-- End .product-desc-content -->
                    </div><!-- .End .tab-pane -->
                    <div class="tab-pane fade" id="product-review-tab" role="tabpanel"
                        aria-labelledby="product-review-link">
                        @guest('web')
                            <div class="row">
                                <div class="col-sm-12 mt-4 mb-3 text-center">
                                    <a href="javascript:void(0)"
                                        class="btn btn-outline-primary-2 website--login-toggler">Login
                                        to
                                        review</a>
                                </div>
                            </div>
                        @endguest
                        <div class="reviews">
                            @auth('web')
                                <add-product-reviews :productid="{{ $product->id }}"
                                    :userid="{{ auth('web')->check() ? auth('web')->user()->id : 0 }}">
                                </add-product-reviews>
                            @endauth
                            @forelse ($product->reviews as $review)
                                <div class="review">
                                    <div class="row no-gutters">
                                        <div class="col-auto">
                                            <h4><a href="#">{{ $review->user->name }}</a></h4>
                                            <div class="ratings-container">
                                                <div class="star--rating mt-2" data-rating={{ $review->rating }}>
                                                </div><!-- End .rating-container -->
                                            </div><!-- End .col -->
                                            <span class="review-date">{{ $review->created_at->diffForHumans() }}</span>
                                        </div><!-- End .row -->
                                        <div class="col">
                                            <div class="review-content">
                                                <p class="font-18">{{ $review->review }}</p>
                                            </div><!-- End .review-content -->
                                        </div><!-- End .col-auto -->
                                    </div><!-- End .review -->
                                </div>
                            @empty
                                <div class="text-center mt-4">
                                    <h3>No review posted yet!</h3>
                                </div>
                            @endforelse
                        </div>
                    </div><!-- End .reviews -->
                </div><!-- .End .tab-pane -->
            </div><!-- End .tab-content -->
        </div><!-- End .product-details-tab -->
    </div><!-- End .container -->

    @php
        $related_products = $product_helper->getProductsByCategory($product->categories()->first(), 8);
    @endphp
    @include('packages.core.website.common.prodcut-slider', [
        'title' => 'You May Also Like',
        'products' => $related_products,
    ])



    <div class="product-detail-before-footer">
        <div class="container-fluid">
            <div class="row" style="border-bottom: 1px solid rgb(217, 217, 217)">
                <div class="col-6 col-sm-3 text-center">
                    <div class="product-promition-section">
                        <i class="fa fa-truck"></i>
                        <h4>Free Shipping</h4>
                        <p>Free shipping all over Nepal</p>
                    </div>
                </div>
                <div class="col-6 col-sm-3 text-center">
                    <div class="product-promition-section">
                        <i class="fa fa-trophy"></i>
                        <h4>100% Genuine</h4>
                        <p>We sell 100% Genuine prooducts</p>
                    </div>
                </div>
                <div class="col-6 col-sm-3 text-center">
                    <div class="product-promition-section">
                        <i class="fa fa-reply-all"></i>
                        <h4>Easy Return Policy</h4>
                        <p>3 Days Easy Return Policy</p>
                    </div>
                </div>
                <div class="col-6 col-sm-3 text-center">
                    <div class="product-promition-section">
                        <i class="fa fa-credit-card"></i>
                        <h4>Secure Payment</h4>
                        <p>Shop Online Without Hesitation</p>
                    </div>
                </div>
            </div>

            <div class="row contact-infos">
                <div class="col-6 col-sm-3 text-center">
                    <div class="product-promition-section">
                        <p>Sales & expert advice</p>
                        <h4>{{ $settings['core']['contact_number'] }}</h4>
                    </div>
                </div>
                <div class="col-6 col-sm-3 text-center">
                    <div class="product-promition-section">
                        <p class="list-s">
                            <a href="tel:{{ $settings['core']['contact_number'] }}"><i class="fa fa-phone"></i>CONTACT</a>
                        </p>
                    </div>
                </div>

                <div class="col-6 col-sm-3 text-center">
                    <div class="product-promition-section">
                        <p class="list-s"><i class="fa fa-commenting-o"></i>24/7 CHAT SUPPORT</p>
                    </div>
                </div>

                <div class="col-6 col-sm-3 text-center">
                    <div class="product-promition-section">
                        <p class="list-s"><i class="fa fa-map-marker"></i>{{ $settings['core']['address'] }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('js')
    <script src="{{ asset('website/js/jquery.elevatezoom.js') }}" defer></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery.jssocials/1.4.0/jssocials.min.js"></script>

    <script>
        $(document).ready(function() {
            $(".social-share").jsSocials({
                showLabel: false,
                showCount: false,
                shareIn: "popup",
                shares: ["facebook", "twitter", "googleplus", "linkedin", "pinterest",
                    "whatsapp"
                ]
            });
        });
    </script>
    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by
        </a></noscript>
    <script>
        $(document).ready(function() {
            $('.product-desc-content').find('table').addClass('table table-bordered')
        })
    </script>
@endpush

@push('css')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.jssocials/1.4.0/jssocials.css" />
    <link type="text/css" rel="stylesheet"
        href="https://cdn.jsdelivr.net/jquery.jssocials/1.4.0/jssocials-theme-flat.css" />

    <style>
        .jssocials-share-link {
            border-radius: 50%;
        }

        .product-desc-content table td {
            padding: 10px !important
        }
    </style>
@endpush
