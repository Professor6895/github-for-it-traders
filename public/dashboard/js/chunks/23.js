(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/views/pages/settings/Sidebar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/views/pages/settings/Sidebar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {// active_tab: null
    };
  },
  computed: {
    dashboard_settings: function dashboard_settings() {
      return this.$store.state.settings.dashboard_settings;
    },
    active_tab: function active_tab() {
      var url = location.href;
      var chunks = url.split("/");
      var module = chunks[chunks.indexOf("settings") + 1];
      return module;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/settings/Settings.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/settings/Settings.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_pages_settings_Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/pages/settings/Sidebar */ "./packages/core/resources/js/src/views/pages/settings/Sidebar.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/store */ "./packages/core/resources/js/src/store/store.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils.js */ "./packages/core/resources/js/src/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      ecommerce_settings: {
        initial_popup: {}
      }
    };
  },
  components: {
    "settings-sidebar": _views_pages_settings_Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    state: function state() {
      return this.$store.state.settings;
    }
  },
  mounted: function mounted() {
    this.initComponent();
  },
  watch: {
    state: {
      deep: true,
      handler: function handler() {
        this.initComponent();
      }
    }
  },
  methods: {
    initComponent: function initComponent() {
      if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.has(this.$store.state, "settings.dashboard_settings.ecommerce")) {
        this.ecommerce_settings = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.cloneDeep(this.$store.state.settings.dashboard_settings.ecommerce);
      }
    },
    saveEcommerceSettings: function saveEcommerceSettings() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var result, paylod, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$validator.validateAll();

              case 2:
                result = _context.sent;

                if (result) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                _this.$vs.loading({
                  container: "#loading--container"
                });

                _context.prev = 6;
                paylod = {
                  _method: "PATCH",
                  settings: _this.ecommerce_settings
                };
                _context.next = 10;
                return _this.$http.post("/api/admin/settings/ecommerce/update-settings", paylod);

              case 10:
                response = _context.sent;

                if (response.data.success) {
                  _store_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("settings/fetchSettings", {
                    once: false
                  });

                  _this.successNotification(response.data.message);
                }

                _context.next = 18;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](6);
                console.log(_context.t0);

                _this.errorNotification("Something went wrong! Please retry!!");

              case 18:
                _context.prev = 18;

                _this.$vs.loading.close("#loading--container > .con-vs-loading");

                return _context.finish(18);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[6, 14, 18, 21]]);
      }))();
    },
    generateOrderMessagePreview: function generateOrderMessagePreview(message) {
      if (message) {
        message = message.replace("{user_name}", "John Doe");
        message = message.replace("{order_id}", "ORD986555");
        message = message.replace("{order_total}", "15000");
        message = message.replace("{order_url}", "https://website.com/user-profile/order-detail?invoice_number=ORD9");
      }

      return message;
    },
    popUpImageUploaded: function popUpImageUploaded() {
      var file = this.$refs.upload_popup_image.files[0];
      this.ecommerce_settings.initial_popup.image = URL.createObjectURL(file);
    },
    clearImage: function clearImage() {
      this.ecommerce_settings.initial_popup.image = null;
      this.$refs.upload_popup_image.value = "";
    },
    saveEcommercePopupSetting: function saveEcommercePopupSetting() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var paylod, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                paylod = {
                  enabled: _this2.ecommerce_settings.initial_popup.enabled,
                  popup_delay: _this2.ecommerce_settings.initial_popup.popup_delay,
                  interval: _this2.ecommerce_settings.initial_popup.interval,
                  link: _this2.ecommerce_settings.initial_popup.link
                };
                if (_this2.$refs.upload_popup_image && _this2.$refs.upload_popup_image.files.length) paylod["image"] = _this2.$refs.upload_popup_image.files[0]; // }

                paylod = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["convertObjectToFormData"])(paylod);
                _context2.next = 6;
                return _this2.$http.post("/api/admin/ecommerce-settings/save-popup-settings", paylod);

              case 6:
                response = _context2.sent;

                if (response.data.success) {
                  _store_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("settings/fetchSettings", {
                    once: false
                  });

                  _this2.successNotification(response.data.message);
                }

                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 10]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/views/pages/settings/Sidebar.vue?vue&type=template&id=7040b1b7&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/views/pages/settings/Sidebar.vue?vue&type=template&id=7040b1b7&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("vx-card", {
    staticClass: "dashboard--setting-sidebar",
    attrs: {
      title: "Modules"
    }
  }, [_c("ul", _vm._l(_vm.dashboard_settings, function (setting, module) {
    return _c("li", {
      key: module,
      staticClass: "p-2 font-medium items-center"
    }, [_c("router-link", {
      staticClass: "flex cursor-pointer",
      attrs: {
        tag: "span",
        to: "/admin/settings/".concat(module)
      }
    }, [_c("span", {
      "class": {
        "text-primary": module === _vm.active_tab
      }
    }, [_c("vs-icon", {
      staticClass: "align-middle",
      staticStyle: {
        color: "black !important"
      },
      attrs: {
        icon: "chevron_right"
      }
    }), _vm._v(_vm._s(_vm._f("title")(module)))], 1)])], 1);
  }), 0)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/settings/Settings.vue?vue&type=template&id=951cc08c&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/settings/Settings.vue?vue&type=template&id=951cc08c& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "vx-col sm:w-1/6 w-full mb-2"
  }, [_c("settings-sidebar")], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col sm:w-5/6 mb-2"
  }, [_c("vx-card", {
    staticClass: "vs-con-loading__container",
    attrs: {
      id: "loading--container"
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col mb-4 w-full"
  }, [_c("h3", {
    staticClass: "mb-2"
  }, [_vm._v("Order Messaging")]), _vm._v(" "), _c("vs-alert", {
    attrs: {
      color: "primary",
      active: "true"
    }
  }, [_vm._v("\n            Available Short Codes to use in your messages: "), _c("br"), _c("br"), _vm._v("\n\n            * {order_id} - Order Invoice Number "), _c("br"), _vm._v("\n            * {user_name} - Full Name Of user"), _c("br"), _vm._v("\n            * {order_total} - Total amount of order"), _c("br"), _vm._v("\n            * {order_url} - Link to check order status\n          ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-3/5"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full mb-3"
  }, [_c("strong", [_vm._v("Order Placed Message")]), _vm._v(" "), _c("vs-textarea", {
    staticClass: "w-full",
    attrs: {
      name: "order_placed_message"
    },
    model: {
      value: _vm.ecommerce_settings.order_placed_message,
      callback: function callback($$v) {
        _vm.$set(_vm.ecommerce_settings, "order_placed_message", $$v);
      },
      expression: "ecommerce_settings.order_placed_message"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-3"
  }, [_c("strong", [_vm._v("Order Confirmed Message")]), _vm._v(" "), _c("vs-textarea", {
    staticClass: "w-full",
    attrs: {
      name: "order_confirmed_message"
    },
    model: {
      value: _vm.ecommerce_settings.order_confirmed_message,
      callback: function callback($$v) {
        _vm.$set(_vm.ecommerce_settings, "order_confirmed_message", $$v);
      },
      expression: "ecommerce_settings.order_confirmed_message"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-3"
  }, [_c("strong", [_vm._v("Order Dispatched Message")]), _vm._v(" "), _c("vs-textarea", {
    staticClass: "w-full",
    attrs: {
      name: "order_dispatched_message"
    },
    model: {
      value: _vm.ecommerce_settings.order_dispatched_message,
      callback: function callback($$v) {
        _vm.$set(_vm.ecommerce_settings, "order_dispatched_message", $$v);
      },
      expression: "ecommerce_settings.order_dispatched_message"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-3"
  }, [_c("strong", [_vm._v("Order Completed Message")]), _vm._v(" "), _c("vs-textarea", {
    staticClass: "w-full",
    attrs: {
      name: "order_completed_message"
    },
    model: {
      value: _vm.ecommerce_settings.order_completed_message,
      callback: function callback($$v) {
        _vm.$set(_vm.ecommerce_settings, "order_completed_message", $$v);
      },
      expression: "ecommerce_settings.order_completed_message"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-3"
  }, [_c("strong", [_vm._v("Order Canceled Message")]), _vm._v(" "), _c("vs-textarea", {
    staticClass: "w-full",
    attrs: {
      name: "order_canceled_message"
    },
    model: {
      value: _vm.ecommerce_settings.order_canceled_message,
      callback: function callback($$v) {
        _vm.$set(_vm.ecommerce_settings, "order_canceled_message", $$v);
      },
      expression: "ecommerce_settings.order_canceled_message"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-2/5"
  }, [_c("div", {
    staticClass: "vx-row p-3"
  }, [_c("div", {
    staticClass: "vx-col w-full mb-3"
  }, [_c("h4", [_vm._v("Order Email/SMS Message Preview")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("strong", [_vm._v("Order Placed Message")]), _vm._v(" "), _c("br"), _vm._v("\n              " + _vm._s(_vm.generateOrderMessagePreview(_vm.ecommerce_settings.order_placed_message)) + "\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("strong", [_vm._v("Order Confirmed Message")]), _vm._v(" "), _c("br"), _vm._v("\n              " + _vm._s(_vm.generateOrderMessagePreview(_vm.ecommerce_settings.order_confirmed_message)) + "\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("strong", [_vm._v("Order Dispatched Message")]), _vm._v(" "), _c("br"), _vm._v("\n              " + _vm._s(_vm.generateOrderMessagePreview(_vm.ecommerce_settings.order_dispatched_message)) + "\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("strong", [_vm._v("Order Completed Message")]), _vm._v(" "), _c("br"), _vm._v("\n              " + _vm._s(_vm.generateOrderMessagePreview(_vm.ecommerce_settings.order_completed_message)) + "\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("strong", [_vm._v("Order Canceled Message")]), _vm._v(" "), _c("br"), _vm._v("\n              " + _vm._s(_vm.generateOrderMessagePreview(_vm.ecommerce_settings.order_canceled_message)) + "\n            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("hr"), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mt-4 mb-4"
  }, [_c("strong", [_vm._v("Website Per Page Products Count")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "number",
      name: "api_endpoint"
    },
    model: {
      value: _vm.ecommerce_settings.website_per_page_pagination,
      callback: function callback($$v) {
        _vm.$set(_vm.ecommerce_settings, "website_per_page_pagination", $$v);
      },
      expression: "ecommerce_settings.website_per_page_pagination"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-button", {
    attrs: {
      color: "success",
      type: "filled",
      size: "small"
    },
    on: {
      click: _vm.saveEcommerceSettings
    }
  }, [_vm._v("Save")])], 1)])]), _vm._v(" "), _c("vx-card", {
    staticClass: "mt-2",
    attrs: {
      title: "Website Initial Popup"
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-switch", {
    staticClass: "mt-3",
    attrs: {
      color: "success",
      "vs-value": "1"
    },
    model: {
      value: _vm.ecommerce_settings.initial_popup.enabled,
      callback: function callback($$v) {
        _vm.$set(_vm.ecommerce_settings.initial_popup, "enabled", $$v);
      },
      expression: "ecommerce_settings.initial_popup.enabled"
    }
  }, [_c("span", {
    attrs: {
      slot: "on"
    },
    slot: "on"
  }, [_vm._v("Enabled")]), _vm._v(" "), _c("span", {
    attrs: {
      slot: "off"
    },
    slot: "off"
  }, [_vm._v("Disabled")])])], 1), _vm._v(" "), _vm.ecommerce_settings.initial_popup.enabled ? _c("div", {
    staticClass: "vx-col w-2/3 mt-3"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("vs-select", {
    staticClass: "vx-col w-1/2",
    attrs: {
      label: "Show Popup On"
    },
    model: {
      value: _vm.ecommerce_settings.initial_popup.interval,
      callback: function callback($$v) {
        _vm.$set(_vm.ecommerce_settings.initial_popup, "interval", $$v);
      },
      expression: "ecommerce_settings.initial_popup.interval"
    }
  }, _vm._l([{
    text: "On Every Load",
    value: "everytime"
  }, {
    text: "Every 1 Minute",
    value: "1"
  }, {
    text: "Every 5 Minutes",
    value: "5"
  }, {
    text: "Every 10 Minutes",
    value: "10"
  }, {
    text: "Every 20 Minutes",
    value: "20"
  }, {
    text: "Every 30 Minutes",
    value: "30"
  }, {
    text: "Every 40 Minutes",
    value: "40"
  }, {
    text: "Every 50 Minutes",
    value: "50"
  }, {
    text: "Every 1 Hour",
    value: "60"
  }, {
    text: "Every 1 & half Hour",
    value: "90"
  }, {
    text: "Every 2 Hours",
    value: "120"
  }, {
    text: "Every 3 Hours",
    value: "180"
  }, {
    text: "Every 4 Hours",
    value: "240"
  }, {
    text: "Every 5 Hours",
    value: "300"
  }, {
    text: "Every 10 Hours",
    value: "600"
  }, {
    text: "Every 12 Hours",
    value: "720"
  }], function (item, index) {
    return _c("vs-select-item", {
      key: "interval".concat(index),
      attrs: {
        value: item.value,
        text: item.text
      }
    });
  }), 1), _vm._v(" "), _c("vs-input", {
    staticClass: "vx-col w-1/2",
    attrs: {
      label: "Popup Delay (seconds)",
      name: "order_placed_message"
    },
    model: {
      value: _vm.ecommerce_settings.initial_popup.popup_delay,
      callback: function callback($$v) {
        _vm.$set(_vm.ecommerce_settings.initial_popup, "popup_delay", $$v);
      },
      expression: "ecommerce_settings.initial_popup.popup_delay"
    }
  }), _vm._v(" "), _c("vs-input", {
    staticClass: "vx-col w-full mt-2 mb-2",
    attrs: {
      label: "URL",
      name: "link"
    },
    model: {
      value: _vm.ecommerce_settings.initial_popup.link,
      callback: function callback($$v) {
        _vm.$set(_vm.ecommerce_settings.initial_popup, "link", $$v);
      },
      expression: "ecommerce_settings.initial_popup.link"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mt-4"
  }, [_vm.ecommerce_settings.initial_popup.image ? _c("div", {
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
      src: _vm.ecommerce_settings.initial_popup.image,
      alt: ""
    }
  })]) : _vm._e(), _vm._v(" "), _c("input", {
    ref: "upload_popup_image",
    staticClass: "hidden",
    attrs: {
      type: "file",
      accept: "image/*"
    },
    on: {
      change: _vm.popUpImageUploaded
    }
  }), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "primary",
      size: "small",
      type: "border"
    },
    on: {
      click: function click($event) {
        return _vm.$refs.upload_popup_image.click();
      }
    }
  }, [_vm._v("Upload Logo")])], 1)], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mt-3"
  }, [_c("vs-button", {
    attrs: {
      color: "success",
      type: "filled",
      size: "small"
    },
    on: {
      click: _vm.saveEcommercePopupSetting
    }
  }, [_vm._v("Save")])], 1)])])], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/views/pages/settings/Sidebar.vue?vue&type=style&index=0&id=7040b1b7&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/views/pages/settings/Sidebar.vue?vue&type=style&index=0&id=7040b1b7&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .dashboard--setting-sidebar >>> .vx-card__body {\n  padding: 10px !important;\n} */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/views/pages/settings/Sidebar.vue?vue&type=style&index=0&id=7040b1b7&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/views/pages/settings/Sidebar.vue?vue&type=style&index=0&id=7040b1b7&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=style&index=0&id=7040b1b7&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/views/pages/settings/Sidebar.vue?vue&type=style&index=0&id=7040b1b7&scoped=true&lang=css&");

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

/***/ "./packages/core/resources/js/src/views/pages/settings/Sidebar.vue":
/*!*************************************************************************!*\
  !*** ./packages/core/resources/js/src/views/pages/settings/Sidebar.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_7040b1b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=7040b1b7&scoped=true& */ "./packages/core/resources/js/src/views/pages/settings/Sidebar.vue?vue&type=template&id=7040b1b7&scoped=true&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/views/pages/settings/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Sidebar_vue_vue_type_style_index_0_id_7040b1b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=style&index=0&id=7040b1b7&scoped=true&lang=css& */ "./packages/core/resources/js/src/views/pages/settings/Sidebar.vue?vue&type=style&index=0&id=7040b1b7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_7040b1b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_7040b1b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7040b1b7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/views/pages/settings/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/views/pages/settings/Sidebar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/views/pages/settings/Sidebar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/views/pages/settings/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/views/pages/settings/Sidebar.vue?vue&type=style&index=0&id=7040b1b7&scoped=true&lang=css&":
/*!**********************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/views/pages/settings/Sidebar.vue?vue&type=style&index=0&id=7040b1b7&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_7040b1b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=style&index=0&id=7040b1b7&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/views/pages/settings/Sidebar.vue?vue&type=style&index=0&id=7040b1b7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_7040b1b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_7040b1b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_7040b1b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_7040b1b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./packages/core/resources/js/src/views/pages/settings/Sidebar.vue?vue&type=template&id=7040b1b7&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/views/pages/settings/Sidebar.vue?vue&type=template&id=7040b1b7&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_7040b1b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=7040b1b7&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/views/pages/settings/Sidebar.vue?vue&type=template&id=7040b1b7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_7040b1b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_7040b1b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/settings/Settings.vue":
/*!*******************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/settings/Settings.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_951cc08c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=951cc08c& */ "./packages/ecommerce/resources/js/src/views/admin/settings/Settings.vue?vue&type=template&id=951cc08c&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./packages/ecommerce/resources/js/src/views/admin/settings/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_951cc08c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_951cc08c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ecommerce/resources/js/src/views/admin/settings/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/settings/Settings.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/settings/Settings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/settings/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/settings/Settings.vue?vue&type=template&id=951cc08c&":
/*!**************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/settings/Settings.vue?vue&type=template&id=951cc08c& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_951cc08c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=951cc08c& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/settings/Settings.vue?vue&type=template&id=951cc08c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_951cc08c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_951cc08c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);