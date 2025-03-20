@extends('packages.core.website.layouts.master')
@section('content')
    <section class="page-content mt-4">
        <div class="dashboard">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <ul class="nav nav-dashboard flex-column mb-3 mb-md-0" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link {{ request()->is('user-profile/details') ? 'active' : '' }}" id="tab-dashboard-link"  href="{{ route('website.user-profile') }}"
                                    role="tab" aria-controls="tab-dashboard" aria-selected="true">Account Info</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link {{ request()->is('user-profile/address-book') ? 'active' : '' }}" id="tab-orders-link"  href="{{ route('website.user-profile.address-book') }}" role="tab"
                                    aria-controls="tab-orders" aria-selected="false">Address Book</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link {{ request()->is('user-profile/orders') ? 'active' : '' }}" id="tab-downloads-link" href="{{ route('website.user-profile.orders-list') }}"
                                    role="tab" aria-controls="tab-downloads" aria-selected="false">My Orders</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link {{ request()->is('user-profile/security') ? 'active' : '' }}" id="tab-address-link"  href="{{ route('website.user-security') }}"
                                    role="tab" aria-controls="tab-address" aria-selected="false">Security </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="tab-account-link" data-toggle="tab" href="#tab-account"
                                    role="tab" aria-controls="tab-account" aria-selected="false">Log Out</a>
                            </li>
                            <form id="website-logout-form" action="{{ route('website.user-logout') }}"
                            method="POST" style="display: none;">
                            @csrf
                        </form>
                        </ul>
                        {{-- <div class="dashboard-left">
                            <div class="collection-mobile-back"><span class="filter-back"><i class="fa fa-angle-left"
                                        aria-hidden="true"></i> back</span></div>
                            <div class="block-content ">
                                <ul>
                                    <li class="{{ request()->is('user-profile/details') ? 'active' : '' }}">
                                        <i class="bi bi-person font-20 mr-1"></i><a
                                            href="{{ route('website.user-profile') }}">Account Info</a>
                                    </li>
                                    <li class="{{ request()->is('user-profile/address-book') ? 'active' : '' }}">
                                        <i class="bi bi-journal-text mr-1 font-20"></i> <a
                                            href="{{ route('website.user-profile.address-book') }}">Address Book</a>
                                    </li>
                                    <li
                                        class="{{ request()->is('user-profile/orders') || request()->is('user-profile/order-detail') ? 'active' : '' }}">
                                        <i class="bi bi-basket font-20 mr-1"></i><a
                                            href="{{ route('website.user-profile.orders-list') }}">My Orders</a>
                                    </li>
                                    <li class="{{ request()->is('user-profile/security') ? 'active' : '' }}">
                                        <i class="bi bi-key font-20 mr-1"></i>
                                        <a href="{{ route('website.user-security') }}">Change Password</a>
                                    </li>
                                    <li>
                                        <i class="bi bi-box-arrow-left mr-1 font-20"></i>
                                        <a href="javascript:void(0)"
                                            onclick="event.preventDefault();
                                        document.getElementById('website-logout-form').submit();">Log
                                            Out</a>
                                    </li>
                                    <form id="website-logout-form" action="{{ route('website.user-logout') }}"
                                        method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </ul>
                            </div>
                        </div> --}}
                    </div>
                    <div class="col-lg-9">
                        @yield('profile-content')
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
{{-- @push('js')
    <script>
        $(document).on('click', '.upload--avatar-button', function() {
            $('.user--avatar-file').trigger('click')
        })

        $(document).on('change', '.user--avatar-file', function() {
            $('.user--avatar-form').submit();
        })

    </script>
@endpush --}}
