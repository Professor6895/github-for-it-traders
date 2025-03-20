(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/menus/resources/js/src/views/menus/MenuDetail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/menus/resources/js/src/views/menus/MenuDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_nestable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-nestable */ "./node_modules/vue-nestable/dist/index.umd.min.js");
/* harmony import */ var vue_nestable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_nestable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      menuItemPopup: false,
      menu: {
        menu_items: []
      },
      menu_item: {},
      menu_item_update: {}
    };
  },
  components: {
    VueNestable: vue_nestable__WEBPACK_IMPORTED_MODULE_0__["VueNestable"],
    VueNestableHandle: vue_nestable__WEBPACK_IMPORTED_MODULE_0__["VueNestableHandle"]
  },
  mounted: function mounted() {
    this.id = this.$route.params.id;
    this.fetchMenu();
  },
  methods: {
    fetchMenu: function fetchMenu() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.id) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _this.$vs.loading({
                  container: "#loading--container"
                });

                _context.prev = 3;
                _context.next = 6;
                return _this.$http.get("/api/admin/menus/".concat(_this.id));

              case 6:
                response = _context.sent;

                if (response.data.success) {
                  _this.menu = response.data.data;
                }

                _context.next = 15;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);

                _this.errorNotification("Something went wrong! Please retry!!");

                if (!(_context.t0.response.status === 404)) {
                  _context.next = 15;
                  break;
                }

                return _context.abrupt("return", _this.$router.push({
                  name: "page-error-404"
                }));

              case 15:
                _context.prev = 15;

                _this.$vs.loading.close("#loading--container > .con-vs-loading");

                return _context.finish(15);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 10, 15, 18]]);
      }))();
    },
    addItemToMenu: function addItemToMenu() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var result, item;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$validator.validateAll("menu-item");

              case 2:
                result = _context2.sent;

                if (result) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return");

              case 5:
                item = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.cloneDeep(_this2.menu_item);
                item["id"] = "_" + Math.random().toString(36).substr(2, 9);
                item["children"] = [];

                _this2.menu.menu_items.push(item);

                _this2.menu_item = {};

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    removeMenuItem: function removeMenuItem(item) {
      var _this3 = this;

      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "Confirm",
        text: "Are you sure you want to delete menu item?",
        accept: function accept() {
          var menu_items = _this3.menu.menu_items;
          var context = _this3;
          menu_items.map(function (menu_item, index) {
            if (menu_item.id === item.id) {
              menu_items.splice(index, 1);
            } else {
              menu_item = context.removeFromTree(menu_item, item.id);
            }
          });
        }
      });
    },
    removeFromTree: function removeFromTree(parent, idToRemove) {
      var context = this;
      parent.children = parent.children.filter(function (child) {
        return child.id !== idToRemove;
      }).map(function (child) {
        return context.removeFromTree(child, idToRemove);
      });
      return parent;
    },
    editMenuItem: function editMenuItem(item) {
      this.menu_item_update = item;
      this.menuItemPopup = true;
    },
    saveMenu: function saveMenu() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var result, params, url, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this4.$validator.validateAll("menu");

              case 2:
                result = _context3.sent;

                if (result) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return");

              case 5:
                _context3.prev = 5;

                _this4.$vs.loading({
                  container: "#loading--container"
                });

                params = {
                  title: _this4.menu.title,
                  menu_items: _this4.menu.menu_items
                };
                url = "/api/admin/menus";

                if (_this4.id) {
                  url = "/api/admin/menus/".concat(_this4.id);
                  params["_method"] = "PATCH";
                }

                _context3.next = 12;
                return _this4.$http.post(url, params);

              case 12:
                response = _context3.sent;

                if (!(response.data.success === true)) {
                  _context3.next = 19;
                  break;
                }

                _this4.successNotification(response.data.message);

                if (_this4.id) {
                  _context3.next = 17;
                  break;
                }

                return _context3.abrupt("return", _this4.$router.push({
                  name: "admin-menus"
                }));

              case 17:
                _context3.next = 20;
                break;

              case 19:
                _this4.errorNotification(response.data.message);

              case 20:
                _context3.next = 25;
                break;

              case 22:
                _context3.prev = 22;
                _context3.t0 = _context3["catch"](5);

                _this4.errorNotification("Something went wrong! Please retry!!");

              case 25:
                _context3.prev = 25;

                _this4.$vs.loading.close("#loading--container > .con-vs-loading");

                return _context3.finish(25);

              case 28:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[5, 22, 25, 28]]);
      }))();
    }
  },
  watch: {
    menuItemPopup: function menuItemPopup(val) {
      if (!val) {
        this.menu_item_update = {};
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/menus/resources/js/src/views/menus/MenuDetail.vue?vue&type=template&id=e89f39b8&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/menus/resources/js/src/views/menus/MenuDetail.vue?vue&type=template&id=e89f39b8&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "vx-row vs-con-loading__container",
    attrs: {
      id: "loading--container"
    }
  }, [_c("div", {
    staticClass: "vx-col md:w-1/3 w-full"
  }, [_c("vx-card", {
    staticClass: "mb-4",
    attrs: {
      title: "Menu Configuration"
    }
  }, [_c("form", {
    attrs: {
      action: "",
      "data-vv-scope": "menu-item"
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
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
      name: "name",
      label: "Name"
    },
    model: {
      value: _vm.menu_item.name,
      callback: function callback($$v) {
        _vm.$set(_vm.menu_item, "name", $$v);
      },
      expression: "menu_item.name"
    }
  }), _vm._v(" "), _vm.errors.has("menu-item.name") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("menu-item.name")))]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mt-4"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      name: "link",
      label: "Link"
    },
    model: {
      value: _vm.menu_item.link,
      callback: function callback($$v) {
        _vm.$set(_vm.menu_item, "link", $$v);
      },
      expression: "menu_item.link"
    }
  }), _vm._v(" "), _vm.errors.has("menu-item.link") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("menu-item.link")))]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mt-4"
  }, [_c("vs-checkbox", {
    model: {
      value: _vm.menu_item.open_new_tab,
      callback: function callback($$v) {
        _vm.$set(_vm.menu_item, "open_new_tab", $$v);
      },
      expression: "menu_item.open_new_tab"
    }
  }, [_vm._v("Open in new tab")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-button", {
    staticClass: "mt-4 float-right",
    attrs: {
      type: "border",
      size: "small"
    },
    on: {
      click: _vm.addItemToMenu
    }
  }, [_vm._v("Add >>")])], 1)])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-2/3 w-full"
  }, [_c("vx-card", {
    staticClass: "mb-4"
  }, [_c("form", {
    attrs: {
      "data-vv-scope": "menu"
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      name: "title",
      label: "Titles"
    },
    model: {
      value: _vm.menu.title,
      callback: function callback($$v) {
        _vm.$set(_vm.menu, "title", $$v);
      },
      expression: "menu.title"
    }
  }), _vm._v(" "), _vm.errors.has("menu.title") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("menu.title")))]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("div", {
    staticClass: "menu-builder--area p-4"
  }, [_c("vue-nestable", {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var item = _ref.item;
        return _c("vue-nestable-handle", {
          attrs: {
            item: item
          }
        }, [_c("vs-icon", {
          staticClass: "nestable--handler-icon mr-2",
          attrs: {
            icon: "menu"
          }
        }), _vm._v("\n                  " + _vm._s(item.name) + "\n                  "), item.open_new_tab ? _c("small", [_vm._v("(New Tab)")]) : _vm._e(), _vm._v(" "), _c("vs-icon", {
          staticClass: "float-right text-xl cursor-pointer",
          attrs: {
            color: "danger",
            icon: "delete"
          },
          on: {
            click: function click($event) {
              return _vm.removeMenuItem(item);
            }
          }
        }), _vm._v(" "), _c("vs-icon", {
          staticClass: "float-right mr-3 text-xl cursor-pointer",
          attrs: {
            color: "warning",
            icon: "edit"
          },
          on: {
            click: function click($event) {
              return _vm.editMenuItem(item);
            }
          }
        })], 1);
      }
    }]),
    model: {
      value: _vm.menu.menu_items,
      callback: function callback($$v) {
        _vm.$set(_vm.menu, "menu_items", $$v);
      },
      expression: "menu.menu_items"
    }
  }, [_c("div", {
    attrs: {
      slot: "placeholder"
    },
    slot: "placeholder"
  }, [_c("div", {
    staticClass: "text-center mt-10 mb-10"
  }, [_c("b", [_vm._v("This list is empty")]), _vm._v(" "), _c("p", [_vm._v("You can add items using form on left side.")])])])])], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "flex justify-between flex-row-reverse"
  }, [_c("vs-button", {
    staticClass: "mt-4 float-right",
    attrs: {
      size: "small",
      type: "border"
    },
    on: {
      click: _vm.saveMenu
    }
  }, [_vm._v("Save")])], 1)])], 1), _vm._v(" "), _c("vs-popup", {
    attrs: {
      title: "Menu Item",
      active: _vm.menuItemPopup
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.menuItemPopup = $event;
      }
    }
  }, [_c("form", {
    attrs: {
      action: "",
      "data-vv-scope": "menu-item-update"
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
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
      name: "name",
      label: "Name"
    },
    model: {
      value: _vm.menu_item_update.name,
      callback: function callback($$v) {
        _vm.$set(_vm.menu_item_update, "name", $$v);
      },
      expression: "menu_item_update.name"
    }
  }), _vm._v(" "), _vm.errors.has("menu-item-update.name") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("menu-item-update.name")))]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mt-4"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      name: "link",
      label: "Link"
    },
    model: {
      value: _vm.menu_item_update.link,
      callback: function callback($$v) {
        _vm.$set(_vm.menu_item_update, "link", $$v);
      },
      expression: "menu_item_update.link"
    }
  }), _vm._v(" "), _vm.errors.has("menu-item-update.link") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("menu-item-update.link")))]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mt-4"
  }, [_c("vs-checkbox", {
    model: {
      value: _vm.menu_item_update.open_new_tab,
      callback: function callback($$v) {
        _vm.$set(_vm.menu_item_update, "open_new_tab", $$v);
      },
      expression: "menu_item_update.open_new_tab"
    }
  }, [_vm._v("Open in new tab")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-button", {
    staticClass: "mt-4 float-right",
    attrs: {
      type: "border",
      size: "small"
    },
    on: {
      click: function click($event) {
        _vm.menuItemPopup = false;
      }
    }
  }, [_vm._v("Done")])], 1)])])])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/menus/resources/js/src/views/menus/MenuDetail.vue?vue&type=style&index=0&id=e89f39b8&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/menus/resources/js/src/views/menus/MenuDetail.vue?vue&type=style&index=0&id=e89f39b8&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .menu-builder--area[data-v-e89f39b8] {\n  border: 1px solid rgb(196, 196, 196);\n  border-radius: 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/menus/resources/js/src/views/menus/MenuDetail.vue?vue&type=style&index=0&id=e89f39b8&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/menus/resources/js/src/views/menus/MenuDetail.vue?vue&type=style&index=0&id=e89f39b8&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuDetail.vue?vue&type=style&index=0&id=e89f39b8&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/menus/resources/js/src/views/menus/MenuDetail.vue?vue&type=style&index=0&id=e89f39b8&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./packages/menus/resources/js/src/views/menus/MenuDetail.vue":
/*!********************************************************************!*\
  !*** ./packages/menus/resources/js/src/views/menus/MenuDetail.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuDetail_vue_vue_type_template_id_e89f39b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuDetail.vue?vue&type=template&id=e89f39b8&scoped=true& */ "./packages/menus/resources/js/src/views/menus/MenuDetail.vue?vue&type=template&id=e89f39b8&scoped=true&");
