@extends('packages.core.website.layouts.master')
@inject('payment_helper', 'Jed\PaymentMethod\App\Helpers\PaymentMethodsHelper')
@php
    $payment_methods = $payment_helper->getPaymentMethods();
    $khalti_enabled = $payment_methods->contains('slug', 'khalti');
@endphp
@section('content')
    <section class="section-big-py-space b-g-light">
        <div class="container-fluid">
            <div class="checkout-page">
                <form action="{{ route('website.process-cart-order') }}" method="POST" id="form--place-order">
                    @csrf
                    <div class="checkout-form">
                        <div class="row mt-3">
                            <div class="col-lg-4 col-sm-12 col-xs-12">
                                <div class="checkout-title">
                                    <h4>Shipping Address</h3>
                                </div>
                                @foreach ($shipping_addresses as $shipping_address)
                                    <div class="shipping--address mb-2 {{ $shipping_address->id == $cart->shipping_address_id ? 'selected' : '' }}"
                                        data-address-id={{ $shipping_address->id }}>
                                        <p class="font-20"><strong>{{ $shipping_address->first_name }}
                                                {{ $shipping_address->last_name }} &nbsp;&nbsp;&nbsp;
                                                ({{ $shipping_address->contact_number }})
                                            </strong> <input type="radio" value="{{ $shipping_address->id }}"
                                                name="shipping_address" class="float-right" id="" @if($shipping_address->id == $cart->shipping_address_id) checked @endif></p>
                                        <p>{{ $shipping_address->provinceDetail->name }},
                                            {{ $shipping_address->district . ' ' . $shipping_address->country }} &nbsp;
                                            &nbsp;&nbsp;&nbsp; <strong>City: </strong>{{ $shipping_address->city }}</p>
                                        <p><strong>Landmark: </strong>{{ $shipping_address->landmark }}</p>
                                    </div>
                                @endforeach
                                {{-- {{ dd($shipping_addresses->count()) }} --}}


                                @if ($shipping_addresses->count() < 3)
                                    <div class="add-shipping-address mt-4">
                                        <add-shipping-address
                                            :shipping-addresses-count="{{ $shipping_addresses->count() }}">
                                        </add-shipping-address>
                                    </div>
                                @endif
                            </div>
                            <div class="col-lg-8 col-sm-12 col-xs-12 summary">
                                <div class="checkout-title">
                                    <h4>Products Detail</h4>
                                </div>
                                <div class="checkout-details theme-form">
                                    <div class="order-box">
                                        <table class="table table-cart table-mobile">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                @foreach ($cart->items as $cart_item)
                                                    <tr>
                                                        <td class="product-col">
                                                            <div class="product">
                                                                <figure class="product-media">
                                                                    <a
                                                                        href="{{ route('website.product-detail', $cart_item->product->slug) }}">
                                                                        <img
                                                                            src="{{ $cart_item->product->default_media['thumb'] }}">
                                                                    </a>
                                                                </figure>

                                                                <h3 class="product-title">
                                                                    <a
                                                                        href="{{ route('website.product-detail', $cart_item->product->slug) }}">{{ $cart_item->product->name }}</a>
                                                                </h3><!-- End .product-title -->
                                                            </div><!-- End .product -->
                                                        </td>
                                                        <td class="price-col">
                                                            Rs. {{ $cart_item->price }} x {{ $cart_item->quantity }}
                                                        </td>
                                                        <td class="total-col">Rs.
                                                            {{ $cart_item->quantity * $cart_item->price }}</td>
                                                    </tr>
                                                @endforeach
                                            </tbody>
                                        </table><!-- End .table table-wishlist -->
                                        <div class="row">
                                            <div class="col-sm-6"></div>
                                            <div class="col-sm-6">
                                                <h5 class="text-right">
                                                    <strong>Shipping Cost:  </strong> Rs. {{ $cart->shipping_cost }}
                                                </h5>
                                                <h5 class="text-right">
                                                    <strong>Subtotal:  </strong> Rs. {{ $cart->getCartTotal() }}
                                                </h5>
                                            </div>
                                        </div>
                                        {{-- <ul class="sub-total">
                                            <li>Subtotal <span class="count">Rs. {{ $cart->getCartItemTotal() }}</span>
                                            </li>
                                        </ul>
                                        <ul class="total">
                                            <li>Total <span class="count">Rs. {{ $cart->getCartItemTotal() }}</span></li>
                                        </ul> --}}
                                    </div>
                                    <div class="payment-box">
                                        <div class="upper-box">
                                            <div class="payment-options row">
                                                <div class="col-sm-3">
                                                    <div class="form-check">
                                                        <input class="form-check-input" style="margin-top:15px !important"
                                                            type="radio" name="payment_method" id="paymentcod"
                                                            value="cash_on_delivery" checked>
                                                        <label class="form-check-label" for="paymentcod">
                                                            <img src="{{ asset('website/images/cod.png') }}" loading="lazy"
                                                                width="150px" alt="">
                                                        </label>
                                                    </div>
                                                </div>
                                                @foreach ($payment_methods as $key => $pm)
                                                    {{-- @if (($course->accept_international_payment && $pm->is_international) || !$pm->is_international) --}}
                                                    <div class="col-sm-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input"
                                                                style="margin-top:15px !important" type="radio"
                                                                name="payment_method" id="payment{{ $pm->slug }}"
                                                                value="{{ $pm->slug }}">
                                                            <label class="form-check-label"
                                                                for="payment{{ $pm->slug }}">
                                                                <img src="{{ $pm->logo_url }}" alt=""
                                                                    width="150px">
                                                            </label>
                                                        </div>
                                                    </div>
                                                    {{-- <li>
                                                            <div class="radio-option">
                                                                <input type="radio" name="payment-group" id="payment-{{ $pm->slug }}">
                                                                <label for="payment-{{ $pm->slug }}">{{ $pm->name }}</label>
                                                            </div>
                                                        </li> --}}
                                                    {{-- @endif --}}
                                                @endforeach
                                            </div>
                                        </div>
                                        <div class="text-right">
                                            <a href="javascript:void(0s)" id="btn--place-order"
                                                class="text-right btn btn-outline-primary btn-rounded"><span>Place
                                                    Order</span><i class="icon-long-arrow-right"></i></a>
                                        </div>
                                        {{-- <div class="text-right"><a href="javascript:void(0)" id="btn--place-order"
                                                class="btn-normal btn">Place
                                                Order</a></div> --}}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </section>
