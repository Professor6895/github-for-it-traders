(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
      order_id: "",
      order: {},
      order_loading: true,
      order_detail_popup: false
    };
  },
  mounted: function mounted() {
    this.order_id = this.$route.params.id;
    this.fetchOrderDetail();
  },
  methods: {
    fetchOrderDetail: function fetchOrderDetail() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.order_loading = true;
                _context.prev = 1;
                _context.next = 4;
                return _this.$http.get("/api/admin/orders/".concat(_this.order_id, "/get-order-detail"));

              case 4:
                response = _context.sent;

                if (response.data.success) {
                  _this.order = response.data.data;
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
                  name: "page-error-404"
                }));

              case 13:
                _context.prev = 13;
                _this.order_loading = false;
                return _context.finish(13);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8, 13, 16]]);
      }))();
    },
    updateOrderDetail: function updateOrderDetail() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var payload, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$vs.loading({
                  container: "#loading--container"
                });

                _context2.prev = 1;
                payload = {
                  status: _this2.order.status,
                  notify_user: _this2.order.notify_user,
                  notify_via_email: _this2.order.notify_via_email,
                  notify_via_sms: _this2.order.notify_via_sms
                };
                _context2.next = 5;
                return _this2.$http.post("/api/admin/orders/".concat(_this2.order_id, "/update-order-status"), payload);

              case 5:
                response = _context2.sent;

                if (response.data.success) {
                  _this2.successNotification(response.data.message);

                  _this2.order_detail_popup = false;

                  _this2.fetchOrderDetail();
                }

                _context2.next = 14;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);

                _this2.errorNotification("Something went wrong! Please retry!!");

                if (!(_context2.t0.response.status === 404)) {
                  _context2.next = 14;
                  break;
                }

                return _context2.abrupt("return", _this2.$router.push({
                  name: "page-error-404"
                }));

              case 14:
                _context2.prev = 14;

                _this2.$vs.loading.close("#loading--container > .con-vs-loading");

                return _context2.finish(14);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 9, 14, 17]]);
      }))();
    },
    getOrderStatusColor: function getOrderStatusColor() {
      var status = this.order.status;

      switch (status) {
        case 1:
          return "text-warning";

        case 2:
          return "text-success";

        case 3:
          return "text-priamry";

        case 4:
          return "text-success";

        case 5:
          return "text-danger";

        default:
          return "";
      }
    },
    generateWarrantySerial: function generateWarrantySerial(order_item) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.$http.post("/api/admin/orders/order-item/".concat(order_item.id, "/generate-warranty-serial"));

              case 2:
                response = _context3.sent;

                if (response.data.success) {
                  _this3.fetchOrderDetail();
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue?vue&type=template&id=4c3e9f7a&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue?vue&type=template&id=4c3e9f7a&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "vx-card p-4"
  }, [!_vm.order_loading ? _c("div", [_c("vs-popup", {
    attrs: {
      title: "Order Detail",
      active: _vm.order_detail_popup
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.order_detail_popup = $event;
      }
    }
  }, [_c("div", {
    staticClass: "vs-con-loading__container",
    attrs: {
      id: "loading--container"
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("vs-select", {
    staticClass: "w-full",
    attrs: {
      label: "Order Status"
    },
    model: {
      value: _vm.order.status,
      callback: function callback($$v) {
        _vm.$set(_vm.order, "status", $$v);
      },
      expression: "order.status"
    }
  }, _vm._l([{
    text: "Placed",
    value: 1
  }, {
    text: "Confirmed",
    value: 2
  }, {
    text: "Dispatched",
    value: 3
  }, {
    text: "Completed",
    value: 4
  }, {
    text: "Canceled",
    value: 5
  }], function (item, index) {
    return _c("vs-select-item", {
      key: "order".concat(index),
      attrs: {
        value: item.value,
        text: item.text
      }
    });
  }), 1), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.errors.has("parent_id"),
      expression: "errors.has('parent_id')"
    }],
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("parent_id")))])], 1), _vm._v(" "), _vm.order.status !== 1 ? _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("vs-checkbox", {
    model: {
      value: _vm.order.notify_user,
      callback: function callback($$v) {
        _vm.$set(_vm.order, "notify_user", $$v);
      },
      expression: "order.notify_user"
    }
  }, [_vm._v("Notify User")]), _vm._v(" "), _vm.order.notify_user ? _c("vs-checkbox", {
    staticClass: "mt-2",
    model: {
      value: _vm.order.notify_via_email,
      callback: function callback($$v) {
        _vm.$set(_vm.order, "notify_via_email", $$v);
      },
      expression: "order.notify_via_email"
    }
  }, [_vm._v("Via Email")]) : _vm._e(), _vm._v(" "), _vm.order.notify_user ? _c("vs-checkbox", {
    staticClass: "mt-2",
    model: {
      value: _vm.order.notify_via_sms,
      callback: function callback($$v) {
        _vm.$set(_vm.order, "notify_via_sms", $$v);
      },
      expression: "order.notify_via_sms"
    }
  }, [_vm._v("Via SMS")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-button", {
    staticClass: "mr-3 mt-5",
    attrs: {
      size: "small"
    },
    on: {
      click: _vm.updateOrderDetail
    }
  }, [_vm._v("Submit")])], 1)])])]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "vx-row mb-4"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("p", [_c("strong", [_vm._v("Order Status")]), _vm._v(" :\n\n            "), _c("span", {
    "class": _vm.getOrderStatusColor()
  }, [_vm._v(_vm._s(this.order.order_status))])]), _vm._v(" "), _c("p", {
    staticClass: "mt-2"
  }, [_c("strong", [_vm._v("Invoice Number")]), _vm._v(" :\n            "), _c("i", [_vm._v("#" + _vm._s(_vm.order.invoice_number))])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("vs-button", {
    staticClass: "float-right",
    attrs: {
      color: "warning",
      size: "small",
      icon: "create"
    },
    on: {
      click: function click($event) {
        _vm.order_detail_popup = true;
      }
    }
  }, [_vm._v("Edit Order")])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-4"
  }, [_c("div", {
    staticClass: "vx-col md:w-1/3"
  }, [_c("div", {
    staticClass: "order-detail--wrapper p-3"
  }, [_c("h6", {
    staticClass: "mb-3"
  }, [_vm._v("Order Details")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Order Date")]), _vm._v(" :\n            " + _vm._s(_vm._f("date_format")(_vm.order.created_at, "MMMM Do YYYY, h:mm a")) + "\n          ")]), _vm._v(" "), _c("p", {
    staticClass: "mt-2"
  }, [_c("strong", [_vm._v("Payment Method")]), _vm._v(" : " + _vm._s(_vm.order.payment_type) + "\n          ")])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/3"
  }, [_c("div", {
    staticClass: "order-detail--wrapper p-3"
  }, [_c("h6", {
    staticClass: "mb-3"
  }, [_vm._v("Customer Details")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Full Name : ")]), _vm._v(" " + _vm._s(_vm.order.user.name))]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Email : ")]), _vm._v(" " + _vm._s(_vm.order.user.email))]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Contact : ")]), _vm._v(" " + _vm._s(_vm.order.user.contact_number))])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/3"
  }, [_c("div", {
    staticClass: "order-detail--wrapper p-3"
  }, [_c("h6", {
    staticClass: "mb-3"
  }, [_vm._v("Shipping Address")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Full Name : ")]), _vm._v("\n            " + _vm._s(_vm.order.shipping_address.full_name) + "\n          ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Contact : ")]), _vm._v("\n            " + _vm._s(_vm.order.shipping_address.contact_number) + "\n          ")]), _vm._v(" "), _c("p", [_vm._v("\n            " + _vm._s(_vm.order.shipping_address.province_detail.name) + ",\n            " + _vm._s(_vm.order.shipping_address.district + " " + _vm.order.shipping_address.country) + "\n          ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("City : ")]), _vm._v("\n            " + _vm._s(_vm.order.shipping_address.city) + " (" + _vm._s(_vm.order.shipping_address.landmark) + ")\n          ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-4"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-table", {
    attrs: {
      stripe: "",
      data: _vm.order.items,
      "max-items": "40"
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
            staticClass: "d-inline-block",
            attrs: {
              src: tr.product.product_image.thumb,
              width: "40"
            }
          })]), _vm._v(" "), _c("vs-td", [_c("span", {
            staticClass: "d-inline-block"
          }, [_vm._v(_vm._s(tr.product.name))])]), _vm._v(" "), _c("vs-td", [Object.keys(tr.product_attributes).length ? _c("div", _vm._l(tr.product_attributes, function (value, key) {
            return _c("p", [_c("strong", [_vm._v(_vm._s(key) + " : ")]), _vm._v(" " + _vm._s(value) + "\n                  ")]);
          }), 0) : _c("div", [_vm._v("---")])]), _vm._v(" "), _c("vs-td", [_vm._v(" Rs. " + _vm._s(tr.product_price) + " ")]), _vm._v(" "), _c("vs-td", [_vm._v("\n                " + _vm._s(tr.quantity) + "\n              ")]), _vm._v(" "), _c("vs-td", [tr.warranty_token ? _c("div", [_vm._v("\n                  " + _vm._s(tr.warranty_token) + "\n                ")]) : _c("div", [_c("vs-button", {
            attrs: {
              color: "warning",
              size: "small"
            },
            on: {
              click: function click($event) {
                return _vm.generateWarrantySerial(tr);
              }
            }
          }, [_vm._v("Generate Warranty Serial")])], 1)]), _vm._v(" "), _c("vs-td", [_vm._v(" Rs. " + _vm._s(tr.product_price * tr.quantity) + " ")])], 1);
        });
      }
    }], null, false, 2055235615)
  }, [_c("template", {
    slot: "thead"
  }, [_c("vs-th", [_vm._v("Image")]), _vm._v(" "), _c("vs-th", [_vm._v("Product")]), _vm._v(" "), _c("vs-th", [_vm._v("Attribute")]), _vm._v(" "), _c("vs-th", [_vm._v("Unit Price")]), _vm._v(" "), _c("vs-th", [_vm._v("Qty")]), _vm._v(" "), _c("vs-th", [_vm._v("Warranty Serial")]), _vm._v(" "), _c("vs-th", [_vm._v("Total")])], 1)], 2)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-3"
  }, [_c("div", {
    staticClass: "vx-col w-full md:w-2/3 text-right"
  }), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full md:w-1/3"
  }, [_c("table", {
    staticClass: "order-price-table"
  }, [_c("tr", [_c("th", [_vm._v("Order Total")]), _vm._v(" "), _c("td", [_vm._v("Rs. " + _vm._s(_vm.order.order_total))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Shipping Cost")]), _vm._v(" "), _c("td", [_vm._v("Rs. " + _vm._s(_vm.order.shipping_cost))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Grand Total")]), _vm._v(" "), _c("td", [_vm._v("Rs. " + _vm._s(_vm.order.total))])])])])])], 1) : _vm._e()]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue?vue&type=style&index=0&id=4c3e9f7a&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue?vue&type=style&index=0&id=4c3e9f7a&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .order-detail--wrapper[data-v-4c3e9f7a] {\n  border: 1px solid #e5e5e5;\n  border-radius: 15px;\n}\n.order-price-table[data-v-4c3e9f7a] {\n  font-size: 20px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue?vue&type=style&index=0&id=4c3e9f7a&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue?vue&type=style&index=0&id=4c3e9f7a&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderDetail.vue?vue&type=style&index=0&id=4c3e9f7a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue?vue&type=style&index=0&id=4c3e9f7a&lang=scss&scoped=true&");

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

/***/ "./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue":
/*!********************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderDetail_vue_vue_type_template_id_4c3e9f7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderDetail.vue?vue&type=template&id=4c3e9f7a&scoped=true& */ "./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue?vue&type=template&id=4c3e9f7a&scoped=true&");
/* harmony import */ var _OrderDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderDetail.vue?vue&type=script&lang=js& */ "./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OrderDetail_vue_vue_type_style_index_0_id_4c3e9f7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderDetail.vue?vue&type=style&index=0&id=4c3e9f7a&lang=scss&scoped=true& */ "./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue?vue&type=style&index=0&id=4c3e9f7a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OrderDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderDetail_vue_vue_type_template_id_4c3e9f7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderDetail_vue_vue_type_template_id_4c3e9f7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4c3e9f7a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue?vue&type=style&index=0&id=4c3e9f7a&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue?vue&type=style&index=0&id=4c3e9f7a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_style_index_0_id_4c3e9f7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderDetail.vue?vue&type=style&index=0&id=4c3e9f7a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue?vue&type=style&index=0&id=4c3e9f7a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_style_index_0_id_4c3e9f7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_style_index_0_id_4c3e9f7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_style_index_0_id_4c3e9f7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_style_index_0_id_4c3e9f7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue?vue&type=template&id=4c3e9f7a&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue?vue&type=template&id=4c3e9f7a&scoped=true& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_template_id_4c3e9f7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderDetail.vue?vue&type=template&id=4c3e9f7a&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/orders/OrderDetail.vue?vue&type=template&id=4c3e9f7a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_template_id_4c3e9f7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_template_id_4c3e9f7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);