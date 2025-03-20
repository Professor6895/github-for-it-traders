@extends('packages.core.website.layouts.master')
@section('content')
    <div class="page-content mt-5">

        <div class="compare-page container-fluid">
            @if (count($products))
                <div class="table-wrapper table-responsive">
                    <table class="table">
                        <tbody id="table-compare">
                            <tr>
                                <th class="product-name">Product Name</th>

                                @foreach ($products as $product)
                                    <td class="grid-link__title"><a class="d-inline-block"
                                            href="{{ route('website.product-detail', $product->slug) }}" target="__blank">
                                            <h6>{{ $product->name }}</h6>
                                        </a>
                                        <button data-product-id="{{ $product->id }}" type="submit"
                                            class="ml-2 btn-danger  float-right d-inline-block btn--remove-from-compare"
                                            style="border: none; border-radius: 5px;"><i class="la la-trash"></i></button>

                                    </td>
                                @endforeach
                            </tr>
                            <tr>
                                <th class="product-name">Product Image / Details</th>
                                @foreach ($products as $product)
                                    @php
                                        $is_campaign_active = $product->discountcampaign && $product->discountcampaign->campaign->is_active;
                                        $org_price = $product->original_price ? $product->original_price : $product->price;
                                    @endphp
                                    <td class="item-row"><img src="{{ $product->default_media['full'] }}" alt="product"
                                            class="   featured-image">

                                        @if ($product->price != 0 || $product->price != '0')
                                            <div class="product-right mt-3">
                                                <div class="pro-group" style="padding-bottom: 0px !important">
                                                    <ul class="pro-price mb-2" style="font-size: 22px !important">
                                                        <li>Rs. {{ $product->discounted_price }}</li>

                                                        @if ($is_campaign_active)
                                                            <li><span>Rs.
                                                                    {{ $product->original_price ? $product->original_price : $product->price }}</span>
                                                            </li><br>
                                                            <li>{{ round((($org_price - $product->discounted_price) / $org_price) * 100, 2) }}%
                                                                off</li>
                                                        @elseif ($product->original_price)
                                                            <li><span>Rs.
                                                                    {{ $product->original_price }}</span>
                                                            </li>
                                                            <li>{{ round((($product->original_price - $product->discounted_price) / $product->original_price) * 100, 2) }}%
                                                                off</li>
                                                        @endif
                                                    </ul>
                                                </div>
                                            </div>
                                        @else
                                            <ul class="pro-price mb-2">
                                                <li>Coming Soon</li>
                                            </ul>
                                        @endif
                                        <div class="star--rating mt-2 mb-2" data-rating="{{ $product->average_rating }}">
                                        </div>
                                    </td>
                                @endforeach

                            </tr>
                            <tr>
                                <th class="product-name">Brand</th>

                                @foreach ($products as $product)
                                    <td class="grid-link__title">
                                        {{ $product->brand ? $product->brand->name : '--' }}</td>
                                @endforeach
                            </tr>

                            <tr>
                                <th class="product-name">Highlights</th>

                                @foreach ($products as $product)
                                    @php
                                        $highlights = array_filter(explode('|', $product->highlights));
                                    @endphp
                                    <td class="grid-link__title">
                                        @forelse ($highlights as $highlight)
                                            <p class="font-14 mb-2"><strong><i
                                                        class="bi bi-chevron-double-right"></i></strong>
                                                &nbsp;{{ $highlight }}</p>
                                        @empty
                                            ---
                                        @endforelse
                                    </td>
                                @endforeach
                            </tr>

                            @foreach ($product_attribute_keys as $attribute_key)
                                <tr>
                                    <th class="product-name">{{ $attribute_key }}</th>
                                    @foreach ($product_attrs as $product_attr)
                                        <td>
                                            @if (isset($product_attr[$attribute_key]))
                                                {{ $product_attr[$attribute_key] }}
                                            @else
                                                ---
                                            @endif
                                        </td>
                                    @endforeach
                                </tr>
                            @endforeach
                            <tr>
                                <th class="product-name">Description</th>
                                @foreach ($products as $product)
                                    <td>
                                        <button class="btn btn-primary btn-round btn-shadow"
                                            onclick="showProductDesc({{ $product }})">View Full
                                            Description</button>
                                    </td>
                                @endforeach
                            </tr>
                        </tbody>
                    </table>
                </div>
            @else
                <div class="mt-5 mb-5 alert alert-warning text-center">
                    <h3>No products found in your compare list.</h3>
                </div>
            @endif
        </div>
    </div>


    {{-- <div class="modal fade" id="productdescmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div> --}}
    <div class="modal fade" id="productdescmodal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body p-5  mb-4">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="icon-close"></i></span>
                    </button>
                    <h3 class="mb-2 product--name"></h3>
                    <hr>
                    <div class="product--description product--description-area"></div>
                </div>
            </div>
        </div>
    </div>

@endsection
