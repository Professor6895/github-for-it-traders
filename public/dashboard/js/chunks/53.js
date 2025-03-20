(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/views/pages/UserRoles/Role.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/views/pages/UserRoles/Role.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js");
/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(loglevel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils.js */ "./packages/core/resources/js/src/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      id: null,
      permissions: [],
      role: {
        permissions: []
      }
    };
  },
  methods: {
    getAllPermissions: function getAllPermissions() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.$http.get("/api/admin/user-roles/all-permissions");

              case 3:
                response = _context.sent;

                if (response.data.success) {
                  _this.permissions = response.data.data;
                }

                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

                _this.errorNotification("Something went wrong! Please retry!!");

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    fetchRole: function fetchRole() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this2.id) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _this2.$vs.loading({
                  container: "#loading--container"
                });

                _context2.prev = 3;
                _context2.next = 6;
                return _this2.$http.get("/api/admin/user-roles/".concat(_this2.id));

              case 6:
                response = _context2.sent;

                if (response.data.success) {
                  _this2.role = response.data.data;
                }

                _context2.next = 15;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](3);

                _this2.errorNotification("Something went wrong! Please retry!!");

                if (!(_context2.t0.response.status === 404)) {
                  _context2.next = 15;
                  break;
                }

                return _context2.abrupt("return", _this2.$router.push({
                  name: "error-404"
                }));

              case 15:
                _context2.prev = 15;

                _this2.$vs.loading.close("#loading--container > .con-vs-loading");

                return _context2.finish(15);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 10, 15, 18]]);
      }))();
    },
    saveRole: function saveRole() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var result, params, url, response;
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
                _this3.$vs.loading({
                  container: "#loading--container"
                });

                _context3.prev = 6;
                params = {
                  name: _this3.role.name,
                  permissions: _this3.role.permissions
                };
                url = "/api/admin/user-roles";

                if (_this3.id) {
                  url = "/api/admin/user-roles/".concat(_this3.id);
                  params["_method"] = "PATCH";
                }

                _context3.next = 12;
                return _this3.$http.post(url, params);

              case 12:
                response = _context3.sent;

                if (!response.data.success) {
                  _context3.next = 17;
                  break;
                }

                _this3.successNotification(response.data.message);

                if (_this3.id) {
                  _context3.next = 17;
                  break;
                }

                return _context3.abrupt("return", _this3.$router.push({
                  name: "admin-user-roles"
                }));

              case 17:
                _context3.next = 23;
                break;

              case 19:
                _context3.prev = 19;
                _context3.t0 = _context3["catch"](6);
                Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["renderServerErrors"])(_this3.errors, _context3.t0);

                _this3.errorNotification("Something went wrong! Please retry!!");

              case 23:
                _context3.prev = 23;

                _this3.$vs.loading.close("#loading--container > .con-vs-loading");

                return _context3.finish(23);

              case 26:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[6, 19, 23, 26]]);
      }))();
    }
  },
  mounted: function mounted() {
    this.id = this.$route.params.id;
    this.getAllPermissions();
    this.fetchRole();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/views/pages/UserRoles/Role.vue?vue&type=template&id=00cd04cc&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/views/pages/UserRoles/Role.vue?vue&type=template&id=00cd04cc& ***!
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

  return _c("div", {
    staticClass: "vx-col w-full mb-base"
  }, [_c("vx-card", {
    staticClass: "vs-con-loading__container",
    attrs: {
      id: "loading--container"
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col sm:w-1/2 w-full mb-2"
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
      label: "Role Name"
    },
    model: {
      value: _vm.role.name,
      callback: function callback($$v) {
        _vm.$set(_vm.role, "name", $$v);
      },
      expression: "role.name"
    }
  }), _vm._v(" "), _vm.errors.has("name") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("name")))]) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-2"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("h5", [_vm._v("Permissions")]), _vm._v(" "), !_vm.permissions.length ? _c("div", {
    staticClass: "pt-5 pb-5 mb-5 mt-5"
  }, [_c("p", {
    staticClass: "ml-5"
  }, [_vm._v("Fetching Permissions!")])]) : _c("div", {
    staticClass: "mt-4"
  }, [_vm._l(_vm.permissions, function (module) {
    return _c("div", {
      key: module.module,
      staticClass: "mb-5"
    }, [_c("h5", [_vm._v(_vm._s(module.module))]), _vm._v(" "), _c("ul", {
      staticClass: "mt-3"
    }, _vm._l(module.permissions, function (permission_name, permission_value) {
      return _c("li", {
        key: permission_value,
        staticClass: "inline-block"
      }, [_c("vs-checkbox", {
        attrs: {
          "vs-value": permission_value
        },
        model: {
          value: _vm.role.permissions,
          callback: function callback($$v) {
            _vm.$set(_vm.role, "permissions", $$v);
          },
          expression: "role.permissions"
        }
      }, [_vm._v(_vm._s(permission_name))])], 1);
    }), 0)]);
  }), _vm._v(" "), _vm.errors.has("permissions") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("permissions")))]) : _vm._e()], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-2"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-button", {
    staticClass: "mr-3 mb-2",
    on: {
      click: _vm.saveRole
    }
  }, [_vm._v("Submit")])], 1)])])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/loglevel/lib/loglevel.js":
