/*! For license information please see 40.983df3d4ecc512376bb6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{DoMi:function(t,e,r){"use strict";r.r(e);var a=r("U87P");r("YTpH");function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var n=e&&e.prototype instanceof v?e:v,o=Object.create(n.prototype),i=new P(a||[]);return o._invoke=function(t,e,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return E()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var s=b(i,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var c=p(t,e,r);if("normal"===c.type){if(a=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),o}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d={};function v(){}function f(){}function h(){}var m={};l(m,i,(function(){return this}));var _=Object.getPrototypeOf,g=_&&_(_(L([])));g&&g!==e&&r.call(g,i)&&(m=g);var y=h.prototype=v.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var a;this._invoke=function(o,i){function s(){return new e((function(a,s){!function a(o,i,s,c){var l=p(t[o],t,i);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==n(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,s,c)}),(function(t){a("throw",t,s,c)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return a("throw",t,s,c)}))}c(l.arg)}(o,i,a,s)}))}return a=a?a.then(s,s):s()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=p(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var n=a.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,n=function e(){for(;++a<t.length;)if(r.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:E}}function E(){return{value:void 0,done:!0}}return f.prototype=h,l(y,"constructor",h),l(h,"constructor",f),f.displayName=l(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,l(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,s,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,a,n,o){void 0===o&&(o=Promise);var i=new x(u(e,r,a,n),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(y),l(y,c,"Generator"),l(y,i,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var a=e.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}},t.values=L,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(r,a){return i.type="throw",i.arg=t,e.next=r,a&&(e.method="next",e.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;C(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function i(t,e,r,a,n,o,i){try{var s=t[o](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(a,n)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var o=t.apply(e,r);function s(t){i(o,a,n,s,c,"next",t)}function c(t){i(o,a,n,s,c,"throw",t)}s(void 0)}))}}var c={data:function(){return{loading:!0,products:{data:[],per_page:0,total:0,last_page:0},table_options:{current_page:1},search_keyword:"",duplicate_popup:!1,duplicate_product:{duplicate_images:!1,duplicate_variants:!1}}},components:{MetaFields:a.a},mounted:function(){this.fetchProducts()},methods:{fetchProducts:function(){var t=this;return s(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading||t.$vs.loading({container:"#loading--container"}),e.prev=1,e.next=4,t.$http.get("/api/admin/products",{params:{page:t.table_options.current_page,search:t.search_keyword}});case 4:r=e.sent,t.products=r.data.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.errorNotification("Something went wrong!! Please retry");case 11:return e.prev=11,t.$vs.loading.close("#loading--container > .con-vs-loading"),t.loading=!1,e.finish(11);case 15:case"end":return e.stop()}}),e,null,[[1,8,11,15]])})))()},toggleProductStatus:function(t){var e,r=this;this.$vs.dialog({type:"confirm",color:"primary",title:"Confirm",text:"Are you sure you want to change the product status?",accept:(e=s(o().mark((function e(){var a,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={_method:"PATCH"},e.next=3,r.$http.post("/api/admin/products/".concat(t.id,"/toggle-status"),a);case 3:(n=e.sent).data.success?(r.successNotification(n.data.message),t.status=n.data.status):r.errorNotification(n.data.message);case 5:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})})},duplicateProduct:function(t){this.duplicate_product.product_id=t,this.duplicate_popup=!0},processProductDuplication:function(){var t=this;return s(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.$vs.loading({container:"#loading--container"}),"/api/admin/product/make-duplicate",e.next=5,t.$http.post("/api/admin/product/make-duplicate",t.duplicate_product);case 5:(r=e.sent).data.success?(t.successNotification(r.data.message),t.duplicate_popup=!1,t.fetchProducts()):t.errorNotification(r.data.message),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.errorNotification("Something went wrong! Please retry!!");case 12:return e.prev=12,t.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()},deleteProduct:function(t){var e,r=this;this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Are you sure you want to delete the product?",accept:(e=s(o().mark((function e(){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.$http.delete("/api/admin/products/".concat(t));case 2:(a=e.sent).data.success?(r.successNotification(a.data.message),r.fetchProducts()):r.errorNotification(a.data.message);case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})})}},watch:{"table_options.current_page":function(){this.fetchProducts()},duplicate_popup:function(t){t||(this.duplicate_product={duplicate_images:!1,duplicate_variants:!1})}}},l=r("KHd+"),u=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t.loading?e("pageLoader"):e("vx-card",{staticClass:"card-padding-5 vs-con-loading__container",attrs:{id:"loading--container"}},[e("vs-table",{staticClass:"mt-4",attrs:{stripe:"",data:t.products.data,"max-items":t.products.per_page,total:t.products.total,sst:!0},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.data;return t._l(n,(function(a,n){return e("vs-tr",{key:n,staticClass:"p-4",attrs:{data:a}},[e("vs-td",{staticStyle:{width:"110px !important"}},[e("img",{attrs:{src:a.product_image.thumb?a.product_image.thumb:r("c3Qt"),alt:"",width:"90px"}})]),t._v(" "),e("vs-td",{staticStyle:{"vertical-align":"top"}},[e("strong",[t._v(t._s(a.name))]),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"mt-2 text-sm"},[e("strong",[1==a.status?e("span",{staticClass:"text-success"},[t._v("Enabled")]):t._e(),t._v(" "),0==a.status?e("span",{staticClass:"text-danger"},[t._v("Inactive")]):t._e(),t._v(" "),2==a.status?e("span",{staticClass:"text-warning"},[t._v("Draft")]):t._e()])]),t._v(" "),e("p",{staticClass:"mt-2 text-sm"},[t._v(t._s(a.quantity)+" in stock")])]),t._v(" "),e("vs-td",[a.price?e("div",[e("strong",{staticClass:"text-2xl"},[t._v("Rs. "+t._s(a.price))]),t._v(" "),a.original_price?e("span",{staticClass:"text-lg text-strike"},[t._v("Rs. "+t._s(a.original_price))]):t._e()]):e("div",[t._v("---")])]),t._v(" "),e("vs-td",[e("strong",[t._v("SKU:")]),t._v("\n            "+t._s(a.sku)+"\n          ")]),t._v(" "),e("vs-td",[e("div",{on:{click:function(e){return t.toggleProductStatus(a)}}},[e("strong",[t._v("Status")]),t._v(" "),e("br"),t._v(" "),e("vs-icon",{staticClass:"icon-large",class:1===a.status?"text-success":"text-danger",attrs:{icon:1===a.status?"toggle_on":"toggle_off"}})],1)]),t._v(" "),e("vs-td",[e("vs-button",{attrs:{size:"small"},on:{click:function(e){return t.duplicateProduct(a.id)}}},[t._v("Make Duplicate")])],1),t._v(" "),e("vs-td",[e("router-link",{attrs:{to:{name:"admin-product-detail",params:{id:a.id}}}},[t.checkPermission("edit-product")?e("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"warning",type:"filled",icon:"create"}}):t._e()],1),t._v(" "),t.checkPermission("delete-product")?e("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"danger",type:"filled",icon:"delete"},on:{click:function(e){return t.deleteProduct(a.id)}}}):t._e()],1)],1)}))}}])},[e("template",{slot:"header"},[e("strong",[t._v("Total :")]),t._v("\n         "+t._s(t.products.total)+"    \n        "),t.checkPermission("add-product")?e("router-link",{attrs:{to:{name:"admin-product-detail"}}},[e("vs-button",{attrs:{color:"primary",size:"small",type:"border"}},[t._v("Add New Product")])],1):t._e(),t._v(" "),e("div",{staticClass:"con-input-search vs-table--search"},[e("vs-input",{staticClass:"inline-block",model:{value:t.search_keyword,callback:function(e){t.search_keyword=e},expression:"search_keyword"}}),t._v(" "),e("vs-button",{attrs:{type:"filled",icon:"search"},on:{click:function(e){t.table_options.current_page=1,t.fetchProducts()}}})],1)],1)],2),t._v(" "),e("vs-pagination",{staticClass:"mt-6",attrs:{total:t.products.last_page},model:{value:t.table_options.current_page,callback:function(e){t.$set(t.table_options,"current_page",e)},expression:"table_options.current_page"}})],1),t._v(" "),e("vs-popup",{attrs:{title:"Duplicate Product",active:t.duplicate_popup},on:{"update:active":function(e){t.duplicate_popup=e}}},[e("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-1/2 mb-4"},[e("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Duplicate Images")]),t._v(" "),e("vs-switch",{attrs:{"vs-value":"1","icon-pack":"feather","vs-icon-on":"icon-check-circle","vs-icon-off":"icon-slash"},model:{value:t.duplicate_product.duplicate_images,callback:function(e){t.$set(t.duplicate_product,"duplicate_images",e)},expression:"duplicate_product.duplicate_images"}},[e("span",{attrs:{slot:"on"},slot:"on"},[t._v("Yes")]),t._v(" "),e("span",{attrs:{slot:"off"},slot:"off"},[t._v("No")])])],1),t._v(" "),e("div",{staticClass:"vx-col w-1/2 mb-4"},[e("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Duplicate Variants")]),t._v(" "),e("vs-switch",{attrs:{"vs-value":"1","icon-pack":"feather","vs-icon-on":"icon-check-circle","vs-icon-off":"icon-slash"},model:{value:t.duplicate_product.duplicate_variants,callback:function(e){t.$set(t.duplicate_product,"duplicate_variants",e)},expression:"duplicate_product.duplicate_variants"}},[e("span",{attrs:{slot:"on"},slot:"on"},[t._v("Yes")]),t._v(" "),e("span",{attrs:{slot:"off"},slot:"off"},[t._v("No")])])],1)]),t._v(" "),e("vs-button",{staticClass:"mr-3 mt-5",on:{click:t.processProductDuplication}},[t._v("Submit")])],1)])],1)}),[],!1,null,null,null);e.default=u.exports},U87P:function(t,e,r){"use strict";var a={props:{value:{type:Object,required:!0},small:{type:Boolean,default:!1}},watch:{value:function(){this.$emit("input",this.value)}}},n=r("KHd+"),o=Object(n.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full mt-2",class:{"md:w-1/2":!t.small}},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:70",expression:"'max:70'"}],staticClass:"w-full",attrs:{name:"meta_title",maxlength:"100",label:"Meta Title"},model:{value:t.value.meta_title,callback:function(e){t.$set(t.value,"meta_title",e)},expression:"value.meta_title"}}),t._v(" "),e("p",[t.errors.has("meta_title")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("meta_title")))]):t._e()])],1),t._v(" "),e("div",{staticClass:"vx-col w-full mt-2",class:{"md:w-1/2":!t.small}},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:180",expression:"'max:180'"}],staticClass:"w-full",attrs:{name:"meta_keywords",label:"Meta Keywords",maxlength:"180"},model:{value:t.value.meta_keywords,callback:function(e){t.$set(t.value,"meta_keywords",e)},expression:"value.meta_keywords"}}),t._v(" "),e("p",[t.errors.has("meta_keywords")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("meta_keywords")))]):t._e()])],1),t._v(" "),e("div",{staticClass:"vx-col w-full mt-2"},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:180",expression:"'max:180'"}],staticClass:"w-full",attrs:{name:"meta_description",label:"Meta Description",maxlength:"180"},model:{value:t.value.meta_description,callback:function(e){t.$set(t.value,"meta_description",e)},expression:"value.meta_description"}}),t._v(" "),e("p",[t.errors.has("meta_description")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("meta_description")))]):t._e()])],1)])}),[],!1,null,null,null);e.a=o.exports},c3Qt:function(t,e){t.exports="/images/no-image-placeholder.jpg?398a6fa0902f42b38c7dad067cf1e540"}}]);