/* harmony import */ var _MenuDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuDetail.vue?vue&type=script&lang=js& */ "./packages/menus/resources/js/src/views/menus/MenuDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MenuDetail_vue_vue_type_style_index_0_id_e89f39b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuDetail.vue?vue&type=style&index=0&id=e89f39b8&lang=scss&scoped=true& */ "./packages/menus/resources/js/src/views/menus/MenuDetail.vue?vue&type=style&index=0&id=e89f39b8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MenuDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuDetail_vue_vue_type_template_id_e89f39b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuDetail_vue_vue_type_template_id_e89f39b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e89f39b8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/menus/resources/js/src/views/menus/MenuDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/menus/resources/js/src/views/menus/MenuDetail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./packages/menus/resources/js/src/views/menus/MenuDetail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/menus/resources/js/src/views/menus/MenuDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/menus/resources/js/src/views/menus/MenuDetail.vue?vue&type=style&index=0&id=e89f39b8&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./packages/menus/resources/js/src/views/menus/MenuDetail.vue?vue&type=style&index=0&id=e89f39b8&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuDetail_vue_vue_type_style_index_0_id_e89f39b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuDetail.vue?vue&type=style&index=0&id=e89f39b8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/menus/resources/js/src/views/menus/MenuDetail.vue?vue&type=style&index=0&id=e89f39b8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuDetail_vue_vue_type_style_index_0_id_e89f39b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuDetail_vue_vue_type_style_index_0_id_e89f39b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuDetail_vue_vue_type_style_index_0_id_e89f39b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuDetail_vue_vue_type_style_index_0_id_e89f39b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./packages/menus/resources/js/src/views/menus/MenuDetail.vue?vue&type=template&id=e89f39b8&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./packages/menus/resources/js/src/views/menus/MenuDetail.vue?vue&type=template&id=e89f39b8&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuDetail_vue_vue_type_template_id_e89f39b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuDetail.vue?vue&type=template&id=e89f39b8&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/menus/resources/js/src/views/menus/MenuDetail.vue?vue&type=template&id=e89f39b8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuDetail_vue_vue_type_template_id_e89f39b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuDetail_vue_vue_type_template_id_e89f39b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);