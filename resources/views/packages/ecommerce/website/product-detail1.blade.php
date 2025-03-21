@extends('packages.core.website.layouts.master')
@inject('product_helper', 'Jed\Ecommerce\App\Helpers\ProductHelper')

@php
    $default_media = $product->default_media;
    $other_medias = $product->other_medias;
    // if (!$product->short_description) {
        $meta_description = $product->meta_description ?? "Buy {$product->name} with best price in Nepal | Get special offer on onlile payment with Fatafat Sewa";
        SEOMeta::setDescription($meta_description);
        OpenGraph::setDescription($meta_description);
        Twitter::setDescription($meta_description);
        JsonLd::setDescription($meta_description);
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
    // }
    
    $is_campaign_active = $product->discountcampaign && $product->discountcampaign->campaign->is_active;
    $org_price = $product->original_price ? $product->original_price : $product->price;
@endphp
@section('custom_code')
    @if (isset($product) && !empty($product->custom_code))
        {!! $product->custom_code !!}
    @endif
@endsection
@section('content')
    <section class="section-big-py-space b-g-light">
        <div class="collection-wrapper">
            <div class="custom-container">
                <div class="row">
                    <div class="col-lg-9 col-sm-12 col-xs-12">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-6 product--image--wrapper">
                                    @include('packages.ecommerce.website.partials.ajax-views.product-image')
                                </div>
                                <div class="col-lg-6 rtl-text">
                                    <div class="product-right">
                                        <div class="pro-group">
                                            <div class="product-sale">

                                            </div>
                                            <h1 class="font-30 mb-2">{{ $product->name }}</h1>
                                            @if ($product->price != 0 || $product->price != '0')
                                                <ul class="pro-price mb-2">
                                                    <li>Rs. {{ $product->discounted_price }}</li>

                                                    @if ($is_campaign_active)
                                                        <li><span>Rs.
                                                                {{ $product->original_price ? $product->original_price : $product->price }}</span>
                                                        </li>
                                                        <li>{{ round((($org_price - $product->discounted_price) / $org_price) * 100, 2) }}%
                                                            off</li>
                                                    @elseif ($product->original_price)
                                                        <li><span>Rs. {{ $product->original_price }}</span></li>
                                                        <li>{{ round((($product->original_price - $product->discounted_price) / $product->original_price) * 100, 2) }}%
                                                            off</li>
                                                    @endif
                                                </ul>
                                            @else
                                                <ul class="pro-price mb-2">
                                                    <li>Coming Soon</li>
                                                </ul>
                                            @endif
                                            <div class="revieu-box mt-2 mb-2">
                                                <div class="star--rating"
                                                    data-rating="{{ $product->reviews->avg('rating') ?? 0 }}"></div>
                                                <a href="#"><span>({{ $product->reviews->count() }}
                                                        reviews)</span></a>
                                            </div>
                                            <ul class="best-seller">
                                                @if ($is_campaign_active)
                                                    <li>
                                                        <img src="/website/images/flash_sale.png" alt=""
                                                            width="25px">
                                                        <strong>Flash Sale:</strong>
                                                        &nbsp;{{ $product->discountcampaign->campaign->title }}
                                                    </li>
                                                @endif
                                                <li>
                                                    <svg enable-background="new 0 0 497 497" viewBox="0 0 497 497"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path
                                                                d="m329.63 405.42-.38.43c-10.048 19.522-48.375 35.567-80.775 35.607-24.881 0-53.654-9.372-71.486-20.681-5.583-3.54-2.393-10.869-6.766-15.297l19.149-5.13c3.76-1.22 6.46-4.54 6.87-8.47l8.574-59.02 82.641-2.72 12.241 28.06.837 8.668-1.844 9.951 3.456 6.744.673 6.967c.41 3.93 3.11 7.25 6.87 8.47z"
                                                                fill="#f2d1a5"></path>
                                                            <path
                                                                d="m420.39 497h-343.78c-6.21 0-7.159-6.156-6.089-12.266l2.53-14.57c3.82-21.96 16.463-37.323 37.683-44.153l27.702-8.561 28.754-8.035c18.34 18.57 48.615 27.957 81.285 27.957 32.4-.04 61.709-8.478 80.259-26.809l.38-.43 31.486 5.256 26.39 8.5c21.22 6.83 36.9 24.87 40.72 46.83l2.53 14.57c1.07 6.111-3.64 11.711-9.85 11.711z"
                                                                fill="#7e8b96"></path>
                                                            <g>
                                                                <path
                                                                    d="m384.055 215c-2.94 43.71-18.85 104.74-24.92 130.96-.68 2.94-2.33 5.45-4.56 7.22-2.23 1.78-5.05 2.82-8.06 2.82-6.88 0-12.55-5.37-12.94-12.23 0 0-5.58-84.28-7.63-128.77z"
                                                                    fill="#dc4955"></path>
                                                            </g>
                                                            <path
                                                                d="m141 271c-27.062 0-49-21.938-49-49 0-11.046 8.954-20 20-20h8.989l240.468-6.287 8.293 6.287h15.25c11.046 0 20 8.954 20 20 0 27.062-21.938 49-49 49z"
                                                                fill="#f2bb88"></path>
                                                            <path
                                                                d="m360.6 415.39-.06.09c-49.3 66.23-174.56 66.38-223.76.56l-.43-.63 18.171-1.91 12.669-8.02c18.34 18.57 48.41 29.8 81.08 29.8h.15c32.4-.04 62.28-11.1 80.83-29.43l.38-.43z"
                                                                fill="#a9a4d3"></path>
                                                            <path
                                                                d="m147.8 418.394v10.136l-32.89 10.59c-15.6 5.02-27.05 18.18-29.86 34.34l-3.59 23.54h-4.85c-6.21 0-10.92-5.6-9.85-11.71l2.53-14.57c3.82-21.96 19.5-40 40.72-46.83l26.34-8.48z"
                                                                fill="#64727a"></path>
                                                            <path
                                                                d="m182.19 417.45-34.39 11.08c-3.99-3.86-7.68-8.02-11.02-12.49l-.43-.63 30.84-9.93c1.828 1.848 10.344.351 12.353 2.02 2.928 2.433-.561 7.928 2.647 9.95z"
                                                                fill="#938dc8"></path>
                                                            <path
                                                                d="m299.7 358.2-2.71-28.06-79.861 2.255.001-.005-16.48.47-2.98 26.56-.763 6.8 2.039 12.83-3.989 4.55-.778 6.93c-.41 3.93-3.11 7.25-6.87 8.47l-20.12 6.48c4.37 4.43 9.41 8.44 15 11.97l10.02-3.22c9.79-3.17 16.79-11.79 17.88-21.97l2.058-17.506c.392-3.33 3.888-5.367 6.958-4.02 11.414 5.008 21.565 7.765 28.393 7.765 11.322.001 31.852-7.509 52.202-20.299z"
                                                                fill="#f2bb88"></path>
                                                            <path
                                                                d="m134.539 164.427s-.849 18.411-.849 33.002c0 38.745 9.42 76.067 25.701 105.572 20.332 36.847 72.609 61.499 88.109 61.499s68.394-24.653 89.275-61.499c14.137-24.946 23.338-55.482 25.843-87.741.458-5.894-9.799-20.073-9.799-26.058l10.491-24.775c0-38.422-36.205-111.427-114.81-111.427s-113.961 73.005-113.961 111.427z"
                                                                fill="#f2d1a5"></path>
                                                            <g>
                                                                <path
                                                                    d="m294 227.5c-4.142 0-7.5-3.358-7.5-7.5v-15c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15c0 4.142-3.358 7.5-7.5 7.5z"
                                                                    fill="#64727a"></path>
                                                            </g>
                                                            <g>
                                                                <path
                                                                    d="m203 227.5c-4.142 0-7.5-3.358-7.5-7.5v-15c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15c0 4.142-3.358 7.5-7.5 7.5z"
                                                                    fill="#64727a"></path>
                                                            </g>
                                                            <g>
                                                                <path
                                                                    d="m249 260.847c-5.976 0-11.951-1.388-17.398-4.163-3.691-1.88-5.158-6.397-3.278-10.087 1.88-3.691 6.398-5.158 10.087-3.278 6.631 3.379 14.547 3.379 21.178 0 3.689-1.881 8.207-.413 10.087 3.278 1.88 3.69.413 8.207-3.278 10.087-5.447 2.775-11.422 4.163-17.398 4.163z"
                                                                    fill="#f2bb88"></path>
                                                            </g>
                                                            <path
                                                                d="m288.989 40.759c0 22.511-9.303 40.759-40.489 40.759s-48.702-42.103-48.702-42.103 17.516-39.415 48.702-39.415c25.911 0 47.746 12.597 54.392 29.769 1.353 3.497-13.903 7.182-13.903 10.99z"
                                                                fill="#df646e"></path>
                                                            <path
                                                                d="m254.305 81.307c1.031-.099 2.069-.167 3.093-.295 26.96-3.081 47.572-19.928 47.572-40.252 0-3.81-.72-7.49-2.08-10.99-15.42-6.31-33.46-10.34-54.39-10.34-4.139 0-8.163.159-12.073.462-5.127.397-7.393-6.322-3.107-9.163 7.36-4.878 16.519-8.364 26.68-9.879-3.71-.56-7.56-.85-11.5-.85-25.933 0-47.766 12.621-54.393 29.813-.006.002-.011.004-.017.007-1.337 3.487-2.055 7.201-2.06 10.94 0 22.51 25.28 40.76 56.47 40.76 1.946.008 3.872-.09 5.805-.213z"
                                                                fill="#dc4955"></path>
                                                            <path
                                                                d="m363.31 164.43v33c0 5.99-.23 11.94-.7 17.83-4.32-.91-8.4-2.66-12.05-5.19-22.785-15.834-31.375-40.163-37.64-60.936-.382-1.268-1.547-2.134-2.871-2.134h-30.949c-4.96 0-9.65-2.15-12.89-5.91l-10.947-12.711c-1.197-1.39-3.349-1.39-4.546 0l-10.947 12.711c-3.24 3.76-7.93 5.91-12.89 5.91h-90.33c8.47-39.6 44.09-94 111.95-94 78.61 0 114.81 73 114.81 111.43z"
                                                                fill="#f2bb88"></path>
                                                            <path
                                                                d="m381 164.19v37.81h-11.25c-4 0-7.93-1.16-11.22-3.44-19.74-13.72-26.93-35.65-33.69-58.43-1.26-4.24-5.16-7.13-9.58-7.13h-36.165c-.873 0-1.703-.38-2.273-1.042l-21.559-25.029c-1.197-1.389-3.349-1.389-4.546 0l-21.559 25.029c-.57.662-1.4 1.042-2.273 1.042h-38.015c-5.3 0-9.68 4.14-9.98 9.44 0 0-2.331 25.591-4.032 66.31-1.765 42.256-7.908 135.02-7.908 135.02-.16 2.822-1.215 5.393-2.879 7.441-2.381 2.929-5.67.375-9.72.375-3.01 0-5.83-1.04-8.06-2.82-2.23-1.77-.792-5.474-1.472-8.414-6.7-28.94-23.83-94.686-23.83-138.351 0-13.73-.14-34.689 0-37.649.14-26.43 12.74-54.048 32-78.128 12.937-16.178 28.667-38.955 58.628-47.692 10.986-3.204 23.248-5.101 36.883-5.101 50.8 0 82.75 26.31 100.6 48.39 19.68 24.319 31.9 55.879 31.9 82.369z"
                                                                fill="#df646e"></path>
                                                            <path
                                                                d="m211.62 38.54c-19.38 9.9-33.55 23.84-43.37 36.44-19.26 24.69-31.27 56.78-31.41 83.88-.14 3.03-.84 25.18-.84 39.25 0 44.77 18.69 117.93 25.39 147.6.47 2.08 1.4 3.94 2.68 5.5-2.38 2.93-6.01 4.79-10.06 4.79-3.01 0-5.83-1.04-8.06-2.82-2.23-1.77-3.88-4.28-4.56-7.22-6.7-28.94-25.39-100.29-25.39-143.96 0-13.73.7-35.33.84-38.29.14-26.43 12.15-57.73 31.41-81.81 12.94-16.18 33.4-34.63 63.37-43.36z"
                                                                fill="#dc4955"></path>
                                                            <g>
                                                                <path
                                                                    d="m316.539 193.816c-1.277 0-2.571-.327-3.755-1.013-11.762-6.82-25.806-6.82-37.567 0-3.583 2.078-8.172.858-10.25-2.726-2.078-3.583-.857-8.172 2.726-10.25 16.474-9.552 36.143-9.552 52.616 0 3.583 2.078 4.804 6.667 2.726 10.25-1.392 2.399-3.909 3.739-6.496 3.739z"
                                                                    fill="#df646e"></path>
                                                            </g>
                                                            <g>
                                                                <path
                                                                    d="m225.539 193.816c-1.277 0-2.571-.327-3.755-1.013-11.762-6.82-25.806-6.82-37.567 0-3.583 2.078-8.171.858-10.25-2.726-2.078-3.583-.857-8.172 2.726-10.25 16.474-9.552 36.143-9.552 52.616 0 3.583 2.078 4.804 6.667 2.726 10.25-1.392 2.399-3.909 3.739-6.496 3.739z"
                                                                    fill="#df646e"></path>
                                                            </g>
                                                            <g>
                                                                <path
                                                                    d="m302.143 383.517c-16.23 10.87-34.973 16.353-53.643 16.353s-37.3-5.41-53.54-16.27l3.476-6.313-1.526-11.067 4.15 3.37c28.46 20.41 66.63 20.37 95.05-.12.2-.14.39-.27.6-.39l3.826-2.211z"
                                                                    fill="#a9a4d3"></path>
                                                            </g>
                                                            <g>
                                                                <path
                                                                    d="m211.98 376.2-1.85 15.68c-5.23-2.27-10.31-5.03-15.17-8.28l1.95-17.38 4.15 3.37c3.5 2.51 7.15 4.72 10.92 6.61z"
                                                                    fill="#938dc8"></path>
                                                            </g>
                                                            <g>
                                                                <path
                                                                    d="m269.5 306.5h-42c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h42c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z"
                                                                    fill="#df646e"></path>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                    {{ views($product)->count() }} viewed this
                                                </li>
                                            </ul>
                                        </div>

                                        <p class="font-16"><strong>SKU: </strong>{{ $product->sku }} </p>
                                        @if ($product->brand_id)
                                            <p class="font-16 mt-2"><strong>Brand: </strong>{{ $product->brand->name }}
                                            </p>
                                        @endif
                                        <p class="font-16 mt-2"><strong>Available Stock:
                                            </strong>{{ $product->quantity }} </p>
                                        <hr>
                                        {{-- <div class="pro-group">
                                            <h6 class="product-title">hurry up ! Deal end in :</h6>
                                            <div class="timer">
                                                <p id="demo">
                                                </p>
                                            </div>
                                        </div> --}}
                                        <form class="form--add-to-cart">
                                            <div id="selectSize"
                                                class="pro-group addeffect-section product-description border-product mb-0">

                                                @if (sizeof($product->variation_combination))
                                                    @foreach ($product->variation_combination as $attribute => $values)
                                                        <h6 class="product-title size-text">{{ $attribute }}<span></h6>
                                                        <div class="size-box product--variants">
                                                            @foreach ($values as $key => $value)
                                                                <input type="radio"
                                                                    @if ($key === 0) checked @endif
                                                                    name="product_attributes[{{ $attribute }}]"
                                                                    value="{{ $value }}"
                                                                    id="{{ $attribute }}-{{ $value }}"
                                                                    class="d-none">
                                                                {{-- <li> --}}
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

                                                <h6 class="product-title">quantity</h6>
                                                <div class="qty-box">
                                                    <div class="input-group">
                                                        <button type="button" class="qty-minus"></button>
                                                        <input class="qty-adj form-control" type="number" name="quantity"
                                                            value="1" />
                                                        <button class="qty-plus" type="button"></button>
                                                    </div>
                                                </div>
                                                <div class="product-buttons">
                                                    @if ($product->pre_order)
                                                        <a href="/product/{{ $product->slug }}/pre-order" id="cartEffect"
                                                            class="btn cart-btn btn-normal tooltip-top btn--pre-order"
                                                            data-tippy-content="Pre Order">
                                                            <i class="bi bi-cart-plus"></i>
                                                            pre order now
                                                        </a>
                                                    @elseif($product->price != 0)
                                                        <a href="javascript:void(0)" id="cartEffect"
                                                            class="btn cart-btn btn-normal tooltip-top btn--add-to-cart"
                                                            data-tippy-content="Add to cart">
                                                            <i class="bi bi-cart-plus"></i>
                                                            add to cart
                                                        </a>
                                                    @endif
                                                    @if ($product->emi_enabled)
                                                        <a href="{{ route('website.product-detail.apply-emi', $product->slug) }}"
                                                            class="btn btn-normal btn-apply-emi tooltip-top"
                                                            data-tippy-content="Add to wishlist">
                                                            Apply Emi
                                                        </a>
                                                    @endif
                                                    <a href="javascript:void(0)"
                                                        class="btn btn-normal add-to-wish tooltip-top"
                                                        data-tippy-content="Add to wishlist">
                                                        <i class="bi bi-heart-fill" aria-hidden="true"></i>
                                                    </a>

                                                    <a href="javascript:void(0)"
                                                        class="btn btn-normal call-to-order-btn d-block d-md-none">
                                                        <i class="bi bi-telephone" aria-hidden="true"></i>
                                                    </a>


                                                </div>
                                            </div>
                                        </form>
                                        @if ($product->vendor)
                                            <div class="pro-group">
                                                <p><strong>Sold By: </strong>{{ $product->vendor->name }}</p>
                                            </div>
                                        @endif
                                        @if ($product->highlights)
                                            @php
                                                $highlights = explode('|', $product->highlights);
                                            @endphp
                                            <div class="pro-group">
                                                <h6 class="product-title">product highlights</h6>
                                                <div class="row">
                                                    @foreach ($highlights as $highlight)
                                                        <div class="col-sm-6 mb-3">
                                                            <p class="font-14"><strong><i
                                                                        class="bi bi-chevron-double-right"></i></strong>
                                                                &nbsp;{{ $highlight }}</p>
                                                        </div>
                                                    @endforeach
                                                </div>
                                            </div>
                                        @endif
                                        <div class="pro-group pb-0">
                                            <h6 class="product-title">share</h6>
                                            <ul class="product-social">
                                                <li><a href="javascript:void(0)"><i class="bi bi-facebook"></i></a></li>
                                                <li><a href="javascript:void(0)"><i class="bi bi-twitter"></i></a></li>
                                                <li><a href="javascript:void(0)"><i class="bi bi-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section class="tab-product tab-exes  bg-transparent">
                            <div class="row">
                                <div class="col-sm-12 col-lg-12">
                                    <div class="creative-card creative-inner">
                                        <ul class="nav nav-tabs nav-material" id="top-tab" role="tablist">
                                            <li class="nav-item"><a class="nav-link active bg-transparent"
                                                    id="top-home-tab" data-bs-toggle="tab" href="#top-home"
                                                    role="tab" aria-selected="true"><i
                                                        class="icofont icofont-ui-home"></i>Description</a>
                                                <div class="material-border"></div>
                                            </li>
                                            @if (isset($product->attributes) && sizeof($product->attributes['product_attributes']))
                                                <li class="nav-item"><a class="nav-link bg-transparent"
                                                        id="profile-top-tab" data-bs-toggle="tab" href="#top-profile"
                                                        role="tab" aria-selected="false"><i
                                                            class="icofont icofont-man-in-glasses"></i>Specifications</a>
                                                    <div class="material-border"></div>
                                                </li>
                                            @endif
                                            @if ($product->product_video_url)
                                                <li class="nav-item"><a class="nav-link bg-transparent"
                                                        id="contact-top-tab" data-bs-toggle="tab" href="#top-contact"
                                                        role="tab" aria-selected="false"><i
                                                            class="icofont icofont-contacts"></i>Video</a>
                                                    <div class="material-border"></div>
                                                </li>
                                            @endif
                                            <li class="nav-item"><a class="nav-link bg-transparent" id="review-top-tab"
                                                    data-bs-toggle="tab" href="#top-review" role="tab"
                                                    aria-selected="false"><i
                                                        class="icofont icofont-contacts"></i>Reviews</a>
                                                <div class="material-border"></div>
                                            </li>
                                        </ul>
                                        <div class="tab-content nav-material" id="top-tabContent">
                                            <div class="tab-pane fade show active product--description-area"
                                                id="top-home" role="tabpanel" aria-labelledby="top-home-tab">
                                                {!! $product->description !!}
                                            </div>
                                            @if (isset($product->attributes) && sizeof($product->attributes['product_attributes']))
                                                @php
                                                    $attribute_classes = Jed\Ecommerce\App\ProductAttribute::select('name')
                                                        ->where('class_id', $product->attribute_class_id)
                                                        ->pluck('name')
                                                        ->toArray();
                                                    $product_atts = $product->attributes['product_attributes'];
                                                @endphp
                                                <div class="tab-pane fade" id="top-profile" role="tabpanel"
                                                    aria-labelledby="profile-top-tab">
                                                    <div class="row p-4">
                                                        <div class="col-12">
                                                            @foreach ($attribute_classes as $attribute_class)
                                                                @if (isset($product_atts[$attribute_class]))
                                                                    <div class="row product--each-specification">
                                                                        <div class="col-4 col-lg-3">
                                                                            <strong>{{ $attribute_class }}</strong>
                                                                        </div>
                                                                        <div class="col-8 col-lg-9">
                                                                            @foreach (explode('|', $product_atts[$attribute_class]) as $attr)
                                                                                <p class="font-18 p-0 mb-1">
                                                                                    {!! $attr !!}</p>
                                                                            @endforeach
                                                                        </div>
                                                                    </div>
                                                                @endif
                                                            @endforeach

                                                        </div>
                                                    </div>

                                                </div>
                                            @endif
                                            @if ($product->product_video_url)
                                                <div class="tab-pane fade" id="top-contact" role="tabpanel"
                                                    aria-labelledby="contact-top-tab">
                                                    <div class="mt-3 text-center mt-3">
                                                        <iframe width="560" height="315"
                                                            src="{{ getYoutubeEmbedUrl($product->product_video_url) }}"
                                                            allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                                    </div>
                                                </div>
                                            @endif
                                            <div class="tab-pane fade" id="top-review" role="tabpanel"
                                                aria-labelledby="review-top-tab">

                                                @guest('web')
                                                    <div class="row">
                                                        <div class="col-sm-12 mt-4 text-center">
                                                            <a href="javascript:void(0)"
                                                                class="btn cart-btn btn-normal website--login-toggler">Login to
                                                                review</a>
                                                        </div>
                                                    </div>
                                                @endguest

                                                @auth('web')
                                                    @php
                                                        $my_review = Jed\Ecommerce\Cart\ProductReview::where(['user_id' => auth('web')->user()->id, 'product_id' => $product->id])->first();
                                                    @endphp
                                                    @if ($my_review)
                                                        <h4 class="mt-3">Your Review</h4>
                                                        <div class="review--section mt-4">
                                                            <div class="reviewer-info">
                                                                <img src="{{ $my_review->user->avatar ? $my_review->user->avatar : '/website/images/default-avatar.png' }}"
                                                                    alt="" width="40">
                                                                &nbsp; <b> {{ $my_review->user->name }} </b> reviewd the
                                                                product
                                                                <b><small>{{ $my_review->created_at->diffForHumans() }}</small></b>

                                                                &nbsp;
                                                                @if ($my_review->status === 1)
                                                                    <span class="badge bg-success">Published</span>
                                                                @else
                                                                    <span class="badge bg-warning">In Review</span>
                                                                @endif
                                                            </div>

                                                            <div class="star--rating mt-2"
                                                                data-rating={{ $my_review->rating }}>
                                                            </div>
                                                            <p class="font-18">{{ $my_review->review }}</p>
                                                        </div>
                                                    @else
                                                        <add-product-reviews :productid="{{ $product->id }}">
                                                        </add-product-reviews>
                                                    @endif
                                                @endauth
                                                <hr>
                                                <h4 class="mb-3">All Reviews</h4>
                                                @forelse ($product->reviews as $review)
                                                    <div class="review--section mb-4">
                                                        <div class="reviewer-info">
                                                            <img src="{{ $review->user->avatar ? $review->user->avatar : '/website/images/default-avatar.png' }}"
                                                                alt="" width="40">
                                                            &nbsp; <b> {{ $review->user->name }} </b> reviewd the product
                                                            <b><small>{{ $review->created_at->diffForHumans() }}</small></b>
                                                        </div>

                                                        <div class="star--rating mt-2" data-rating={{ $review->rating }}>
                                                        </div>
                                                        <p class="font-18">{{ $review->review }}</p>
                                                    </div>
                                                @empty
                                                    <div class="text-center">
                                                        <h3>No review posted yet!</h3>
                                                    </div>
                                                @endforelse
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {{-- <div class="col-sm-3 collection-filter">
                        <div class="collection-filter-block creative-card creative-inner">
                            <div class="collection-mobile-back"><span class="filter-back"><i class="fa fa-angle-left"
                                        aria-hidden="true"></i> back</span></div>
                            <div class="collection-collapse-block border-0 open">
                                <h3 class="collapse-block-title">brand</h3>
                                <div class="collection-collapse-block-content">
                                    <div class="collection-brand-filter">
                                        <ul class="category-list">
                                            <li><a href="javascript:void(0)">clothing</a></li>
                                            <li><a href="javascript:void(0)">bags</a></li>
                                            <li><a href="javascript:void(0)">footwear</a></li>
                                            <li><a href="javascript:void(0)">watches</a></li>
                                            <li><a href="javascript:void(0)">accessories</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="collection-filter-block creative-card creative-inner">
                            <div class="product-service">
                                <div class="media">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -117 679.99892 679">
                                        <path
                                            d="m12.347656 378.382812h37.390625c4.371094 37.714844 36.316407 66.164063 74.277344 66.164063 37.96875 0 69.90625-28.449219 74.28125-66.164063h241.789063c4.382812 37.714844 36.316406 66.164063 74.277343 66.164063 37.96875 0 69.902344-28.449219 74.285157-66.164063h78.890624c6.882813 0 12.460938-5.578124 12.460938-12.460937v-352.957031c0-6.882813-5.578125-12.464844-12.460938-12.464844h-432.476562c-6.875 0-12.457031 5.582031-12.457031 12.464844v69.914062h-105.570313c-4.074218.011719-7.890625 2.007813-10.21875 5.363282l-68.171875 97.582031-26.667969 37.390625-9.722656 13.835937c-1.457031 2.082031-2.2421872 4.558594-2.24999975 7.101563v121.398437c-.09765625 3.34375 1.15624975 6.589844 3.47656275 9.003907 2.320312 2.417968 5.519531 3.796874 8.867187 3.828124zm111.417969 37.386719c-27.527344 0-49.851563-22.320312-49.851563-49.847656 0-27.535156 22.324219-49.855469 49.851563-49.855469 27.535156 0 49.855469 22.320313 49.855469 49.855469 0 27.632813-22.21875 50.132813-49.855469 50.472656zm390.347656 0c-27.53125 0-49.855469-22.320312-49.855469-49.847656 0-27.535156 22.324219-49.855469 49.855469-49.855469 27.539063 0 49.855469 22.320313 49.855469 49.855469.003906 27.632813-22.21875 50.132813-49.855469 50.472656zm140.710938-390.34375v223.34375h-338.375c-6.882813 0-12.464844 5.578125-12.464844 12.460938 0 6.882812 5.582031 12.464843 12.464844 12.464843h338.375v79.761719h-66.421875c-4.382813-37.710937-36.320313-66.15625-74.289063-66.15625-37.960937 0-69.898437 28.445313-74.277343 66.15625h-192.308594v-271.324219h89.980468c6.882813 0 12.464844-5.582031 12.464844-12.464843 0-6.882813-5.582031-12.464844-12.464844-12.464844h-89.980468v-31.777344zm-531.304688 82.382813h99.703125v245.648437h-24.925781c-4.375-37.710937-36.3125-66.15625-74.28125-66.15625-37.960937 0-69.90625 28.445313-74.277344 66.15625h-24.929687v-105.316406l3.738281-5.359375h152.054687c6.882813 0 12.460938-5.574219 12.460938-12.457031v-92.226563c0-6.882812-5.578125-12.464844-12.460938-12.464844h-69.796874zm-30.160156 43h74.777344v67.296875h-122.265625zm0 0"
                                            fill="#ff4c3b"></path>
                                    </svg>
                                    <div class="media-body">
                                        <h4>free shipping</h4>
                                        <p>free shipping world wide</p>
                                    </div>
                                </div>
                                <div class="media">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 480 480"
                                        style="enable-background:new 0 0 480 480;" xml:space="preserve" width="512px"
                                        height="512px">
                                        <g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M472,432h-24V280c-0.003-4.418-3.588-7.997-8.006-7.994c-2.607,0.002-5.05,1.274-6.546,3.41l-112,160     c-2.532,3.621-1.649,8.609,1.972,11.14c1.343,0.939,2.941,1.443,4.58,1.444h104v24c0,4.418,3.582,8,8,8s8-3.582,8-8v-24h24     c4.418,0,8-3.582,8-8S476.418,432,472,432z M432,432h-88.64L432,305.376V432z"
                                                        fill="#ff4c3b" />
                                                    <path
                                                        d="M328,464h-94.712l88.056-103.688c0.2-0.238,0.387-0.486,0.56-0.744c16.566-24.518,11.048-57.713-12.56-75.552     c-28.705-20.625-68.695-14.074-89.319,14.631C212.204,309.532,207.998,322.597,208,336c0,4.418,3.582,8,8,8s8-3.582,8-8     c-0.003-26.51,21.486-48.002,47.995-48.005c10.048-0.001,19.843,3.151,28.005,9.013c16.537,12.671,20.388,36.007,8.8,53.32     l-98.896,116.496c-2.859,3.369-2.445,8.417,0.924,11.276c1.445,1.226,3.277,1.899,5.172,1.9h112c4.418,0,8-3.582,8-8     S332.418,464,328,464z"
                                                        fill="#ff4c3b" />
                                                    <path
                                                        d="M216.176,424.152c0.167-4.415-3.278-8.129-7.693-8.296c-0.001,0-0.002,0-0.003,0     C104.11,411.982,20.341,328.363,16.28,224H48c4.418,0,8-3.582,8-8s-3.582-8-8-8H16.28C20.283,103.821,103.82,20.287,208,16.288     V40c0,4.418,3.582,8,8,8s8-3.582,8-8V16.288c102.754,3.974,185.686,85.34,191.616,188l-31.2-31.2     c-3.178-3.07-8.242-2.982-11.312,0.196c-2.994,3.1-2.994,8.015,0,11.116l44.656,44.656c0.841,1.018,1.925,1.807,3.152,2.296     c0.313,0.094,0.631,0.172,0.952,0.232c0.549,0.198,1.117,0.335,1.696,0.408c0.08,0,0.152,0,0.232,0c0.08,0,0.152,0,0.224,0     c0.609-0.046,1.211-0.164,1.792-0.352c0.329-0.04,0.655-0.101,0.976-0.184c1.083-0.385,2.069-1.002,2.888-1.808l45.264-45.248     c3.069-3.178,2.982-8.242-0.196-11.312c-3.1-2.994-8.015-2.994-11.116,0l-31.976,31.952     C425.933,90.37,331.38,0.281,216.568,0.112C216.368,0.104,216.2,0,216,0s-0.368,0.104-0.568,0.112     C96.582,0.275,0.275,96.582,0.112,215.432C0.112,215.632,0,215.8,0,216s0.104,0.368,0.112,0.568     c0.199,115.917,91.939,210.97,207.776,215.28h0.296C212.483,431.847,216.013,428.448,216.176,424.152z"
                                                        fill="#ff4c3b" />
                                                    <path
                                                        d="M323.48,108.52c-3.124-3.123-8.188-3.123-11.312,0L226.2,194.48c-6.495-2.896-13.914-2.896-20.408,0l-40.704-40.704     c-3.178-3.069-8.243-2.981-11.312,0.197c-2.994,3.1-2.994,8.015,0,11.115l40.624,40.624c-5.704,11.94-0.648,26.244,11.293,31.947     c9.165,4.378,20.095,2.501,27.275-4.683c7.219-7.158,9.078-18.118,4.624-27.256l85.888-85.888     C326.603,116.708,326.603,111.644,323.48,108.52z M221.658,221.654c-0.001,0.001-0.001,0.001-0.002,0.002     c-3.164,3.025-8.148,3.025-11.312,0c-3.125-3.124-3.125-8.189-0.002-11.314c3.124-3.125,8.189-3.125,11.314-0.002     C224.781,213.464,224.781,218.53,221.658,221.654z"
                                                        fill="#ff4c3b" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <div class="media-body">
                                        <h4>24 X 7 service</h4>
                                        <p>online service for new customer</p>
                                    </div>
                                </div>
                                <div class="media">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -14 512.00001 512">
                                        <path
                                            d="m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0"
                                            fill="#ff4c3b" />
                                        <path
                                            d="m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0"
                                            fill="#ff4c3b" />
                                        <path
                                            d="m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0"
                                            fill="#ff4c3b" />
                                        <path
                                            d="m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0"
                                            fill="#ff4c3b" />
                                        <path
                                            d="m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0"
                                            fill="#ff4c3b" />
                                        <path
                                            d="m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0"
                                            fill="#ff4c3b" />
                                    </svg>
                                    <div class="media-body">
                                        <h4>festival offer</h4>
                                        <p>new online special festival offer</p>
                                    </div>
                                </div>
                                <div class="media border-0 m-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512"
                                        style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512px"
                                        height="512px">
                                        <g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M498.409,175.706L336.283,13.582c-8.752-8.751-20.423-13.571-32.865-13.571c-12.441,0-24.113,4.818-32.865,13.569     L13.571,270.563C4.82,279.315,0,290.985,0,303.427c0,12.442,4.82,24.114,13.571,32.864l19.992,19.992     c0.002,0.001,0.003,0.003,0.005,0.005c0.002,0.002,0.004,0.004,0.006,0.006l134.36,134.36H149.33     c-5.89,0-10.666,4.775-10.666,10.666c0,5.89,4.776,10.666,10.666,10.666h59.189c0.014,0,0.027,0.001,0.041,0.001     s0.027-0.001,0.041-0.001l154.053,0.002c5.89,0,10.666-4.776,10.666-10.666c0-5.891-4.776-10.666-10.666-10.666l-113.464-0.002     L498.41,241.434C516.53,223.312,516.53,193.826,498.409,175.706z M483.325,226.35L226.341,483.334     c-4.713,4.712-11.013,7.31-17.742,7.32h-0.081c-6.727-0.011-13.025-2.608-17.736-7.32L56.195,348.746L302.99,101.949     c4.165-4.165,4.165-10.919,0-15.084c-4.166-4.165-10.918-4.165-15.085,0.001L41.11,333.663l-12.456-12.456     c-4.721-4.721-7.321-11.035-7.321-17.779c0-6.744,2.6-13.059,7.322-17.781L285.637,28.665c4.722-4.721,11.037-7.321,17.781-7.321     c6.744,0,13.059,2.6,17.781,7.322l57.703,57.702l-246.798,246.8c-4.165,4.164-4.165,10.918,0,15.085     c2.083,2.082,4.813,3.123,7.542,3.123c2.729,0,5.459-1.042,7.542-3.124l246.798-246.799l89.339,89.336     C493.128,200.593,493.127,216.546,483.325,226.35z"
                                                        fill="#ff4c3b" />
                                                    <path
                                                        d="M262.801,308.064c-4.165-4.165-10.917-4.164-15.085,0l-83.934,83.933c-4.165,4.165-4.165,10.918,0,15.085     c2.083,2.083,4.813,3.124,7.542,3.124c2.729,0,5.459-1.042,7.542-3.124l83.934-83.933     C266.966,318.982,266.966,312.229,262.801,308.064z"
                                                        fill="#ff4c3b" />
                                                    <path
                                                        d="M228.375,387.741l-34.425,34.425c-4.165,4.165-4.165,10.919,0,15.085c2.083,2.082,4.813,3.124,7.542,3.124     c2.731,0,5.459-1.042,7.542-3.124l34.425-34.425c4.165-4.165,4.165-10.919,0-15.085     C239.294,383.575,232.543,383.575,228.375,387.741z"
                                                        fill="#ff4c3b" />
                                                    <path
                                                        d="M260.054,356.065l-4.525,4.524c-4.166,4.165-4.166,10.918-0.001,15.085c2.082,2.083,4.813,3.125,7.542,3.125     c2.729,0,5.459-1.042,7.541-3.125l4.525-4.524c4.166-4.165,4.166-10.918,0.001-15.084     C270.974,351.901,264.219,351.9,260.054,356.065z"
                                                        fill="#ff4c3b" />
                                                    <path
                                                        d="M407.073,163.793c-2-2-4.713-3.124-7.542-3.124c-2.829,0-5.541,1.124-7.542,3.124l-45.255,45.254     c-2,2.001-3.124,4.713-3.124,7.542s1.124,5.542,3.124,7.542l30.17,30.167c2.083,2.083,4.813,3.124,7.542,3.124     c2.731,0,5.459-1.042,7.542-3.124l45.253-45.252c4.165-4.165,4.165-10.919,0-15.084L407.073,163.793z M384.445,231.673     l-15.085-15.084l30.17-30.169l15.084,15.085L384.445,231.673z"
                                                        fill="#ff4c3b" />
                                                    <path
                                                        d="M320.339,80.186c2.731,0,5.461-1.042,7.543-3.126l4.525-4.527c4.164-4.166,4.163-10.92-0.003-15.084     c-4.165-4.164-10.92-4.163-15.084,0.003l-4.525,4.527c-4.164,4.166-4.163,10.92,0.003,15.084     C314.881,79.146,317.609,80.186,320.339,80.186z"
                                                        fill="#ff4c3b" />
                                                    <path
                                                        d="M107.215,358.057l-4.525,4.525c-4.165,4.164-4.165,10.918,0,15.085c2.083,2.082,4.813,3.123,7.542,3.123     s5.459-1.041,7.542-3.123l4.525-4.525c4.165-4.166,4.165-10.92,0-15.085C118.133,353.891,111.381,353.891,107.215,358.057z"
                                                        fill="#ff4c3b" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <div class="media-body">
                                        <h4>online payment</h4>
                                        <p>Contrary to popular belief.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- side-bar single product slider start -->
                       
                        <!-- side-bar single product slider end -->
                    </div> --}}
                </div>
            </div>
        </div>
    </section>

    @php
        $related_products = $product_helper->getProductsByCategory($product->categories()->first(), 8);
    @endphp
    @include('packages.core.website.common.prodcut-slider', [
        'title' => 'Related Products',
        'products' => $related_products,
    ])
@endsection

@push('js')
    <script src="{{ asset('website/js/jquery.elevatezoom.js') }}" defer></script>
@endpush
