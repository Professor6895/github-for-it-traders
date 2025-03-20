@extends('packages.core.website.layouts.master')

@section('content')
    <div class="page-content mt-3">
        <div class="container">
            <table class="table table-wishlist table-mobile">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Stock Status</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    @foreach ($wishlists as $wishlist)
                        @php
                            $product = $wishlist->product;
                            
                            $is_campaign_active = $product->discountcampaign && $product->discountcampaign->campaign->is_active;
                            $org_price = $product->original_price ? $product->original_price : $product->price;
                        @endphp
                        <tr>
                            <td class="product-col">
                                <div class="product">
                                    <figure class="product-media">
                                        <a href="{{ route('website.product-detail', $product->slug) }}">
                                            <img src="{{ $product->default_media['thumb'] }}" alt="{{ $product->name }}">
                                        </a>
                                    </figure>

                                    <h3 class="product-title">
                                        <a
                                            href="{{ route('website.product-detail', $product->slug) }}">{{ $product->name }}</a>
                                    </h3><!-- End .product-title -->
                                </div><!-- End .product -->
                            </td>
                            <td class="price-col">
                                Rs. {{ $product->discounted_price }}

                                @if ($is_campaign_active)
                                    <div class="check-price ml-4"> <strike><span class="old-price">Rs.
                                                {{ $product->original_price ? $product->original_price : $product->price }}</span></strike>
                                    </div>
                                @elseif ($product->original_price)
                                    <div class="check-price ml-4"> <strike><span class="old-price">Rs.
                                                {{ $product->original_price }}</span></strike>
                                    </div>
                                @endif

                            </td>
                            <td class="stock-col">
                                @if ($product->quantity >= 1)
                                    <span class="in-stock">In stock</span>
                                @else
                                    <span class="out-of-stock">Out of Stock</span>
                                @endif
                            </td>
                            <td class="action-col">
                                <div class="dropdown">
                                    <a href="{{ route('website.product-detail', $product->slug) }}" class="btn btn-block btn-outline-primary-2">
                                        View Details
                                    </a>
                                </div>
                            </td>
                            <td class="remove-col">
                                <button class="btn-remove remove-from-wishlist" data-wishlist-id="{{ $wishlist->id }}"><i class="icon-close"></i></button>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table><!-- End .table table-wishlist -->
        </div><!-- End .container -->
    </div><!-- End .page-content -->
@endsection
