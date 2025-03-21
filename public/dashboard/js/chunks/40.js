(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/components/VxTour.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/components/VxTour.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vx-tour',
  props: {
    steps: {
      required: true,
      type: Array
    }
  },
  watch: {
    '$route.path': function $routePath() {
      this.$tours['vuexyTour'].stop();
    }
  },
  mounted: function mounted() {
    this.$tours['vuexyTour'].start();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/components/VxTour.vue?vue&type=template&id=2f756648&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/components/VxTour.vue?vue&type=template&id=2f756648& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("v-tour", {
    attrs: {
      name: "vuexyTour",
      steps: _vm.steps
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(tour) {
        return [_c("transition", {
          attrs: {
            name: "fade"
          }
        }, _vm._l(tour.steps, function (step, index) {
          return tour.currentStep === index ? _c("v-step", {
            key: index,
            attrs: {
              step: step,
              "previous-step": tour.previousStep,
              "next-step": tour.nextStep,
              stop: tour.stop,
              "is-first": tour.isFirst,
              "is-last": tour.isLast,
              labels: tour.labels
            }
          }, [_c("div", {
            staticClass: "flex justify-center",
            attrs: {
              slot: "actions"
            },
            slot: "actions"
          }, [tour.currentStep != tour.steps.length - 1 ? _c("vs-button", {
            staticClass: "mr-3",
            attrs: {
              size: "small",
              "icon-pack": "feather",
              icon: "icon-x",
              "icon-after": "",
              color: "#fff",
              type: "border"
            },
            on: {
              click: tour.stop
            }
          }, [_vm._v("\n                        Skip\n                    ")]) : _vm._e(), _vm._v(" "), tour.currentStep ? _c("vs-button", {
            staticClass: "mr-3",
            attrs: {
              size: "small",
              "icon-pack": "feather",
              icon: "icon-chevrons-left",
              color: "#fff",
              type: "border"
            },
            on: {
              click: tour.previousStep
            }
          }, [_vm._v("\n                        Previous\n                    ")]) : _vm._e(), _vm._v(" "), tour.currentStep != tour.steps.length - 1 ? _c("vs-button", {
            staticClass: "btn-tour-next",
            attrs: {
              size: "small",
              "icon-pack": "feather",
              icon: "icon-chevrons-right",
              "icon-after": "",
              color: "#fff",
              type: "border"
            },
            on: {
              click: tour.nextStep
            }
          }, [_vm._v("\n                        Next\n                    ")]) : _vm._e(), _vm._v(" "), tour.currentStep == tour.steps.length - 1 ? _c("vs-button", {
            staticClass: "btn-tour-finish",
            attrs: {
              size: "small",
              "icon-pack": "feather",
              icon: "icon-check-circle",
              "icon-after": "",
              color: "#fff",
              type: "border"
            },
            on: {
              click: tour.stop
            }
          }, [_vm._v("\n                        Finish\n                    ")]) : _vm._e()], 1)]) : _vm._e();
        }), 1)];
      }
    }])
  });
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/components/VxTour.vue?vue&type=style&index=0&id=2f756648&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/components/VxTour.vue?vue&type=style&index=0&id=2f756648&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-tour .v-step {\n  z-index: 55000;\n  filter: drop-shadow(0 0 7px rgba(0, 0, 0, 0.5));\n}[dir] .v-tour .v-step {\n  background-color: rgba(var(--vs-primary), 1);\n  border-radius: 0.5rem;\n  padding: 1.5rem;\n}\n[dir] .v-tour .v-step .v-step__arrow {\n  border-color: rgba(var(--vs-primary), 1);\n}\n[dir] .v-tour .v-step .vs-button-border:not(.btn-tour-next):not(.btn-tour-finish) {\n  border-color: rgba(255, 255, 255, 0.5) !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/components/VxTour.vue?vue&type=style&index=0&id=2f756648&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/components/VxTour.vue?vue&type=style&index=0&id=2f756648&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxTour.vue?vue&type=style&index=0&id=2f756648&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/components/VxTour.vue?vue&type=style&index=0&id=2f756648&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./packages/core/resources/js/src/components/VxTour.vue":
/*!**************************************************************!*\
  !*** ./packages/core/resources/js/src/components/VxTour.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxTour_vue_vue_type_template_id_2f756648___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxTour.vue?vue&type=template&id=2f756648& */ "./packages/core/resources/js/src/components/VxTour.vue?vue&type=template&id=2f756648&");
/* harmony import */ var _VxTour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxTour.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/components/VxTour.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VxTour_vue_vue_type_style_index_0_id_2f756648_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VxTour.vue?vue&type=style&index=0&id=2f756648&lang=scss& */ "./packages/core/resources/js/src/components/VxTour.vue?vue&type=style&index=0&id=2f756648&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VxTour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxTour_vue_vue_type_template_id_2f756648___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxTour_vue_vue_type_template_id_2f756648___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/components/VxTour.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/components/VxTour.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./packages/core/resources/js/src/components/VxTour.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxTour.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/components/VxTour.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/components/VxTour.vue?vue&type=style&index=0&id=2f756648&lang=scss&":
/*!************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/components/VxTour.vue?vue&type=style&index=0&id=2f756648&lang=scss& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTour_vue_vue_type_style_index_0_id_2f756648_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxTour.vue?vue&type=style&index=0&id=2f756648&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/components/VxTour.vue?vue&type=style&index=0&id=2f756648&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTour_vue_vue_type_style_index_0_id_2f756648_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTour_vue_vue_type_style_index_0_id_2f756648_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTour_vue_vue_type_style_index_0_id_2f756648_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTour_vue_vue_type_style_index_0_id_2f756648_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./packages/core/resources/js/src/components/VxTour.vue?vue&type=template&id=2f756648&":
/*!*********************************************************************************************!*\
  !*** ./packages/core/resources/js/src/components/VxTour.vue?vue&type=template&id=2f756648& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTour_vue_vue_type_template_id_2f756648___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxTour.vue?vue&type=template&id=2f756648& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/components/VxTour.vue?vue&type=template&id=2f756648&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTour_vue_vue_type_template_id_2f756648___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTour_vue_vue_type_template_id_2f756648___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);