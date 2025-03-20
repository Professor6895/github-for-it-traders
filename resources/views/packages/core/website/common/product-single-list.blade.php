 @php
     $all_medias = $product->getMedia();
     $default_image = $product->default_media;
     $is_campaign_active = $product->discountcampaign && $product->discountcampaign->campaign->is_active;
     $org_price = $product->original_price ? $product->original_price : $product->price;
 @endphp

 <div class="product product-2">
     <figure class="product-media">
         @if ($product->quantity < 1)
             <span class="product-label  label-sale">Out of Stock</span>
         @endif
         @if ($is_campaign_active)
             <span class="product-label label-circle label-sale">Sale</span>
         @endif
         <a href="{{ route('website.product-detail', $product->slug) }}">
             <img src="{{ $default_image['thumb'] }}" alt="{{ $default_image['alt_text'] ?? $product->name }}"
                 class="product-image">
         </a>

         <div class="product-action-vertical">
             <a href="javascript:void" class="btn-product-icon btn-wishlist btn-expandable product--add-to-wishlist"
                 data-product-id="{{ $product->id }}"><span>add to
                     wishlist</span></a>

             <a href="javascript:void" class="btn-product-icon btn-compare btn-expandable product--add-to-compare"
                 data-product-id="{{ $product->id }}"><span>Add to
                     compare</span></a>
         </div><!-- End .product-action -->

         <div class="product-action product-action-dark">
             <a href="{{ route('website.product-detail', $product->slug) }}" class="btn-product btn-cart"
                 title="Add to cart"><span>View Details</span></a>
             <a href="javascript:void(0)" data-product-id="{{ $product->id }}" class="btn-product btn-quickview"
                 title="Quick view"><span>quick
                     view</span></a>
         </div><!-- End .product-action -->
     </figure><!-- End .product-media -->

     <div class="product-body">
         <h3 class="product-title"><a href="{{ route('website.product-detail', $product->slug) }}"> {{ Str::limit($product->name, 2555) }}
             </a></h3>
         </div><!-- End .product-body -->
     <div class="ratings-container">
         @if ($product->discounted_price != $product->original_price && $product->original_price > 0)
             <span class="badge badge-success" style="width: 80px">Save
                 {{ round((($product->original_price - $product->discounted_price) / $product->original_price) * 100) }}%</span>
         @endif
         <div class="product-price" style="margin-bottom: 5px !important">
             <span class="new-price">Rs. @convert($product->discounted_price)</span>
             @if ($product->original_price)
                 <div class="check-price ml-2">
                     <strike><span class="old-price">Rs. @convert($product->original_price)</span></strike>
                 </div>
             @endif
         </div>
         <div class="star--rating" data-rating="{{ $product->average_rating }}"></div>
         <span class="ratings-text">( {{ $product->reviews->count() }} Reviews )</span>
     </div><!-- End .rating-container -->
 </div>
