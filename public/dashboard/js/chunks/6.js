(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/PriceAndStock.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/common/products/PriceAndStock.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils.js */ "./packages/core/resources/js/src/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["productDetail", "isadmin"],
  data: function data() {
    return {
      product_id: "",
      product: {}
    };
  },
  mounted: function mounted() {
    if (Object.keys(this.productDetail).length) {
      this.product = this.productDetail;
      this.product_id = this.productDetail.id;
    }
  },
  components: {
    "v-select": vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  methods: {
    savePriceDetail: function savePriceDetail() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var result, params, url, response;
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
                _context.prev = 5;

                _this.$vs.loading({
                  container: "#loading--container"
                });

                params = {
                  price: _this.product.price,
                  original_price: _this.product.original_price,
                  quantity: _this.product.quantity,
                  pre_order: _this.product.pre_order,
                  pre_order_price: _this.product.pre_order_price,
                  _method: "PATCH"
                };
                url = "/api/admin/products/".concat(_this.product_id, "/update-price");

                if (!_this.isadmin) {
                  url = "/api/vendor/products/".concat(_this.product_id, "/update-price");
                }

                _context.next = 12;
                return _this.$http.post(url, params);

              case 12:
                response = _context.sent;

                if (response.data.success) {
                  _this.successNotification("Product detail successfully added!");

                  _this.$emit("nextTabPlease");
                }

                _context.next = 20;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](5);
                Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["renderServerErrors"])(_this.errors, _context.t0);

                _this.errorNotification("Something went wrong! Please retry!!");

              case 20:
                _context.prev = 20;

                _this.$vs.loading.close("#loading--container > .con-vs-loading");

                return _context.finish(20);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 16, 20, 23]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/ProductAttributes.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/common/products/ProductAttributes.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["productId", "productAttributes", "isadmin"],
  data: function data() {
    return {
      attribute_classes: [],
      selected_class: {},
      product_attributes: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this.productAttributes) _this.product_attributes = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(_this.productAttributes.product_attributes);
              _context.next = 3;
              return _this.getAttributeClasses();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  components: {
    "v-select": vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  methods: {
    // async fetchProductAttribute() {
    //   try {
    //     let response = await this.$http.get(
    //       `/api/admin/product-classes/get-dropdown?attributes=true`
    //     );
    //     this.attribute_classes = response.data.data;
    //   } catch (error) {
    //     this.errorNotification("Something went wrong!! Please retry");
    //   } finally {
    //     this.loading = false;
    //   }
    // },
    getAttributeClasses: function getAttributeClasses() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var url, response, attribute__class;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                url = "/api/admin/product-classes/get-dropdown?attributes=true";

                if (!_this2.isadmin) {
                  url = "/api/vendor/product-classes/get-dropdown?attributes=true";
                }

                _context2.next = 5;
                return _this2.$http.get(url);

              case 5:
                response = _context2.sent;
                _this2.attribute_classes = response.data.data;

                if (_this2.productAttributes) {
                  attribute__class = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(_this2.attribute_classes, {
                    id: _this2.productAttributes.attribute_class_id
                  });
                  _this2.selected_class = attribute__class;
                }

                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);

                _this2.errorNotification("Something went wrong!! Please retry");

              case 13:
                _context2.prev = 13;
                _this2.loading = false;
                return _context2.finish(13);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 10, 13, 16]]);
      }))();
    },
    saveAttribute: function saveAttribute() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var selected_attributes, product_attributes__, attr, params, url, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.$vs.loading({
                  container: "#loading--container"
                });

                _context3.prev = 1;
                selected_attributes = _this3.selected_class.attributes;
                product_attributes__ = {};

                for (attr in selected_attributes) {
                  if (_this3.product_attributes[selected_attributes[attr].name]) {
                    product_attributes__[selected_attributes[attr].name] = _this3.product_attributes[selected_attributes[attr].name];
                  }
                }

                params = {
                  product_attributes: product_attributes__,
                  attribute_class_id: _this3.selected_class.id,
                  _method: "PATCH"
                };
                url = "/api/admin/products/".concat(_this3.productId, "/save-attributes");

                if (!_this3.isadmin) {
                  url = "/api/vendor/products/".concat(_this3.productId, "/save-attributes");
                }

                _context3.next = 10;
                return _this3.$http.post(url, params);

              case 10:
                response = _context3.sent;
                if (response.data.success) _this3.successNotification(response.data.message);

                _this3.$emit("refreshProduct");

                _context3.next = 18;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](1);

                _this3.errorNotification("Something went wrong! Please retry!!");

              case 18:
                _context3.prev = 18;

                _this3.$vs.loading.close("#loading--container > .con-vs-loading");

                return _context3.finish(18);

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 15, 18, 21]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/ProductDetail.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/common/products/ProductDetail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils.js */ "./packages/core/resources/js/src/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["productDetail", "isadmin"],
  data: function data() {
    return {
      product_id: "",
      product: {
        status: 1
      },
      brands: [],
      dropdown_categories: [],
      vendors: []
    };
  },
  mounted: function mounted() {
    if (Object.keys(this.productDetail).length) {
      this.product = this.productDetail;
      this.product_id = this.productDetail.id;
    }

    this.fetchBrands();
    if (this.isadmin) this.fetchVendors();
    this.fetchCategoryDropdown();
  },
  components: {
    "v-select": vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
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

                if (!_this.isadmin) {
                  url = "/api/vendor/product-categories-dropdown";
                }

                _context.next = 5;
                return _this.$http.get(url);

              case 5:
                response = _context.sent;
                _this.dropdown_categories = response.data.data;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);

                _this.errorNotification("Something went wrong!! Please retry");

              case 12:
                _context.prev = 12;
                _this.loading = false;
                return _context.finish(12);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9, 12, 15]]);
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

                if (!_this2.isadmin) {
                  url = "/api/vendor/product-brands/get-dropdown";
                }

                _context2.next = 5;
                return _this2.$http.get(url);

              case 5:
                response = _context2.sent;
                _this2.brands = response.data.data;
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);

                _this2.errorNotification("Something went wrong while fetching albums!! Please retry");

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }))();
    },
    fetchVendors: function fetchVendors() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _this3.$http.get("/api/admin/vendors/get-dropdown");

              case 3:
                response = _context3.sent;
                _this3.vendors = response.data.data;
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);

                _this3.errorNotification("Something went wrong while fetching albums!! Please retry");

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }))();
    },
    saveProductDetail: function saveProductDetail() {
      var _arguments = arguments,
          _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var redirect, result, params, user_type, url, response, route_prefix;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                redirect = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : true;
                _context4.next = 3;
                return _this4.$validator.validateAll();

              case 3:
                result = _context4.sent;

                if (result) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return");

              case 6:
                _context4.prev = 6;
                // this.$vs.loading({
                //   container: "#loading--container",
                // });
                params = {
                  name: _this4.product.name,
                  short_description: _this4.product.short_description,
                  description: _this4.product.description,
                  category_ids: _this4.product.category_ids,
                  sku: _this4.product.sku,
                  brand_id: _this4.product.brand_id,
                  vendor_id: _this4.product.vendor_id,
                  status: _this4.product.status,
                  highlights: _this4.product.highlights,
                  product_video_url: _this4.product.product_video_url,
                  emi_enabled: _this4.product.emi_enabled,
                  warranty_description: _this4.product.warranty_description
                };
                user_type = _this4.isadmin ? "admin" : "vendor";
                url = "/api/".concat(user_type, "/products/store-detail");

                if (_this4.product_id) {
                  url = "/api/".concat(user_type, "/products/").concat(_this4.product_id, "/update-detail");
                  params["_method"] = "PATCH";
                }

                _context4.next = 13;
                return _this4.$http.post(url, params);

              case 13:
                response = _context4.sent;

                if (response.data.success) {
                  _this4.successNotification(response.data.message);

                  route_prefix = _this4.isadmin ? "admin" : "ecommerce-vendor";

                  if (redirect) {
                    _this4.$router.push({
                      name: "".concat(route_prefix, "-products")
                    });
                  }

                  if (!_this4.product_id) {
                    _this4.$router.push({
                      name: "".concat(route_prefix, "-product-detail"),
                      params: {
                        id: response.data.product_id
                      }
                    });
                  }
                }

                console.log(response.data);
                _context4.next = 22;
                break;

              case 18:
                _context4.prev = 18;
                _context4.t0 = _context4["catch"](6);
                Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["renderServerErrors"])(_this4.errors, _context4.t0);

                _this4.errorNotification("Something went wrong! Please retry!!");

              case 22:
                _context4.prev = 22;

                _this4.$vs.loading.close("#loading--container > .con-vs-loading");

                return _context4.finish(22);

              case 25:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[6, 18, 22, 25]]);
      }))();
    },
    saveAndNext: function saveAndNext() {
      this.saveProductDetail(false);
      this.$emit("nextTabPlease");
    },
    enableProduct: function enableProduct() {
      var _this5 = this;

      this.$vs.dialog({
        type: "confirm",
        color: "primary",
        title: "Confirm",
        text: "Are you sure you want to enable the product?",
        accept: function () {
          var _accept = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var payload, url, response;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    payload = {
                      _method: "PATCH"
                    };
                    url = "/api/admin/products/".concat(_this5.product_id, "/toggle-status");

                    if (!_this5.isadmin) {
                      url = "/api/vendor/products/".concat(_this5.product_id, "/toggle-status");
                    }

                    _context5.next = 5;
                    return _this5.$http.post(url, payload);

                  case 5:
                    response = _context5.sent;

                    if (response.data.success) {
                      _this5.successNotification(response.data.message);

                      _this5.product.status = response.data.status;
                    } else {
                      _this5.errorNotification(response.data.message);
                    }

                  case 7:
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["productId", "variants", "isadmin"],
  data: function data() {
    return {
      loading_image: false,
      product_id: "",
      product: {},
      validated: true,
      product_images: {},
      validation_message: "",
      //FOR VARIANTS
      color_variants: [],
      alt_text_popup: false,
      image_alt: {}
    };
  },
  mounted: function mounted() {
    this.product_id = this.productId;
    this.checkColorVariants();
    this.fetchProdcutImages();
  },
  methods: {
    filesUploaded: function filesUploaded(event) {
      var _arguments = arguments,
          _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var color_variant, uploaded_files, fd, i, url, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                color_variant = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : null;
                uploaded_files = event.target.files;

                if (uploaded_files.length) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _context.prev = 4;

                _this.$vs.loading({
                  container: "#loading--container"
                });

                fd = new FormData();

                for (i = 0; i < uploaded_files.length; i++) {
                  fd.append("files[]", uploaded_files[i]);
                }

                if (color_variant !== null) {
                  fd.append("color_variant", color_variant.color);
                  fd.append("variant_id", color_variant.variant_id);
                }

                url = "/api/admin/products/".concat(_this.productId, "/uploadImages");

                if (!_this.isadmin) {
                  url = "/api/vendor/products/".concat(_this.productId, "/uploadImages");
                }

                _context.next = 13;
                return _this.$http.post(url, fd);

              case 13:
                response = _context.sent;

                if (response.data.success) {
                  _this.successNotification(response.data.message);

                  _this.fetchProdcutImages();
                } else {
                  _this.setValidationMessage(response.data.message);
                }

                _context.next = 21;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](4);

                _this.setValidationMessage("The supported formats are .jpg, .gif, .jpeg, .bmp, .webp. Please check the file(s) again and retry!");

                _this.errorNotification("Invalid image format.");

              case 21:
                _context.prev = 21;

                _this.$vs.loading.close("#loading--container > .con-vs-loading");

                return _context.finish(21);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 17, 21, 24]]);
      }))();
    },
    setValidationMessage: function setValidationMessage() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (message) {
        this.validation_message = message;
      }

      this.validated = false;
      var context = this;
      setTimeout(function () {
        context.validated = true;
      }, 4000);
    },
    fetchProdcutImages: function fetchProdcutImages() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$vs.loading({
                  container: "#loading--container"
                });

                _context2.prev = 1;
                url = "/api/admin/products/".concat(_this2.productId, "/get-product-images");

                if (!_this2.isadmin) {
                  url = "/api/vendor/products/".concat(_this2.productId, "/get-product-images");
                }

                _context2.next = 6;
                return _this2.$http.get(url);

              case 6:
                response = _context2.sent;
                _this2.product_images = response.data.data;
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](1);

                _this2.errorNotification("Something went wrong!! Please retry");

              case 13:
                _context2.prev = 13;

                _this2.$vs.loading.close("#loading--container > .con-vs-loading");

                _this2.loading = false;
                return _context2.finish(13);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 10, 13, 17]]);
      }))();
    },
    setAsPrimary: function setAsPrimary(image_id) {
      var _arguments2 = arguments,
          _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var color_variant, payload, url, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                color_variant = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : null;

                _this3.$vs.loading({
                  container: "#loading--container"
                });

                _context3.prev = 2;
                payload = {
                  color_variant: color_variant
                };
                url = "/api/admin/products/".concat(_this3.productId, "/product-image/").concat(image_id, "/set-primary");

                if (!_this3.isadmin) {
                  url = "/api/vendor/products/".concat(_this3.productId, "/product-image/").concat(image_id, "/set-primary");
                }

                _context3.next = 8;
                return _this3.$http.post(url, payload);

              case 8:
                response = _context3.sent;

                if (response.data.success) {
                  _this3.successNotification(response.data.message);

                  _this3.fetchProdcutImages();
                }

                _context3.next = 15;
                break;

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](2);

                _this3.errorNotification("Something went wrong!! Please retry");

              case 15:
                _context3.prev = 15;

                _this3.$vs.loading.close("#loading--container > .con-vs-loading");

                return _context3.finish(15);

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 12, 15, 18]]);
      }))();
    },
    deleteImage: function deleteImage(image_id) {
      var _this4 = this;

      var context = this;
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "Confirm",
        text: "Are you sure you want to delete image?",
        accept: function () {
          var _accept = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var url, response;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    url = "/api/admin/products/product-image/".concat(image_id, "/delete-image");

                    if (!_this4.isadmin) {
                      url = "/api/vendor/products/product-image/".concat(image_id, "/delete-image");
                    }

                    _context4.next = 4;
                    return _this4.$http["delete"](url);

                  case 4:
                    response = _context4.sent;

                    if (response.data.success) {
                      _this4.successNotification(response.data.message);

                      _this4.fetchProdcutImages();
                    } else {
                      context.setValidationMessage(response.data.message);

                      _this4.errorNotification(response.data.message);
                    }

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          function accept() {
            return _accept.apply(this, arguments);
          }

          return accept;
        }()
      });
    },
    //VARIANTS
    checkColorVariants: function checkColorVariants() {
      var _this5 = this;

      // console.log(this.variants)
      this.variants.forEach(function (element) {
        var attribute_keys = Object.keys(element.attributes);
        attribute_keys.forEach(function (attribute_key) {
          var attribute_name = attribute_key.toLowerCase();

          if (attribute_name.includes("color") || attribute_name.includes("colour")) {
            _this5.color_variants.push({
              variant_id: element.id,
              product_id: element.product_id,
              color: element.attributes[attribute_key]
            });
          }
        });
      });
    },
    toggleImageAlt: function toggleImageAlt(image) {
      if (image.custom_properties.alt_text) {
        this.image_alt.text = image.custom_properties.alt_text;
      } else {
        this.image_alt.text = "";
      }

      this.image_alt.image_id = image.uuid;
      this.alt_text_popup = true;
    },
    saveImageAlt: function saveImageAlt() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var response;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _this6.$http.post("/api/admin/media/update-image-alt", _this6.image_alt);

              case 3:
                response = _context5.sent;

                if (response.data.success) {
                  _this6.successNotification(response.data.message);

                  _this6.fetchProdcutImages();
                }

                _context5.next = 9;
                break;

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);

              case 9:
                _context5.prev = 9;
                _this6.alt_text_popup = false;
                return _context5.finish(9);

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7, 9, 12]]);
      }))();
    },
    getVariantProductImages: function getVariantProductImages(color) {
      if (Object.keys(this.product_images).length) {
        var images = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(this.product_images, function (image) {
          return image.custom_properties["color"] == color;
        });

        return images;
      }

      return [];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/ProductVariants.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/common/products/ProductVariants.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["productDetail", "isadmin"],
  data: function data() {
    return {
      variants: [],
      form_error: false,
      error_message: "",
      variantables: [],
      variant: {
        attributes: {}
      }
    };
  },
  components: {
    "v-select": vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  mounted: function mounted() {
    this.getVariantableAttributes();
    this.variants = this.productDetail.variants; // this.getProductVariants();
  },
  methods: {
    getVariantableAttributes: function getVariantableAttributes() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                url = "/api/admin/product-class/".concat(_this.productDetail.attribute_class_id, "/variantable-attributes");

                if (!_this.isadmin) {
                  url = "/api/vendor/product-class/".concat(_this.productDetail.attribute_class_id, "/variantable-attributes");
                }

                _context.next = 5;
                return _this.$http.get(url);

              case 5:
                response = _context.sent;
                _this.variantables = response.data.data;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);

                _this.errorNotification("Something went wrong!! Please retry");

              case 12:
                _context.prev = 12;
                _this.loading = false;
                return _context.finish(12);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9, 12, 15]]);
      }))();
    },
    getProductVariants: function getProductVariants() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading = true;
                _context2.prev = 1;
                url = "/api/admin/product/".concat(_this2.productDetail.id, "/variants");

                if (!_this2.isadmin) {
                  url = "/api/vendor/product/".concat(_this2.productDetail.id, "/variants");
                }

                _context2.next = 6;
                return _this2.$http.get(url);

              case 6:
                response = _context2.sent;
                _this2.variants = response.data.data;
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](1);

                _this2.errorNotification("Something went wrong!! Please retry");

              case 13:
                _context2.prev = 13;
                _this2.loading = false;
                return _context2.finish(13);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 10, 13, 16]]);
      }))();
    },
    saveVariant: function saveVariant() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var result, payload, url, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.form_error = false;

                if (Object.keys(_this3.variant.attributes).length) {
                  _context3.next = 5;
                  break;
                }

                _this3.form_error = true;
                _this3.error_message = "Please select at least one attribute from the list";
                return _context3.abrupt("return");

              case 5:
                _context3.next = 7;
                return _this3.$validator.validateAll();

              case 7:
                result = _context3.sent;

                if (result) {
                  _context3.next = 10;
                  break;
                }

                return _context3.abrupt("return");

              case 10:
                _this3.$vs.loading({
                  container: "#loading--container"
                });

                _context3.prev = 11;
                payload = {
                  price: _this3.variant.price,
                  quantity: _this3.variant.quantity,
                  attributes: _.pickBy(_this3.variant.attributes, _.identity)
                };

                if (_this3.variant.id) {
                  payload["id"] = _this3.variant.id;
                }

                url = "/api/admin/product/".concat(_this3.productDetail.id, "/variants");

                if (!_this3.isadmin) {
                  url = "/api/vendor/product/".concat(_this3.productDetail.id, "/variants");
                }

                _context3.next = 18;
                return _this3.$http.post(url, payload);

              case 18:
                response = _context3.sent;

                if (response.data.success) {
                  // this.form_error = true;
                  // this.error_message = response.data.message;
                  // this.getProductVariants();
                  _this3.variant = {
                    attributes: {}
                  };

                  _this3.$emit("refreshProduct");
                } else {
                  _this3.form_error = true;
                  _this3.error_message = response.data.message;

                  _this3.errorNotification(response.data.message);
                }

                _context3.next = 24;
                break;

              case 22:
                _context3.prev = 22;
                _context3.t0 = _context3["catch"](11);

              case 24:
                _context3.prev = 24;

                _this3.$vs.loading.close("#loading--container > .con-vs-loading");

                return _context3.finish(24);

              case 27:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[11, 22, 24, 27]]);
      }))();
    },
    editVariant: function editVariant(variant_detail) {
      this.variant = _.cloneDeep(variant_detail);
    },
    deleteVariant: function deleteVariant(variant_id) {
      var _this4 = this;

      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "Confirm",
        text: "Are you sure you want to delete this variant?",
        accept: function () {
          var _accept = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var url, response;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    url = "/api/admin/product/".concat(_this4.productDetail.id, "/variants/").concat(variant_id);

                    if (!_this4.isadmin) {
                      url = "/api/vendor/product/".concat(_this4.productDetail.id, "/variants/").concat(variant_id);
                    }

                    _context4.next = 4;
                    return _this4.$http["delete"](url);

                  case 4:
                    response = _context4.sent;

                    if (response.data.success) {
                      _this4.successNotification(response.data.message);

                      _this4.getProductVariants();
                    } else {
                      _this4.errorNotification(response.data.message);
                    }

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          function accept() {
            return _accept.apply(this, arguments);
          }

          return accept;
        }()
      });
    }
  },
  watch: {}
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/PriceAndStock.vue?vue&type=template&id=4512a58c&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/common/products/PriceAndStock.vue?vue&type=template&id=4512a58c& ***!
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

  return _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("vx-card", [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full md:w-1/2"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      type: "number",
      name: "price",
      label: "Product Price"
    },
    model: {
      value: _vm.product.price,
      callback: function callback($$v) {
        _vm.$set(_vm.product, "price", $$v);
      },
      expression: "product.price"
    }
  }), _vm._v(" "), _vm.errors.has("price") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("price")))]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full md:w-1/2"
  }, [_c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "number",
      name: "original_price",
      label: "Price Compare with",
      "description-text": "Leave it empty if no compare price"
    },
    model: {
      value: _vm.product.original_price,
      callback: function callback($$v) {
        _vm.$set(_vm.product, "original_price", $$v);
      },
      expression: "product.original_price"
    }
  }), _vm._v(" "), _vm.errors.has("original_price") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("original_price")))]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full mb-3",
    attrs: {
      name: "quantity",
      type: "number",
      label: "Quantity"
    },
    model: {
      value: _vm.product.quantity,
      callback: function callback($$v) {
        _vm.$set(_vm.product, "quantity", $$v);
      },
      expression: "product.quantity"
    }
  }), _vm._v(" "), _vm.errors.has("quantity") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("quantity")))]) : _vm._e()], 1), _vm._v(" "), _vm.product.price === 0 || _vm.product.price === "0" ? _c("div", {
    staticClass: "vx-col md:w-1/2"
  }, [_c("label", {
    staticClass: "vs-input--label mt-3",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Available for Pre Order?")]), _vm._v(" "), _c("vs-switch", {
    staticClass: "mt-3",
    attrs: {
      color: "success",
      "vs-value": "1"
    },
    model: {
      value: _vm.product.pre_order,
      callback: function callback($$v) {
        _vm.$set(_vm.product, "pre_order", $$v);
      },
      expression: "product.pre_order"
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
  }, [_vm._v("No")])])], 1) : _vm._e(), _vm._v(" "), _vm.product.price === 0 || _vm.product.price === "0" ? _c("div", {
    staticClass: "vx-col md:w-1/2"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full mb-3",
    attrs: {
      name: "pre_order_price",
      type: "number",
      label: "Pre Order Price"
    },
    model: {
      value: _vm.product.pre_order_price,
      callback: function callback($$v) {
        _vm.$set(_vm.product, "pre_order_price", $$v);
      },
      expression: "product.pre_order_price"
    }
  }), _vm._v(" "), _vm.errors.has("pre_order_price") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("pre_order_price")))]) : _vm._e()], 1) : _vm._e()])])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("vs-button", {
    attrs: {
      type: "relief",
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("prevTabPlease");
      }
    }
  }, [_vm._v("Prev")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      type: "relief",
      color: "primary"
    },
    on: {
      click: _vm.savePriceDetail
    }
  }, [_vm._v("Save & Next")])], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/ProductAttributes.vue?vue&type=template&id=b536e76c&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/common/products/ProductAttributes.vue?vue&type=template&id=b536e76c& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "vx-col w-full mb-4"
  }, [_c("vx-card", [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-select", {
    staticClass: "mb-3 w-full md:w-1/3",
    attrs: {
      label: "Select an Attribute Class"
    },
    model: {
      value: _vm.selected_class,
      callback: function callback($$v) {
        _vm.selected_class = $$v;
      },
      expression: "selected_class"
    }
  }, _vm._l(_vm.attribute_classes, function (item) {
    return _c("vs-select-item", {
      key: "$class-".concat(item.id),
      attrs: {
        value: item,
        text: item.name
      }
    });
  }), 1)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [!Object.keys(_vm.selected_class).length ? _c("div", {
    staticClass: "vx-col w-full text-center",
    staticStyle: {
      padding: "50px 0px"
    }
  }, [_c("h4", [_vm._v("Please select attribute class first!")])]) : _c("div", {
    staticClass: "vx-col w-full mt-4"
  }, [_c("vs-table", {
    attrs: {
      data: _vm.selected_class.attributes,
      hoverFlat: true
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var data = _ref.data;
        return _vm._l(data, function (tr, indextr) {
          return _c("vs-tr", {
            key: indextr
          }, [_c("vs-td", [_c("strong", [_vm._v(_vm._s(tr.name))])]), _vm._v(" "), _c("vs-td", [tr.type == "text" ? _c("vs-textarea", {
            staticClass: "w-full md:w-1/3 inputx",
            attrs: {
              placeholder: tr.name
            },
            model: {
              value: _vm.product_attributes[tr.name],
              callback: function callback($$v) {
                _vm.$set(_vm.product_attributes, tr.name, $$v);
              },
              expression: "product_attributes[tr.name]"
            }
          }) : _c("vs-select", {
            staticClass: "w-full md:w-1/3",
            attrs: {
              label: "Select an option"
            },
            model: {
              value: _vm.product_attributes[tr.name],
              callback: function callback($$v) {
                _vm.$set(_vm.product_attributes, tr.name, $$v);
              },
              expression: "product_attributes[tr.name]"
            }
          }, _vm._l(tr.values, function (item) {
            return _c("vs-select-item", {
              key: "".concat(tr.name, "-").concat(item),
              attrs: {
                value: item,
                text: item
              }
            });
          }), 1)], 1)], 1);
        });
      }
    }])
  }), _vm._v(" "), _c("vs-button", {
    staticClass: "mt-4",
    attrs: {
      type: "relief",
      color: "primary"
    },
    on: {
      click: _vm.saveAttribute
    }
  }, [_vm._v("Save")])], 1)])])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("vs-button", {
    attrs: {
      type: "relief",
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("prevTabPlease");
      }
    }
  }, [_vm._v("Prev")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      type: "relief",
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("nextTabPlease");
      }
    }
  }, [_vm._v("Next")])], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/ProductDetail.vue?vue&type=template&id=92e1d878&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/common/products/ProductDetail.vue?vue&type=template&id=92e1d878& ***!
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

  return _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col md:w-2/3 w-full mb-4"
  }, [_c("vx-card", [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full md:w-2/3 mb-4"
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
      label: "Product Title"
    },
    model: {
      value: _vm.product.name,
      callback: function callback($$v) {
        _vm.$set(_vm.product, "name", $$v);
      },
      expression: "product.name"
    }
  }), _vm._v(" "), _vm.errors.has("name") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("name")))]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full md:w-1/3 mb-4"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      name: "sku",
      label: "SKU"
    },
    model: {
      value: _vm.product.sku,
      callback: function callback($$v) {
        _vm.$set(_vm.product, "sku", $$v);
      },
      expression: "product.sku"
    }
  }), _vm._v(" "), _vm.errors.has("sku") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("sku")))]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("vs-input", {
    staticClass: "w-full",
    attrs: {
      name: "short_description",
      label: "Short Description"
    },
    model: {
      value: _vm.product.short_description,
      callback: function callback($$v) {
        _vm.$set(_vm.product, "short_description", $$v);
      },
      expression: "product.short_description"
    }
  }), _vm._v(" "), _vm.errors.has("short_description") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("short_description")))]) : _vm._e()], 1), _vm._v(" "), _c("div", {
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
    attrs: {
      options: _vm.dropdown_categories,
      label: "category_full_name",
      value: "id",
      multiple: "",
      reduce: function reduce(cat_) {
        return cat_.id;
      },
      name: "category_ids"
    },
    model: {
      value: _vm.product.category_ids,
      callback: function callback($$v) {
        _vm.$set(_vm.product, "category_ids", $$v);
      },
      expression: "product.category_ids"
    }
  }), _vm._v(" "), _vm.errors.has("category_ids") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("category_ids")))]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", {
    staticClass: "vs-input--label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c("q-editor", {
    attrs: {
      id: "product-detal"
    },
    model: {
      value: _vm.product.description,
      callback: function callback($$v) {
        _vm.$set(_vm.product, "description", $$v);
      },
      expression: "product.description"
    }
  }), _vm._v(" "), _vm.errors.has("description") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("description")))]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", {
    staticClass: "vs-input--label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Warranty Description")]), _vm._v(" "), _c("q-editor", {
    attrs: {
      id: "product-detal"
    },
    model: {
      value: _vm.product.warranty_description,
      callback: function callback($$v) {
        _vm.$set(_vm.product, "warranty_description", $$v);
      },
      expression: "product.warranty_description"
    }
  }), _vm._v(" "), _vm.errors.has("warranty_description") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("warranty_description")))]) : _vm._e()], 1)])])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/3 w-full mb-4"
  }, [_c("vx-card", {
    attrs: {
      title: "Details"
    }
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
      value: _vm.product.brand_id,
      callback: function callback($$v) {
        _vm.$set(_vm.product, "brand_id", $$v);
      },
      expression: "product.brand_id"
    }
  }), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.errors.has("brand_id"),
      expression: "errors.has('brand_id')"
    }],
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("brand_id")))]), _vm._v(" "), _vm.isadmin ? _c("label", {
    staticClass: "vs-input--label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Vendor")]) : _vm._e(), _vm._v(" "), _vm.isadmin ? _c("v-select", {
    staticClass: "mb-3",
    attrs: {
      options: _vm.vendors,
      label: "name",
      value: "id",
      reduce: function reduce(vendor) {
        return vendor.id;
      },
      name: "vendor_id"
    },
    model: {
      value: _vm.product.vendor_id,
      callback: function callback($$v) {
        _vm.$set(_vm.product, "vendor_id", $$v);
      },
      expression: "product.vendor_id"
    }
  }) : _vm._e(), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.errors.has("vendor_id"),
      expression: "errors.has('vendor_id')"
    }],
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("vendor_id")))]), _vm._v(" "), _c("label", {
    staticClass: "vs-input--label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Product highlights")]), _vm._v(" "), _c("vs-textarea", {
    staticClass: "w-full",
    attrs: {
      name: "highlights",
      label: "Short Description"
    },
    model: {
      value: _vm.product.highlights,
      callback: function callback($$v) {
        _vm.$set(_vm.product, "highlights", $$v);
      },
      expression: "product.highlights"
    }
  }), _vm._v(" "), _c("p", [_c("small", [_vm._v("Seperate values by | symbol in case of multiples.")])]), _vm._v(" "), _vm.errors.has("highlights") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("highlights")))]) : _vm._e(), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full mt-4",
    attrs: {
      name: "product_video_url",
      label: "Product Video URL (Youtube)"
    },
    model: {
      value: _vm.product.product_video_url,
      callback: function callback($$v) {
        _vm.$set(_vm.product, "product_video_url", $$v);
      },
      expression: "product.product_video_url"
    }
  }), _vm._v(" "), _vm.errors.has("product_video_url") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("product_video_url")))]) : _vm._e()], 1), _vm._v(" "), _c("vx-card", {
    staticClass: "mt-3",
    attrs: {
      title: "Availability & Config"
    }
  }, [_c("label", {
    staticClass: "vs-input--label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Product status")]), _vm._v(" "), _vm.product.status == 2 ? _c("div", {
    staticClass: "text-center mt-2 mb-2"
  }, [_c("vs-button", {
    attrs: {
      size: "small",
      color: "success"
    },
    nativeOn: {
      click: function click($event) {
        return _vm.enableProduct.apply(null, arguments);
      }
    }
  }, [_vm._v("Enable Product")])], 1) : _c("div", {
    staticClass: "mb-4"
  }, [_c("vs-switch", {
    staticClass: "mt-3",
    attrs: {
      color: "success",
      "vs-value": "1"
    },
    model: {
      value: _vm.product.status,
      callback: function callback($$v) {
        _vm.$set(_vm.product, "status", $$v);
      },
      expression: "product.status"
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
  }, [_vm._v("Disabled")])])], 1), _vm._v(" "), _c("label", {
    staticClass: "vs-input--label mt-3",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Enable EMI?")]), _vm._v(" "), _c("vs-switch", {
    staticClass: "mt-3",
    attrs: {
      color: "success",
      "vs-value": "1"
    },
    model: {
      value: _vm.product.emi_enabled,
      callback: function callback($$v) {
        _vm.$set(_vm.product, "emi_enabled", $$v);
      },
      expression: "product.emi_enabled"
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
  }, [_vm._v("Disabled")])])], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("vs-button", {
    attrs: {
      type: "relief",
      color: "primary"
    },
    on: {
      click: _vm.saveProductDetail
    }
  }, [_vm._v("Save")]), _vm._v(" "), _vm.product_id ? _c("vs-button", {
    attrs: {
      type: "relief",
      color: "primary"
    },
    on: {
      click: _vm.saveAndNext
    }
  }, [_vm._v("Save & Next")]) : _vm._e()], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue?vue&type=template&id=c13fdb2a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue?vue&type=template&id=c13fdb2a&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("vs-popup", {
    staticClass: "popup-lg",
    attrs: {
      title: "Image Alt",
      active: _vm.alt_text_popup
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.alt_text_popup = $event;
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
      name: "text",
      label: "Alt Text"
    },
    model: {
      value: _vm.image_alt.text,
      callback: function callback($$v) {
        _vm.$set(_vm.image_alt, "text", $$v);
      },
      expression: "image_alt.text"
    }
  }), _vm._v(" "), _c("p", [_vm.errors.has("text") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("text")))]) : _vm._e()]), _vm._v(" "), _c("vs-button", {
    staticClass: "mr-3 mt-5",
    on: {
      click: _vm.saveImageAlt
    }
  }, [_vm._v("Submit")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("vx-card", [_c("vs-alert", {
    attrs: {
      active: !_vm.validated,
      color: "danger",
      "icon-pack": "feather",
      icon: "icon-info"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.validation_message))])]), _vm._v(" "), _c("div", {
    staticClass: "con-upload"
  }, [_c("div", {
    staticClass: "con-img-upload"
  }, [_vm._l(_vm.product_images, function (image) {
    return !image.custom_properties.color ? _c("div", {
      key: "product-image".concat(image.uuid),
      staticClass: "img-upload",
      "class": {
        "default--image": image.custom_properties.is_default
      }
    }, [_c("vs-button", {
      staticStyle: {
        position: "absolute",
        top: "5px",
        left: "5px"
      },
      attrs: {
        color: "success",
        size: "small",
        type: "filled"
      },
      on: {
        click: function click($event) {
          return _vm.setAsPrimary(image.uuid);
        }
      }
    }, [_vm._v("Set as primary")]), _vm._v(" "), _c("button", {
      staticClass: "btn-x-file",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.deleteImage(image.uuid);
        }
      }
    }, [_c("i", {
      staticClass: "material-icons notranslate",
      attrs: {
        translate: "translate"
      }
    }, [_vm._v("clear")])]), _vm._v(" "), _c("img", {
      staticStyle: {
        "max-width": "100%",
        "max-height": "100%"
      },
      attrs: {
        src: image.preview_url
      },
      on: {
        click: function click($event) {
          return _vm.toggleImageAlt(image);
        }
      }
    })], 1) : _vm._e();
  }), _vm._v(" "), _c("div", {
    staticClass: "con-input-upload"
  }, [_c("input", {
    ref: "product_images",
    attrs: {
      type: "file",
      accept: "image/*",
      multiple: "multiple"
    },
    on: {
      change: function change($event) {
        return _vm.filesUploaded($event);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-input"
  }, [_vm._v("Upload Images")]), _vm._v(" "), _c("span", {
    staticClass: "input-progress",
    staticStyle: {
      width: "0%"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn-upload-all vs-upload--button-upload",
    attrs: {
      type: "button",
      title: "Upload"
    }
  }, [_c("i", {
    staticClass: "material-icons notranslate",
    attrs: {
      translate: "translate"
    }
  }, [_vm._v("cloud_upload")])])])], 2), _vm._v(" "), _vm.color_variants.length ? _c("div", _vm._l(_vm.color_variants, function (color_variant) {
    return _c("div", {
      staticClass: "con-img-upload"
    }, [_c("p", {
      staticStyle: {
        "font-size": "22px"
      }
    }, [_c("strong", [_vm._v("Color:")]), _vm._v("\n              " + _vm._s(color_variant.color) + "\n            ")]), _vm._v(" "), _vm._l(_vm.getVariantProductImages(color_variant.color), function (image) {
      return _c("div", {
        key: "product-image".concat(image.uuid),
        staticClass: "img-upload",
        "class": {
          "default--image": image.custom_properties.is_default
        }
      }, [_c("vs-button", {
        staticStyle: {
          position: "absolute",
          top: "5px",
          left: "5px"
        },
        attrs: {
          color: "success",
          size: "small",
          type: "filled"
        },
        on: {
          click: function click($event) {
            return _vm.setAsPrimary(image.uuid, color_variant.color);
          }
        }
      }, [_vm._v("Set as primary")]), _vm._v(" "), _c("button", {
        staticClass: "btn-x-file",
        attrs: {
          type: "button"
        },
        on: {
          click: function click($event) {
            return _vm.deleteImage(image.uuid);
          }
        }
      }, [_c("i", {
        staticClass: "material-icons notranslate",
        attrs: {
          translate: "translate"
        }
      }, [_vm._v("clear")])]), _vm._v(" "), _c("img", {
        staticStyle: {
          "max-width": "none",
          "max-height": "100%"
        },
        attrs: {
          src: image.preview_url
        }
      })], 1);
    }), _vm._v(" "), _vm.getVariantProductImages(color_variant.color).length < 7 ? _c("div", {
      staticClass: "con-input-upload"
    }, [_c("input", {
      ref: "product_images",
      refInFor: true,
      attrs: {
        type: "file",
        accept: "image/*",
        multiple: "multiple"
      },
      on: {
        change: function change($event) {
          return _vm.filesUploaded($event, color_variant);
        }
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "text-input"
    }, [_vm._v("Upload Images")]), _vm._v(" "), _c("span", {
      staticClass: "input-progress",
      staticStyle: {
        width: "0%"
      }
    }), _vm._v(" "), _c("button", {
      staticClass: "btn-upload-all vs-upload--button-upload",
      attrs: {
        type: "button",
        title: "Upload"
      }
    }, [_c("i", {
      staticClass: "material-icons notranslate",
      attrs: {
        translate: "translate"
      }
    }, [_vm._v("cloud_upload")])])]) : _vm._e()], 2);
  }), 0) : _vm._e()])], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("vs-button", {
    attrs: {
      type: "relief",
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("prevTabPlease");
      }
    }
  }, [_vm._v("Prev")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      type: "relief",
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("nextTabPlease");
      }
    }
  }, [_vm._v("Next")])], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/ProductVariants.vue?vue&type=template&id=3cfeaa7e&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/common/products/ProductVariants.vue?vue&type=template&id=3cfeaa7e& ***!
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

  return _c("div", [_vm.productDetail.attribute_class_id ? _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full md:w-1/4"
  }, [_c("vx-card", {
    attrs: {
      title: "Create Variant"
    }
  }, [_vm.form_error ? _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-alert", {
    staticClass: "mb-2",
    attrs: {
      active: "true",
      color: "danger"
    }
  }, [_vm._v(_vm._s(_vm.error_message))])], 1) : _vm._e(), _vm._v(" "), _vm._l(_vm.variantables, function (variantable) {
    return _c("div", {
      key: "variantable-attr-".concat(variantable.id),
      staticClass: "vx-col w-full"
    }, [_c("label", {
      staticClass: "vs-input--label",
      attrs: {
        "for": ""
      }
    }, [_vm._v(_vm._s(variantable.name))]), _vm._v(" "), _c("v-select", {
      staticClass: "mb-3 w-full",
      attrs: {
        options: variantable.values,
        name: "vendor_id"
      },
      model: {
        value: _vm.variant.attributes[variantable.name],
        callback: function callback($$v) {
          _vm.$set(_vm.variant.attributes, variantable.name, $$v);
        },
        expression: "variant.attributes[variantable.name]"
      }
    })], 1);
  }), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full mb-3",
    attrs: {
      name: "price",
      type: "number",
      label: "Price"
    },
    model: {
      value: _vm.variant.price,
      callback: function callback($$v) {
        _vm.$set(_vm.variant, "price", $$v);
      },
      expression: "variant.price"
    }
  }), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.errors.has("price"),
      expression: "errors.has('price')"
    }],
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("price")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      name: "quantity",
      type: "number",
      label: "Quantity"
    },
    model: {
      value: _vm.variant.quantity,
      callback: function callback($$v) {
        _vm.$set(_vm.variant, "quantity", $$v);
      },
      expression: "variant.quantity"
    }
  }), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.errors.has("quantity"),
      expression: "errors.has('quantity')"
    }],
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("quantity")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mt-3"
  }, [_c("vs-button", {
    attrs: {
      type: "relief",
      color: "primary"
    },
    on: {
      click: _vm.saveVariant
    }
  }, [_vm._v("Save Variant")])], 1)], 2)], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full md:w-3/4"
  }, [_c("vx-card", {
    attrs: {
      title: "Available Variants"
    }
  }, [!_vm.variants.length ? _c("div", {
    staticClass: "text-center",
    staticStyle: {
      padding: "70px 0px"
    }
  }, [_c("h4", [_vm._v("No variant added yet")])]) : _c("vs-table", {
    attrs: {
      stripe: "",
      data: _vm.variants
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
          }, [_c("vs-td", _vm._l(tr.attributes, function (attrib_, key) {
            return _c("p", {
              staticClass: "mb-1"
            }, [_c("strong", [_vm._v(_vm._s(key) + ":")]), _vm._v(" "), _c("span", [_vm._v(_vm._s(attrib_))])]);
          }), 0), _vm._v(" "), _c("vs-td", [_vm._v(_vm._s(tr.quantity))]), _vm._v(" "), _c("vs-td", [_vm._v("Rs. " + _vm._s(tr.price))]), _vm._v(" "), _c("vs-td", [_c("vs-button", {
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
                return _vm.editVariant(tr);
              }
            }
          }), _vm._v(" "), _c("vs-button", {
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
                return _vm.deleteVariant(tr.id);
              }
            }
          })], 1)], 1);
        });
      }
    }], null, false, 3498032935)
  }, [_c("template", {
    slot: "header"
  }, [_c("strong", [_vm._v("Total :")]), _vm._v("\n             " + _vm._s(_vm.variants.length) + "\n          ")]), _vm._v(" "), _c("template", {
    slot: "thead"
  }, [_c("vs-th", [_vm._v("Attributes")]), _vm._v(" "), _c("vs-th", [_vm._v("Quantity")]), _vm._v(" "), _c("vs-th", [_vm._v("Price")]), _vm._v(" "), _c("vs-th", [_vm._v("Actions")])], 1)], 2)], 1)], 1)]) : _c("div", [_c("vx-card", {
    staticClass: "vx-col w-full text-center",
    staticStyle: {
      padding: "60px 0px"
    }
  }, [_c("h4", [_vm._v("\n        Please select product attribute class from\n        "), _c("strong", [_vm._v("Attributes")]), _vm._v(" section first !!\n      ")])])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mt-4"
  }, [_c("vs-button", {
    attrs: {
      type: "relief",
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("prevTabPlease");
      }
    }
  }, [_vm._v("Prev")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      type: "relief",
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("nextTabPlease");
      }
    }
  }, [_vm._v("Next")])], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue?vue&type=style&index=0&id=c13fdb2a&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue?vue&type=style&index=0&id=c13fdb2a&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .default--image[data-v-c13fdb2a] {\n  border: solid 3px rgb(56, 161, 56);\n  padding: 5px;\n}\n[dir] .add--image-section[data-v-c13fdb2a] {\n  border: 4px dashed #dadde0 !important;\n}\n.each--image-section[data-v-c13fdb2a] {\n  width: 100%;\n}\n[dir] .each--image-section[data-v-c13fdb2a] {\n  border: 4px solid #dadde0;\n  border-radius: 5px;\n}\n.each--image-section .preview--images[data-v-c13fdb2a] {\n  width: 100%;\n}\n[dir] .each--image-section .preview--images[data-v-c13fdb2a] {\n  border-radius: 5px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue?vue&type=style&index=0&id=c13fdb2a&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue?vue&type=style&index=0&id=c13fdb2a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductImages.vue?vue&type=style&index=0&id=c13fdb2a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue?vue&type=style&index=0&id=c13fdb2a&lang=scss&scoped=true&");

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

/***/ "./packages/ecommerce/resources/js/src/views/common/products/PriceAndStock.vue":
/*!*************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/common/products/PriceAndStock.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PriceAndStock_vue_vue_type_template_id_4512a58c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PriceAndStock.vue?vue&type=template&id=4512a58c& */ "./packages/ecommerce/resources/js/src/views/common/products/PriceAndStock.vue?vue&type=template&id=4512a58c&");
/* harmony import */ var _PriceAndStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PriceAndStock.vue?vue&type=script&lang=js& */ "./packages/ecommerce/resources/js/src/views/common/products/PriceAndStock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PriceAndStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PriceAndStock_vue_vue_type_template_id_4512a58c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PriceAndStock_vue_vue_type_template_id_4512a58c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ecommerce/resources/js/src/views/common/products/PriceAndStock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/common/products/PriceAndStock.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/common/products/PriceAndStock.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceAndStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PriceAndStock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/PriceAndStock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceAndStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/common/products/PriceAndStock.vue?vue&type=template&id=4512a58c&":
/*!********************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/common/products/PriceAndStock.vue?vue&type=template&id=4512a58c& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceAndStock_vue_vue_type_template_id_4512a58c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PriceAndStock.vue?vue&type=template&id=4512a58c& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/PriceAndStock.vue?vue&type=template&id=4512a58c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceAndStock_vue_vue_type_template_id_4512a58c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceAndStock_vue_vue_type_template_id_4512a58c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/common/products/ProductAttributes.vue":
/*!*****************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/common/products/ProductAttributes.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductAttributes_vue_vue_type_template_id_b536e76c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductAttributes.vue?vue&type=template&id=b536e76c& */ "./packages/ecommerce/resources/js/src/views/common/products/ProductAttributes.vue?vue&type=template&id=b536e76c&");
/* harmony import */ var _ProductAttributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductAttributes.vue?vue&type=script&lang=js& */ "./packages/ecommerce/resources/js/src/views/common/products/ProductAttributes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductAttributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductAttributes_vue_vue_type_template_id_b536e76c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductAttributes_vue_vue_type_template_id_b536e76c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ecommerce/resources/js/src/views/common/products/ProductAttributes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/common/products/ProductAttributes.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/common/products/ProductAttributes.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductAttributes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/ProductAttributes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/common/products/ProductAttributes.vue?vue&type=template&id=b536e76c&":
/*!************************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/common/products/ProductAttributes.vue?vue&type=template&id=b536e76c& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributes_vue_vue_type_template_id_b536e76c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductAttributes.vue?vue&type=template&id=b536e76c& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/ProductAttributes.vue?vue&type=template&id=b536e76c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributes_vue_vue_type_template_id_b536e76c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributes_vue_vue_type_template_id_b536e76c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/common/products/ProductDetail.vue":
/*!*************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/common/products/ProductDetail.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductDetail_vue_vue_type_template_id_92e1d878___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductDetail.vue?vue&type=template&id=92e1d878& */ "./packages/ecommerce/resources/js/src/views/common/products/ProductDetail.vue?vue&type=template&id=92e1d878&");
/* harmony import */ var _ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductDetail.vue?vue&type=script&lang=js& */ "./packages/ecommerce/resources/js/src/views/common/products/ProductDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductDetail_vue_vue_type_template_id_92e1d878___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductDetail_vue_vue_type_template_id_92e1d878___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ecommerce/resources/js/src/views/common/products/ProductDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/common/products/ProductDetail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/common/products/ProductDetail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/ProductDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/common/products/ProductDetail.vue?vue&type=template&id=92e1d878&":
/*!********************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/common/products/ProductDetail.vue?vue&type=template&id=92e1d878& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_template_id_92e1d878___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetail.vue?vue&type=template&id=92e1d878& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/ProductDetail.vue?vue&type=template&id=92e1d878&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_template_id_92e1d878___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_template_id_92e1d878___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue":
/*!*************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductImages_vue_vue_type_template_id_c13fdb2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductImages.vue?vue&type=template&id=c13fdb2a&scoped=true& */ "./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue?vue&type=template&id=c13fdb2a&scoped=true&");
/* harmony import */ var _ProductImages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductImages.vue?vue&type=script&lang=js& */ "./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductImages_vue_vue_type_style_index_0_id_c13fdb2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductImages.vue?vue&type=style&index=0&id=c13fdb2a&lang=scss&scoped=true& */ "./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue?vue&type=style&index=0&id=c13fdb2a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductImages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductImages_vue_vue_type_template_id_c13fdb2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductImages_vue_vue_type_template_id_c13fdb2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c13fdb2a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductImages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductImages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductImages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue?vue&type=style&index=0&id=c13fdb2a&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue?vue&type=style&index=0&id=c13fdb2a&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductImages_vue_vue_type_style_index_0_id_c13fdb2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductImages.vue?vue&type=style&index=0&id=c13fdb2a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue?vue&type=style&index=0&id=c13fdb2a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductImages_vue_vue_type_style_index_0_id_c13fdb2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductImages_vue_vue_type_style_index_0_id_c13fdb2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductImages_vue_vue_type_style_index_0_id_c13fdb2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductImages_vue_vue_type_style_index_0_id_c13fdb2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue?vue&type=template&id=c13fdb2a&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue?vue&type=template&id=c13fdb2a&scoped=true& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductImages_vue_vue_type_template_id_c13fdb2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductImages.vue?vue&type=template&id=c13fdb2a&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/ProductImages.vue?vue&type=template&id=c13fdb2a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductImages_vue_vue_type_template_id_c13fdb2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductImages_vue_vue_type_template_id_c13fdb2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/common/products/ProductVariants.vue":
/*!***************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/common/products/ProductVariants.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductVariants_vue_vue_type_template_id_3cfeaa7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductVariants.vue?vue&type=template&id=3cfeaa7e& */ "./packages/ecommerce/resources/js/src/views/common/products/ProductVariants.vue?vue&type=template&id=3cfeaa7e&");
/* harmony import */ var _ProductVariants_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductVariants.vue?vue&type=script&lang=js& */ "./packages/ecommerce/resources/js/src/views/common/products/ProductVariants.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductVariants_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductVariants_vue_vue_type_template_id_3cfeaa7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductVariants_vue_vue_type_template_id_3cfeaa7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ecommerce/resources/js/src/views/common/products/ProductVariants.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/common/products/ProductVariants.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/common/products/ProductVariants.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductVariants_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductVariants.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/ProductVariants.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductVariants_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/views/common/products/ProductVariants.vue?vue&type=template&id=3cfeaa7e&":
/*!**********************************************************************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/views/common/products/ProductVariants.vue?vue&type=template&id=3cfeaa7e& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductVariants_vue_vue_type_template_id_3cfeaa7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductVariants.vue?vue&type=template&id=3cfeaa7e& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/ecommerce/resources/js/src/views/common/products/ProductVariants.vue?vue&type=template&id=3cfeaa7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductVariants_vue_vue_type_template_id_3cfeaa7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductVariants_vue_vue_type_template_id_3cfeaa7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);