(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    placeholder: {
      type: String,
      "default": 'Search..'
    },
    data: {
      type: Object,
      required: true
    },
    initalData: {
      type: Object,
      "default": function _default() {
        return new Object();
      }
    },
    inputClassses: {
      type: [String, Object, Array]
    },
    autoFocus: {
      type: Boolean,
      "default": false
    },
    showPinned: {
      type: Boolean,
      "default": false
    },
    searchLimit: {
      type: Number,
      "default": 4
    },
    hideGroupTitle: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      searchQuery: '',
      filteredData: {},
      currentSelected: -1,
      inputFocused: false,
      insideSuggestions: false
    };
  },
  watch: {
    // UPDATE SUGGESTIONS LIST
    searchQuery: function searchQuery(val) {
      var _this = this;

      this.$emit('input', val);

      if (val == '') {
        this.inputInit();
      } else {
        var queried_data = {};
        var data_grps = Object.keys(this.data);
        data_grps.forEach(function (grp, i) {
          queried_data[data_grps[i]] = _this.filter_grp(_this.data[grp]);
        }); // Check if any of group has at least one queried item

        if (!Object.values(queried_data).some(function (obj) {
          return obj.length;
        })) {
          this.currentSelected = -1;
        }

        this.filteredData = queried_data;
      }
    },
    autoFocus: function autoFocus(val) {
      if (val) this.focusInput();else this.searchQuery = '';
    },
    filteredData: function filteredData(val) {
      // Auto Select first item if it's not item-404
      var grp_index = null;

      var _iterator = _createForOfIteratorHelper(Object.values(val).entries()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              index = _step$value[0],
              grp_suggestions = _step$value[1];

          if (grp_suggestions.length) {
            grp_index = index;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (grp_index != null) this.currentSelected = grp_index + ".0";
    }
  },
  methods: {
    escPressed: function escPressed() {
      this.$emit('closeSearchbar');
      this.searchQuery = '';
    },
    filter_grp: function filter_grp(grp) {
      var _this2 = this;

      var exactEle = grp.data.filter(function (item) {
        return item[grp.key].toLowerCase().startsWith(_this2.searchQuery.toLowerCase());
      });
      var containEle = grp.data.filter(function (item) {
        return !item[grp.key].toLowerCase().startsWith(_this2.searchQuery.toLowerCase()) && item[grp.key].toLowerCase().indexOf(_this2.searchQuery.toLowerCase()) > -1;
      });
      return exactEle.concat(containEle).slice(0, this.searchLimit);
    },
    inputInit: function inputInit() {
      if (Object.entries(this.initalData).length === 0 && this.initalData.constructor === Object) {
        this.filteredData = {};
      } else {
        this.filteredData = this.initalData;
      }
    },
    updateInputFocus: function updateInputFocus() {
      var _this3 = this;

      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (val) {
        if (this.searchQuery == '') this.inputInit();
        setTimeout(function () {
          _this3.inputFocused = true;
        }, 100);
      } else {
        if (this.insideSuggestions) return;
        setTimeout(function () {
          _this3.inputFocused = false;
        }, 100);
        this.escPressed();
      }
    },
    suggestionSelected: function suggestionSelected() {
      if (this.currentSelected > -1) {
        var _this$currentSelected = this.currentSelected.split("."),
            _this$currentSelected2 = _slicedToArray(_this$currentSelected, 2),
            grp_index = _this$currentSelected2[0],
            item_index = _this$currentSelected2[1];

        var grp_of_selected_item = Object.keys(this.data)[grp_index];
        var selected_item = this.filteredData[grp_of_selected_item][item_index];
        this.$emit('selected', _defineProperty({}, grp_of_selected_item, selected_item));
        this.searchQuery = '';
      }
    },
    increaseIndex: function increaseIndex() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      // If there's no matching items
      if (!Object.values(this.filteredData).some(function (grp_items) {
        return grp_items.length;
      })) return;

      var _this$currentSelected3 = this.currentSelected.split("."),
          _this$currentSelected4 = _slicedToArray(_this$currentSelected3, 2),
          grp_i = _this$currentSelected4[0],
          item_i = _this$currentSelected4[1];

      var grp_arr = Object.entries(this.filteredData);
      var active_grp_total_items = grp_arr[grp_i][1].length;

      if (val) {
        // If active item is not of last item in grp
        if (active_grp_total_items - 1 > item_i) {
          this.currentSelected = grp_i + "." + (Number(item_i) + 1); // If active item grp is not last in grp list
        } else if (grp_i < grp_arr.length - 1) {
          for (var i = Number(grp_i) + 1; i < grp_arr.length; i++) {
            // If navigating group have items => Then move in that group
            if (grp_arr[i][1].length > 0) {
              this.currentSelected = Number(i) + ".0";
              break;
            }
          }
        }
      } else {
        // If active item is not of first item in grp
        if (Number(item_i)) {
          this.currentSelected = grp_i + "." + (Number(item_i) - 1); // If active item grp  is not first in grp list
        } else if (Number(grp_i)) {
          for (var _i2 = Number(grp_i) - 1; _i2 >= 0; _i2--) {
            // If navigating group have items => Then move in that group
            if (grp_arr[_i2][1].length > 0) {
              this.currentSelected = _i2 + "." + (grp_arr[_i2][1].length - 1);
              break;
            }
          }
        }
      }
    },
    focusInput: function focusInput() {
      this.$refs.input.$el.querySelector('input').focus();
    }
  },
  mounted: function mounted() {
    if (this.autoFocus) this.focusInput();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/Logo.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/Logo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    logo: function logo() {
      return _.get(this.$store, 'state.settings.dashboard_settings.core.logo', '');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "the-footer",
  props: {
    classes: {
      type: String
    }
  },
  inject: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    footerType: {
      type: String,
      required: true
    },
    hideScrollToTop: {
      type: Boolean,
      required: true
    },
    navbarType: {
      type: String,
      required: true
    },
    navbarColor: {
      type: String,
      required: true,
      "default": "#fff"
    },
    routerTransition: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      active: false,
      customPrimaryColor: '#3DC9B3',
      customNavbarColor: '#3DC9B3',
      routerTransitionsList: [{
        text: 'Zoom Fade',
        value: 'zoom-fade'
      }, {
        text: 'Slide Fade',
        value: 'slide-fade'
      }, {
        text: 'Fade Bottom',
        value: 'fade-bottom'
      }, {
        text: 'Fade',
        value: 'fade'
      }, {
        text: 'Zoom Out',
        value: 'zoom-out'
      }, {
        text: 'None',
        value: 'none'
      }],
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: .60
      },
      themeColors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E']
    };
  },
  watch: {
    layoutType: function layoutType(val) {
      // Reset unsupported options
      if (val === "horizontal") {
        this.themeMode === "semi-dark" ? this.themeMode = "light" : null;
        this.navbarType === "hidden" ? this.navbarTypeLocal = "floating" : null;
        this.$emit('updateNavbarColor', "#fff");
      }
    }
  },
  computed: {
    footerTypeLocal: {
      get: function get() {
        return this.footerType;
      },
      set: function set(val) {
        this.$emit('updateFooter', val);
      }
    },
    hideScrollToTopLocal: {
      get: function get() {
        return this.hideScrollToTop;
      },
      set: function set(val) {
        this.$emit('toggleHideScrollToTop', val);
      }
    },
    navbarColorInitial: function navbarColorInitial() {
      return this.$store.state.theme === 'dark' ? '#10163a' : '#fff';
    },
    navbarColorOptionClasses: function navbarColorOptionClasses() {
      var _this = this;

      return function (color) {
        var classes = {};
        if (color == _this.navbarColorLocal) classes['shadow-outline'] = true;
        if (_this.navbarTypeLocal == 'static') classes['cursor-not-allowed'] = true;
        return classes;
      };
    },
    navbarColorLocal: {
      get: function get() {
        return this.navbarColor;
      },
      set: function set(val) {
        if (this.navbarType == 'static') return;
        this.$emit('updateNavbarColor', val);
      }
    },
    navbarTypeLocal: {
      get: function get() {
        return this.navbarType;
      },
      set: function set(val) {
        this.$emit('updateNavbar', val);
      }
    },
    layoutType: {
      get: function get() {
        return this.$store.state.mainLayoutType;
      },
      set: function set(val) {
        this.$store.commit("UPDATE_MAIN_LAYOUT_TYPE", val);
      }
    },
    primaryColor: {
      get: function get() {
        return this.$store.state.themePrimaryColor;
      },
      set: function set(val) {
        this.$store.commit('UPDATE_PRIMARY_COLOR', val);
      }
    },
    reduced_sidebar: {
      get: function get() {
        return this.$store.state.reduceButton;
      },
      set: function set(val) {
        this.$store.commit('TOGGLE_REDUCE_BUTTON', val);
      }
    },
    routerTransitionLocal: {
      get: function get() {
        return this.routerTransition;
      },
      set: function set(val) {
        this.$emit('updateRouterTransition', val);
      }
    },
    rtl: {
      get: function get() {
        return this.$vs.rtl;
      },
      set: function set(val) {
        this.$vs.rtl = val;
      }
    },
    themeMode: {
      get: function get() {
        return this.$store.state.theme;
      },
      set: function set(val) {
        this.$store.dispatch('updateTheme', val);
      }
    },
    scrollbarTag: function scrollbarTag() {
      return this.$store.state.is_touch_device ? 'div' : 'VuePerfectScrollbar';
    },
    windowWidth: function windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  methods: {
    updatePrimaryColor: function updatePrimaryColor(color) {
      this.primaryColor = color;
      this.$vs.theme({
        primary: color
      });
    }
  },
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNavMenuGroup.vue */ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue");
/* harmony import */ var _HorizontalNavMenuHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalNavMenuHeader.vue */ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue");
/* harmony import */ var _HorizontalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HorizontalNavMenuItem.vue */ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    // navbarColor  : { type: String, default: "#fff", },
    navMenuItems: {
      type: Array,
      required: true
    }
  },
  components: {
    HNavMenuGroup: _HorizontalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    HNavMenuHeader: _HorizontalNavMenuHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    HNavMenuItem: _HorizontalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    navbarColor: function navbarColor() {
      return this.$store.state.theme === "dark" ? "#10163a" : "#fff";
    }
  },
  methods: {
    checkGrpChildrenActive: function checkGrpChildrenActive(group) {
      var _this = this;

      var path = this.$route.fullPath;
      var active = false;
      var routeParent = this.$route.meta ? this.$route.meta.parent : undefined;

      if (group.submenu) {
        group.submenu.forEach(function (item) {
          if (active) return true;

          if ((path == item.url || routeParent == item.slug) && item.url) {
            active = true;
          } else if (item.submenu) {
            _this.checkGrpChildrenActive(item);
          }
        });
      }

      return active;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNavMenuItem.vue */ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue");
// import VNavMenuItem from './VerticalNavMenuItem.vue'

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'h-nav-menu-group',
  props: {
    openHover: {
      type: Boolean,
      "default": true
    },
    open: {
      type: Boolean,
      "default": false
    },
    group: {
      type: Object
    },
    groupIndex: {
      type: Number
    },
    bottom: {
      type: Boolean,
      "default": false
    }
  },
  components: {
    HNavMenuItem: _HorizontalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      openItems: false,
      hovered: false,
      dropLeft: false
    };
  },
  computed: {
    iconClasses: function iconClasses() {
      var classes = "mr-3 ";
      classes += this.groupIndex % 1 != 0 ? 'w-3 h-3' : 'w-5 h-5';
      return classes;
    },
    styleItems: function styleItems() {
      var style = {};

      if (this.bottom) {
        style.top = "100%";
        style.left = "0";
      } else {
        style.top = "12px";
        style.left = "100%";
      }

      if (this.dropLeft) {
        style.left = null;
        style.right = "100%";
      }

      if (this.$vs.rtl) {
        var temp = style.left;
        style.left = style.right;
        style.right = temp;
      }

      return style;
    },
    itemIcon: function itemIcon() {
      // return (index) => {
      //   // if (!((index.match(/\./g) || []).length > 1)) return "CircleIcon"
      // }
      return "CircleIcon";
    },
    isGroupActive: function isGroupActive() {
      var _this = this;

      return function (item) {
        var path = _this.$route.fullPath;
        var open = false;
        var routeParent = _this.$route.meta ? _this.$route.meta.parent : undefined;

        var func = function func(item) {
          if (item.submenu) {
            item.submenu.forEach(function (item) {
              if ((path == item.url || routeParent == item.slug) && item.url) {
                open = true;
              } else if (item.submenu) {
                func(item);
              }
            });
          }
        };

        func(item);
        return open;
      };
    }
  },
  watch: {
    hovered: function hovered(val) {
      var _this2 = this;

      this.$nextTick(function () {
        if (val) {
          var dd = _this2.$refs.childDropdown;

          if (window.innerHeight - dd.getBoundingClientRect().top - dd.getBoundingClientRect().height - 28 < 1) {
            var maxHeight = window.innerHeight - dd.getBoundingClientRect().top - 70;
            dd.style.maxHeight = "".concat(maxHeight, "px");
            dd.style.overflowY = "auto";
            dd.style.overflowX = "hidden";
          }

          if (dd.getBoundingClientRect().left + dd.offsetWidth - (window.innerWidth - 16) >= 0 || _this2.$parent.dropLeft) {
            _this2.dropLeft = true;
          }

          if (_this2.$vs.rtl) {
            if (dd.getBoundingClientRect().right - dd.offsetWidth - 16 < 0) {
              _this2.dropLeft = true;
            }
          }
        } else {
          _this2.dropLeft = false;
        }
      });
    }
  },
  methods: {
    mouseover: function mouseover() {
      this.hovered = true;

      if (this.openHover) {
        this.showChildren();
      }
    },
    mouseout: function mouseout() {
      this.hovered = false;

      if (this.openHover) {
        this.showChildren(false);
      }
    },
    showChildren: function showChildren() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.openItems = val;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNavMenuGroup.vue */ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue");
/* harmony import */ var _HorizontalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalNavMenuItem.vue */ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    header: {
      type: Object,
      requried: true
    },
    openOnHover: {
      type: Boolean,
      "default": true
    }
  },
  components: {
    HNavMenuGroup: _HorizontalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    HNavMenuItem: _HorizontalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      showChildren: false,
      isHovered: false,
      dropRight: false
    };
  },
  computed: {
    isHeaderActive: function isHeaderActive() {
      var _this = this;

      var path = this.$route.fullPath;
      var active = false;
      var routeParent = this.$route.meta ? this.$route.meta.parent : undefined;
      this.header.items.forEach(function (item) {
        // If item is group
        if (item.submenu) {
          if (_this.checkGrpChildrenActive(item)) {
            active = true;
          }
        } else if (item.url) {
          if (path == item.url || routeParent == item.slug) {
            active = true;
          }
        }
      });
      return active;
    }
  },
  watch: {
    showChildren: function showChildren() {
      var _this2 = this;

      this.$nextTick(function () {
        if (_this2.showChildren) {
          var dd = _this2.$refs.headerDropdown;

          if (dd.getBoundingClientRect().left + dd.offsetWidth - (window.innerWidth - 16) >= 0) {
            _this2.dropRight = true;
          }
        }
      });
    }
  },
  methods: {
    checkGrpChildrenActive: function checkGrpChildrenActive(group) {
      var _this3 = this;

      var path = this.$route.fullPath;
      var active = false;
      var routeParent = this.$route.meta ? this.$route.meta.parent : undefined;

      if (group.submenu) {
        group.submenu.forEach(function (item) {
          if ((path == item.url || routeParent == item.slug) && item.slug) {
            active = true;
          } else if (item.submenu) {
            _this3.checkGrpChildrenActive(item) ? active = true : null;
          }
        });
      }

      return active;
    },
    hovered: function hovered() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.isHovered = val;

      if (this.openOnHover) {
        val ? this.showChildren = true : this.showChildren = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-nav-menu-item',
  props: {
    icon: {
      type: String,
      "default": ""
    },
    iconSmall: {
      type: Boolean,
      "default": false
    },
    iconPack: {
      type: String,
      "default": 'material-icons'
    },
    href: {
      type: [String, null],
      "default": '#'
    },
    to: {
      type: [String, Object, null],
      "default": null
    },
    slug: {
      type: String,
      "default": null
    },
    index: {
      type: [String, Number],
      "default": null
    },
    featherIcon: {
      type: Boolean,
      "default": true
    },
    target: {
      type: String,
      "default": '_self'
    },
    isDisabled: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    iconClasses: function iconClasses() {
      return this.iconSmall ? 'w-3 h-3 mr-3' : 'w-5 h-5 mr-3';
    },
    canSee: function canSee() {
      this.$acl.check(this.$store.state.AppActiveUser.userRole);
      return this.to ? this.$acl.check(this.$router.match(this.to).meta.rule) : true;
    },
    activeLink: function activeLink() {
      return this.to == this.$route.path || this.$route.meta.parent == this.slug && this.to ? true : false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_SearchBar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/SearchBar.vue */ "./packages/core/resources/js/src/layouts/components/navbar/components/SearchBar.vue");
/* harmony import */ var _components_NotificationDropDown_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/NotificationDropDown.vue */ "./packages/core/resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue");
/* harmony import */ var _components_ProfileDropDown_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ProfileDropDown.vue */ "./packages/core/resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue");
/* harmony import */ var _Logo_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Logo.vue */ "./packages/core/resources/js/src/layouts/components/Logo.vue");




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "the-navbar-horizontal",
  props: {
    logo: {
      type: String
    },
    navbarType: {
      type: String,
      required: true
    }
  },
  components: {
    Logo: _Logo_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SearchBar: _components_SearchBar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    NotificationDropDown: _components_NotificationDropDown_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProfileDropDown: _components_ProfileDropDown_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    navbarColor: function navbarColor() {
      var color = "#fff";
      if (this.navbarType === "sticky") color = "#f7f7f7";else if (this.navbarType === 'static') {
        if (this.scrollY < 50) {
          color = "#f7f7f7";
        }
      }
      this.isThemedark === "dark" ? color === "#fff" ? color = "#10163a" : color = "#262c49" : null;
      return color;
    },
    isThemedark: function isThemedark() {
      return this.$store.state.theme;
    },
    navbarStyle: function navbarStyle() {
      return this.navbarType === "static" ? {
        transition: "all .25s ease-in-out"
      } : {};
    },
    navbarClasses: function navbarClasses() {
      return this.scrollY > 5 && this.navbarType === "static" ? null : "d-theme-dark-light-bg shadow-none";
    },
    scrollY: function scrollY() {
      return this.$store.state.scrollY;
    },
    verticalNavMenuWidth: function verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth;
    },
    windowWidth: function windowWidth() {
      return this.$store.state.windowWidth;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_SearchBar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/SearchBar.vue */ "./packages/core/resources/js/src/layouts/components/navbar/components/SearchBar.vue");
