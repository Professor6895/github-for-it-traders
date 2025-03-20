(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"/cQd":function(e,t,n){"use strict";n.r(t);var o=n("o0o1"),r=n.n(o),s=(n("XH0y"),n("uBql"));function i(e,t,n,o,r,s,i){try{var a=e[s](i),l=a.value}catch(e){return void n(e)}a.done?t(l):Promise.resolve(l).then(o,r)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var s=e.apply(t,n);function a(e){i(s,o,r,a,l,"next",e)}function l(e){i(s,o,r,a,l,"throw",e)}a(void 0)}))}}var l={data:function(){return{id:null,permissions:[],role:{permissions:[]}}},methods:{getAllPermissions:function(){var e=this;return a(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.get("/api/admin/user-roles/all-permissions");case 3:(n=t.sent).data.success&&(e.permissions=n.data.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.errorNotification("Something went wrong! Please retry!!");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},fetchRole:function(){var e=this;return a(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.id){t.next=2;break}return t.abrupt("return");case 2:return e.$vs.loading({container:"#loading--container"}),t.prev=3,t.next=6,e.$http.get("/api/admin/user-roles/".concat(e.id));case 6:(n=t.sent).data.success&&(e.role=n.data.data),t.next=15;break;case 10:if(t.prev=10,t.t0=t.catch(3),e.errorNotification("Something went wrong! Please retry!!"),404!==t.t0.response.status){t.next=15;break}return t.abrupt("return",e.$router.push({name:"error-404"}));case 15:return t.prev=15,e.$vs.loading.close("#loading--container > .con-vs-loading"),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[3,10,15,18]])})))()},saveRole:function(){var e=this;return a(r.a.mark((function t(){var n,o,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$validator.validateAll();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:return e.$vs.loading({container:"#loading--container"}),t.prev=6,n={name:e.role.name,permissions:e.role.permissions},o="/api/admin/user-roles",e.id&&(o="/api/admin/user-roles/".concat(e.id),n._method="PATCH"),t.next=12,e.$http.post(o,n);case 12:if(!(i=t.sent).data.success){t.next=17;break}if(e.successNotification(i.data.message),e.id){t.next=17;break}return t.abrupt("return",e.$router.push({name:"admin-user-roles"}));case 17:t.next=23;break;case 19:t.prev=19,t.t0=t.catch(6),Object(s.e)(e.errors,t.t0),e.errorNotification("Something went wrong! Please retry!!");case 23:return t.prev=23,e.$vs.loading.close("#loading--container > .con-vs-loading"),t.finish(23);case 26:case"end":return t.stop()}}),t,null,[[6,19,23,26]])})))()}},mounted:function(){this.id=this.$route.params.id,this.getAllPermissions(),this.fetchRole()}},c=n("KHd+"),u=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vx-col w-full mb-base"},[n("vx-card",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[n("div",{staticClass:"vx-row"},[n("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[n("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"name",label:"Role Name"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}}),e._v(" "),e.errors.has("name")?n("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("name")))]):e._e()],1)]),e._v(" "),n("div",{staticClass:"vx-row mt-2"},[n("div",{staticClass:"vx-col w-full"},[n("h5",[e._v("Permissions")]),e._v(" "),e.permissions.length?n("div",{staticClass:"mt-4"},[e._l(e.permissions,(function(t){return n("div",{key:t.module,staticClass:"mb-5"},[n("h5",[e._v(e._s(t.module))]),e._v(" "),n("ul",{staticClass:"mt-3"},e._l(t.permissions,(function(t,o){return n("li",{key:o,staticClass:"inline-block"},[n("vs-checkbox",{attrs:{"vs-value":o},model:{value:e.role.permissions,callback:function(t){e.$set(e.role,"permissions",t)},expression:"role.permissions"}},[e._v(e._s(t))])],1)})),0)])})),e._v(" "),e.errors.has("permissions")?n("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("permissions")))]):e._e()],2):n("div",{staticClass:"pt-5 pb-5 mb-5 mt-5"},[n("p",{staticClass:"ml-5"},[e._v("Fetching Permissions!")])])])]),e._v(" "),n("div",{staticClass:"vx-row mt-2"},[n("div",{staticClass:"vx-col w-full"},[n("vs-button",{staticClass:"mr-3 mb-2",on:{click:e.saveRole}},[e._v("Submit")])],1)])])],1)}),[],!1,null,null,null);t.default=u.exports},XH0y:function(e,t,n){var o,r;!function(s,i){"use strict";void 0===(r="function"==typeof(o=function(){var e=function(){},t="undefined"!=typeof window&&void 0!==window.navigator&&/Trident\/|MSIE /.test(window.navigator.userAgent),n=["trace","debug","info","warn","error"];function o(e,t){var n=e[t];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(t){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function r(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function s(n){return"debug"===n&&(n="log"),"undefined"!=typeof console&&("trace"===n&&t?r:void 0!==console[n]?o(console,n):void 0!==console.log?o(console,"log"):e)}function i(t,o){for(var r=0;r<n.length;r++){var s=n[r];this[s]=r<t?e:this.methodFactory(s,t,o)}this.log=this.debug}function a(e,t,n){return function(){"undefined"!=typeof console&&(i.call(this,t,n),this[e].apply(this,arguments))}}function l(e,t,n){return s(e)||a.apply(this,arguments)}function c(e,t,o){var r,s=this,a="loglevel";function c(){var e;if("undefined"!=typeof window&&a){try{e=window.localStorage[a]}catch(e){}if(void 0===e)try{var t=window.document.cookie,n=t.indexOf(encodeURIComponent(a)+"=");-1!==n&&(e=/^([^;]+)/.exec(t.slice(n))[1])}catch(e){}return void 0===s.levels[e]&&(e=void 0),e}}"string"==typeof e?a+=":"+e:"symbol"==typeof e&&(a=void 0),s.name=e,s.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},s.methodFactory=o||l,s.getLevel=function(){return r},s.setLevel=function(t,o){if("string"==typeof t&&void 0!==s.levels[t.toUpperCase()]&&(t=s.levels[t.toUpperCase()]),!("number"==typeof t&&t>=0&&t<=s.levels.SILENT))throw"log.setLevel() called with invalid level: "+t;if(r=t,!1!==o&&function(e){var t=(n[e]||"silent").toUpperCase();if("undefined"!=typeof window&&a){try{return void(window.localStorage[a]=t)}catch(e){}try{window.document.cookie=encodeURIComponent(a)+"="+t+";"}catch(e){}}}(t),i.call(s,t,e),"undefined"==typeof console&&t<s.levels.SILENT)return"No console available for logging"},s.setDefaultLevel=function(e){c()||s.setLevel(e,!1)},s.enableAll=function(e){s.setLevel(s.levels.TRACE,e)},s.disableAll=function(e){s.setLevel(s.levels.SILENT,e)};var u=c();null==u&&(u=null==t?"WARN":t),s.setLevel(u,!1)}var u=new c,d={};u.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=d[e];return t||(t=d[e]=new c(e,u.getLevel(),u.methodFactory)),t};var v="undefined"!=typeof window?window.log:void 0;return u.noConflict=function(){return"undefined"!=typeof window&&window.log===u&&(window.log=v),u},u.getLoggers=function(){return d},u.default=u,u})?o.call(t,n,t,e):o)||(e.exports=r)}()}}]);