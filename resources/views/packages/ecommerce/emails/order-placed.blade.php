<style>
    body {
        font-family: Helvetica, sans-serif;
        font-size: 13px;
    }

    .container {
        max-width: 680px;
        margin: 0 auto;
    }

    .logotype {
        background: #000;
        color: #fff;
        width: 75px;
        height: 75px;
        line-height: 75px;
        text-align: center;
        font-size: 11px;
    }

    .column-title {
        background: #eee;
        text-transform: uppercase;
        padding: 15px 5px 15px 15px;
        font-size: 11px
    }

    .column-detail {
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }

    .column-header {
        background: #eee;
        text-transform: uppercase;
        padding: 15px;
        font-size: 11px;
        border-right: 1px solid #eee;
    }

    .row {
        padding: 7px 14px;
        border-left: 1px solid #eee;
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }

    .alert {
        background: #ffd9e8;
        padding: 20px;
        margin: 20px 0;
        line-height: 22px;
        color: #333
    }

    .socialmedia {
        background: #eee;
        padding: 20px;
        display: inline-block
    }

</style>
@component('mail::layout')
    @slot('header')
        @component('mail::header', ['url' => config('app.url')])
        @endcomponent
    @endslot

    <div style="text-align: center">
        <img src="{{ url(settings()['core']['logo']) }}" alt="" width="150px" style="margin: auto">
    </div>

    <h3>Your Order Invoice</h3>
    <table width="100%" style="border-collapse: collapse;">
        <tr>
            <td widdth="50%" style="background:#eee;padding:20px;">
                <strong>Date:</strong> {{ $order->created_at->format('Y-m-d') }}<br>
                <strong>Payment type:</strong> {{ $order->payment_type }}<br>
            </td>
            <td style="background:#eee;padding:20px;">
                <strong>Order Number:</strong> {{ $order->invoice_number }}<br>
                <strong>Phone:</strong> {{ settings()['core']['contact_number'] }}<br>
            </td>
        </tr>
    </table><br>
    <table width="100%">
        <tr>
            <td>
                <table>
                    <tr>
                        <td style="vertical-align: text-top;">
                            <div
                                style="background: #ff62003d url(https://cdn0.iconfinder.com/data/icons/commerce-line-1/512/comerce_delivery_shop_business-07-128.png);width: 50px;height: 50px;margin-right: 10px;background-position: center;background-size: 42px;">
                            </div>
                        </td>
                        <td>
                            <strong>Shipping Details</strong><br>
                            {{ $order->shippingAddress->first_name.' '.$order->shippingAddress->last_name }}<br>
                            <strong>Province: </strong>{{ $order->shippingAddress->province }}<br>
                            {{ $order->shippingAddress->city }}, {{ $order->shippingAddress->district }} ({{ $order->shippingAddress->landmark }})
                            <br>
                            <strong>Contact Number:</strong> {{ $order->shippingAddress->contact_number }}
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table><br>
    <h3>Your articles</h3>

    <table width="100%" style="border-collapse: collapse;border-bottom:1px solid #eee;">
        <tr>
            <td class="column-header">Image</td>
            <td width="35%" class="column-header">Article</td>
            <td width="20%" class="column-header">Options</td>
            <td width="25%" class="column-header">Price</td>
            <td width="20%" class="column-header">Total</td>
        </tr>
        @foreach ($order->items as $order_item)
            <tr>
                <td class="row">
                    <img src="{{ $order_item->product->default_media['thumb'] }}" alt="" width="70">
                </td>
                <td class="row"><span style="color:#777;font-size:11px;">{{ $order_item->product->sku }}</span><br>{{ $order_item->product->name }}</td>
                <td class="row">
                  @if(sizeof($order_item->product_attributes))
                    @foreach ($order_item->product_attributes as $key => $attribute )
                      <span><strong>{{ $key }}:</strong> {{ $attribute }}</span><br>
                    @endforeach
                  @else
                    ---
                  @endif
                </td>
                <td class="row">{{ $order_item->quantity }} <span style="color:#777">X</span> Rs. {{ $order_item->product_price }}</td>
                <td class="row">Rs. {{ $order_item->quantity * $order_item->product_price }}</td>
            </tr>
        @endforeach
    </table><br>
    <table width="100%" style="background:#eee;padding:20px;">
        <tr>
            <td>
                <table width="300px" style="float:right">
                    <tr>
                        <td><strong>Sub-total:</strong></td>
                        <td style="text-align:right">Rs. {{ $order->order_total }}</td>
                    </tr>
                    <tr>
                        <td><strong>Shipping fee:</strong></td>
                        <td style="text-align:right">Rs. {{ $order->shipping_cost }}</td>
                    </tr>
                    
                    <tr>
                        <td><strong>Grand total:</strong></td>
                        <td style="text-align:right">Rs. {{ $order->total }}</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    @slot('footer')
        @component('mail::footer')
            © {{ date('Y') }} {{ config('app.name') }}. @lang('All rights reserved.')
        @endcomponent
    @endslot
@endcomponent