/* harmony import */ var _components_NotificationDropDown_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/NotificationDropDown.vue */ "./packages/core/resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue");
/* harmony import */ var _components_ProfileDropDown_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ProfileDropDown.vue */ "./packages/core/resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils.js */ "./packages/core/resources/js/src/utils.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "the-navbar-vertical",
  props: {
    navbarColor: {
      type: String,
      "default": "#fff"
    }
  },
  components: {
    SearchBar: _components_SearchBar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    NotificationDropDown: _components_NotificationDropDown_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProfileDropDown: _components_ProfileDropDown_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    navbarColorLocal: function navbarColorLocal() {
      return this.$store.state.theme === "dark" && this.navbarColor === "#fff" ? "#10163a" : this.navbarColor;
    },
    verticalNavMenuWidth: function verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth;
    },
    textColor: function textColor() {
      return {
        "text-white": this.navbarColor != "#10163a" && this.$store.state.theme === "dark" || this.navbarColor != "#fff" && this.$store.state.theme !== "dark"
      };
    },
    windowWidth: function windowWidth() {
      return this.$store.state.windowWidth;
    },
    // NAVBAR STYLE
    classObj: function classObj() {
      if (this.verticalNavMenuWidth == "default") return "navbar-default";else if (this.verticalNavMenuWidth == "reduced") return "navbar-reduced";else if (this.verticalNavMenuWidth) return "navbar-full";
    },
    currentTheme: function currentTheme() {
      return this.$store.state.theme;
    }
  },
  methods: {
    showSidebar: function showSidebar() {
      this.$store.commit("TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE", true);
    },
    toggleTheme: function toggleTheme() {
      var theme = this.$store.state.theme === "light" ? "dark" : "light";
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["setCookie"])('theme', theme, 1000);
      this.$store.dispatch("updateTheme", theme);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      unreadNotifications: 0,
      notifications: [],
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.6
      }
    };
  },
  computed: {
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    }
  },
  mounted: function mounted() {
    this.fetchNotifications();
  },
  methods: {
    fetchNotifications: function fetchNotifications() {
      var _this = this;

      try {
        this.$http.get("/api/dashboard/notifications?guard=" + this.$store.state.AppActiveUser.userRole).then(function (response) {
          _this.unreadNotifications = response.data.unread_notifications;
          _this.notifications = response.data.notifications;
        });
      } catch (error) {}
    },
    markNotificationAsRead: function markNotificationAsRead() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                try {
                  _this2.$http.post("/api/dashboard/notifications/mark-as-read?guard=" + _this2.$store.state.AppActiveUser.userRole).then(function (response) {
                    _this2.unreadNotifications = 0;
                  });
                } catch (error) {}

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    notificationClicked: function notificationClicked(url) {
      if (url) {
        this.$router.push(url);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  },
  methods: {
    logout: function logout() {
      var userRole = this.$store.state.AppActiveUser.userRole;
      var path = "/".concat(userRole, "/login"); // If JWT login

      this.$acl.change("admin");
      localStorage.removeItem("userInfo");
      localStorage.removeItem("accessToken");
      this.$router.push({
        path: path
      })["catch"](function () {});
    },
    goToProfile: function goToProfile() {
      var role = this.$store.state.AppActiveUser.userRole;
      var url = "/".concat(role, "/profile");
      this.$router.push({
        path: url
      })["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_vx_auto_suggest_VxAutoSuggest_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/vx-auto-suggest/VxAutoSuggest.vue */ "./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VxAutoSuggest: _components_vx_auto_suggest_VxAutoSuggest_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      showFullSearch: false
    };
  },
  methods: {
    selected: function selected(item) {
      item.pages ? this.$router.push(item.pages.url)["catch"](function () {}) : null;
      this.showFullSearch = false;
    },
    hnd_search_query_update: function hnd_search_query_update(query) {
      // Show overlay if any character is entered
      this.$store.commit('TOGGLE_CONTENT_OVERLAY', query ? true : false);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VerticalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenuGroup.vue */ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue");
/* harmony import */ var _VerticalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerticalNavMenuItem.vue */ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue");
/* harmony import */ var _Logo_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Logo.vue */ "./packages/core/resources/js/src/layouts/components/Logo.vue");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-nav-menu',
  components: {
    VNavMenuGroup: _VerticalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    VNavMenuItem: _VerticalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a,
    Logo: _Logo_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    logo: {
      type: String
    },
    openGroupHover: {
      type: Boolean,
      "default": false
    },
    parent: {
      type: String
    },
    reduceNotRebound: {
      type: Boolean,
      "default": true
    },
    navMenuItems: {
      type: Array,
      required: true
    },
    title: {
      type: String
    }
  },
  data: function data() {
    return {
      clickNotClose: false,
      // disable close navMenu on outside click
      isMouseEnter: false,
      reduce: false,
      // determines if navMenu is reduce - component property
      showCloseButton: false,
      // show close button in smaller devices
      settings: {
        // perfectScrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 1,
        swipeEasing: true
      },
      showShadowBottom: false
    };
  },
  computed: {
    isGroupActive: function isGroupActive() {
      var _this = this;

      return function (item) {
        var path = _this.$route.fullPath;
        var routeParent = _this.$route.meta ? _this.$route.meta.parent : undefined;
        var open = false;

        var func = function func(item) {
          if (item.submenu) {
            item.submenu.forEach(function (item) {
              if (item.url && (path === item.url || routeParent === item.slug)) {
                open = true;
              } else if (item.submenu) {
                func(item);
              }
            });
          }
        };

        func(item);
        return open;
      };
    },
    menuItemsUpdated: function menuItemsUpdated() {
      var clone = this.navMenuItems.slice();

      var _iterator = _createForOfIteratorHelper(this.navMenuItems.entries()),
          _step;

      try {
        var _loop = function _loop() {
          var _step$value = _slicedToArray(_step.value, 2),
              index = _step$value[0],
              item = _step$value[1];

          if (item.header && item.items.length && (index || 1)) {
            var i = clone.findIndex(function (ix) {
              return ix.header === item.header;
            });

            var _iterator2 = _createForOfIteratorHelper(item.items.entries()),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _step2$value = _slicedToArray(_step2.value, 2),
                    subIndex = _step2$value[0],
                    subItem = _step2$value[1];

                clone.splice(i + 1 + subIndex, 0, subItem);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return clone;
    },
    isVerticalNavMenuActive: {
      get: function get() {
        return this.$store.state.isVerticalNavMenuActive;
      },
      set: function set(val) {
        this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', val);
      }
    },
    layoutType: function layoutType() {
      return this.$store.state.mainLayoutType;
    },
    reduceButton: {
      get: function get() {
        return this.$store.state.reduceButton;
      },
      set: function set(val) {
        this.$store.commit('TOGGLE_REDUCE_BUTTON', val);
      }
    },
    isVerticalNavMenuReduced: function isVerticalNavMenuReduced() {
      return Boolean(this.reduce && this.reduceButton);
    },
    verticalNavMenuItemsMin: function verticalNavMenuItemsMin() {
      return this.$store.state.verticalNavMenuItemsMin;
    },
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
    windowWidth: function windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  watch: {
    '$route': function $route() {
      if (this.isVerticalNavMenuActive && this.showCloseButton) this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false);
    },
    reduce: function reduce(val) {
      var verticalNavMenuWidth = val ? "reduced" : this.$store.state.windowWidth < 1200 ? "no-nav-menu" : "default";
      this.$store.dispatch('updateVerticalNavMenuWidth', verticalNavMenuWidth);
      setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
      }, 100);
    },
    layoutType: function layoutType() {
      this.setVerticalNavMenuWidth();
    },
    reduceButton: function reduceButton() {
      this.setVerticalNavMenuWidth();
    },
    windowWidth: function windowWidth() {
      this.setVerticalNavMenuWidth();
    }
  },
  methods: {
    onMenuSwipe: function onMenuSwipe(event) {
      // Swipe Right
      if (event.direction === 4 && this.$vs.rtl) {
        if (this.isVerticalNavMenuActive && this.showCloseButton) this.isVerticalNavMenuActive = false;
      } // Swipe Left
      else if (event.direction === 2 && !this.$vs.rtl) {
        if (this.isVerticalNavMenuActive && this.showCloseButton) this.isVerticalNavMenuActive = false;
      }
    },
    onSwipeAreaSwipe: function onSwipeAreaSwipe(event) {
      // Swipe Right
      if (event.direction === 4 && !this.$vs.rtl) {
        if (!this.isVerticalNavMenuActive && this.showCloseButton) this.isVerticalNavMenuActive = true;
      } // Swipe Left
      else if (event.direction === 2 && this.$vs.rtl) {
        if (!this.isVerticalNavMenuActive && this.showCloseButton) this.isVerticalNavMenuActive = true;
      }
    },
    psSectionScroll: function psSectionScroll() {
      var scroll_el = this.$refs.verticalNavMenuPs.$el || this.$refs.verticalNavMenuPs;
      this.showShadowBottom = scroll_el.scrollTop > 0 ? true : false;
    },
    mouseEnter: function mouseEnter() {
      if (this.reduce) this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', false);
      this.isMouseEnter = true;
    },
    mouseLeave: function mouseLeave() {
      if (this.reduce) this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', true);
      this.isMouseEnter = false;
    },
    setVerticalNavMenuWidth: function setVerticalNavMenuWidth() {
      if (this.windowWidth > 1200) {
        if (this.layoutType === 'vertical') {
          // Set reduce
          this.reduce = this.reduceButton ? true : false; // Open NavMenu

          this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true); // Set Menu Items Only Icon Mode

          var verticalNavMenuItemsMin = this.reduceButton && !this.isMouseEnter ? true : false;
          this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', verticalNavMenuItemsMin); // Menu Action buttons

          this.clickNotClose = true;
          this.showCloseButton = false;
          var verticalNavMenuWidth = this.isVerticalNavMenuReduced ? "reduced" : "default";
          this.$store.dispatch('updateVerticalNavMenuWidth', verticalNavMenuWidth);
          return;
        }
      } // Close NavMenu


      this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false); // Reduce button

      if (this.reduceButton) this.reduce = false; // Menu Action buttons

      this.showCloseButton = true;
      this.clickNotClose = false; // Update NavMenu Width

      this.$store.dispatch('updateVerticalNavMenuWidth', 'no-nav-menu'); // Remove Only Icon in Menu

      this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', false); // if(this.layoutType === 'vertical' || (this.layoutType === 'horizontal' && this.windowWidth < 1200))
      // if (this.windowWidth < 1200) {
      //   // Close NavMenu
      //   this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false)
      //   // Reduce button
      //   if (this.reduceButton) this.reduce = false
      //   // Menu Action buttons
      //   this.showCloseButton = true
      //   this.clickNotClose   = false
      //   // Update NavMenu Width
      //   this.$store.dispatch('updateVerticalNavMenuWidth', 'no-nav-menu')
      //   // Remove Only Icon in Menu
      //   this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', false)
      // } else {
      //   // Set reduce
      //   this.reduce = this.reduceButton ? true : false
      //   // Open NavMenu
      //   this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true)
      //   // Set Menu Items Only Icon Mode
      //   const verticalNavMenuItemsMin = (this.reduceButton && !this.isMouseEnter) ? true : false
      //   this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', verticalNavMenuItemsMin)
      //   // Menu Action buttons
      //   this.clickNotClose   = true
      //   this.showCloseButton = false
      //   const verticalNavMenuWidth   = this.isVerticalNavMenuReduced ? "reduced" : "default"
      //   this.$store.dispatch('updateVerticalNavMenuWidth', verticalNavMenuWidth)
      // }
    },
    toggleReduce: function toggleReduce(val) {
      this.reduceButton = val;
      this.setVerticalNavMenuWidth();
    }
  },
  mounted: function mounted() {
    this.setVerticalNavMenuWidth();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenuItem.vue */ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "v-nav-menu-group",
  props: {
    openHover: {
      type: Boolean,
      "default": false
    },
    open: {
      type: Boolean,
      "default": false
    },
    group: {
      type: Object
    },
    groupIndex: {
      type: Number
    }
  },
  components: {
    VNavMenuItem: _VerticalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      maxHeight: "0px",
      openItems: false,
      visible: true
    };
  },
  computed: {
    verticalNavMenuItemsMin: function verticalNavMenuItemsMin() {
      return this.$store.state.verticalNavMenuItemsMin;
    },
    styleItems: function styleItems() {
      return {
        maxHeight: this.maxHeight
      };
    },
    itemIcon: function itemIcon() {
      return function (index) {
        if (!((index.match(/\./g) || []).length > 1)) return "CircleIcon";
      };
    },
    isGroupActive: function isGroupActive() {
      var _this = this;

      return function (item) {
        var path = _this.$route.fullPath;
        var open = false;
        var routeParent = _this.$route.meta ? _this.$route.meta.parent : undefined;

        var func = function func(item) {
          if (item.submenu) {
            item.submenu.forEach(function (item) {
              if ((path == item.url || routeParent == item.slug) && item.url) {
                open = true;
              } else if (item.submenu) {
                func(item);
              }
            });
          }
        };

        func(item);
        return open;
      };
    }
  },
  watch: {
    // OPEN & CLOSES DROPDOWN ON ROUTE CHANGE
    $route: function $route() {
      var _this2 = this;

      if (this.verticalNavMenuItemsMin) return;
      var scrollHeight = this.scrollHeight; // Collapse Group

      if (this.openItems && !this.open) {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this2.maxHeight = "".concat(0, "px");
        }, 50); // Expand Group
      } else if (this.open) {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this2.maxHeight = "none";
        }, 300);
      }
    },
    maxHeight: function maxHeight() {
      this.openItems = this.maxHeight != "0px";
    },
    // OPEN AND CLOSES DROPDOWN MENU ON NavMenu COLLAPSE AND DEFAULT VIEW
    "$store.state.verticalNavMenuItemsMin": function $storeStateVerticalNavMenuItemsMin(val) {
      var _this3 = this;

      var scrollHeight = this.$refs.items.scrollHeight;

      if (!val && this.open) {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this3.maxHeight = "none";
        }, 300);
      } else {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this3.maxHeight = "0px";
        }, 50);
      }

      if (val && this.open) {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this3.maxHeight = "0px";
        }, 250);
      }
    }
  },
  methods: {
    clickGroup: function clickGroup() {
      var _this4 = this;

      if (!this.openHover) {
        var thisScrollHeight = this.$refs.items.scrollHeight;

        if (this.maxHeight == "0px") {
          this.maxHeight = "".concat(thisScrollHeight, "px");
          setTimeout(function () {
            _this4.maxHeight = "none";
          }, 300);
        } else {
          this.maxHeight = "".concat(thisScrollHeight, "px");
          setTimeout(function () {
            _this4.maxHeight = "".concat(0, "px");
          }, 50);
        }

        this.$parent.$children.map(function (child) {
          if (child.isGroupActive) {
            if (child !== _this4 && !child.open && child.maxHeight != "0px") {
              setTimeout(function () {
                child.maxHeight = "".concat(0, "px");
              }, 50);
            }
          }
        });
      }
    },
    mouseover: function mouseover() {
      if (this.openHover) {
        var scrollHeight = this.$refs.items.scrollHeight;
        this.maxHeight = "".concat(scrollHeight, "px");
      }
    },
    mouseout: function mouseout() {
      if (this.openHover) {
        var scrollHeight = 0;
        this.maxHeight = "".concat(scrollHeight, "px");
      }
    }
  },
  mounted: function mounted() {
    if (this.group.rule && this.group.rule !== this.$store.state.AppActiveUser.userRole) {
      this.visible = false;
    }

    this.openItems = this.open;

    if (this.open) {
      this.maxHeight = "none";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "v-nav-menu-item",
  props: {
    icon: {
      type: String,
      "default": ""
    },
    iconSmall: {
      type: Boolean,
      "default": false
    },
    iconPack: {
      type: String,
      "default": "material-icons"
    },
    href: {
      type: [String, null],
      "default": "#"
    },
    to: {
      type: [String, Object, null],
      "default": null
    },
    slug: {
      type: String,
      "default": null
    },
    index: {
      type: [String, Number],
      "default": null
    },
    featherIcon: {
      type: Boolean,
      "default": true
    },
    target: {
      type: String,
      "default": "_self"
    },
    isDisabled: {
      type: Boolean,
      "default": false
    },
    permission: {
      type: String,
      "default": null
    }
  },
  computed: {
    canSee: function canSee() {
      this.$acl.check(this.$store.state.AppActiveUser.userRole);
      return this.to ? this.$acl.check(this.$router.match(this.to).meta.rule) && this.checkPermission(this.permission) : false;
    },
    activeLink: function activeLink() {
      return this.to == this.$route.path || this.$route.meta.parent == this.slug && this.to ? true : false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_backtotop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-backtotop */ "./node_modules/vue-backtotop/src/main.js");
/* harmony import */ var _layouts_components_horizontal_nav_menu_HorizontalNavMenu_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue */ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue");
/* harmony import */ var _layouts_components_vertical_nav_menu_navMenuItems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts/components/vertical-nav-menu/navMenuItems.js */ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/navMenuItems.js");
/* harmony import */ var _layouts_components_customizer_TheCustomizer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/layouts/components/customizer/TheCustomizer.vue */ "./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue");
/* harmony import */ var _layouts_components_navbar_TheNavbarHorizontal_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/layouts/components/navbar/TheNavbarHorizontal.vue */ "./packages/core/resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue");
/* harmony import */ var _layouts_components_navbar_TheNavbarVertical_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/layouts/components/navbar/TheNavbarVertical.vue */ "./packages/core/resources/js/src/layouts/components/navbar/TheNavbarVertical.vue");
/* harmony import */ var _layouts_components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/layouts/components/TheFooter.vue */ "./packages/core/resources/js/src/layouts/components/TheFooter.vue");
/* harmony import */ var _themeConfig_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/../themeConfig.js */ "./packages/core/resources/js/themeConfig.js");
/* harmony import */ var _layouts_components_vertical_nav_menu_VerticalNavMenu_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/layouts/components/vertical-nav-menu/VerticalNavMenu.vue */ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);











