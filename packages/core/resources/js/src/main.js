/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/

import Vue from "vue";
import App from "./App.vue";
import { getStorageItem } from "./utils";

// Vuesax Component Framework
import Vuesax from "vuesax";
Vue.use(Vuesax);

//CUSTOM CSS
import "@assets/css/style.scss";

import axios from "./axios.js";
import VueAxios from "vue-axios";
Vue.prototype.$http = axios;

Vue.use(VueAxios, axios);

Vue.axios.interceptors.request.use((config) => {
  //  Enable this when you have a backend that you authenticate against
  // console.log("window.localStorage.getItem('token')", window.localStorage.getItem('token'))
  let access_token = getStorageItem("accessToken");
  if (access_token && !config.headers.common.hasOwnProperty("Authorization")) {
    // console.log('in if set request header')
    config.headers.common.Authorization =
      "Bearer " + getStorageItem("accessToken");
  }
  return config;
});

// API Calls
import "./http/requests";

// Theme Configurations
import "../themeConfig.js";

// Auth0 Plugin
import AuthPlugin from "./plugins/auth";
Vue.use(AuthPlugin);

// ACL
import acl from "./acl/acl";

// Globally Registered Components
import "./globalComponents.js";

// Vue Router
import router from "./router";

// Vuex Store
import store from "./store/store";

// i18n
import i18n from "./i18n/i18n";

// Vuesax Admin Filters
import "./filters/filters";

// Clipboard
// import VueClipboard from "vue-clipboard2";
// Vue.use(VueClipboard);

// VeeValidate
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

//QUILL EDITOR
import QEditor from "@/layouts/components/QuillRichEditor";
Vue.component("q-editor", QEditor);
//MIXINS
import { systemMixins } from "./mixins";
Vue.mixin(systemMixins);

// Google Maps
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    // Add your API key here
    key: "AIzaSyB4DDathvvwuwlwnUu7F4Sow3oU22y5T1Y",
    libraries: "places", // This is required if you use the Auto complete plug-in
  },
});

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from "vue2-hammer";
Vue.use(VueHammer);


// Feather font icon
require("@assets/css/iconfont.css");

Vue.config.productionTip = false;

//GLOBAL COMPONENT
Vue.component('pageLoader', 
    () => import('./layouts/components/PageLoader')
)
Vue.config.silent = true
new Vue({
  store,
  router,
  i18n,
  acl,
  render: (h) => h(App),
}).$mount("#app");
