/*! For license information please see 65.40de88558be5a4975e33.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{IGv1:function(t,e,r){"use strict";r.r(e);var n=r("uBql"),a=r("Snq/");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",s=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof d?e:d,i=Object.create(a.prototype),o=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return E()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var s=x(o,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,o),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var p={};function d(){}function v(){}function h(){}var y={};l(y,a,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(L([])));w&&w!==e&&r.call(w,a)&&(y=w);var g=h.prototype=d.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(a,o){function s(){return new e((function(n,s){!function n(a,o,s,c){var l=f(t[a],t,o);if("throw"!==l.type){var u=l.arg,p=u.value;return p&&"object"==i(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(p).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,c)}))}c(l.arg)}(a,o,n,s)}))}return n=n?n.then(s,s):s()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function q(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(q,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return v.prototype=h,l(g,"constructor",h),l(h,"constructor",v),v.displayName=l(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,l(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},_(b.prototype),l(b.prototype,s,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new b(u(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(g),l(g,c,"Generator"),l(g,a,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;C(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function s(t,e,r,n,a,i,o){try{var s=t[i](o),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,a)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function o(t){s(i,n,a,o,c,"next",t)}function c(t){s(i,n,a,o,c,"throw",t)}o(void 0)}))}}var l={data:function(){return{filtered:!1,filters:{type:""},brands:[],dropdown_categories:[],faq:{},faq_popup:!1,faqs:[]}},components:{"v-select":r.n(a).a},mounted:function(){this.fetchCategoryDropdown(),this.fetchBrands()},methods:{fetchCategoryDropdown:function(){var t=this;return c(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"/api/admin/product-categories-dropdown",e.next=4,t.$http.get("/api/admin/product-categories-dropdown");case 4:r=e.sent,t.dropdown_categories=r.data.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.errorNotification("Something went wrong!! Please retry");case 11:return e.prev=11,t.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()},fetchBrands:function(){var t=this;return c(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"/api/admin/product-brands/get-dropdown",e.next=4,t.$http.get("/api/admin/product-brands/get-dropdown");case 4:r=e.sent,t.brands=r.data.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.errorNotification("Something went wrong while fetching albums!! Please retry");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},fetchFaqs:function(){var t=this;return c(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$validator.validateAll();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,"/api/admin/faqs",e.next=9,t.$http.get("/api/admin/faqs",{params:t.filters});case 9:r=e.sent,t.faqs=r.data.data,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),t.errorNotification("Something went wrong!! Please retry");case 16:return e.prev=16,t.filtered=!0,e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[5,13,16,19]])})))()},saveFaq:function(){var t=this;return c(o().mark((function e(){var r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={question:t.faq.question,answer:t.faq.answer,type:t.filters.type,brand_id:t.filters.brand_id,category_id:t.filters.category_id},"/api/admin/store-faq",e.next=5,t.$http.post("/api/admin/store-faq",r);case 5:(a=e.sent).data.success&&(t.successNotification(a.data.message),t.fetchFaqs(),t.faq_popup=!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),Object(n.e)(t.errors,e.t0),t.errorNotification("Something went wrong!! Please retry");case 13:return e.prev=13,e.finish(13);case 15:case"end":return e.stop()}}),e,null,[[0,9,13,15]])})))()}},watch:{faq_popup:function(t){t||(this.faq={},this.errors.clear())}}},u=r("KHd+"),f=Object(u.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col md:w-1/3"},[e("vx-card",{attrs:{title:"FAQs Filters"}},[e("div",{staticClass:"vx-col w-full mb-4"},[e("vs-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Type",name:"filter_type"},model:{value:t.filters.type,callback:function(e){t.$set(t.filters,"type",e)},expression:"filters.type"}},t._l([{text:"Brand",value:"brand"},{text:"Category",value:"category"}],(function(t,r){return e("vs-select-item",{key:r,attrs:{value:t.value,text:t.text}})})),1),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("filter_type "),expression:"errors.has('filter_type ')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("filter_type")))])],1),t._v(" "),"brand"==t.filters.type?e("div",{staticClass:"vx-col w-full mb-4"},[e("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Brand")]),t._v(" "),e("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"mb-3",attrs:{options:t.brands,label:"name",value:"id",reduce:function(t){return t.id},name:"brand_id"},model:{value:t.filters.brand_id,callback:function(e){t.$set(t.filters,"brand_id",e)},expression:"filters.brand_id"}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("brand_id"),expression:"errors.has('brand_id')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("brand_id")))])],1):t._e(),t._v(" "),"category"==t.filters.type?e("div",{staticClass:"vx-col w-full mb-4"},[e("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Category")]),t._v(" "),e("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"mb-3",attrs:{options:t.dropdown_categories,label:"title",value:"id",reduce:function(t){return t.id},name:"category_id"},model:{value:t.filters.category_id,callback:function(e){t.$set(t.filters,"category_id",e)},expression:"filters.category_id"}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("category_id"),expression:"errors.has('category_id')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("category_id")))])],1):t._e(),t._v(" "),e("div",{staticClass:"vx-col w-full"},[e("vs-button",{attrs:{type:"relief",color:"primary"},on:{click:t.fetchFaqs}},[t._v("Apply Filter")])],1)])],1),t._v(" "),e("div",{staticClass:"vx-col md:w-2/3"},[e("vx-card",{attrs:{title:"FAQs"}},[t.filtered?e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full"},[e("vs-button",{staticClass:"float-right",attrs:{type:"relief",color:"primary",size:"small"},on:{click:function(e){t.faq_popup=!0}}},[t._v("Add FAQ")])],1),t._v(" "),0==t.faqs.length?e("div",{staticClass:"vx-col w-full text-center mt-5 mb-5"},[e("h2",[t._v("NO FAQs ADDED!!")])]):e("div",{staticClass:"vx-col w-full mt-3"},t._l(t.faqs,(function(r){return e("div",{staticStyle:{padding:"15px",border:"1px solid #AAA","border-radius":"15px","margin-bottom":"15px"}},[e("p",[e("strong",[t._v("Q: ")]),t._v(" "+t._s(r.question))]),t._v(" "),e("p",[e("strong",{staticStyle:{display:"inline-block"}},[t._v("A: ")]),t._v(" "),e("span",{staticStyle:{display:"inline-block"},domProps:{innerHTML:t._s(r.answer)}})])])})),0)]):e("div",{staticClass:"mt-5 mb-5 pt-4 pb-4"},[e("div",{staticClass:"text-center"},[e("h2",[t._v("Please apply filter to view FAQs")])])])])],1)]),t._v(" "),e("vs-popup",{staticClass:"popup-lg",attrs:{title:"FAQ",active:t.faq_popup},on:{"update:active":function(e){t.faq_popup=e}}},[e("vs-input",{staticClass:"w-full",attrs:{name:"question",label:"Question"},model:{value:t.faq.question,callback:function(e){t.$set(t.faq,"question",e)},expression:"faq.question"}}),t._v(" "),e("p",[t.errors.has("question")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("question")))]):t._e()]),t._v(" "),e("div",{staticClass:"vx-col mt-4"},[e("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Answer")]),t._v(" "),e("q-editor",{model:{value:t.faq.answer,callback:function(e){t.$set(t.faq,"answer",e)},expression:"faq.answer"}})],1),t._v(" "),e("vs-button",{staticClass:"mr-3 mt-5",on:{click:t.saveFaq}},[t._v("Submit")])],1)],1)}),[],!1,null,null,null);e.default=f.exports}}]);