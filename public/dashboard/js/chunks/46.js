(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/products/ProductsList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/products/ProductsList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_file_download__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-file-download */ "./node_modules/js-file-download/file-download.js");
/* harmony import */ var js_file_download__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_file_download__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      products: {
        data: [],
        per_page: 0,
        total: 0,
        last_page: 0
      },
      table_options: {
        current_page: 1
      },
      search_keyword: "",
      duplicate_popup: false,
      duplicate_product: {
        duplicate_images: false,
        duplicate_variants: false
      },
      brands: [],
      dropdown_categories: [],
      sort: {},
      filters: {}
    };
  },
  components: {
    "v-select": vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  mounted: function mounted() {
    this.fetchProducts();
    this.fetchBrands();
    this.fetchCategoryDropdown();
  },
  methods: {
    fetchCategoryDropdown: function fetchCategoryDropdown() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                url = "/api/admin/product-categories-dropdown";
                _context.next = 4;
                return _this.$http.get(url);

              case 4:
                response = _context.sent;
                _this.dropdown_categories = response.data.data;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);

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
        }, _callee, null, [[0, 8, 11, 14]]);
      }))();
    },
    fetchBrands: function fetchBrands() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                url = "/api/admin/product-brands/get-dropdown";
                _context2.next = 4;
                return _this2.$http.get(url);

              case 4:
                response = _context2.sent;
                _this2.brands = response.data.data;
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);

                _this2.errorNotification("Something went wrong while fetching albums!! Please retry");

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    },
    handleSort: function handleSort(key, active) {
      if (key) {
        this.loading = false;
        this.sort[key] = active;
        this.fetchProducts();
      }
    },
    exportProducts: function exportProducts() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var payload, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.$vs.loading();

                _context3.prev = 1;
                payload = {
                  page: _this3.table_options.current_page,
                  search: _this3.search_keyword,
                  sort: JSON.stringify(_this3.sort),
                  filters: JSON.stringify(_this3.filters)
                };
                _context3.next = 5;
                return _this3.$http.post("/api/admin/products/export-excel", payload, {
                  headers: {
                    "Content-Disposition": "attachment; filename=testfile.xlsx",
                    "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/json"
                  },
                  responseType: "arraybuffer"
                });

              case 5:
                response = _context3.sent;
                js_file_download__WEBPACK_IMPORTED_MODULE_1___default()(response.data, "products_export.xlsx");
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](1);

                _this3.errorNotification("Something went wrong!! Please retry");

              case 12:
                _context3.prev = 12;

                _this3.$vs.loading.close();

                return _context3.finish(12);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 9, 12, 15]]);
      }))();
    },
    fetchProducts: function fetchProducts() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var response;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!_this4.loading) {
                  _this4.$vs.loading({
                    container: "#loading--container"
                  });
                }

                _context4.prev = 1;
                _context4.next = 4;
                return _this4.$http.get("/api/admin/products", {
                  params: {
                    page: _this4.table_options.current_page,
                    search: _this4.search_keyword,
                    sort: _this4.sort,
                    filters: _this4.filters
                  }
                });

              case 4:
                response = _context4.sent;
                _this4.products = response.data.data;
                _context4.next = 11;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](1);

                _this4.errorNotification("Something went wrong!! Please retry");

              case 11:
                _context4.prev = 11;

                _this4.$vs.loading.close("#loading--container > .con-vs-loading");

                _this4.loading = false;
                return _context4.finish(11);

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 8, 11, 15]]);
      }))();
    },
    // handlePagination(page) {
    //   this.table_options.current_page = page;
    //   this.fetchProducts();
    // },
    toggleProductStatus: function toggleProductStatus(product) {
      var _this5 = this;

      this.$vs.dialog({
        type: "confirm",
        color: "primary",
        title: "Confirm",
        text: "Are you sure you want to change the product status?",
        accept: function () {
          var _accept = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var payload, response;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    payload = {
                      _method: "PATCH"
                    };
                    _context5.next = 3;
                    return _this5.$http.post("/api/admin/products/".concat(product.id, "/toggle-status"), payload);

                  case 3:
                    response = _context5.sent;

                    if (response.data.success) {
                      _this5.successNotification(response.data.message);

                      product.status = response.data.status;
                    } else {
                      _this5.errorNotification(response.data.message);
                    }

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));

          function accept() {
            return _accept.apply(this, arguments);
          }

          return accept;
        }()
      });
    },
    duplicateProduct: function duplicateProduct(product_id) {
      this.duplicate_product.product_id = product_id;
      this.duplicate_popup = true;
    },
    processProductDuplication: function processProductDuplication() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;

                _this6.$vs.loading({
                  container: "#loading--container"
                });

                url = "/api/admin/product/make-duplicate";
                _context6.next = 5;
                return _this6.$http.post(url, _this6.duplicate_product);

              case 5:
                response = _context6.sent;

                if (response.data.success) {
                  _this6.successNotification(response.data.message);

                  _this6.duplicate_popup = false;

                  _this6.fetchProducts();
                } else {
                  _this6.errorNotification(response.data.message);
                }

                _context6.next = 12;
                break;

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](0);

                _this6.errorNotification("Something went wrong! Please retry!!");

              case 12:
                _context6.prev = 12;

                _this6.$vs.loading.close("#loading--container > .con-vs-loading");

                return _context6.finish(12);

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 9, 12, 15]]);
      }))();
    },
    deleteProduct: function deleteProduct(product_id) {
      var _this7 = this;

      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "Confirm",
        text: "Are you sure you want to delete the product?",
        accept: function () {
          var _accept2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var response;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return _this7.$http["delete"]("/api/admin/products/".concat(product_id));

                  case 2:
                    response = _context7.sent;

                    if (response.data.success) {
                      _this7.successNotification(response.data.message);

                      _this7.fetchProducts();
                    } else {
                      _this7.errorNotification(response.data.message);
                    }

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));

          function accept() {
            return _accept2.apply(this, arguments);
          }

          return accept;
        }()
      });
    }
  },
  watch: {
    "table_options.current_page": function table_optionsCurrent_page() {
      this.fetchProducts();
    },
    duplicate_popup: function duplicate_popup(newVal) {
      if (!newVal) {
        this.duplicate_product = {
          duplicate_images: false,
          duplicate_variants: false
        };
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/products/ProductsList.vue?vue&type=template&id=4b2c0d98&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/products/ProductsList.vue?vue&type=template&id=4b2c0d98& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("Search Keyword")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      placeholder: "Search Product Here...",
      icon: "search"
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        _vm.table_options.current_page = 1;

        _vm.fetchProducts();
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
  }, [_vm._v("Category")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      options: _vm.dropdown_categories,
      label: "category_full_name",
      value: "slug",
      reduce: function reduce(cat_) {
        return cat_.slug;
      },
      name: "category_ids"
    },
    model: {
      value: _vm.filters.category_slug,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "category_slug", $$v);
      },
      expression: "filters.category_slug"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/5"
  }, [_c("label", {
    staticClass: "vs-input--label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Brand")]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-3",
    attrs: {
      options: _vm.brands,
      label: "name",
      value: "id",
      reduce: function reduce(brand) {
        return brand.id;
      },
      name: "brand_id"
    },
    model: {
      value: _vm.filters.brand_id,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "brand_id", $$v);
      },
      expression: "filters.brand_id"
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

        _vm.fetchProducts();
      }
    }
  }, [_vm._v("Apply Filter")])], 1)])]), _vm._v(" "), _vm.loading ? _c("pageLoader") : _c("vx-card", {
    staticClass: "card-padding-5 vs-con-loading__container",
    attrs: {
      id: "loading--container"
    }
  }, [_c("vs-table", {
    staticClass: "mt-4",
    attrs: {
      stripe: "",
      data: _vm.products.data,
      "max-items": _vm.products.per_page,
      total: _vm.products.total,
      sst: true
    },
    on: {
      sort: _vm.handleSort
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
          }, [_c("vs-td", [_c("i", [_vm._v("#" + _vm._s(tr.id))])]), _vm._v(" "), _c("vs-td", {
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
          }, [_vm._v("Rs. " + _vm._s(tr.original_price))]) : _vm._e()]) : _c("div", [_vm._v("---")])]), _vm._v(" "), _c("vs-td", [_c("strong", [_vm._v("SKU:")]), _vm._v("\n            " + _vm._s(tr.sku) + "\n          ")]), _vm._v(" "), _c("vs-td", [_c("div", {
            on: {
              click: function click($event) {
                return _vm.toggleProductStatus(tr);
              }
            }
          }, [_c("strong", [_vm._v("Status")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("vs-icon", {
            staticClass: "icon-large",
            "class": tr.status === 1 ? "text-success" : "text-danger",
            attrs: {
              icon: tr.status === 1 ? "toggle_on" : "toggle_off"
            }
          })], 1)]), _vm._v(" "), _c("vs-td", [_c("vs-button", {
            attrs: {
              size: "small"
            },
            on: {
              click: function click($event) {
                return _vm.duplicateProduct(tr.id);
              }
            }
          }, [_vm._v("Make Duplicate")])], 1), _vm._v(" "), _c("vs-td", [_c("router-link", {
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
          }) : _vm._e()], 1), _vm._v(" "), _vm.checkPermission("delete-product") ? _c("vs-button", {
            staticClass: "table-action--buttons",
            attrs: {
              radius: "",
              color: "danger",
              type: "filled",
              icon: "delete"
            },
            on: {
              click: function click($event) {
                return _vm.deleteProduct(tr.id);
              }
            }
          }) : _vm._e()], 1)], 1);
        });
      }
    }])
  }, [_c("template", {
    slot: "header"
  }, [_c("div", {
    staticClass: "w-2/5 mb-3"
  }), _vm._v(" "), _c("div", [_c("vs-button", {
    staticClass: "float-left mr-4",
    attrs: {
      color: "primary",
      type: "border",
      icon: "get_app"
    },
    on: {
      click: function click($event) {
        return _vm.exportProducts();
      }
    }
  }, [_vm._v("Export Products")]), _vm._v(" "), _vm.checkPermission("add-product") ? _c("router-link", {
    attrs: {
      to: {
        name: "admin-product-detail"
      }
    }
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled"
    }
  }, [_vm._v("Add New Product")])], 1) : _vm._e()], 1)]), _vm._v(" "), _c("template", {
    slot: "thead"
  }, [_c("vs-th", {
    attrs: {
      "sort-key": "id"
    }
  }, [_vm._v(" ID ")]), _vm._v(" "), _c("vs-th", [_vm._v(" Image ")]), _vm._v(" "), _c("vs-th", {
    attrs: {
      "sort-key": "name"
    }
  }, [_vm._v(" Name ")]), _vm._v(" "), _c("vs-th", {
    attrs: {
      "sort-key": "price"
    }
  }, [_vm._v(" Price ")]), _vm._v(" "), _c("vs-th", [_vm._v(" SKU ")]), _vm._v(" "), _c("vs-th", [_vm._v(" Status")]), _vm._v(" "), _c("vs-th"), _vm._v(" "), _c("vs-th", [_vm._v("Actions")])], 1)], 2), _vm._v(" "), _c("vs-pagination", {
    staticClass: "mt-6",
    attrs: {
      total: _vm.products.last_page
    },
    model: {
      value: _vm.table_options.current_page,
      callback: function callback($$v) {
        _vm.$set(_vm.table_options, "current_page", $$v);
      },
      expression: "table_options.current_page"
    }
  })], 1), _vm._v(" "), _c("vs-popup", {
    attrs: {
      title: "Duplicate Product",
      active: _vm.duplicate_popup
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.duplicate_popup = $event;
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
    staticClass: "vx-col w-1/2 mb-4"
  }, [_c("label", {
    staticClass: "vs-input--label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Duplicate Images")]), _vm._v(" "), _c("vs-switch", {
    attrs: {
      "vs-value": "1",
      "icon-pack": "feather",
      "vs-icon-on": "icon-check-circle",
      "vs-icon-off": "icon-slash"
    },
    model: {
      value: _vm.duplicate_product.duplicate_images,
      callback: function callback($$v) {
        _vm.$set(_vm.duplicate_product, "duplicate_images", $$v);
      },
      expression: "duplicate_product.duplicate_images"
    }
  }, [_c("span", {
    attrs: {
      slot: "on"
    },
    slot: "on"
  }, [_vm._v("Yes")]), _vm._v(" "), _c("span", {
    attrs: {
      slot: "off"
    },
    slot: "off"
  }, [_vm._v("No")])])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2 mb-4"
  }, [_c("label", {
    staticClass: "vs-input--label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Duplicate Variants")]), _vm._v(" "), _c("vs-switch", {
    attrs: {
      "vs-value": "1",
      "icon-pack": "feather",
      "vs-icon-on": "icon-check-circle",
      "vs-icon-off": "icon-slash"
    },
    model: {
      value: _vm.duplicate_product.duplicate_variants,
      callback: function callback($$v) {
        _vm.$set(_vm.duplicate_product, "duplicate_variants", $$v);
      },
      expression: "duplicate_product.duplicate_variants"
    }
  }, [_c("span", {
    attrs: {
      slot: "on"
    },
    slot: "on"
  }, [_vm._v("Yes")]), _vm._v(" "), _c("span", {
    attrs: {
      slot: "off"
    },
    slot: "off"
  }, [_vm._v("No")])])], 1)]), _vm._v(" "), _c("vs-button", {
    staticClass: "mr-3 mt-5",
    on: {
      click: _vm.processProductDuplication
    }
  }, [_vm._v("Submit")])], 1)])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


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

