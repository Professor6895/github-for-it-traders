/*! For license information please see 54.be888808e7aa861c5e53.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{QxE9:function(t,e,n){"use strict";n.r(e);var r=n("XH0y"),o=n.n(r);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){a=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return N()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=_(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=f(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d={};function h(){}function p(){}function v(){}var y={};s(y,o,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(S([])));m&&m!==e&&n.call(m,o)&&(y=m);var w=v.prototype=h.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){var r;this._invoke=function(o,a){function c(){return new e((function(r,c){!function r(o,a,c,l){var s=f(t[o],t,a);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==i(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,c,l)}),(function(t){r("throw",t,c,l)})):e.resolve(d).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,l)}))}l(s.arg)}(o,a,r,c)}))}return r=r?r.then(c,c):c()}}function _(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=v,s(w,"constructor",v),s(v,"constructor",p),p.displayName=s(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(L.prototype),s(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new L(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),s(w,l,"Generator"),s(w,o,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function c(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){c(i,r,o,a,l,"next",t)}function l(t){c(i,r,o,a,l,"throw",t)}a(void 0)}))}}var s={data:function(){return{loading:!1,roles:[]}},mounted:function(){this.fetchRoles()},methods:{fetchRoles:function(){var t=this;return l(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$http.get("/api/admin/user-roles");case 4:n=e.sent,t.roles=n.data.data,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),o.a.error(e.t0),t.errorNotification("Something went wrong!! Please retry");case 12:return e.prev=12,t.loading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})))()},deleteRole:function(t){var e,n=this;this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Are you sure you want to delete role?",accept:(e=l(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.$http.delete("/api/admin/user-roles/".concat(t));case 2:(r=e.sent).data.success?(n.successNotification(r.data.message),n.fetchRoles()):n.errorNotification(r.data.message);case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})})}}},u=n("KHd+"),f=Object(u.a)(s,(function(){var t=this,e=t._self._c;return e("div",[t.loading?e("pageLoader"):e("vx-card",{staticClass:"card-padding-5"},[e("vs-table",{attrs:{search:"",stripe:"",data:t.roles,"max-items":"40",pagination:""},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.data;return t._l(r,(function(n,r){return e("vs-tr",{key:r,attrs:{data:n}},[e("vs-td",[e("i",[t._v("#"+t._s(n.id))])]),t._v(" "),e("vs-td",[t._v(t._s(n.name))]),t._v(" "),e("vs-td",t._l(n.permissions,(function(n){return e("vs-chip",{key:n,staticClass:"mr-3",attrs:{color:"primary"}},[t._v(t._s(t._f("title")(n,"-")))])})),1),t._v(" "),e("vs-td",[t.checkPermission("roles-edit")?e("router-link",{attrs:{to:{name:"admin-user-role",params:{id:n.id}}}},[e("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"warning",type:"filled",icon:"create"}})],1):t._e(),t._v(" "),t.checkPermission("roles-delete")?e("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"danger",type:"filled",icon:"delete"},on:{click:function(e){return t.deleteRole(n.id)}}}):t._e()],1)],1)}))}}])},[e("template",{slot:"header"},[e("strong",[t._v("Total :")]),t._v("\n         "+t._s(t.roles.length)+"    \n        "),t.checkPermission("roles-add")?e("router-link",{attrs:{to:"/admin/user-role"}},[e("vs-button",{attrs:{color:"primary",size:"small",type:"gradient"}},[t._v("Add Role")])],1):t._e()],1),t._v(" "),e("template",{slot:"thead"},[e("vs-th",{attrs:{"sort-key":"email"}},[t._v("ID")]),t._v(" "),e("vs-th",[t._v("Name")]),t._v(" "),e("vs-th",[t._v("Permissions")]),t._v(" "),e("vs-th",[t._v("Actions")])],1)],2)],1)],1)}),[],!1,null,null,null);e.default=f.exports},XH0y:function(t,e,n){var r,o;!function(i,a){"use strict";void 0===(o="function"==typeof(r=function(){var t=function(){},e="undefined"!=typeof window&&void 0!==window.navigator&&/Trident\/|MSIE /.test(window.navigator.userAgent),n=["trace","debug","info","warn","error"];function r(t,e){var n=t[e];if("function"==typeof n.bind)return n.bind(t);try{return Function.prototype.bind.call(n,t)}catch(e){return function(){return Function.prototype.apply.apply(n,[t,arguments])}}}function o(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function i(n){return"debug"===n&&(n="log"),"undefined"!=typeof console&&("trace"===n&&e?o:void 0!==console[n]?r(console,n):void 0!==console.log?r(console,"log"):t)}function a(e,r){for(var o=0;o<n.length;o++){var i=n[o];this[i]=o<e?t:this.methodFactory(i,e,r)}this.log=this.debug}function c(t,e,n){return function(){"undefined"!=typeof console&&(a.call(this,e,n),this[t].apply(this,arguments))}}function l(t,e,n){return i(t)||c.apply(this,arguments)}function s(t,e,r){var o,i=this;e=null==e?"WARN":e;var c="loglevel";function s(){var t;if("undefined"!=typeof window&&c){try{t=window.localStorage[c]}catch(t){}if(void 0===t)try{var e=window.document.cookie,n=e.indexOf(encodeURIComponent(c)+"=");-1!==n&&(t=/^([^;]+)/.exec(e.slice(n))[1])}catch(t){}return void 0===i.levels[t]&&(t=void 0),t}}"string"==typeof t?c+=":"+t:"symbol"==typeof t&&(c=void 0),i.name=t,i.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},i.methodFactory=r||l,i.getLevel=function(){return o},i.setLevel=function(e,r){if("string"==typeof e&&void 0!==i.levels[e.toUpperCase()]&&(e=i.levels[e.toUpperCase()]),!("number"==typeof e&&e>=0&&e<=i.levels.SILENT))throw"log.setLevel() called with invalid level: "+e;if(o=e,!1!==r&&function(t){var e=(n[t]||"silent").toUpperCase();if("undefined"!=typeof window&&c){try{return void(window.localStorage[c]=e)}catch(t){}try{window.document.cookie=encodeURIComponent(c)+"="+e+";"}catch(t){}}}(e),a.call(i,e,t),"undefined"==typeof console&&e<i.levels.SILENT)return"No console available for logging"},i.setDefaultLevel=function(t){e=t,s()||i.setLevel(t,!1)},i.resetLevel=function(){i.setLevel(e,!1),function(){if("undefined"!=typeof window&&c){try{return void window.localStorage.removeItem(c)}catch(t){}try{window.document.cookie=encodeURIComponent(c)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(t){}}}()},i.enableAll=function(t){i.setLevel(i.levels.TRACE,t)},i.disableAll=function(t){i.setLevel(i.levels.SILENT,t)};var u=s();null==u&&(u=e),i.setLevel(u,!1)}var u=new s,f={};u.getLogger=function(t){if("symbol"!=typeof t&&"string"!=typeof t||""===t)throw new TypeError("You must supply a name when creating a logger.");var e=f[t];return e||(e=f[t]=new s(t,u.getLevel(),u.methodFactory)),e};var d="undefined"!=typeof window?window.log:void 0;return u.noConflict=function(){return"undefined"!=typeof window&&window.log===u&&(window.log=d),u},u.getLoggers=function(){return f},u.default=u,u})?r.call(e,n,e,t):r)||(t.exports=o)}()}}]);