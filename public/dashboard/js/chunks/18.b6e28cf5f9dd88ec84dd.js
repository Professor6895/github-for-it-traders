/*! For license information please see 18.b6e28cf5f9dd88ec84dd.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+5zi":function(t,e,r){"use strict";var n=r("eM4r"),o={props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String},color:{type:String,default:"primary"},colorTo:{type:String},iconRight:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},link:{type:String,default:null},linkLabel:{type:String,default:"View All"},hideChart:{type:Boolean,default:!1}},methods:{getHex:function(t){if(n.a.isColor(t)){var e=window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(t));return e=e.split(","),"#"+((1<<24)+(Number(e[0])<<16)+(Number(e[1])<<8)+Number(e[2])).toString(16).slice(1)}return t},gradientToColor:function(t){var e={primary:"#A9A2F6",success:"#55DD92",warning:"#ffc085",danger:"#F97794"};return e[t]?e[t]:e.primary}}},i=r("KHd+"),a=Object(i.a)(o,(function(){var t=this,e=t._self._c;return e("vx-card",{staticClass:"overflow-hidden"},[e("div",{staticClass:"pb-3",attrs:{slot:"no-body"},slot:"no-body"},[t.loading?e("div",{staticClass:"mt-3 mb-3"},[e("div",{staticClass:"text-center"},[e("img",{staticStyle:{"margin-left":"33%"},attrs:{src:r("RxFF"),alt:"",width:"80px"}})])]):e("div",{staticClass:"p-6",class:{"flex justify-between flex-row-reverse items-center":t.iconRight,"text-center":!t.iconRight&&t.hideChart,"pb-0":!t.hideChart}},[e("feather-icon",{staticClass:"p-3 inline-flex rounded-full",class:["text-".concat(t.color),{"mb-4":!t.iconRight}],style:{background:"rgba(var(--vs-".concat(t.color,"),.15)")},attrs:{icon:t.icon}}),t._v(" "),e("div",{staticClass:"truncate"},[e("h2",{staticClass:"mb-1 font-bold"},[t._v(t._s(t.statistic))]),t._v(" "),e("span",[t._v(t._s(t.statisticTitle))]),t._v(" "),e("br"),t._v(" "),t.link?e("router-link",{attrs:{to:t.link}},[e("vs-button",{staticClass:"mt-3",attrs:{size:"small",color:t.color,type:"border"}},[t._v(t._s(t.linkLabel))])],1):t._e()],1)],1)])])}),[],!1,null,null,null);e.a=a.exports},"5Dge":function(t,e){t.exports="/images/default-avatar.png?27b9408da668f335b85e9fe669908cab"},RxFF:function(t,e){t.exports="/images/loader.gif?03777e3e9736a04cfe5890dfa0cee1b6"},ixJa:function(t,e,r){"use strict";r.r(e);var n=r("uBql");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",s=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=x(a,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h={};function d(){}function v(){}function p(){}var y={};l(y,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(S([])));g&&g!==e&&r.call(g,a)&&(y=g);var w=p.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var n;this._invoke=function(i,a){function s(){return new e((function(n,s){!function n(i,a,s,c){var l=f(t[i],t,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==o(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(h).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,c)}))}c(l.arg)}(i,a,n,s)}))}return n=n?n.then(s,s):s()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return v.prototype=p,l(w,"constructor",p),l(p,"constructor",v),v.displayName=l(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(_.prototype),l(_.prototype,s,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function a(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}var s={components:{StatisticsCardLine:r("+5zi").a},data:function(){return{loading_stats:!0,stats:{total_users:0,new_contacts:0,total_pages:0},modules:[]}},mounted:function(){this.modules=Object(n.b)(),this.getDashboardData()},methods:{getComponentName:function(t){try{return r("rpnf")("./".concat(t,"/resources/js/src/views/admin/Dashboard")).default}catch(t){}},getDashboardData:function(){var t,e=this;return(t=i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading_stats=!0,t.prev=1,t.next=4,e.$http.get("/api/admin/dashboard-data");case 4:r=t.sent,e.stats=r.data.data,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.errorNotification("Something went wrong!! Please retry");case 11:return t.prev=11,e.loading_stats=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function s(t){a(i,n,o,s,c,"next",t)}function c(t){a(i,n,o,s,c,"throw",t)}s(void 0)}))})()}}},c=r("KHd+"),l=Object(c.a)(s,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full mb-4 sm:w-1/4"},[e("statistics-card-line",{attrs:{icon:"UsersIcon",statistic:t.stats.total_users,iconRight:!0,loading:t.loading_stats,link:"/admin/user-management",statisticTitle:"Total Users",color:"success"}})],1),t._v(" "),e("div",{staticClass:"vx-col w-full mb-4 sm:w-1/4"},[e("statistics-card-line",{attrs:{icon:"MessageSquareIcon",statistic:t.stats.new_contacts,iconRight:!0,loading:t.loading_stats,link:"/admin/contact-inquiries",statisticTitle:"New Contact Inquiries"}})],1),t._v(" "),t.modules.includes("pages")?e("div",{staticClass:"vx-col w-full mb-4 sm:w-1/4"},[e("statistics-card-line",{attrs:{icon:"LayoutIcon",color:"danger",loading:t.loading_stats,statistic:t.stats.total_pages,iconRight:!0,statisticTitle:"Total Pages",link:"/admin/page",linkLabel:"Add New"}})],1):t._e(),t._v(" "),t.modules.includes("blogs")?e("div",{staticClass:"vx-col w-full mb-4 sm:w-1/4"},[e("statistics-card-line",{attrs:{icon:"LayoutIcon",color:"orange",loading:t.loading_stats,statistic:t.stats.total_blogs,iconRight:!0,statisticTitle:"Total Blogs",link:"/admin/blog",linkLabel:"Add New"}})],1):t._e()]),t._v(" "),t._l(t.modules,(function(r){return e("div",[e(t.getComponentName(r),{tag:"component"})],1)}))],2)}),[],!1,null,null,null);e.default=l.exports},nR4K:function(t,e,r){"use strict";r.r(e);function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=x(a,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h={};function d(){}function v(){}function p(){}var y={};l(y,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(S([])));g&&g!==e&&r.call(g,a)&&(y=g);var w=p.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var o;this._invoke=function(i,a){function s(){return new e((function(o,s){!function o(i,a,s,c){var l=f(t[i],t,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==n(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,s,c)}),(function(t){o("throw",t,s,c)})):e.resolve(h).then((function(t){u.value=t,s(u)}),(function(t){return o("throw",t,s,c)}))}c(l.arg)}(i,a,o,s)}))}return o=o?o.then(s,s):s()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return v.prototype=p,l(w,"constructor",p),l(p,"constructor",v),v.displayName=l(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(_.prototype),l(_.prototype,s,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function i(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}var a={components:{StatisticsCardLine:r("+5zi").a},data:function(){return{loading_stats:!0,stats:{products_count:0,orders_count:0,total_revenue:0,most_viewd_products:[],new_registrations:[],orders:[]}}},mounted:function(){this.getDashboardData()},methods:{getDashboardData:function(){var t,e=this;return(t=o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading_stats=!0,t.prev=1,t.next=4,e.$http.get("/api/admin/ecommerce-dashboard-data");case 4:r=t.sent,e.stats=r.data.data,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.errorNotification("Something went wrong!! Please retry");case 11:return t.prev=11,e.loading_stats=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function s(t){i(a,n,o,s,c,"next",t)}function c(t){i(a,n,o,s,c,"throw",t)}s(void 0)}))})()},redirectTo:function(t){return this.$router.push({path:t})}}},s=r("KHd+"),c=Object(s.a)(a,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full mb-4 sm:w-1/4"},[e("statistics-card-line",{attrs:{icon:"ShoppingBagIcon",statistic:t.stats.products_count,iconRight:!0,loading:t.loading_stats,link:"/admin/product",statisticTitle:"Total Products",color:"blue"}})],1),t._v(" "),e("div",{staticClass:"vx-col w-full mb-4 sm:w-1/4"},[e("statistics-card-line",{attrs:{icon:"ShoppingCartIcon",statistic:t.stats.orders_count,iconRight:!0,loading:t.loading_stats,link:"/admin/orders",linkLabel:"View Orders",statisticTitle:"Total Orders",color:"warning"}})],1),t._v(" "),e("div",{staticClass:"vx-col w-full mb-4 sm:w-1/4"},[e("statistics-card-line",{attrs:{icon:"DollarSignIcon",statistic:"Rs. ".concat(t.stats.total_revenue),iconRight:!0,loading:t.loading_stats,link:"/admin/orders",linkLabel:"View Orders",statisticTitle:"Revenue",color:"success"}})],1)]),t._v(" "),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full sm:w-1/3"},[e("vx-card",{attrs:{title:"Most Viewed Products (Last 7 Days)"}},[e("vs-list",t._l(t.stats.most_viewd_products,(function(t){return e("vs-list-item",{key:"most-viewed-".concat(t.id),attrs:{title:t.name,subtitle:"Total Views: ".concat(t.views_count)}},[e("template",{slot:"avatar"},[e("img",{staticClass:"mr-4",attrs:{src:t.product_image.thumb,alt:"",width:"70px"}})])],2)})),1)],1)],1),t._v(" "),e("div",{staticClass:"vx-col w-full sm:w-1/3"},[e("vs-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("span",{staticStyle:{"font-size":"18px","font-weight":"600"}},[t._v("Recent Orders")]),t._v(" "),e("vs-button",{staticClass:"float-right",attrs:{size:"small"},on:{click:function(e){return t.redirectTo("/admin/orders")}}},[t._v("View All")])],1),t._v(" "),e("vs-list",t._l(t.stats.orders,(function(n){return e("vs-list-item",{key:"new-order-".concat(n.id),staticClass:"mt-2 mb-2",attrs:{title:n.user.name,subtitle:t._f("date_format")(n.created_at)}},[e("template",{slot:"avatar"},[e("vs-avatar",{attrs:{color:"transparent",size:"50px",src:n.user.avatar?n.user.avatar:r("5Dge")}})],1),t._v(" "),e("strong",[t._v("Rs:")]),t._v("\n            "+t._s(n.total)+"\n          ")],2)})),1)],1)],1),t._v(" "),e("div",{staticClass:"vx-col w-full sm:w-1/3"},[e("vx-card",{attrs:{title:"New Registrations"}},[e("vs-list",t._l(t.stats.new_registrations,(function(n){return e("vs-list-item",{key:"new-register-".concat(n.id),attrs:{title:n.name,subtitle:n.email}},[e("template",{slot:"avatar"},[e("vs-avatar",{attrs:{color:"transparent",size:"50px",src:n.avatar?n.avatar:r("5Dge")}})],1),t._v(" "),e("strong",[t._v("Joined:")]),t._v("\n            "+t._s(t._f("date_format")(n.created_at,"timeago"))+"\n          ")],2)})),1)],1)],1)])])}),[],!1,null,null,null);e.default=c.exports},rpnf:function(t,e,r){var n={"./ecommerce/resources/js/src/views/admin/Dashboard":"nR4K"};function o(t){var e=i(t);return r(e)}function i(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=i,t.exports=o,o.id="rpnf"}}]);