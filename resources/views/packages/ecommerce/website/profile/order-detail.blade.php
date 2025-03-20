@extends('packages.core.website.profile.profile-master')

@section('profile-content')
    <div class="dashboard-right checkout-page">
        <div class="dashboard checkout-form p-5">
          <a href={{ route('website.user-profile.orders-list') }} class="btn btn-secondary mb-2"><< Back</a>
            <div class="page-title">
                <h2>Order Detail</h2>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <p><strong>Order: </strong> <i>#{{ $order->invoice_number }}</i></p>
                    <p class="mt-1"><strong>Status: </strong>{{ $order->order_status }}</p>
                    <p class="mt-1"><strong>Placed On: </strong> {{ $order->created_at->format('jS F Y, h:i:s A') }}</p>
                </div>
                <div class="col-sm-6">
                    <div class="float-right">
                        <p class=" font-20"><strong>Total: </strong> Rs. {{ $order->total }}</p>
                        <p class="mt-1"><strong>Payment Method: </strong>
                            {{ ucwords(str_replace('_', ' ', $order->payment_type)) }}</p>
                    </div>
                </div>

                <div class="col-12 mt-4 ">
                    <table class="table table-bordere">
                        <tr>
                            <td>Image</td>
                            <td>Article</td>
                            <td>Options</td>
                            <td>Price</td>
                            <td>Total</td>
                        </tr>
                        @foreach ($order->items as $order_item)
                            <tr>
                                <td style="padding:10px">
                                    <img src="{{ $order_item->product->default_media['thumb'] }}" alt="" width="50">
                                </td>
                                <td class="align-middle font-20"><span
                                        style="color:#777;font-size:14px;">{{ $order_item->product->sku }}</span><br>
                                    <a
                                        href="{{ route('website.product-detail', $order_item->product->slug) }}">{{ $order_item->product->name }}</a>
                                </td>
                                <td class="align-middle">
                                    @if (sizeof($order_item->product_attributes))
                                        @foreach ($order_item->product_attributes as $key => $attribute)
                                            <span><strong>{{ $key }}:</strong> {{ $attribute }}</span><br>
                                        @endforeach
                                    @else
                                        ---
                                    @endif
                                </td>
                                <td class="align-middle">{{ $order_item->quantity }} <span style="color:#777">X</span>
                                    Rs.
                                    {{ $order_item->product_price }}</td>
                                <td class="align-middle">Rs. {{ $order_item->quantity * $order_item->product_price }}
                                </td>
                            </tr>
                        @endforeach
                    </table>
                </div>
                <div class="col-sm-6 shipping--address">
                    @php
                        $shipping_address = $order->shippingAddress;
                    @endphp
                    <h4>Shipping Address</h4>
                    <hr>
                        <p class="font-18"><strong>{{ $shipping_address->first_name }}
                                {{ $shipping_address->last_name }} &nbsp;&nbsp;&nbsp;
                                ({{ $shipping_address->contact_number }})</strong></p>
                        <p>{{ $shipping_address->provinceDetail->name }},
                            {{ $shipping_address->district . ' ' . $shipping_address->country }}
                        </p>
                        <p>
                            <strong>City: </strong>{{ $shipping_address->city }}</p>
                        <p><strong>Landmark: </strong>{{ $shipping_address->landmark }}</p>
                </div>
                <div class="col-sm-6">
                    <table class="table font-20">
                        <tbody>
                            <tr>
                                <td><strong>Total: </strong></td>
                                <td>Rs. {{ $order->order_total }}</td>
                            </tr>
                            <tr>
                                <td><strong>Shipping: </strong></td>
                                <td>Rs. {{ $order->shipping_cost }}</td>
                            </tr>
                            <tr>
                                <td><strong>Grand Total: </strong></td>
                                <td>Rs. {{ $order->total }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection
