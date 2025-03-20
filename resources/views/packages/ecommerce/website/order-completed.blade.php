@extends('packages.core.website.layouts.master')

@section('content')
    <section class="cart-section section-big-py-space b-g-light mt-4">
        <div class="custom-containe mt-5 mb-5 pt-5 pb-5">
            <div class="row">
                <div class="col-sm-12 text-center">
                  <h2 class="text-theme">Congratulations!!</h2>
                  <br> <br> 
                  <h3 style="font-size: 40px">Your order has been placed successfully</h3>
                  <p class="font-20 mt-3">We will get back to you as soon as possible</p>
                </div>
            </div>
            <div class="row  text-center mt-4">
                <div class="col-12"><a href="{{ route('website.user-profile.order-detail', ['invoice_number' => $order->invoice_number]) }}" class="btn btn-normal">View Order Detail</a>
                </div>
            </div>
        </div>
    </section>
@endsection