var VxTour = function VxTour() {
  return __webpack_require__.e(/*! import() */ 40).then(__webpack_require__.bind(null, /*! @/components/VxTour.vue */ "./packages/core/resources/js/src/components/VxTour.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BackToTop: vue_backtotop__WEBPACK_IMPORTED_MODULE_0__["default"],
    HNavMenu: _layouts_components_horizontal_nav_menu_HorizontalNavMenu_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TheCustomizer: _layouts_components_customizer_TheCustomizer_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    TheFooter: _layouts_components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    TheNavbarHorizontal: _layouts_components_navbar_TheNavbarHorizontal_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    TheNavbarVertical: _layouts_components_navbar_TheNavbarVertical_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    VNavMenu: _layouts_components_vertical_nav_menu_VerticalNavMenu_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    VxTour: VxTour
  },
  data: function data() {
    return {
      disableCustomizer: _themeConfig_js__WEBPACK_IMPORTED_MODULE_7__["default"].disableCustomizer,
      disableThemeTour: _themeConfig_js__WEBPACK_IMPORTED_MODULE_7__["default"].disableThemeTour,
      dynamicWatchers: {},
      footerType: _themeConfig_js__WEBPACK_IMPORTED_MODULE_7__["default"].footerType || 'static',
      hideScrollToTop: _themeConfig_js__WEBPACK_IMPORTED_MODULE_7__["default"].hideScrollToTop,
      isNavbarDark: false,
      navbarColor: _themeConfig_js__WEBPACK_IMPORTED_MODULE_7__["default"].navbarColor || '#fff',
      navbarType: _themeConfig_js__WEBPACK_IMPORTED_MODULE_7__["default"].navbarType || 'floating',
      navMenuItems: _layouts_components_vertical_nav_menu_navMenuItems_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      routerTransition: _themeConfig_js__WEBPACK_IMPORTED_MODULE_7__["default"].routerTransition || 'none',
      routeTitle: this.$route.meta.pageTitle,
      steps: [{
        target: '#btnVNavMenuMinToggler',
        content: 'Toggle Collapse Sidebar.'
      }, {
        target: '.vx-navbar__starred-pages',
        content: 'Create your own bookmarks. You can also re-arrange them using drag & drop.'
      }, {
        target: '.i18n-locale',
        content: 'You can change language from here.'
      }, {
        target: '.navbar-fuzzy-search',
        content: 'Try fuzzy search to visit pages in flash.'
      }, {
        target: '.customizer-btn',
        content: 'Customize template based on your preference',
        params: {
          placement: 'left'
        }
      }, {
        target: '.vs-button.buy-now',
        content: 'Buy this awesomeness at affordable price!',
        params: {
          placement: 'top'
        }
      }]
    };
  },
  watch: {
    "$route": function $route() {
      this.routeTitle = this.$route.meta.pageTitle;
    },
    isThemeDark: function isThemeDark(val) {
      var color = this.navbarColor == "#fff" && val ? "#10163a" : "#fff";
      this.updateNavbarColor(color);
    },
    "$store.state.mainLayoutType": function $storeStateMainLayoutType(val) {
      this.setNavMenuVisibility(val);
      this.disableThemeTour = true;
    }
  },
  computed: {
    dash_title: function dash_title() {
      return lodash__WEBPACK_IMPORTED_MODULE_9___default.a.get(this.$store, 'state.settings.dashboard_settings.core.brand_name', 'JED-CMS');
    },
    bodyOverlay: function bodyOverlay() {
      return this.$store.state.bodyOverlay;
    },
    contentAreaClass: function contentAreaClass() {
      if (this.mainLayoutType === "vertical") {
        if (this.verticalNavMenuWidth == "default") return "content-area-reduced";else if (this.verticalNavMenuWidth == "reduced") return "content-area-lg";else return "content-area-full";
      } // else if(this.mainLayoutType === "boxed") return "content-area-reduced"
      else return "content-area-full";
    },
    footerClasses: function footerClasses() {
      return {
        'footer-hidden': this.footerType == 'hidden',
        'footer-sticky': this.footerType == 'sticky',
        'footer-static': this.footerType == 'static'
      };
    },
    isAppPage: function isAppPage() {
      return this.$route.meta.no_scroll;
    },
    isThemeDark: function isThemeDark() {
      return this.$store.state.theme == 'dark';
    },
    layoutTypeClass: function layoutTypeClass() {
      return "main-".concat(this.mainLayoutType);
    },
    mainLayoutType: function mainLayoutType() {
      return this.$store.state.mainLayoutType;
    },
    navbarClasses: function navbarClasses() {
      return {
        'navbar-hidden': this.navbarType == 'hidden',
        'navbar-sticky': this.navbarType == 'sticky',
        'navbar-static': this.navbarType == 'static',
        'navbar-floating': this.navbarType == 'floating'
      };
    },
    verticalNavMenuWidth: function verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth;
    },
    windowWidth: function windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  methods: {
    changeRouteTitle: function changeRouteTitle(title) {
      this.routeTitle = title;
    },
    updateNavbar: function updateNavbar(val) {
      if (val == "static") this.updateNavbarColor(this.isThemeDark ? "#10163a" : "#fff");
      this.navbarType = val;
    },
    updateNavbarColor: function updateNavbarColor(val) {
      this.navbarColor = val;
      if (val == "#fff") this.isNavbarDark = false;else this.isNavbarDark = true;
    },
    updateFooter: function updateFooter(val) {
      this.footerType = val;
    },
    updateRouterTransition: function updateRouterTransition(val) {
      this.routerTransition = val;
    },
    setNavMenuVisibility: function setNavMenuVisibility(layoutType) {
      if (layoutType === 'horizontal' && this.windowWidth >= 1200 || layoutType === "vertical" && this.windowWidth < 1200) {
        this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false);
        this.$store.dispatch('updateVerticalNavMenuWidth', 'no-nav-menu');
      } else {
        this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true);
      }
    },
    toggleHideScrollToTop: function toggleHideScrollToTop(val) {
      this.hideScrollToTop = val;
    }
  },
  created: function created() {
    var _this = this;

    var color = this.navbarColor == "#fff" && this.isThemeDark ? "#10163a" : this.navbarColor;
    this.updateNavbarColor(color);
    this.setNavMenuVisibility(this.$store.state.mainLayoutType); // Dynamic Watchers for tour
    // Reason: Once tour is disabled it is not required to enable it.
    // So, watcher is required for just disabling it.

    this.dynamicWatchers.windowWidth = this.$watch("$store.state.windowWidth", function (val) {
      if (val < 1200) {
        _this.disableThemeTour = true;

        _this.dynamicWatchers.windowWidth();
      }
    });
    this.dynamicWatchers.verticalNavMenuWidth = this.$watch("$store.state.verticalNavMenuWidth", function () {
      _this.disableThemeTour = true;

      _this.dynamicWatchers.verticalNavMenuWidth();
    });
    this.dynamicWatchers.rtl = this.$watch("$vs.rtl", function () {
      _this.disableThemeTour = true;

      _this.dynamicWatchers.rtl();
    });
  },
  beforeDestroy: function beforeDestroy() {
    var _this2 = this;

    Object.keys(this.dynamicWatchers).map(function (i) {
      _this2.dynamicWatchers[i]();

      delete _this2.dynamicWatchers[i];
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=78680e97&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=78680e97& ***!
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
    staticClass: "vx-auto-suggest"
  }, [_c("div", {
    staticClass: "flex items-center relative"
  }, [_c("vs-input", {
    ref: "input",
    staticClass: "z-50",
    "class": _vm.inputClassses,
    attrs: {
      placeholder: _vm.placeholder,
      "icon-pack": "feather",
      icon: "icon-search",
      "icon-no-border": ""
    },
    on: {
      keyup: [function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) return null;
        return _vm.escPressed.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) return null;
        return _vm.increaseIndex(false);
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) return null;
        return _vm.increaseIndex.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.suggestionSelected.apply(null, arguments);
      }],
      focus: _vm.updateInputFocus,
      blur: function blur($event) {
        return _vm.updateInputFocus(false);
      }
    },
    model: {
      value: _vm.searchQuery,
      callback: function callback($$v) {
        _vm.searchQuery = $$v;
      },
      expression: "searchQuery"
    }
  })], 1), _vm._v(" "), _c("ul", {
    ref: "scrollContainer",
    staticClass: "auto-suggest-suggestions-list z-50 rounded-lg mt-2 shadow-lg overflow-x-hidden",
    "class": {
      hidden: !_vm.inputFocused
    },
    attrs: {
      tabindex: "-1"
    },
    on: {
      mouseenter: function mouseenter($event) {
        _vm.insideSuggestions = true;
      },
      mouseleave: function mouseleave($event) {
        _vm.insideSuggestions = false;
      },
      focus: _vm.updateInputFocus,
      blur: function blur($event) {
        return _vm.updateInputFocus(false);
      }
    }
  }, _vm._l(_vm.filteredData, function (suggestion_list, grp_name, grp_index) {
    return _c("li", {
      key: grp_index,
      ref: "grp_list",
      refInFor: true,
      staticClass: "auto-suggest__suggestion-group-container"
    }, [!_vm.hideGroupTitle ? _c("p", {
      staticClass: "auto-suggest__suggestion-group-title pt-3 pb-1 px-4"
    }, [_vm._t("group", null, {
      group_name: grp_name
    })], 2) : _vm._e(), _vm._v(" "), _c("ul", [_vm._l(suggestion_list, function (suggestion, index) {
      return _c("li", {
        key: index,
        staticClass: "auto-suggest__suggestion-group__suggestion py-3 px-4 cursor-pointer",
        "class": {
          "vx-auto-suggest__current-selected": _vm.currentSelected == "".concat(grp_index, ".").concat(index)
        },
        on: {
          mouseenter: function mouseenter($event) {
            _vm.currentSelected = "".concat(grp_index, ".").concat(index);
          },
          click: _vm.suggestionSelected
        }
      }, [_vm._t(grp_name, null, {
        suggestion: suggestion
      })], 2);
    }), _vm._v(" "), !suggestion_list.length && _vm.searchQuery ? _c("li", {
      staticClass: "auto-suggest__suggestion-group__suggestion py-3 px-4 no-results"
    }, [_vm._t("noResult", function () {
      return [_c("p", [_vm._v("No Results Found.")])];
    }, {
      group_name: grp_name
    })], 2) : _vm._e()], 2)]);
  }), 0)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/Logo.vue?vue&type=template&id=52d0cf33&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/Logo.vue?vue&type=template&id=52d0cf33& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("img", {
    attrs: {
      src: _vm.logo,
      alt: ""
    }
  });
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=15bec794&functional=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=15bec794&functional=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render(_c, _vm) {
  return _c("footer", {
    staticClass: "the-footer flex-wrap justify-between",
    "class": _vm.classes
  }, [_c("p", [_c("span", [_vm._v("COPYRIGHT ©")]), _vm._v(" "), _c("span", [_vm._v(_vm._s(new Date().getFullYear()))]), _vm._v(" "), _c("a", {
    attrs: {
      href: "#",
      target: "_blank",
      rel: "nofollow"
    }
  }, [_vm._v("JWN - CMS")]), _vm._v(" "), _c("span", {
    staticClass: "hidden sm:inline-block"
  }, [_vm._v(", All rights Reserved")])]), _vm._v(" "), _c("span", {
    staticClass: "md:flex hidden items-center"
  }, [_c("span", [_vm._v("Hand-crafted & Made with")]), _vm._v(" "), _c("feather-icon", {
    staticClass: "ml-2 mr-2",
    attrs: {
      icon: "HeartIcon",
      svgClasses: "stroke-current text-danger w-6 h-6"
    }
  }), _vm._v(" "), _vm._m(0)], 1)]);
};

