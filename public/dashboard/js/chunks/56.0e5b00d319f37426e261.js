/*! For license information please see 56.0e5b00d319f37426e261.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"2+by":function(t,e,r){"use strict";r.r(e);var n=r("uBql"),a=r("LvDl"),i=r.n(a);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){s=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),o=new C(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return E()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var s=x(o,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=p(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,o),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var v={};function f(){}function h(){}function d(){}var m={};l(m,a,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(S([])));y&&y!==e&&r.call(y,a)&&(m=y);var _=d.prototype=f.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(a,i){function s(){return new e((function(n,s){!function n(a,i,s,c){var l=p(t[a],t,i);if("throw"!==l.type){var u=l.arg,v=u.value;return v&&"object"==o(v)&&r.call(v,"__await")?e.resolve(v.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(v).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,c)}))}c(l.arg)}(a,i,n,s)}))}return n=n?n.then(s,s):s()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,v;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return h.prototype=d,l(_,"constructor",d),l(d,"constructor",h),h.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},w(b.prototype),l(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new b(u(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(_),l(_,c,"Generator"),l(_,a,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),v}},t}function c(t,e,r,n,a,i,o){try{var s=t[i](o),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,a)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function o(t){c(i,n,a,o,s,"next",t)}function s(t){c(i,n,a,o,s,"throw",t)}o(void 0)}))}}var u={props:["pageid"],data:function(){return{loading:!0,page_sections:[],page_section:{},sectionPopup:!1,thumbnail_preview:""}},mounted:function(){this.fetchPageSections()},methods:{fetchPageSections:function(){var t=this;return l(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$http.get("/api/admin/page/".concat(t.pageid,"/sections"));case 4:r=e.sent,t.page_sections=r.data.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.errorNotification("Something went wrong!! Please retry");case 11:return e.prev=11,t.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()},editSection:function(t){this.page_section=i.a.cloneDeep(t),this.thumbnail_preview=t.thumbnail_image.thumb,this.sectionPopup=!0},saveSection:function(){var t=this;return l(s().mark((function e(){var r,a,i,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$validator.validateAll();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,t.$vs.loading({container:"#page-section--container"}),r={title:t.page_section.title,content:t.page_section.content,excerpt:t.page_section.excerpt,thumbnail:t.page_section.thumbnail},a="/api/admin/page/".concat(t.pageid,"/sections"),t.page_section.id&&(a="/api/admin/page/".concat(t.pageid,"/sections/").concat(t.page_section.id),r._method="PATCH"),i=Object(n.a)(r),e.next=13,t.$http.post(a,i);case 13:o=e.sent,t.successNotification(o.data.message),t.sectionPopup=!1,t.fetchPageSections(),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(5),Object(n.e)(t.errors,e.t0),t.errorNotification("Something went wrong! Please retry!!");case 23:return e.prev=23,t.$vs.loading.close("#page-section--container > .con-vs-loading"),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[5,19,23,26]])})))()},imageUploaded:function(){var t=this.$refs.page_section_thumbnail_image.files[0];this.thumbnail_preview=URL.createObjectURL(t),this.page_section.thumbnail=t},clearImage:function(){this.page_section.thumbnail=null,this.thumbnail_preview=null,this.$refs.page_section_thumbnail_image.value=""},deletePageSection:function(t){var e,r=this;this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Are you sure you want to delete page section?",accept:(e=l(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.$http.delete("/api/admin/page/".concat(r.pageid,"/sections/").concat(t));case 2:(n=e.sent).data.success?(r.successNotification(n.data.message),r.fetchPageSections()):r.errorNotification(n.data.message);case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})})}},watch:{sectionPopup:function(t){t||(this.page_section={},this.thumbnail_preview="",this.errors.clear())}}},p=r("KHd+");function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(){f=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),o=new C(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return E()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var s=x(o,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,o),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u={};function p(){}function h(){}function d(){}var m={};s(m,a,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(S([])));y&&y!==e&&r.call(y,a)&&(m=y);var _=d.prototype=p.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(a,i){function o(){return new e((function(n,o){!function n(a,i,o,s){var c=l(t[a],t,i);if("throw"!==c.type){var u=c.arg,p=u.value;return p&&"object"==v(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,o,s)}),(function(t){n("throw",t,o,s)})):e.resolve(p).then((function(t){u.value=t,o(u)}),(function(t){return n("throw",t,o,s)}))}s(c.arg)}(a,i,n,o)}))}return n=n?n.then(o,o):o()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return h.prototype=d,s(_,"constructor",d),s(d,"constructor",h),h.displayName=s(d,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,o,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new b(c(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(_),s(_,o,"Generator"),s(_,a,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}function h(t,e,r,n,a,i,o){try{var s=t[i](o),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,a)}function d(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function o(t){h(i,n,a,o,s,"next",t)}function s(t){h(i,n,a,o,s,"throw",t)}o(void 0)}))}}var m={data:function(){return{id:null,thumbnail_preview:null,page:{meta:{}}}},components:{PageSections:Object(p.a)(u,(function(){var t=this,e=t._self._c;return e("div",[t.loading?e("pageLoader"):e("vx-card",{staticClass:"card-padding-5"},[e("vs-table",{attrs:{search:"",stripe:"",data:t.page_sections,"max-items":"40",pagination:""},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.data;return t._l(n,(function(r,n){return e("vs-tr",{key:n,attrs:{data:r}},[e("vs-td",[e("i",[t._v("#"+t._s(r.id))])]),t._v(" "),e("vs-td",[t._v(t._s(r.title))]),t._v(" "),e("vs-td",[e("small",[t._v(t._s(t._f("date_format")(r.created_at,"MMMM Do YYYY, h:mm a")))])]),t._v(" "),e("vs-td",[e("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"warning",type:"filled",size:"small",icon:"create"},on:{click:function(e){return t.editSection(r)}}}),t._v(" "),e("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",size:"small",color:"danger",type:"filled",icon:"delete"},on:{click:function(e){return t.deletePageSection(r.id)}}})],1)],1)}))}}])},[e("template",{slot:"header"},[e("vs-button",{attrs:{color:"primary",size:"small",type:"border"},on:{click:function(e){t.sectionPopup=!0}}},[t._v("Add Section")])],1),t._v(" "),e("template",{slot:"thead"},[e("vs-th",{attrs:{"sort-key":"email"}},[t._v("SN")]),t._v(" "),e("vs-th",[t._v("Title")]),t._v(" "),e("vs-th",{attrs:{"sort-key":"email"}},[t._v("Created At")]),t._v(" "),e("vs-th",[t._v("Actions")])],1)],2)],1),t._v(" "),e("vs-popup",{staticClass:"popup-lg",attrs:{title:"Page Section",active:t.sectionPopup},on:{"update:active":function(e){t.sectionPopup=e}}},[e("form",{staticClass:"vs-con-loading__container",attrs:{id:"page-section--container"}},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full mb-4"},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"title",label:"Section Title"},model:{value:t.page_section.title,callback:function(e){t.$set(t.page_section,"title",e)},expression:"page_section.title"}}),t._v(" "),t.errors.has("title")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("title")))]):t._e()],1),t._v(" "),e("div",{staticClass:"vx-col w-full mb-4"},[t.thumbnail_preview?e("div",{staticClass:"image-preview-container"},[e("div",{staticClass:"text-right float-right mr-10"},[e("vs-button",{staticClass:"image-remove--button",attrs:{radius:"",size:"small",color:"danger",type:"filled","icon-pack":"feather",icon:"icon-x"},on:{click:t.clearImage}})],1),t._v(" "),e("img",{attrs:{src:t.thumbnail_preview,alt:""}})]):t._e(),t._v(" "),e("input",{directives:[{name:"validate",rawName:"v-validate",value:"image|size:1024",expression:"'image|size:1024'"}],ref:"page_section_thumbnail_image",staticClass:"hidden",attrs:{type:"file",name:"thumbnail",accept:"image/*"},on:{change:t.imageUploaded}}),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("thumbnail"),expression:"errors.has('thumbnail')"}],staticClass:"text-danger text-sm mb-3"},[t._v(t._s(t.errors.first("thumbnail")))]),t._v(" "),e("vs-button",{attrs:{color:"primary",type:"border",size:"small"},on:{click:function(e){return t.$refs.page_section_thumbnail_image.click()}}},[t._v("Thumbnail Image")])],1),t._v(" "),e("div",{staticClass:"vx-col w-full mb-4"},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"excerpt",label:"Excerpt"},model:{value:t.page_section.excerpt,callback:function(e){t.$set(t.page_section,"excerpt",e)},expression:"page_section.excerpt"}}),t._v(" "),t.errors.has("excerpt")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("excerpt")))]):t._e()],1),t._v(" "),e("div",{staticClass:"vx-col w-full"},[e("q-editor",{model:{value:t.page_section.content,callback:function(e){t.$set(t.page_section,"content",e)},expression:"page_section.content"}})],1)]),t._v(" "),e("div",{staticClass:"flex justify-between flex-row-reverse"},[e("vs-button",{staticClass:"mt-4 float-right",attrs:{type:"border"},on:{click:t.saveSection}},[t._v("Save")])],1)])])],1)}),[],!1,null,null,null).exports,MetaFields:r("U87P").a},mounted:function(){this.id=this.$route.params.id,this.fetchPage()},methods:{fetchPage:function(){var t=this;return d(f().mark((function e(){var r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id){e.next=2;break}return e.abrupt("return");case 2:return t.$vs.loading({container:"#loading--container"}),e.prev=3,e.next=6,t.$http.get("/api/admin/pages/".concat(t.id));case 6:(r=e.sent).data.success&&(t.page=r.data.data,t.thumbnail_preview=t.page.thumbnail_image.thumb),e.next=15;break;case 10:if(e.prev=10,e.t0=e.catch(3),t.errorNotification("Something went wrong! Please retry!!"),404!==e.t0.response.status){e.next=15;break}return e.abrupt("return",t.$router.push({name:"page-error-404"}));case 15:return e.prev=15,t.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[3,10,15,18]])})))()},savePage:function(){var t=this;return d(f().mark((function e(){var r,a,i,o;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$validator.validateAll();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,t.$vs.loading({container:"#loading--container"}),r={title:t.page.title,content:t.page.content,excerpt:t.page.excerpt,thumbnail:t.page.thumbnail,meta:JSON.stringify(t.page.meta),delete_image:!0},a="/api/admin/pages",t.id&&(a="/api/admin/pages/".concat(t.id),r._method="PATCH"),i=Object(n.a)(r),e.next=13,t.$http.post(a,i);case 13:if(o=e.sent,t.successNotification(o.data.message),t.id){e.next=17;break}return e.abrupt("return",t.$router.push({name:"admin-page-detail",params:{id:o.data.page.id}}));case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(5),Object(n.e)(t.errors,e.t0),t.errorNotification("Something went wrong! Please retry!!");case 23:return e.prev=23,t.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[5,19,23,26]])})))()},imageUploaded:function(){var t=this.$refs.page_thumbnail_image.files[0];this.thumbnail_preview=URL.createObjectURL(t),this.page.thumbnail=t},clearImage:function(){this.page.thumbnail=null,this.thumbnail_preview=null,this.$refs.page_thumbnail_image.value="",this.page.delete_image=!0}}},g=Object(p.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[e("vs-tabs",[e("vs-tab",{attrs:{label:"Page"}},[e("div",{staticClass:"tab-text vx-row"},[e("div",{staticClass:"vx-col md:w-2/3 w-full mb-4"},[e("vx-card",[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full mb-4"},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"title",label:"Title"},model:{value:t.page.title,callback:function(e){t.$set(t.page,"title",e)},expression:"page.title"}}),t._v(" "),t.errors.has("title")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("title")))]):t._e()],1),t._v(" "),e("div",{staticClass:"vx-col w-full mb-4"},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"excerpt",label:"Excerpt (Short Description)"},model:{value:t.page.excerpt,callback:function(e){t.$set(t.page,"excerpt",e)},expression:"page.excerpt"}}),t._v(" "),t.errors.has("excerpt")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("excerpt")))]):t._e()],1),t._v(" "),e("div",{staticClass:"vx-col w-full mb-4"},[e("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Content")]),t._v(" "),e("q-editor",{model:{value:t.page.content,callback:function(e){t.$set(t.page,"content",e)},expression:"page.content"}}),t._v(" "),t.errors.has("content")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("content")))]):t._e()],1)])])],1),t._v(" "),e("div",{staticClass:"vx-col md:w-1/3 w-full mb-4"},[e("vx-card",{attrs:{title:"Page Thumbnail"}},[e("div",{staticClass:"w-full mb-4"},[t.thumbnail_preview?e("div",{staticClass:"image-preview-container"},[e("div",{staticClass:"text-right float-right mr-10"},[e("vs-button",{staticClass:"image-remove--button",attrs:{radius:"",size:"small",color:"danger",type:"filled","icon-pack":"feather",icon:"icon-x"},on:{click:t.clearImage}})],1),t._v(" "),e("img",{attrs:{src:t.thumbnail_preview,alt:""}})]):t._e(),t._v(" "),e("input",{directives:[{name:"validate",rawName:"v-validate",value:"ext:jpeg,jpg,png,webp,gif|size:1024",expression:"'ext:jpeg,jpg,png,webp,gif|size:1024'"}],ref:"page_thumbnail_image",staticClass:"hidden",attrs:{type:"file",name:"thumbnail",accept:"image/*"},on:{change:t.imageUploaded}}),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("thumbnail"),expression:"errors.has('thumbnail')"}],staticClass:"text-danger text-sm mb-3"},[t._v(t._s(t.errors.first("thumbnail")))]),t._v(" "),e("vs-button",{attrs:{color:"primary",type:"border",size:"small"},on:{click:function(e){return t.$refs.page_thumbnail_image.click()}}},[t._v("Thumbnail Image")])],1)]),t._v(" "),e("vx-card",{staticClass:"mt-3",attrs:{title:"SEO Meta"}},[e("MetaFields",{attrs:{small:""},model:{value:t.page.meta,callback:function(e){t.$set(t.page,"meta",e)},expression:"page.meta"}})],1)],1),t._v(" "),e("div",{staticClass:"vx-col w-full"},[e("vs-button",{attrs:{type:"relief",color:"primary"},on:{click:t.savePage}},[t._v("Save")])],1)])]),t._v(" "),t.checkPermission("page-sections-manage")?e("vs-tab",{attrs:{label:"Sections",disabled:!t.id}},[e("div",{staticClass:"tab-text"},[t.id?e("PageSections",{attrs:{pageid:t.id}}):t._e()],1)]):t._e()],1)],1)}),[],!1,null,null,null);e.default=g.exports},U87P:function(t,e,r){"use strict";var n={props:{value:{type:Object,required:!0},small:{type:Boolean,default:!1}},watch:{value:function(){this.$emit("input",this.value)}}},a=r("KHd+"),i=Object(a.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full mt-2",class:{"md:w-1/2":!t.small}},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:70",expression:"'max:70'"}],staticClass:"w-full",attrs:{name:"meta_title",maxlength:"100",label:"Meta Title"},model:{value:t.value.meta_title,callback:function(e){t.$set(t.value,"meta_title",e)},expression:"value.meta_title"}}),t._v(" "),e("p",[t.errors.has("meta_title")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("meta_title")))]):t._e()])],1),t._v(" "),e("div",{staticClass:"vx-col w-full mt-2",class:{"md:w-1/2":!t.small}},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:180",expression:"'max:180'"}],staticClass:"w-full",attrs:{name:"meta_keywords",label:"Meta Keywords",maxlength:"180"},model:{value:t.value.meta_keywords,callback:function(e){t.$set(t.value,"meta_keywords",e)},expression:"value.meta_keywords"}}),t._v(" "),e("p",[t.errors.has("meta_keywords")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("meta_keywords")))]):t._e()])],1),t._v(" "),e("div",{staticClass:"vx-col w-full mt-2"},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:180",expression:"'max:180'"}],staticClass:"w-full",attrs:{name:"meta_description",label:"Meta Description",maxlength:"180"},model:{value:t.value.meta_description,callback:function(e){t.$set(t.value,"meta_description",e)},expression:"value.meta_description"}}),t._v(" "),e("p",[t.errors.has("meta_description")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("meta_description")))]):t._e()])],1)])}),[],!1,null,null,null);e.a=i.exports}}]);