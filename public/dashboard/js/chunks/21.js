(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/views/pages/settings/Settings.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/views/pages/settings/Settings.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar */ "./packages/core/resources/js/src/views/pages/settings/Sidebar.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils.js */ "./packages/core/resources/js/src/utils.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/store */ "./packages/core/resources/js/src/store/store.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      core_settings: {}
    };
  },
  components: {
    "settings-sidebar": _Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"]
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
      console.log(this.$store.state.settings.dashboard_settings);

      if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.has(this.$store.state, "settings.dashboard_settings.core")) {
        this.core_settings = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.cloneDeep(this.$store.state.settings.dashboard_settings.core);
      }
    },
    imageUploaded: function imageUploaded(ref, name) {
      var _this = this;

      var file = this.$refs[ref].files[0];
      var reader = new FileReader();

      reader.onload = function () {
        return _this.$set(_this.core_settings, name, reader.result);
      };

      reader.readAsDataURL(file);
    },
    clearImage: function clearImage(ref, name) {
      this.core_settings[name] = null;
      this.$refs[ref].value = "";
    },
    saveCoreSettings: function saveCoreSettings() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var result, paylod, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.$validator.validateAll();

              case 2:
                result = _context.sent;

                if (result) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                _this2.$vs.loading({
                  container: "#loading--container"
                });

                _context.prev = 6;
                paylod = {
                  brand_name: _this2.core_settings.brand_name,
                  brand_acronym: _this2.core_settings.brand_acronym,
                  description: _this2.core_settings.description,
                  address: _this2.core_settings.address,
                  email: _this2.core_settings.email,
                  contact_number: _this2.core_settings.contact_number,
                  social_facebook: _this2.core_settings.social_facebook,
                  social_instagram: _this2.core_settings.social_instagram,
                  social_twitter: _this2.core_settings.social_twitter,
                  social_linkedin: _this2.core_settings.social_linkedin,
                  social_google: _this2.core_settings.social_google,
                  social_youtube: _this2.core_settings.social_youtube,
                  meta_title: _this2.core_settings.meta_title,
                  meta_description: _this2.core_settings.meta_description,
                  meta_keywords: _this2.core_settings.meta_keywords,
                  _method: "PATCH"
                };

                if (_this2.core_settings.logo && lodash__WEBPACK_IMPORTED_MODULE_1___default.a.startsWith(_this2.core_settings.logo, "data:image")) {
                  paylod["logo"] = _this2.$refs.upload_logo_image.files[0];
                }

                if (_this2.core_settings.login_image && lodash__WEBPACK_IMPORTED_MODULE_1___default.a.startsWith(_this2.core_settings.login_image, "data:image")) {
                  paylod["login_image"] = _this2.$refs.upload_login_image.files[0];
                }

                if (_this2.core_settings.favicon && lodash__WEBPACK_IMPORTED_MODULE_1___default.a.startsWith(_this2.core_settings.favicon, "data:image")) {
                  paylod["favicon"] = _this2.$refs.favicon_image.files[0];
                }

                paylod = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["convertObjectToFormData"])(paylod);
                _context.next = 14;
                return _this2.$http.post("/api/admin/settings/core/update-settings", paylod);

              case 14:
                response = _context.sent;

                if (response.data.success) {
                  _store_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch("settings/fetchSettings", {
                    once: false
                  });

                  _this2.successNotification(response.data.message);
                }

                _context.next = 22;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](6);
                Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["renderServerErrors"])(_this2.errors, _context.t0);

                _this2.errorNotification("Something went wrong! Please retry!!");

              case 22:
                _context.prev = 22;

                _this2.$vs.loading.close("#loading--container > .con-vs-loading");

                return _context.finish(22);

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[6, 18, 22, 25]]);
      }))();
    }
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/views/pages/settings/Settings.vue?vue&type=template&id=9ec84850&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/views/pages/settings/Settings.vue?vue&type=template&id=9ec84850& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "vx-col md:w-3/12 w-full mb-2"
  }, [_c("settings-sidebar")], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-8/12 mb-2"
  }, [_c("vx-card", {
    staticClass: "vs-con-loading__container",
    attrs: {
      id: "loading--container"
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col sm:w-1/3 mb-4"
  }, [_vm.core_settings.logo ? _c("div", {
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
      click: function click($event) {
        return _vm.clearImage("upload_logo_image", "logo");
      }
    }
  })], 1), _vm._v(" "), _c("img", {
    attrs: {
      src: _vm.core_settings.logo,
      alt: ""
    }
  })]) : _vm._e(), _vm._v(" "), _c("input", {
    ref: "upload_logo_image",
    staticClass: "hidden",
    attrs: {
      type: "file",
      accept: "image/*"
    },
    on: {
      change: function change($event) {
        return _vm.imageUploaded("upload_logo_image", "logo");
      }
    }
  }), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "primary",
      size: "small",
      type: "border"
    },
    on: {
      click: function click($event) {
        return _vm.$refs.upload_logo_image.click();
      }
    }
  }, [_vm._v("Upload Logo")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col sm:w-1/3 mb-4"
  }, [_vm.core_settings.login_image ? _c("div", {
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
      click: function click($event) {
        return _vm.clearImage("upload_login_image", "login_image");
      }
    }
  })], 1), _vm._v(" "), _c("img", {
    attrs: {
      src: _vm.core_settings.login_image,
      alt: ""
    }
  })]) : _vm._e(), _vm._v(" "), _c("input", {
    ref: "upload_login_image",
    staticClass: "hidden",
    attrs: {
      type: "file",
      accept: "image/*"
    },
    on: {
      change: function change($event) {
        return _vm.imageUploaded("upload_login_image", "login_image");
      }
    }
  }), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "primary",
      type: "border",
      size: "small"
    },
    on: {
      click: function click($event) {
        return _vm.$refs.upload_login_image.click();
      }
    }
  }, [_vm._v("Login Image")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col sm:w-1/3 mb-4"
  }, [_vm.core_settings.favicon ? _c("div", {
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
      click: function click($event) {
        return _vm.clearImage("favicon_image", "favicon");
      }
    }
  })], 1), _vm._v(" "), _c("img", {
    attrs: {
      src: _vm.core_settings.favicon,
      alt: ""
    }
  })]) : _vm._e(), _vm._v(" "), _c("input", {
    ref: "favicon_image",
    staticClass: "hidden",
    attrs: {
      type: "file",
      accept: "image/*"
    },
    on: {
      change: function change($event) {
        return _vm.imageUploaded("favicon_image", "favicon");
      }
    }
  }), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "primary",
      type: "border",
      size: "small"
    },
    on: {
      click: function click($event) {
        return _vm.$refs.favicon_image.click();
      }
    }
  }, [_vm._v("Favicon")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col sm:w-1/2 w-full mb-4"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      "label-placeholder": "Brand Name",
      name: "brand_name"
    },
    model: {
      value: _vm.core_settings.brand_name,
      callback: function callback($$v) {
        _vm.$set(_vm.core_settings, "brand_name", $$v);
      },
      expression: "core_settings.brand_name"
    }
  }), _vm._v(" "), _vm.errors.has("brand_name") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("brand_name")))]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col sm:w-1/2 w-full mb-4"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      name: "brand_acronym",
      "label-placeholder": "Brand Acronym"
    },
    model: {
      value: _vm.core_settings.brand_acronym,
      callback: function callback($$v) {
        _vm.$set(_vm.core_settings, "brand_acronym", $$v);
      },
      expression: "core_settings.brand_acronym"
    }
  }), _vm._v(" "), _vm.errors.has("brand_acronym") ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("brand_acronym")))]) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mb-4"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "vs-input--label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c("q-editor", {
    model: {
      value: _vm.core_settings.description,
      callback: function callback($$v) {
        _vm.$set(_vm.core_settings, "description", $$v);
      },
      expression: "core_settings.description"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-4 mb-4"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("h4", [_vm._v("Contact Details")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 mt-2"
  }, [_c("vs-input", {
    staticClass: "w-full",
    attrs: {
      label: "Email",
      name: "email"
    },
    model: {
      value: _vm.core_settings.email,
      callback: function callback($$v) {
        _vm.$set(_vm.core_settings, "email", $$v);
      },
      expression: "core_settings.email"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 mt-4"
  }, [_c("vs-input", {
    staticClass: "w-full",
    attrs: {
      label: "Contact Number",
      name: "contact_number"
    },
    model: {
      value: _vm.core_settings.contact_number,
      callback: function callback($$v) {
        _vm.$set(_vm.core_settings, "contact_number", $$v);
      },
      expression: "core_settings.contact_number"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mt-4"
  }, [_c("vs-input", {
    staticClass: "w-full",
    attrs: {
      label: "Address",
      name: "address"
    },
    model: {
      value: _vm.core_settings.address,
      callback: function callback($$v) {
        _vm.$set(_vm.core_settings, "address", $$v);
      },
      expression: "core_settings.address"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-4"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("h4", [_vm._v("Social Information")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 mt-4"
  }, [_c("vs-input", {
    staticClass: "w-full",
    attrs: {
      label: "Facebook",
      name: "social_facebook"
    },
    model: {
      value: _vm.core_settings.social_facebook,
      callback: function callback($$v) {
        _vm.$set(_vm.core_settings, "social_facebook", $$v);
      },
      expression: "core_settings.social_facebook"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 mt-4"
  }, [_c("vs-input", {
    staticClass: "w-full",
    attrs: {
      label: "Twitter",
      name: "social_twitter"
    },
    model: {
      value: _vm.core_settings.social_twitter,
      callback: function callback($$v) {
        _vm.$set(_vm.core_settings, "social_twitter", $$v);
      },
      expression: "core_settings.social_twitter"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 mt-4"
  }, [_c("vs-input", {
    staticClass: "w-full",
    attrs: {
      label: "Instagram",
      name: "social_instagram"
    },
    model: {
      value: _vm.core_settings.social_instagram,
      callback: function callback($$v) {
        _vm.$set(_vm.core_settings, "social_instagram", $$v);
      },
      expression: "core_settings.social_instagram"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 mt-4"
  }, [_c("vs-input", {
    staticClass: "w-full",
    attrs: {
      label: "Linkedin",
      name: "social_linkedin"
    },
    model: {
      value: _vm.core_settings.social_linkedin,
      callback: function callback($$v) {
        _vm.$set(_vm.core_settings, "social_linkedin", $$v);
      },
      expression: "core_settings.social_linkedin"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 mt-4"
  }, [_c("vs-input", {
    staticClass: "w-full",
    attrs: {
      label: "Google",
      name: "social_google"
    },
    model: {
      value: _vm.core_settings.social_google,
      callback: function callback($$v) {
        _vm.$set(_vm.core_settings, "social_google", $$v);
      },
      expression: "core_settings.social_google"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 mt-4"
  }, [_c("vs-input", {
    staticClass: "w-full",
    attrs: {
      label: "Youtube",
      name: "social_youtube"
    },
    model: {
      value: _vm.core_settings.social_youtube,
      callback: function callback($$v) {
        _vm.$set(_vm.core_settings, "social_youtube", $$v);
      },
      expression: "core_settings.social_youtube"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-4 mb-4"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("h4", [_c("vs-icon", {
    staticClass: "text-2xl",
    attrs: {
      icon: "public"
    }
  }), _vm._v("SEO")], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mt-3"
  }, [_c("vs-input", {
    staticClass: "w-full",
    attrs: {
      label: "Meta Title",
      name: "meta_title"
    },
    model: {
      value: _vm.core_settings.meta_title,
      callback: function callback($$v) {
        _vm.$set(_vm.core_settings, "meta_title", $$v);
      },
      expression: "core_settings.meta_title"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full"
  }, [_c("vs-input", {
    staticClass: "w-full",
    attrs: {
      label: "Meta Keywords",
      name: "meta_keywords"
    },
    model: {
      value: _vm.core_settings.meta_keywords,
      callback: function callback($$v) {
        _vm.$set(_vm.core_settings, "meta_keywords", $$v);
      },
      expression: "core_settings.meta_keywords"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mt-2"
  }, [_c("vs-input", {
    staticClass: "w-full",
    attrs: {
      label: "Meta Description",
      name: "meta_description"
    },
    model: {
      value: _vm.core_settings.meta_description,
      callback: function callback($$v) {
        _vm.$set(_vm.core_settings, "meta_description", $$v);
      },
      expression: "core_settings.meta_description"
    }
  })], 1)]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "success",
      type: "filled"
    },
    on: {
      click: _vm.saveCoreSettings
    }
  }, [_vm._v("Success")])], 1)], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


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

/***/ "./packages/core/resources/js/src/views/pages/settings/Settings.vue":
/*!**************************************************************************!*\
  !*** ./packages/core/resources/js/src/views/pages/settings/Settings.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_9ec84850___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=9ec84850& */ "./packages/core/resources/js/src/views/pages/settings/Settings.vue?vue&type=template&id=9ec84850&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/views/pages/settings/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_9ec84850___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_9ec84850___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/views/pages/settings/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/views/pages/settings/Settings.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/views/pages/settings/Settings.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/views/pages/settings/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/views/pages/settings/Settings.vue?vue&type=template&id=9ec84850&":
/*!*********************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/views/pages/settings/Settings.vue?vue&type=template&id=9ec84850& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_9ec84850___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=9ec84850& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/views/pages/settings/Settings.vue?vue&type=template&id=9ec84850&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_9ec84850___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_9ec84850___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ })

}]);