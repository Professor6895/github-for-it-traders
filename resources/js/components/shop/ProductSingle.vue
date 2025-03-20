<template>
  <div class="col-6 col-md-4 col-lg-4 col-xl-3">
    <div class="product product-2">
      <figure class="product-media">
        <!-- <span class="product-label label-circle label-top">Top</span> -->
        <a :href="`/product/${product.slug}`">
          <img
            :src="product.product_image.thumb"
            :alt="
              product.product_image.alt_text
                ? product.product_image.alt_text
                : product.name
            "
            class="product-image"
          />
        </a>

        <div class="product-action-vertical">
          <a
            href="javascript:void"
            class="btn-product-icon btn-wishlist btn-expandable product--add-to-wishlist"
            :data-product-id="product.id"
            ><span>Add to wishlist</span></a
          >

          <a
            href="javascript:void"
            class="btn-product-icon btn-compare btn-expandable product--add-to-compare"
            :data-product-id="product.id"
            ><span>Add to compare</span></a
          >
        </div>
        <!-- End .product-action -->

        <div class="product-action product-action-dark">
          <a
            :href="`/product/${product.slug}`"
            class="btn-product btn-cart"
            title="Add to cart"
            ><span>View Detail</span></a
          >
          <a
            href="javascript:void(0)"
            :data-product-id="product.id"
            class="btn-product btn-quickview"
            title="Quick view"
            ><span>quick view</span></a
          >
        </div>
      </figure>

      <div class="product-body">
        <h3 class="product-title">
          <a :href="`/product/${product.slug}`"> {{ product.name }} </a>
        </h3>
      </div>
      <div class="ratings-container">
        <span
          class="badge badge-success"  style="width: 80px"
          v-if="
            product.discounted_price != product.original_price &&
            product.original_price > 0
          "
          >Save
          {{
            Math.round(
              ((product.original_price - product.discounted_price) /
                product.original_price) *
                100
            )
          }}%</span
        >

        <div class="product-price" style="margin-bottom: 5px !important">
          <span class="new-price"> Rs. {{ product.discounted_price }} </span>

          <div
            class="check-price ml-2"
            v-if="
              product.discountcampaign &&
              product.discountcampaign.campaign.is_active
            "
          >
            <strike
              ><span class="old-price">Rs. {{ product.price }}</span></strike
            >
          </div>
          <div class="check-price ml-2" v-else-if="product.original_price">
            <strike
              ><span class="old-price">
                Rs. {{ product.original_price }}</span
              ></strike
            >
          </div>
        </div>

        <div
          class="star--rating"
          :data-rating="product.average_rating"
        ></div>
        <span class="ratings-text"
          >( {{ product.reviews.length }} Reviews )</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>