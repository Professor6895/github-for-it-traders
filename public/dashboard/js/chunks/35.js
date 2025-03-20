(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_file_download__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-file-download */ "./node_modules/js-file-download/file-download.js");
/* harmony import */ var js_file_download__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_file_download__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      orders: {
        data: [],
        per_page: 0,
        total: 0,
        last_page: 0
      },
      table_options: {
        current_page: 1
      },
      search_keyword: "",
      sort: {},
      filters: {}
    };
  },
  components: {
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  mounted: function mounted() {
    this.fetchOrders();
  },
  methods: {
    handleSort: function handleSort(key, active) {
      if (key) {
        this.loading = false;
        this.sort[key] = active;
        this.fetchOrders();
      }
    },
    exportOrders: function exportOrders() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var payload, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$vs.loading();

                _context.prev = 1;
                payload = {
                  page: _this.table_options.current_page,
                  search: _this.search_keyword,
                  sort: JSON.stringify(_this.sort),
                  filters: JSON.stringify(_this.filters)
                };
                _context.next = 5;
                return _this.$http.post("/api/admin/orders/export-excel", payload, {
                  headers: {
                    "Content-Disposition": "attachment; filename=testfile.xlsx",
                    "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/json"
                  },
                  responseType: "arraybuffer"
                });

              case 5:
                response = _context.sent;
                js_file_download__WEBPACK_IMPORTED_MODULE_0___default()(response.data, "orders_export.xlsx");
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);

                _this.errorNotification("Something went wrong!! Please retry");

              case 12:
                _context.prev = 12;

                _this.$vs.loading.close();

                return _context.finish(12);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9, 12, 15]]);
      }))();
    },
    fetchOrders: function fetchOrders() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2.loading) {
                  _this2.$vs.loading({
                    container: "#loading--container"
                  });
                }

                _context2.prev = 1;
                _context2.next = 4;
                return _this2.$http.get("/api/admin/orders/get-orders", {
                  params: {
                    page: _this2.table_options.current_page,
                    search: _this2.search_keyword,
                    sort: _this2.sort,
                    filters: JSON.stringify(_this2.filters)
                  }
                });

              case 4:
                response = _context2.sent;
                _this2.orders = response.data.data;
                _this2.selectedOrder = response.data.data.data[0];
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);

                _this2.errorNotification("Something went wrong!! Please retry");

              case 12:
                _context2.prev = 12;

                _this2.$vs.loading.close("#loading--container > .con-vs-loading");

                _this2.loading = false;
                return _context2.finish(12);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 9, 12, 16]]);
      }))();
    },
    getOrderStatus: function getOrderStatus(status) {
      switch (status) {
        case 1:
          return "Pending";

        case 2:
          return "Confirmed";

        case 3:
          return "Dispatched";

        case 4:
          return "Completed";

        case 5:
          return "Cancelled";

        default:
          return "";
      }
    },
    getOrderStatusColor: function getOrderStatusColor(status) {
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
    }
  },
  watch: {
    "table_options.current_page": function table_optionsCurrent_page() {
      this.fetchOrders();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue?vue&type=template&id=1aa125fa&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue?vue&type=template&id=1aa125fa&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "mb-3",
    attrs: {
      title: "Filters"
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col md:w-2/5"
  }, [_c("label", {
    staticClass: "vs-input--label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Customer Name or Order ID..")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      placeholder: "Customer Name or Order ID..",
      icon: "search"
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        _vm.table_options.current_page = 1;

        _vm.fetchOrders();
      }
    },
    model: {
      value: _vm.search_keyword,
      callback: function callback($$v) {
        _vm.search_keyword = $$v;
      },
      expression: "search_keyword"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/5"
  }, [_c("label", {
    staticClass: "vs-input--label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Date Range")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      config: {
        enableTime: false,
        mode: "range"
      },
      name: "publish_date"
    },
    model: {
      value: _vm.filters.date_range,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "date_range", $$v);
      },
      expression: "filters.date_range"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/5"
  }, [_c("label", {
    staticClass: "vs-input--label",
    staticStyle: {
      color: "white"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v("Brand")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: function click($event) {
        _vm.loading = true;

        _vm.fetchOrders();
      }
    }
  }, [_vm._v("Apply Filter")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/5"
  }, [_c("label", {
    staticClass: "vs-input--label",
    staticStyle: {
      color: "white"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v("Brand")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("vs-button", {
    staticClass: "float-right mr-4",
    attrs: {
      color: "primary",
      type: "border",
      icon: "get_app"
    },
    on: {
      click: function click($event) {
        return _vm.exportOrders();
      }
    }
  }, [_vm._v("Export Orders")])], 1)])]), _vm._v(" "), _vm.loading ? _c("pageLoader") : _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full mt-2"
  }, [_c("vx-card", {
    staticClass: "card-padding-5 vs-con-loading__container",
    attrs: {
      id: "loading--container"
    }
  }, [_c("vs-table", {
    staticClass: "mt-4",
    attrs: {
      data: _vm.orders.data,
      stripe: "",
      "max-items": _vm.orders.per_page,
      total: _vm.orders.total,
      sst: true
    },
    on: {
      sort: _vm.handleSort
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var data = _ref.data;
        return [_c("tbody", _vm._l(data, function (tr, indextr) {
          return _c("vs-tr", {
            key: indextr,
            attrs: {
              data: tr
            }
          }, [_c("vs-td", [_c("i", [_vm._v("#" + _vm._s(tr.invoice_number))])]), _vm._v(" "), _c("vs-td", [_c("vs-chip", [_c("vs-avatar", {
            attrs: {
              color: "transparent",
              size: "50px",
              src: tr.user.avatar ? tr.user.avatar_image.thumb : __webpack_require__(/*! @assets/images/default-avatar.png */ "./packages/core/resources/assets/images/default-avatar.png")
            }
          }), _vm._v("\n                    " + _vm._s(tr.user.name) + "\n                  ")], 1)], 1), _vm._v(" "), _c("vs-td", [_vm._v("\n                  " + _vm._s(_vm._f("title")(tr.payment_type)) + "\n                ")]), _vm._v(" "), _c("vs-td", [_vm._v(" Rs. " + _vm._s(tr.total) + " ")]), _vm._v(" "), _c("vs-td", [_c("span", {
            "class": _vm.getOrderStatusColor(tr.status)
          }, [_vm._v(_vm._s(_vm.getOrderStatus(tr.status)))])]), _vm._v(" "), _c("vs-td", [_vm._v("\n                  " + _vm._s(_vm._f("date_format")(tr.created_at, "timeago")) + "\n                ")]), _vm._v(" "), _c("vs-td", [_c("router-link", {
            attrs: {
              to: {
                name: "ecommerce-admin-order-detail",
                params: {
                  id: tr.id
                }
              }
            }
          }, [_c("vs-button", {
            attrs: {
              size: "small"
            }
          }, [_vm._v("View Detail")])], 1)], 1)], 1);
        }), 1)];
      }
    }])
  }, [_c("template", {
    slot: "thead"
  }, [_c("vs-th", {
    attrs: {
      "sort-key": "id"
    }
  }, [_vm._v("Invoice Number")]), _vm._v(" "), _c("vs-th", [_vm._v("Customer Name")]), _vm._v(" "), _c("vs-th", [_vm._v("Payment Type")]), _vm._v(" "), _c("vs-th", [_vm._v("Order Price")]), _vm._v(" "), _c("vs-th", [_vm._v("Status")]), _vm._v(" "), _c("vs-th", {
    attrs: {
      "sort-key": "created_at"
    }
  }, [_vm._v("Order Date")]), _vm._v(" "), _c("vs-th", [_vm._v("Actions")])], 1)], 2), _vm._v(" "), _c("vs-pagination", {
    staticClass: "mt-6",
    attrs: {
      total: _vm.orders.last_page
    },
    model: {
      value: _vm.table_options.current_page,
      callback: function callback($$v) {
        _vm.$set(_vm.table_options, "current_page", $$v);
      },
      expression: "table_options.current_page"
    }
  })], 1)], 1)])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue?vue&type=style&index=0&id=1aa125fa&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue?vue&type=style&index=0&id=1aa125fa&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".each--order[data-v-1aa125fa] {\n  display: inline-block;\n  width: 100%;\n}[dir] .each--order[data-v-1aa125fa] {\n  border: 1px solid #e5e5e5;\n  border-radius: 10px;\n  margin: 4px 0px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/js-file-download/file-download.js":
