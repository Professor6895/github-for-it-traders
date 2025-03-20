@extends('packages.core.website.layouts.master')

@section('content')
    <section class="section-big-py-space mt-2">
        <div class="custom-container">
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="theme-card p-4">
                        <h2 class="sell-title text-center mb-3"> You're just a few steps away! </h2>
                        <hr>
                        <div class="row">
                            <div class="col-6 sell-block text-center mt-2"> <img alt="customers" class="img-fluid"
                                    width="90px " src="{{ asset('website/images/vendor-products.gif') }}">
                                <h4 class="font-22 mt-2">List Product</h4>
                                <p class="font-20 mt-1">List your products with ease</p>
                            </div>
                            <div class="col-6 sell-block text-center mt-2"> <img alt="ship" class="img-fluid" width="90px "
                                    src="{{ asset('website/images/vendor-shopping.gif') }}">
                                <h4 class="font-22 mt-2">Receive Order</h4>
                                <p class="font-20 mt-1">Get orders from all over Nepal</p>
                            </div>
                            <div class="col-6 sell-block text-center mt-2"> <img alt="account" class="img-fluid"
                                    width="90px " src="{{ asset('website/images/vendor-truck.gif') }}">
                                <h4 class="font-22 mt-2">Pickup And Deliver</h4>
                                <p class="font-20 mt-1">Hassle free pickup and drop service</p>
                            </div>
                            <div class="col-6 sell-block text-center mt-2"> <img alt="account" class="img-fluid"
                                    width="90px " src="{{ asset('website/images/vendor-savings.gif') }} ">
                                <h4 class="font-22 mt-2"> Earn &amp; Grow</h4>
                                <p class="font-20 mt-1">Grow your business with Us</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="theme-card p-4">
                        <h3 class="text-center mb-3">Fill the form below!</h3>
                        <vendor-request-form></vendor-request-form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
