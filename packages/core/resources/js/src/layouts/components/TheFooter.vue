<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template functional>
  <footer class="the-footer flex-wrap justify-between" :class="classes">
    <p>
      <span>COPYRIGHT &copy;</span>
      <span>{{ new Date().getFullYear() }}</span>
      <a href="#" target="_blank" rel="nofollow">JWN - CMS</a>
      <span class="hidden sm:inline-block">, All rights Reserved</span>
    </p>
    <span class="md:flex hidden items-center">
      <span>Hand-crafted & Made with</span>
      <feather-icon icon="HeartIcon" svgClasses="stroke-current text-danger w-6 h-6" class="ml-2 mr-2" />
      <span> by <a href="https://jeevandhakal.com.np" target="_blank">Jeevan Dhakal</a></span>
    </span>
  </footer>
</template>

<script>
export default {
  name: "the-footer",
  props: {
    classes: {
      type: String
    }
  },
  inject: {}
};
</script>
