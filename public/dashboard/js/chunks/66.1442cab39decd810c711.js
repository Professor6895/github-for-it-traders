/*! For license information please see 66.1442cab39decd810c711.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{iLnv:function(t,e,r){"use strict";r.r(e);var n=r("uBql");r("LvDl");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",s=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),o=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return I()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var s=x(o,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,o),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h={};function p(){}function v(){}function d(){}var m={};u(m,o,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(C([])));y&&y!==e&&r.call(y,o)&&(m=y);var w=d.prototype=p.prototype=Object.create(m);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(i,o){function s(){return new e((function(n,s){!function n(i,o,s,c){var u=f(t[i],t,o);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==a(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}(i,o,n,s)}))}return n=n?n.then(s,s):s()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function C(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:I}}function I(){return{value:void 0,done:!0}}return v.prototype=d,u(w,"constructor",d),u(d,"constructor",v),v.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(b.prototype),u(b.prototype,s,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new b(l(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(w),u(w,c,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function o(t,e,r,n,a,i,o){try{var s=t[i](o),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,a)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function s(t){o(i,n,a,s,c,"next",t)}function c(t){o(i,n,a,s,c,"throw",t)}s(void 0)}))}}var c={data:function(){return{brand_id:"",loading:!1,imagePopup:!1,images:[],image:{},image_preview:null}},mounted:function(){this.brand_id=this.$route.params.id,this.fetchImages()},methods:{fetchImages:function(){var t=this;return s(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$http.get("/api/admin/product-brands/".concat(t.brand_id,"/images"));case 4:r=e.sent,t.images=r.data.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.errorNotification("Something went wrong!! Please retry");case 11:return e.prev=11,t.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()},saveImage:function(){var t=this;return s(i().mark((function e(){var r,a,o,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$validator.validateAll();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,t.$vs.loading({container:"#banner-image--container"}),r={image:t.image.image,link:t.image.link},a="/api/admin/product-brands/".concat(t.brand_id,"/images"),o=Object(n.a)(r),e.next=12,t.$http.post(a,o);case 12:s=e.sent,t.successNotification(s.data.message),t.imagePopup=!1,t.fetchImages(),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(5),Object(n.e)(t.errors,e.t0),t.errorNotification("Something went wrong! Please retry!!");case 22:return e.prev=22,t.$vs.loading.close("#banner-image--container > .con-vs-loading"),e.finish(22);case 25:case"end":return e.stop()}}),e,null,[[5,18,22,25]])})))()},imageUploaded:function(){var t=this.$refs.banner_image.files[0];this.image_preview=URL.createObjectURL(t),this.image.image=t},clearImage:function(){this.image.image=null,this.image_preview=null,this.$refs.banner_image.value=""},deleteImage:function(t){var e,r=this;this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Are you sure you want to delete the image?",accept:(e=s(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.$http.delete("/api/admin/product-brands/".concat(r.brand_id,"/images/").concat(t));case 2:(n=e.sent).data.success?(r.successNotification(n.data.message),r.fetchImages()):r.errorNotification(n.data.message);case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})})}},watch:{imagePopup:function(t){t||(this.image_preview=null,this.image={},this.errors.clear())}}},u=r("KHd+"),l=Object(u.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t.loading?e("pageLoader"):e("vx-card",{staticClass:"card-padding-5 vs-con-loading__container",attrs:{title:"Brand Images",id:"images-loading--container"}},[e("vs-table",{attrs:{search:"",stripe:"",data:t.images,"max-items":"40",pagination:""},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.data;return t._l(n,(function(r){return e("tr",{key:r.id,staticClass:"tr-values"},[e("vs-td",[e("img",{attrs:{src:r.image_preview,alt:"",width:"200px"}})]),t._v(" "),e("vs-td",[t._v("\n              "+t._s(r.custom_properties.link)+"\n            ")]),t._v(" "),e("vs-td",[e("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"danger",type:"filled",icon:"delete"},on:{click:function(e){return t.deleteImage(r.id)}}})],1)],1)}))}}])},[e("template",{slot:"header"},[e("strong",[t._v("Total :")]),t._v("\n         "+t._s(t.images.length)+"    \n        "),e("vs-button",{attrs:{color:"primary",size:"small",type:"border"},on:{click:function(e){t.imagePopup=!0}}},[t._v("Add Image")])],1),t._v(" "),e("template",{slot:"thead"},[e("vs-th",[t._v("Image")]),t._v(" "),e("vs-th",[t._v("Link")]),t._v(" "),e("vs-th",[t._v("Actions")])],1)],2)],1),t._v(" "),e("vs-popup",{staticClass:"popup-lg",attrs:{title:"Brand Image",active:t.imagePopup},on:{"update:active":function(e){t.imagePopup=e}}},[e("form",{staticClass:"vs-con-loading__container",attrs:{id:"banner-image--container"}},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full"},[t.image_preview?e("div",{staticClass:"image-preview-container mt-4"},[e("div",{staticClass:"text-right float-right mr-10"},[e("vs-button",{staticClass:"image-remove--button",attrs:{radius:"",size:"small",color:"danger",type:"filled","icon-pack":"feather",icon:"icon-x"},on:{click:t.clearImage}})],1),t._v(" "),e("img",{attrs:{src:t.image_preview,alt:""}})]):t._e(),t._v(" "),e("input",{directives:[{name:"validate",rawName:"v-validate",value:"image|size:2048",expression:"'image|size:2048'"}],ref:"banner_image",staticClass:"hidden",attrs:{type:"file",name:"image",accept:"image/*"},on:{change:t.imageUploaded}}),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("image"),expression:"errors.has('image')"}],staticClass:"text-danger text-sm mb-3"},[t._v(t._s(t.errors.first("image")))]),t._v(" "),e("vs-button",{attrs:{color:"primary",type:"border",size:"small"},on:{click:function(e){return t.$refs.banner_image.click()}}},[t._v("Upload Image")])],1),t._v(" "),e("div",{staticClass:"vx-col w-full"},[e("vs-input",{staticClass:"w-full mt-4",attrs:{name:"link",label:"Banner Link"},model:{value:t.image.link,callback:function(e){t.$set(t.image,"link",e)},expression:"image.link"}}),t._v(" "),t.errors.has("link")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("link")))]):t._e()],1)]),t._v(" "),e("div",{staticClass:"flex justify-between flex-row-reverse"},[e("vs-button",{staticClass:"mt-4 float-right",attrs:{type:"border"},on:{click:t.saveImage}},[t._v("Save")])],1)])])],1)}),[],!1,null,null,null);e.default=l.exports}}]);