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
                        <h1 class="font-30">EMI Application for {{ $product->name }}</h1>
                    </div>
                    <div class="col-sm-4">
                        <img class="mt-3 img-fluid" src="{{ $default_media['full'] }}" alt="">
                    </div>
                    <div class="col-sm-8">
                        @guest('web')
                            <div class="card mt-10">
                                <div class="card-body text-center">
                                    <p class="font-20">You must login to the system in order to post EMI application
                                        form.</p>
                                    <button type="button" class="mt-2 btn cart-btn btn-normal btn-sm website--login-toggler">
                                        Login now
                                    </button>
                                </div>
                            </div>
                        @endguest

                        @auth('web')
                            @if ($emi_applied)
                                <div class="card mt-4">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <p class="font-20">You have already applied for EMI for this product.</p>
                                            <p>Status:
                                                @switch($user_emi->status)
                                                    @case(1)
                                                        <span class="badge bg-success">Processing</span>
                                                    @break
                                                    @case(2)
                                                        <span class="badge bg-success">Approved</span>
                                                    @break
                                                    @case(3)
                                                        <span class="badge bg-success">Finished</span>
                                                    @break
                                                    @case(4)
                                                        <span class="badge bg-danger">Cancelled</span>
                                                    @break
                                                    @default
                                                        <span class="badge bg-warning">Pending</span>
                                                @endswitch
                                            </p>
                                            <br>
                                            <p><strong>Applied at</strong>:
                                                {{ $user_emi->created_at->format('jS \\of F Y h:i:s A') }}</p>
                                        </div>

                                        <table class="mt-4 table table-bordered">
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
                                        </table>
                                    </div>
                                </div>

                            @else
                                <apply-emi :product-detail="{{ json_encode($product) }}"></apply-emi>
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.payment/1.0.1/jquery.payment.min.js" defer></script>
    <script>
        setTimeout(function() {
            $('.cc-number').formatCardNumber();
            $('.cc-expires').formatCardExpiry();
        }, 1000)
    </script>
@endpush
