(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./node_modules/liquor-tree/dist/liquor-tree.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/liquor-tree/dist/liquor-tree.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/*!
 * LiquorTree v0.2.70
 * (c) 2019 amsik
 * Released under the MIT License.
 */

var NodeContent = {
  name: 'node-content',
  props: ['node'],
  render: function render (h) {
    var this$1 = this;

    var node = this.node;
    var vm = this.node.tree.vm;

    if (node.isEditing) {
      var nodeText = node.text;

      this.$nextTick(function (_) {
        this$1.$refs.editCtrl.focus();
      });

      return h('input', {
        domProps: {
          value: node.text,
          type: 'text'
        },
        class: 'tree-input',
        on: {
          input: function input (e) {
            nodeText = e.target.value;
          },
          blur: function blur () {
            node.stopEditing(nodeText);
          },
          keyup: function keyup (e) {
            if (e.keyCode === 13) {
              node.stopEditing(nodeText);
            }
          },
          mouseup: function mouseup (e) {
            e.stopPropagation();
          }
        },
        ref: 'editCtrl'
      })
    }

    if (vm.$scopedSlots.default) {
      return vm.$scopedSlots.default({ node: this.node })
    }

    return h('span', {
      domProps: {
        innerHTML: node.text
      }
    })
  }
};

function normalizeComponent(compiledTemplate, injectStyle, defaultExport, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, isShadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof isShadowMode === 'function') {
        createInjectorSSR = createInjector;
        createInjector = isShadowMode;
        isShadowMode = false;
    }
    // Vue.extend constructor export interop
    var options = typeof defaultExport === 'function' ? defaultExport.options : defaultExport;
    // render functions
    if (compiledTemplate && compiledTemplate.render) {
        options.render = compiledTemplate.render;
        options.staticRenderFns = compiledTemplate.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (injectStyle) {
                injectStyle.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (injectStyle) {
        hook = isShadowMode
            ? function () {
                injectStyle.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
            }
            : function (context) {
                injectStyle.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return defaultExport;
}

/* script */
var __vue_script__ = NodeContent;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
NodeContent.__file = "NodeContent.vue";

/* template */

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  

  
  var NodeContent$1 = normalizeComponent(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

//

var TreeNode = {
  name: 'Node',
  inject: ['tree'],
  props: ['node', 'options'],

  components: {
    NodeContent: NodeContent$1
  },

  watch: {
    node: function node() {
      this.node.vm = this;
    }
  },

  data: function data() {
    this.node.vm = this;

    return {
      loading: false
    }
  },

  computed: {
    padding: function padding() {
      return this.node.depth * (this.options.paddingLeft ? this.options.paddingLeft : this.options.nodeIndent) + 'px'
    },

    nodeClass: function nodeClass() {
      var state = this.node.states;
      var hasChildren = this.hasChildren();
      var classes = {
        'has-child': hasChildren,
        'expanded': hasChildren && state.expanded,
        'selected': state.selected,
        'disabled': state.disabled,
        'matched': state.matched,
        'dragging': state.dragging,
        'loading': this.loading,
        'draggable': state.draggable
      };

      if (this.options.checkbox) {
        classes['checked'] = state.checked;
        classes['indeterminate'] = state.indeterminate;
      }

      return classes
    },

    visibleChildren: function visibleChildren() {
      return this.node.children.filter(function(child) {
        return child && child.visible()
      })
    }
  },

  methods: {
    onNodeFocus: function onNodeFocus() {
      this.tree.activeElement = this.node;
    },

    focus: function focus() {
      this.$refs.anchor.focus();
      this.node.select();
    },

    check: function check() {
      if (this.node.checked()) {
        this.node.uncheck();
      } else {
        this.node.check();
      }
    },

    select: function select(ref) {
      if ( ref === void 0 ) ref = evnt;
      var ctrlKey = ref.ctrlKey;

      var opts = this.options;
      var tree = this.tree;
      var node = this.node;

      tree.$emit('node:clicked', node);

      if (opts.editing && node.isEditing) {
        return
      }

      if (opts.editing && node.editable()) {
        return this.startEditing()
      }

      if (opts.checkbox && opts.checkOnSelect) {
        if (!opts.parentSelect && this.hasChildren()) {
          return this.toggleExpand()
        }

        return this.check(ctrlKey)
      }

      // 'parentSelect' behaviour.
      // For nodes which has a children list we have to expand/collapse
      if (!opts.parentSelect && this.hasChildren()) {
        this.toggleExpand();
      }

      if (opts.multiple) {
        if (!node.selected()) {
          node.select(ctrlKey);
        } else {
          if (ctrlKey) {
            node.unselect();
          } else {
            if (this.tree.selectedNodes.length != 1) {
              tree.unselectAll();
              node.select();
            }
          }
        }
      } else {
        if (node.selected() && ctrlKey) {
          node.unselect();
        } else {
          node.select();
        }
      }
    },

    toggleExpand: function toggleExpand() {
      if (this.hasChildren()) {
        this.node.toggleExpand();
      }
    },

    hasChildren: function hasChildren() {
      return this.node.hasChildren()
    },

    startEditing: function startEditing() {
      if (this.tree._editingNode) {
        this.tree._editingNode.stopEditing();
      }

      this.node.startEditing();
    },

    stopEditing: function stopEditing() {
      this.node.stopEditing();
    },

    handleMouseDown: function handleMouseDown(event) {
      if (!this.options.dnd) {
        return
      }

      this.tree.vm.startDragging(this.node, event);
    }
  }
};

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return function (id, style) { return addStyle(id, style); };
}
var HEAD = document.head || document.getElementsByTagName('head')[0];
var styles = {};
function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        var code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                { style.element.setAttribute('media', css.media); }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            var index = style.ids.size - 1;
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index])
                { style.element.removeChild(nodes[index]); }
            if (nodes.length)
                { style.element.insertBefore(textNode, nodes[index]); }
            else
                { style.element.appendChild(textNode); }
        }
    }
}

