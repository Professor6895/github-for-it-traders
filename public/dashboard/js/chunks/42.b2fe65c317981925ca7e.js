/*! For license information please see 42.b2fe65c317981925ca7e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"5Dge":function(t,e){t.exports="/images/default-avatar.png?27b9408da668f335b85e9fe669908cab"},"v+9Y":function(t,e,r){"use strict";r.r(e);function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=f(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h={};function v(){}function p(){}function d(){}var g={};u(g,i,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(S([])));m&&m!==e&&r.call(m,i)&&(g=m);var w=d.prototype=v.prototype=Object.create(g);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var o;this._invoke=function(a,i){function c(){return new e((function(o,c){!function o(a,i,c,s){var u=f(t[a],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==n(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,s)}))}s(u.arg)}(a,i,o,c)}))}return o=o?o.then(c,c):c()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=d,u(w,"constructor",d),u(d,"constructor",p),p.displayName=u(d,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(x.prototype),u(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(w),u(w,s,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function a(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,s,"next",t)}function s(t){a(i,n,o,c,s,"throw",t)}c(void 0)}))}}var c={data:function(){return{reviews:{data:[],per_page:0,total:0,last_page:0},table_options:{current_page:1},loading:!0}},mounted:function(){this.fetchReviews()},methods:{fetchReviews:function(){var t=this;return i(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading||t.$vs.loading({container:"#loading--container"}),e.prev=1,e.next=4,t.$http.get("/api/admin/product-reviews?page=".concat(t.table_options.current_page));case 4:r=e.sent,t.reviews=r.data.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.errorNotification("Something went wrong!! Please retry");case 11:return e.prev=11,t.loading||t.$vs.loading.close("#loading--container > .con-vs-loading"),t.loading=!1,e.finish(11);case 15:case"end":return e.stop()}}),e,null,[[1,8,11,15]])})))()},toggleStatus:function(t){var e,r=this;this.$vs.dialog({type:"confirm",color:"primary",title:"Confirm",text:"Are you sure you want to change status?",accept:(e=i(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.$http.post("/api/admin/product-reviews/".concat(t,"/toggle-status"),{_method:"PATCH"});case 2:(n=e.sent).data.success?(r.successNotification(n.data.message),r.fetchReviews()):r.errorNotification(n.data.message);case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})})},handlePagination:function(t){this.table_options.current_page=t}},watch:{"table_options.current_page":function(){this.fetchReviews()}}},s=r("KHd+"),u=Object(s.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t.loading?e("pageLoader"):e("vx-card",{staticClass:"card-padding-5 vs-con-loading__container",attrs:{id:"loading--container"}},[e("vs-table",{attrs:{stripe:"",data:t.reviews.data,"max-items":t.reviews.per_page,total:t.reviews.total,sst:!0},on:{"change-page":t.handlePagination},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.data;return t._l(o,(function(n,o){return e("vs-tr",{key:o,attrs:{data:n}},[e("vs-td",[e("vs-chip",[e("vs-avatar",{attrs:{color:"transparent",size:"50px",src:n.user.avatar?n.user.avatar:r("5Dge")}}),t._v("\n              "+t._s(n.user.name)+"\n            ")],1)],1),t._v(" "),e("vs-td",[t._v(t._s(n.product.name))]),t._v(" "),e("vs-td",{staticStyle:{"max-width":"400px"}},[t._v(t._s(n.review))]),t._v(" "),e("vs-td",t._l(5,(function(t){return e("svg",{key:"star".concat(t),staticClass:"mx-1 w-4 h-4 fill-current",class:{"text-warning":t<=n.rating},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"}})])})),0),t._v(" "),e("vs-td",[e("small",[t._v(t._s(t._f("date_format")(n.created_at,"MMMM Do YYYY, h:mm a")))])]),t._v(" "),e("vs-td",[e("vs-td",[e("vs-icon",{staticClass:"icon-large",class:"1"===n.status||1==n.status?"text-success":"text-danger",attrs:{icon:"1"===n.status||1==n.status?"toggle_on":"toggle_off"},on:{click:function(e){return t.toggleStatus(n.id)}}})],1)],1)],1)}))}}])},[e("template",{slot:"thead"},[e("vs-th",[t._v("Reviewer")]),t._v(" "),e("vs-th",[t._v("Product")]),t._v(" "),e("vs-th",[t._v("Review Text")]),t._v(" "),e("vs-th",[t._v("Rating")]),t._v(" "),e("vs-th",[t._v("Date")]),t._v(" "),e("vs-th",[t._v("Status")])],1)],2),t._v(" "),e("vs-pagination",{staticClass:"mt-4",attrs:{total:t.reviews.last_page},model:{value:t.table_options.current_page,callback:function(e){t.$set(t.table_options,"current_page",e)},expression:"table_options.current_page"}})],1)],1)}),[],!1,null,null,null);e.default=u.exports}}]);