/*!********************************************************!*\
  !*** ./node_modules/js-file-download/file-download.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(data, filename, mime, bom) {
    var blobData = (typeof bom !== 'undefined') ? [bom, data] : [data]
    var blob = new Blob(blobData, {type: mime || 'application/octet-stream'});
    if (typeof window.navigator.msSaveBlob !== 'undefined') {
        // IE workaround for "HTML7007: One or more blob URLs were
        // revoked by closing the blob for which they were created.
        // These URLs will no longer resolve as the data backing
        // the URL has been freed."
        window.navigator.msSaveBlob(blob, filename);
    }
    else {
        var blobURL = (window.URL && window.URL.createObjectURL) ? window.URL.createObjectURL(blob) : window.webkitURL.createObjectURL(blob);
        var tempLink = document.createElement('a');
        tempLink.style.display = 'none';
        tempLink.href = blobURL;
        tempLink.setAttribute('download', filename);

        // Safari thinks _blank anchor are pop ups. We only want to set _blank
        // target if the browser does not support the HTML5 download attribute.
        // This allows you to download files in desktop safari if pop up blocking
        // is enabled.
        if (typeof tempLink.download === 'undefined') {
            tempLink.setAttribute('target', '_blank');
        }

        document.body.appendChild(tempLink);
        tempLink.click();

        // Fixes "webkit blob resource error 1"
        setTimeout(function() {
            document.body.removeChild(tempLink);
            window.URL.revokeObjectURL(blobURL);
        }, 200)
    }
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue?vue&type=style&index=0&id=1aa125fa&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue?vue&type=style&index=0&id=1aa125fa&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Orders.vue?vue&type=style&index=0&id=1aa125fa&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue?vue&type=style&index=0&id=1aa125fa&lang=scss&scoped=true&");

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

/***/ "./packages/core/resources/assets/images/default-avatar.png":
/*!******************************************************************!*\
  !*** ./packages/core/resources/assets/images/default-avatar.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/default-avatar.png?27b9408da668f335b85e9fe669908cab";

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue":
/*!***************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Orders_vue_vue_type_template_id_1aa125fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Orders.vue?vue&type=template&id=1aa125fa&scoped=true& */ "./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue?vue&type=template&id=1aa125fa&scoped=true&");
/* harmony import */ var _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Orders.vue?vue&type=script&lang=js& */ "./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Orders_vue_vue_type_style_index_0_id_1aa125fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Orders.vue?vue&type=style&index=0&id=1aa125fa&lang=scss&scoped=true& */ "./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue?vue&type=style&index=0&id=1aa125fa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Orders_vue_vue_type_template_id_1aa125fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Orders_vue_vue_type_template_id_1aa125fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1aa125fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Orders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue?vue&type=style&index=0&id=1aa125fa&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue?vue&type=style&index=0&id=1aa125fa&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_style_index_0_id_1aa125fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Orders.vue?vue&type=style&index=0&id=1aa125fa&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue?vue&type=style&index=0&id=1aa125fa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_style_index_0_id_1aa125fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_style_index_0_id_1aa125fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_style_index_0_id_1aa125fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_style_index_0_id_1aa125fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue?vue&type=template&id=1aa125fa&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue?vue&type=template&id=1aa125fa&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_1aa125fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Orders.vue?vue&type=template&id=1aa125fa&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/orders/Orders.vue?vue&type=template&id=1aa125fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_1aa125fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_1aa125fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);