var staticRenderFns = [function (_c, _vm) {
  return _c("span", [_vm._v(" by "), _c("a", {
    attrs: {
      href: "https://jeevandhakal.com.np",
      target: "_blank"
    }
  }, [_vm._v("Jeevan Dhakal")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=template&id=1285d5b0&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=template&id=1285d5b0& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    attrs: {
      id: "theme-customizer"
    }
  }, [_c("vs-button", {
    staticClass: "customizer-btn",
    attrs: {
      color: "primary",
      type: "filled",
      "icon-pack": "feather",
      icon: "icon-settings"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        _vm.active = !_vm.active;
      }
    }
  }), _vm._v(" "), _c("vs-sidebar", {
    staticClass: "items-no-padding",
    attrs: {
      "click-not-close": "",
      "hidden-background": "",
      "position-right": ""
    },
    model: {
      value: _vm.active,
      callback: function callback($$v) {
        _vm.active = $$v;
      },
      expression: "active"
    }
  }, [_c("div", {
    staticClass: "h-full"
  }, [_c("div", {
    staticClass: "customizer-header mt-6 flex items-center justify-between px-6"
  }, [_c("div", [_c("h4", [_vm._v("THEME CUSTOMIZER")]), _vm._v(" "), _c("small", [_vm._v("Customize & Preview in Real Time")])]), _vm._v(" "), _c("feather-icon", {
    staticClass: "cursor-pointer",
    attrs: {
      icon: "XIcon"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        _vm.active = false;
      }
    }
  })], 1), _vm._v(" "), _c("vs-divider", {
    staticClass: "mb-0"
  }), _vm._v(" "), _c(_vm.scrollbarTag, {
    key: _vm.$vs.rtl,
    tag: "component",
    staticClass: "scroll-area--customizer pt-4 pb-6",
    attrs: {
      settings: _vm.settings
    }
  }, [_c("div", {
    staticClass: "px-6"
  }, [_c("div", {
    staticClass: "mt-4"
  }, [_c("h5", {
    staticClass: "mb-2"
  }, [_vm._v("Layout Type")]), _vm._v(" "), _c("div", [_c("vs-radio", {
    staticClass: "mr-4",
    attrs: {
      "vs-value": "vertical",
      "vs-name": "layout-type-vertical"
    },
    model: {
      value: _vm.layoutType,
      callback: function callback($$v) {
        _vm.layoutType = $$v;
      },
      expression: "layoutType"
    }
  }, [_vm._v("Vertical")]), _vm._v(" "), _c("vs-radio", {
    staticClass: "mr-4",
    attrs: {
      "vs-value": "horizontal",
      "vs-name": "layout-type-horizontal"
    },
    model: {
      value: _vm.layoutType,
      callback: function callback($$v) {
        _vm.layoutType = $$v;
      },
      expression: "layoutType"
    }
  }, [_vm._v("Horizontal")])], 1)]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", [_c("h5", {
    staticClass: "mb-4"
  }, [_vm._v("Theme Color")]), _vm._v(" "), _c("ul", {
    staticClass: "clearfix"
  }, [_vm._l(_vm.themeColors, function (color) {
    return _c("li", {
      key: color,
      staticClass: "w-10 cursor-pointer h-10 rounded-lg m-2 float-left",
      "class": {
        "shadow-outline": color == _vm.primaryColor
      },
      style: {
        backgroundColor: color
      },
      on: {
        click: function click($event) {
          return _vm.updatePrimaryColor(color);
        }
      }
    });
  }), _vm._v(" "), _c("li", {
    staticClass: "w-10 cursor-pointer h-10 rounded-lg m-2 float-left",
    "class": {
      "shadow-outline": _vm.customPrimaryColor == _vm.primaryColor
    },
    style: {
      backgroundColor: _vm.customPrimaryColor
    },
    on: {
      click: function click($event) {
        return _vm.updatePrimaryColor(_vm.customPrimaryColor);
      }
    }
  }), _vm._v(" "), _c("li", {
    staticClass: "float-left"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.customPrimaryColor,
      expression: "customPrimaryColor"
    }],
    staticClass: "w-10 cursor-pointer h-10 rounded-lg m-2",
    attrs: {
      type: "color"
    },
    domProps: {
      value: _vm.customPrimaryColor
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.customPrimaryColor = $event.target.value;
      }
    }
  })])], 2)]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("h5", {
    staticClass: "mb-2"
  }, [_vm._v("Theme Mode")]), _vm._v(" "), _c("div", [_c("vs-radio", {
    staticClass: "mr-4",
    attrs: {
      "vs-value": "light",
      "vs-name": "theme-mode-light"
    },
    model: {
      value: _vm.themeMode,
      callback: function callback($$v) {
        _vm.themeMode = $$v;
      },
      expression: "themeMode"
    }
  }, [_vm._v("Light")]), _vm._v(" "), _c("vs-radio", {
    staticClass: "mr-4",
    attrs: {
      "vs-value": "dark",
      "vs-name": "theme-mode-dark"
    },
    model: {
      value: _vm.themeMode,
      callback: function callback($$v) {
        _vm.themeMode = $$v;
      },
      expression: "themeMode"
    }
  }, [_vm._v("Dark")]), _vm._v(" "), _vm.layoutType === "vertical" ? _c("vs-radio", {
    attrs: {
      "vs-value": "semi-dark",
      "vs-name": "theme-mode-semi-dark"
    },
    model: {
      value: _vm.themeMode,
      callback: function callback($$v) {
        _vm.themeMode = $$v;
      },
      expression: "themeMode"
    }
  }, [_vm._v("Semi Dark")]) : _vm._e()], 1)]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _vm.layoutType === "vertical" ? [_c("div", {
    staticClass: "mt-4 flex justify-between"
  }, [_c("h5", [_vm._v("Collapse Sidebar")]), _vm._v(" "), _c("vs-switch", {
    model: {
      value: _vm.reduced_sidebar,
      callback: function callback($$v) {
        _vm.reduced_sidebar = $$v;
      },
      expression: "reduced_sidebar"
    }
  })], 1), _vm._v(" "), _c("vs-divider")] : _vm._e(), _vm._v(" "), _vm.layoutType === "vertical" ? [_c("div", {
    staticClass: "mt-4"
  }, [_c("h5", [_vm._v("Navbar Color")]), _vm._v(" "), _c("ul", {
    staticClass: "clearfix"
  }, [_c("li", {
    staticClass: "w-10 m-2 h-10 rounded-lg float-left cursor-pointer border border-solid d-theme-border-grey-light",
    "class": _vm.navbarColorOptionClasses(_vm.navbarColorInitial),
    style: {
      background: _vm.navbarColorInitial
    },
    on: {
      click: function click($event) {
        _vm.navbarColorLocal = _vm.navbarColorInitial;
      }
    }
  }), _vm._v(" "), _vm._l(_vm.themeColors, function (color) {
    return _c("li", {
      key: color,
      staticClass: "w-10 cursor-pointer h-10 rounded-lg m-2 float-left",
      "class": _vm.navbarColorOptionClasses(color),
      style: {
        backgroundColor: color
      },
      on: {
        click: function click($event) {
          _vm.navbarColorLocal = color;
        }
      }
    });
  }), _vm._v(" "), _c("li", {
    staticClass: "w-10 cursor-pointer h-10 rounded-lg m-2 float-left",
    "class": _vm.navbarColorOptionClasses(_vm.navbarColorOptionClasses),
    style: {
      backgroundColor: _vm.customNavbarColor
    },
    on: {
      click: function click($event) {
        _vm.navbarColorLocal = _vm.customNavbarColor;
      }
    }
  }), _vm._v(" "), _c("li", {
    staticClass: "float-left"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.customNavbarColor,
      expression: "customNavbarColor"
    }],
    staticClass: "w-10 cursor-pointer h-10 rounded-lg m-2",
    attrs: {
      type: "color"
    },
    domProps: {
      value: _vm.customNavbarColor
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.customNavbarColor = $event.target.value;
      }
    }
  })])], 2)]), _vm._v(" "), _c("vs-divider")] : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("h5", {
    staticClass: "mb-2"
  }, [_vm._v(_vm._s(_vm.layoutType === "vertical" || _vm.windowWidth < 1200 ? "Navbar" : "Nav Menu") + " Type")]), _vm._v(" "), _c("div", [_vm.layoutType === "vertical" || _vm.windowWidth < 1200 ? _c("vs-radio", {
    staticClass: "mr-4",
    attrs: {
      "vs-value": "hidden",
      "vs-name": "navbar-type-hidden"
    },
    model: {
      value: _vm.navbarTypeLocal,
      callback: function callback($$v) {
        _vm.navbarTypeLocal = $$v;
      },
      expression: "navbarTypeLocal"
    }
  }, [_vm._v("Hidden")]) : _vm._e(), _vm._v(" "), _c("vs-radio", {
    staticClass: "mr-4",
    attrs: {
      "vs-value": "static",
      "vs-name": "navbar-type-static"
    },
    model: {
      value: _vm.navbarTypeLocal,
      callback: function callback($$v) {
        _vm.navbarTypeLocal = $$v;
      },
      expression: "navbarTypeLocal"
    }
  }, [_vm._v("Static")]), _vm._v(" "), _c("vs-radio", {
    staticClass: "mr-4",
    attrs: {
      "vs-value": "sticky",
      "vs-name": "navbar-type-sticky"
    },
    model: {
      value: _vm.navbarTypeLocal,
      callback: function callback($$v) {
        _vm.navbarTypeLocal = $$v;
      },
      expression: "navbarTypeLocal"
    }
  }, [_vm._v("Sticky")]), _vm._v(" "), _c("vs-radio", {
    attrs: {
      "vs-value": "floating",
      "vs-name": "navbar-type-floating"
    },
    model: {
      value: _vm.navbarTypeLocal,
      callback: function callback($$v) {
        _vm.navbarTypeLocal = $$v;
      },
      expression: "navbarTypeLocal"
    }
  }, [_vm._v("Floating")])], 1)]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("h5", {
    staticClass: "mb-2"
  }, [_vm._v("Footer Type")]), _vm._v(" "), _c("div", [_c("vs-radio", {
    staticClass: "mr-4",
    attrs: {
      "vs-value": "hidden",
      "vs-name": "footer-type-hidden"
    },
    model: {
      value: _vm.footerTypeLocal,
      callback: function callback($$v) {
        _vm.footerTypeLocal = $$v;
      },
      expression: "footerTypeLocal"
    }
  }, [_vm._v("Hidden")]), _vm._v(" "), _c("vs-radio", {
    staticClass: "mr-4",
    attrs: {
      "vs-value": "static",
      "vs-name": "footer-type-static"
    },
    model: {
      value: _vm.footerTypeLocal,
      callback: function callback($$v) {
        _vm.footerTypeLocal = $$v;
      },
      expression: "footerTypeLocal"
    }
  }, [_vm._v("Static")]), _vm._v(" "), _c("vs-radio", {
    attrs: {
      "vs-value": "sticky",
      "vs-name": "footer-type-sticky"
    },
    model: {
      value: _vm.footerTypeLocal,
      callback: function callback($$v) {
        _vm.footerTypeLocal = $$v;
      },
      expression: "footerTypeLocal"
    }
  }, [_vm._v("Sticky")])], 1)]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "mt-4 flex justify-between"
  }, [_c("h5", {
    staticClass: "mb-2"
  }, [_vm._v("RTL")]), _vm._v(" "), _c("vs-switch", {
    model: {
      value: _vm.rtl,
      callback: function callback($$v) {
        _vm.rtl = $$v;
      },
      expression: "rtl"
    }
  })], 1), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "mt-4 flex justify-between"
  }, [_c("h5", {
    staticClass: "mb-2"
  }, [_vm._v("Hide Scroll To Top")]), _vm._v(" "), _c("vs-switch", {
    model: {
      value: _vm.hideScrollToTopLocal,
      callback: function callback($$v) {
        _vm.hideScrollToTopLocal = $$v;
      },
      expression: "hideScrollToTopLocal"
    }
  })], 1), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("h5", {
    staticClass: "mb-2"
  }, [_vm._v("Router Animation " + _vm._s(_vm.routerTransitionLocal))]), _vm._v(" "), _c("vs-select", {
    model: {
      value: _vm.routerTransitionLocal,
      callback: function callback($$v) {
        _vm.routerTransitionLocal = $$v;
      },
      expression: "routerTransitionLocal"
    }
  }, _vm._l(_vm.routerTransitionsList, function (item, index) {
    return _c("vs-select-item", {
      key: index,
      attrs: {
        value: item.value,
        text: item.text
      }
    });
  }), 1)], 1)], 2)])], 1)])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=1ea13689&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=1ea13689& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "relative"
  }, [_c("div", {
    staticClass: "vx-navbar-wrapper nav-menu-wrapper"
  }, [_c("vs-navbar", {
    staticClass: "vx-navbar navbar-custom navbar-skelton",
    attrs: {
      color: _vm.navbarColor
    }
  }, [_c("ul", {
    staticClass: "menu-items flex flex-wrap w-full items-center"
  }, _vm._l(_vm.navMenuItems, function (item, index) {
    return _c("li", {
      key: index,
      staticClass: "menu-item",
      "class": {
        "mr-2": !(_vm.navMenuItems.length === index + 1)
      }
    }, [item.header ? [_c("h-nav-menu-header", {
      staticClass: "menu-header relative",
      attrs: {
        header: item
      }
    })] : item.submenu ? [_c("h-nav-menu-group", {
      key: "group-".concat(index),
      staticClass: "menu-group relative py-4",
      attrs: {
        bottom: "",
        group: item,
        groupIndex: index,
        open: _vm.checkGrpChildrenActive(item)
      }
    })] : item.url ? _c("div", {
      staticClass: "menu-link"
    }, [_c("h-nav-menu-item", {
      staticClass: "relative py-4 cursor-pointer",
      attrs: {
        to: item.slug !== "external" ? item.url : null,
        href: item.slug === "external" ? item.url : null,
        icon: item.icon,
        target: item.target,
        isDisabled: item.isDisabled,
        slug: item.slug
      }
    }, [_c("span", {
      staticClass: "truncate"
    }, [_vm._v(_vm._s(_vm.$t(item.i18n) || item.name))]), _vm._v(" "), item.tag ? _c("vs-chip", {
      attrs: {
        color: item.tagColor
      }
    }, [_vm._v(_vm._s(item.tag))]) : _vm._e()], 1)], 1) : _vm._e()], 2);
  }), 0)])], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=template&id=a66887b4&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=template&id=a66887b4& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "h-nav-group relative",
    "class": [{
      "h-nav-group-open": _vm.openItems
    }, {
      "h-nav-group-active": _vm.open
    }, {
      "disabled-item pointer-events-none": _vm.group.isDisabled
    }],
    on: {
      mouseover: _vm.mouseover,
      mouseleave: _vm.mouseout
    }
  }, [_c("div", {
    staticClass: "group-header w-full flex items-center"
  }, [_c("span", {
    staticClass: "flex items-center w-full"
  }, [_vm.group.icon || this.groupIndex > Math.floor(this.groupIndex) ? _c("feather-icon", {
    attrs: {
      icon: _vm.group.icon || "CircleIcon",
      svgClasses: _vm.iconClasses
    }
  }) : _vm._e(), _vm._v(" "), _c("span", {
    staticClass: "truncate mr-3 select-none"
  }, [_vm._v(_vm._s(_vm.$t(_vm.group.i18n) || _vm.group.name))])], 1), _vm._v(" "), _c("feather-icon", {
    "class": [{
      rotate90: _vm.openItems
    }, "feather-grp-header-arrow"],
    attrs: {
      icon: _vm.bottom ? "ChevronDownIcon" : _vm.$vs.rtl ? "ChevronLeftIcon" : "ChevronRightIcon",
      "svg-classes": "w-4 h-4"
    }
  })], 1), _vm._v(" "), _c("transition", {
    attrs: {
      name: "fade-bottom-2x"
    }
  }, [_c("ul", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.openItems,
      expression: "openItems"
    }],
    ref: "childDropdown",
    staticClass: "h-nav-group-items h-nav-menu-dd absolute shadow-drop py-2",
    style: _vm.styleItems
  }, _vm._l(_vm.group.submenu, function (groupItem, index) {
    return _c("li", {
      key: index
    }, [groupItem.submenu ? _c("h-nav-menu-group", {
      attrs: {
        group: groupItem,
        groupIndex: Number("".concat(_vm.groupIndex, ".").concat(index + 1)),
        open: _vm.isGroupActive(groupItem),
        openHover: _vm.openHover
      }
    }) : _c("h-nav-menu-item", {
      attrs: {
        "icon-small": "",
        index: _vm.groupIndex + "." + index,
        to: groupItem.slug !== "external" ? groupItem.url : null,
        href: groupItem.slug === "external" ? groupItem.url : null,
        icon: _vm.itemIcon,
        slug: groupItem.slug,
        target: groupItem.target
      }
    }, [_c("span", {
      staticClass: "truncate"
    }, [_vm._v(_vm._s(_vm.$t(groupItem.i18n) || groupItem.name))]), _vm._v(" "), groupItem.tag ? _c("vs-chip", {
      staticClass: "ml-auto",
      attrs: {
        color: groupItem.tagColor
      }
    }, [_vm._v(_vm._s(groupItem.tag))]) : _vm._e()], 1)], 1);
  }), 0)])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=template&id=18b96df6&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=template&id=18b96df6& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "nav-header py-4",
    on: {
      mouseover: _vm.hovered,
      mouseleave: function mouseleave($event) {
        return _vm.hovered(false);
      },
      click: function click($event) {
        _vm.showChildren = !_vm.showChildren;
      }
    }
  }, [_c("div", {
    staticClass: "header-label flex items-center cursor-pointer relative px-5 py-2",
    "class": [{
      "text-white bg-primary-gradient header-active": _vm.isHeaderActive
    }, {
      "header-open": _vm.isHovered || _vm.showChildren
    }]
  }, [_c("feather-icon", {
    staticClass: "mr-3",
    attrs: {
      icon: _vm.header.icon,
      svgClasses: "h-5 w-5"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "whitespace-no-wrap"
  }, [_vm._v(_vm._s(_vm.$t(_vm.header.i18n) || _vm.header.header))]), _vm._v(" "), _c("feather-icon", {
    staticClass: "ml-1",
    attrs: {
      icon: "ChevronDownIcon",
      svgClasses: "h-4 w-4"
    }
  })], 1), _vm._v(" "), _c("transition", {
    attrs: {
      name: "fade-top-2x"
    }
  }, [_c("ul", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showChildren,
      expression: "showChildren"
    }],
    ref: "headerDropdown",
    staticClass: "header-children h-nav-menu-dd shadow-drop text-intial absolute shadow-lg py-2",
    "class": {
      "dd-right": _vm.dropRight
    }
  }, _vm._l(_vm.header.items, function (item, index) {
    return _c("li", {
      key: item.name
    }, [!item.submenu ? [_c("h-nav-menu-item", {
      attrs: {
        to: item.slug != "external" ? item.url : "",
        href: item.slug == "external" ? item.url : "",
        icon: item.icon,
        target: item.target,
        isDisabled: item.isDisabled,
        slug: item.slug
      }
    }, [_c("span", {
      staticClass: "truncate"
    }, [_vm._v(_vm._s(_vm.$t(item.i18n) || item.name))]), _vm._v(" "), item.tag ? _c("vs-chip", {
      attrs: {
        color: item.tagColor
      }
    }, [_vm._v(_vm._s(item.tag))]) : _vm._e()], 1)] : [_c("h-nav-menu-group", {
      key: "group-".concat(index),
      attrs: {
        openHover: "",
        group: item,
        groupIndex: index,
        open: _vm.checkGrpChildrenActive(item)
      }
    })]], 2);
  }), 0)])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=template&id=56cdf3bc&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=template&id=56cdf3bc& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.canSee ? _c("div", {
    staticClass: "h-nav-menu-item",
    "class": [{
      "h-nav-active-item text-primary font-medium": _vm.activeLink
    }, {
      "disabled-item pointer-events-none": _vm.isDisabled
    }]
  }, [_vm.to ? _c("router-link", {
    "class": [{
      "router-link-active": _vm.activeLink
    }, "nav-link flex items-center"],
    attrs: {
      exact: "",
      to: _vm.to,
      target: _vm.target
    }
  }, [!_vm.featherIcon ? _c("vs-icon", {
    attrs: {
      "icon-pack": _vm.iconPack,
      icon: _vm.icon
    }
  }) : _c("feather-icon", {
    "class": _vm.iconClasses,
    attrs: {
      icon: _vm.icon
    }
  }), _vm._v(" "), _vm._t("default")], 2) : _c("a", {
    staticClass: "nav-link flex items-center",
    attrs: {
      target: _vm.target,
      href: _vm.href
    }
  }, [!_vm.featherIcon ? _c("vs-icon", {
    attrs: {
      "icon-pack": _vm.iconPack,
      icon: _vm.icon
    }
  }) : _c("feather-icon", {
    "class": _vm.iconClasses,
    attrs: {
      icon: _vm.icon
    }
  }), _vm._v(" "), _vm._t("default")], 2)], 1) : _vm._e();
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=template&id=3c540e2e&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=template&id=3c540e2e& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "relative"
  }, [_c("div", {
    staticClass: "vx-navbar-wrapper navbar-full p-0"
  }, [_c("vs-navbar", {
    staticClass: "navbar-custom navbar-skelton",
    "class": _vm.navbarClasses,
    style: _vm.navbarStyle,
    attrs: {
      color: _vm.navbarColor
    }
  }, [_c("router-link", {
    staticClass: "vx-logo cursor-pointer mx-auto flex items-center",
    attrs: {
      tag: "div",
      to: "/"
    }
  }, [_c("logo", {
    staticClass: "w-10 mr-4 fill-current text-primary"
  }), _vm._v(" "), _c("span", {
    staticClass: "vx-logo-text text-primary"
  }, [_vm._v("Vuexy")])], 1), _vm._v(" "), _c("search-bar"), _vm._v(" "), _c("notification-drop-down"), _vm._v(" "), _c("profile-drop-down")], 1)], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=template&id=e7a2b600&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=template&id=e7a2b600& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "relative"
  }, [_c("div", {
    staticClass: "vx-navbar-wrapper",
    "class": _vm.classObj
  }, [_c("vs-navbar", {
    staticClass: "vx-navbar navbar-custom navbar-skelton",
    "class": _vm.textColor,
    attrs: {
      color: _vm.navbarColorLocal
    }
  }, [_c("feather-icon", {
    staticClass: "sm:inline-flex xl:hidden cursor-pointer p-2",
    attrs: {
      icon: "MenuIcon"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.showSidebar.apply(null, arguments);
      }
    }
  }), _vm._v(" "), _c("vs-spacer"), _vm._v(" "), _c("router-link", {
    attrs: {
      to: "/",
      target: "_blank"
    }
  }, [_c("feather-icon", {
    staticClass: "sm:inline-flex cursor-pointer p-2 mr-3",
    attrs: {
      svgClasses: "h-5 w-5",
      icon: "GlobeIcon"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.showSidebar.apply(null, arguments);
      }
    }
  })], 1), _vm._v(" "), _c("notification-drop-down"), _vm._v(" "), _c("profile-drop-down")], 1)], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=template&id=3164619e&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=template&id=3164619e& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    on: {
      click: _vm.markNotificationAsRead
    }
  }, [_c("vs-dropdown", {
    staticClass: "cursor-pointer",
    attrs: {
      "vs-custom-content": "",
      "vs-trigger-click": ""
    }
  }, [_c("feather-icon", {
    staticClass: "cursor-pointer mt-1 sm:mr-6 mr-2",
    attrs: {
      icon: "BellIcon",
      badge: _vm.unreadNotifications
    }
  }), _vm._v(" "), _c("vs-dropdown-menu", {
    staticClass: "notification-dropdown dropdown-custom vx-navbar-dropdown"
  }, [_c("div", {
    staticClass: "notification-top text-center p-5 bg-primary text-white"
  }), _vm._v(" "), _c(_vm.scrollbarTag, {
    key: _vm.$vs.rtl,
    ref: "mainSidebarPs",
    tag: "component",
    staticClass: "scroll-area--nofications-dropdown p-0 mb-10",
    attrs: {
      settings: _vm.settings
    }
  }, [_c("ul", {
    staticClass: "bordered-items"
  }, _vm._l(_vm.notifications, function (ntf) {
    return _c("li", {
      key: ntf.id,
      staticClass: "flex justify-between px-4 py-4 notification cursor-pointer",
      on: {
        click: function click($event) {
          return _vm.notificationClicked(ntf.data.link);
        }
      }
    }, [_c("div", {
      staticClass: "flex items-start"
    }, [_c("vs-icon", {
      staticClass: "mt-3",
      attrs: {
        icon: ntf.data.icon
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "mx-2"
    }, [_c("span", {
      staticClass: "font-medium block notification-title"
    }, [_vm._v(_vm._s(ntf.data.title))]), _vm._v(" "), _c("small", [_vm._v(_vm._s(ntf.data.msg))])])], 1), _vm._v(" "), _c("small", {
      staticClass: "mt-1 whitespace-no-wrap"
    }, [_vm._v(_vm._s(_vm._f("date_format")(ntf.created_at, "timeago")))])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "checkout-footer fixed bottom-0 rounded-b-lg text-primary w-full p-2 font-semibold text-center border border-b-0 border-l-0 border-r-0 border-solid d-theme-border-grey-light cursor-pointer"
  }, [_c("span", [_vm._v("View All Notifications")])])], 1)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=template&id=796fd988&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=template&id=796fd988& ***!
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
    staticClass: "the-navbar__user-meta flex items-center"
  }, [_c("div", {
    staticClass: "text-right leading-tight hidden sm:block"
  }, [_c("p", {
    staticClass: "font-semibold"
  }, [_vm._v(_vm._s(_vm.activeUserInfo.full_name))]), _vm._v(" "), _c("small", [_vm._v("Available")])]), _vm._v(" "), _c("vs-dropdown", {
    staticClass: "cursor-pointer",
    attrs: {
      "vs-custom-content": "",
      "vs-trigger-click": ""
    }
  }, [_c("div", {
    staticClass: "con-img ml-3"
  }, [_c("img", {
    key: "onlineImg",
    staticClass: "rounded-full shadow-md cursor-pointer block",
    attrs: {
      src: _vm.activeUserInfo.avatar ? _vm.activeUserInfo.avatar_image.thumb : __webpack_require__(/*! @assets/images/default-avatar.png */ "./packages/core/resources/assets/images/default-avatar.png"),
      alt: "user-img",
      width: "40",
      height: "40"
    }
  })]), _vm._v(" "), _c("vs-dropdown-menu", {
    staticClass: "vx-navbar-dropdown"
  }, [_c("ul", {
    staticStyle: {
      "min-width": "9rem"
    }
  }, [_c("li", {
    staticClass: "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white",
    on: {
      click: _vm.goToProfile
    }
  }, [_c("feather-icon", {
    attrs: {
      icon: "UserIcon",
      svgClasses: "w-4 h-4"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "ml-2"
  }, [_vm._v("Profile")])], 1), _vm._v(" "), _vm.$acl.check("admin") && _vm.checkPermission("access-settings") ? _c("li", {
    staticClass: "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white",
    on: {
      click: function click($event) {
        _vm.$router.push("/admin/settings/core")["catch"](function () {});
      }
    }
  }, [_c("feather-icon", {
    attrs: {
      icon: "SettingsIcon",
      svgClasses: "w-4 h-4"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "ml-2"
  }, [_vm._v("Settings")])], 1) : _vm._e(), _vm._v(" "), _c("vs-divider", {
    staticClass: "m-1"
  }), _vm._v(" "), _c("li", {
    staticClass: "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white",
    on: {
      click: _vm.logout
    }
  }, [_c("feather-icon", {
    attrs: {
      icon: "LogOutIcon",
      svgClasses: "w-4 h-4"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "ml-2"
  }, [_vm._v("Logout")])], 1)], 1)])], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=template&id=c23bac4e&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=template&id=c23bac4e& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "flex"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showFullSearch,
      expression: "showFullSearch"
    }],
    staticClass: "search-full-container w-full h-full absolute left-0 top-0",
    "class": {
      flex: _vm.showFullSearch
    }
  }, [_c("vx-auto-suggest", {
    ref: "navbarSearch",
    staticClass: "w-full",
    attrs: {
      autoFocus: _vm.showFullSearch,
      data: {},
      search_key: "title",
      "background-overlay": "",
      inputClassses: "w-full vs-input-no-border vs-input-no-shdow-focus",
      icon: "SearchIcon",
      placeholder: "Explore Liveasily..."
    },
    on: {
      input: _vm.hnd_search_query_update,
      selected: _vm.selected,
      closeSearchbar: function closeSearchbar($event) {
        _vm.showFullSearch = false;
      }
    },
    scopedSlots: _vm._u([{
      key: "group",
      fn: function fn(_ref) {
        var group_name = _ref.group_name;
        return [_c("p", {
          staticClass: "font-semibold text-primary"
        }, [_vm._v(_vm._s(_vm._f("title")(group_name)))])];
      }
    }, {
      key: "pages",
      fn: function fn(_ref2) {
        var suggestion = _ref2.suggestion;
        return [_c("div", {
          staticClass: "flex items-end leading-none py-1"
        }, [_c("feather-icon", {
          staticClass: "mr-4",
          attrs: {
            icon: suggestion.icon,
            svgClasses: "h-5 w-5"
          }
        }), _vm._v(" "), _c("span", {
          staticClass: "mt-1"
        }, [_vm._v(_vm._s(suggestion.title))])], 1)];
      }
    }, {
      key: "noResult",
      fn: function fn(_ref3) {
        var group_name = _ref3.group_name;
        return [_c("div", {
          staticClass: "flex items-center"
        }, [_c("feather-icon", {
          staticClass: "mr-4",
          attrs: {
            icon: "InfoIcon",
            svgClasses: "h-5 w-5"
          }
        }), _vm._v(" "), _c("span", [_vm._v("No results found.")])], 1)];
      }
    }])
  }), _vm._v(" "), _c("div", {
    staticClass: "absolute right-0 h-full z-50"
  }, [_c("feather-icon", {
    staticClass: "px-4 cursor-pointer h-full close-search-icon",
    attrs: {
      icon: "XIcon"
    },
    on: {
      click: function click($event) {
        _vm.showFullSearch = false;
      }
    }
  })], 1)], 1), _vm._v(" "), _c("feather-icon", {
    staticClass: "cursor-pointer navbar-fuzzy-search mr-4",
    attrs: {
      icon: "SearchIcon"
    },
    on: {
      click: function click($event) {
        _vm.showFullSearch = true;
      }
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=b55ab2b6&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=b55ab2b6& ***!
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
    staticClass: "parentx"
  }, [_c("vs-sidebar", {
    directives: [{
      name: "hammer",
      rawName: "v-hammer:swipe",
      value: _vm.onMenuSwipe,
      expression: "onMenuSwipe",
      arg: "swipe"
    }],
    ref: "verticalNavMenu",
    staticClass: "v-nav-menu items-no-padding",
    attrs: {
      "default-index": "-1",
      "click-not-close": _vm.clickNotClose,
      "reduce-not-rebound": _vm.reduceNotRebound,
      parent: _vm.parent,
      hiddenBackground: _vm.clickNotClose,
      reduce: _vm.reduce
    },
    model: {
      value: _vm.isVerticalNavMenuActive,
      callback: function callback($$v) {
        _vm.isVerticalNavMenuActive = $$v;
      },
      expression: "isVerticalNavMenuActive"
    }
  }, [_c("div", {
    on: {
      mouseenter: _vm.mouseEnter,
      mouseleave: _vm.mouseLeave
    }
  }, [_c("div", {
    staticClass: "header-sidebar flex items-end justify-between",
    attrs: {
      slot: "header"
    },
    slot: "header"
  }, [_c("router-link", {
    staticClass: "vx-logo cursor-pointer flex items-center",
    attrs: {
      tag: "div",
      to: "/"
    }
  }, [_c("logo", {
    staticClass: "w-10 mr-4 fill-current text-primary"
  }), _vm._v(" "), _vm.title ? _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isMouseEnter || !_vm.reduce,
      expression: "isMouseEnter || !reduce"
    }],
    staticClass: "vx-logo-text text-primary"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()], 1), _vm._v(" "), _c("div", [_vm.showCloseButton ? [_c("feather-icon", {
    staticClass: "m-0 cursor-pointer",
    attrs: {
      icon: "XIcon"
    },
    on: {
      click: function click($event) {
        return _vm.$store.commit("TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE", false);
      }
    }
  })] : !_vm.showCloseButton && !_vm.verticalNavMenuItemsMin ? [_c("feather-icon", {
    staticClass: "mr-0 cursor-pointer",
    attrs: {
      id: "btnVNavMenuMinToggler",
      icon: _vm.reduce ? "CircleIcon" : "DiscIcon",
      "svg-classes": "stroke-current text-primary"
    },
    on: {
      click: function click($event) {
        return _vm.toggleReduce(!_vm.reduce);
      }
    }
  })] : _vm._e()], 2)], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showShadowBottom,
      expression: "showShadowBottom"
    }],
    staticClass: "shadow-bottom"
  }), _vm._v(" "), _c(_vm.scrollbarTag, {
    key: _vm.$vs.rtl,
    ref: "verticalNavMenuPs",
    tag: "component",
    staticClass: "scroll-area-v-nav-menu pt-2",
    attrs: {
      settings: _vm.settings
    },
    on: {
      "ps-scroll-y": _vm.psSectionScroll,
      scroll: _vm.psSectionScroll
    }
  }, [_vm._l(_vm.menuItemsUpdated, function (item, index) {
    return [item.header && !_vm.verticalNavMenuItemsMin && _vm.$acl.check(item.rule) ? _c("span", {
      key: "header-".concat(index),
      staticClass: "navigation-header truncate"
    }, [_vm._v("\n            " + _vm._s(item.header) + "\n          ")]) : !item.header ? [!item.submenu ? _c("v-nav-menu-item", {
      key: "item-".concat(index),
      attrs: {
        index: index,
        to: item.slug !== "external" ? item.url : null,
        href: item.slug === "external" ? item.url : null,
        icon: item.icon,
        target: item.target,
        isDisabled: item.isDisabled,
        permission: item.permission,
        featherIcon: item.featherIcon ? item.featherIcon : false,
        slug: item.slug
      }
    }, [_c("span", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.verticalNavMenuItemsMin,
        expression: "!verticalNavMenuItemsMin"
      }],
      staticClass: "truncate"
    }, [_vm._v(_vm._s(_vm.$t(item.i18n) || item.name))]), _vm._v(" "), item.tag && (_vm.isMouseEnter || !_vm.reduce) ? _c("vs-chip", {
      staticClass: "ml-auto",
      attrs: {
        color: item.tagColor
      }
    }, [_vm._v(_vm._s(item.tag))]) : _vm._e()], 1) : [_c("v-nav-menu-group", {
      key: "group-".concat(index),
      attrs: {
        openHover: _vm.openGroupHover,
        group: item,
        groupIndex: index,
        open: _vm.isGroupActive(item)
      }
    })]] : _vm._e()];
  })], 2)], 1)]), _vm._v(" "), !_vm.isVerticalNavMenuActive ? _c("div", {
    directives: [{
      name: "hammer",
      rawName: "v-hammer:swipe",
      value: _vm.onSwipeAreaSwipe,
      expression: "onSwipeAreaSwipe",
      arg: "swipe"
    }],
    staticClass: "v-nav-menu-swipe-area"
  }) : _vm._e()], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=template&id=097004ec&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=template&id=097004ec& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.visible ? _c("div", {
    staticClass: "vs-sidebar-group",
    "class": [{
      "vs-sidebar-group-open": _vm.openItems
    }, {
      "vs-sidebar-group-active": _vm.open
    }, {
      "disabled-item pointer-events-none": _vm.group.isDisabled
    }],
    on: {
      mouseover: _vm.mouseover,
      mouseout: _vm.mouseout
    }
  }, [_c("div", {
    staticClass: "group-header w-full",
    on: {
      click: _vm.clickGroup
    }
  }, [_c("span", {
    staticClass: "flex items-center w-full"
  }, [_c("vs-icon", {
    staticClass: "text-xl",
    staticStyle: {
      "margin-right": "8px !important"
    },
    attrs: {
      icon: _vm.group.icon
    }
  }), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.verticalNavMenuItemsMin,
      expression: "!verticalNavMenuItemsMin"
    }],
    staticClass: "truncate mr-3 select-none"
  }, [_vm._v(_vm._s(_vm.$t(_vm.group.i18n) || _vm.group.name))]), _vm._v(" "), _vm.group.tag && !_vm.verticalNavMenuItemsMin ? _c("vs-chip", {
    staticClass: "ml-auto mr-4",
    attrs: {
      color: _vm.group.tagColor
    }
  }, [_vm._v(_vm._s(_vm.group.tag))]) : _vm._e()], 1), _vm._v(" "), _c("feather-icon", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.verticalNavMenuItemsMin,
      expression: "!verticalNavMenuItemsMin"
    }],
    "class": [{
      rotate90: _vm.openItems
    }, "feather-grp-header-arrow"],
    attrs: {
      icon: _vm.$vs.rtl ? "ChevronLeftIcon" : "ChevronRightIcon",
      "svg-classes": "w-4 h-4"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "vs-sidebar--tooltip"
  }, [_vm._v(_vm._s(_vm.$t(_vm.group.i18n) || _vm.group.name))])], 1), _vm._v(" "), _c("ul", {
    ref: "items",
    staticClass: "vs-sidebar-group-items",
    style: _vm.styleItems
  }, _vm._l(_vm.group.submenu, function (groupItem, index) {
    return _c("li", {
      key: index
    }, [groupItem.submenu ? _c("v-nav-menu-group", {
      attrs: {
        group: groupItem,
        groupIndex: Number("".concat(_vm.groupIndex, ".").concat(index + 1)),
        open: _vm.isGroupActive(groupItem),
        openHover: _vm.openHover
      }
    }) : _c("v-nav-menu-item", {
      attrs: {
        "icon-small": "",
        index: _vm.groupIndex + "." + index,
        to: groupItem.slug !== "external" ? groupItem.url : null,
        href: groupItem.slug === "external" ? groupItem.url : null,
        icon: _vm.itemIcon(_vm.groupIndex + "." + index),
        slug: groupItem.slug,
        target: groupItem.target,
        permission: groupItem.permission
      }
    }, [_c("span", {
      staticClass: "truncate"
    }, [_vm._v(_vm._s(_vm.$t(groupItem.i18n) || groupItem.name))]), _vm._v(" "), groupItem.tag ? _c("vs-chip", {
      staticClass: "ml-auto",
      attrs: {
        color: groupItem.tagColor
      }
    }, [_vm._v(_vm._s(groupItem.tag))]) : _vm._e()], 1)], 1);
  }), 0)]) : _vm._e();
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=template&id=48d1f5d8&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=template&id=48d1f5d8& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.canSee ? _c("div", {
    staticClass: "vs-sidebar--item",
    "class": [{
      "vs-sidebar-item-active": _vm.activeLink
    }, {
      "disabled-item pointer-events-none": _vm.isDisabled
    }]
  }, [_vm.to ? _c("router-link", {
    "class": [{
      "router-link-active": _vm.activeLink
    }],
    attrs: {
      tabindex: "-1",
      exact: "",
      to: _vm.to,
      target: _vm.target
    }
  }, [_vm.featherIcon ? _c("feather-icon", {
    "class": {
      "w-3 h-3": _vm.iconSmall
    },
    attrs: {
      icon: _vm.icon
    }
  }) : _c("vs-icon", {
    staticClass: "text-xl",
    attrs: {
      icon: _vm.icon
    }
  }), _vm._v(" "), _vm._t("default")], 2) : _c("a", {
    attrs: {
      target: _vm.target,
      href: _vm.href,
      tabindex: "-1"
    }
  }, [_vm.featherIcon ? _c("feather-icon", {
    "class": {
      "w-3 h-3": _vm.iconSmall
    },
    attrs: {
      icon: _vm.icon
    }
  }) : _c("vs-icon", {
    staticClass: "text-xl",
    attrs: {
      icon: _vm.icon
    }
  }), _vm._v(" "), _vm._t("default")], 2)], 1) : _vm._e();
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/main/Main.vue?vue&type=template&id=5c397b84&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/main/Main.vue?vue&type=template&id=5c397b84& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "layout--main",
    "class": [_vm.layoutTypeClass, _vm.navbarClasses, _vm.footerClasses, {
      "no-scroll": _vm.isAppPage
    }]
  }, [!_vm.disableThemeTour && _vm.windowWidth >= 1200 && _vm.mainLayoutType === "vertical" && _vm.verticalNavMenuWidth == "default" ? _c("vx-tour", {
    attrs: {
      steps: _vm.steps
    }
  }) : _vm._e(), _vm._v(" "), !_vm.disableCustomizer ? _c("the-customizer", {
    attrs: {
      footerType: _vm.footerType,
      hideScrollToTop: _vm.hideScrollToTop,
      navbarType: _vm.navbarType,
      navbarColor: _vm.navbarColor,
      routerTransition: _vm.routerTransition
    },
    on: {
      toggleHideScrollToTop: _vm.toggleHideScrollToTop,
      updateFooter: _vm.updateFooter,
      updateNavbar: _vm.updateNavbar,
      updateNavbarColor: _vm.updateNavbarColor,
      updateRouterTransition: _vm.updateRouterTransition
    }
  }) : _vm._e(), _vm._v(" "), _c("v-nav-menu", {
    attrs: {
      navMenuItems: _vm.navMenuItems,
      title: _vm.dash_title,
      parent: ".layout--main"
    }
  }), _vm._v(" "), _c("div", {
    "class": [_vm.contentAreaClass, {
      "show-overlay": _vm.bodyOverlay
    }],
    attrs: {
      id: "content-area"
    }
  }, [_c("div", {
    attrs: {
      id: "content-overlay"
    }
  }), _vm._v(" "), _vm.mainLayoutType === "horizontal" && _vm.windowWidth >= 1200 ? [_c("the-navbar-horizontal", {
    "class": [{
      "text-white": _vm.isNavbarDark && !_vm.isThemeDark
    }, {
      "text-base": !_vm.isNavbarDark && _vm.isThemeDark
    }],
    attrs: {
      navbarType: _vm.navbarType
    }
  }), _vm._v(" "), _vm.navbarType === "static" ? _c("div", {
    staticStyle: {
      height: "62px"
    }
  }) : _vm._e(), _vm._v(" "), _c("h-nav-menu", {
    "class": [{
      "text-white": _vm.isNavbarDark && !_vm.isThemeDark
    }, {
      "text-base": !_vm.isNavbarDark && _vm.isThemeDark
    }],
    attrs: {
      navMenuItems: _vm.navMenuItems
    }
  })] : [_c("the-navbar-vertical", {
    "class": [{
      "text-white": _vm.isNavbarDark && !_vm.isThemeDark
    }, {
      "text-base": !_vm.isNavbarDark && _vm.isThemeDark
    }],
    attrs: {
      navbarColor: _vm.navbarColor
    }
  })], _vm._v(" "), _c("div", {
    staticClass: "content-wrapper"
  }, [_c("div", {
    staticClass: "router-view"
  }, [_c("div", {
    staticClass: "router-content"
  }, [_c("transition", {
    attrs: {
      name: _vm.routerTransition
    }
  }, [_vm.$route.meta.breadcrumb || _vm.$route.meta.pageTitle ? _c("div", {
    staticClass: "router-header flex flex-wrap items-center mb-6"
  }, [_c("div", {
    staticClass: "content-area__heading",
    "class": {
      "pr-4 border-0 md:border-r border-solid border-grey-light": _vm.$route.meta.breadcrumb
    }
  }, [_c("h2", {
    staticClass: "mb-1"
  }, [_vm._v(_vm._s(_vm.routeTitle))])]), _vm._v(" "), _vm.$route.meta.breadcrumb ? _c("vx-breadcrumb", {
    staticClass: "ml-4 md:block hidden",
    attrs: {
      route: _vm.$route,
      isRTL: _vm.$vs.rtl
    }
  }) : _vm._e()], 1) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "content-area__content"
  }, [!_vm.hideScrollToTop ? _c("back-to-top", {
    attrs: {
      bottom: "5%",
      right: _vm.$vs.rtl ? "calc(100% - 2.2rem - 38px)" : "30px",
      visibleoffset: "500"
    }
  }, [_c("vs-button", {
    staticClass: "shadow-lg btn-back-to-top",
    attrs: {
      "icon-pack": "feather",
      icon: "icon-arrow-up"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("transition", {
    attrs: {
      name: _vm.routerTransition,
      mode: "out-in"
    }
  }, [_c("router-view", {
    key: _vm.$route.fullPath,
    on: {
      changeRouteTitle: _vm.changeRouteTitle,
      setAppClasses: function setAppClasses(classesStr) {
        return _vm.$emit("setAppClasses", classesStr);
      }
    }
  })], 1)], 1)], 1)])]), _vm._v(" "), _c("the-footer")], 2)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&id=78680e97&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&id=78680e97&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n  File Name: vxAutoSuggest.scss\n  Description: Styles for vx-auto-suggest component. Imported in VxAutoSuggest.vue file\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vx-auto-suggest {\n  position: relative;\n}\n.vx-auto-suggest .vs-input .vs-con-input .vs-inputx {\n  z-index: 10;\n}\n.vx-auto-suggest .vs-input .vs-con-input .vs-input--placeholder {\n  top: 0;\n  z-index: 50;\n}\n.vx-auto-suggest .auto-suggest-suggestions-list {\n  position: absolute;\n  width: 100%;\n  max-height: 82vh;\n  overflow-y: auto;\n}\n[dir] .vx-auto-suggest .auto-suggest-suggestions-list {\n  background: #fff;\n}\n[dir] .vx-auto-suggest .auto-suggest-suggestions-list .auto-suggest__suggestion-group__suggestion.vx-auto-suggest__current-selected {\n  background: #F1F1F1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&id=1285d5b0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&id=1285d5b0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#theme-customizer .vs-sidebar {\n  position: fixed;\n  z-index: 52000;\n  width: 400px;\n  max-width: 90vw;\n}[dir] #theme-customizer .vs-sidebar {\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);\n}\n.customizer-btn {\n  position: fixed;\n  top: 50%;\n  z-index: 50000;\n}\n[dir=ltr] .customizer-btn {\n  right: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .customizer-btn {\n  left: 0;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=ltr] .customizer-btn .vs-icon {\n  -webkit-animation: spin 1.5s linear infinite;\n          animation: spin 1.5s linear infinite;\n}\n[dir=rtl] .customizer-btn .vs-icon {\n  -webkit-animation: spin 1.5s linear infinite;\n          animation: spin 1.5s linear infinite;\n}\n.scroll-area--customizer {\n  height: calc(100% - 5rem);\n}\n.scroll-area--customizer:not(.ps) {\n  overflow-y: auto;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&id=1ea13689&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&id=1ea13689&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n.menu-item .nav-link {\n  color: inherit;\n}\n.menu-item .disabled-item span {\n  color: #e2e2e2;\n}\n[dir] .h-nav-menu-dd {\n  background-color: #fff;\n}\n\n/* DARK THEME */\n[dir] .theme-dark .h-nav-menu-dd {\n  background-color: #262c49;\n  box-shadow: 0px 0px 30px #0f163a !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=style&index=0&id=a66887b4&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=style&index=0&id=a66887b4&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n[dir] .menu-item > .h-nav-group-open .group-header {\n  background-color: #f6f6f6;\n}\n[dir] .theme-dark .menu-item > .h-nav-group-open .group-header {\n  background-color: #262c49;\n}\n[dir] .header-children .h-nav-group-active {\n  background-color: #f6f6f6;\n}\n[dir] .theme-dark .header-children .h-nav-group-active {\n  background-color: #10163a;\n}\n.h-nav-group-items {\n  min-width: 215px;\n  z-index: 1;\n}\n[dir] .h-nav-group-items {\n  border-radius: 4px;\n}\n[dir=ltr] .h-nav-group-items.dd-left {\n  right: 0rem;\n}\n[dir=rtl] .h-nav-group-items.dd-left {\n  left: 0rem;\n}\n.h-nav-group-items::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n[dir] .h-nav-group-items::-webkit-scrollbar-thumb {\n  background: #dae1e7;\n  border-radius: 20px;\n}\n[dir] .theme-dark .h-nav-group-items::-webkit-scrollbar-thumb {\n  background: #10163a;\n}\n[dir] .h-nav-group-items::-webkit-scrollbar-track {\n  background: #f8f8f8;\n  border-radius: 30px;\n}\n[dir] .theme-dark .h-nav-group-items::-webkit-scrollbar-track {\n  background: #262c49;\n}\n.nav-header .group-header {\n  transition: all 0.2s ease;\n}\n[dir] .nav-header .group-header {\n  padding: 0.75rem 1.5rem;\n}\n[dir=ltr] .nav-header .group-header:hover {\n  transform: translateX(5px);\n}\n[dir=rtl] .nav-header .group-header:hover {\n  transform: translateX(-5px);\n}\n[dir] .menu-item > .h-nav-group .group-header {\n  border-radius: 4px;\n  padding: 0.5rem 1.5rem;\n}\n.menu-item > .h-nav-group-active .group-header {\n  color: #fff;\n}\n[dir] .menu-item > .h-nav-group-active .group-header {\n  box-shadow: 0px 0px 6px 1px rgba(var(--vs-primary), 0.6);\n}\n[dir=ltr] .menu-item > .h-nav-group-active .group-header {\n  background: linear-gradient(118deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), 0.7)) !important;\n}\n[dir=rtl] .menu-item > .h-nav-group-active .group-header {\n  background: linear-gradient(-118deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), 0.7)) !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=style&index=0&id=18b96df6&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=style&index=0&id=18b96df6&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n[dir] .header-active {\n  box-shadow: 0px 0px 6px 1px rgba(var(--vs-primary), 0.6);\n}\n[dir] .header-label {\n  border-radius: 4px;\n}\n[dir] .header-open {\n  background-color: #f6f6f6;\n}\n.header-children {\n  min-width: 215px;\n  top: 100%;\n  z-index: 1;\n}\n[dir] .header-children {\n  border-radius: 4px;\n}\n[dir=ltr] .header-children.dd-right {\n  right: 1rem;\n}\n[dir=rtl] .header-children.dd-right {\n  left: 1rem;\n}\n[dir] .theme-dark .header-open {\n  background-color: #262c49;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=style&index=0&id=56cdf3bc&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=style&index=0&id=56cdf3bc&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n[dir] .menu-item li .h-nav-menu-item a {\n  padding: 0.75rem 1.5rem;\n}\n.menu-item li .h-nav-menu-item > * {\n  transition: 0.25s ease-in-out;\n}\n[dir=ltr] .menu-item li .h-nav-menu-item > *:hover {\n  transform: translateX(5px);\n}\n[dir=rtl] .menu-item li .h-nav-menu-item > *:hover {\n  transform: translateX(-5px);\n}\n[dir] .menu-item li .h-nav-menu-item.h-nav-active-item {\n  background-color: #f6f6f6;\n}\n[dir] .theme-dark .menu-item li .h-nav-menu-item.h-nav-active-item {\n  background-color: #10163a;\n}\n[dir] .menu-link .h-nav-menu-item:hover .nav-link {\n  background: #f6f6f6;\n}\n[dir] .theme-dark .menu-link .h-nav-menu-item:hover .nav-link {\n  background: #262c49;\n}\n.menu-link .h-nav-menu-item.h-nav-active-item a {\n  color: #fff;\n}\n[dir] .menu-link .h-nav-menu-item.h-nav-active-item a {\n  box-shadow: 0px 0px 6px 1px rgba(var(--vs-primary), 0.6);\n}\n[dir=ltr] .menu-link .h-nav-menu-item.h-nav-active-item a {\n  background: linear-gradient(118deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), 0.7)) !important;\n}\n[dir=rtl] .menu-link .h-nav-menu-item.h-nav-active-item a {\n  background: linear-gradient(-118deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), 0.7)) !important;\n}\n[dir] .menu-link .h-nav-menu-item a {\n  border-radius: 4px;\n  padding: 0.5rem 1.5rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&id=b55ab2b6&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&id=b55ab2b6&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n  File Name: verticalNavMenu.scss\n  Description: Styles for v-nav-menu component. Imported in VerticalNavMenu.vue file\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n.v-nav-menu-swipe-area {\n  position: fixed;\n  height: calc(var(--vh, 1vh) * 100);\n  width: 30px;\n  z-index: 1;\n  top: 0;\n}\n[dir] .v-nav-menu-swipe-area {\n  background: transparent;\n}\n[dir=ltr] .v-nav-menu-swipe-area {\n  left: 0;\n}\n[dir=rtl] .v-nav-menu-swipe-area {\n  right: 0;\n}\n.v-nav-menu {\n  white-space: nowrap;\n}\n.v-nav-menu .vs-sidebar--background {\n  z-index: 51000;\n}\n.v-nav-menu .vs-sidebar {\n  z-index: 51000;\n  position: fixed;\n}\n[dir] .v-nav-menu .vs-sidebar .vs-sidebar--items {\n  padding: 0;\n}\n.v-nav-menu .vs-sidebar.vs-sidebar-reduce {\n  max-width: 80px;\n}\n[dir] .v-nav-menu .vs-sidebar.vs-sidebar-reduce:hover {\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08) !important;\n}\n.v-nav-menu .vs-sidebar.vs-sidebar-reduce:hover:not(.vs-sidebar-reduceNotRebound):not(.vs-sidebar-reduceNotHoverExpand) .vs-sidebar-group .group-header i {\n  display: block;\n}\n.v-nav-menu .vs-sidebar.vs-sidebar-reduce .vs-sidebar-group .group-header i {\n  display: none;\n}\n.v-nav-menu .header-sidebar {\n  width: 100%;\n}\n[dir=ltr] .v-nav-menu .header-sidebar {\n  padding: 20px 19px 16px 23px;\n}\n[dir=rtl] .v-nav-menu .header-sidebar {\n  padding: 20px 23px 16px 19px;\n}\n[dir] .v-nav-menu .header-sidebar .logo img {\n  padding: 4px 0;\n}\n.v-nav-menu .header-sidebar .feather-icon svg {\n  color: #7367F0;\n}\n.v-nav-menu .shadow-bottom {\n  position: absolute;\n  z-index: 2;\n  height: 60px;\n  width: 100%;\n  pointer-events: none;\n  filter: blur(5px);\n}\n[dir] .v-nav-menu .shadow-bottom {\n  margin-top: -1.3rem;\n  background: linear-gradient(rgb(255, 255, 255) 41%, rgba(255, 255, 255, 0.11) 95%, rgba(255, 255, 255, 0) 100%);\n}\n.v-nav-menu .scroll-area-v-nav-menu {\n  position: relative;\n  width: 100%;\n  height: calc(var(--vh, 1vh) * 100 - 69px);\n}\n[dir] .v-nav-menu .scroll-area-v-nav-menu {\n  margin: auto;\n}\n.v-nav-menu .scroll-area-v-nav-menu:not(.ps) {\n  overflow-y: auto;\n}\n[dir] .v-nav-menu .scroll-area-v-nav-menu > .vs-sidebar-group {\n  padding: 0 15px;\n}\n[dir] .v-nav-menu .scroll-area-v-nav-menu > .vs-sidebar--item {\n  padding: 0 15px;\n}\n.v-nav-menu .navigation-header {\n  font-size: 0.9rem;\n  display: block;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #999;\n}\n[dir] .v-nav-menu .navigation-header {\n  margin-bottom: 0.8rem;\n}\n[dir=ltr] .v-nav-menu .navigation-header {\n  margin-left: 2.2rem;\n}\n[dir=rtl] .v-nav-menu .navigation-header {\n  margin-right: 2.2rem;\n}\n[dir] .v-nav-menu .navigation-header:not(:first-child) {\n  margin-top: 2rem;\n}\n.v-nav-menu .feather-icon {\n  color: #565656;\n}\n[dir=ltr] .v-nav-menu .feather-icon {\n  margin-right: 14px;\n}\n[dir=rtl] .v-nav-menu .feather-icon {\n  margin-left: 14px;\n}\n.v-nav-menu .feather-icon .feather {\n  width: 20px;\n  height: 20px;\n}\n.v-nav-menu .con-vs-chip {\n  min-height: 24px;\n}\n[dir] .v-nav-menu .con-vs-chip {\n  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.1);\n}\n.v-nav-menu .con-vs-chip .vs-chip--text {\n  color: #fff;\n  font-size: 0.8rem;\n}\n.v-nav-menu .vs-sidebar--item {\n  transition: none;\n  overflow: visible !important;\n}\n.v-nav-menu .vs-sidebar--item:hover a {\n  color: inherit;\n}\n[dir=ltr] .v-nav-menu .vs-sidebar--item:hover a > * {\n  transform: translateX(5px);\n}\n[dir=rtl] .v-nav-menu .vs-sidebar--item:hover a > * {\n  transform: translateX(-5px);\n}\n.v-nav-menu .vs-sidebar--item.vs-sidebar-item-active {\n  font-weight: 400;\n  z-index: 1;\n  position: relative;\n}\n[dir] .v-nav-menu .vs-sidebar--item.vs-sidebar-item-active {\n  border: none !important;\n}\n.v-nav-menu .vs-sidebar--item a {\n  font-size: 1rem;\n  transition: none;\n  opacity: unset;\n  color: #626262;\n}\n[dir] .v-nav-menu .vs-sidebar--item a {\n  border-radius: 4px;\n  padding: 10px 15px;\n}\n.v-nav-menu .vs-sidebar--item a > * {\n  transition: transform 0.25s ease;\n}\n.v-nav-menu .vs-sidebar--item a span {\n  font-size: 15px;\n}\n.v-nav-menu .vs-sidebar--item.disabled-item a span {\n  color: #e2e2e2;\n}\n.theme-dark .v-nav-menu .vs-sidebar--item.disabled-item a {\n  opacity: 0.3;\n}\n[dir] .v-nav-menu .vs-sidebar--item .router-link-active {\n  box-shadow: 0px 0px 10px 1px rgba(var(--vs-primary), 0.7);\n}\n[dir=ltr] .v-nav-menu .vs-sidebar--item .router-link-active {\n  background: linear-gradient(118deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), 0.7));\n}\n[dir=rtl] .v-nav-menu .vs-sidebar--item .router-link-active {\n  background: linear-gradient(-118deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), 0.7));\n}\n.v-nav-menu .vs-sidebar--item .router-link-active .feather-icon {\n  color: #fff;\n}\n.v-nav-menu .vs-sidebar--item .router-link-active span {\n  color: #fff;\n}\n#sidebar-demo .vs-sidebar {\n  z-index: 52000;\n}\n#sidebar-demo .vs-sidebar-staticPosition {\n  z-index: 10000;\n}\n#sidebar-demo #parentx-demo-7 .parentx:not(.show-custom-sidebar) .vs-sidebar {\n  display: none;\n  z-index: 1 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=style&index=0&id=097004ec&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=style&index=0&id=097004ec&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n  File Name: verticalNavMenuGroup.scss\n  Description: Styles for v-nav-menu component. Imported in VerticalNavMenuGroup.vue file\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vs-sidebar-group {\n  overflow: hidden;\n}\n.vs-sidebar-group .group-header {\n  transition: all 0.5s ease;\n  font-size: 15px;\n}\n[dir] .vs-sidebar-group .group-header {\n  padding: 10px 15px;\n  cursor: pointer;\n}\n.vs-sidebar-group .group-header .feather-grp-header-arrow {\n  position: absolute !important;\n  top: 12px;\n  transition: all 0.2s ease-out;\n  display: inline-block;\n}\n[dir] .vs-sidebar-group .group-header .feather-grp-header-arrow {\n  transform: rotate(0deg);\n}\n[dir=ltr] .vs-sidebar-group .group-header .feather-grp-header-arrow {\n  right: 8px;\n}\n[dir=rtl] .vs-sidebar-group .group-header .feather-grp-header-arrow {\n  left: 8px;\n}\n[dir=ltr] .vs-sidebar-group .group-header .feather-grp-header-arrow.rotate90 {\n  transform: rotate(90deg);\n}\n[dir=rtl] .vs-sidebar-group .group-header .feather-grp-header-arrow.rotate90 {\n  transform: rotate(-90deg);\n}\n.vs-sidebar-group .group-header > * {\n  transition: all 0.25s ease;\n}\n[dir=ltr] .vs-sidebar-group .group-header:hover > * {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs-sidebar-group .group-header:hover > * {\n  transform: translateX(-5px);\n}\n[dir] .vs-sidebar-group .group-header .con-vs-chip {\n  margin-bottom: 0;\n}\n.vs-sidebar-group .vs-icon {\n  font-size: 1.5rem;\n}\n[dir] .vs-sidebar-group:hover > .group-header {\n  transform: unset;\n}\n[dir=ltr] .vs-sidebar-group .vs-sidebar-group .group-header {\n  padding-left: 20px;\n}\n[dir=rtl] .vs-sidebar-group .vs-sidebar-group .group-header {\n  padding-right: 20px;\n}\n[dir] .vs-sidebar-group.vs-sidebar-group-open > .group-header, [dir] .vs-sidebar-group.vs-sidebar-group-active > .group-header {\n  background: #f6f6f6;\n  border-radius: 6px;\n}\n[dir=ltr] .vs-sidebar-group.vs-sidebar-group-open > ul, [dir=ltr] .vs-sidebar-group.vs-sidebar-group-active > ul {\n  padding-left: 0 !important;\n}\n[dir=rtl] .vs-sidebar-group.vs-sidebar-group-open > ul, [dir=rtl] .vs-sidebar-group.vs-sidebar-group-active > ul {\n  padding-right: 0 !important;\n}\n[dir] .vs-sidebar-group.vs-sidebar-group-open > .group-header {\n  cursor: pointer;\n  margin-bottom: 7px;\n}\n[dir=ltr] .vs-sidebar-group.vs-sidebar-group-open > .vs-sidebar-group-items {\n  padding-left: 0;\n}\n[dir=rtl] .vs-sidebar-group.vs-sidebar-group-open > .vs-sidebar-group-items {\n  padding-right: 0;\n}\n[dir=ltr] .vs-sidebar-group.vs-sidebar-group-open > .vs-sidebar-group-items .vs-sidebar--item span {\n  padding-left: 0 0 0 2rem;\n}\n[dir=rtl] .vs-sidebar-group.vs-sidebar-group-open > .vs-sidebar-group-items .vs-sidebar--item span {\n  padding-right: 0 0 0 2rem;\n}\n[dir] .vs-sidebar-group.vs-sidebar-group-open > .vs-sidebar-group-items .vs-sidebar--item:last-child {\n  border-bottom: 0px;\n}\n.vs-sidebar-group.vs-sidebar-group-open .vs-sidebar-group {\n  overflow: visible;\n}\n.vs-sidebar-group .vs-sidebar-group-items {\n  opacity: 0;\n}\n[dir=ltr] .vs-sidebar-group .vs-sidebar-group-items .vs-sidebar--item a {\n  padding: 10px 15px 10px 20px;\n}\n[dir=rtl] .vs-sidebar-group .vs-sidebar-group-items .vs-sidebar--item a {\n  padding: 10px 20px 10px 15px;\n}\n[dir=ltr] .vs-sidebar-group .vs-sidebar-group-items .vs-sidebar--item a .feather-icon {\n  margin-right: 20px;\n}\n[dir=rtl] .vs-sidebar-group .vs-sidebar-group-items .vs-sidebar--item a .feather-icon {\n  margin-left: 20px;\n}\n[dir] .vs-sidebar-group .vs-sidebar-group-items .vs-sidebar--item:last-child a {\n  margin-bottom: 0;\n}\n[dir] .vs-sidebar-group .vs-sidebar-group-items li:last-child {\n  padding-bottom: 7px;\n}\n[dir=ltr] .vs-sidebar-group .vs-sidebar-group-items .vs-sidebar-group span .feather-icon {\n  margin-right: 20px;\n}\n[dir=rtl] .vs-sidebar-group .vs-sidebar-group-items .vs-sidebar-group span .feather-icon {\n  margin-left: 20px;\n}\n[dir=ltr] .vs-sidebar-group .vs-sidebar-group-items .vs-sidebar-group .feather-icon {\n  margin-right: 0px;\n}\n[dir=rtl] .vs-sidebar-group .vs-sidebar-group-items .vs-sidebar-group .feather-icon {\n  margin-left: 0px;\n}\n.vs-sidebar-group.disabled-item span {\n  color: #e2e2e2;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&id=78680e97&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&id=78680e97&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=style&index=0&id=78680e97&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&id=78680e97&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&id=1285d5b0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&id=1285d5b0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheCustomizer.vue?vue&type=style&index=0&id=1285d5b0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&id=1285d5b0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&id=1ea13689&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&id=1ea13689&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenu.vue?vue&type=style&index=0&id=1ea13689&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&id=1ea13689&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=style&index=0&id=a66887b4&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=style&index=0&id=a66887b4&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuGroup.vue?vue&type=style&index=0&id=a66887b4&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=style&index=0&id=a66887b4&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=style&index=0&id=18b96df6&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=style&index=0&id=18b96df6&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuHeader.vue?vue&type=style&index=0&id=18b96df6&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=style&index=0&id=18b96df6&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=style&index=0&id=56cdf3bc&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=style&index=0&id=56cdf3bc&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuItem.vue?vue&type=style&index=0&id=56cdf3bc&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=style&index=0&id=56cdf3bc&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&id=b55ab2b6&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&id=b55ab2b6&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=style&index=0&id=b55ab2b6&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&id=b55ab2b6&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=style&index=0&id=097004ec&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=style&index=0&id=097004ec&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuGroup.vue?vue&type=style&index=0&id=097004ec&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=style&index=0&id=097004ec&lang=scss&");

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

/***/ "./packages sync recursive ^\\.\\/.*\\/resources\\/js\\/src\\/navs\\/navMenuItems$":
/*!************************************************************************!*\
  !*** ./packages sync ^\.\/.*\/resources\/js\/src\/navs\/navMenuItems$ ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./banners/resources/js/src/navs/navMenuItems": "./packages/banners/resources/js/src/navs/navMenuItems.js",
	"./blogs/resources/js/src/navs/navMenuItems": "./packages/blogs/resources/js/src/navs/navMenuItems.js",
	"./dataimport/resources/js/src/navs/navMenuItems": "./packages/dataimport/resources/js/src/navs/navMenuItems.js",
	"./discounts/resources/js/src/navs/navMenuItems": "./packages/discounts/resources/js/src/navs/navMenuItems.js",
	"./ecommerce/resources/js/src/navs/navMenuItems": "./packages/ecommerce/resources/js/src/navs/navMenuItems.js",
	"./menus/resources/js/src/navs/navMenuItems": "./packages/menus/resources/js/src/navs/navMenuItems.js",
	"./pages/resources/js/src/navs/navMenuItems": "./packages/pages/resources/js/src/navs/navMenuItems.js",
	"./payment-method/resources/js/src/navs/navMenuItems": "./packages/payment-method/resources/js/src/navs/navMenuItems.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./packages sync recursive ^\\.\\/.*\\/resources\\/js\\/src\\/navs\\/navMenuItems$";

/***/ }),

/***/ "./packages/banners/resources/js/src/navs/navMenuItems.js":
/*!****************************************************************!*\
  !*** ./packages/banners/resources/js/src/navs/navMenuItems.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  url: "/admin/banners",
  name: "Banners",
  icon: "photo",
  slug: "admin-banners",
  permission: 'view-banners',
  order: 1,
  section: 'content'
}]);

/***/ }),

/***/ "./packages/blogs/resources/js/src/navs/navMenuItems.js":
/*!**************************************************************!*\
  !*** ./packages/blogs/resources/js/src/navs/navMenuItems.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: "Blog",
  icon: "PackageIcon",
  rule: "admin",
  order: 1,
  items: [{
    url: '/admin/blog-categories',
    name: "Categories",
    slug: "admin-blog-categories",
    icon: "category",
    order: 1,
    permission: "view-blog-categories"
  }, {
    url: '/admin/blogs',
    name: "All Blogs",
    slug: "admin-blogs",
    order: 2,
    icon: "create",
    permission: "view-blogs"
  }]
}]);

/***/ }),

/***/ "./packages/core/resources/assets/images/default-avatar.png":
/*!******************************************************************!*\
  !*** ./packages/core/resources/assets/images/default-avatar.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/default-avatar.png?27b9408da668f335b85e9fe669908cab";

/***/ }),

