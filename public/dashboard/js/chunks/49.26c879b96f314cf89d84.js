/*! For license information please see 49.26c879b96f314cf89d84.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"/cQd":function(t,e,n){"use strict";n.r(e);n("XH0y");var r=n("uBql");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){i=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=L(a,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d={};function p(){}function v(){}function h(){}var m={};l(m,a,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(C([])));g&&g!==e&&n.call(g,a)&&(m=g);var w=h.prototype=p.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var r;this._invoke=function(i,a){function s(){return new e((function(r,s){!function r(i,a,s,c){var l=f(t[i],t,a);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==o(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return r("throw",t,s,c)}))}c(l.arg)}(i,a,r,s)}))}return r=r?r.then(s,s):s()}}function L(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=h,l(w,"constructor",h),l(h,"constructor",v),v.displayName=l(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,s,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function a(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function s(t){a(i,r,o,s,c,"next",t)}function c(t){a(i,r,o,s,c,"throw",t)}s(void 0)}))}}var c={data:function(){return{id:null,permissions:[],role:{permissions:[]}}},methods:{getAllPermissions:function(){var t=this;return s(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.get("/api/admin/user-roles/all-permissions");case 3:(n=e.sent).data.success&&(t.permissions=n.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.errorNotification("Something went wrong! Please retry!!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},fetchRole:function(){var t=this;return s(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id){e.next=2;break}return e.abrupt("return");case 2:return t.$vs.loading({container:"#loading--container"}),e.prev=3,e.next=6,t.$http.get("/api/admin/user-roles/".concat(t.id));case 6:(n=e.sent).data.success&&(t.role=n.data.data),e.next=15;break;case 10:if(e.prev=10,e.t0=e.catch(3),t.errorNotification("Something went wrong! Please retry!!"),404!==e.t0.response.status){e.next=15;break}return e.abrupt("return",t.$router.push({name:"error-404"}));case 15:return e.prev=15,t.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[3,10,15,18]])})))()},saveRole:function(){var t=this;return s(i().mark((function e(){var n,o,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$validator.validateAll();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return t.$vs.loading({container:"#loading--container"}),e.prev=6,n={name:t.role.name,permissions:t.role.permissions},o="/api/admin/user-roles",t.id&&(o="/api/admin/user-roles/".concat(t.id),n._method="PATCH"),e.next=12,t.$http.post(o,n);case 12:if(!(a=e.sent).data.success){e.next=17;break}if(t.successNotification(a.data.message),t.id){e.next=17;break}return e.abrupt("return",t.$router.push({name:"admin-user-roles"}));case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(6),Object(r.e)(t.errors,e.t0),t.errorNotification("Something went wrong! Please retry!!");case 23:return e.prev=23,t.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[6,19,23,26]])})))()}},mounted:function(){this.id=this.$route.params.id,this.getAllPermissions(),this.fetchRole()}},l=n("KHd+"),u=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vx-col w-full mb-base"},[e("vx-card",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"name",label:"Role Name"},model:{value:t.role.name,callback:function(e){t.$set(t.role,"name",e)},expression:"role.name"}}),t._v(" "),t.errors.has("name")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("name")))]):t._e()],1)]),t._v(" "),e("div",{staticClass:"vx-row mt-2"},[e("div",{staticClass:"vx-col w-full"},[e("h5",[t._v("Permissions")]),t._v(" "),t.permissions.length?e("div",{staticClass:"mt-4"},[t._l(t.permissions,(function(n){return e("div",{key:n.module,staticClass:"mb-5"},[e("h5",[t._v(t._s(n.module))]),t._v(" "),e("ul",{staticClass:"mt-3"},t._l(n.permissions,(function(n,r){return e("li",{key:r,staticClass:"inline-block"},[e("vs-checkbox",{attrs:{"vs-value":r},model:{value:t.role.permissions,callback:function(e){t.$set(t.role,"permissions",e)},expression:"role.permissions"}},[t._v(t._s(n))])],1)})),0)])})),t._v(" "),t.errors.has("permissions")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("permissions")))]):t._e()],2):e("div",{staticClass:"pt-5 pb-5 mb-5 mt-5"},[e("p",{staticClass:"ml-5"},[t._v("Fetching Permissions!")])])])]),t._v(" "),e("div",{staticClass:"vx-row mt-2"},[e("div",{staticClass:"vx-col w-full"},[e("vs-button",{staticClass:"mr-3 mb-2",on:{click:t.saveRole}},[t._v("Submit")])],1)])])],1)}),[],!1,null,null,null);e.default=u.exports},XH0y:function(t,e,n){var r,o;!function(i,a){"use strict";void 0===(o="function"==typeof(r=function(){var t=function(){},e="undefined"!=typeof window&&void 0!==window.navigator&&/Trident\/|MSIE /.test(window.navigator.userAgent),n=["trace","debug","info","warn","error"];function r(t,e){var n=t[e];if("function"==typeof n.bind)return n.bind(t);try{return Function.prototype.bind.call(n,t)}catch(e){return function(){return Function.prototype.apply.apply(n,[t,arguments])}}}function o(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function i(n){return"debug"===n&&(n="log"),"undefined"!=typeof console&&("trace"===n&&e?o:void 0!==console[n]?r(console,n):void 0!==console.log?r(console,"log"):t)}function a(e,r){for(var o=0;o<n.length;o++){var i=n[o];this[i]=o<e?t:this.methodFactory(i,e,r)}this.log=this.debug}function s(t,e,n){return function(){"undefined"!=typeof console&&(a.call(this,e,n),this[t].apply(this,arguments))}}function c(t,e,n){return i(t)||s.apply(this,arguments)}function l(t,e,r){var o,i=this;e=null==e?"WARN":e;var s="loglevel";function l(){var t;if("undefined"!=typeof window&&s){try{t=window.localStorage[s]}catch(t){}if(void 0===t)try{var e=window.document.cookie,n=e.indexOf(encodeURIComponent(s)+"=");-1!==n&&(t=/^([^;]+)/.exec(e.slice(n))[1])}catch(t){}return void 0===i.levels[t]&&(t=void 0),t}}"string"==typeof t?s+=":"+t:"symbol"==typeof t&&(s=void 0),i.name=t,i.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},i.methodFactory=r||c,i.getLevel=function(){return o},i.setLevel=function(e,r){if("string"==typeof e&&void 0!==i.levels[e.toUpperCase()]&&(e=i.levels[e.toUpperCase()]),!("number"==typeof e&&e>=0&&e<=i.levels.SILENT))throw"log.setLevel() called with invalid level: "+e;if(o=e,!1!==r&&function(t){var e=(n[t]||"silent").toUpperCase();if("undefined"!=typeof window&&s){try{return void(window.localStorage[s]=e)}catch(t){}try{window.document.cookie=encodeURIComponent(s)+"="+e+";"}catch(t){}}}(e),a.call(i,e,t),"undefined"==typeof console&&e<i.levels.SILENT)return"No console available for logging"},i.setDefaultLevel=function(t){e=t,l()||i.setLevel(t,!1)},i.resetLevel=function(){i.setLevel(e,!1),function(){if("undefined"!=typeof window&&s){try{return void window.localStorage.removeItem(s)}catch(t){}try{window.document.cookie=encodeURIComponent(s)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(t){}}}()},i.enableAll=function(t){i.setLevel(i.levels.TRACE,t)},i.disableAll=function(t){i.setLevel(i.levels.SILENT,t)};var u=l();null==u&&(u=e),i.setLevel(u,!1)}var u=new l,f={};u.getLogger=function(t){if("symbol"!=typeof t&&"string"!=typeof t||""===t)throw new TypeError("You must supply a name when creating a logger.");var e=f[t];return e||(e=f[t]=new l(t,u.getLevel(),u.methodFactory)),e};var d="undefined"!=typeof window?window.log:void 0;return u.noConflict=function(){return"undefined"!=typeof window&&window.log===u&&(window.log=d),u},u.getLoggers=function(){return f},u.default=u,u})?r.call(e,n,e,t):r)||(t.exports=o)}()}}]);