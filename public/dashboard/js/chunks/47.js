(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/vendors/VendorViewDetail.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/vendors/VendorViewDetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      id: "",
      vendor: {},
      products: []
    };
  },
  mounted: function mounted() {
    this.id = this.$route.params.id;
    this.fetchVendor();
  },
  methods: {
    fetchVendor: function fetchVendor() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$vs.loading({
                  container: "#vendor-loading--container"
                });

                _context.prev = 1;
                _context.next = 4;
                return _this.$http.get("/api/admin/vendors/".concat(_this.id));

              case 4:
                response = _context.sent;

                if (response.data.success) {
                  _this.vendor = response.data.data;

                  _this.fetchVendorProducts();
                }

                _context.next = 13;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);

                _this.errorNotification("Something went wrong! Please retry!!");

                if (!(_context.t0.response.status === 404)) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt("return", _this.$router.push({
                  name: "error-404"
                }));

              case 13:
                _context.prev = 13;

                _this.$vs.loading.close("#vendor-loading--container > .con-vs-loading");

                return _context.finish(13);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8, 13, 16]]);
      }))();
    },
    fetchVendorProducts: function fetchVendorProducts() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$vs.loading({
                  container: "#product-loading--container"
                });

                _context2.prev = 1;
                _context2.next = 4;
                return _this2.$http.get("/api/admin/vendors/".concat(_this2.id, "/products"));

              case 4:
                response = _context2.sent;

                if (response.data.success) {
                  _this2.products = response.data.data;
                }

                _context2.next = 13;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);

                _this2.errorNotification("Something went wrong! Please retry!!");

                if (!(_context2.t0.response.status === 404)) {
                  _context2.next = 13;
                  break;
                }

                return _context2.abrupt("return", _this2.$router.push({
                  name: "error-404"
                }));

              case 13:
                _context2.prev = 13;

                _this2.$vs.loading.close("#product-loading--container > .con-vs-loading");

                return _context2.finish(13);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 8, 13, 16]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/vendors/VendorViewDetail.vue?vue&type=template&id=51744e87&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/vendors/VendorViewDetail.vue?vue&type=template&id=51744e87& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("vx-card", {
    staticClass: "vs-con-loading__container",
    attrs: {
      id: "vendor-loading--container"
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col text-center w-full md:w-2/12"
  }, [_c("vs-avatar", {
    attrs: {
      size: "150px",
      src: _vm.vendor.avatar ? _vm.vendor.avatar_image.thumb : __webpack_require__(/*! @assets/images/default-avatar.png */ "./packages/core/resources/assets/images/default-avatar.png")
    }
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "text-center"
  }, [_c("router-link", {
    attrs: {
      to: {
        name: "admin-vendor-detail",
        params: {
          id: _vm.id
        }
      }
    }
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      size: "small",
      type: "border"
    }
  }, [_vm._v("\n              Edit Details\n            ")])], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full md:w-10/12"
  }, [_c("vs-tabs", {
    staticClass: "tab-action-btn-fill-conatiner"
  }, [_c("vs-tab", {
    attrs: {
      label: "Information",
      "icon-pack": "feather",
      icon: "icon-info"
    }
  }, [_c("div", {
    staticClass: "tab-text"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col md:w-1/3"
  }, [_c("h3", [_vm._v(_vm._s(_vm.vendor.name))]), _vm._v(" "), _c("p", {
    staticClass: "mt-3"
  }, [_c("strong", [_vm._v("Email:")]), _vm._v("\n                    " + _vm._s(_vm.vendor.email) + "\n                  ")]), _vm._v(" "), _c("p", {
    staticClass: "mt-3"
  }, [_c("strong", [_vm._v("Contact:")]), _vm._v("\n                    " + _vm._s(_vm.vendor.contacts || "N/A") + "\n                  ")]), _vm._v(" "), _c("p", {
    staticClass: "mt-3"
  }, [_c("strong", [_vm._v("Address:")]), _vm._v("\n                    " + _vm._s(_vm.vendor.address) + "\n                  ")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/3"
  }, [_c("h4", [_vm._v("Contact Person Information")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Name:")]), _vm._v("\n                    " + _vm._s(_vm.vendor.full_name) + "\n                  ")]), _vm._v(" "), _c("p", {
    staticClass: "mt-3"
  }, [_c("strong", [_vm._v("Contact Number:")]), _vm._v("\n                    " + _vm._s(_vm.vendor.contact_person_phone) + "\n                  ")]), _vm._v(" "), _c("p", {
    staticClass: "mt-3"
  }, [_c("strong", [_vm._v("Address:")]), _vm._v("\n                    " + _vm._s(_vm.vendor.contact_person_address) + "\n                  ")])])])])]), _vm._v(" "), _c("vs-tab", {
    attrs: {
      label: "Business Information",
      "icon-pack": "feather",
      icon: "icon-info"
    }
  }, [_c("div", {
    staticClass: "tab-text"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col md:w-1/3"
  }, [_c("p", {
    staticClass: "mt-3"
  }, [_c("strong", [_vm._v("Legal Business Name:")]), _vm._v("\n                    " + _vm._s(_vm.vendor.legal_business_name || "N/A") + "\n                  ")]), _vm._v(" "), _c("p", {
    staticClass: "mt-3"
  }, [_c("strong", [_vm._v("Inventory Location:")]), _vm._v("\n                    " + _vm._s(_vm.vendor.inventory_location || "N/A") + "\n                  ")]), _vm._v(" "), _c("p", {
    staticClass: "mt-3"
  }, [_c("strong", [_vm._v("PAN / VAT Number:")]), _vm._v("\n                    " + _vm._s(_vm.vendor.pan_no || "N/A") + "\n                  ")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-2/3"
  }, [_c("strong", [_vm._v("PAN / VAT Document: ")]), _vm._v(" "), _c("br"), _vm._v(" "), _vm.vendor.pan_document ? _c("img", {
    staticClass: "mt-2",
    attrs: {
      src: _vm.vendor.pan_document_image,
      width: "50%",
      alt: ""
    }
  }) : _c("h5", {
    staticClass: "mt-5"
  }, [_vm._v("Not Uplaoded!!")])])])])]), _vm._v(" "), _c("vs-tab", {
    attrs: {
      label: "Bank Information",
      "icon-pack": "feather",
      icon: "icon-info"
    }
  }, [_c("div", {
    staticClass: "tab-text"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full md:w-1/3"
  }, [_c("p", {
    staticClass: "mt-3"
  }, [_c("strong", [_vm._v("Bank Name:")]), _vm._v("\n                    " + _vm._s(_vm.vendor.bank_name || "N/A") + "\n                  ")]), _vm._v(" "), _c("p", {
    staticClass: "mt-3"
  }, [_c("strong", [_vm._v("Branch:")]), _vm._v("\n                    " + _vm._s(_vm.vendor.bank_branch || "N/A") + "\n                  ")]), _vm._v(" "), _c("p", {
    staticClass: "mt-3"
  }, [_c("strong", [_vm._v("Account Name:")]), _vm._v("\n                    " + _vm._s(_vm.vendor.bank_account_name || "N/A") + "\n                  ")]), _vm._v(" "), _c("p", {
    staticClass: "mt-3"
  }, [_c("strong", [_vm._v("Account Number:")]), _vm._v("\n                    " + _vm._s(_vm.vendor.bank_account_number || "N/A") + "\n                  ")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full md:w-2/3"
  }, [_c("strong", [_vm._v("Bank Cheque Copy ")]), _vm._v(" "), _c("br"), _vm._v(" "), _vm.vendor.bank_cheque_copy ? _c("img", {
    staticClass: "mt-2",
    attrs: {
      src: _vm.vendor.bank_cheque_image,
      width: "50%",
      alt: ""
    }
  }) : _c("h5", {
    staticClass: "mt-5"
  }, [_vm._v("Not Uplaoded!!")])])])])])], 1)], 1)])]), _vm._v(" "), _c("vx-card", {
    staticClass: "vs-con-loading__container mt-3",
    attrs: {
      title: "Products  (".concat(_vm.products.length, " Total)"),
      id: "product-loading--container"
    }
  }, [_c("vs-table", {
    attrs: {
      search: "",
      stripe: "",
      data: _vm.products,
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
            staticClass: "p-4",
            attrs: {
              data: tr
            }
          }, [_c("vs-td", {
            staticStyle: {
              width: "110px !important"
            }
          }, [_c("img", {
            attrs: {
              src: tr.product_image.thumb ? tr.product_image.thumb : __webpack_require__(/*! @assets/images/no-image-placeholder.jpg */ "./packages/core/resources/assets/images/no-image-placeholder.jpg"),
              alt: "",
              width: "90px"
            }
          })]), _vm._v(" "), _c("vs-td", {
            staticStyle: {
              "vertical-align": "top"
            }
          }, [_c("strong", [_vm._v(_vm._s(tr.name))]), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", {
            staticClass: "mt-2 text-sm"
          }, [_c("strong", [tr.status == 1 ? _c("span", {
            staticClass: "text-success"
          }, [_vm._v("Enabled")]) : _vm._e(), _vm._v(" "), tr.status == 0 ? _c("span", {
            staticClass: "text-danger"
          }, [_vm._v("Inactive")]) : _vm._e(), _vm._v(" "), tr.status == 2 ? _c("span", {
            staticClass: "text-warning"
          }, [_vm._v("Draft")]) : _vm._e()])]), _vm._v(" "), _c("p", {
            staticClass: "mt-2 text-sm"
          }, [_vm._v(_vm._s(tr.quantity) + " in stock")])]), _vm._v(" "), _c("vs-td", [tr.price ? _c("div", [_c("strong", {
            staticClass: "text-2xl"
          }, [_vm._v("Rs. " + _vm._s(tr.price))]), _vm._v(" "), tr.original_price ? _c("span", {
            staticClass: "text-lg text-strike"
          }, [_vm._v("Rs. " + _vm._s(tr.original_price))]) : _vm._e()]) : _c("div", [_vm._v("---")])]), _vm._v(" "), _c("vs-td", [_c("strong", [_vm._v("SKU:")]), _vm._v("\n            " + _vm._s(tr.sku) + "\n          ")]), _vm._v(" "), _c("vs-td", [_c("strong", [_vm._v("Status")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("vs-icon", {
            staticClass: "icon-large",
            "class": tr.status === 1 ? "text-success" : "text-danger",
            attrs: {
              icon: tr.status === 1 ? "toggle_on" : "toggle_off"
            }
          })], 1), _vm._v(" "), _c("vs-td", [_c("a", {
            attrs: {
              href: "/product-detail/".concat(tr.slug),
              target: "_blank"
            }
          }, [_c("vs-button", {
            staticClass: "table-action--buttons",
            attrs: {
              radius: "",
              color: "success",
              type: "filled",
              icon: "remove_red_eye"
            }
          })], 1), _vm._v(" "), _c("router-link", {
            attrs: {
              to: {
                name: "admin-product-detail",
                params: {
                  id: tr.id
                }
              }
            }
          }, [_vm.checkPermission("edit-product") ? _c("vs-button", {
            staticClass: "table-action--buttons",
            attrs: {
              radius: "",
              color: "warning",
              type: "filled",
              icon: "create"
            }
          }) : _vm._e()], 1)], 1)], 1);
        });
      }
    }])
  })], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/core/resources/assets/images/default-avatar.png":