/* script */
var __vue_script__$1 = TreeNode;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
TreeNode.__file = "TreeNode.vue";

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"tree-node",class:_vm.nodeClass,attrs:{"data-id":_vm.node.id},on:{"mousedown":function($event){$event.stopPropagation();return _vm.handleMouseDown($event)}}},[_c('div',{staticClass:"tree-content",style:([_vm.options.direction == 'ltr' ? {'padding-left': _vm.padding} : {'padding-right': _vm.padding}]),on:{"click":function($event){$event.stopPropagation();return _vm.select($event)}}},[_c('i',{staticClass:"tree-arrow",class:[{'expanded': _vm.node.states.expanded, 'has-child': _vm.node.children.length || _vm.node.isBatch}, _vm.options.direction],on:{"click":function($event){$event.stopPropagation();return _vm.toggleExpand($event)}}}),_vm._v(" "),(_vm.options.checkbox)?_c('i',{staticClass:"tree-checkbox",class:{'checked': _vm.node.states.checked, 'indeterminate': _vm.node.states.indeterminate},on:{"click":function($event){$event.stopPropagation();return _vm.check($event)}}}):_vm._e(),_vm._v(" "),_c('span',{ref:"anchor",staticClass:"tree-anchor",attrs:{"tabindex":"-1"},on:{"focus":_vm.onNodeFocus,"dblclick":function($event){return _vm.tree.$emit('node:dblclick', _vm.node)}}},[_c('node-content',{attrs:{"node":_vm.node}})],1)]),_vm._v(" "),_c('transition',{attrs:{"name":"l-fade"}},[(_vm.hasChildren() && _vm.node.states.expanded)?_c('ul',{staticClass:"tree-children"},_vm._l((_vm.visibleChildren),function(child){return _c('node',{key:child.id,attrs:{"node":child,"options":_vm.options}})}),1):_vm._e()])],1)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__$1 = function (inject) {
    if (!inject) { return }
    inject("data-v-20094490_0", { source: ".tree-node{white-space:nowrap;display:flex;flex-direction:column;position:relative;box-sizing:border-box}.tree-content{display:flex;align-items:center;padding:3px;cursor:pointer;width:100%;box-sizing:border-box}.tree-node:not(.selected)>.tree-content:hover{background:#f6f8fb}.tree-node.selected>.tree-content{background-color:#e7eef7}.tree-node.disabled>.tree-content:hover{background:inherit}.tree-arrow{flex-shrink:0;height:30px;cursor:pointer;margin-left:30px;width:0}.tree-arrow.has-child{margin-left:0;width:30px;position:relative}.tree-arrow.has-child:after{border:1.5px solid #494646;position:absolute;border-left:0;border-top:0;left:9px;top:50%;height:9px;width:9px;transform:rotate(-45deg) translateY(-50%) translateX(0);transition:transform .25s;transform-origin:center}.tree-arrow.has-child.rtl:after{border:1.5px solid #494646;position:absolute;border-right:0;border-bottom:0;right:0;top:50%;height:9px;width:9px;transform:rotate(-45deg) translateY(-50%) translateX(0);transition:transform .25s;transform-origin:center}.tree-arrow.expanded.has-child:after{transform:rotate(45deg) translateY(-50%) translateX(-5px)}.tree-checkbox{flex-shrink:0;position:relative;width:30px;height:30px;box-sizing:border-box;border:1px solid #dadada;border-radius:2px;background:#fff;transition:border-color .25s,background-color .25s}.tree-arrow:after,.tree-checkbox:after{position:absolute;display:block;content:\"\"}.tree-checkbox.checked,.tree-checkbox.indeterminate{background-color:#3a99fc;border-color:#218eff}.tree-checkbox.checked:after{box-sizing:content-box;border:1.5px solid #fff;border-left:0;border-top:0;left:9px;top:3px;height:15px;width:8px;transform:rotate(45deg) scaleY(0);transition:transform .25s;transform-origin:center}.tree-checkbox.checked:after{transform:rotate(45deg) scaleY(1)}.tree-checkbox.indeterminate:after{background-color:#fff;top:50%;left:20%;right:20%;height:2px}.tree-anchor{flex-grow:2;outline:0;display:flex;text-decoration:none;color:#343434;vertical-align:top;margin-left:3px;line-height:24px;padding:3px 6px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tree-node.selected>.tree-content>.tree-anchor{outline:0}.tree-node.disabled>.tree-content>.tree-anchor{color:#989191;background:#fff;opacity:.6;cursor:default;outline:0}.tree-input{display:block;width:100%;height:24px;line-height:24px;outline:0;border:1px solid #3498db;padding:0 4px}.l-fade-enter-active,.l-fade-leave-active{transition:opacity .3s,transform .3s;transform:translateX(0)}.l-fade-enter,.l-fade-leave-to{opacity:0;transform:translateX(-2em)}.tree--small .tree-anchor{line-height:19px}.tree--small .tree-checkbox{width:23px;height:23px}.tree--small .tree-arrow{height:23px}.tree--small .tree-checkbox.checked:after{left:7px;top:3px;height:11px;width:5px}.tree-node.has-child.loading>.tree-content>.tree-arrow,.tree-node.has-child.loading>.tree-content>.tree-arrow:after{border-radius:50%;width:15px;height:15px;border:0}.tree-node.has-child.loading>.tree-content>.tree-arrow{font-size:3px;position:relative;border-top:1.1em solid rgba(45,45,45,.2);border-right:1.1em solid rgba(45,45,45,.2);border-bottom:1.1em solid rgba(45,45,45,.2);border-left:1.1em solid #2d2d2d;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);left:5px;-webkit-animation:loading 1.1s infinite linear;animation:loading 1.1s infinite linear;margin-right:8px}@-webkit-keyframes loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  

  
  var TreeNode$1 = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    createInjector,
    undefined
  );

//
//
//
//
//
//

var script = {
  name: 'DragNode',
  props: ['target'],
  computed: {
    style: function style() {
      if (undefined === this.target.top) {
        return 'display: none'
      }

      return ("top: " + (this.target.top) + "px; left: " + (this.target.left) + "px")
    }
  }
};

/* script */
var __vue_script__$2 = script;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script.__file = "DraggableNode.vue";

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tree-dragnode",style:(_vm.style)},[_vm._v("\n  "+_vm._s(_vm.target.node.text)+"\n")])};
var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$2 = function (inject) {
    if (!inject) { return }
    inject("data-v-7a41ac3e_0", { source: ".tree-dragnode{padding:10px;border:1px solid #e7eef7;position:fixed;border-radius:8px;background:#fff;transform:translate(-50%,-110%);z-index:10}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$2 = undefined;
  /* module identifier */
  var __vue_module_identifier__$2 = undefined;
  /* functional template */
  var __vue_is_functional_template__$2 = false;
  /* style inject SSR */
  

  
  var DraggableNode = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    createInjector,
    undefined
  );

function recurseDown (obj, fn) {
  var res;

  if (Array.isArray(obj)) {
    return obj.map(function (node) { return recurseDown(node, fn); })
  }

  res = fn(obj);

  // Recurse children
  if (res !== false && obj.children && obj.children.length) {
    res = recurseDown(obj.children, fn);
  }

  return res
}

function striptags (value) {
  // ssr fix
  if (!!document === false) {
    return value
  }

  if (!striptags.__element) {
    striptags.__element = document.createElement('div');
  }

  striptags.__element.innerHTML = value;
  return striptags.__element.innerText
}

function finder (criteria) {
  return function (node) {
    return Object.keys(criteria).every(function (key) {
      if (key === 'text' || key === 'id') {
        var c = criteria[key];
        var val = node[key];

        // remove html tags
        val = striptags(val);

        if (isRegExp(c)) {
          return c.test(val)
        } else {
          return c === val
        }
      }

      var states = criteria[key];

      // it is possible to pass 'states' or 'state'
      if (key === 'state') {
        key = 'states';
      }

      return Object.keys(states).every(function (s) { return node[key][s] === states[s]; })
    })
  }
}

function isRegExp (val) {
  return val instanceof RegExp
}

function getAllChildren (source) {
  var result = [];

  source.forEach(function collect (node) {
    result.push(node);

    if (node.children) {
      node.children.forEach(collect);
    }
  });

  return result
}

function find (source, criteria, deep) {
  if ( deep === void 0 ) deep = true;

  if (!source || !source.length || !criteria) {
    return null
  }

  if (deep) {
    source = getAllChildren(source);
  }

  // find by index
  if (typeof criteria === 'number') {
    return source[criteria] || null
  }

  if (typeof criteria === 'string' || criteria instanceof RegExp) {
    criteria = {
      text: criteria
    };
  }

  if (typeof criteria !== 'function') {
    criteria = finder(criteria);
  }

  var result = source.filter(criteria);

  if (result.length) {
    return result
  }

  return null
}

// it is not genuine GUIDs

function s4 () {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
}

function uuidV4 () {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4()
}

function nodeIterator (context, method) {
  var args = [], len = arguments.length - 2;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 2 ];

  context.forEach(function (node) { return node[method].apply(node, args); });
}

var Selection = /*@__PURE__*/(function (Array) {
  function Selection (tree, items) {
    var ref;

    if ( items === void 0 ) items = [];
    /*eslint semi: 0 */
    Array.call(this);

    this.tree = tree;
    (ref = this).push.apply(ref, items);
  }

  if ( Array ) Selection.__proto__ = Array;
  Selection.prototype = Object.create( Array && Array.prototype );
  Selection.prototype.constructor = Selection;

  Selection.prototype.remove = function remove () {
    nodeIterator(this, 'remove');
    return this
  };

  Selection.prototype.expand = function expand () {
    nodeIterator(this, 'expand');
    return this
  };

  Selection.prototype.collapse = function collapse () {
    nodeIterator(this, 'collapse');
    return this
  };

  Selection.prototype.select = function select (extendList) {
    nodeIterator(this, 'select', extendList);
    return this
  };

  Selection.prototype.unselect = function unselect () {
    nodeIterator(this, 'unselect');
    return this
  };

  Selection.prototype.check = function check () {
    if (this.tree.options.checkbox) {
      nodeIterator(this, 'check');
    }

    return this
  };

  Selection.prototype.uncheck = function uncheck () {
    if (this.tree.options.checkbox) {
      nodeIterator(this, 'uncheck');
    }

    return this
  };

  Selection.prototype.disable = function disable () {
    nodeIterator(this, 'disable');
    return this
  };

  Selection.prototype.enable = function enable () {
    nodeIterator(this, 'enable');
    return this
  };

  return Selection;
}(Array));

var Node = function Node (tree, item) {
  if (!item) {
    throw new Error('Node can not be empty')
  }

  this.id = item.id || uuidV4();
  this.states = item.state || {};

  this.showChildren = true;
  this.children = item.children || [];
  this.parent = item.parent || null;

  this.isBatch = item.isBatch || false;
  this.isEditing = false;

  this.data = Object.assign({}, item.data || {}, {
    text: item.text
  });

  if (!tree) {
    throw new Error('Node must have a Tree context!')
  }

  this.tree = tree;
};

var prototypeAccessors = { key: { configurable: true },depth: { configurable: true },text: { configurable: true } };

Node.prototype.$emit = function $emit (evnt) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
  (ref = this.tree).$emit.apply(ref, [ ("node:" + evnt), this ].concat( args ));
};

Node.prototype.getPath = function getPath () {
  if (!this.parent) {
    return [this]
  }

  var path = [this];
  var el = this;

  while ((el = el.parent) !== null) {
    path.push(el);
  }

  return path
};

prototypeAccessors.key.get = function () {
  return this.id + this.text
};

prototypeAccessors.depth.get = function () {
  var depth = 0;
  var parent = this.parent;

  if (!parent || this.showChildren === false) {
    return depth
  }

  do {
    depth++;
  } while (parent = parent.parent)

  return depth
};

prototypeAccessors.text.get = function () {
  return this.data.text
};

prototypeAccessors.text.set = function (text) {
  var oldText = this.text;

  if (oldText !== text) {
    this.data.text = text;
    this.$emit('text:changed', text, oldText);
  }
};

Node.prototype.setData = function setData (data) {
  this.data = Object.assign({}, this.data, data);

  this.$emit('data:changed', this.data);

  return this.data
};

Node.prototype.state = function state (name, value) {
  if (undefined === value) {
    return this.states[name]
  }

  // TODO: check if it for example `selectable` state it should unselect node

  this.states[name] = value;

  return this
};

Node.prototype.recurseUp = function recurseUp (fn, node) {
    if ( node === void 0 ) node = this;

  if (!node.parent) {
    return
  }

  if (fn(node.parent) !== false) {
    return this.recurseUp(fn, node.parent)
  }
};

Node.prototype.recurseDown = function recurseDown$1 (fn, ignoreThis) {
  if (ignoreThis !== true) {
    fn(this);
  }

  if (this.hasChildren()) {
    recurseDown(this.children, fn);
  }
};

Node.prototype.refreshIndeterminateState = function refreshIndeterminateState () {
  if (!this.tree.options.autoCheckChildren) {
    return this
  }

  this.state('indeterminate', false);

  if (this.hasChildren()) {
    var childrenCount = this.children.length;
    var checked = 0;
    var indeterminate = 0;
    var disabled = 0;

    this.children.forEach(function (child) {
      if (child.checked()) {
        checked++;
      }

      if (child.disabled()) {
        disabled++;
      }

      if (child.indeterminate()) {
        indeterminate++;
      }
    });

    if (checked > 0 && checked === childrenCount - disabled) {
      if (!this.checked()) {
        this.state('checked', true);
        this.tree.check(this);

        this.$emit('checked');
      }
    } else {
      if (this.checked()) {
        this.state('checked', false);
        this.tree.uncheck(this);

        this.$emit('unchecked');
      }

      this.state(
        'indeterminate',
        indeterminate > 0 || (checked > 0 && checked < childrenCount)
      );
    }
  }

  if (this.parent) {
    this.parent.refreshIndeterminateState();
  }
};

Node.prototype.indeterminate = function indeterminate () {
  return this.state('indeterminate')
};

Node.prototype.editable = function editable () {
  return !this.state('disabled') && this.state('editable')
};

Node.prototype.selectable = function selectable () {
  return !this.state('disabled') && this.state('selectable')
};

Node.prototype.selected = function selected () {
  return this.state('selected')
};

Node.prototype.select = function select (extendList) {
  if (!this.selectable() || this.selected()) {
    return this
  }

  this.tree.select(this, extendList);

  this.state('selected', true);
  this.$emit('selected');

  return this
};

Node.prototype.unselect = function unselect () {
  if (!this.selectable() || !this.selected()) {
    return this
  }

  this.tree.unselect(this);

  this.state('selected', false);
  this.$emit('unselected');

  return this
};

Node.prototype.checked = function checked () {
  return this.state('checked')
};

Node.prototype.check = function check () {
    var this$1 = this;

  if (this.checked() || this.disabled()) {
    return this
  }

  if (this.indeterminate()) {
    return this.uncheck()
  }

  var checkDisabledChildren = this.tree.options.checkDisabledChildren;
  var targetNode = this;

  if (this.tree.options.autoCheckChildren) {
    this.recurseDown(function (node) {
      node.state('indeterminate', false);

      if (node.disabled() && !checkDisabledChildren) {
        return
      }

      if (!node.checked()) {
        this$1.tree.check(node);

        node.state('checked', true);
        node.$emit('checked', node.id === targetNode.id ? undefined : targetNode);
      }
    });

    if (this.parent) {
      this.parent.refreshIndeterminateState();
    }
  } else {
    this.tree.check(this);

    this.state('checked', true);
    this.$emit('checked');
  }

  return this
};

Node.prototype.uncheck = function uncheck () {
    var this$1 = this;

  if (!this.indeterminate() && !this.checked() || this.disabled()) {
    return this
  }

  var targetNode = this;

  if (this.tree.options.autoCheckChildren) {
    this.recurseDown(function (node) {
      node.state('indeterminate', false);

      if (node.checked()) {
        this$1.tree.uncheck(node);

        node.state('checked', false);
        node.$emit('unchecked', node.id === targetNode.id ? undefined : targetNode);
      }
    });

    if (this.parent) {
      this.parent.refreshIndeterminateState();
    }
  } else {
    this.tree.uncheck(this);

    this.state('checked', false);
    this.$emit('unchecked');
  }

  return this
};

Node.prototype.show = function show () {
  if (this.visible()) {
    return this
  }

  this.state('visible', true);
  this.$emit('shown');

  return this
};

Node.prototype.hide = function hide () {
  if (this.hidden()) {
    return this
  }

  this.state('visible', false);
  this.$emit('hidden');

  return this
};

Node.prototype.visible = function visible () {
  return this.state('visible')
};

Node.prototype.hidden = function hidden () {
  return !this.state('visible')
};

Node.prototype.enable = function enable () {
  if (this.enabled()) {
    return this
  }

  if (this.tree.options.autoDisableChildren) {
    this.recurseDown(function (node) {
      if (node.disabled()) {
        node.state('disabled', false);
        node.$emit('enabled');
      }
    });
  } else {
    this.state('disabled', false);
    this.$emit('enabled');
  }

  return this
};

Node.prototype.enabled = function enabled () {
  return !this.state('disabled')
};

Node.prototype.disable = function disable () {
  if (this.disabled()) {
    return this
  }

  if (this.tree.options.autoDisableChildren) {
    this.recurseDown(function (node) {
      if (node.enabled()) {
        node.state('disabled', true);
        node.$emit('disabled');
      }
    });
  } else {
    this.state('disabled', true);
    this.$emit('disabled');
  }

  return this
};

Node.prototype.disabled = function disabled () {
  return this.state('disabled')
};

Node.prototype.expandTop = function expandTop (ignoreEvent) {
    var this$1 = this;

  this.recurseUp(function (parent) {
    parent.state('expanded', true);

    if (ignoreEvent !== true) {
      this$1.$emit('expanded', parent);
    }
  });
};

Node.prototype.expand = function expand () {
    var this$1 = this;

  if (!this.canExpand()) {
    return this
  }

  if (this.isBatch) {
    this.tree.loadChildren(this).then(function (_) {
      this$1.state('expanded', true);
      this$1.$emit('expanded');
    });
  } else {
    this.state('expanded', true);
    this.$emit('expanded');
  }

  return this
};

Node.prototype.canExpand = function canExpand () {
  if (this.disabled() || !this.hasChildren()) {
    return false
  }

  return this.collapsed() &&
    (!this.tree.autoDisableChildren || this.disabled())
};

Node.prototype.canCollapse = function canCollapse () {
  if (this.disabled() || !this.hasChildren()) {
    return false
  }

  return this.expanded() &&
    (!this.tree.autoDisableChildren || this.disabled())
};

Node.prototype.expanded = function expanded () {
  return this.state('expanded')
};

Node.prototype.collapse = function collapse () {
  if (!this.canCollapse()) {
    return this
  }

  this.state('expanded', false);
  this.$emit('collapsed');

  return this
};

Node.prototype.collapsed = function collapsed () {
  return !this.state('expanded')
};

Node.prototype.toggleExpand = function toggleExpand () {
  return this._toggleOpenedState()
};

Node.prototype.toggleCollapse = function toggleCollapse () {
  return this._toggleOpenedState()
};

Node.prototype._toggleOpenedState = function _toggleOpenedState () {
  if (this.canCollapse()) {
    return this.collapse()
  } else if (this.canExpand()) {
    return this.expand()
  }
};

Node.prototype.isDropable = function isDropable () {
  return this.enabled() && this.state('dropable')
};

Node.prototype.isDraggable = function isDraggable () {
  return this.enabled() && this.state('draggable') && !this.isEditing
};

Node.prototype.startDragging = function startDragging () {
  if (!this.isDraggable() || this.state('dragging')) {
    return false
  }

  // root element
  if (this.isRoot() && this.tree.model.length === 1) {
    return false
  }

  if (this.tree.options.store) {
    this.tree.__silence = true;
  }

  this.select();
  this.state('dragging', true);
  this.$emit('dragging:start');

  this.tree.__silence = false;

  return true
};

Node.prototype.finishDragging = function finishDragging (destination, destinationPosition) {
  if (!destination.isDropable() && destinationPosition === 'drag-on') {
    return
  }

  var tree = this.tree;
  var clone = this.clone();
  var parent = this.parent;

  clone.id = this.id;
  tree.__silence = true;

  this.remove();

  if (destinationPosition === 'drag-on') {
    tree.append(destination, clone);
  } else if (destinationPosition === 'drag-below') {
    tree.after(destination, clone);
  } else if (destinationPosition === 'drag-above') {
    tree.before(destination, clone);
  }

  destination.refreshIndeterminateState();

  parent && parent.refreshIndeterminateState();
  tree.__silence = false;

  clone.state('dragging', false);
  this.state('dragging', false);
  // need to call emit on the clone, because we need to have node.parent filled in the event listener
  clone.$emit('dragging:finish', destination, destinationPosition);

  if (clone.state('selected')) {
    tree.selectedNodes.remove(this);
    tree.selectedNodes.add(clone);

    tree.vm.$set(this.state, 'selected', false);
    tree.vm.$set(clone.state, 'selected', true);
  }

  if (this.tree.options.store) {
    this.tree.vm.$emit('LIQUOR_NOISE');
  }
};

Node.prototype.startEditing = function startEditing () {
  if (this.disabled()) {
    return false
  }

  if (!this.isEditing) {
    this.tree._editingNode = this;
    this.tree.activeElement = this;
    this.isEditing = true;
    this.$emit('editing:start');
  }
};

Node.prototype.stopEditing = function stopEditing (newText) {
  if (!this.isEditing) {
    return
  }

  this.isEditing = false;
  this.tree._editingNode = null;
  this.tree.activeElement = null;

  var prevText = this.text;

  if (newText && newText !== false && this.text !== newText) {
    this.text = newText;
  }

  this.$emit('editing:stop', prevText);
};

Node.prototype.index = function index (verbose) {
  return this.tree.index(this, verbose)
};

Node.prototype.first = function first () {
  if (!this.hasChildren()) {
    return null
  }

  return this.children[0]
};

Node.prototype.last = function last () {
  if (!this.hasChildren()) {
    return null
  }

  return this.children[this.children.length - 1]
};

Node.prototype.next = function next () {
  return this.tree.nextNode(this)
};

Node.prototype.prev = function prev () {
  return this.tree.prevNode(this)
};

Node.prototype.insertAt = function insertAt (node, index) {
    var this$1 = this;
    if ( index === void 0 ) index = this.children.length;

  if (!node) {
    return
  }

  node = this.tree.objectToNode(node);

  if (Array.isArray(node)) {
    node
      .reverse()
      .map(function (n) { return this$1.insertAt(n, index); });

    return new Selection(this.tree, [].concat( node ))
  }

  node.parent = this;

  this.children.splice(
    index, 0, node
  );

  if (node.disabled() && node.hasChildren()) {
    node.recurseDown(function (child) {
      child.state('disabled', true);
    });
  }

  if (!this.isBatch) {
    this.$emit('added', node);
  }

  return node
};

Node.prototype.addChild = function addChild (node) {
  return this.insertAt(node)
};

Node.prototype.append = function append (node) {
  return this.addChild(node)
};

Node.prototype.prepend = function prepend (node) {
  return this.insertAt(node, 0)
};

Node.prototype.before = function before (node) {
  return this.tree.before(this, node)
};

Node.prototype.after = function after (node) {
  return this.tree.after(this, node)
};

Node.prototype.empty = function empty () {
  var node;

  while (node = this.children.pop()) {
    node.remove();
  }

  return this
};

Node.prototype.remove = function remove () {
  return this.tree.removeNode(this)
};

Node.prototype.removeChild = function removeChild (criteria) {
  var node = this.find(criteria);

  if (node) {
    return this.tree.removeNode(node)
  }

  return null
};

Node.prototype.find = function find$1 (criteria, deep) {
  if (this.tree.isNode(criteria)) {
    return criteria
  }

  return find(this.children, criteria, deep)
};

Node.prototype.focus = function focus () {
  if (this.vm) {
    this.vm.focus();
  }
};

Node.prototype.hasChildren = function hasChildren () {
  return this.showChildren && this.isBatch || this.children.length > 0
};

/**
* Sometimes it's no need to have a parent. It possible to have more than 1 parent
*/
Node.prototype.isRoot = function isRoot () {
  return this.parent === null
};

Node.prototype.clone = function clone () {
  return this.tree.objectToNode(this.toJSON())
};

Node.prototype.toJSON = function toJSON () {
    var this$1 = this;

  return {
    text: this.text,
    data: this.data,
    state: this.states,
    children: this.children.map(function (node) { return this$1.tree.objectToNode(node).toJSON(); })
  }
};

Object.defineProperties( Node.prototype, prototypeAccessors );

/**
* Default Node's states
*/
var nodeStates = {
  selected: false,
  selectable: true,
  checked: false,
  expanded: false,
  disabled: false,
  visible: true,
  indeterminate: false,
  matched: false,
  editable: true,
  dragging: false,
  draggable: true,
  dropable: true
};

function merge (state) {
  if ( state === void 0 ) state = {};

  return Object.assign({}, nodeStates, state)
}

function objectToNode (tree, obj) {
  var node = null;

  if (obj instanceof Node) {
    return obj
  }

  if (typeof obj === 'string') {
    node = new Node(tree, {
      text: obj,
      state: merge(),
      id: uuidV4()
    });
  } else if (Array.isArray(obj)) {
    return obj.map(function (o) { return objectToNode(tree, o); })
  } else {
    node = new Node(tree, obj);
    node.states = merge(node.states);

    if (!node.id) {
      node.id = uuidV4();
    }

    if (node.children.length) {
      node.children = node.children.map(function (child) {
        child = objectToNode(tree, child);
        child.parent = node;

        return child
      });
    }
  }

  return node
}

var List = /*@__PURE__*/(function (Array) {
  function List () {
    Array.apply(this, arguments);
  }

  if ( Array ) List.__proto__ = Array;
  List.prototype = Object.create( Array && Array.prototype );
  List.prototype.constructor = List;

  List.prototype.empty = function empty () {
    this.splice(0, this.length);

    return this
  };

  List.prototype.has = function has (item) {
    return this.includes(item)
  };

  List.prototype.add = function add () {
    var ref;

    var items = [], len = arguments.length;
    while ( len-- ) items[ len ] = arguments[ len ];
    (ref = this).push.apply(ref, items);

    return this
  };

  List.prototype.remove = function remove (item) {
    var index = this.indexOf(item);

    if (index === -1) {
      return this
    }

    this.splice(index, 1);

    return this
  };

  List.prototype.removeAll = function removeAll (item) {
    while (this.includes(item)) {
      this.remove(item);
    }

    return this
  };

  List.prototype.top = function top () {
    return this[this.length - 1]
  };

  return List;
}(Array));

/**
  Every Node has certain format:
  {
    id,           // Unique Node id. By default it generates using uuidV4
    text,         // Node text
    children,     // List of children. Each children has the same format
    parent,       // Parent Node or null. The tree is able to have more than 1 root node
    state,        // States of Node. Ex.: selected, checked and so on
    data          // Any types of data. It is similar to `storage`.
                  // Ex.: data: {myAwesomeProperty: 10}. To get this property you need: Node.data('myAwesomeProperty')
  }
*/

var defaultPropertyNames = {
  id: 'id',
  text: 'text',
  children: 'children',
  state: 'state',
  data: 'data',
  isBatch: 'isBatch'
};

function convertNames (obj, names) {
  return {
    id: obj[names.id],
    text: obj[names.text],
    children: obj[names.children],
    state: obj[names.state],
    data: obj[names.data],
    isBatch: obj[names.isBatch]
  }
}

var TreeParser = {
  parse: function parse (data, tree, options) {
    if ( options === void 0 ) options = {};

    if (typeof data === 'string') {
      data = JSON.parse(data);
    }

    if (!Array.isArray(data)) {
      data = [data];
    }

    var p = Object.assign(
      {},
      defaultPropertyNames,
      options
    );

    var preparedItems = data.map(function converter (item) {
      var convertedItem = convertNames(item, p);

      // Possible to receive 1 child like a simple object. It must be converted to an array
      // We do not have checks on the correctness of the format. A developer should pass correct format
      if (convertedItem.children && !Array.isArray(convertedItem.children)) {
        convertedItem.children = [convertedItem.children];
      }

      if (convertedItem.children) {
        convertedItem.children = convertedItem.children.map(converter);
      }

      return convertedItem
    });

    return preparedItems.map(function (item) { return objectToNode(tree, item); })
  }
};

/*eslint no-undef: 0 */

function request (url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.addEventListener('load', function (_) {
      try {
        var response = JSON.parse(xhr.response);

        resolve(response);
      } catch (e) {
        reject(e);
      }    });

    xhr.send(null);
  })
}

