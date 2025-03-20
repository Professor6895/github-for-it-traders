<template>
  <div>
      <banner-images></banner-images>
      <vendor-categories> </vendor-categories>
  </div>
</template>

<script>
import BannerImages from './BannerImages.vue'
import VendorCategories from './VendorCategories.vue'
export default {
  components: {
    BannerImages,
    VendorCategories
  },
  mounted() {
    console.log("I AM KMOUNTE")
  }
}
</script>