/*!******************************************************************!*\
  !*** ./packages/core/resources/assets/images/default-avatar.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/default-avatar.png?27b9408da668f335b85e9fe669908cab";

/***/ }),

/***/ "./packages/core/resources/assets/images/no-image-placeholder.jpg":
/*!************************************************************************!*\
  !*** ./packages/core/resources/assets/images/no-image-placeholder.jpg ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/no-image-placeholder.jpg?398a6fa0902f42b38c7dad067cf1e540";

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/vendors/VendorViewDetail.vue":
/*!**************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/vendors/VendorViewDetail.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VendorViewDetail_vue_vue_type_template_id_51744e87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VendorViewDetail.vue?vue&type=template&id=51744e87& */ "./packages/ecommerce/resources/js/src/views/admin/vendors/VendorViewDetail.vue?vue&type=template&id=51744e87&");
/* harmony import */ var _VendorViewDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VendorViewDetail.vue?vue&type=script&lang=js& */ "./packages/ecommerce/resources/js/src/views/admin/vendors/VendorViewDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VendorViewDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VendorViewDetail_vue_vue_type_template_id_51744e87___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VendorViewDetail_vue_vue_type_template_id_51744e87___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ecommerce/resources/js/src/views/admin/vendors/VendorViewDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/vendors/VendorViewDetail.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/vendors/VendorViewDetail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorViewDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VendorViewDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/vendors/VendorViewDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorViewDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/vendors/VendorViewDetail.vue?vue&type=template&id=51744e87&":
/*!*********************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/vendors/VendorViewDetail.vue?vue&type=template&id=51744e87& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorViewDetail_vue_vue_type_template_id_51744e87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VendorViewDetail.vue?vue&type=template&id=51744e87& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/vendors/VendorViewDetail.vue?vue&type=template&id=51744e87&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorViewDetail_vue_vue_type_template_id_51744e87___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorViewDetail_vue_vue_type_template_id_51744e87___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);