function get (url) {
  return request(url)
}

function createTemplate (template) {
  return function (source) {
    var re = /{([^}]+)}/;
    var m;
    var result = template;

    while (m = re.exec(result)) {
      result = result.replace(m[0], source[m[1]]);
    }

    return result
  }
}

function orderAsc (node0, node1) {
  if (node0.text < node1.text) {
    return -1
  }

  if (node0.text > node1.text) {
    return 1
  }

  return 0
}

function orderDesc (node0, node1) {
  if (node0.text < node1.text) {
    return 1
  }

  if (node0.text > node1.text) {
    return -1
  }

  return 0
}

function getCompareFunction (order) {
  switch (order.toLowerCase()) {
    case 'asc': return orderAsc
    case 'desc': return orderDesc
  }
}

function sort (source, compareFunction) {
  if (typeof compareFunction === 'string') {
    compareFunction = getCompareFunction(compareFunction);
  }

  if (Array.isArray(source) && typeof compareFunction === 'function') {
    source.sort(compareFunction);
  }
}

function fetchDelay (ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  })
}

var Tree = function Tree (vm) {
  var this$1 = this;

  this.vm = vm;
  this.options = vm.opts;

  this.activeElement = null;

  // We have to convert 'fetchData' to function. It must return Promise always
  var fetchData = this.options.fetchData;

  if (typeof fetchData === 'string') {
    this.options.fetchData = (function (template) {
      var urlTemplate = createTemplate(template);

      return function (node) {
        return get(urlTemplate(node)).catch(this$1.options.onFetchError)
      }
    })(fetchData);
  }
};

