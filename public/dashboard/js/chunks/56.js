(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/vendors/auth/Login.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/vendors/auth/Login.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      email: "",
      password: "",
      checkbox_remember_me: false
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.email != "" && this.password != "";
    }
  },
  methods: {
    checkLogin: function checkLogin() {
      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {
        // Close animation if passed as payload
        // this.$vs.loading.close()
        this.$vs.notify({
          title: "Login Attempt",
          text: "You are already logged in!",
          iconPack: "feather",
          icon: "icon-alert-circle",
          color: "warning"
        });
        return false;
      }

      return true;
    },
    loginJWT: function loginJWT() {
      var _this = this;

      if (!this.checkLogin()) return; // Loading

      this.$vs.loading();
      var payload = {
        checkbox_remember_me: this.checkbox_remember_me,
        userDetails: {
          email: this.email,
          password: this.password,
          authType: "vendor"
        }
      };
      this.$store.dispatch("auth/loginJWT", payload).then(function (res) {
        _this.$vs.loading.close();

        _this.$vs.notify({
          title: "Login Success",
          text: "You are successfully logged in!",
          color: "success"
        });

        _this.$store.dispatch("updateUserRole", {
          aclChangeRole: _this.$acl.change,
          userRole: res.data.userData.userRole
        }).then(function () {
          var new_route = "/".concat(res.data.userData.userRole, "/dashboard");

          _this.$router.push(_this.$router.currentRoute.query.to || new_route);
        });
      })["catch"](function (error) {
        _this.$vs.loading.close();

        _this.$vs.notify({
          title: "Error",
          text: error.message,
          iconPack: "feather",
          icon: "icon-alert-circle",
          color: "danger"
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/vendors/auth/Login.vue?vue&type=template&id=2f2f658b&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/vendors/auth/Login.vue?vue&type=template&id=2f2f658b& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "h-screen flex w-full bg-img vx-row no-gutter items-center justify-center",
    attrs: {
      id: "page-login"
    }
  }, [_c("div", {
    staticClass: "vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"
  }, [_c("vx-card", [_c("div", {
    staticClass: "full-page-bg-color",
    attrs: {
      slot: "no-body"
    },
    slot: "no-body"
  }, [_c("div", {
    staticClass: "vx-row no-gutter justify-center items-center"
  }, [_c("div", {
    staticClass: "vx-col hidden lg:block lg:w-1/2"
  }, [_c("img", {
    staticClass: "mx-auto",
    attrs: {
      src: __webpack_require__(/*! @assets/images/pages/login.png */ "./packages/core/resources/assets/images/pages/login.png"),
      alt: "login"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"
  }, [_c("div", {
    staticClass: "px-8 pt-8 pb-8"
  }, [_c("div", {
    staticClass: "vx-card__title mb-4"
  }, [_c("h4", {
    staticClass: "mb-4"
  }, [_vm._v("Vendor Login")]), _vm._v(" "), _c("p", [_vm._v("Welcome back, please login to your account.")])]), _vm._v(" "), _c("div", [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|email|min:3",
      expression: "'required|email|min:3'"
    }],
    staticClass: "w-full",
    attrs: {
      "data-vv-validate-on": "blur",
      name: "email",
      "icon-no-border": "",
      icon: "icon icon-user",
      "icon-pack": "feather",
      "label-placeholder": "Email"
    },
    model: {
      value: _vm.email,
      callback: function callback($$v) {
        _vm.email = $$v;
      },
      expression: "email"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("email")))]), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|min:6",
      expression: "'required|min:6'"
    }],
    staticClass: "w-full mt-6",
    attrs: {
      "data-vv-validate-on": "blur",
      type: "password",
      name: "password",
      "icon-no-border": "",
      icon: "icon icon-lock",
      "icon-pack": "feather",
      "label-placeholder": "Password"
    },
    model: {
      value: _vm.password,
      callback: function callback($$v) {
        _vm.password = $$v;
      },
      expression: "password"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("password")))]), _vm._v(" "), _c("div", {
    staticClass: "flex flex-wrap justify-between my-5"
  }, [_c("vs-checkbox", {
    staticClass: "mb-3",
    model: {
      value: _vm.checkbox_remember_me,
      callback: function callback($$v) {
        _vm.checkbox_remember_me = $$v;
      },
      expression: "checkbox_remember_me"
    }
  }, [_vm._v("Remember Me")]), _vm._v(" "), _c("router-link", {
    attrs: {
      to: "/pages/forgot-password"
    }
  }, [_vm._v("Forgot Password?")])], 1), _vm._v(" "), _c("div", {
    staticClass: "text-right mb-3"
  }, [_c("vs-button", {
    attrs: {
      disabled: !_vm.validateForm
    },
    on: {
      click: _vm.loginJWT
    }
  }, [_vm._v("Login")])], 1)], 1)])])])])])], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/core/resources/assets/images/pages/login.png":
/*!***************************************************************!*\
  !*** ./packages/core/resources/assets/images/pages/login.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/login.png?d814adb752d2d047b8292d6de603025f";

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/vendors/auth/Login.vue":
/*!**************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/vendors/auth/Login.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_2f2f658b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=2f2f658b& */ "./packages/ecommerce/resources/js/src/views/vendors/auth/Login.vue?vue&type=template&id=2f2f658b&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./packages/ecommerce/resources/js/src/views/vendors/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_2f2f658b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_2f2f658b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ecommerce/resources/js/src/views/vendors/auth/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/vendors/auth/Login.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/vendors/auth/Login.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/vendors/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/vendors/auth/Login.vue?vue&type=template&id=2f2f658b&":
/*!*********************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/vendors/auth/Login.vue?vue&type=template&id=2f2f658b& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_2f2f658b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=2f2f658b& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/vendors/auth/Login.vue?vue&type=template&id=2f2f658b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_2f2f658b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_2f2f658b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);