@endsection

@if ($khalti_enabled)
    @php
        $khalti_config = json_decode($payment_methods->where('slug', 'khalti')->first()->config, true);
    @endphp
    @push('js')
        <script src="https://khalti.s3.ap-south-1.amazonaws.com/KPG/dist/2020.12.17.0.0.0/khalti-checkout.iffe.js"></script>


        <script>
            window.onload = function() {
                $('.shipping--address').click(function() {
                    // $(this).addClass('selected')
                    // $('.shipping--address').not($(this)).removeClass('selected');
                    // $(this).find('input[type=radio]').prop('checked', true)
                    Swal.fire({
                        text: "Applying shipping address.",
                        didOpen: () => {
                            Swal.showLoading()
                        }
                    })
                    let address_id = $(this).data("address-id");
                    axios.post("/api/cart/assign-shipping-address", {
                        address_id: address_id
                    }).then(response => {
                        location.reload();
                    })
                })


                $('#btn--place-order').click(function(e) {
                    let payment_method = $('[name=payment_method]:checked').val()

                    let form = $('#form--place-order')
                    let formData = form.serialize();
                    var data = {};
                    form.serializeArray().map(function(x) {
                        data[x.name] = x.value;
                    });

                    if (!data.shipping_address) {
                        Swal.fire({
                            icon: 'error',
                            text: "Please select shipping address.",
                        })

                    } else {
                        if (payment_method !== 'khalti' && payment_method !== 'nicasia') {
                            Swal.fire({
                                title: 'Processing Order!',
                                html: 'Please hold tight. Your order is being placed.',
                                allowOutsideClick: false,
                                didOpen: () => {
                                    Swal.showLoading()
                                    const b = Swal.getHtmlContainer()
                                        .querySelector('b')
                                    timerInterval = setInterval(() => {
                                        b.textContent = Swal
                                            .getTimerLeft()
                                    }, 100)
                                },
                                willClose: () => {
                                    clearInterval(timerInterval)
                                }
                            })
                            form.submit();
                        } else if (payment_method == 'nicasia') {
                            Swal.fire({
                                title: 'NIC ASIA WOW PAYMENT PROCESSING!',
                                html: 'Please hold tight. Your order is being placed.',
                                allowOutsideClick: false,
                                didOpen: () => {
                                    Swal.showLoading()
                                    const b = Swal.getHtmlContainer()
                                        .querySelector('b')
                                    timerInterval = setInterval(() => {
                                        b.textContent = Swal
                                            .getTimerLeft()
                                    }, 100)
                                },
                                willClose: () => {
                                    clearInterval(timerInterval)
                                }
                            })
                            form.submit();
                        } else {
                            axios.post("/process-order", data).then(response => {
                                if (response.data.success == true) {
                                    let order = response.data.order
                                    let cart_items = response.data.cart_items
                                    let productIdentity = order.id

                                    if (cart_items.length == 1) {
                                        productIdentity = cart_items[0].product_id
                                    }
                                    var config = {
                                        "publicKey": "{{ $khalti_config['public_key'] }}",
                                        "productIdentity": productIdentity,
                                        "productName": "FatafatOrder" + order.id,
                                        "productUrl": "{{ request()->url() }}",
                                        "paymentPreference": [
                                            "KHALTI",
                                            "EBANKING",
                                            "MOBILE_BANKING",
                                            "CONNECT_IPS",
                                            "SCT",
                                            "VISA",
                                        ],
                                        "eventHandler": {
                                            onSuccess(payload) {
                                                Swal.fire({
                                                    title: 'Processing Order!',
                                                    html: 'Please hold tight. Your order is being placed.',
                                                    allowOutsideClick: false,
                                                    didOpen: () => {
                                                        Swal.showLoading()
                                                        const b = Swal.getHtmlContainer()
                                                            .querySelector('b')
                                                        timerInterval = setInterval(() => {
                                                            b.textContent = Swal
                                                                .getTimerLeft()
                                                        }, 100)
                                                    },
                                                    willClose: () => {
                                                        clearInterval(timerInterval)
                                                    }
                                                })
                                                axios.get(
                                                    "{{ route('website.cart-payment.completed') }}", {
                                                        params: {
                                                            amount: payload.amount,
                                                            mobile: payload.mobile,
                                                            user_id: payload.product_identity,
                                                            token: payload.token,
                                                            payment_method: "khalti"
                                                        }
                                                    }).then((response) => {
                                                    if (response.data.success) {
                                                        window.location.href =
                                                            "/order-completed?order_id=" +
                                                            response.data.order.id;
                                                    }
                                                })
                                            },
                                            onError(error) {
                                                console.log(error);
                                            },
                                            onClose() {

                                            }
                                        }
                                    };

                                    var checkout = new KhaltiCheckout(config);
                                    checkout.show({
                                        amount: {{ $cart->getCartItemTotal() * 100 }}
                                    });
                                }
                            })
                        }
                    }
                })

            }
        </script>
    @endpush
