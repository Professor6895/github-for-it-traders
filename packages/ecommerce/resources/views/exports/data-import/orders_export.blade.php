<table>
    <thead>
        <tr>
            <th>Invoice Number</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Payment Type</th>
            <th>Shipping Cost</th>
            <th>Discounts</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Order Date</th>
            <th>Shipping Address</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($orders as $order)
            @php
                $user = $order->user;
                $address = $order->shippingAddress;
            @endphp
            <tr>
                <td>{{ $order->invoice_number }}</td>
                <td>{{ $user->name }}</td>
                <td>
                    {{ $user->email }}
                </td>
                <td>{{ $user->contact_number }}</td>
                <td>{{ $order->payment_type }}</td>
                <td>{{ $order->shiping_cost }}</td>
                <td>{{ $order->discounts_total }}</td>
                <td>{{ $order->total }}</td>
                <td>
                    @switch($order->status)
                        @case(0)
                            Draft
                        @break

                        @case(1)
                            Placed
                        @break

                        @case(2)
                            Confirmed
                        @break

                        @case(3)
                            Dispatched
                        @break

                        @case(4)
                            Completed
                        @break

                        @case(5)
                            Canceled
                        @break

                        @default
                    @endswitch
                </td>
                <td>{{ $order->created_at }}</td>
                <td>
                    @if ($address)
                        <strong>Name: </strong>{{ $address->full_name }}, <strong>Contact: </strong>
                        {{ $address->contact }}, Address: {{ $address->district }} {{ $address->country }}, City:
                        {{ $address->city }} ({{ $address->landmark }})
                    @else
                        ----
                    @endif
                </td>
            </tr>

            @foreach ($order->items as $order_item)
                <tr>
                    <td></td>
                    <td>{{ $order_item->product_name }}</td>
                    <td>SKU: {{ $order_item->product_sku }}</td>
                    <td>Price: Rs. {{ $order_item->product_price }}</td>
                    <td>Quantity: {{ $order_item->quantity }}</td>
                    <td>
                        @foreach ($order_item->product_attributes as $key => $attr)
                            {{ $key }}: {{ $attr }},                             
                        @endforeach
                    </td>
                </tr>
            @endforeach
        @endforeach
    </tbody>
</table>
