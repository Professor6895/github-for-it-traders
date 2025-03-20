(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/components/Meta.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/components/Meta.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: {
      type: Object,
      required: true
    },
    small: {
      type: Boolean,
      "default": false
    }
  },
  watch: {
    value: function value() {
      this.$emit("input", this.value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Meta */ "./packages/core/resources/js/src/components/Meta.vue");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils.js */ "./packages/core/resources/js/src/utils.js");
/* harmony import */ var vue_prism_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-prism-editor */ "./node_modules/vue-prism-editor/dist/prismeditor.esm.js");
/* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-core */ "./node_modules/prismjs/components/prism-core.js");
/* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/components/prism-clike */ "./node_modules/prismjs/components/prism-clike.js");
/* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/prismjs/components/prism-javascript.js");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/themes/prism-tomorrow.css */ "./node_modules/prismjs/themes/prism-tomorrow.css");
/* harmony import */ var prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_prism_editor_dist_prismeditor_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-prism-editor/dist/prismeditor.min.css */ "./node_modules/vue-prism-editor/dist/prismeditor.min.css");
/* harmony import */ var vue_prism_editor_dist_prismeditor_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_prism_editor_dist_prismeditor_min_css__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      brands: [],
      //ADD AND EDIT
      brand_popup: false,
      brand: {
        meta: {}
      },
      image_preview: null
    };
  },
  components: {
    MetaFields: _components_Meta__WEBPACK_IMPORTED_MODULE_0__["default"],
    PrismEditor: vue_prism_editor__WEBPACK_IMPORTED_MODULE_2__["PrismEditor"]
  },
  mounted: function mounted() {
    this.fetchBrands();
  },
  methods: {
    highlighter: function highlighter(code) {
      return Object(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__["highlight"])(code, prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__["languages"].js); //returns html
    },
    fetchBrands: function fetchBrands() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _context.prev = 1;
                _context.next = 4;
                return _this.$http.get("/api/admin/product-brands");

              case 4:
                response = _context.sent;
                _this.brands = response.data.data;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);

                _this.errorNotification("Something went wrong!! Please retry");

              case 11:
                _context.prev = 11;
                _this.loading = false;
                return _context.finish(11);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8, 11, 14]]);
      }))();
    },
    imageUploaded: function imageUploaded() {
      var file = this.$refs.brand_thumbnail_image.files[0];
      this.image_preview = URL.createObjectURL(file);
      this.brand.image = file;
    },
    clearImage: function clearImage() {
      this.brand.image = null;
      this.image_preview = null;
      this.$refs.brand_thumbnail_image.value = "";
    },
    saveBrand: function saveBrand() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var result, params, url, payload, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$validator.validateAll();

              case 2:
                result = _context2.sent;

                if (result) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return");

              case 5:
                _this2.$vs.loading({
                  container: "#loading--container"
                });

                _context2.prev = 6;
                params = {
                  name: _this2.brand.name,
                  image: _this2.brand.image,
                  description: _this2.brand.description,
                  meta: JSON.stringify(_this2.brand.meta),
                  custom_code: _this2.brand.custom_code
                };
                url = "/api/admin/product-brands";

                if (_this2.brand.id) {
                  url = "/api/admin/product-brands/".concat(_this2.brand.id);
                  params["_method"] = "PATCH";
                  params['slug'] = _this2.brand.slug;
                }

                payload = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["convertObjectToFormData"])(params);
                _context2.next = 13;
                return _this2.$http.post(url, payload);

              case 13:
                response = _context2.sent;

                if (response.data.success) {
                  _this2.successNotification(response.data.message);

                  _this2.fetchBrands();

                  _this2.brand_popup = false;
                }

                _context2.next = 21;
                break;

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](6);
                Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["renderServerErrors"])(_this2.errors, _context2.t0);

                _this2.errorNotification("Something went wrong! Please retry!!");

              case 21:
                _context2.prev = 21;

                _this2.$vs.loading.close("#loading--container > .con-vs-loading");

                return _context2.finish(21);

              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[6, 17, 21, 24]]);
      }))();
    },
    editBrand: function editBrand(brand) {
      this.brand = _.cloneDeep(brand);
      this.image_preview = this.brand.brand_image.thumb;
      this.brand_popup = true;
    },
    deleteBrand: function deleteBrand(brand_id) {
      var _this3 = this;

      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "Confirm",
        text: "Are you sure you want to delete this brand?",
        accept: function () {
          var _accept = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var response;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return _this3.$http["delete"]("/api/admin/product-brands/".concat(brand_id));

                  case 2:
                    response = _context3.sent;

                    if (response.data.success) {
                      _this3.successNotification(response.data.message);

                      _this3.fetchBrands();
                    } else {
                      _this3.errorNotification(response.data.message);
                    }

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          function accept() {
            return _accept.apply(this, arguments);
          }

          return accept;
        }()
      });
    }
  },
  watch: {
    brand_popup: function brand_popup(val) {
      if (!val) {
        this.brand = {
          meta: {}
        };
        this.errors.clear();
        this.image_preview = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/components/Meta.vue?vue&type=template&id=30e6efda&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/components/Meta.vue?vue&type=template&id=30e6efda& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full mt-2",
    "class": {
      "md:w-1/2": !_vm.small
    }
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "max:70",
      expression: "'max:70'"
    }],
    staticClass: "w-full",
    attrs: {
      name: "meta_title",
      maxlength: "100",
      label: "Meta Title"
    },
    model: {
      value: _vm.value.meta_title,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "meta_title", $$v);
      },
      expression: "value.meta_title"
    }
  }), _vm._v(" "), _c("p", [_vm.errors.has("meta_title") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("meta_title")))]) : _vm._e()])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mt-2",
    "class": {
      "md:w-1/2": !_vm.small
    }
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "max:180",
      expression: "'max:180'"
    }],
    staticClass: "w-full",
    attrs: {
      name: "meta_keywords",
      label: "Meta Keywords",
      maxlength: "180"
    },
    model: {
      value: _vm.value.meta_keywords,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "meta_keywords", $$v);
      },
      expression: "value.meta_keywords"
    }
  }), _vm._v(" "), _c("p", [_vm.errors.has("meta_keywords") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("meta_keywords")))]) : _vm._e()])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mt-2"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "max:180",
      expression: "'max:180'"
    }],
    staticClass: "w-full",
    attrs: {
      name: "meta_description",
      label: "Meta Description",
      maxlength: "180"
    },
    model: {
      value: _vm.value.meta_description,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "meta_description", $$v);
      },
      expression: "value.meta_description"
    }
  }), _vm._v(" "), _c("p", [_vm.errors.has("meta_description") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("meta_description")))]) : _vm._e()])], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue?vue&type=template&id=953f390c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue?vue&type=template&id=953f390c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("vs-popup", {
    staticClass: "popup-lg",
    attrs: {
      title: "Brand Detail",
      active: _vm.brand_popup
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.brand_popup = $event;
      }
    }
  }, [_c("div", {
    staticClass: "vs-con-loading__container",
    attrs: {
      id: "loading--container"
    }
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      name: "name",
      label: "Brand Name"
    },
    model: {
      value: _vm.brand.name,
      callback: function callback($$v) {
        _vm.$set(_vm.brand, "name", $$v);
      },
      expression: "brand.name"
    }
  }), _vm._v(" "), _c("p", [_vm.errors.has("name") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("name")))]) : _vm._e()]), _vm._v(" "), _vm.brand.id ? _c("div", {
    staticClass: "w-full mt-4"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      name: "name",
      label: "Brand Slug"
    },
    model: {
      value: _vm.brand.slug,
      callback: function callback($$v) {
        _vm.$set(_vm.brand, "slug", $$v);
      },
      expression: "brand.slug"
    }
  }), _vm._v(" "), _c("p", [_vm.errors.has("slug") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("slug")))]) : _vm._e()])], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "w-full mt-4"
  }, [_vm.image_preview ? _c("div", {
    staticClass: "image-preview-container"
  }, [_c("div", {
    staticClass: "text-right float-right mr-10"
  }, [_c("vs-button", {
    staticClass: "image-remove--button",
    attrs: {
      radius: "",
      size: "small",
      color: "danger",
      type: "filled",
      "icon-pack": "feather",
      icon: "icon-x"
    },
    on: {
      click: _vm.clearImage
    }
  })], 1), _vm._v(" "), _c("img", {
    attrs: {
      src: _vm.image_preview,
      alt: ""
    }
  })]) : _vm._e(), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "image|size:1024",
      expression: "'image|size:1024'"
    }],
    ref: "brand_thumbnail_image",
    staticClass: "hidden",
    attrs: {
      type: "file",
      name: "thumbnail",
      accept: "image/*"
    },
    on: {
      change: _vm.imageUploaded
    }
  }), _vm._v(" "), _c("p", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.errors.has("thumbnail"),
      expression: "errors.has('thumbnail')"
    }],
    staticClass: "text-danger text-sm mb-3"
  }, [_vm._v("\n          " + _vm._s(_vm.errors.first("thumbnail")) + "\n        ")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "primary",
      type: "border",
      size: "small"
    },
    on: {
      click: function click($event) {
        return _vm.$refs.brand_thumbnail_image.click();
      }
    }
  }, [_vm._v("Thumbnail Image")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col mt-4"
  }, [_c("label", {
    staticClass: "vs-input--label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c("q-editor", {
    model: {
      value: _vm.brand.description,
      callback: function callback($$v) {
        _vm.$set(_vm.brand, "description", $$v);
      },
      expression: "brand.description"
    }
  })], 1), _vm._v(" "), _c("MetaFields", {
    model: {
      value: _vm.brand.meta,
      callback: function callback($$v) {
        _vm.$set(_vm.brand, "meta", $$v);
      },
      expression: "brand.meta"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "vx-col mt-4"
  }, [_c("label", {
    staticClass: "vs-input--label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Custom Code")]), _vm._v(" "), _c("prism-editor", {
    staticClass: "my-editor",
    attrs: {
      "line-numbers": "",
      highlight: _vm.highlighter
    },
    model: {
      value: _vm.brand.custom_code,
      callback: function callback($$v) {
        _vm.$set(_vm.brand, "custom_code", $$v);
      },
      expression: "brand.custom_code"
    }
  })], 1), _vm._v(" "), _c("vs-button", {
    staticClass: "mr-3 mt-5",
    on: {
      click: _vm.saveBrand
    }
  }, [_vm._v("Submit")])], 1)]), _vm._v(" "), _vm.loading ? _c("pageLoader") : _c("vx-card", {
    staticClass: "card-padding-5"
  }, [_c("vs-table", {
    attrs: {
      search: "",
      stripe: "",
      data: _vm.brands,
      "max-items": "40",
      pagination: ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var data = _ref.data;
        return _vm._l(data, function (tr, indextr) {
          return _c("vs-tr", {
            key: indextr,
            attrs: {
              data: tr
            }
          }, [_c("vs-td", [_c("img", {
            attrs: {
              src: tr.brand_image.thumb,
              alt: "",
              width: "100px"
            }
          })]), _vm._v(" "), _c("vs-td", [_vm._v(_vm._s(tr.name))]), _vm._v(" "), _c("vs-td", [_vm._v(_vm._s(tr.slug))]), _vm._v(" "), _c("vs-td", [_vm._v(_vm._s(tr.images_count) + "    \n            "), _c("router-link", {
            attrs: {
              to: {
                name: "admin-product-brands-images",
                params: {
                  id: tr.id
                }
              }
            }
          }, [_c("vs-button", {
            attrs: {
              size: "small"
            }
          }, [_vm._v("View Images")])], 1)], 1), _vm._v(" "), _c("vs-td", [_vm.checkPermission("edit-brand") ? _c("vs-button", {
            staticClass: "table-action--buttons",
            attrs: {
              radius: "",
              color: "warning",
              type: "filled",
              size: "small",
              icon: "create"
            },
            on: {
              click: function click($event) {
                return _vm.editBrand(tr);
              }
            }
          }) : _vm._e(), _vm._v(" "), _vm.checkPermission("delete-brand") ? _c("vs-button", {
            staticClass: "table-action--buttons",
            attrs: {
              radius: "",
              size: "small",
              color: "danger",
              type: "filled",
              icon: "delete"
            },
            on: {
              click: function click($event) {
                return _vm.deleteBrand(tr.id);
              }
            }
          }) : _vm._e()], 1)], 1);
        });
      }
    }])
  }, [_c("template", {
    slot: "header"
  }, [_c("strong", [_vm._v("Total :")]), _vm._v("\n         " + _vm._s(_vm.brands.length) + "    \n        "), _vm.checkPermission("add-brand") ? _c("vs-button", {
    attrs: {
      color: "primary",
      size: "small",
      type: "border"
    },
    on: {
      click: function click($event) {
        _vm.brand_popup = true;
      }
    }
  }, [_vm._v("Add Brand")]) : _vm._e()], 1), _vm._v(" "), _c("template", {
    slot: "thead"
  }, [_c("vs-th", [_vm._v("Image")]), _vm._v(" "), _c("vs-th", {
    attrs: {
      "sort-key": "name"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c("vs-th", [_vm._v("Slug")]), _vm._v(" "), _c("vs-th", [_vm._v("Images")]), _vm._v(" "), _c("vs-th", [_vm._v("Actions")])], 1)], 2)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue?vue&type=style&index=0&id=953f390c&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue?vue&type=style&index=0&id=953f390c&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* required class */\n.my-editor[data-v-953f390c] {\n  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */\n  height: 300px;\n  /* you must provide font-family font-size line-height. Example: */\n  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;\n  font-size: 14px;\n  line-height: 1.5;\n}\n[dir] .my-editor[data-v-953f390c] {\n  background: #f3f3f3;\n  padding: 5px;\n  padding: 5px;\n}\n\n/* optional class for removing the outline */\n.prism-editor__textarea[data-v-953f390c]:focus {\n  outline: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue?vue&type=style&index=0&id=953f390c&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue?vue&type=style&index=0&id=953f390c&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BrandsList.vue?vue&type=style&index=0&id=953f390c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue?vue&type=style&index=0&id=953f390c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./packages/core/resources/js/src/components/Meta.vue":
/*!************************************************************!*\
  !*** ./packages/core/resources/js/src/components/Meta.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Meta_vue_vue_type_template_id_30e6efda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Meta.vue?vue&type=template&id=30e6efda& */ "./packages/core/resources/js/src/components/Meta.vue?vue&type=template&id=30e6efda&");
/* harmony import */ var _Meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Meta.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/components/Meta.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Meta_vue_vue_type_template_id_30e6efda___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Meta_vue_vue_type_template_id_30e6efda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/components/Meta.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/components/Meta.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./packages/core/resources/js/src/components/Meta.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Meta.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/components/Meta.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/components/Meta.vue?vue&type=template&id=30e6efda&":
/*!*******************************************************************************************!*\
  !*** ./packages/core/resources/js/src/components/Meta.vue?vue&type=template&id=30e6efda& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Meta_vue_vue_type_template_id_30e6efda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Meta.vue?vue&type=template&id=30e6efda& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/components/Meta.vue?vue&type=template&id=30e6efda&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Meta_vue_vue_type_template_id_30e6efda___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Meta_vue_vue_type_template_id_30e6efda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue":
/*!***************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BrandsList_vue_vue_type_template_id_953f390c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrandsList.vue?vue&type=template&id=953f390c&scoped=true& */ "./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue?vue&type=template&id=953f390c&scoped=true&");
/* harmony import */ var _BrandsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrandsList.vue?vue&type=script&lang=js& */ "./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BrandsList_vue_vue_type_style_index_0_id_953f390c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BrandsList.vue?vue&type=style&index=0&id=953f390c&scoped=true&lang=css& */ "./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue?vue&type=style&index=0&id=953f390c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BrandsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BrandsList_vue_vue_type_template_id_953f390c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BrandsList_vue_vue_type_template_id_953f390c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "953f390c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BrandsList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue?vue&type=style&index=0&id=953f390c&scoped=true&lang=css&":
/*!************************************************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue?vue&type=style&index=0&id=953f390c&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsList_vue_vue_type_style_index_0_id_953f390c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BrandsList.vue?vue&type=style&index=0&id=953f390c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue?vue&type=style&index=0&id=953f390c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsList_vue_vue_type_style_index_0_id_953f390c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsList_vue_vue_type_style_index_0_id_953f390c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsList_vue_vue_type_style_index_0_id_953f390c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsList_vue_vue_type_style_index_0_id_953f390c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue?vue&type=template&id=953f390c&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue?vue&type=template&id=953f390c&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsList_vue_vue_type_template_id_953f390c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BrandsList.vue?vue&type=template&id=953f390c&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandsList.vue?vue&type=template&id=953f390c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsList_vue_vue_type_template_id_953f390c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsList_vue_vue_type_template_id_953f390c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);