Tree.prototype.$on = function $on (name) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
  (ref = this.vm).$on.apply(ref, [ name ].concat( args ));
};

Tree.prototype.$once = function $once (name) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
  (ref = this.vm).$once.apply(ref, [ name ].concat( args ));
};

Tree.prototype.$off = function $off (name) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
  (ref = this.vm).$off.apply(ref, [ name ].concat( args ));
};

Tree.prototype.$emit = function $emit (name) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
  if (this.__silence) {
    return
  }

  (ref = this.vm).$emit.apply(ref, [ name ].concat( args ));

  if (this.options.store) {
    this.vm.$emit('LIQUOR_NOISE');
  }
};

Tree.prototype._sort = function _sort (source, compareFn, deep) {
  if (deep !== false) {
    this.recurseDown(source, function (node) {
      if (node.hasChildren()) {
        sort(node.children, compareFn);
      }
    });
  }

  sort(source, compareFn);
};

Tree.prototype.sortTree = function sortTree (compareFn, deep) {
  this._sort(this.model, compareFn, deep);
};

Tree.prototype.sort = function sort$$1 (query, compareFn, deep) {
    var this$1 = this;

  var targetNode = this.find(query, true);

  if (!targetNode || !compareFn) {
    return
  }

  targetNode.forEach(function (node) {
    this$1._sort(node.children, compareFn, deep);
  });
};

