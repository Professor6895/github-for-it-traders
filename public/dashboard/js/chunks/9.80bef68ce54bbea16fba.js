(window.webpackJsonp=window.webpackJsonp||[]).push([[9,17],{"5Dge":function(t,e){t.exports="/images/default-avatar.png?27b9408da668f335b85e9fe669908cab"},RxFF:function(t,e){t.exports="/images/loader.gif?03777e3e9736a04cfe5890dfa0cee1b6"},XH0y:function(t,e,n){var o,a;!function(r,s){"use strict";void 0===(a="function"==typeof(o=function(){var t=function(){},e="undefined"!=typeof window&&void 0!==window.navigator&&/Trident\/|MSIE /.test(window.navigator.userAgent),n=["trace","debug","info","warn","error"];function o(t,e){var n=t[e];if("function"==typeof n.bind)return n.bind(t);try{return Function.prototype.bind.call(n,t)}catch(e){return function(){return Function.prototype.apply.apply(n,[t,arguments])}}}function a(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function r(n){return"debug"===n&&(n="log"),"undefined"!=typeof console&&("trace"===n&&e?a:void 0!==console[n]?o(console,n):void 0!==console.log?o(console,"log"):t)}function s(e,o){for(var a=0;a<n.length;a++){var r=n[a];this[r]=a<e?t:this.methodFactory(r,e,o)}this.log=this.debug}function i(t,e,n){return function(){"undefined"!=typeof console&&(s.call(this,e,n),this[t].apply(this,arguments))}}function l(t,e,n){return r(t)||i.apply(this,arguments)}function c(t,e,o){var a,r=this,i="loglevel";function c(){var t;if("undefined"!=typeof window&&i){try{t=window.localStorage[i]}catch(t){}if(void 0===t)try{var e=window.document.cookie,n=e.indexOf(encodeURIComponent(i)+"=");-1!==n&&(t=/^([^;]+)/.exec(e.slice(n))[1])}catch(t){}return void 0===r.levels[t]&&(t=void 0),t}}"string"==typeof t?i+=":"+t:"symbol"==typeof t&&(i=void 0),r.name=t,r.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},r.methodFactory=o||l,r.getLevel=function(){return a},r.setLevel=function(e,o){if("string"==typeof e&&void 0!==r.levels[e.toUpperCase()]&&(e=r.levels[e.toUpperCase()]),!("number"==typeof e&&e>=0&&e<=r.levels.SILENT))throw"log.setLevel() called with invalid level: "+e;if(a=e,!1!==o&&function(t){var e=(n[t]||"silent").toUpperCase();if("undefined"!=typeof window&&i){try{return void(window.localStorage[i]=e)}catch(t){}try{window.document.cookie=encodeURIComponent(i)+"="+e+";"}catch(t){}}}(e),s.call(r,e,t),"undefined"==typeof console&&e<r.levels.SILENT)return"No console available for logging"},r.setDefaultLevel=function(t){c()||r.setLevel(t,!1)},r.enableAll=function(t){r.setLevel(r.levels.TRACE,t)},r.disableAll=function(t){r.setLevel(r.levels.SILENT,t)};var d=c();null==d&&(d=null==e?"WARN":e),r.setLevel(d,!1)}var d=new c,u={};d.getLogger=function(t){if("symbol"!=typeof t&&"string"!=typeof t||""===t)throw new TypeError("You must supply a name when creating a logger.");var e=u[t];return e||(e=u[t]=new c(t,d.getLevel(),d.methodFactory)),e};var v="undefined"!=typeof window?window.log:void 0;return d.noConflict=function(){return"undefined"!=typeof window&&window.log===d&&(window.log=v),d},d.getLoggers=function(){return u},d.default=d,d})?o.call(e,n,e,t):o)||(t.exports=a)}()},XvtT:function(t,e,n){"use strict";n("a62k")},a62k:function(t,e,n){var o=n("zluA");"string"==typeof o&&(o=[[t.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(o,a);o.locals&&(t.exports=o.locals)},d7Al:function(t,e,n){"use strict";n.r(e);var o=n("o0o1"),a=n.n(o),r=n("mtLw"),s=n("XH0y"),i=n.n(s);function l(t,e,n,o,a,r,s){try{var i=t[r](s),l=i.value}catch(t){return void n(t)}i.done?e(l):Promise.resolve(l).then(o,a)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var r=t.apply(e,n);function s(t){l(r,o,a,s,i,"next",t)}function i(t){l(r,o,a,s,i,"throw",t)}s(void 0)}))}}var d={data:function(){return{loading:!0,users:[]}},components:{PageLoader:r.default},mounted:function(){this.fetchUsers()},methods:{fetchUsers:function(){var t=this;return c(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$http.get("/api/admin/admin-users");case 4:n=e.sent,t.users=n.data.data,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),i.a.error(e.t0),t.$vs.notify({title:"Error",position:"top-right",text:"Something went wrong!! Please retry",color:"danger"});case 12:return e.prev=12,t.loading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})))()},deleteUser:function(t){var e,n=this;this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Are you sure you want to delete user?",accept:(e=c(a.a.mark((function e(){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.$http.delete("/api/admin/admin-users/".concat(t));case 2:(o=e.sent).data.success?(n.successNotification(o.data.message),n.fetchUsers()):n.errorNotification(o.data.message);case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})})}}},u=n("KHd+");function v(t,e,n,o,a,r,s){try{var i=t[r](s),l=i.value}catch(t){return void n(t)}i.done?e(l):Promise.resolve(l).then(o,a)}var f={data:function(){return{loading:!0,users:[]}},mounted:function(){this.fetchUsers()},methods:{fetchUsers:function(){var t,e=this;return(t=a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.$http.get("/api/admin/users");case 4:n=t.sent,e.users=n.data.data,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),i.a.error(t.t0),e.errorNotification("Something went wrong!! Please retry");case 12:return t.prev=12,e.loading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,8,12,15]])})),function(){var e=this,n=arguments;return new Promise((function(o,a){var r=t.apply(e,n);function s(t){v(r,o,a,s,i,"next",t)}function i(t){v(r,o,a,s,i,"throw",t)}s(void 0)}))})()}}},p={components:{AdminList:Object(u.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("pageLoader"):n("vs-table",{attrs:{search:"",stripe:"",data:t.users,"max-items":"40",pagination:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.data;return t._l(o,(function(e,o){return n("vs-tr",{key:o,attrs:{data:e}},[n("vs-td",[n("i",[t._v("#"+t._s(e.id))])]),t._v(" "),n("vs-td",[t._v(t._s(e.full_name))]),t._v(" "),n("vs-td",[t._v(t._s(e.email))]),t._v(" "),n("vs-td",[1!==e.id&&t.$store.state.AppActiveUser.id!==e.id?n("div",[t.checkPermission("admins-edit")?n("router-link",{attrs:{to:{name:"admin-user-detail",params:{id:e.id}}}},[n("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"warning",type:"filled",icon:"create"}})],1):t._e(),t._v(" "),t.checkPermission("admins-delete")?n("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"danger",type:"filled",icon:"delete"},on:{click:function(n){return t.deleteUser(e.id)}}}):t._e()],1):t._e()])],1)}))}}])},[n("template",{slot:"header"},[n("strong",[t._v("Total :")]),t._v("\n         "+t._s(t.users.length)+"    \n        "),t.checkPermission("admins-add")?n("router-link",{attrs:{to:"/admin/user-detail"}},[n("vs-button",{attrs:{color:"primary",size:"small",type:"gradient"}},[t._v("Add Admin")])],1):t._e()],1),t._v(" "),n("template",{slot:"thead"},[n("vs-th",{attrs:{"sort-key":"email"}},[t._v("ID")]),t._v(" "),n("vs-th",[t._v("Name")]),t._v(" "),n("vs-th",{attrs:{"sort-key":"email"}},[t._v("Email Address")]),t._v(" "),n("vs-th",[t._v("Actions")])],1)],2)],1)}),[],!1,null,null,null).exports,UsersList:Object(u.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.loading?o("pageLoader"):o("vs-table",{attrs:{search:"",stripe:"",data:t.users,"max-items":"40",pagination:""},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return t._l(a,(function(e,a){return o("vs-tr",{key:a,attrs:{data:e}},[o("vs-td",[o("vs-chip",[o("vs-avatar",{attrs:{color:"transparent",size:"50px",src:e.avatar?e.avatar:n("5Dge")}}),t._v("\n            "+t._s(e.name)+"\n          ")],1)],1),t._v(" "),o("vs-td",[t._v(t._s(e.email))]),t._v(" "),o("vs-td",[t._v(t._s(e.contact_number?e.contact_number:"--"))]),t._v(" "),o("vs-td",[t._v(t._s(e.date_of_birth?e.date_of_birth:"--"))]),t._v(" "),o("vs-td",[o("small",[t._v(t._s(t._f("date_format")(e.created_at,"MMMM Do YYYY")))])]),t._v(" "),o("vs-td",[1!==e.id&&t.$store.state.AppActiveUser.id!==e.id?o("div",[o("router-link",{attrs:{to:{name:"admin-user-detail",params:{id:e.id}}}},[o("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",size:"small",color:"warning",type:"filled",icon:"create"}})],1),t._v(" "),o("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",size:"small",color:"danger",type:"filled",icon:"delete"},on:{click:function(n){return t.deleteUser(e.id)}}})],1):t._e()])],1)}))}}])},[o("template",{slot:"header"},[o("strong",[t._v("Total :")]),t._v("\n       "+t._s(t.users.length)+"    \n    ")]),t._v(" "),o("template",{slot:"thead"},[o("vs-th",[t._v("Full Name")]),t._v(" "),o("vs-th",{attrs:{"sort-key":"email"}},[t._v("Email Address")]),t._v(" "),o("vs-th",[t._v("Contact")]),t._v(" "),o("vs-th",[t._v("DOB")]),t._v(" "),o("vs-th",[t._v("Member Since")]),t._v(" "),o("vs-th",[t._v("Actions")])],1)],2)],1)}),[],!1,null,null,null).exports}},m=Object(u.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("vx-card",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[e("div",{staticClass:"tabs-container px-6 pt-6",attrs:{slot:"no-body"},slot:"no-body"},[e("vs-tabs",{staticClass:"tab-action-btn-fill-conatiner"},[e("vs-tab",{attrs:{label:"Users",icon:"people"}},[e("div",{staticClass:"tab-text"},[e("UsersList")],1)]),this._v(" "),this.checkPermission("admins-view")?e("vs-tab",{attrs:{label:"Admins","icon-pack":"feather",icon:"icon-info"}},[e("div",{staticClass:"tab-text"},[e("AdminList")],1)]):this._e()],1)],1)])],1)}),[],!1,null,null,null);e.default=m.exports},mtLw:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("img",{staticClass:"loader-icon",attrs:{src:n("RxFF"),alt:"",width:"120px"}})])}],a=(n("XvtT"),n("KHd+")),r=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),o,!1,null,"1f857cd5",null);e.default=r.exports},zluA:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"[dir] .loader-icon[data-v-1f857cd5]{margin-top:120px;margin-bottom:120px}",""])}}]);