@endif
@if (!$khalti_enabled)
    @push('js')
        <script>
            window.onload = function() {
                $('.shipping--address').click(function() {
                    // $(this).addClass('selected')
                    // $('.shipping--address').not($(this)).removeClass('selected');
                    // $(this).find('input[type=radio]').prop('checked', true)
                    Swal.fire({
                        text: "Applying shipping address.",
                        didOpen: () => {
                            Swal.showLoading()
                        }
                    })
                    let address_id = $(this).data("address-id");
                    axios.post("/api/cart/assign-shipping-address", {
                        address_id: address_id
                    }).then(response => {
                        location.reload();
                    })
                })

                $('#btn--place-order').click(function() {
                    let form = $('#form--place-order')
                    let formData = form.serialize();
                    var data = {};
                    form.serializeArray().map(function(x) {
                        data[x.name] = x.value;
                    });

                    if (!data.shipping_address) {
                        Swal.fire({
                            icon: 'error',
                            text: "Please select shipping address.",
                        })
                    } else {
                        Swal.fire({
                            title: 'Processing Order!',
                            html: 'Please hold tight. Your order is being placed.',
                            allowOutsideClick: false,
                            didOpen: () => {
                                Swal.showLoading()
                                const b = Swal.getHtmlContainer()
                                    .querySelector('b')
                                timerInterval = setInterval(() => {
                                    b.textContent = Swal
                                        .getTimerLeft()
                                }, 100)
                            },
                            willClose: () => {
                                clearInterval(timerInterval)
                            }
                        })
                        form.submit()
                    }
                })
            }
        </script>
    @endpush
@endif