Tree.prototype.clearFilter = function clearFilter () {
  this.recurseDown(function (node) {
    node.state('matched', false);
    node.state('visible', true);
    node.state('expanded', node.__expanded);

    node.__expanded = undefined;
    node.showChildren = true;
  });

  this.vm.matches.length = 0;
  this.vm.$emit('tree:filtered', [], '');
};

Tree.prototype.filter = function filter (query) {
  if (!query) {
    return this.clearFilter()
  }

  var matches = [];
  var predicate = this.options.filter.matcher;
  var ref = this.options.filter;
    var showChildren = ref.showChildren;
    var plainList = ref.plainList;

  // collect nodes
  this.recurseDown(function (node) {
    if (predicate(query, node)) {
      matches.push(node);
    }

    node.showChildren = true;

    // save prev `expanded` state
    if (undefined === node.__expanded) {
      node.__expanded = node.state('expanded');
    }

    node.state('visible', false);
    node.state('matched', false);
    node.state('expanded', true);
  });

  matches.reverse().forEach(function (node) {
    node.state('matched', true);
    node.state('visible', true);

    node.showChildren = !plainList;

    if (node.hasChildren()) {
      node.recurseDown(function (n) {
        n.state('visible', !!showChildren);
      }, true);
    }

    node.recurseUp(function (parent) {
      parent.state('visible', true);
      parent.state('expanded', true);
    });

    if (node.hasChildren()) {
      node.state('expanded', false);
    }
  });

  this.vm.matches = matches;

  this.vm.$emit('tree:filtered', matches, query);

  return matches
};

Tree.prototype.selected = function selected () {
  return new (Function.prototype.bind.apply( Selection, [ null ].concat( [this], this.selectedNodes) ))
};

Tree.prototype.checked = function checked () {
  if (!this.options.checkbox) {
    return null
  }

  return new (Function.prototype.bind.apply( Selection, [ null ].concat( [this], this.checkedNodes) ))
};

Tree.prototype.loadChildren = function loadChildren (node) {
    var this$1 = this;

  if (!node) {
    return
  }

  this.$emit('tree:data:fetch', node);

  if (this.options.minFetchDelay > 0 && node.vm) {
    node.vm.loading = true;
  }

  var result = this.fetch(node)
    .then(function (children) {
      node.append(children);
      node.isBatch = false;

      if (this$1.options.autoCheckChildren) {
        if (node.checked()) {
          node.recurseDown(function (child) {
            child.state('checked', true);
          });
        }

        node.refreshIndeterminateState();
      }

      this$1.$emit('tree:data:received', node);
    });

  return Promise.all([
    fetchDelay(this.options.minFetchDelay),
    result
  ]).then(function (_) {
    if (node.vm) {
      node.vm.loading = false;
    }

    return result
  })
};

Tree.prototype.fetch = function fetch (node, parseData) {
    var this$1 = this;

  var result = this.options.fetchData(node);

  if (!result.then) {
    result = get(result)
      .catch(this.options.onFetchError);
  }

  if (parseData === false) {
    return result
  }

  return result
    .then(function (data) {
      try {
        return this$1.parse(data, this$1.options.modelParse)
      } catch (e) {
        throw new Error(e)
      }
    })
    .catch(this.options.onFetchError)
};

Tree.prototype.fetchInitData = function fetchInitData () {
  // simulate root node
  var node = {
    id: 'root',
    name: 'root'
  };

  return this.fetch(node, false)
};

Tree.prototype.setModel = function setModel (data) {
    var this$1 = this;

  return new Promise(function (resolve) {
    this$1.model = this$1.parse(data, this$1.options.modelParse);

    /* eslint-disable */
    requestAnimationFrame(function (_) {
      this$1.vm.model = this$1.model;
      resolve();
    });
    /* eslint-enable */

    /**
    * VueJS transform properties to reactives when constructor is running
    * And we lose List object (extended from Array)
    */
    this$1.selectedNodes = new List();
    this$1.checkedNodes = new List();

    recurseDown(this$1.model, function (node) {
      node.tree = this$1;

      if (node.selected()) {
        this$1.selectedNodes.add(node);
      }

      if (node.checked()) {
        this$1.checkedNodes.add(node);

        if (node.parent) {
          node.parent.refreshIndeterminateState();
        }
      }

      if (this$1.options.autoDisableChildren && node.disabled()) {
        node.recurseDown(function (child) {
          child.state('disabled', true);
        });
      }
    });

    if (!this$1.options.multiple && this$1.selectedNodes.length) {
      var top = this$1.selectedNodes.top();

      this$1.selectedNodes.forEach(function (node) {
        if (top !== node) {
          node.state('selected', false);
        }
      });

      this$1.selectedNodes
        .empty()
        .add(top);
    }

    // Nodes can't be selected on init. By it's possible to select through API
    if (this$1.options.checkOnSelect && this$1.options.checkbox) {
      this$1.unselectAll();
    }
  })
};

Tree.prototype.recurseDown = function recurseDown$1 (node, fn) {
  if (!fn && node) {
    fn = node;
    node = this.model;
  }

  return recurseDown(node, fn)
};

Tree.prototype.select = function select (node, extendList) {
  var treeNode = this.getNode(node);

  if (!treeNode) {
    return false
  }

  if (this.options.multiple && extendList) {
    this.selectedNodes.add(treeNode);
  } else {
    this.unselectAll();
    this.selectedNodes
      .empty()
      .add(treeNode);
  }

  return true
};

Tree.prototype.selectAll = function selectAll () {
    var this$1 = this;

  if (!this.options.multiple) {
    return false
  }

  this.selectedNodes.empty();

  this.recurseDown(function (node) {
    this$1.selectedNodes.add(
      node.select(true)
    );
  });

  return true
};

