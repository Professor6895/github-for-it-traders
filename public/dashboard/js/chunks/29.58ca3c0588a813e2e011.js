/*! For license information please see 29.58ca3c0588a813e2e011.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{HWYs:function(e,t,r){"use strict";r("e6EI")},e6EI:function(e,t,r){var n=r("nekn");"string"==typeof n&&(n=[[e.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(n,s);n.locals&&(e.exports=n.locals)},j4ks:function(e,t,r){"use strict";r.r(t);var n=r("v/P4"),s=r("LvDl"),o=r.n(s),a=r("0Vgt"),i=r("uBql");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){l=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},s=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(e){i=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var s=t&&t.prototype instanceof m?t:m,o=Object.create(s.prototype),a=new k(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(s,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===s)throw o;return L()}for(r.method=s,r.arg=o;;){var a=r.delegate;if(a){var i=x(a,r);if(i){if(i===p)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=v(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,a),o}function v(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var p={};function m(){}function d(){}function _(){}var f={};i(f,s,(function(){return this}));var g=Object.getPrototypeOf,h=g&&g(g(O([])));h&&h!==t&&r.call(h,s)&&(f=h);var y=_.prototype=m.prototype=Object.create(f);function b(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var n;this._invoke=function(s,o){function a(){return new t((function(n,a){!function n(s,o,a,i){var l=v(e[s],e,o);if("throw"!==l.type){var u=l.arg,p=u.value;return p&&"object"==c(p)&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,a,i)}),(function(e){n("throw",e,a,i)})):t.resolve(p).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,i)}))}i(l.arg)}(s,o,n,a)}))}return n=n?n.then(a,a):a()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=v(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var s=n.arg;return s?s.done?(t[e.resultName]=s.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):s:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function O(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=_,i(y,"constructor",_),i(_,"constructor",d),d.displayName=i(_,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,i(e,a,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(w.prototype),i(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,s,o){void 0===o&&(o=Promise);var a=new w(u(t,r,n,s),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(y),i(y,a,"Generator"),i(y,s,(function(){return this})),i(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n];if(s.tryLoc<=this.prev&&r.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var o=s;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var s=n.arg;E(r)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}function u(e,t,r,n,s,o,a){try{var i=e[o](a),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,s)}function v(e){return function(){var t=this,r=arguments;return new Promise((function(n,s){var o=e.apply(t,r);function a(e){u(o,n,s,a,i,"next",e)}function i(e){u(o,n,s,a,i,"throw",e)}a(void 0)}))}}var p={data:function(){return{ecommerce_settings:{initial_popup:{}}}},components:{"settings-sidebar":n.a},computed:{state:function(){return this.$store.state.settings}},mounted:function(){this.initComponent()},watch:{state:{deep:!0,handler:function(){this.initComponent()}}},methods:{initComponent:function(){o.a.has(this.$store.state,"settings.dashboard_settings.ecommerce")&&(this.ecommerce_settings=o.a.cloneDeep(this.$store.state.settings.dashboard_settings.ecommerce))},saveEcommerceSettings:function(){var e=this;return v(l().mark((function t(){var r,n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$validator.validateAll();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:return e.$vs.loading({container:"#loading--container"}),t.prev=6,r={_method:"PATCH",settings:e.ecommerce_settings},t.next=10,e.$http.post("/api/admin/settings/ecommerce/update-settings",r);case 10:(n=t.sent).data.success&&(a.a.dispatch("settings/fetchSettings",{once:!1}),e.successNotification(n.data.message)),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(6),console.log(t.t0),e.errorNotification("Something went wrong! Please retry!!");case 18:return t.prev=18,e.$vs.loading.close("#loading--container > .con-vs-loading"),t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[6,14,18,21]])})))()},generateOrderMessagePreview:function(e){return e&&(e=(e=(e=(e=e.replace("{user_name}","John Doe")).replace("{order_id}","ORD986555")).replace("{order_total}","15000")).replace("{order_url}","https://website.com/user-profile/order-detail?invoice_number=ORD9")),e},popUpImageUploaded:function(){var e=this.$refs.upload_popup_image.files[0];this.ecommerce_settings.initial_popup.image=URL.createObjectURL(e)},clearImage:function(){this.ecommerce_settings.initial_popup.image=null,this.$refs.upload_popup_image.value=""},saveEcommercePopupSetting:function(){var e=this;return v(l().mark((function t(){var r,n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r={enabled:e.ecommerce_settings.initial_popup.enabled,popup_delay:e.ecommerce_settings.initial_popup.popup_delay,interval:e.ecommerce_settings.initial_popup.interval,link:e.ecommerce_settings.initial_popup.link},e.$refs.upload_popup_image&&e.$refs.upload_popup_image.files.length&&(r.image=e.$refs.upload_popup_image.files[0]),r=Object(i.a)(r),t.next=6,e.$http.post("/api/admin/ecommerce-settings/save-popup-settings",r);case 6:(n=t.sent).data.success&&(a.a.dispatch("settings/fetchSettings",{once:!1}),e.successNotification(n.data.message)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}},m=r("KHd+"),d=Object(m.a)(p,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"vx-row"},[t("div",{staticClass:"vx-col sm:w-1/6 w-full mb-2"},[t("settings-sidebar")],1),e._v(" "),t("div",{staticClass:"vx-col sm:w-5/6 mb-2"},[t("vx-card",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[t("div",{staticClass:"vx-row"},[t("div",{staticClass:"vx-col mb-4 w-full"},[t("h3",{staticClass:"mb-2"},[e._v("Order Messaging")]),e._v(" "),t("vs-alert",{attrs:{color:"primary",active:"true"}},[e._v("\n            Available Short Codes to use in your messages: "),t("br"),t("br"),e._v("\n\n            * {order_id} - Order Invoice Number "),t("br"),e._v("\n            * {user_name} - Full Name Of user"),t("br"),e._v("\n            * {order_total} - Total amount of order"),t("br"),e._v("\n            * {order_url} - Link to check order status\n          ")])],1),e._v(" "),t("div",{staticClass:"vx-col w-3/5"},[t("div",{staticClass:"vx-row"},[t("div",{staticClass:"vx-col w-full mb-3"},[t("strong",[e._v("Order Placed Message")]),e._v(" "),t("vs-textarea",{staticClass:"w-full",attrs:{name:"order_placed_message"},model:{value:e.ecommerce_settings.order_placed_message,callback:function(t){e.$set(e.ecommerce_settings,"order_placed_message",t)},expression:"ecommerce_settings.order_placed_message"}})],1),e._v(" "),t("div",{staticClass:"vx-col w-full mb-3"},[t("strong",[e._v("Order Confirmed Message")]),e._v(" "),t("vs-textarea",{staticClass:"w-full",attrs:{name:"order_confirmed_message"},model:{value:e.ecommerce_settings.order_confirmed_message,callback:function(t){e.$set(e.ecommerce_settings,"order_confirmed_message",t)},expression:"ecommerce_settings.order_confirmed_message"}})],1),e._v(" "),t("div",{staticClass:"vx-col w-full mb-3"},[t("strong",[e._v("Order Dispatched Message")]),e._v(" "),t("vs-textarea",{staticClass:"w-full",attrs:{name:"order_dispatched_message"},model:{value:e.ecommerce_settings.order_dispatched_message,callback:function(t){e.$set(e.ecommerce_settings,"order_dispatched_message",t)},expression:"ecommerce_settings.order_dispatched_message"}})],1),e._v(" "),t("div",{staticClass:"vx-col w-full mb-3"},[t("strong",[e._v("Order Completed Message")]),e._v(" "),t("vs-textarea",{staticClass:"w-full",attrs:{name:"order_completed_message"},model:{value:e.ecommerce_settings.order_completed_message,callback:function(t){e.$set(e.ecommerce_settings,"order_completed_message",t)},expression:"ecommerce_settings.order_completed_message"}})],1),e._v(" "),t("div",{staticClass:"vx-col w-full mb-3"},[t("strong",[e._v("Order Canceled Message")]),e._v(" "),t("vs-textarea",{staticClass:"w-full",attrs:{name:"order_canceled_message"},model:{value:e.ecommerce_settings.order_canceled_message,callback:function(t){e.$set(e.ecommerce_settings,"order_canceled_message",t)},expression:"ecommerce_settings.order_canceled_message"}})],1)])]),e._v(" "),t("div",{staticClass:"vx-col w-2/5"},[t("div",{staticClass:"vx-row p-3"},[t("div",{staticClass:"vx-col w-full mb-3"},[t("h4",[e._v("Order Email/SMS Message Preview")])]),e._v(" "),t("div",{staticClass:"vx-col w-full mb-4"},[t("strong",[e._v("Order Placed Message")]),e._v(" "),t("br"),e._v("\n              "+e._s(e.generateOrderMessagePreview(e.ecommerce_settings.order_placed_message))+"\n            ")]),e._v(" "),t("div",{staticClass:"vx-col w-full mb-4"},[t("strong",[e._v("Order Confirmed Message")]),e._v(" "),t("br"),e._v("\n              "+e._s(e.generateOrderMessagePreview(e.ecommerce_settings.order_confirmed_message))+"\n            ")]),e._v(" "),t("div",{staticClass:"vx-col w-full mb-4"},[t("strong",[e._v("Order Dispatched Message")]),e._v(" "),t("br"),e._v("\n              "+e._s(e.generateOrderMessagePreview(e.ecommerce_settings.order_dispatched_message))+"\n            ")]),e._v(" "),t("div",{staticClass:"vx-col w-full mb-4"},[t("strong",[e._v("Order Completed Message")]),e._v(" "),t("br"),e._v("\n              "+e._s(e.generateOrderMessagePreview(e.ecommerce_settings.order_completed_message))+"\n            ")]),e._v(" "),t("div",{staticClass:"vx-col w-full mb-4"},[t("strong",[e._v("Order Canceled Message")]),e._v(" "),t("br"),e._v("\n              "+e._s(e.generateOrderMessagePreview(e.ecommerce_settings.order_canceled_message))+"\n            ")])])]),e._v(" "),t("div",{staticClass:"vx-col w-full"},[t("hr"),e._v(" "),t("div",{staticClass:"vx-col w-full mt-4 mb-4"},[t("strong",[e._v("Website Per Page Products Count")]),e._v(" "),t("br"),e._v(" "),t("vs-input",{staticClass:"w-full",attrs:{type:"number",name:"api_endpoint"},model:{value:e.ecommerce_settings.website_per_page_pagination,callback:function(t){e.$set(e.ecommerce_settings,"website_per_page_pagination",t)},expression:"ecommerce_settings.website_per_page_pagination"}})],1)]),e._v(" "),t("div",{staticClass:"vx-col w-full"},[t("vs-button",{attrs:{color:"success",type:"filled",size:"small"},on:{click:e.saveEcommerceSettings}},[e._v("Save")])],1)])]),e._v(" "),t("vx-card",{staticClass:"mt-2",attrs:{title:"Website Initial Popup"}},[t("div",{staticClass:"vx-row"},[t("div",{staticClass:"vx-col w-full"},[t("vs-switch",{staticClass:"mt-3",attrs:{color:"success","vs-value":"1"},model:{value:e.ecommerce_settings.initial_popup.enabled,callback:function(t){e.$set(e.ecommerce_settings.initial_popup,"enabled",t)},expression:"ecommerce_settings.initial_popup.enabled"}},[t("span",{attrs:{slot:"on"},slot:"on"},[e._v("Enabled")]),e._v(" "),t("span",{attrs:{slot:"off"},slot:"off"},[e._v("Disabled")])])],1),e._v(" "),e.ecommerce_settings.initial_popup.enabled?t("div",{staticClass:"vx-col w-2/3 mt-3"},[t("div",{staticClass:"vx-row"},[t("vs-select",{staticClass:"vx-col w-1/2",attrs:{label:"Show Popup On"},model:{value:e.ecommerce_settings.initial_popup.interval,callback:function(t){e.$set(e.ecommerce_settings.initial_popup,"interval",t)},expression:"ecommerce_settings.initial_popup.interval"}},e._l([{text:"On Every Load",value:"everytime"},{text:"Every 1 Minute",value:"1"},{text:"Every 5 Minutes",value:"5"},{text:"Every 10 Minutes",value:"10"},{text:"Every 20 Minutes",value:"20"},{text:"Every 30 Minutes",value:"30"},{text:"Every 40 Minutes",value:"40"},{text:"Every 50 Minutes",value:"50"},{text:"Every 1 Hour",value:"60"},{text:"Every 1 & half Hour",value:"90"},{text:"Every 2 Hours",value:"120"},{text:"Every 3 Hours",value:"180"},{text:"Every 4 Hours",value:"240"},{text:"Every 5 Hours",value:"300"},{text:"Every 10 Hours",value:"600"},{text:"Every 12 Hours",value:"720"}],(function(e,r){return t("vs-select-item",{key:"interval".concat(r),attrs:{value:e.value,text:e.text}})})),1),e._v(" "),t("vs-input",{staticClass:"vx-col w-1/2",attrs:{label:"Popup Delay (seconds)",name:"order_placed_message"},model:{value:e.ecommerce_settings.initial_popup.popup_delay,callback:function(t){e.$set(e.ecommerce_settings.initial_popup,"popup_delay",t)},expression:"ecommerce_settings.initial_popup.popup_delay"}}),e._v(" "),t("vs-input",{staticClass:"vx-col w-full mt-2 mb-2",attrs:{label:"URL",name:"link"},model:{value:e.ecommerce_settings.initial_popup.link,callback:function(t){e.$set(e.ecommerce_settings.initial_popup,"link",t)},expression:"ecommerce_settings.initial_popup.link"}}),e._v(" "),t("div",{staticClass:"vx-col w-full mt-4"},[e.ecommerce_settings.initial_popup.image?t("div",{staticClass:"image-preview-container"},[t("div",{staticClass:"text-right float-right mr-10"},[t("vs-button",{staticClass:"image-remove--button",attrs:{radius:"",size:"small",color:"danger",type:"filled","icon-pack":"feather",icon:"icon-x"},on:{click:e.clearImage}})],1),e._v(" "),t("img",{attrs:{src:e.ecommerce_settings.initial_popup.image,alt:""}})]):e._e(),e._v(" "),t("input",{ref:"upload_popup_image",staticClass:"hidden",attrs:{type:"file",accept:"image/*"},on:{change:e.popUpImageUploaded}}),e._v(" "),t("vs-button",{attrs:{color:"primary",size:"small",type:"border"},on:{click:function(t){return e.$refs.upload_popup_image.click()}}},[e._v("Upload Logo")])],1)],1)]):e._e(),e._v(" "),t("div",{staticClass:"vx-col w-full mt-3"},[t("vs-button",{attrs:{color:"success",type:"filled",size:"small"},on:{click:e.saveEcommercePopupSetting}},[e._v("Save")])],1)])])],1)])}),[],!1,null,null,null);t.default=d.exports},nekn:function(e,t,r){(e.exports=r("I1BE")(!1)).push([e.i,"",""])},"v/P4":function(e,t,r){"use strict";var n={data:function(){return{}},computed:{dashboard_settings:function(){return this.$store.state.settings.dashboard_settings},active_tab:function(){var e=location.href.split("/");return e[e.indexOf("settings")+1]}}},s=(r("HWYs"),r("KHd+")),o=Object(s.a)(n,(function(){var e=this,t=e._self._c;return t("vx-card",{staticClass:"dashboard--setting-sidebar",attrs:{title:"Modules"}},[t("ul",e._l(e.dashboard_settings,(function(r,n){return t("li",{key:n,staticClass:"p-2 font-medium items-center"},[t("router-link",{staticClass:"flex cursor-pointer",attrs:{tag:"span",to:"/admin/settings/".concat(n)}},[t("span",{class:{"text-primary":n===e.active_tab}},[t("vs-icon",{staticClass:"align-middle",staticStyle:{color:"black !important"},attrs:{icon:"chevron_right"}}),e._v(e._s(e._f("title")(n)))],1)])],1)})),0)])}),[],!1,null,"012456a9",null);t.a=o.exports}}]);