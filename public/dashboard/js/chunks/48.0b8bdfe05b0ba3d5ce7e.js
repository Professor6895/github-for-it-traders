(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{QxE9:function(e,t,n){"use strict";n.r(t);var o=n("o0o1"),r=n.n(o),i=n("XH0y"),a=n.n(i);function s(e,t,n,o,r,i,a){try{var s=e[i](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(o,r)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function a(e){s(i,o,r,a,l,"next",e)}function l(e){s(i,o,r,a,l,"throw",e)}a(void 0)}))}}var c={data:function(){return{loading:!1,roles:[]}},mounted:function(){this.fetchRoles()},methods:{fetchRoles:function(){var e=this;return l(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.$http.get("/api/admin/user-roles");case 4:n=t.sent,e.roles=n.data.data,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),a.a.error(t.t0),e.errorNotification("Something went wrong!! Please retry");case 12:return t.prev=12,e.loading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,8,12,15]])})))()},deleteRole:function(e){var t,n=this;this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Are you sure you want to delete role?",accept:(t=l(r.a.mark((function t(){var o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$http.delete("/api/admin/user-roles/".concat(e));case 2:(o=t.sent).data.success?(n.successNotification(o.data.message),n.fetchRoles()):n.errorNotification(o.data.message);case 4:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)})})}}},u=n("KHd+"),d=Object(u.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loading?n("pageLoader"):n("vx-card",{staticClass:"card-padding-5"},[n("vs-table",{attrs:{search:"",stripe:"",data:e.roles,"max-items":"40",pagination:""},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.data;return e._l(o,(function(t,o){return n("vs-tr",{key:o,attrs:{data:t}},[n("vs-td",[n("i",[e._v("#"+e._s(t.id))])]),e._v(" "),n("vs-td",[e._v(e._s(t.name))]),e._v(" "),n("vs-td",e._l(t.permissions,(function(t){return n("vs-chip",{key:t,staticClass:"mr-3",attrs:{color:"primary"}},[e._v(e._s(e._f("title")(t,"-")))])})),1),e._v(" "),n("vs-td",[e.checkPermission("roles-edit")?n("router-link",{attrs:{to:{name:"admin-user-role",params:{id:t.id}}}},[n("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"warning",type:"filled",icon:"create"}})],1):e._e(),e._v(" "),e.checkPermission("roles-delete")?n("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"danger",type:"filled",icon:"delete"},on:{click:function(n){return e.deleteRole(t.id)}}}):e._e()],1)],1)}))}}])},[n("template",{slot:"header"},[n("strong",[e._v("Total :")]),e._v("\n         "+e._s(e.roles.length)+"    \n        "),e.checkPermission("roles-add")?n("router-link",{attrs:{to:"/admin/user-role"}},[n("vs-button",{attrs:{color:"primary",size:"small",type:"gradient"}},[e._v("Add Role")])],1):e._e()],1),e._v(" "),n("template",{slot:"thead"},[n("vs-th",{attrs:{"sort-key":"email"}},[e._v("ID")]),e._v(" "),n("vs-th",[e._v("Name")]),e._v(" "),n("vs-th",[e._v("Permissions")]),e._v(" "),n("vs-th",[e._v("Actions")])],1)],2)],1)],1)}),[],!1,null,null,null);t.default=d.exports},XH0y:function(e,t,n){var o,r;!function(i,a){"use strict";void 0===(r="function"==typeof(o=function(){var e=function(){},t="undefined"!=typeof window&&void 0!==window.navigator&&/Trident\/|MSIE /.test(window.navigator.userAgent),n=["trace","debug","info","warn","error"];function o(e,t){var n=e[t];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(t){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function r(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function i(n){return"debug"===n&&(n="log"),"undefined"!=typeof console&&("trace"===n&&t?r:void 0!==console[n]?o(console,n):void 0!==console.log?o(console,"log"):e)}function a(t,o){for(var r=0;r<n.length;r++){var i=n[r];this[i]=r<t?e:this.methodFactory(i,t,o)}this.log=this.debug}function s(e,t,n){return function(){"undefined"!=typeof console&&(a.call(this,t,n),this[e].apply(this,arguments))}}function l(e,t,n){return i(e)||s.apply(this,arguments)}function c(e,t,o){var r,i=this,s="loglevel";function c(){var e;if("undefined"!=typeof window&&s){try{e=window.localStorage[s]}catch(e){}if(void 0===e)try{var t=window.document.cookie,n=t.indexOf(encodeURIComponent(s)+"=");-1!==n&&(e=/^([^;]+)/.exec(t.slice(n))[1])}catch(e){}return void 0===i.levels[e]&&(e=void 0),e}}"string"==typeof e?s+=":"+e:"symbol"==typeof e&&(s=void 0),i.name=e,i.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},i.methodFactory=o||l,i.getLevel=function(){return r},i.setLevel=function(t,o){if("string"==typeof t&&void 0!==i.levels[t.toUpperCase()]&&(t=i.levels[t.toUpperCase()]),!("number"==typeof t&&t>=0&&t<=i.levels.SILENT))throw"log.setLevel() called with invalid level: "+t;if(r=t,!1!==o&&function(e){var t=(n[e]||"silent").toUpperCase();if("undefined"!=typeof window&&s){try{return void(window.localStorage[s]=t)}catch(e){}try{window.document.cookie=encodeURIComponent(s)+"="+t+";"}catch(e){}}}(t),a.call(i,t,e),"undefined"==typeof console&&t<i.levels.SILENT)return"No console available for logging"},i.setDefaultLevel=function(e){c()||i.setLevel(e,!1)},i.enableAll=function(e){i.setLevel(i.levels.TRACE,e)},i.disableAll=function(e){i.setLevel(i.levels.SILENT,e)};var u=c();null==u&&(u=null==t?"WARN":t),i.setLevel(u,!1)}var u=new c,d={};u.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=d[e];return t||(t=d[e]=new c(e,u.getLevel(),u.methodFactory)),t};var f="undefined"!=typeof window?window.log:void 0;return u.noConflict=function(){return"undefined"!=typeof window&&window.log===u&&(window.log=f),u},u.getLoggers=function(){return d},u.default=u,u})?o.call(t,n,t,e):o)||(e.exports=r)}()}}]);