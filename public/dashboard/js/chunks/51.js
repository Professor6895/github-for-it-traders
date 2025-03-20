(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/views/pages/NotAuthorized.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/views/pages/NotAuthorized.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    if (!this.$store.state.auth.isUserLoggedIn()) {
      window.location = "/";
    }
  },
  methods: {
    goToHome: function goToHome() {
      var role = this.$store.state.AppActiveUser.userRole;
      var url = "/".concat(role, "/dashboard");
      this.$router.push({
        path: url
      })["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/views/pages/NotAuthorized.vue?vue&type=template&id=4cbf8e52&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/views/pages/NotAuthorized.vue?vue&type=template&id=4cbf8e52& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "h-screen flex w-full bg-img"
  }, [_c("div", {
    staticClass: "vx-col flex items-center justify-center flex-col sm:w-1/2 md:w-3/5 lg:w-3/4 xl:w-1/2 mx-auto text-center"
  }, [_c("img", {
    staticClass: "mx-auto mb-4",
    attrs: {
      src: __webpack_require__(/*! @assets/images/pages/not-authorized.png */ "./packages/core/resources/assets/images/pages/not-authorized.png"),
      alt: "graphic-not-authorized"
    }
  }), _vm._v(" "), _c("h1", {
    staticClass: "sm:mx-0 mx-4 sm:mb-12 mb-8 text-5xl d-theme-heading-color"
  }, [_vm._v("You are not authorized!")]), _vm._v(" "), _c("p", {
    staticClass: "sm:mx-0 mx-4 sm:mb-12 mb-8 d-theme-text-inverse"
  }, [_vm._v("paraphonic unassessable foramination Caulopteris worral Spirophyton encrimson esparcet aggerate chondrule restate whistler shallopy biosystematy area bertram plotting unstarting quarterstaff.")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      size: "large"
    },
    on: {
      click: _vm.goToHome
    }
  }, [_vm._v("Back to Home")])], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/core/resources/assets/images/pages/not-authorized.png":
/*!************************************************************************!*\
  !*** ./packages/core/resources/assets/images/pages/not-authorized.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/not-authorized.png?388ffe4626a1621c661f5de9ceb2463d";

/***/ }),

/***/ "./packages/core/resources/js/src/views/pages/NotAuthorized.vue":
/*!**********************************************************************!*\
  !*** ./packages/core/resources/js/src/views/pages/NotAuthorized.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotAuthorized_vue_vue_type_template_id_4cbf8e52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotAuthorized.vue?vue&type=template&id=4cbf8e52& */ "./packages/core/resources/js/src/views/pages/NotAuthorized.vue?vue&type=template&id=4cbf8e52&");
/* harmony import */ var _NotAuthorized_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotAuthorized.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/views/pages/NotAuthorized.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotAuthorized_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotAuthorized_vue_vue_type_template_id_4cbf8e52___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotAuthorized_vue_vue_type_template_id_4cbf8e52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/views/pages/NotAuthorized.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/views/pages/NotAuthorized.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./packages/core/resources/js/src/views/pages/NotAuthorized.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NotAuthorized_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotAuthorized.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/views/pages/NotAuthorized.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NotAuthorized_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/views/pages/NotAuthorized.vue?vue&type=template&id=4cbf8e52&":
/*!*****************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/views/pages/NotAuthorized.vue?vue&type=template&id=4cbf8e52& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_NotAuthorized_vue_vue_type_template_id_4cbf8e52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotAuthorized.vue?vue&type=template&id=4cbf8e52& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/views/pages/NotAuthorized.vue?vue&type=template&id=4cbf8e52&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_NotAuthorized_vue_vue_type_template_id_4cbf8e52___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_NotAuthorized_vue_vue_type_template_id_4cbf8e52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);