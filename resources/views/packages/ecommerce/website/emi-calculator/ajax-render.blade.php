@php
$default_media = $product->default_media;
@endphp
<div class="row">
    <div class="col-sm-3">
        <img class="mt-3 img-fluid" src="{{ $default_media['full'] }}" alt="">
    </div>
    <div class="col-sm-9 mt-4 pl-3">

        <div class="row">
            <div class="col-12">
                <h1 class="font-20">EMI calculator for <a href="{{ route('website.product-detail', $product->slug) }}">{{ $product->name }}</a></h1>
            </div>
            <div class="col-sm-8 mb-3">
                <div class="card mt-3">
                    <div class="card-body">
                        <form class="emi--calculator-form">
                            @csrf
                            <input type="hidden" name="product_id" value="{{ $product->id }}">
                            <div class="form-group">
                                <select name="bank_id" class="form-control" required>
                                    <option value="">Select Bank</option>
                                    @foreach($banks as $bank)
                                        <option value="{{ $bank->id }}">{{ $bank->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                            @if (count($product->variants))
                                <div class="form-group row">
                                    <label for="">Which Variant?</label>
                                    @foreach ($product->variants as $variant)
                                        <div class="col-sm-3" v-for="variant in productDetail.variants">
                                            <input type="radio" name="product_variant" required
                                                value="{{ json_encode($variant->attributes) }}"
                                                id="product-variant-{{ $variant->id }}" />
                                            <label for="product-variant-{{ $variant->id }}">
                                                <div class="product--variant">
                                                    @foreach ($variant->attributes as $key => $attr)
                                                        <p>{{ $key }} : {{ $attr }}</p>
                                                    @endforeach
                                                </div>
                                            </label>
                                        </div>
                                    @endforeach
                                </div>
                            @endif
        
                            <div class="form-group row">
                                <div class="col-sm-6 mt-3">
                                    <label for="">Emi Mode (month)</label>
                                    <select name="emi_mode" class="form-control field-emi-mode" required
                                        v-validate="'required'">
                                        <option value="">Select EMI Mode</option>
                                        <option value="6">6</option>
                                        <option value="9">9</option>
                                        <option value="12">12</option>
                                        <option value="18">18</option>
                                    </select>
                                </div>
                                <div class="col-sm-6 mt-3">
                                    <label for="">Down Payment</label>
                                    <input type="number" class="form-control" name="down_payment" />
                                </div>
                            </div>
        
                            <div class="form-group">
                                <button type="submit" class="btn cart-btn btn-normal btn-sm btn-calculate-emi">
                                    Calculate EMI
                                </button>
                            </div>
        
                            <div class="form-group mt-3 emi--calculator-result">
        
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="emi-calculator-result p-3">
                    <table class="table emi--table">
                        <tr>
                            <td>Product's Price</td>
                            <td id="emi-product-price">Rs. 0</td>
                        </tr>
                        <tr>
                            <td>Finance Amount</td>
                            <td id="emi-finance-amount">Rs. 0</td>
                        </tr>
                        <tr>
                            <td>EMI Per Month</td>
                            <td id="emi-per-month">Rs. 0</td>
                        </tr>

                        <tr>
                            <td colspan="2" class="text-center" id="emi-service-charge">
                                This is test description of my prodct.
                            </td>
                        </tr>
                    </table>

                    <div class="text-center emi--apply---button">
                        <button type="button" class="mb-2 btn btn-theme-blue btn-normal btn-sm">
                            Apply EMI Now
                    </button>
                </div>
                </div>
            </div>
        </div>
      
    </div>
</div>
