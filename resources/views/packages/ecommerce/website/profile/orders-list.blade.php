@extends('packages.core.website.profile.profile-master')

@section('profile-content')
    <div class="dashboard-right checkout-page">
        <div class="dashboard checkout-form p-4">
            <div class="page-title">
                <h4>Your Orders</h4>
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th>Invoice Number</th>
                        <th>Order Date</th>
                        <th>Products</th>
                        <th>Status</th>
                        <th>Payment Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($orders as $order)
                        <tr>
                            <td>
                                <a href="{{ route('website.user-profile.order-detail', ['invoice_number' => $order->invoice_number]) }}">
                                    <i>
                                        #{{ $order->invoice_number }}
                                    </i>
                                </a>
                            </td>
                            <td>{{ $order->created_at }}</td>
                            <td>{{ $order->items->count() }}</td>
                            <td>
                              <strong>{{ $order->order_status }}</strong>
                            </td>
                            <td>{{ ucwords(str_replace('_', ' ', $order->payment_type)) }}</td>
                            <td>
                                <a href="{{ route('website.user-profile.order-detail', ['invoice_number' => $order->invoice_number]) }}"
                                    class="btn btn-primary">View Details</a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>


        </div>
    </div>
@endsection
