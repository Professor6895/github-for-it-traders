(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/faqs/faqs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/faqs/faqs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils.js */ "./packages/core/resources/js/src/utils.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      filtered: false,
      filters: {
        type: ""
      },
      brands: [],
      dropdown_categories: [],
      faq: {},
      faq_popup: false,
      faqs: []
    };
  },
  components: {
    "v-select": vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  mounted: function mounted() {
    this.fetchCategoryDropdown();
    this.fetchBrands();
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
    fetchFaqs: function fetchFaqs() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var result, url, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.$validator.validateAll();

              case 2:
                result = _context3.sent;

                if (result) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return");

              case 5:
                _context3.prev = 5;
                url = "/api/admin/faqs";
                _context3.next = 9;
                return _this3.$http.get(url, {
                  params: _this3.filters
                });

              case 9:
                response = _context3.sent;
                _this3.faqs = response.data.data;
                _context3.next = 16;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](5);

                _this3.errorNotification("Something went wrong!! Please retry");

              case 16:
                _context3.prev = 16;
                _this3.filtered = true;
                return _context3.finish(16);

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[5, 13, 16, 19]]);
      }))();
    },
    saveFaq: function saveFaq() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var payload, url, response;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                payload = {
                  question: _this4.faq.question,
                  answer: _this4.faq.answer,
                  type: _this4.filters.type,
                  brand_id: _this4.filters.brand_id,
                  category_id: _this4.filters.category_id
                };
                url = "/api/admin/store-faq";

                if (_this4.faq.id) {
                  url = "/api/admin/store-faq/".concat(_this4.faq.id);
                  payload["_method"] = "PATCH";
                }

                _context4.next = 6;
                return _this4.$http.post(url, payload);

              case 6:
                response = _context4.sent;

                if (response.data.success) {
                  _this4.successNotification(response.data.message);

                  _this4.fetchFaqs();

                  _this4.faq_popup = false;
                }

                _context4.next = 14;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](0);
                Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["renderServerErrors"])(_this4.errors, _context4.t0);

                _this4.errorNotification("Something went wrong!! Please retry");

              case 14:
                _context4.prev = 14;
                return _context4.finish(14);

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 10, 14, 16]]);
      }))();
    },
    editFaq: function editFaq(faq) {
      this.faq = _.cloneDeep(faq);
      this.faq_popup = true;
    },
    deleteFaq: function deleteFaq(faq) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this5.$vs.dialog({
                  type: "confirm",
                  color: "danger",
                  title: "Confirm",
                  text: "Are you sure you want to delete the FAQ?",
                  accept: function () {
                    var _accept = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                      var response;
                      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              _context5.next = 2;
                              return _this5.$http["delete"]("/api/admin/faqs/".concat(faq.id, "/delete"));

                            case 2:
                              response = _context5.sent;

                              if (response.data.success) {
                                _this5.successNotification(response.data.message);

                                _this5.fetchFaqs();
                              } else {
                                _this5.errorNotification(response.data.message);
                              }

                            case 4:
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

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    }
  },
  watch: {
    faq_popup: function faq_popup(val) {
      if (!val) {
        this.faq = {};
        this.errors.clear();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/faqs/faqs.vue?vue&type=template&id=4ad350da&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/admin/faqs/faqs.vue?vue&type=template&id=4ad350da& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col md:w-1/3"
  }, [_c("vx-card", {
    attrs: {
      title: "FAQs Filters"
    }
  }, [_c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("vs-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      label: "Type",
      name: "filter_type"
    },
    model: {
      value: _vm.filters.type,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "type", $$v);
      },
      expression: "filters.type"
    }
  }, _vm._l([{
    text: "Brand",
    value: "brand"
  }, {
    text: "Category",
    value: "category"
  }], function (item, index) {
    return _c("vs-select-item", {
      key: index,
      attrs: {
        value: item.value,
        text: item.text
      }
    });
  }), 1), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.errors.has("filter_type "),
      expression: "errors.has('filter_type ')"
    }],
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("filter_type")))])], 1), _vm._v(" "), _vm.filters.type == "brand" ? _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", {
    staticClass: "vs-input--label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Brand")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
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
  }), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.errors.has("brand_id"),
      expression: "errors.has('brand_id')"
    }],
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("brand_id")))])], 1) : _vm._e(), _vm._v(" "), _vm.filters.type == "category" ? _c("div", {
    staticClass: "vx-col w-full mb-4"
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
    staticClass: "mb-3",
    attrs: {
      options: _vm.dropdown_categories,
      label: "title",
      value: "id",
      reduce: function reduce(category) {
        return category.id;
      },
      name: "category_id"
    },
    model: {
      value: _vm.filters.category_id,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "category_id", $$v);
      },
      expression: "filters.category_id"
    }
  }), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.errors.has("category_id"),
      expression: "errors.has('category_id')"
    }],
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("category_id")))])], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-button", {
    attrs: {
      type: "relief",
      color: "primary"
    },
    on: {
      click: _vm.fetchFaqs
    }
  }, [_vm._v("Apply Filter")])], 1)])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-2/3"
  }, [_c("vx-card", {
    attrs: {
      title: "FAQs"
    }
  }, [!_vm.filtered ? _c("div", {
    staticClass: "mt-5 mb-5 pt-4 pb-4"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("h2", [_vm._v("Please apply filter to view FAQs")])])]) : _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-button", {
    staticClass: "float-right",
    attrs: {
      type: "relief",
      color: "primary",
      size: "small"
    },
    on: {
      click: function click($event) {
        _vm.faq_popup = true;
      }
    }
  }, [_vm._v("Add FAQ")])], 1), _vm._v(" "), _vm.faqs.length == 0 ? _c("div", {
    staticClass: "vx-col w-full text-center mt-5 mb-5"
  }, [_c("h2", [_vm._v("NO FAQs ADDED!!")])]) : _c("div", {
    staticClass: "vx-col w-full mt-3"
  }, _vm._l(_vm.faqs, function (faq) {
    return _c("div", {
      staticStyle: {
        padding: "15px",
        border: "1px solid #aaa",
        "border-radius": "15px",
        "margin-bottom": "15px"
      }
    }, [_c("div", {
      staticClass: "float-right"
    }, [_c("vs-button", {
      attrs: {
        size: "small",
        color: "warning",
        type: "relief"
      },
      on: {
        click: function click($event) {
          return _vm.editFaq(faq);
        }
      }
    }, [_vm._v("\n                  Edit\n                ")]), _vm._v(" "), _c("vs-button", {
      attrs: {
        size: "small",
        color: "danger",
        type: "relief"
      },
      on: {
        click: function click($event) {
          return _vm.deleteFaq(faq);
        }
      }
    }, [_vm._v("\n                  Delete\n                ")])], 1), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Q: ")]), _vm._v(" " + _vm._s(faq.question))]), _vm._v(" "), _c("p", [_c("strong", {
      staticStyle: {
        display: "inline-block"
      }
    }, [_vm._v("A: ")]), _vm._v(" "), _c("span", {
      staticStyle: {
        display: "inline-block"
      },
      domProps: {
        innerHTML: _vm._s(faq.answer)
      }
    })])]);
  }), 0)])])], 1)]), _vm._v(" "), _c("vs-popup", {
    staticClass: "popup-lg",
    attrs: {
      title: "FAQ",
      active: _vm.faq_popup
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.faq_popup = $event;
      }
    }
  }, [_c("vs-input", {
    staticClass: "w-full",
    attrs: {
      name: "question",
      label: "Question"
    },
    model: {
      value: _vm.faq.question,
      callback: function callback($$v) {
        _vm.$set(_vm.faq, "question", $$v);
      },
      expression: "faq.question"
    }
  }), _vm._v(" "), _c("p", [_vm.errors.has("question") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("question")))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "vx-col mt-4"
  }, [_c("label", {
    staticClass: "vs-input--label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Answer")]), _vm._v(" "), _c("q-editor", {
    model: {
      value: _vm.faq.answer,
      callback: function callback($$v) {
        _vm.$set(_vm.faq, "answer", $$v);
      },
      expression: "faq.answer"
    }
  })], 1), _vm._v(" "), _c("vs-button", {
    staticClass: "mr-3 mt-5",
    on: {
      click: _vm.saveFaq
    }
  }, [_vm._v("Submit")])], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/faqs/faqs.vue":
/*!***********************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/faqs/faqs.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _faqs_vue_vue_type_template_id_4ad350da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faqs.vue?vue&type=template&id=4ad350da& */ "./packages/ecommerce/resources/js/src/views/admin/faqs/faqs.vue?vue&type=template&id=4ad350da&");
/* harmony import */ var _faqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faqs.vue?vue&type=script&lang=js& */ "./packages/ecommerce/resources/js/src/views/admin/faqs/faqs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _faqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _faqs_vue_vue_type_template_id_4ad350da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _faqs_vue_vue_type_template_id_4ad350da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ecommerce/resources/js/src/views/admin/faqs/faqs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/faqs/faqs.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/faqs/faqs.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_faqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./faqs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/faqs/faqs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_faqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/admin/faqs/faqs.vue?vue&type=template&id=4ad350da&":
/*!******************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/admin/faqs/faqs.vue?vue&type=template&id=4ad350da& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_faqs_vue_vue_type_template_id_4ad350da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./faqs.vue?vue&type=template&id=4ad350da& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/admin/faqs/faqs.vue?vue&type=template&id=4ad350da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_faqs_vue_vue_type_template_id_4ad350da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_faqs_vue_vue_type_template_id_4ad350da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);