/***/ "./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue":
/*!*************************************************************************************!*\
  !*** ./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxAutoSuggest_vue_vue_type_template_id_78680e97___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxAutoSuggest.vue?vue&type=template&id=78680e97& */ "./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=78680e97&");
/* harmony import */ var _VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxAutoSuggest.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VxAutoSuggest_vue_vue_type_style_index_0_id_78680e97_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VxAutoSuggest.vue?vue&type=style&index=0&id=78680e97&lang=scss& */ "./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&id=78680e97&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxAutoSuggest_vue_vue_type_template_id_78680e97___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxAutoSuggest_vue_vue_type_template_id_78680e97___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&id=78680e97&lang=scss&":
/*!***********************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&id=78680e97&lang=scss& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_id_78680e97_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=style&index=0&id=78680e97&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&id=78680e97&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_id_78680e97_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_id_78680e97_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_id_78680e97_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_id_78680e97_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=78680e97&":
/*!********************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=78680e97& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_template_id_78680e97___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=template&id=78680e97& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=78680e97&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_template_id_78680e97___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_template_id_78680e97___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/Logo.vue":
/*!********************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/Logo.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo_vue_vue_type_template_id_52d0cf33___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=52d0cf33& */ "./packages/core/resources/js/src/layouts/components/Logo.vue?vue&type=template&id=52d0cf33&");
/* harmony import */ var _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/layouts/components/Logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Logo_vue_vue_type_template_id_52d0cf33___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Logo_vue_vue_type_template_id_52d0cf33___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/layouts/components/Logo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/Logo.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/Logo.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/Logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/Logo.vue?vue&type=template&id=52d0cf33&":
/*!***************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/Logo.vue?vue&type=template&id=52d0cf33& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_52d0cf33___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=template&id=52d0cf33& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/Logo.vue?vue&type=template&id=52d0cf33&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_52d0cf33___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_52d0cf33___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/TheFooter.vue":
/*!*************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/TheFooter.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheFooter_vue_vue_type_template_id_15bec794_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=template&id=15bec794&functional=true& */ "./packages/core/resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=15bec794&functional=true&");
/* harmony import */ var _TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheFooter_vue_vue_type_template_id_15bec794_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheFooter_vue_vue_type_template_id_15bec794_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  true,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/layouts/components/TheFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=15bec794&functional=true&":
/*!************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=15bec794&functional=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_15bec794_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=template&id=15bec794&functional=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=15bec794&functional=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_15bec794_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_15bec794_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue":
/*!****************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheCustomizer_vue_vue_type_template_id_1285d5b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheCustomizer.vue?vue&type=template&id=1285d5b0& */ "./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=template&id=1285d5b0&");
/* harmony import */ var _TheCustomizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheCustomizer.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TheCustomizer_vue_vue_type_style_index_0_id_1285d5b0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheCustomizer.vue?vue&type=style&index=0&id=1285d5b0&lang=scss& */ "./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&id=1285d5b0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TheCustomizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheCustomizer_vue_vue_type_template_id_1285d5b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheCustomizer_vue_vue_type_template_id_1285d5b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheCustomizer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&id=1285d5b0&lang=scss&":
/*!**************************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&id=1285d5b0&lang=scss& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_style_index_0_id_1285d5b0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheCustomizer.vue?vue&type=style&index=0&id=1285d5b0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&id=1285d5b0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_style_index_0_id_1285d5b0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_style_index_0_id_1285d5b0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_style_index_0_id_1285d5b0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_style_index_0_id_1285d5b0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=template&id=1285d5b0&":
/*!***********************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=template&id=1285d5b0& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_template_id_1285d5b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheCustomizer.vue?vue&type=template&id=1285d5b0& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=template&id=1285d5b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_template_id_1285d5b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_template_id_1285d5b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue":
/*!*****************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNavMenu_vue_vue_type_template_id_1ea13689___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNavMenu.vue?vue&type=template&id=1ea13689& */ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=1ea13689&");
/* harmony import */ var _HorizontalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalNavMenu.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HorizontalNavMenu_vue_vue_type_style_index_0_id_1ea13689_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HorizontalNavMenu.vue?vue&type=style&index=0&id=1ea13689&lang=scss& */ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&id=1ea13689&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HorizontalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalNavMenu_vue_vue_type_template_id_1ea13689___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorizontalNavMenu_vue_vue_type_template_id_1ea13689___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&id=1ea13689&lang=scss&":
/*!***************************************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&id=1ea13689&lang=scss& ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_id_1ea13689_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenu.vue?vue&type=style&index=0&id=1ea13689&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&id=1ea13689&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_id_1ea13689_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_id_1ea13689_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_id_1ea13689_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_id_1ea13689_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=1ea13689&":
/*!************************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=1ea13689& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_template_id_1ea13689___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenu.vue?vue&type=template&id=1ea13689& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=1ea13689&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_template_id_1ea13689___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_template_id_1ea13689___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue":
/*!**********************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNavMenuGroup_vue_vue_type_template_id_a66887b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNavMenuGroup.vue?vue&type=template&id=a66887b4& */ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=template&id=a66887b4&");
/* harmony import */ var _HorizontalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalNavMenuGroup.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HorizontalNavMenuGroup_vue_vue_type_style_index_0_id_a66887b4_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HorizontalNavMenuGroup.vue?vue&type=style&index=0&id=a66887b4&lang=scss& */ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=style&index=0&id=a66887b4&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HorizontalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalNavMenuGroup_vue_vue_type_template_id_a66887b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorizontalNavMenuGroup_vue_vue_type_template_id_a66887b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=style&index=0&id=a66887b4&lang=scss&":
/*!********************************************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=style&index=0&id=a66887b4&lang=scss& ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_style_index_0_id_a66887b4_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuGroup.vue?vue&type=style&index=0&id=a66887b4&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=style&index=0&id=a66887b4&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_style_index_0_id_a66887b4_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_style_index_0_id_a66887b4_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_style_index_0_id_a66887b4_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_style_index_0_id_a66887b4_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=template&id=a66887b4&":
/*!*****************************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=template&id=a66887b4& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_template_id_a66887b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuGroup.vue?vue&type=template&id=a66887b4& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=template&id=a66887b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_template_id_a66887b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_template_id_a66887b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue":
/*!***********************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNavMenuHeader_vue_vue_type_template_id_18b96df6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNavMenuHeader.vue?vue&type=template&id=18b96df6& */ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=template&id=18b96df6&");
/* harmony import */ var _HorizontalNavMenuHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalNavMenuHeader.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HorizontalNavMenuHeader_vue_vue_type_style_index_0_id_18b96df6_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HorizontalNavMenuHeader.vue?vue&type=style&index=0&id=18b96df6&lang=scss& */ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=style&index=0&id=18b96df6&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HorizontalNavMenuHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalNavMenuHeader_vue_vue_type_template_id_18b96df6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorizontalNavMenuHeader_vue_vue_type_template_id_18b96df6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=style&index=0&id=18b96df6&lang=scss&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=style&index=0&id=18b96df6&lang=scss& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeader_vue_vue_type_style_index_0_id_18b96df6_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuHeader.vue?vue&type=style&index=0&id=18b96df6&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=style&index=0&id=18b96df6&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeader_vue_vue_type_style_index_0_id_18b96df6_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeader_vue_vue_type_style_index_0_id_18b96df6_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeader_vue_vue_type_style_index_0_id_18b96df6_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeader_vue_vue_type_style_index_0_id_18b96df6_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=template&id=18b96df6&":
/*!******************************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=template&id=18b96df6& ***!
  \******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeader_vue_vue_type_template_id_18b96df6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuHeader.vue?vue&type=template&id=18b96df6& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=template&id=18b96df6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeader_vue_vue_type_template_id_18b96df6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeader_vue_vue_type_template_id_18b96df6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue":
/*!*********************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNavMenuItem_vue_vue_type_template_id_56cdf3bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNavMenuItem.vue?vue&type=template&id=56cdf3bc& */ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=template&id=56cdf3bc&");
/* harmony import */ var _HorizontalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalNavMenuItem.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HorizontalNavMenuItem_vue_vue_type_style_index_0_id_56cdf3bc_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HorizontalNavMenuItem.vue?vue&type=style&index=0&id=56cdf3bc&lang=scss& */ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=style&index=0&id=56cdf3bc&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HorizontalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalNavMenuItem_vue_vue_type_template_id_56cdf3bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorizontalNavMenuItem_vue_vue_type_template_id_56cdf3bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=style&index=0&id=56cdf3bc&lang=scss&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=style&index=0&id=56cdf3bc&lang=scss& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_style_index_0_id_56cdf3bc_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuItem.vue?vue&type=style&index=0&id=56cdf3bc&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=style&index=0&id=56cdf3bc&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_style_index_0_id_56cdf3bc_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_style_index_0_id_56cdf3bc_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_style_index_0_id_56cdf3bc_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_style_index_0_id_56cdf3bc_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=template&id=56cdf3bc&":
/*!****************************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=template&id=56cdf3bc& ***!
  \****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_template_id_56cdf3bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuItem.vue?vue&type=template&id=56cdf3bc& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=template&id=56cdf3bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_template_id_56cdf3bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_template_id_56cdf3bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue":
/*!******************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheNavbarHorizontal_vue_vue_type_template_id_3c540e2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheNavbarHorizontal.vue?vue&type=template&id=3c540e2e& */ "./packages/core/resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=template&id=3c540e2e&");
/* harmony import */ var _TheNavbarHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheNavbarHorizontal.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheNavbarHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheNavbarHorizontal_vue_vue_type_template_id_3c540e2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheNavbarHorizontal_vue_vue_type_template_id_3c540e2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbarHorizontal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=template&id=3c540e2e&":
/*!*************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=template&id=3c540e2e& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarHorizontal_vue_vue_type_template_id_3c540e2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbarHorizontal.vue?vue&type=template&id=3c540e2e& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=template&id=3c540e2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarHorizontal_vue_vue_type_template_id_3c540e2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarHorizontal_vue_vue_type_template_id_3c540e2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/navbar/TheNavbarVertical.vue":
/*!****************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/navbar/TheNavbarVertical.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheNavbarVertical_vue_vue_type_template_id_e7a2b600___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheNavbarVertical.vue?vue&type=template&id=e7a2b600& */ "./packages/core/resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=template&id=e7a2b600&");
/* harmony import */ var _TheNavbarVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheNavbarVertical.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheNavbarVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheNavbarVertical_vue_vue_type_template_id_e7a2b600___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheNavbarVertical_vue_vue_type_template_id_e7a2b600___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/layouts/components/navbar/TheNavbarVertical.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbarVertical.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=template&id=e7a2b600&":
/*!***********************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=template&id=e7a2b600& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarVertical_vue_vue_type_template_id_e7a2b600___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbarVertical.vue?vue&type=template&id=e7a2b600& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=template&id=e7a2b600&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarVertical_vue_vue_type_template_id_e7a2b600___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarVertical_vue_vue_type_template_id_e7a2b600___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue":
/*!******************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationDropDown_vue_vue_type_template_id_3164619e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationDropDown.vue?vue&type=template&id=3164619e& */ "./packages/core/resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=template&id=3164619e&");
/* harmony import */ var _NotificationDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationDropDown.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotificationDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotificationDropDown_vue_vue_type_template_id_3164619e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotificationDropDown_vue_vue_type_template_id_3164619e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationDropDown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=template&id=3164619e&":
/*!*************************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=template&id=3164619e& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDropDown_vue_vue_type_template_id_3164619e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationDropDown.vue?vue&type=template&id=3164619e& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=template&id=3164619e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDropDown_vue_vue_type_template_id_3164619e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDropDown_vue_vue_type_template_id_3164619e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue":
/*!*************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileDropDown_vue_vue_type_template_id_796fd988___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileDropDown.vue?vue&type=template&id=796fd988& */ "./packages/core/resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=template&id=796fd988&");
/* harmony import */ var _ProfileDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileDropDown.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileDropDown_vue_vue_type_template_id_796fd988___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileDropDown_vue_vue_type_template_id_796fd988___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileDropDown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=template&id=796fd988&":
/*!********************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=template&id=796fd988& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileDropDown_vue_vue_type_template_id_796fd988___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileDropDown.vue?vue&type=template&id=796fd988& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=template&id=796fd988&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileDropDown_vue_vue_type_template_id_796fd988___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileDropDown_vue_vue_type_template_id_796fd988___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/navbar/components/SearchBar.vue":
/*!*******************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/navbar/components/SearchBar.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchBar_vue_vue_type_template_id_c23bac4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=template&id=c23bac4e& */ "./packages/core/resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=template&id=c23bac4e&");
/* harmony import */ var _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchBar_vue_vue_type_template_id_c23bac4e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchBar_vue_vue_type_template_id_c23bac4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/layouts/components/navbar/components/SearchBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=template&id=c23bac4e&":
/*!**************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=template&id=c23bac4e& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_c23bac4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=template&id=c23bac4e& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=template&id=c23bac4e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_c23bac4e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_c23bac4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue":
/*!*************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenu_vue_vue_type_template_id_b55ab2b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenu.vue?vue&type=template&id=b55ab2b6& */ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=b55ab2b6&");
/* harmony import */ var _VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenu.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VerticalNavMenu_vue_vue_type_style_index_0_id_b55ab2b6_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerticalNavMenu.vue?vue&type=style&index=0&id=b55ab2b6&lang=scss& */ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&id=b55ab2b6&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenu_vue_vue_type_template_id_b55ab2b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenu_vue_vue_type_template_id_b55ab2b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&id=b55ab2b6&lang=scss&":
/*!***********************************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&id=b55ab2b6&lang=scss& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_id_b55ab2b6_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=style&index=0&id=b55ab2b6&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&id=b55ab2b6&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_id_b55ab2b6_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_id_b55ab2b6_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_id_b55ab2b6_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_id_b55ab2b6_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=b55ab2b6&":
/*!********************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=b55ab2b6& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_b55ab2b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=template&id=b55ab2b6& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=b55ab2b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_b55ab2b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_b55ab2b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue":
/*!******************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenuGroup_vue_vue_type_template_id_097004ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenuGroup.vue?vue&type=template&id=097004ec& */ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=template&id=097004ec&");
/* harmony import */ var _VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenuGroup.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VerticalNavMenuGroup_vue_vue_type_style_index_0_id_097004ec_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerticalNavMenuGroup.vue?vue&type=style&index=0&id=097004ec&lang=scss& */ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=style&index=0&id=097004ec&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenuGroup_vue_vue_type_template_id_097004ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenuGroup_vue_vue_type_template_id_097004ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=style&index=0&id=097004ec&lang=scss&":
/*!****************************************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=style&index=0&id=097004ec&lang=scss& ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_style_index_0_id_097004ec_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuGroup.vue?vue&type=style&index=0&id=097004ec&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=style&index=0&id=097004ec&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_style_index_0_id_097004ec_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_style_index_0_id_097004ec_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_style_index_0_id_097004ec_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_style_index_0_id_097004ec_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=template&id=097004ec&":
/*!*************************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=template&id=097004ec& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_template_id_097004ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuGroup.vue?vue&type=template&id=097004ec& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=template&id=097004ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_template_id_097004ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_template_id_097004ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue":
/*!*****************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenuItem_vue_vue_type_template_id_48d1f5d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenuItem.vue?vue&type=template&id=48d1f5d8& */ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=template&id=48d1f5d8&");
/* harmony import */ var _VerticalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenuItem.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerticalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenuItem_vue_vue_type_template_id_48d1f5d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenuItem_vue_vue_type_template_id_48d1f5d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=template&id=48d1f5d8&":
/*!************************************************************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=template&id=48d1f5d8& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItem_vue_vue_type_template_id_48d1f5d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuItem.vue?vue&type=template&id=48d1f5d8& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=template&id=48d1f5d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItem_vue_vue_type_template_id_48d1f5d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItem_vue_vue_type_template_id_48d1f5d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/core/resources/js/src/layouts/components/vertical-nav-menu/navMenuItems.js":
/*!*********************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/components/vertical-nav-menu/navMenuItems.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ "./packages/core/resources/js/src/utils.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


var sidebarItems = [{
  url: "/admin/dashboard",
  name: "Dashboard",
  icon: "dashboard",
  slug: "admin-dashboard",
  i18n: "Dashboard",
  order: 0
}];
var web_content_items = [{
  url: null,
  name: "User management",
  slug: "admin-user-management",
  icon: "group",
  rule: "admin",
  order: 10,
  submenu: [{
    url: "/admin/user-management",
    name: "Users",
    slug: "admin-user-management",
    permission: 'users-view'
  }, {
    url: "/admin/user-roles",
    name: "Roles",
    slug: "admin-user-roles",
    permission: 'roles-view'
  }]
}, {
  url: "/admin/contact-inquiries",
  name: "Contact Inquiries",
  slug: 'admin-contact-inquiries',
  permission: 'contacts-view',
  icon: 'sms',
  order: 8
}, {
  url: "/admin/redirects",
  name: "Redirects",
  slug: 'admin-redirects',
  permission: 'contacts-view',
  icon: 'refresh',
  order: 9
}];
var modules = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getApplicationModules"])();

var _iterator = _createForOfIteratorHelper(modules),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var module = _step.value;

    if (module !== 'custom') {
      try {
        var siddeee = __webpack_require__("./packages sync recursive ^\\.\\/.*\\/resources\\/js\\/src\\/navs\\/navMenuItems$")("./".concat(module, "/resources/js/src/navs/navMenuItems"))["default"];

        siddeee.forEach(function (element) {
          if (element.section && element.section === 'content') {
            web_content_items = web_content_items.concat([element]);
          } else {
            sidebarItems = sidebarItems.concat([element]);
          }
        });
      } catch (error) {}
    } else {
      try {
        var _siddeee = __webpack_require__(/*! ./../../../../../../../../resources/js/dashboard/navs/navMenuItems */ "./resources/js/dashboard/navs/navMenuItems.js")["default"];

        _siddeee.forEach(function (element) {
          if (element.section && element.section === 'content') {
            web_content_items = web_content_items.concat([element]);
          } else {
            sidebarItems = sidebarItems.concat([element]);
          }
        });
      } catch (error) {}
    }
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