Tree.prototype.unselect = function unselect (node) {
  var treeNode = this.getNode(node);

  if (!treeNode) {
    return false
  }

  this.selectedNodes.remove(treeNode);

  return true
};

Tree.prototype.unselectAll = function unselectAll () {
  var node;

  while (node = this.selectedNodes.pop()) {
    node.unselect();
  }

  return true
};

Tree.prototype.check = function check (node) {
  this.checkedNodes.add(node);
};

Tree.prototype.uncheck = function uncheck (node) {
  this.checkedNodes.remove(node);
};

Tree.prototype.checkAll = function checkAll () {
  this.recurseDown(function (node) {
    if (node.depth === 0) {
      if (node.indeterminate()) {
        node.state('indeterminate', false);
      }

      node.check();
    }
  });
};

Tree.prototype.uncheckAll = function uncheckAll () {
  var node;

  while (node = this.checkedNodes.pop()) {
    node.uncheck();
  }

  return true
};

Tree.prototype.expand = function expand (node) {
  if (node.expanded()) {
    return false
  }

  node.expand();

  return true
};

Tree.prototype.collapse = function collapse (node) {
  if (node.collapsed()) {
    return false
  }

  node.collapse();

  return true
};

Tree.prototype.toggleExpand = function toggleExpand (node) {
  if (!node.hasChildren()) {
    return false
  }

  node.toggleExpand();

  return true
};

Tree.prototype.toggleCollapse = function toggleCollapse (node) {
  if (!node.hasChildren()) {
    return false
  }

  node.toggleCollapse();

  return true
};

Tree.prototype.expandAll = function expandAll () {
  this.recurseDown(function (node) {
    if (node.hasChildren() && node.collapsed()) {
      node.expand();
    }
  });
};

Tree.prototype.collapseAll = function collapseAll () {
  this.recurseDown(function (node) {
    if (node.hasChildren() && node.expanded()) {
      node.collapse();
    }
  });
};

Tree.prototype.index = function index (node, verbose) {
  var target = node.parent;

  if (target) {
    target = target.children;
  } else {
    target = this.model;
  }

  var index = target.indexOf(node);

  if (verbose) {
    return {
      index: index,
      target: target,
      node: target[index]
    }
  }

  return index
};

Tree.prototype.nextNode = function nextNode (node) {
  var ref = this.index(node, true);
    var target = ref.target;
    var index = ref.index;

  return target[index + 1] || null
};

Tree.prototype.nextVisibleNode = function nextVisibleNode (node) {
  if (node.hasChildren() && node.expanded()) {
    return node.first()
  }

  var nextNode = this.nextNode(node);

  if (!nextNode && node.parent) {
    return node.parent.next()
  }

  return nextNode
};

Tree.prototype.prevNode = function prevNode (node) {
  var ref = this.index(node, true);
    var target = ref.target;
    var index = ref.index;

  return target[index - 1] || null
};

Tree.prototype.prevVisibleNode = function prevVisibleNode (node) {
  var prevNode = this.prevNode(node);

  if (!prevNode) {
    return node.parent
  }

  if (prevNode.hasChildren() && prevNode.expanded()) {
    return prevNode.last()
  }

  return prevNode
};

Tree.prototype.addToModel = function addToModel (node, index) {
    var this$1 = this;
    if ( index === void 0 ) index = this.model.length;

  node = this.objectToNode(node);

  this.model.splice(index, 0, node);
  this.recurseDown(node, function (n) {
    n.tree = this$1;
  });

  this.$emit('node:added', node);

  return node
};

Tree.prototype.append = function append (criteria, node) {
  var targetNode = this.find(criteria);

  if (targetNode) {
    return targetNode.append(node)
  }

  return false
};

Tree.prototype.prepend = function prepend (criteria, node) {
  var targetNode = this.find(criteria);

  if (targetNode) {
    return targetNode.prepend(node)
  }

  return false
};

Tree.prototype.before = function before (targetNode, sourceNode) {
  targetNode = this.find(targetNode);

  var position = this.index(targetNode, true);
  var node = this.objectToNode(sourceNode);

  if (!~position.index) {
    return false
  }

  position.target.splice(
    position.index,
    0,
    node
  );

  node.parent = targetNode.parent;
  this.$emit('node:added', node);

  return node
};

Tree.prototype.after = function after (targetNode, sourceNode) {
  targetNode = this.find(targetNode);

  var position = this.index(targetNode, true);
  var node = this.objectToNode(sourceNode);

  if (!~position.index) {
    return false
  }

  position.target.splice(
    position.index + 1,
    0,
    node
  );

  node.parent = targetNode.parent;
  this.$emit('node:added', node);

  return node
};

Tree.prototype.addNode = function addNode (node) {
  var index = this.model.length;

  node = objectToNode(node);

  this.model.splice(index, 0, node);
  this.$emit('node:added', node);

  return node
};

Tree.prototype.remove = function remove (criteria, multiple) {
  return this.removeNode(
    this.find(criteria, multiple)
  )
};

Tree.prototype.removeNode = function removeNode (node) {
  if (node instanceof Selection) {
    return node.remove()
  }

  if (!node) {
    return false
  }

  if (!node.parent) {
    if (~this.model.indexOf(node)) {
      this.model.splice(
        this.model.indexOf(node),
        1
      );
    }
  } else {
    var children = node.parent.children;

    if (~children.indexOf(node)) {
      children.splice(
        children.indexOf(node),
        1
      );
    }
  }

  if (node.parent) {
    if (node.parent.indeterminate() && !node.parent.hasChildren()) {
      node.parent.state('indeterminate', false);
    }
  }

  if (this.activeElement !== null) {
    if (node.id === this.activeElement.id) {
      this.activeElement = null;
    }
  }

  node.parent = null;

  this.$emit('node:removed', node);

  this.selectedNodes.remove(node);
  this.checkedNodes.remove(node);

  var matches = this.vm.matches;

  if (matches && matches.length) {
    if (matches.includes(node)) {
      matches.splice(
        matches.indexOf(node),
        1
      );
    }
  }

  return node
};

Tree.prototype.isNode = function isNode (node) {
  return node instanceof Node
};

Tree.prototype.find = function find$1 (criteria, multiple) {
  if (this.isNode(criteria)) {
    return criteria
  }

  var result = find(this.model, criteria);

  if (!result || !result.length) {
    return new Selection(this, [])
  }

  if (multiple === true) {
    return new Selection(this, result)
  }

  return new Selection(this, [result[0]])
};

Tree.prototype.updateData = function updateData (criteria, callback) {
  var nodes = this.find(criteria);

  nodes.forEach(function (node) { return node.setData(callback(node)); });

  return nodes
};

Tree.prototype.getNodeById = function getNodeById (id) {
  var targetNode = null;

  recurseDown(this.model, function (node) {
    if ('' + node.id === id) {
      targetNode = node;
      return false
    }
  });

  return targetNode
};

Tree.prototype.getNode = function getNode (node) {
  if (this.isNode(node)) {
    return node
  }

  return null
};

Tree.prototype.objectToNode = function objectToNode$1 (obj) {
  return objectToNode(this, obj)
};

Tree.prototype.parse = function parse (data, options) {
  if (!options) {
    options = this.options.propertyNames;
  }

  try {
    return TreeParser.parse(data, this, options)
  } catch (e) {
    return []
  }
};

var keyCodes = {
  'ARROW_LEFT': 37,
  'ARROW_TOP': 38,
  'ARROW_RIGHT': 39,
  'ARROW_BOTTOM': 40,
  'SPACE': 32,
  'DELETE': 46,
  'ENTER': 13,
  'ESC': 27
};

var codesArr = [37, 38, 39, 40, 32];

function focusUp (tree, node) {
  var prevNode = tree.prevVisibleNode(node);

  if (!prevNode) {
    return
  }

  if (prevNode.disabled()) {
    return focusUp(tree, prevNode)
  }

  prevNode.focus();
}

function focusdDown (tree, node) {
  var nextNode = tree.nextVisibleNode(node);

  if (!nextNode) {
    return
  }

  if (nextNode.disabled()) {
    return focusdDown(tree, nextNode)
  }

  nextNode.focus();
}

function checkNode (tree, node) {
  if (!tree.options.checkbox) {
    return
  }

  if (node.checked()) {
    node.uncheck();
  } else {
    node.check();
  }
}

function leftArrow (tree, node) {
  if (node.expanded()) {
    node.collapse();
  } else {
    var parent = node.parent;

    if (parent) {
      parent.focus();
    }
  }
}

function rightArrow (tree, node) {
  if (node.collapsed()) {
    node.expand();
  } else {
    var first = node.first();

    if (first) {
      first.focus();
    }
  }
}

