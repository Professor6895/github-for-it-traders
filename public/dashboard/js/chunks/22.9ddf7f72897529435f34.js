/*! For license information please see 22.9ddf7f72897529435f34.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{Nr24:function(t,e,n){var r=n("eELg");"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(r,i);r.locals&&(t.exports=r.locals)},R17s:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),i=n.n(r),o=n("Yn0t"),s=n("LvDl"),a=n.n(s);function u(t,e,n,r,i,o,s){try{var a=t[o](s),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,i)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function s(t){u(o,r,i,s,a,"next",t)}function a(t){u(o,r,i,s,a,"throw",t)}s(void 0)}))}}var c={data:function(){return{menuItemPopup:!1,menu:{menu_items:[]},menu_item:{},menu_item_update:{}}},components:{VueNestable:o.VueNestable,VueNestableHandle:o.VueNestableHandle},mounted:function(){this.id=this.$route.params.id,this.fetchMenu()},methods:{fetchMenu:function(){var t=this;return l(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id){e.next=2;break}return e.abrupt("return");case 2:return t.$vs.loading({container:"#loading--container"}),e.prev=3,e.next=6,t.$http.get("/api/admin/menus/".concat(t.id));case 6:(n=e.sent).data.success&&(t.menu=n.data.data),e.next=15;break;case 10:if(e.prev=10,e.t0=e.catch(3),t.errorNotification("Something went wrong! Please retry!!"),404!==e.t0.response.status){e.next=15;break}return e.abrupt("return",t.$router.push({name:"page-error-404"}));case 15:return e.prev=15,t.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[3,10,15,18]])})))()},addItemToMenu:function(){var t=this;return l(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$validator.validateAll("menu-item");case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:(n=a.a.cloneDeep(t.menu_item)).id="_"+Math.random().toString(36).substr(2,9),n.children=[],t.menu.menu_items.push(n),t.menu_item={};case 10:case"end":return e.stop()}}),e)})))()},removeMenuItem:function(t){var e=this;this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Are you sure you want to delete menu item?",accept:function(){var n=e.menu.menu_items,r=e;n.map((function(e,i){e.id===t.id?n.splice(i,1):e=r.removeFromTree(e,t.id)}))}})},removeFromTree:function(t,e){var n=this;return t.children=t.children.filter((function(t){return t.id!==e})).map((function(t){return n.removeFromTree(t,e)})),t},editMenuItem:function(t){this.menu_item_update=t,this.menuItemPopup=!0},saveMenu:function(){var t=this;return l(i.a.mark((function e(){var n,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$validator.validateAll("menu");case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,t.$vs.loading({container:"#loading--container"}),n={title:t.menu.title,menu_items:t.menu.menu_items},r="/api/admin/menus",t.id&&(r="/api/admin/menus/".concat(t.id),n._method="PATCH"),e.next=12,t.$http.post(r,n);case 12:if(!0!==(o=e.sent).data.success){e.next=19;break}if(t.successNotification(o.data.message),t.id){e.next=17;break}return e.abrupt("return",t.$router.push({name:"admin-menus"}));case 17:e.next=20;break;case 19:t.errorNotification(o.data.message);case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(5),t.errorNotification("Something went wrong! Please retry!!");case 25:return e.prev=25,t.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(25);case 28:case"end":return e.stop()}}),e,null,[[5,22,25,28]])})))()}},watch:{menuItemPopup:function(t){t||(this.menu_item_update={})}}},d=(n("SOtc"),n("KHd+")),p=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vx-row vs-con-loading__container",attrs:{id:"loading--container"}},[n("div",{staticClass:"vx-col md:w-1/3 w-full"},[n("vx-card",{staticClass:"mb-4",attrs:{title:"Menu Configuration"}},[n("form",{attrs:{action:"","data-vv-scope":"menu-item"}},[n("div",{staticClass:"vx-row"},[n("div",{staticClass:"vx-col w-full"},[n("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"name",label:"Name"},model:{value:t.menu_item.name,callback:function(e){t.$set(t.menu_item,"name",e)},expression:"menu_item.name"}}),t._v(" "),t.errors.has("menu-item.name")?n("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("menu-item.name")))]):t._e()],1),t._v(" "),n("div",{staticClass:"vx-col w-full mt-4"},[n("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"link",label:"Link"},model:{value:t.menu_item.link,callback:function(e){t.$set(t.menu_item,"link",e)},expression:"menu_item.link"}}),t._v(" "),t.errors.has("menu-item.link")?n("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("menu-item.link")))]):t._e()],1),t._v(" "),n("div",{staticClass:"vx-col w-full mt-4"},[n("vs-checkbox",{model:{value:t.menu_item.open_new_tab,callback:function(e){t.$set(t.menu_item,"open_new_tab",e)},expression:"menu_item.open_new_tab"}},[t._v("Open in new tab")])],1),t._v(" "),n("div",{staticClass:"vx-col w-full"},[n("vs-button",{staticClass:"mt-4 float-right",attrs:{type:"border",size:"small"},on:{click:t.addItemToMenu}},[t._v("Add >>")])],1)])])])],1),t._v(" "),n("div",{staticClass:"vx-col md:w-2/3 w-full"},[n("vx-card",{staticClass:"mb-4"},[n("form",{attrs:{"data-vv-scope":"menu"}},[n("div",{staticClass:"vx-row"},[n("div",{staticClass:"vx-col w-full mb-4"},[n("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"title",label:"Titles"},model:{value:t.menu.title,callback:function(e){t.$set(t.menu,"title",e)},expression:"menu.title"}}),t._v(" "),t.errors.has("menu.title")?n("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("menu.title")))]):t._e()],1),t._v(" "),n("div",{staticClass:"vx-col w-full"},[n("div",{staticClass:"menu-builder--area p-4"},[n("vue-nestable",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item;return n("vue-nestable-handle",{attrs:{item:r}},[n("vs-icon",{staticClass:"nestable--handler-icon mr-2",attrs:{icon:"menu"}}),t._v("\n                  "+t._s(r.name)+"\n                  "),r.open_new_tab?n("small",[t._v("(New Tab)")]):t._e(),t._v(" "),n("vs-icon",{staticClass:"float-right text-xl cursor-pointer",attrs:{color:"danger",icon:"delete"},on:{click:function(e){return t.removeMenuItem(r)}}}),t._v(" "),n("vs-icon",{staticClass:"float-right mr-3 text-xl cursor-pointer",attrs:{color:"warning",icon:"edit"},on:{click:function(e){return t.editMenuItem(r)}}})],1)}}]),model:{value:t.menu.menu_items,callback:function(e){t.$set(t.menu,"menu_items",e)},expression:"menu.menu_items"}},[n("div",{attrs:{slot:"placeholder"},slot:"placeholder"},[n("div",{staticClass:"text-center mt-10 mb-10"},[n("b",[t._v("This list is empty")]),t._v(" "),n("p",[t._v("You can add items using form on left side.")])])])])],1)])])]),t._v(" "),n("div",{staticClass:"flex justify-between flex-row-reverse"},[n("vs-button",{staticClass:"mt-4 float-right",attrs:{size:"small",type:"border"},on:{click:t.saveMenu}},[t._v("Save")])],1)])],1),t._v(" "),n("vs-popup",{attrs:{title:"Menu Item",active:t.menuItemPopup},on:{"update:active":function(e){t.menuItemPopup=e}}},[n("form",{attrs:{action:"","data-vv-scope":"menu-item-update"}},[n("div",{staticClass:"vx-row"},[n("div",{staticClass:"vx-col w-full"},[n("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"name",label:"Name"},model:{value:t.menu_item_update.name,callback:function(e){t.$set(t.menu_item_update,"name",e)},expression:"menu_item_update.name"}}),t._v(" "),t.errors.has("menu-item-update.name")?n("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("menu-item-update.name")))]):t._e()],1),t._v(" "),n("div",{staticClass:"vx-col w-full mt-4"},[n("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"link",label:"Link"},model:{value:t.menu_item_update.link,callback:function(e){t.$set(t.menu_item_update,"link",e)},expression:"menu_item_update.link"}}),t._v(" "),t.errors.has("menu-item-update.link")?n("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("menu-item-update.link")))]):t._e()],1),t._v(" "),n("div",{staticClass:"vx-col w-full mt-4"},[n("vs-checkbox",{model:{value:t.menu_item_update.open_new_tab,callback:function(e){t.$set(t.menu_item_update,"open_new_tab",e)},expression:"menu_item_update.open_new_tab"}},[t._v("Open in new tab")])],1),t._v(" "),n("div",{staticClass:"vx-col w-full"},[n("vs-button",{staticClass:"mt-4 float-right",attrs:{type:"border",size:"small"},on:{click:function(e){t.menuItemPopup=!1}}},[t._v("Done")])],1)])])])],1)}),[],!1,null,"77f85543",null);e.default=p.exports},SOtc:function(t,e,n){"use strict";n("Nr24")},Yn0t:function(t,e,n){(function(t){!function(e){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=u(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}var d={},p={methods:{registerNestable:function(t){var e=this._getByGroup(t.group);e.onDragStartListeners.push(t.onDragStart),e.onMouseEnterListeners.push(t.onMouseEnter),e.onMouseMoveListeners.push(t.onMouseMove)},notifyDragStart:function(t,e,n){var r,i=c(this._getByGroup(t).onDragStartListeners);try{for(i.s();!(r=i.n()).done;)(0,r.value)(e,n)}catch(t){i.e(t)}finally{i.f()}},notifyMouseEnter:function(t,e,n,r){var i,o=c(this._getByGroup(t).onMouseEnterListeners);try{for(o.s();!(i=o.n()).done;)(0,i.value)(e,n,r)}catch(t){o.e(t)}finally{o.f()}},notifyMouseMove:function(t,e){var n,r=c(this._getByGroup(t).onMouseMoveListeners);try{for(r.s();!(n=r.n()).done;)(0,n.value)(e)}catch(t){r.e(t)}finally{r.f()}},_getByGroup:function(t){return d[t]||(d[t]={onDragStartListeners:[],onMouseEnterListeners:[],onMouseMoveListeners:[],onDragStart:[],dragItem:null}),d[t]}}};function h(t,e,n,r,i,o,s,a,u,l){"boolean"!=typeof s&&(u=a,a=s,s=!1);const c="function"==typeof n?n.options:n;let d;if(t&&t.render&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,i&&(c.functional=!0)),r&&(c._scopeId=r),o?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=d):e&&(d=s?function(t){e.call(this,l(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),d)if(c.functional){const t=c.render;c.render=function(e,n){return d.call(n),t(e,n)}}else{const t=c.beforeCreate;c.beforeCreate=t?[].concat(t,d):[d]}return n}var m,f=h({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.itemClasses},[n("div",{staticClass:"nestable-item-content",on:{mouseenter:t.onMouseEnter,mouseleave:t.onMouseLeave,mousemove:t.onMouseMove}},[t._t("default",null,{index:t.index,item:t.item,isChild:t.isChild})],2),t._v(" "),t.hasChildren?n("ol",{staticClass:"nestable-list"},[t._l(t.item[t.options.childrenProp],(function(e,r){return[n("NestableItem",{key:e[t.keyProp],attrs:{item:e,index:r,options:t.options,"is-copy":t.isCopy,"is-child":""},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),(function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}}))],null,!0)})]}))],2):t._e()])},staticRenderFns:[]},void 0,{name:"NestableItem",mixins:[p],props:{item:{type:Object,required:!0,default:function(){return{}}},index:{type:Number,required:!1,default:null},isChild:{type:Boolean,required:!1,default:!1},isCopy:{type:Boolean,required:!1,default:!1},options:{type:Object,required:!0,default:function(){return{}}}},inject:["listId","group","keyProp"],data:function(){return{breakPoint:null,moveDown:!1}},computed:{isDragging:function(){var t=this.options.dragItem;return!this.isCopy&&t&&t[this.options.keyProp]===this.item[this.options.keyProp]},hasChildren:function(){return this.item[this.options.childrenProp]&&this.item[this.options.childrenProp].length>0},hasHandle:function(){return!!this.$scopedSlots.handler},normalizedClassProp:function(){var t=this.item[this.options.classProp];return t?Array.isArray(t)?t:("undefined"==typeof a||n(a),[t]):[]},itemClasses:function(){var t=this.isDragging?["is-dragging"]:[];return["nestable-item".concat(this.isCopy?"-copy":""),"nestable-item".concat(this.isCopy?"-copy":"","-").concat(this.item[this.options.keyProp])].concat(t,s(this.normalizedClassProp))}},methods:{onMouseEnter:function(t){if(this.options.dragItem){if(!t.movementY)return this.sendNotification(t);this.moveDown=t.movementY>0,this.breakPoint=t.target.getBoundingClientRect().height/2}},onMouseLeave:function(){this.breakPoint=null},onMouseMove:function(t){if(this.breakPoint){var e=t.offsetY-this.breakPoint;this.moveDown&&e<this.breakPoint/4||!this.moveDown&&e>-this.breakPoint/4||this.sendNotification(t)}},sendNotification:function(t){this.breakPoint=null;var e=this.item||this.$parent.item;this.notifyMouseEnter(this.group,t,this.listId,e)}}},void 0,!1,void 0,!1,void 0,void 0,void 0),v=h({render:function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("div",{staticClass:"nestable-list-empty",on:{mouseenter:this.onMouseEnter}},[this._t("default")],2)])},staticRenderFns:[]},void 0,{name:"Placeholder",mixins:[p],props:{index:{type:Number,required:!1,default:null},options:{type:Object,required:!1,default:function(){return{}}}},inject:["listId","group"],computed:{isDragging:function(){return this.options.dragItem}},methods:{onMouseEnter:function(t){this.options.dragItem&&this.notifyMouseEnter(this.group,t,this.listId,null)}}},void 0,!1,void 0,!1,void 0,void 0,void 0),y={methods:{getPathById:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value,r=[];return n.every((function(n,i){if(n[e.keyProp]===t)r.push(i);else if(n[e.childrenProp]){var o=e.getPathById(t,n[e.childrenProp]);o.length&&(r=r.concat(i).concat(o))}return 0===r.length})),r},getItemByPath:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value,r=null;return t.forEach((function(t){var i=r&&r[e.childrenProp]?r[e.childrenProp]:n;r=i[t]})),r},getItemDepth:function(t){var e=1;if(t[this.childrenProp]&&t[this.childrenProp].length>0){var n=t[this.childrenProp].map(this.getItemDepth);e+=Math.max.apply(Math,s(n))}return e},getSplicePath:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={},i=e.numToRemove||0,o=e.itemsToInsert||[],a=t.length-1,u=n;return t.forEach((function(t,n){if(n===a)u.$splice=[[t,i].concat(s(o))];else{var l={};u[t]=r({},e.childrenProp,l),u=l}})),n},getRealNextPath:function(t,e){var n=t.length-1,r=e.length-1;if(t.length<e.length){var i=!1;return e.map((function(o,s){return i?s===r?o+1:o:"number"!=typeof t[s]?o:e[s]>t[s]&&s===n?(i=!0,o-1):o}))}if(t.length===e.length&&e[r]>t[r]){var o=this.getItemByPath(e);if(o[this.childrenProp]&&o[this.childrenProp].length&&!this.isCollapsed(o))return e.slice(0,-1).concat(e[r]-1).concat(0)}return e}}},g=function(e,n){return function(e,n){function r(t){return"object"!=typeof t||"toString"in t?t:Object.prototype.toString.call(t).slice(8,-1)}Object.defineProperty(n,"__esModule",{value:!0});var i="object"==typeof t&&!0;function o(t,e){if(!t){if(i)throw new Error("Invariant failed");throw new Error(e())}}n.invariant=o;var s=Object.prototype.hasOwnProperty,a=Array.prototype.splice,u=Object.prototype.toString;function l(t){return u.call(t).slice(8,-1)}var c=Object.assign||function(t,e){return d(e).forEach((function(n){s.call(e,n)&&(t[n]=e[n])})),t},d="function"==typeof Object.getOwnPropertySymbols?function(t){return Object.keys(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.keys(t)};function p(t){return Array.isArray(t)?c(t.constructor(t.length),t):"Map"===l(t)?new Map(t):"Set"===l(t)?new Set(t):t&&"object"==typeof t?c(Object.create(Object.getPrototypeOf(t)),t):t}var h=function(){function t(){this.commands=c({},m),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(t,e){return t===e},this.update.newContext=function(){return(new t).update}}return Object.defineProperty(t.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(t){this.update.isEquals=t},enumerable:!0,configurable:!0}),t.prototype.extend=function(t,e){this.commands[t]=e},t.prototype.update=function(t,e){var n=this,r="function"==typeof e?{$apply:e}:e;Array.isArray(t)&&Array.isArray(r)||o(!Array.isArray(r),(function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."})),o("object"==typeof r&&null!==r,(function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: "+Object.keys(n.commands).join(", ")+"."}));var i=t;return d(r).forEach((function(e){if(s.call(n.commands,e)){var o=t===i;i=n.commands[e](r[e],i,r,t),o&&n.isEquals(i,t)&&(i=t)}else{var a="Map"===l(t)?n.update(t.get(e),r[e]):n.update(t[e],r[e]),u="Map"===l(i)?i.get(e):i[e];n.isEquals(a,u)&&(void 0!==a||s.call(t,e))||(i===t&&(i=p(t)),"Map"===l(i)?i.set(e,a):i[e]=a)}})),i},t}();n.Context=h;var m={$push:function(t,e,n){return v(e,n,"$push"),t.length?e.concat(t):e},$unshift:function(t,e,n){return v(e,n,"$unshift"),t.length?t.concat(e):e},$splice:function(t,e,n,i){return function(t,e){o(Array.isArray(t),(function(){return"Expected $splice target to be an array; got "+r(t)})),g(e.$splice)}(e,n),t.forEach((function(t){g(t),e===i&&t.length&&(e=p(i)),a.apply(e,t)})),e},$set:function(t,e,n){return function(t){o(1===Object.keys(t).length,(function(){return"Cannot have more than one key in an object with $set"}))}(n),t},$toggle:function(t,e){y(t,"$toggle");var n=t.length?p(e):e;return t.forEach((function(t){n[t]=!e[t]})),n},$unset:function(t,e,n,r){return y(t,"$unset"),t.forEach((function(t){Object.hasOwnProperty.call(e,t)&&(e===r&&(e=p(r)),delete e[t])})),e},$add:function(t,e,n,r){return b(e,"$add"),y(t,"$add"),"Map"===l(e)?t.forEach((function(t){var n=t[0],i=t[1];e===r&&e.get(n)!==i&&(e=p(r)),e.set(n,i)})):t.forEach((function(t){e!==r||e.has(t)||(e=p(r)),e.add(t)})),e},$remove:function(t,e,n,r){return b(e,"$remove"),y(t,"$remove"),t.forEach((function(t){e===r&&e.has(t)&&(e=p(r)),e.delete(t)})),e},$merge:function(t,e,n,i){var s,a;return s=e,o((a=t)&&"object"==typeof a,(function(){return"update(): $merge expects a spec of type 'object'; got "+r(a)})),o(s&&"object"==typeof s,(function(){return"update(): $merge expects a target of type 'object'; got "+r(s)})),d(t).forEach((function(n){t[n]!==e[n]&&(e===i&&(e=p(i)),e[n]=t[n])})),e},$apply:function(t,e){var n;return o("function"==typeof(n=t),(function(){return"update(): expected spec of $apply to be a function; got "+r(n)+"."})),t(e)}},f=new h;function v(t,e,n){o(Array.isArray(t),(function(){return"update(): expected target of "+r(n)+" to be an array; got "+r(t)+"."})),y(e[n],n)}function y(t,e){o(Array.isArray(t),(function(){return"update(): expected spec of "+r(e)+" to be an array; got "+r(t)+". Did you forget to wrap your parameter in an array?"}))}function g(t){o(Array.isArray(t),(function(){return"update(): expected spec of $splice to be an array of arrays; got "+r(t)+". Did you forget to wrap your parameters in an array?"}))}function b(t,e){var n=l(t);o("Map"===n||"Set"===n,(function(){return"update(): "+r(e)+" expects a target of type Set or Map; got "+r(n)}))}n.isEquals=f.update.isEquals,n.extend=f.extend,n.default=f.update,n.default.default=e.exports=c(n.default,n)}(n={exports:{}},n.exports),n.exports}(),b=(m=g)&&m.__esModule&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m,_=(g.invariant,g.Context,g.isEquals,g.extend,h({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["nestable","nestable-"+t.group,t.rtl?"nestable-rtl":""]},[n("ol",{staticClass:"nestable-list nestable-group"},[t.listIsEmpty?n("Placeholder",{attrs:{options:t.itemOptions}},[t._t("placeholder",[t._v("\n        No content\n      ")])],2):t._e(),t._v(" "),t._l(t.value,(function(e,r){return[n("NestableItem",{key:e[t.keyProp],attrs:{index:r,item:e,options:t.itemOptions},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),(function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}}))],null,!0)})]}))],2),t._v(" "),t.dragItem?[n("div",{staticClass:"nestable-drag-layer"},[n("ol",{staticClass:"nestable-list",style:t.listStyles},[n("NestableItem",{attrs:{item:t.dragItem,options:t.itemOptions,"is-copy":!0},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),(function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}}))],null,!0)})],1)])]:t._e()],2)},staticRenderFns:[]},void 0,{name:"VueNestable",components:{NestableItem:f,Placeholder:v},mixins:[y,p,{methods:{hook:function(t,e){if(!this.hooks[t])return!0;var n=this.hooks[t](e);return n||void 0===n}}}],props:{value:{type:Array,required:!0,default:function(){return[]}},threshold:{type:Number,required:!1,default:30},maxDepth:{type:Number,required:!1,default:10},keyProp:{type:String,required:!1,default:"id"},classProp:{type:String,required:!1,default:null},group:{type:[String,Number],required:!1,default:function(){return Math.random().toString(36).slice(2)}},childrenProp:{type:String,required:!1,default:"children"},collapsed:{type:Boolean,required:!1,default:!1},hooks:{type:Object,required:!1,default:function(){return{}}},rtl:{type:Boolean,required:!1,default:!1}},provide:function(){return{listId:this.listId,group:this.group,keyProp:this.keyProp,onDragEnd:this.onDragEnd}},data:function(){return{itemsOld:null,dragItem:null,mouse:{last:{x:0},shift:{x:0}},el:null,elCopyStyles:null,isDirty:!1,collapsedGroups:[],listId:Math.random().toString(36).slice(2)}},computed:{listIsEmpty:function(){return 0===this.value.length},itemOptions:function(){return{dragItem:this.dragItem,keyProp:this.keyProp,classProp:this.classProp,childrenProp:this.childrenProp}},listStyles:function(){var t=document.querySelector(".nestable-"+this.group+" .nestable-item-"+this.dragItem[this.keyProp]),e={};return t&&(e.width="".concat(t.clientWidth,"px")),this.elCopyStyles&&(e=o(o({},e),this.elCopyStyles)),e}},created:function(){var t=function t(e,n){return e.map((function(e){return o(o({},e),{},r({},n,e[n]?t(e[n],n):[]))}))}(this.value,this.childrenProp);this.$emit("input",t),this.isDirty=!1,this.registerNestable(this)},beforeDestroy:function(){this.stopTrackMouse()},methods:{startTrackMouse:function(){document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("touchend",this.onDragEnd),document.addEventListener("touchcancel",this.onDragEnd),document.addEventListener("keydown",this.onKeyDown)},stopTrackMouse:function(){document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("touchend",this.onDragEnd),document.removeEventListener("touchcancel",this.onDragEnd),document.removeEventListener("keydown",this.onKeyDown),this.elCopyStyles=null},onDragStart:function(t,e){var n=this;t&&(t.preventDefault(),t.stopPropagation()),this.el=t.target.closest(".nestable-item"),this.startTrackMouse(),this.dragItem=e,this.itemsOld=this.value,this.$nextTick((function(){n.onMouseMove(t)}))},onDragEnd:function(t,e){t&&t.preventDefault(),this.stopTrackMouse(),this.el=null,e?this.dragRevert():this.dragApply()},onKeyDown:function(t){27===t.which&&this.onDragEnd(null,!0)},getXandYFromEvent:function(t){var e=t.clientX,n=t.clientY,r=t.targetTouches;if(r){var i=r[0];e=i.clientX,n=i.clientY;var o=new Event("mouseenter"),s=document.elementFromPoint(e,n),a=s&&(s.closest(".nestable-item-content")||s.closest(".nestable-list-empty"));a&&a.dispatchEvent(o)}return{clientX:e,clientY:n}},onMouseMove:function(t){t&&t.preventDefault();var e=this.getXandYFromEvent(t),n=e.clientX,r=e.clientY;0===this.mouse.last.x&&(this.mouse.last.x=n);var i=function(t,e){return{transform:"translate("+t+"px, "+e+"px)"}}(n,r),s=document.querySelector(".nestable-"+this.group+" .nestable-drag-layer");if(s){var a,u=s.getBoundingClientRect(),l=u.top,c=u.left,d=document.querySelector(".nestable-"+this.group+" .nestable-drag-layer > .nestable-list");if(this.elCopyStyles){if(this.elCopyStyles=o(o({},this.elCopyStyles),i),d)for(var p in i)Object.prototype.hasOwnProperty.call(i,p)&&(d.style[p]=i[p]);var h=this.rtl?this.mouse.last.x-n:n-this.mouse.last.x;h>=0&&this.mouse.shift.x>=0||h<=0&&this.mouse.shift.x<=0?this.mouse.shift.x+=h:this.mouse.shift.x=0,this.mouse.last.x=n,Math.abs(this.mouse.shift.x)>this.threshold&&(this.mouse.shift.x>0?this.tryIncreaseDepth(this.dragItem):this.tryDecreaseDepth(this.dragItem),this.mouse.shift.x=0)}else{var m=(a=this.el.getBoundingClientRect(),{top:Math.round(a.top),left:Math.round(a.left)});this.elCopyStyles=o({marginTop:"".concat(m.top-r-l,"px"),marginLeft:"".concat(m.left-n-c,"px")},i)}}},moveItem:function(t){var e=t.dragItem,n=t.pathFrom,r=t.pathTo,i=this.getRealNextPath(n,r),o=this.getSplicePath(n,{numToRemove:1,childrenProp:this.childrenProp}),s=this.getSplicePath(i,{numToRemove:0,itemsToInsert:[e],childrenProp:this.childrenProp});if(this.hook("beforeMove",{dragItem:e,pathFrom:n,pathTo:i})){var a=this.value;a=b(a,o),a=b(a,s),this.isDirty=!0,this.pathTo=i,this.$emit("input",a)}},tryIncreaseDepth:function(t){var e=this.getPathById(t[this.keyProp]),n=e[e.length-1],r=e.length+this.getItemDepth(t);if(n>0&&r<=this.maxDepth){var i=this.getItemByPath(e.slice(0,-1).concat(n-1));if(i[this.childrenProp]&&(!i[this.childrenProp].length||!this.isCollapsed(i))){var o=e.slice(0,-1).concat(n-1).concat(i[this.childrenProp].length);this.moveItem({dragItem:t,pathFrom:e,pathTo:o})}}},tryDecreaseDepth:function(t){var e=this.getPathById(t[this.keyProp]),n=e[e.length-1];if(e.length>1&&n+1===this.getItemByPath(e.slice(0,-1))[this.childrenProp].length){var r=e.slice(0,-1);r[r.length-1]+=1,this.moveItem({dragItem:t,pathFrom:e,pathTo:r})}},onMouseEnter:function(t,e,n){t&&(t.preventDefault(),t.stopPropagation());var r=this.dragItem;if(r&&(null===n||r[this.keyProp]!==n[this.keyProp])){var i,o=this.getPathById(r[this.keyProp]);if(!(e!==this.listId&&0===o.length||(i=null===n?o.length>0?[]:[0]:this.getPathById(n[this.keyProp]),this.getRealNextPath(o,i).length+(this.getItemDepth(r)-1)>this.maxDepth))){var s={};if(this.collapsed&&o.length>1){var a=this.getItemByPath(o.slice(0,-1));1===a[this.childrenProp].length&&(s=this.onToggleCollapse(a,!0))}this.moveItem({dragItem:r,pathFrom:o,pathTo:i},s)}}},isCollapsed:function(t){return!!(this.collapsedGroups.indexOf(t[this.keyProp])>-1^this.collapsed)},dragApply:function(){this.$emit("change",this.dragItem,{items:this.value,pathTo:this.pathTo}),this.pathTo=null,this.itemsOld=null,this.dragItem=null,this.isDirty=!1},dragRevert:function(){this.$emit("input",this.itemsOld),this.pathTo=null,this.itemsOld=null,this.dragItem=null,this.isDirty=!1}}},void 0,!1,void 0,!1,void 0,void 0,void 0)),x=h({render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nestable-handle",attrs:{draggable:""},on:{dragstart:this.dragstart,touchstart:this.dragstart,touchend:this.touchend,touchmove:this.touchmove}},[this._t("default")],2)},staticRenderFns:[]},void 0,{name:"VueNestableHandle",mixins:[p],props:{item:{type:Object,required:!1,default:function(){return{}}}},inject:["group","onDragEnd"],methods:{dragstart:function(t){var e=this.item||this.$parent.item;this.notifyDragStart(this.group,t,e)},touchend:function(t){this.onDragEnd(t)},touchmove:function(t){this.notifyMouseMove(this.group,t)}}},void 0,!1,void 0,!1,void 0,void 0,void 0),P={install:function(t,e){t.component("VueNestable",_),t.component("VueNestableHandle",x)}};e.VueNestable=_,e.VueNestableHandle=x,e.default=P,Object.defineProperty(e,"__esModule",{value:!0})}(e)}).call(this,n("8oxB"))},eELg:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"[dir] .menu-builder--area[data-v-77f85543]{border:1px solid #c4c4c4;border-radius:10px}",""])}}]);