web_content_items = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.orderBy(web_content_items, ["order"], ["asc"]);
sidebarItems = sidebarItems.concat([{
  header: "Web Contents",
  icon: "PackageIcon",
  i18n: "Web Contents",
  rule: 'admin',
  order: 30,
  items: web_content_items
}]);
sidebarItems = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.orderBy(sidebarItems, ["order"], ["asc"]);
/* harmony default export */ __webpack_exports__["default"] = (sidebarItems);

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/main/Main.vue":
/*!**************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/main/Main.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_5c397b84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=5c397b84& */ "./packages/core/resources/js/src/layouts/main/Main.vue?vue&type=template&id=5c397b84&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./packages/core/resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_5c397b84___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_5c397b84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/core/resources/js/src/layouts/main/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/core/resources/js/src/layouts/main/Main.vue?vue&type=template&id=5c397b84&":
/*!*********************************************************************************************!*\
  !*** ./packages/core/resources/js/src/layouts/main/Main.vue?vue&type=template&id=5c397b84& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_5c397b84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=5c397b84& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/core/resources/js/src/layouts/main/Main.vue?vue&type=template&id=5c397b84&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_5c397b84___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_5c397b84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/dataimport/resources/js/src/navs/navMenuItems.js":
/*!*******************************************************************!*\
  !*** ./packages/dataimport/resources/js/src/navs/navMenuItems.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: "Data Administration",
  icon: "PackageIcon",
  i18n: "Data",
  rule: 'admin',
  order: 20,
  items: [{
    url: "/admin/data-import",
    name: "Data Import",
    icon: "swap_vertical_circle",
    slug: "admin-data-imports",
    order: 30,
    permission: "access-data-import"
  }]
}]);

/***/ }),

