@extends('packages.core.website.layouts.master')

@section('content')
    <div class="custom-container">
        <div class="row" style="justify-content: center !important">
            <div class="col-sm-8 mt-4 mb-4">
                <div class="card">
                    @if (isset($order_item_detail))
                        <div class="text-center mt-4 mb-4 p-4">
                            <img src="{{ $order_item_detail->product->default_media['thumb'] }}" alt="">
                            <h3 class="mt-2">{{ $order_item_detail->product->name }}</h3>
                            <p><strong>Order Date: </strong> {{ $order_item_detail->order->created_at->diffForHumans() }}
                            <p><strong>Owned By: </strong> {{ $order_item_detail->order->user->name }} </p>
                            <div class="row" style="justify-content: center !important">
                                <div class="mt-4 warranty-description col-sm-7 " style="text-align: left">
                                    <h4><strong>Warranty Description:</strong></h4>
                                    <div class="mt-3 p-3" style="border: 1px solid gray; border-radius: 10px;">
                                        {!! $order_item_detail->product->warranty_description !!}
                                    </div>
                                </div>
                            </div>
                            <a href="/warranty-check" class="btn mt-3 btn-normal tooltip-top">Check Another</a>
                        </div>
                    @else
                        <form method="GET">
                            <div class="col-sm-6 text-center mt-4 mb-4" style="margin: auto;">
                                <h1 class="font-40 font-light">Check Your Service and Support Coverage</h1>
                                <p class="font-25 mt-3 font-extra-light">
                                    Review the warranty status and eligibility of your product.
                                </p>
                                <br><br>
                                <p class="font-18 mb-1">Enter Serial Number</p>
                                <input type="text" name="serial" class="form-control" style="height: 60px">
                                <button type="submit" class="btn mt-3 btn-normal tooltip-top">Continue</button>
                            </div>
                        </form>
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection
@push('css')
    
<style>
    .warranty-description ul,
    ol li {
        display: list-item !important;
        list-style-type: disc !important;
    }
</style>

@endpush