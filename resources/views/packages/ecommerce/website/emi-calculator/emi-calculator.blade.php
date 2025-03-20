@extends('packages.core.website.layouts.master')
@push('css')
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
@endpush
@inject('banner_helper', 'Jed\Banners\Helpers\BannerHelper')
@php
$banners = $banner_helper->getBanners(['emi-calculator']);
@endphp
@section('content')
    <section class="mt-3 mb-3 b-g-light">
        <div class="collection-wrapper">
            <div class="custom-container apply-emi-form emi--calculator-page">
                @if (isset($banners['emi-calculator']))
                    <div class="slide-1 mb-2">
                        @foreach ($banners['emi-calculator'] as $banner_image)
                            <div>
                                <div class="slider-banner">
                                    <div class="slider-img">
                                        <img src="{{ $banner_image['banner_image']['full'] }}" class="w-full" alt="Emi calculator - Fatafatsewa" loading="lazy">
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                @endif
                <div class="theme-card p-4">
                    <div class="row">
                        <div class="col-12 search--product--top">
                            <select name="" id="" class="form-control product--selection">
                                <option value="">Select Product</option>
                                @foreach ($products as $product)
                                    <option value="{{ $product->id }}">{{ $product->name }}</option>
                                @endforeach

                            </select>
                        </div>
                        <div class="col-12 emi-calculator--area">
                            <div class="text-center mt-5 mb-5">
                                <h2>Please select product from the list first!!</h2>
                                <div style="margin-top: 40px">
                                <select name="" id="" class=" text-center form-control product--selection" >
                                    <option value="">Select Product</option>
                                    @foreach ($products as $product)
                                        <option value="{{ $product->id }}">{{ $product->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@push('js')
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js" defer></script>
    <script>
        window.onload = function() {
            $('.search--product--top').css('display', 'none')
            $('.product--selection').select2();
            $(document).on('change', '.product--selection', function() {
                var productId = $(this).val();

                if (productId) {
                    $.ajax({
                        url: '/emi-calculator/render',
                        type: 'GET',
                        data: {
                            product_id: productId
                        },
                        success: function(response) {
                            $('.search--product--top').css('display', 'block')
                            $('.select2-container').css('width', '300px')
                            $('.emi-calculator--area').html(response.view);
                        }
                    });
                } else {
                    $('.emi-calculator--area').html(
                        '<div class="text-center mt-5 mb-5"><h2>Please select product from the list first!!</h2></div>'
                    );
                }
            });

            $(document).on('submit', '.emi--calculator-form', function(e) {
                e.preventDefault();
                let form_data = $('.emi--calculator-form').serialize();

                $('.btn-calculate-emi').html("Calculating EMI...");
                $.ajax({
                    url: '/emi-calculator/calculate',
                    type: 'POST',
                    data: form_data,
                    success: function(response) {
                        if (!response.success) {
                            $('.emi--calculator-result').empty().html(
                                '<div class="alert alert-danger">' + response.message + '</div>'
                            );
                        } else {
                            $('.emi--calculator-result').empty()
                            $("#emi-product-price").html(
                                `Rs.  ${response.data.product_price.toFixed(2)}`);
                            $("#emi-finance-amount").html(
                                `Rs.  ${response.data.finance_amount.toFixed(2)}`);
                            $("#emi-per-month").html(
                                `Rs.  ${response.data.emi_per_month.toFixed(2)}`);

                            $('#emi-service-charge').html(
                                `Your one time service charge will be Rs. ${response.data.service_charge.toFixed(2)}`
                            )

                            $('.emi--apply---button').html(
                                `
                                <a href="/product/${response.data.product_slug}/apply-emi" class="">
                                <button type="button" class="mt-3 btn btn-theme-blue btn-sm">
                                    Apply EMI Now
                                </button>
                                </a>
                                `
                            )
                        }
                        $('.btn-calculate-emi').html('Calculate EMI');
                    },
                    error: function(response) {
                        $('.btn-calculate-emi').html('Calculate EMI');
                        $('.emi--calculator-result').empty().html(
                            '<div class="alert alert-danger">' + response.message + '</div>');
                    }
                });
            });
        };
    </script>
@endpush
