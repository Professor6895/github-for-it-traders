@extends('packages.core.website.profile.profile-master')

@inject('address_helper', 'Jed\Ecommerce\App\Helpers\AddressHelper')
@php
$shipping_addresses = $address_helper->getUserShippingAddresses();
@endphp
@section('profile-content')
    <div class="dashboard-right checkout-page">
        <div class="dashboard checkout-form p-4">
            <div class="page-title">
                <h3>Your address book</h3>
            </div>

            @foreach ($shipping_addresses as $shipping_address)
                <div class="shipping--address mb-2">
                    <p class="font-20"><strong>{{ $shipping_address->first_name }}
                            {{ $shipping_address->last_name }} &nbsp;&nbsp;&nbsp;
                            ({{ $shipping_address->contact_number }})</strong>  </p>
                            <p>{{ $shipping_address->provinceDetail->name }},
                                {{ $shipping_address->district . ' ' . $shipping_address->country }} &nbsp;
                                &nbsp;&nbsp;&nbsp; <strong>City: </strong>{{ $shipping_address->city }}</p>
                            <p><strong>Landmark: </strong>{{ $shipping_address->landmark }}</p>
                </div>
            @endforeach

            @if ($shipping_addresses->count() < 3)
                <div class="add-shipping-address mt-4">
                    <add-shipping-address  :shipping-addresses-count="{{ $shipping_addresses->count() }}"></add-shipping-address>
                </div>
            @endif
        </div>
    </div>
@endsection
