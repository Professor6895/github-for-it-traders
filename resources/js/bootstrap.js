window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = require('popper.js').default;
  window.$ = window.jQuery = require('jquery');
  require('bootstrap');
} catch (e) {
}
const Swal = require('sweetalert2')
window.Swal = Swal;
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

require('./modules/starrating')

window.Vue = require('vue');
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);
Vue.component('shop', require('./components/shop/shop').default)
Vue.component('user-register', require('./components/auth/register').default)
Vue.component('user-login', require('./components/auth/login').default)
Vue.component('website-cart', require('./components/cart/cart').default)
Vue.component('add-shipping-address', require('./components/shippingaddress/AddAddress').default)
Vue.component('add-product-reviews', require('./components/products/AddReview').default)


Vue.component('custom-pc-builder', require('./components/pc-builder/PcBuilder').default)

// Vue.component('apply-emi', require('./components/products/ApplyEmi').default)
// Vue.component('vendor-request-form', require('./components/vendor/VendorRequestForm').default)

const app = new Vue({
  el: '#vue-app'
});



// require('./modules/slick')
// require('./modules/tippy-popper.min')
//require('./modules/tippy-bundle.iife.min')
// require('./modules/popper.min')
// require('./modules/menu')
// require('./modules/jquery.lazy')
// require('./modules/jquery.lazy.ajax')

// require('./modules/timer2')
// require('./modules/feather.min')
// require('./modules/feather-icon')
// require('./modules/bootstrap')
// require('./modules/social_share')
// require('./modules/slider-animat-three')
// require('./modules/modal')
// require('./modules/script')

require('./modules/jquery.min.js')
require('./modules/bootstrap.bundle.min.js')
require('./modules/jquery.hoverIntent.min.js')
require('./modules/jquery.waypoints.min.js')
require('./modules/superfish.min.js')
require('./modules/owl.carousel.min.js')
require('./modules/bootstrap-input-spinner.js')
require('./modules/jquery.plugin.min.js')
require('./modules/jquery.lazy')
require('./modules/jquery.lazy.ajax')
require('./modules/jquery.magnific-popup.min.js')
require('./modules/jquery.countdown.min.js')
require('./modules/main.js')
require('./modules/jquery-ui')


let token = document.head.querySelector('meta[name="csrf-token"]');