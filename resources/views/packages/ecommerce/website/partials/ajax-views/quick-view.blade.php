 @inject('product_helper', 'Jed\Ecommerce\App\Helpers\ProductHelper')

 @php
     $default_media = $product->default_media;
     $is_campaign_active = $product->discountcampaign && $product->discountcampaign->campaign->is_active;
     $org_price = $product->original_price ? $product->original_price : $product->price;
 @endphp
 {{-- 
<div class="row">
    <div class="col-lg-6 col-xs-12">
        <div class="quick-view-img">
            <div><img src="{{ $default_media['full'] }}" alt="{{ $product->name }}" class="img-fluid bg-img" loading="lazy"></div>
        </div>
    </div>
    <div class="col-lg-6 rtl-text">
        <div class="product-right">
            <div class="pro-group">
                <h2>
                    {{ $product->name }}
                </h2>
                <ul class="pro-price mb-2">
                    @if ($product->price == 0)
                        <li>Coming Soon</li>
                    @else

                        
                    <li>Rs. {{ $product->discounted_price }}</li>
                    @endif
                    @if ($is_campaign_active)
                            <li><span>Rs. {{ ($product->original_price) ? $product->original_price : $product->price }}</span></li>
                            <li>{{ round((($org_price - $product->discounted_price) / $org_price) * 100, 2) }}%
                             off</li>
                        @elseif ($product->original_price)
                            <li><span>Rs. {{ $product->original_price }}</span></li>
                            <li>{{ round((($product->original_price - $product->discounted_price) / $product->original_price) * 100, 2) }}%
                                off</li>
                        @endif
                </ul>
                <ul class="best-seller">
                    <li>

                        {{ views($product)->count() }} active view this
                    </li>
                </ul>
            </div>
            <div class="pro-group">
                <p class="font-16"><strong>SKU: </strong>{{ $product->sku }} </p>
                @if ($product->brand_id)
                    <p class="font-16 mt-2"><strong>Brand: </strong>{{ $product->brand->name }} </p>
                @endif
                <p class="font-16 mt-2"><strong>Available Stock: </strong>{{ $product->quantity }} </p>
            </div>
        
            <form class="form--add-to-cart">
                <div id="selectSize" class="pro-group addeffect-section product-description border-product mb-0">
                    @if (sizeof($product->variation_combination))
                        @foreach ($product->variation_combination as $attribute => $values)
                            <h6 class="product-title size-text">{{ $attribute }}<span></h6>
                            <div class="size-box product--variants">
                                @foreach ($values as $key => $value)
                                    <input type="radio" @if ($key === 0) checked @endif name="product_attributes[{{ $attribute }}]"
                                        value="{{ $value }}" id="{{ $attribute }}-{{ $value }}"
                                        class="d-none">
                                    <label
                                        class="product--variant-handle variant-{{ $attribute }} {{ $key === 0 ? 'active' : '' }}"
                                        data-variant="{{ $attribute }}"
                                        for="{{ $attribute }}-{{ $value }}">{{ $value }}
                                    </label>
                                @endforeach
                            </div>
                        @endforeach
                    @endif
                    <input type="hidden" name="product_id" value="{{ $product->id }}">

                    <h6 class="product-title">quantity</h6>
                    <div class="qty-box">
                        <div class="input-group">
                            <button type="button" class="qty-minus"></button>
                            <input class="qty-adj form-control" type="number" name="quantity" value="1" />
                            <button class="qty-plus" type="button"></button>
                        </div>
                    </div>
                    <div class="product-buttons">
                        @if ($product->price != 0)
                        <a href="javascript:void(0)" id="cartEffect"
                            class="btn cart-btn btn-normal tooltip-top btn--add-to-cart"
                            data-tippy-content="Add to cart">
                            <i class="bi bi-cart-plus"></i>
                            add to cart
                        </a>
                        @endif
                        <a href="javascript:void(0)" class="btn btn-normal add-to-wish tooltip-top"
                            data-tippy-content="Add to wishlist">
                            <i class="bi bi-heart" aria-hidden="true"></i>
                        </a>
                        <a href="{{ route('website.product-detail', $product->slug) }}" class="btn btn-normal tooltip-top"
                            data-tippy-content="view detail">
                            view detail
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div> --}}

 <div class="container quickView-container">
     <div id="product--variations--handle" data-variations="{{ json_encode($product->variants) }}"></div>
     <div class="quickView-content">
         <form class="form--add-to-cart">

             <div class="row">
                 <div class="col-lg-6 col-md-6">
                     <div class="row">
                         <div class="product-right">
                             <img src="{{ $default_media['full'] }}" alt="">
                         </div>
                     </div>
                 </div>

                 <div class="col-lg-5 col-md-6">
                     <h2 class="product-title">{{ $product->name }}</h2>

                     <h3 class="product-price product-detail--price">Rs. {{ $product->discounted_price }}

                         @if ($is_campaign_active)
                             <strike style="color: gray; margin-left:10px; font-size: 16px"><span>Rs.
                                     {{ $product->original_price ? $product->original_price : $product->price }}</span></strike>
                             <small>{{ round((($org_price - $product->discounted_price) / $org_price) * 100, 2) }}%
                                 off</small>
                         @elseif ($product->original_price)
                             <strike style="color: gray; margin-left:10px; font-size: 16px"><span>Rs.
                                     {{ $product->original_price }}</span></strike>
                             <span
                                 style="color: rgb(6, 83, 19); margin-left:10px; font-size: 18px">{{ round((($product->original_price - $product->discounted_price) / $product->original_price) * 100, 2) }}%
                                 off</span>
                         @endif
                     </h3>

                     <div class="ratings-container">
                         <div class="star--rating mb-1 mt-1" data-rating="{{ $product->average_rating }}"></div>
                         <a class="ratings-text" href="#product-review-link" id="review-link">(
                             {{ $product->reviews->count() }} Reviews )</a>
                     </div><!-- End .rating-container -->

                     {{ views($product)->count() }} users viewd this
                     <input type="hidden" name="product_id" value="{{ $product->id }}">
                     @if (sizeof($product->variation_combination))
                         @foreach ($product->variation_combination as $attribute => $values)
                             <h6 class="product-title size-text">{{ $attribute }}<span></h6>
                             <div class="size-box product--variants">
                                 @foreach ($values as $key => $value)
                                     <input type="radio" @if ($key === 0) checked @endif
                                         name="product_attributes[{{ $attribute }}]" value="{{ $value }}"
                                         id="{{ $attribute }}-{{ $value }}" class="d-none">
                                     <label
                                         class="product--variant-handle variant-{{ $attribute }} {{ $key === 0 ? 'active' : '' }}"
                                                        data-product-id="{{ $product->id }}"
                                                        data-variant="{{ $attribute }}" data-variant-value="{{ $value }}" 
                                         for="{{ $attribute }}-{{ $value }}">{{ $value }}
                                     </label>
                                 @endforeach
                             </div>
                         @endforeach
                     @endif

                     <div class="details-filter-row details-row-size">
                         <label for="qty">Qty:</label>
                         <div class="product-details-quantity">
                             <input type="number" id="quantity"  name="quantity" class="form-control" value="1" min="1"
                                 max="10" step="1" data-decimals="0" required>
                         </div><!-- End .product-details-quantity -->
                     </div><!-- End .details-filter-row -->

                     <div class="product-details-action">
                         <div class="details-action-wrapper">
                             <a href="javascript:void(0)" data-product-id="{{ $product->id }}"
                                 class="btn-product btn-wishlist product--add-to-wishlist" title="Wishlist"><span>Add to
                                     Wishlist</span></a>
                             <a href="#" class="btn-product btn-compare" title="Compare"><span>Add to
                                     Compare</span></a>
                         </div><!-- End .details-action-wrapper -->
                         <a href="#" class="btn-product btn-cart btn--add-to-cart"><span>add to cart</span></a>
                     </div>
                 </div>

             </div>
         </form>
     </div>
 </div>