function deleteNode (tree, node) {
  var deletion = tree.options.deletion;

  if (deletion) {
    if (typeof deletion === 'function') {
      if (deletion(node) === true) {
        node.remove();
      }
    } else if (deletion === true) {
      node.remove();
    }
  }
}

function initKeyboardNavigation (tree) {
  var vm = tree.vm;
  var $el = vm.$el;

  $el.addEventListener('keydown', function (e) {
    var code = e.keyCode;
    var node = tree.activeElement;

    if (!tree.isNode(node)) {
      return
    }

    if (node.isEditing) {
      switch (code) {
        case keyCodes.ESC: return node.stopEditing(false)
      }
    } else {
      if (codesArr.includes(code)) {
        e.preventDefault();
        e.stopPropagation();
      }

      switch (code) {
        case keyCodes.ARROW_LEFT: return leftArrow(tree, node)
        case keyCodes.ARROW_RIGHT: return rightArrow(tree, node)
        case keyCodes.ARROW_TOP: return focusUp(tree, node)
        case keyCodes.ARROW_BOTTOM: return focusdDown(tree, node)
        case keyCodes.SPACE:
        case keyCodes.ENTER: return checkNode(tree, node)
        case keyCodes.DELETE: return deleteNode(tree, node)
      }
    }
  }, true);
}

function assert (truth, message) {
  if (truth === false) {
    throw new Error(message)
  }
}

function initEvents (vm) {
  var ref = vm.opts;
  var multiple = ref.multiple;
  var checkbox = ref.checkbox;
  var tree = vm.tree;

  var emitter = function (obj) {
    var selected = vm.selected();

    if (!checkbox) {
      vm.$emit('input', multiple ? selected : (selected[0] || null));
    } else {
      vm.$emit('input', {
        selected: multiple ? selected : (selected[0] || null),
        checked: vm.checked()
      });
    }
  };

  emitter();

  tree.$on('node:selected', emitter);
  tree.$on('node:unselected', emitter);

  if (checkbox) {
    tree.$on('node:checked', emitter);
    tree.$on('node:unchecked', emitter);
  }

  tree.$on('node:added', function (targetNode, newNode) {
    var node = newNode || targetNode;

    if (checkbox) {
      if (node.state('checked') && !tree.checkedNodes.has(node)) {
        tree.checkedNodes.add(node);
      }

      node.refreshIndeterminateState();
    }

    if (node.state('selected') && !tree.selectedNodes.has(node)) {
      tree.select(node);
    }

    emitter();
  });
}

var TreeMixin = {
  mounted: function mounted () {
    var this$1 = this;

    var tree = new Tree(this);
    var dataProvider;

    this.tree = tree;
    this._provided.tree = tree;

    if (!this.data && this.opts.fetchData) {
      // Get initial data if we don't have a data directly
      // In this case we call 'fetcher' with node.id == 'root' && node.name == 'root'
      dataProvider = tree.fetchInitData();
    } else if (this.data && this.data.then) {
      // Yeah... nice check!
      dataProvider = this.data;
      this.loading = true;
    } else {
      dataProvider = Promise.resolve(this.data);
    }

    dataProvider.then(function (data) {
      if (!data) {
        data = [];
      }

      if (this$1.opts.store) {
        this$1.connectStore(this$1.opts.store);
      } else {
        this$1.tree.setModel(data);
      }

      if (this$1.loading) {
        this$1.loading = false;
      }

      this$1.$emit('tree:mounted', this$1);

      initEvents(this$1);
    });

    if (this.opts.keyboardNavigation !== false) {
      initKeyboardNavigation(tree);
    }
  },

  methods: {
    connectStore: function connectStore (store) {
      var this$1 = this;

      var Store = store.store;
      var mutations = store.mutations;
      var getter = store.getter;
      var dispatcher = store.dispatcher;

      assert(typeof getter === 'function', '`getter` must be a function');
      assert(typeof dispatcher === 'function', '`dispatcher` must be a function');

      if (undefined !== mutations) {
        assert(Array.isArray(mutations), '`mutations` must be an array');
      }

      Store.subscribe(function (action, state) {
        if (!mutations) {
          this$1.tree.setModel(getter());
        } else if (mutations.includes(action.type)) {
          this$1.tree.setModel(getter());
        }
      });

      this.tree.setModel(getter());

      this.$on('LIQUOR_NOISE', function () {
        this$1.$nextTick(function (_) {
          dispatcher(this$1.toJSON());
        });
      });
    },

    recurseDown: function recurseDown (fn) {
      this.tree.recurseDown(fn);
    },

    selected: function selected () {
      return this.tree.selected()
    },

    checked: function checked () {
      return this.tree.checked()
    },

    append: function append (criteria, node) {
      // append to model
      if (!node) {
        return this.tree.addToModel(criteria, this.tree.model.length)
      }

      return this.tree.append(criteria, node)
    },

    prepend: function prepend (criteria, node) {
      if (!node) {
        return this.tree.addToModel(criteria, 0)
      }

      return this.tree.prepend(criteria, node)
    },

    addChild: function addChild (criteria, node) {
      return this.append(criteria, node)
    },

    remove: function remove (criteria, multiple) {
      return this.tree.remove(criteria, multiple)
    },

    before: function before (criteria, node) {
      if (!node) {
        return this.prepend(criteria)
      }

      return this.tree.before(criteria, node)
    },

    after: function after (criteria, node) {
      if (!node) {
        return this.append(criteria)
      }

      return this.tree.after(criteria, node)
    },

    find: function find (criteria, multiple) {
      return this.tree.find(criteria, multiple)
    },

    findAll: function findAll (criteria) {
      return this.tree.find(criteria, true)
    },

    expandAll: function expandAll () {
      return this.tree.expandAll()
    },

    updateData: function updateData (criteria, callback) {
      return this.tree.updateData(criteria, callback)
    },

    collapseAll: function collapseAll () {
      return this.tree.collapseAll()
    },

    sortTree: function sortTree (compareFn, deep) {
      return this.tree.sortTree(compareFn, deep)
    },

    sort: function sort () {
      var ref;

      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];
      return (ref = this.tree).sort.apply(ref, args)
    },

    setModel: function setModel (data) {
      return this.tree.setModel(data)
    },

    getRootNode: function getRootNode () {
      return this.tree.model.length === 1
        ? this.tree.model[0]
        : this.tree.model
    },

    toJSON: function toJSON () {
      return JSON.parse(
        JSON.stringify(this.model)
      )
    }
  }

/*eslint semi: 0 */
/* https://github.com/vuejs/rollup-plugin-vue/issues/169 */
};

var DropPosition = {
  ABOVE: 'drag-above',
  BELOW: 'drag-below',
  ON: 'drag-on'
};

function isMovingStarted (event, start) {
  return Math.abs(event.clientX - start[0]) > 5 || Math.abs(event.clientY - start[1]) > 5
}

function composedPath (event) {
  var el = event.target;
  var path = [];

  while (el) {
    path.push(el);

    if (el.tagName === 'HTML') {
      path.push(document);
      path.push(window);

      return path
    }

    el = el.parentElement;
  }

  return path
}

function getPath (event) {
  if (event.path) {
    return event.path
  }

  if (event.composedPath) {
    return event.composedPath()
  }

  return composedPath(event)
}

function getSelectedNode (event) {
  var className;
  var i = 0;

  var path = getPath(event);

  for (; i < path.length; i++) {
    className = path[i].className || '';

    if (/tree-node/.test(className)) {
      return path[i]
    }
  }

  return null
}

function getDropDestination (e) {
  var selectedNode = getSelectedNode(e);

  if (!selectedNode) {
    return null
  }

  return selectedNode
}

function updateHelperClasses (target, classes) {
  if (!target) {
    return
  }

  var className = target.className;

  if (!classes) {
    for (var i in DropPosition) {
      className = className.replace(DropPosition[i], '');
    }

    className.replace('dragging', '');
  } else if (!new RegExp(classes).test(className)) {
    className += ' ' + classes;
  }

  target.className = className.replace(/\s+/g, ' ');
}

function getDropPosition (e, element) {
  var coords = element.getBoundingClientRect();
  var nodeSection = coords.height / 3;

  var dropPosition = DropPosition.ON;

  if (coords.top + nodeSection >= e.clientY) {
    dropPosition = DropPosition.ABOVE;
  } else if (coords.top + nodeSection * 2 <= e.clientY) {
    (
      dropPosition = DropPosition.BELOW
    );
  }

  return dropPosition
}

function callDndCb (args, opts, method) {
  if (!opts || !opts[method] || typeof opts[method] !== 'function') {
    return
  }

  return opts[method].apply(opts, args) !== false
}

