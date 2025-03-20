(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandImages.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandImages.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils.js */ "./packages/core/resources/js/src/utils.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      brand_id: '',
      loading: false,
      imagePopup: false,
      images: [],
      image: {},
      image_preview: null
    };
  },
  mounted: function mounted() {
    this.brand_id = this.$route.params.id;
    this.fetchImages();
  },
  methods: {
    fetchImages: function fetchImages() {
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
                return _this.$http.get("/api/admin/product-brands/".concat(_this.brand_id, "/images"));

              case 4:
                response = _context.sent;
                _this.images = response.data.data;
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
    saveImage: function saveImage() {
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
                _context2.prev = 5;

                _this2.$vs.loading({
                  container: "#banner-image--container"
                });

                params = {
                  image: _this2.image.image,
                  link: _this2.image.link
                };
                url = "/api/admin/product-brands/".concat(_this2.brand_id, "/images");
                payload = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["convertObjectToFormData"])(params);
                _context2.next = 12;
                return _this2.$http.post(url, payload);

              case 12:
                response = _context2.sent;

                _this2.successNotification(response.data.message);

                _this2.imagePopup = false;

                _this2.fetchImages();

                _context2.next = 22;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](5);
                Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["renderServerErrors"])(_this2.errors, _context2.t0);

                _this2.errorNotification("Something went wrong! Please retry!!");

              case 22:
                _context2.prev = 22;

                _this2.$vs.loading.close("#banner-image--container > .con-vs-loading");

                return _context2.finish(22);

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[5, 18, 22, 25]]);
      }))();
    },
    imageUploaded: function imageUploaded() {
      var file = this.$refs.banner_image.files[0];
      this.image_preview = URL.createObjectURL(file);
      this.image.image = file;
    },
    clearImage: function clearImage() {
      this.image.image = null;
      this.image_preview = null;
      this.$refs.banner_image.value = "";
    },
    deleteImage: function deleteImage(image_id) {
      var _this3 = this;

      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "Confirm",
        text: "Are you sure you want to delete the image?",
        accept: function () {
          var _accept = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var response;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return _this3.$http["delete"]("/api/admin/product-brands/".concat(_this3.brand_id, "/images/").concat(image_id));

                  case 2:
                    response = _context3.sent;

                    if (response.data.success) {
                      _this3.successNotification(response.data.message);

                      _this3.fetchImages();
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
    imagePopup: function imagePopup(val) {
      if (!val) {
        this.image_preview = null;
        this.image = {};
        this.errors.clear();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandImages.vue?vue&type=template&id=2fb08d9f&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandImages.vue?vue&type=template&id=2fb08d9f& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_vm.loading ? _c("pageLoader") : _c("vx-card", {
    staticClass: "card-padding-5 vs-con-loading__container",
    attrs: {
      title: "Brand Images",
      id: "images-loading--container"
    }
  }, [_c("vs-table", {
    attrs: {
      search: "",
      stripe: "",
      data: _vm.images,
      "max-items": "40",
      pagination: ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var data = _ref.data;
        return _vm._l(data, function (tr) {
          return _c("tr", {
            key: tr.id,
            staticClass: "tr-values"
          }, [_c("vs-td", [_c("img", {
            attrs: {
              src: tr.image_preview,
              alt: "",
              width: "200px"
            }
          })]), _vm._v(" "), _c("vs-td", [_vm._v("\n              " + _vm._s(tr.custom_properties.link) + "\n            ")]), _vm._v(" "), _c("vs-td", [_c("vs-button", {
            staticClass: "table-action--buttons",
            attrs: {
              radius: "",
              color: "danger",
              type: "filled",
              icon: "delete"
            },
            on: {
              click: function click($event) {
                return _vm.deleteImage(tr.id);
              }
            }
          })], 1)], 1);
        });
      }
    }])
  }, [_c("template", {
    slot: "header"
  }, [_c("strong", [_vm._v("Total :")]), _vm._v("\n         " + _vm._s(_vm.images.length) + "    \n        "), _c("vs-button", {
    attrs: {
      color: "primary",
      size: "small",
      type: "border"
    },
    on: {
      click: function click($event) {
        _vm.imagePopup = true;
      }
    }
  }, [_vm._v("Add Image")])], 1), _vm._v(" "), _c("template", {
    slot: "thead"
  }, [_c("vs-th", [_vm._v("Image")]), _vm._v(" "), _c("vs-th", [_vm._v("Link")]), _vm._v(" "), _c("vs-th", [_vm._v("Actions")])], 1)], 2)], 1), _vm._v(" "), _c("vs-popup", {
    staticClass: "popup-lg",
    attrs: {
      title: "Brand Image",
      active: _vm.imagePopup
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.imagePopup = $event;
      }
    }
  }, [_c("form", {
    staticClass: "vs-con-loading__container",
    attrs: {
      id: "banner-image--container"
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_vm.image_preview ? _c("div", {
    staticClass: "image-preview-container mt-4"
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
      value: "image|size:2048",
      expression: "'image|size:2048'"
    }],
    ref: "banner_image",
    staticClass: "hidden",
    attrs: {
      type: "file",
      name: "image",
      accept: "image/*"
    },
    on: {
      change: _vm.imageUploaded
    }
  }), _vm._v(" "), _c("p", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.errors.has("image"),
      expression: "errors.has('image')"
    }],
    staticClass: "text-danger text-sm mb-3"
  }, [_vm._v(_vm._s(_vm.errors.first("image")))]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "primary",
      type: "border",
      size: "small"
    },
    on: {
      click: function click($event) {
        return _vm.$refs.banner_image.click();
      }
    }
  }, [_vm._v("Upload Image")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-input", {
    staticClass: "w-full mt-4",
    attrs: {
      name: "link",
      label: "Banner Link"
    },
    model: {
      value: _vm.image.link,
      callback: function callback($$v) {
        _vm.$set(_vm.image, "link", $$v);
      },
      expression: "image.link"
    }
  }), _vm._v(" "), _vm.errors.has("link") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("link")))]) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "flex justify-between flex-row-reverse"
  }, [_c("vs-button", {
    staticClass: "mt-4 float-right",
    attrs: {
      type: "border"
    },
    on: {
      click: _vm.saveImage
    }
  }, [_vm._v("Save")])], 1)])])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandImages.vue":
/*!****************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandImages.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BrandImages_vue_vue_type_template_id_2fb08d9f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrandImages.vue?vue&type=template&id=2fb08d9f& */ "./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandImages.vue?vue&type=template&id=2fb08d9f&");
/* harmony import */ var _BrandImages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrandImages.vue?vue&type=script&lang=js& */ "./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandImages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BrandImages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BrandImages_vue_vue_type_template_id_2fb08d9f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BrandImages_vue_vue_type_template_id_2fb08d9f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ecommerce/resources/js/src/views/admin/product-brands/BrandImages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandImages.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandImages.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandImages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BrandImages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandImages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandImages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandImages.vue?vue&type=template&id=2fb08d9f&":
/*!***********************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandImages.vue?vue&type=template&id=2fb08d9f& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandImages_vue_vue_type_template_id_2fb08d9f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BrandImages.vue?vue&type=template&id=2fb08d9f& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/product-brands/BrandImages.vue?vue&type=template&id=2fb08d9f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandImages_vue_vue_type_template_id_2fb08d9f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandImages_vue_vue_type_template_id_2fb08d9f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);