/*! For license information please see 29.bccb36ce1d5b9c944d5d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{CQQH:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,".my-editor[data-v-026a3998]{height:300px;font-family:Fira code,Fira Mono,Consolas,Menlo,Courier,monospace;font-size:14px;line-height:1.5}[dir] .my-editor[data-v-026a3998]{background:#f3f3f3;padding:5px}.prism-editor__textarea[data-v-026a3998]:focus{outline:none}",""])},EigA:function(t,e,r){var a=r("CQQH");"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(a,n);a.locals&&(t.exports=a.locals)},JEQz:function(t,e,r){"use strict";r("EigA")},MeZ2:function(t,e,r){"use strict";r.r(e);var a=r("U87P"),n=r("uBql"),i=r("5XpT"),o=r("jHpe");r("y1X9"),r("QWvX"),r("hL/g"),r("yr/+");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var n=e&&e.prototype instanceof p?e:p,i=Object.create(n.prototype),o=new L(a||[]);return i._invoke=function(t,e,r){var a="suspendedStart";return function(n,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw i;return N()}for(r.method=n,r.arg=i;;){var o=r.delegate;if(o){var s=x(o,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var c=d(t,e,r);if("normal"===c.type){if(a=r.done?"completed":"suspendedYield",c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a="completed",r.method="throw",r.arg=c.arg)}}}(t,r,o),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var v={};function p(){}function m(){}function f(){}var h={};l(h,n,(function(){return this}));var g=Object.getPrototypeOf,_=g&&g(g(E([])));_&&_!==e&&r.call(_,n)&&(h=_);var b=f.prototype=p.prototype=Object.create(h);function y(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var a;this._invoke=function(n,i){function o(){return new e((function(a,o){!function a(n,i,o,c){var l=d(t[n],t,i);if("throw"!==l.type){var u=l.arg,v=u.value;return v&&"object"==s(v)&&r.call(v,"__await")?e.resolve(v.__await).then((function(t){a("next",t,o,c)}),(function(t){a("throw",t,o,c)})):e.resolve(v).then((function(t){u.value=t,o(u)}),(function(t){return a("throw",t,o,c)}))}c(l.arg)}(n,i,a,o)}))}return a=a?a.then(o,o):o()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=d(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var n=a.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function E(t){if(t){var e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){for(;++a<t.length;)if(r.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:N}}function N(){return{value:void 0,done:!0}}return m.prototype=f,l(b,"constructor",f),l(f,"constructor",m),m.displayName=l(f,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,l(t,o,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},y(w.prototype),l(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,a,n,i){void 0===i&&(i=Promise);var o=new w(u(e,r,a,n),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},y(b),l(b,o,"Generator"),l(b,n,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var a=e.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}},t.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(r,a){return o.type="throw",o.arg=t,e.next=r,a&&(e.method="next",e.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;C(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),v}},t}function l(t,e,r,a,n,i,o){try{var s=t[i](o),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(a,n)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var i=t.apply(e,r);function o(t){l(i,a,n,o,s,"next",t)}function s(t){l(i,a,n,o,s,"throw",t)}o(void 0)}))}}var d={data:function(){return{loading:!0,brands:[],brand_popup:!1,brand:{meta:{}},image_preview:null}},components:{MetaFields:a.a,PrismEditor:i.a},mounted:function(){this.fetchBrands()},methods:{highlighter:function(t){return Object(o.highlight)(t,o.languages.js)},fetchBrands:function(){var t=this;return u(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$http.get("/api/admin/product-brands");case 4:r=e.sent,t.brands=r.data.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.errorNotification("Something went wrong!! Please retry");case 11:return e.prev=11,t.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()},imageUploaded:function(){var t=this.$refs.brand_thumbnail_image.files[0];this.image_preview=URL.createObjectURL(t),this.brand.image=t},clearImage:function(){this.brand.image=null,this.image_preview=null,this.$refs.brand_thumbnail_image.value=""},saveBrand:function(){var t=this;return u(c().mark((function e(){var r,a,i,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$validator.validateAll();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return t.$vs.loading({container:"#loading--container"}),e.prev=6,r={name:t.brand.name,image:t.brand.image,description:t.brand.description,meta:JSON.stringify(t.brand.meta),custom_code:t.brand.custom_code},a="/api/admin/product-brands",t.brand.id&&(a="/api/admin/product-brands/".concat(t.brand.id),r._method="PATCH",r.slug=t.brand.slug),i=Object(n.a)(r),e.next=13,t.$http.post(a,i);case 13:(o=e.sent).data.success&&(t.successNotification(o.data.message),t.fetchBrands(),t.brand_popup=!1),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(6),Object(n.e)(t.errors,e.t0),t.errorNotification("Something went wrong! Please retry!!");case 21:return e.prev=21,t.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[6,17,21,24]])})))()},editBrand:function(t){this.brand=_.cloneDeep(t),this.image_preview=this.brand.brand_image.thumb,this.brand_popup=!0},deleteBrand:function(t){var e,r=this;this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Are you sure you want to delete this brand?",accept:(e=u(c().mark((function e(){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.$http.delete("/api/admin/product-brands/".concat(t));case 2:(a=e.sent).data.success?(r.successNotification(a.data.message),r.fetchBrands()):r.errorNotification(a.data.message);case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})})}},watch:{brand_popup:function(t){t||(this.brand={meta:{}},this.errors.clear(),this.image_preview=null)}}},v=(r("JEQz"),r("KHd+")),p=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("vs-popup",{staticClass:"popup-lg",attrs:{title:"Brand Detail",active:t.brand_popup},on:{"update:active":function(e){t.brand_popup=e}}},[e("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"name",label:"Brand Name"},model:{value:t.brand.name,callback:function(e){t.$set(t.brand,"name",e)},expression:"brand.name"}}),t._v(" "),e("p",[t.errors.has("name")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("name")))]):t._e()]),t._v(" "),t.brand.id?e("div",{staticClass:"w-full mt-4"},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"name",label:"Brand Slug"},model:{value:t.brand.slug,callback:function(e){t.$set(t.brand,"slug",e)},expression:"brand.slug"}}),t._v(" "),e("p",[t.errors.has("slug")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("slug")))]):t._e()])],1):t._e(),t._v(" "),e("div",{staticClass:"w-full mt-4"},[t.image_preview?e("div",{staticClass:"image-preview-container"},[e("div",{staticClass:"text-right float-right mr-10"},[e("vs-button",{staticClass:"image-remove--button",attrs:{radius:"",size:"small",color:"danger",type:"filled","icon-pack":"feather",icon:"icon-x"},on:{click:t.clearImage}})],1),t._v(" "),e("img",{attrs:{src:t.image_preview,alt:""}})]):t._e(),t._v(" "),e("input",{directives:[{name:"validate",rawName:"v-validate",value:"image|size:1024",expression:"'image|size:1024'"}],ref:"brand_thumbnail_image",staticClass:"hidden",attrs:{type:"file",name:"thumbnail",accept:"image/*"},on:{change:t.imageUploaded}}),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("thumbnail"),expression:"errors.has('thumbnail')"}],staticClass:"text-danger text-sm mb-3"},[t._v("\n          "+t._s(t.errors.first("thumbnail"))+"\n        ")]),t._v(" "),e("vs-button",{attrs:{color:"primary",type:"border",size:"small"},on:{click:function(e){return t.$refs.brand_thumbnail_image.click()}}},[t._v("Thumbnail Image")])],1),t._v(" "),e("div",{staticClass:"vx-col mt-4"},[e("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Description")]),t._v(" "),e("q-editor",{model:{value:t.brand.description,callback:function(e){t.$set(t.brand,"description",e)},expression:"brand.description"}})],1),t._v(" "),e("MetaFields",{model:{value:t.brand.meta,callback:function(e){t.$set(t.brand,"meta",e)},expression:"brand.meta"}}),t._v(" "),e("div",{staticClass:"vx-col mt-4"},[e("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Custom Code")]),t._v(" "),e("prism-editor",{staticClass:"my-editor",attrs:{"line-numbers":"",highlight:t.highlighter},model:{value:t.brand.custom_code,callback:function(e){t.$set(t.brand,"custom_code",e)},expression:"brand.custom_code"}})],1),t._v(" "),e("vs-button",{staticClass:"mr-3 mt-5",on:{click:t.saveBrand}},[t._v("Submit")])],1)]),t._v(" "),t.loading?e("pageLoader"):e("vx-card",{staticClass:"card-padding-5"},[e("vs-table",{attrs:{search:"",stripe:"",data:t.brands,"max-items":"40",pagination:""},scopedSlots:t._u([{key:"default",fn:function(r){var a=r.data;return t._l(a,(function(r,a){return e("vs-tr",{key:a,attrs:{data:r}},[e("vs-td",[e("img",{attrs:{src:r.brand_image.thumb,alt:"",width:"100px"}})]),t._v(" "),e("vs-td",[t._v(t._s(r.name))]),t._v(" "),e("vs-td",[t._v(t._s(r.slug))]),t._v(" "),e("vs-td",[t._v(t._s(r.images_count)+"    \n            "),e("router-link",{attrs:{to:{name:"admin-product-brands-images",params:{id:r.id}}}},[e("vs-button",{attrs:{size:"small"}},[t._v("View Images")])],1)],1),t._v(" "),e("vs-td",[t.checkPermission("edit-brand")?e("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"warning",type:"filled",size:"small",icon:"create"},on:{click:function(e){return t.editBrand(r)}}}):t._e(),t._v(" "),t.checkPermission("delete-brand")?e("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",size:"small",color:"danger",type:"filled",icon:"delete"},on:{click:function(e){return t.deleteBrand(r.id)}}}):t._e()],1)],1)}))}}])},[e("template",{slot:"header"},[e("strong",[t._v("Total :")]),t._v("\n         "+t._s(t.brands.length)+"    \n        "),t.checkPermission("add-brand")?e("vs-button",{attrs:{color:"primary",size:"small",type:"border"},on:{click:function(e){t.brand_popup=!0}}},[t._v("Add Brand")]):t._e()],1),t._v(" "),e("template",{slot:"thead"},[e("vs-th",[t._v("Image")]),t._v(" "),e("vs-th",{attrs:{"sort-key":"name"}},[t._v("Name")]),t._v(" "),e("vs-th",[t._v("Slug")]),t._v(" "),e("vs-th",[t._v("Images")]),t._v(" "),e("vs-th",[t._v("Actions")])],1)],2)],1)],1)}),[],!1,null,"026a3998",null);e.default=p.exports},U87P:function(t,e,r){"use strict";var a={props:{value:{type:Object,required:!0},small:{type:Boolean,default:!1}},watch:{value:function(){this.$emit("input",this.value)}}},n=r("KHd+"),i=Object(n.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full mt-2",class:{"md:w-1/2":!t.small}},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:70",expression:"'max:70'"}],staticClass:"w-full",attrs:{name:"meta_title",maxlength:"100",label:"Meta Title"},model:{value:t.value.meta_title,callback:function(e){t.$set(t.value,"meta_title",e)},expression:"value.meta_title"}}),t._v(" "),e("p",[t.errors.has("meta_title")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("meta_title")))]):t._e()])],1),t._v(" "),e("div",{staticClass:"vx-col w-full mt-2",class:{"md:w-1/2":!t.small}},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:180",expression:"'max:180'"}],staticClass:"w-full",attrs:{name:"meta_keywords",label:"Meta Keywords",maxlength:"180"},model:{value:t.value.meta_keywords,callback:function(e){t.$set(t.value,"meta_keywords",e)},expression:"value.meta_keywords"}}),t._v(" "),e("p",[t.errors.has("meta_keywords")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("meta_keywords")))]):t._e()])],1),t._v(" "),e("div",{staticClass:"vx-col w-full mt-2"},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:180",expression:"'max:180'"}],staticClass:"w-full",attrs:{name:"meta_description",label:"Meta Description",maxlength:"180"},model:{value:t.value.meta_description,callback:function(e){t.$set(t.value,"meta_description",e)},expression:"value.meta_description"}}),t._v(" "),e("p",[t.errors.has("meta_description")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("meta_description")))]):t._e()])],1)])}),[],!1,null,null,null);e.a=i.exports}}]);