/***/ "./packages/core/resources/assets/images/no-image-placeholder.jpg":
/*!************************************************************************!*\
  !*** ./packages/core/resources/assets/images/no-image-placeholder.jpg ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/no-image-placeholder.jpg?398a6fa0902f42b38c7dad067cf1e540";

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/products/ProductsList.vue":
/*!***********************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/products/ProductsList.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductsList_vue_vue_type_template_id_4b2c0d98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsList.vue?vue&type=template&id=4b2c0d98& */ "./packages/ecommerce/resources/js/src/views/admin/products/ProductsList.vue?vue&type=template&id=4b2c0d98&");
/* harmony import */ var _ProductsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsList.vue?vue&type=script&lang=js& */ "./packages/ecommerce/resources/js/src/views/admin/products/ProductsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductsList_vue_vue_type_template_id_4b2c0d98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductsList_vue_vue_type_template_id_4b2c0d98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ecommerce/resources/js/src/views/admin/products/ProductsList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/products/ProductsList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/products/ProductsList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/products/ProductsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/products/ProductsList.vue?vue&type=template&id=4b2c0d98&":
/*!******************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/products/ProductsList.vue?vue&type=template&id=4b2c0d98& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsList_vue_vue_type_template_id_4b2c0d98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsList.vue?vue&type=template&id=4b2c0d98& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/products/ProductsList.vue?vue&type=template&id=4b2c0d98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsList_vue_vue_type_template_id_4b2c0d98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsList_vue_vue_type_template_id_4b2c0d98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);