/***/ "./packages/discounts/resources/js/src/navs/navMenuItems.js":
/*!******************************************************************!*\
  !*** ./packages/discounts/resources/js/src/navs/navMenuItems.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: "Discounts",
  icon: "PackageIcon",
  i18n: "Discounts",
  rule: 'admin',
  order: 4,
  items: [{
    url: "/admin/coupon-discounts",
    name: "Discounts",
    icon: "file_copy",
    slug: "admin-pages",
    permission: 'discounts-view',
    order: 1
  }]
}]);

/***/ }),

/***/ "./packages/ecommerce/resources/js/src/navs/navMenuItems.js":
/*!******************************************************************!*\
  !*** ./packages/ecommerce/resources/js/src/navs/navMenuItems.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: "E-Commerce",
  icon: "PackageIcon",
  i18n: "E-Commerce",
  rule: 'admin',
  order: 2,
  items: [{
    url: null,
    name: "Catalog",
    slug: "ecommerce-catalog",
    icon: "storage",
    order: 3,
    rule: "admin",
    submenu: [{
      url: "/admin/product-categories",
      name: "Categories",
      slug: "admin-product-categories",
      permission: "view-product-categories"
    }, {
      url: "/admin/product-brands",
      name: "Brands",
      slug: "admin-product-brands",
      permission: "view-brands"
    }, {
      url: "/admin/products",
      name: "Products",
      slug: "admin-products",
      permission: 'view-products'
    }, {
      url: "/admin/product-classes",
      name: "Attributes & Classes",
      slug: "admin-product-classes",
      permission: 'view-products'
    }, {
      url: "/admin/product-reviews",
      name: "Product Reviews",
      slug: "ecommerce-admin-product-reviews"
    }]
  }, {
    url: "/admin/orders",
    name: "Orders",
    icon: "shopping_cart",
    slug: "ecommerce-admin-orders",
    permission: 'access-orders',
    order: 2
  }, {
    url: "/admin/faqs",
    name: "FAQs",
    icon: "help",
    slug: "ecommerce-admin-faqs",
    // permission: 'access-orders',
    order: 2
  }, {
    url: "/admin/discount-campaigns",
    name: "Campaigns",
    icon: "shopping_cart",
    slug: "ecommerce-admin-discount-campaigns",
    permission: 'access-campaigns',
    order: 2
  }, {
    url: "/admin/shipping-charges",
    name: "Shippings",
    icon: "local_shipping",
    slug: "ecommerce-admin-discount-campaigns",
    permission: 'access-shippings',
    order: 2
  }]
}, {
  url: "/vendor/dashboard",
  name: "Dashboard",
  icon: "group",
  slug: "ecommerce-vendor-dashboard",
  order: 1
}, {
  url: "/vendor/products",
  name: "Products",
  icon: "inventory",
  slug: "ecommerce-vendor-products",
  order: 2
}, {
  url: "/vendor/orders",
  name: "Orders",
  icon: "shopping_cart",
  slug: "ecommerce-vendor-orders",
  order: 2
}, {
  url: "/vendor/store-decoration",
  name: "Store Decoration",
  icon: "store",
  slug: "ecommerce-vendor-store-decoration",
  order: 2
}, // {
//   header: "Promotions",
//   icon: "PackageIcon",
//   i18n: "Promotions",
//   rule: 'vendor',
//   order: 2,
//    items: [
//     {
//       url: "/admin/pre-orders",
//       name: "Pre Orders",
//       icon: "shopping_cart",
//       slug: "ecommerce-admin-pre-orders",
//       permission: 'access-orders',
//       order: 2,
//     },
//    ]
// },
{
  url: "/vendor/profile",
  name: "Profile",
  icon: "person",
  slug: "ecommerce-vendor-orders",
  order: 2
}, {
  url: "/vendor/logout",
  name: "Logout",
  icon: "logout",
  slug: "ecommerce-vendor-logout",
  order: 2
}]);

/***/ }),

