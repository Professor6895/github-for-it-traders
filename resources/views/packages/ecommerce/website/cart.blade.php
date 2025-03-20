@extends('packages.core.website.layouts.master')

@section('content')
    <div class="page-content mt-5">
        <div class="cart">
            <div class="container-fluid">
                <div class="row">
                    @if ($cart->items->count())
                        <div class="col-lg-9">
                            <table class="table table-cart table-mobile">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    @foreach ($cart->items as $cart_item)
                                        <tr>
                                            <td class="product-col">
                                                <div class="product">
                                                    <figure class="product-media" style="height: unset !important">
                                                        <a
                                                            href="{{ route('website.product-detail', $cart_item->product->slug) }}">
                                                            <img src="{{ $cart_item->product->default_media['thumb'] }}">
                                                        </a>
                                                    </figure>

                                                    <h3 class="product-title">
                                                        <a
                                                            href="{{ route('website.product-detail', $cart_item->product->slug) }}">{{ $cart_item->product->name }}</a>
                                                    </h3><!-- End .product-title -->
                                                </div><!-- End .product -->
                                            </td>
                                            <td class="price-col">
                                                Rs. {{ $cart_item->price }}
                                            </td>
                                            <td class="quantity-col ">
                                                <form action="{{ route('website.update-cart-item-quantity') }}"
                                                    method="POST">
                                                    <div class="cart-product-quantity d-inline-block">
                                                        @csrf
                                                        <input type="hidden" name="cart_id" value="{{ $cart->id }}">
                                                        <input type="hidden" name="cart_item_id"
                                                            value="{{ $cart_item->id }}">
                                                        <input type="number" name="quantity"
                                                            class="form-control input-number"
                                                            value="{{ $cart_item->quantity }}">

                                                    </div>
                                                    <div class="d-inline-block">
                                                        <button type="submit" style="border: 1px solid; height: 100%"
                                                            class="btn-outline-primary-2 qty-plus cart--item-update-button">
                                                            <i class="icon-refresh"></i>
                                                        </button>
                                                    </div>
                                                </form>
                                            </td>
                                            <td class="total-col">Rs. {{ $cart_item->quantity * $cart_item->price }}</td>
                                            <td class="remove-col">
                                                <form action="{{ route('website.remove-cart-item') }}" method="POST">
                                                    @csrf
                                                    <input type="hidden" name="cart_item_id" value="{{ $cart_item->id }}">
                                                    <input type="hidden" name="cart_id" value="{{ $cart->id }}">
                                                    <a href="javascript:void(0)" class="icon remove--cart-item"><i
                                                            class="icon-close"></i></a>

                                                </form>
                                                {{-- <button class="btn-remove"><i
                                                    class="icon-close"></i></button> --}}
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table><!-- End .table table-wishlist -->

                            <div class="cart-bottom">
                                <div class="cart-discount">
                                    <form action="{{ route('website.apply-cart-discount-coupon') }}" method="POST">
                                        @csrf
                                        <div class="input-group">
                                            <input type="text" name="coupon" class="form-control" required=""
                                                placeholder="coupon code">
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-primary-2" type="submit"><i
                                                        class="icon-long-arrow-right"></i></button>
                                            </div><!-- .End .input-group-append -->
                                        </div><!-- End .input-group -->
                                    </form>
                                </div>
                                <a href="/" class="btn btn-outline-dark-2  mb-3"><span>CONTINUE
                                        SHOPPING</span><i class="icon-refresh"></i></a>
                            </div><!-- End .cart-bottom -->
                        </div><!-- End .col-lg-9 -->
                        <aside class="col-lg-3">
                            <div class="summary summary-cart">
                                <h3 class="summary-title">Cart Total</h3><!-- End .summary-title -->

                                <table class="table table-summary">
                                    <tbody>
                                        <tr class="summary-subtotal">
                                            <td>Subtotal:</td>
                                            <td>Rs. {{ $cart->getCartItemTotal() }}</td>
                                        </tr><!-- End .summary-subtotal -->
                                        <tr class="summary-shipping">
                                            <td>Shipping:</td>
                                            <td>&nbsp;</td>
                                        </tr>

                                        <tr class="summary-shipping-row">
                                            <td>
                                                <p>Free Shipping</p>
                                            </td>
                                            <td>Rs 0.00</td>
                                        </tr><!-- End .summary-shipping-row -->

                                        @if ($cart->discount_coupon)
                                            <tr class="summary-shipping">
                                                <td>Discounts:</td>
                                                <td>&nbsp;</td>
                                            </tr>

                                            <tr class="summary-shipping-row">
                                                {{-- {{ dd($cart->coupon) }} --}}
                                                <td>
                                                    <p>{{ $cart->coupon->title }}</p>
                                                </td>
                                                <td>
                                                    @if ($cart->coupon->discount_type == 1)
                                                        Rs {{ $cart->coupon->discount_value }}
                                                    @else
                                                        {{ $cart->coupon->discount_value }}%
                                                    @endif
                                                    <form action="{{ route('website.detach-cart-discount-coupon') }}" class="d-inline-block"
                                                        method="POST">
                                                        @csrf
                                                        <button type="submit" style="border:none; border-radius: 5px;"
                                                            class="ml-2 btn-danger">
                                                            <i class="la la-trash"></i>
                                                        </button>
                                                    </form>
                                                </td>
                                            </tr><!-- End .summary-shipping-row -->
                                        @endif
                                        <tr class="summary-total">
                                            <td>Total:</td>
                                            <td>Rs. {{ $cart->getCartTotal() }} </td>
                                        </tr><!-- End .summary-total -->
                                    </tbody>
                                </table><!-- End .table table-summary -->

                                <a href="/checkout" class="btn btn-outline-primary-2 btn-order btn-block">PROCEED TO
                                    CHECKOUT</a>
                            </div><!-- End .summary -->


                        </aside><!-- End .col-lg-3 -->
                    @else
                        <div class="col-lg-12">
                            <div class="text-center">
                                <img src="{{ asset('website/images/emptycart.png') }}" class="img-fluid m-auto"
                                    alt="" width="400px">
                                <h2 class="font-50">No Items in your Cart!</h2>
                                <p class="mt-2 font-25">Looks like you haven't made your choice yet..</p>
                                <a href="/" class="btn btn-outline-dark-2  mt-3"><span>CONTINUE
                                        SHOPPING</span><i class="icon-refresh"></i></a>
                            </div>
                        </div>
                    @endif
                </div><!-- End .row -->
            </div><!-- End .container -->
        </div><!-- End .cart -->
    </div>
@endsection