function clearDropClasses (parent) {
  for (var key in DropPosition) {
    var el = parent.querySelectorAll(("." + (DropPosition[key])));

    for (var i = 0; i < el.length; i++) {
      updateHelperClasses(el[i]);
    }
  }
}

var TreeDnd = {
  methods: {
    onDragStart: function onDragStart (e) {
      e.preventDefault();
    },

    startDragging: function startDragging (node, event) {
      if (!node.isDraggable() || callDndCb([node], this.tree.options.dnd, 'onDragStart') === false) {
        return
      }

      this.$$startDragPosition = [event.clientX, event.clientY];
      this.$$possibleDragNode = node;

      this.initDragListeners();
    },

    initDragListeners: function initDragListeners () {
      var this$1 = this;

      var dropPosition;

      var removeListeners = function () {
        window.removeEventListener('mouseup', onMouseUp, true);
        window.removeEventListener('mousemove', onMouseMove, true);
      };

      var onMouseUp = function (e) {
        if (!this$1.$$startDragPosition) {
          e.stopPropagation();
        }

        if (this$1.draggableNode) {
          this$1.draggableNode.node.state('dragging', false);
        }

        if (this$1.$$dropDestination && this$1.tree.isNode(this$1.$$dropDestination) && this$1.$$dropDestination.vm) {
          updateHelperClasses(this$1.$$dropDestination.vm.$el, null);

          var cbResult = callDndCb(
            [this$1.draggableNode.node, this$1.$$dropDestination, dropPosition],
            this$1.tree.options.dnd,
            'onDragFinish'
          );

          if (cbResult !== false && !(!this$1.$$dropDestination.isDropable() && dropPosition === DropPosition.ON || !dropPosition)) {
            this$1.draggableNode.node.finishDragging(this$1.$$dropDestination, dropPosition);
            this$1.draggableNode.node.parent = this$1.$$dropDestination;
          }

          this$1.$$dropDestination = null;
        }

        this$1.$$possibleDragNode = null;
        this$1.$set(this$1, 'draggableNode', null);

        removeListeners();
      };

      var onMouseMove = function (e) {
        if (this$1.$$startDragPosition && !isMovingStarted(e, this$1.$$startDragPosition)) {
          return
        } else {
          this$1.$$startDragPosition = null;
        }

        if (this$1.$$possibleDragNode) {
          if (this$1.$$possibleDragNode.startDragging() === false) {
            removeListeners();
            this$1.$$possibleDragNode = null;

            return
          }

          this$1.$set(this$1, 'draggableNode', { node: this$1.$$possibleDragNode, left: 0, top: 0 });
          this$1.$$possibleDragNode = null;
        }

        this$1.draggableNode.left = e.clientX;
        this$1.draggableNode.top = e.clientY;

        var dropDestination = getDropDestination(e);

        clearDropClasses(this$1.$el);

        if (dropDestination) {
          var dropDestinationId = dropDestination.getAttribute('data-id');

          if (this$1.draggableNode.node.id === dropDestinationId) {
            return
          }

          if (!this$1.$$dropDestination || this$1.$$dropDestination.id !== dropDestinationId) {
            this$1.$$dropDestination = this$1.tree.getNodeById(dropDestinationId);
          }

          if (this$1.$$dropDestination && this$1.draggableNode.node) {
            var path = this$1.$$dropDestination.getPath();

            if (path.includes(this$1.draggableNode.node)) {
              this$1.$$dropDestination = null;
              return
            }
          }

          dropPosition = getDropPosition(e, dropDestination);

          var cbResult = callDndCb(
            [this$1.draggableNode.node, this$1.$$dropDestination, dropPosition],
            this$1.tree.options.dnd,
            'onDragOn'
          );

          var isDropable = this$1.$$dropDestination.isDropable() && cbResult !== false;

          if (!isDropable && dropPosition === DropPosition.ON) {
            dropPosition = null;
          }

          updateHelperClasses(dropDestination, dropPosition);
        }
      };

      window.addEventListener('mouseup', onMouseUp, true);
      window.addEventListener('mousemove', onMouseMove, true);
    }
  }
};

//

var defaults = {
  direction: 'ltr',
  multiple: true,
  checkbox: false,
  checkOnSelect: false,
  autoCheckChildren: true,
  autoDisableChildren: true,
  checkDisabledChildren: true,
  parentSelect: false,
  keyboardNavigation: true,
  nodeIndent: 24,
  minFetchDelay: 0,
  fetchData: null,
  propertyNames: null,
  deletion: false,
  dnd: false,
  editing: false,
  onFetchError: function(err) { throw err }
};

var filterDefaults = {
  emptyText: 'Nothing found!',
  matcher: function matcher(query, node) {
    var isMatched = new RegExp(query, 'i').test(node.text);

    if (isMatched) {
      if (node.parent && new RegExp(query, 'i').test(node.parent.text)) {
        return false
      }
    }

    return isMatched
  },
  plainList: false,
  showChildren: true
};

var script$1 = {
  name: 'Tree',
  components: {
    TreeNode: TreeNode$1,
    DraggableNode: DraggableNode
  },

  mixins: [TreeMixin, TreeDnd],

  provide: function (_) { return ({
    tree: null
  }); },

  props: {
    data: {},

    options: {
      type: Object,
      default: function (_) { return ({}); }
    },

    filter: String,

    tag: {
      type: String,
      default: 'div'
    }
  },

  watch: {
    filter: function filter (term) {
      this.tree.filter(term);
    }
  },

  computed: {
    visibleModel: function visibleModel() {
      return this.model.filter(function(node) {
        return node && node.visible()
      }) 
    },

    visibleMatches: function visibleMatches() {
      return this.matches.filter(function(node) {
        return node && node.visible()
      })
    }
  },

  data: function data () {
    // we should not mutating a prop directly...
    // that's why we have to create a new object
    // TODO: add method for changing options
    var opts = Object.assign({}, defaults, this.options);

    opts.filter = Object.assign(
      {},
      filterDefaults,
      opts.filter
    );

    return {
      model: [],
      tree: null,
      loading: false,
      opts: opts,
      matches: [],
      draggableNode: null
    }
  }
};

/* script */
var __vue_script__$3 = script$1;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$1.__file = "TreeRoot.vue";

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",class:{'tree': true, 'tree-loading': this.loading, 'tree--draggable' : !!this.draggableNode},attrs:{"role":"tree"}},[(_vm.filter && _vm.matches.length == 0)?[_c('div',{staticClass:"tree-filter-empty",domProps:{"innerHTML":_vm._s(_vm.opts.filter.emptyText)}})]:[_c('ul',{staticClass:"tree-root",on:{"dragstart":_vm.onDragStart}},[(_vm.opts.filter.plainList && _vm.matches.length > 0)?_vm._l((_vm.visibleMatches),function(node){return _c('TreeNode',{key:node.id,attrs:{"node":node,"options":_vm.opts}})}):_vm._l((_vm.visibleModel),function(node){return _c('TreeNode',{key:node.id,attrs:{"node":node,"options":_vm.opts}})})],2)],_vm._v(" "),(_vm.draggableNode)?_c('DraggableNode',{attrs:{"target":_vm.draggableNode}}):_vm._e()],2)};
var __vue_staticRenderFns__$2 = [];

  /* style */
  var __vue_inject_styles__$3 = function (inject) {
    if (!inject) { return }
    inject("data-v-6db2091d_0", { source: ".tree{overflow:auto}.tree-children,.tree-root{list-style:none;padding:0}.tree>.tree-filter-empty,.tree>.tree-root{padding:3px;box-sizing:border-box}.tree.tree--draggable .tree-node:not(.selected)>.tree-content:hover{background:0 0}.drag-above,.drag-below,.drag-on{position:relative;z-index:1}.drag-on>.tree-content{background:#fafcff;outline:1px solid #7baff2}.drag-above>.tree-content::before,.drag-below>.tree-content::after{display:block;content:'';position:absolute;height:8px;left:0;right:0;z-index:2;box-sizing:border-box;background-color:#3367d6;border:3px solid #3367d6;background-clip:padding-box;border-bottom-color:transparent;border-top-color:transparent;border-radius:0}.drag-above>.tree-content::before{top:0;transform:translateY(-50%)}.drag-below>.tree-content::after{bottom:0;transform:translateY(50%)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$3 = undefined;
  /* module identifier */
  var __vue_module_identifier__$3 = undefined;
  /* functional template */
  var __vue_is_functional_template__$3 = false;
  /* style inject SSR */
  

  
  var TreeRoot = normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    createInjector,
    undefined
  );

var install = function (Vue) {
  Vue.component(TreeRoot.name, TreeRoot);
};

TreeRoot.install = install;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(TreeRoot);
}

/* harmony default export */ __webpack_exports__["default"] = (TreeRoot);
//# sourceMappingURL=liquor-tree.esm.js.map


/***/ })

}]);