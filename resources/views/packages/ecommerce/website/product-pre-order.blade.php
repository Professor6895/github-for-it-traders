@extends('packages.core.website.layouts.master')
@inject('product_helper', 'Jed\Ecommerce\App\Helpers\ProductHelper')

@php
$default_media = $product->default_media;
$other_medias = $product->other_medias;
@endphp

@section('content')
    <section class="section-big-py-space b-g-light">
        <div class="collection-wrapper">
            <div class="custom-container apply-emi-form">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1 class="font-30">Pre Order {{ $product->name }}</h1>
                    </div>
                    <div class="col-sm-4">
                        <img class="mt-3 img-fluid" src="{{ $default_media['full'] }}" alt="">
                    </div>
                    <div class="col-sm-8">
                        @guest('web')
                            <div class="card mt-10">
                                <div class="card-body text-center">
                                    <p class="font-20">You must login to the system in order to pre-order the product.
                                    </p>
                                    <button type="button" class="mt-2 btn cart-btn btn-normal btn-sm website--login-toggler">
                                        Login now
                                    </button>
                                </div>
                            </div>
                        @endguest
                        @auth('web')
                            @if ($pre_ordered)
                                <div class="card mt-4">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <p class="font-25">You have pre-ordered this product.</p>
                                            <p>Status:
                                                {{ $pre_order->pre_order_status }}
                                            <br>
                                            <p class="mt-3"><strong>Applied at</strong>:
                                                {{ $pre_order->created_at->format('jS \\of F Y h:i:s A') }}</p>
                                        </div>

                                        {{-- <table class="mt-4 table table-bordered">
                                            <tr>
                                                <th>Quotation For</th>
                                                <td>
                                                    <span
                                                        style="font-size: 14px; font-weight:bold">{{ $user_emi->product->name }}</span>
                                                    @if ($user_emi->product_attributes)
                                                        <br>
                                                        @foreach ($user_emi->product_attributes as $key => $attr)
                                                            <span><strong>{{ $key }}</strong>:
                                                                {{ $attr }}</span><br>
                                                        @endforeach
                                                    @endif
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>Down Payment</th>
                                                <td>NPR {{ $user_emi->down_payment }} /-</td>
                                            </tr>

                                            <tr>
                                                <th>Finance Amount</th>
                                                <td>NPR {{ $user_emi->finance_amount }} /-</td>
                                            </tr>

                                            <tr>
                                                <th>Duration in Month</th>
                                                <td> {{ $user_emi->emi_mode }} Months</td>
                                            </tr>

                                            <tr>
                                                <th>EMI Per Month</th>
                                                <td>NPR {{ $user_emi->emi_per_month }} /-</td>
                                            </tr>
                                        </table> --}}
                                    </div>
                                </div>

                            @else
                                <div class="card mt-3">
                                    <div class="card-body">
                                        {{-- @if ($product->pre_order_price)
                              <div style="color: #0c5460;
                                    background-color: #d1ecf1;
                                    border-color: #bee5eb;
                                    padding: 7px;
                                    border-radius: 7px">
                                <p class="font-18">
                                  <strong>Note:</strong> This product is available for pre-order.
                                </p>
                              </div>
                            @endif --}}

                                        <form action="{{ route('website.pre-order.apply') }}" id="formPreOrder"
                                            method="POST">
                                            @csrf
                                            <div class="form-group row">

                                                <div class="col-md-4">
                                                    <label for="">Full Name</label>
                                                    <input type="text" required name="name"
                                                        value="{{ auth('web')->user()->name }}" class="form-control">
                                                </div>
                                                <div class="col-md-4">
                                                    <label for="">Email Address</label>
                                                    <input type="text" required name="email" class="form-control"
                                                        value="{{ auth('web')->user()->email }}">
                                                </div>
                                                <div class="col-md-4">
                                                    <label for="">Contact Number</label>
                                                    <input type="text" required name="phone"
                                                        value="{{ auth('web')->user()->contact_number }}"
                                                        class="form-control">
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label for="">Address</label>
                                                <input type="text" required name="address"
                                                    value="{{ auth('web')->user()->address }}" class="form-control">
                                            </div>

                                            <div class="form-group">
                                                <label for="">Message</label>
                                                <textarea required name="message" class="form-control" id="" cols="30"
                                                    rows="3"></textarea>
                                            </div>
                                            <input type="hidden" name="product_id" value="{{ $product->id }}">
                                            <div class="form-group row">
                                                <div class="col-sm-12">
                                                    <h4 class="mb-2">To be confirmed by Customer</h4>
                                                    <input type="checkbox" required name="" id="terms-and-condition">
                                                    <label for="terms-and-condition">I agree to pay Rs.
                                                        {{ $product->pre_order_price }} as an advance for pre-booking of the
                                                        product.</label>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <button type="submit"
                                                    class="btn btn-process-pre-order btn-normal btn-sm">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            @endif
                        @endauth
                    </div>
                </div>
            </div>
        </div>
    </section>

    @php
    $related_products = $product_helper->getProductsByCategory($product->categories()->first(), 8);
    @endphp
    @include('packages.core.website.common.prodcut-slider', ['title' => "Related Products", 'products' =>
    $related_products])
@endsection

@push('js')
    <script>
        // setTimeout(function() {
        //     // $(document).on('click', '.btn-process-pre-order', function(e) {
        //     //     e.preventDefault();
        //     //    $('#formPreOrder').submit()
        //     // })
        // }, 1000)
    </script>
@endpush
