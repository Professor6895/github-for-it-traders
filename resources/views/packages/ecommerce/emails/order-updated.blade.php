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

    <br><br>
    <p>{{ $order_message }}</p>

    <h3>Your Ordered Items</h3>

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
                <td class="row"><span
                        style="color:#777;font-size:11px;">{{ $order_item->product->sku }}</span><br>{{ $order_item->product->name }}
                </td>
                <td class="row">
                    @if (sizeof($order_item->product_attributes))
                        @foreach ($order_item->product_attributes as $key => $attribute)
                            <span><strong>{{ $key }}:</strong> {{ $attribute }}</span><br>
                        @endforeach
                    @else
                        ---
                    @endif
                </td>
                <td class="row">{{ $order_item->quantity }} <span style="color:#777">X</span> Rs.
                    {{ $order_item->product_price }}</td>
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

    @component('mail::button', ['url' => '', 'color' => 'success'])
        View Order Detail
    @endcomponent


    @slot('footer')
        @component('mail::footer')
            © {{ date('Y') }} {{ config('app.name') }}. @lang('All rights reserved.')
        @endcomponent
    @endslot
@endcomponent