/*!***********************************************!*\
  !*** ./node_modules/loglevel/lib/loglevel.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/
(function (root, definition) {
    "use strict";
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function () {
    "use strict";

    // Slightly dubious tricks to cut down minimized file size
    var noop = function() {};
    var undefinedType = "undefined";
    var isIE = (typeof window !== undefinedType) && (typeof window.navigator !== undefinedType) && (
        /Trident\/|MSIE /.test(window.navigator.userAgent)
    );

    var logMethods = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
    ];

    // Cross-browser bind equivalent that works at least back to IE6
    function bindMethod(obj, methodName) {
        var method = obj[methodName];
        if (typeof method.bind === 'function') {
            return method.bind(obj);
        } else {
            try {
                return Function.prototype.bind.call(method, obj);
            } catch (e) {
                // Missing bind shim or IE8 + Modernizr, fallback to wrapping
                return function() {
                    return Function.prototype.apply.apply(method, [obj, arguments]);
                };
            }
        }
    }

    // Trace() doesn't print the message in IE, so for that case we need to wrap it
    function traceForIE() {
        if (console.log) {
            if (console.log.apply) {
                console.log.apply(console, arguments);
            } else {
                // In old IE, native console methods themselves don't have apply().
                Function.prototype.apply.apply(console.log, [console, arguments]);
            }
        }
        if (console.trace) console.trace();
    }

    // Build the best logging method possible for this env
    // Wherever possible we want to bind, not wrap, to preserve stack traces
    function realMethod(methodName) {
        if (methodName === 'debug') {
            methodName = 'log';
        }

        if (typeof console === undefinedType) {
            return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
        } else if (methodName === 'trace' && isIE) {
            return traceForIE;
        } else if (console[methodName] !== undefined) {
            return bindMethod(console, methodName);
        } else if (console.log !== undefined) {
            return bindMethod(console, 'log');
        } else {
            return noop;
        }
    }

    // These private functions always need `this` to be set properly

    function replaceLoggingMethods(level, loggerName) {
        /*jshint validthis:true */
        for (var i = 0; i < logMethods.length; i++) {
            var methodName = logMethods[i];
            this[methodName] = (i < level) ?
                noop :
                this.methodFactory(methodName, level, loggerName);
        }

        // Define log.log as an alias for log.debug
        this.log = this.debug;
    }

    // In old IE versions, the console isn't present until you first open it.
    // We build realMethod() replacements here that regenerate logging methods
    function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
        return function () {
            if (typeof console !== undefinedType) {
                replaceLoggingMethods.call(this, level, loggerName);
                this[methodName].apply(this, arguments);
            }
        };
    }

    // By default, we use closely bound real methods wherever possible, and
    // otherwise we wait for a console to appear, and then try again.
    function defaultMethodFactory(methodName, level, loggerName) {
        /*jshint validthis:true */
        return realMethod(methodName) ||
               enableLoggingWhenConsoleArrives.apply(this, arguments);
    }

    function Logger(name, defaultLevel, factory) {
      var self = this;
      var currentLevel;
      defaultLevel = defaultLevel == null ? "WARN" : defaultLevel;

      var storageKey = "loglevel";
      if (typeof name === "string") {
        storageKey += ":" + name;
      } else if (typeof name === "symbol") {
        storageKey = undefined;
      }

      function persistLevelIfPossible(levelNum) {
          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();

          if (typeof window === undefinedType || !storageKey) return;

          // Use localStorage if available
          try {
              window.localStorage[storageKey] = levelName;
              return;
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=" + levelName + ";";
          } catch (ignore) {}
      }

      function getPersistedLevel() {
          var storedLevel;

          if (typeof window === undefinedType || !storageKey) return;

          try {
              storedLevel = window.localStorage[storageKey];
          } catch (ignore) {}

          // Fallback to cookies if local storage gives us nothing
          if (typeof storedLevel === undefinedType) {
              try {
                  var cookie = window.document.cookie;
                  var location = cookie.indexOf(
                      encodeURIComponent(storageKey) + "=");
                  if (location !== -1) {
                      storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];
                  }
              } catch (ignore) {}
          }

          // If the stored level is not valid, treat it as if nothing was stored.
          if (self.levels[storedLevel] === undefined) {
              storedLevel = undefined;
          }

          return storedLevel;
      }

      function clearPersistedLevel() {
          if (typeof window === undefinedType || !storageKey) return;

          // Use localStorage if available
          try {
              window.localStorage.removeItem(storageKey);
              return;
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
          } catch (ignore) {}
      }

      /*
       *
       * Public logger API - see https://github.com/pimterry/loglevel for details
       *
       */

      self.name = name;

      self.levels = { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3,
          "ERROR": 4, "SILENT": 5};

      self.methodFactory = factory || defaultMethodFactory;

      self.getLevel = function () {
          return currentLevel;
      };

      self.setLevel = function (level, persist) {
          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
              level = self.levels[level.toUpperCase()];
          }
          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
              currentLevel = level;
              if (persist !== false) {  // defaults to true
                  persistLevelIfPossible(level);
              }
              replaceLoggingMethods.call(self, level, name);
              if (typeof console === undefinedType && level < self.levels.SILENT) {
                  return "No console available for logging";
              }
          } else {
              throw "log.setLevel() called with invalid level: " + level;
          }
      };

      self.setDefaultLevel = function (level) {
          defaultLevel = level;
          if (!getPersistedLevel()) {
              self.setLevel(level, false);
          }
      };

      self.resetLevel = function () {
          self.setLevel(defaultLevel, false);
          clearPersistedLevel();
      };

      self.enableAll = function(persist) {
          self.setLevel(self.levels.TRACE, persist);
      };

      self.disableAll = function(persist) {
          self.setLevel(self.levels.SILENT, persist);
      };

      // Initialize with the right level
      var initialLevel = getPersistedLevel();
      if (initialLevel == null) {
          initialLevel = defaultLevel;
      }
      self.setLevel(initialLevel, false);
    }

    /*
     *
     * Top-level API
     *
     */

    var defaultLogger = new Logger();

    var _loggersByName = {};
    defaultLogger.getLogger = function getLogger(name) {
        if ((typeof name !== "symbol" && typeof name !== "string") || name === "") {
          throw new TypeError("You must supply a name when creating a logger.");
        }

        var logger = _loggersByName[name];
        if (!logger) {
          logger = _loggersByName[name] = new Logger(
            name, defaultLogger.getLevel(), defaultLogger.methodFactory);
        }
        return logger;
    };

    // Grab the current global log variable in case of overwrite
    var _log = (typeof window !== undefinedType) ? window.log : undefined;
    defaultLogger.noConflict = function() {
        if (typeof window !== undefinedType &&
               window.log === defaultLogger) {
            window.log = _log;
        }

        return defaultLogger;
    };

    defaultLogger.getLoggers = function getLoggers() {
        return _loggersByName;
    };

    // ES6 default export, for compatibility
    defaultLogger['default'] = defaultLogger;

    return defaultLogger;
}));


/***/ }),

/***/ "./packages/core/resources/js/src/views/pages/UserRoles/Role.vue":
/*!***********************************************************************!*\
  !*** ./packages/core/resources/js/src/views/pages/UserRoles/Role.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Role_vue_vue_type_template_id_00cd04cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Role.vue?vue&type=template&id=00cd04cc& */ "./packages/core/resources/js/src/views/pages/UserRoles/Role.vue?vue&type=template&id=00cd04cc&");
/* harmony import */ var _Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Role.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/views/pages/UserRoles/Role.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Role_vue_vue_type_template_id_00cd04cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Role_vue_vue_type_template_id_00cd04cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/views/pages/UserRoles/Role.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/views/pages/UserRoles/Role.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/views/pages/UserRoles/Role.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Role.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/views/pages/UserRoles/Role.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/views/pages/UserRoles/Role.vue?vue&type=template&id=00cd04cc&":
/*!******************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/views/pages/UserRoles/Role.vue?vue&type=template&id=00cd04cc& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_00cd04cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Role.vue?vue&type=template&id=00cd04cc& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/views/pages/UserRoles/Role.vue?vue&type=template&id=00cd04cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_00cd04cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_00cd04cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);