/***/ "./packages/menus/resources/js/src/navs/navMenuItems.js":
/*!**************************************************************!*\
  !*** ./packages/menus/resources/js/src/navs/navMenuItems.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  url: "/admin/menus",
  name: "Menus",
  icon: "MenuIcon",
  slug: "admin-menus",
  permission: 'view-menus',
  order: 5,
  featherIcon: true,
  section: 'content'
}]);

/***/ }),

/***/ "./packages/pages/resources/js/src/navs/navMenuItems.js":
/*!**************************************************************!*\
  !*** ./packages/pages/resources/js/src/navs/navMenuItems.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  url: "/admin/pages",
  name: "Pages",
  icon: "file_copy",
  slug: "admin-pages",
  permission: 'pages-view',
  order: 2,
  section: 'content'
}]);

/***/ }),

/***/ "./packages/payment-method/resources/js/src/navs/navMenuItems.js":
/*!***********************************************************************!*\
  !*** ./packages/payment-method/resources/js/src/navs/navMenuItems.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  url: "/admin/payment-methods",
  name: "Payment Methods",
  icon: "credit_card",
  slug: "admin-payment-methods-list",
  order: 2,
  permission: "access-payment-methods"
}]);

/***/ }),

/***/ "./resources/js/dashboard/navs/navMenuItems.js":
/*!*****************************************************!*\
  !*** ./resources/js/dashboard/navs/navMenuItems.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  url: "/admin/menus",
  name: "LKJDLKJ",
  icon: "MenuIcon",
  slug: "admin-menus",
  order: 5,
  featherIcon: true,
  section: 'content'
}]);

/***/ })

}]);