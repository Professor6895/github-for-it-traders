/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
Vue.use(Router);
import store from "./store/store";
import { getApplicationModules } from "./utils";
import {systemMixins} from './mixins'
let moduleRoutes = [];
let modules = getApplicationModules();
for (module of modules) {
  if (module !== "core" && module !== "custom") {
    let route = require(`./../../../../${module}/resources/js/src/routes`)
      .default;
    moduleRoutes = moduleRoutes.concat(route);
  }

  if(module === "custom") {
    let route = require(`./../../../../../resources/js/dashboard/routes`)
    .default;
  moduleRoutes = moduleRoutes.concat(route);
  }
}

let allRoutes = routes.concat(moduleRoutes);
const router = new Router({
  mode: "history",
  base: "/",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: allRoutes,
});

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

router.beforeEach((to, from, next) => {
  store.dispatch("settings/fetchSettings", { next, once: true });
  // If auth required, check login. If login fails redirect to login page
 
  if (to.matched.some((m) => m.meta.authRequired)) {
    let userType = (to.meta.rule !== 'public') ? to.meta.rule : 'admin'
    if (!store.state.auth.isUserLoggedIn()) {
      if (to.path === "/") {
        router.push({ path: `/${userType}/login` });
      } else {
        router.push({ path: `/${userType}/login`, query: { to: to.path } });
      }
    }
  } else if (to.meta.noAuth) {
    if (store.state.auth.isUserLoggedIn()) {
      let userType = to.meta.userType ? to.meta.userType : "admin";
      router.push({ path: `/${userType}/dashboard` });
    }
  }
  if(!systemMixins.methods.checkPermission(to.meta.permission)) {
    router.push({ path: `/admin/dashboard` });
  }
  return next();
});

export default router;
