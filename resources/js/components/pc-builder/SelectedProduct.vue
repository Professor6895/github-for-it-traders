<template>
  <div class="row">
    <div class="col-12">
      <h5>{{ category }}</h5>
    </div>
    <div class="col-sm-2">
      <img :src="product.product_image.thumb" />
    </div>
    <div class="col-sm-5">
      <h3 class="product-title">
        <a href="">{{ product.name }}</a>
      </h3>
    </div>
    <div class="col-sm-3 text-center">
      <h6>Rs. {{ product.discounted_price }}</h6>
    </div>

    <div class="text-center col-sm-2">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product", "category"],
  mounted() {},
};
</script>