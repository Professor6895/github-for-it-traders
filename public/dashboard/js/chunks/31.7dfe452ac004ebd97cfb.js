/*! For license information please see 31.7dfe452ac004ebd97cfb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"N/e2":function(t,e,a){var r=a("aIuy");"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,o);r.locals&&(t.exports=r.locals)},RFmA:function(t,e,a){"use strict";a("N/e2")},U87P:function(t,e,a){"use strict";var r={props:{value:{type:Object,required:!0},small:{type:Boolean,default:!1}},watch:{value:function(){this.$emit("input",this.value)}}},o=a("KHd+"),n=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full mt-2",class:{"md:w-1/2":!t.small}},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:70",expression:"'max:70'"}],staticClass:"w-full",attrs:{name:"meta_title",maxlength:"100",label:"Meta Title"},model:{value:t.value.meta_title,callback:function(e){t.$set(t.value,"meta_title",e)},expression:"value.meta_title"}}),t._v(" "),e("p",[t.errors.has("meta_title")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("meta_title")))]):t._e()])],1),t._v(" "),e("div",{staticClass:"vx-col w-full mt-2",class:{"md:w-1/2":!t.small}},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:180",expression:"'max:180'"}],staticClass:"w-full",attrs:{name:"meta_keywords",label:"Meta Keywords",maxlength:"180"},model:{value:t.value.meta_keywords,callback:function(e){t.$set(t.value,"meta_keywords",e)},expression:"value.meta_keywords"}}),t._v(" "),e("p",[t.errors.has("meta_keywords")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("meta_keywords")))]):t._e()])],1),t._v(" "),e("div",{staticClass:"vx-col w-full mt-2"},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:180",expression:"'max:180'"}],staticClass:"w-full",attrs:{name:"meta_description",label:"Meta Description",maxlength:"180"},model:{value:t.value.meta_description,callback:function(e){t.$set(t.value,"meta_description",e)},expression:"value.meta_description"}}),t._v(" "),e("p",[t.errors.has("meta_description")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("meta_description")))]):t._e()])],1)])}),[],!1,null,null,null);e.a=n.exports},aIuy:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".my-editor[data-v-4e217378]{height:300px;font-family:Fira code,Fira Mono,Consolas,Menlo,Courier,monospace;font-size:14px;line-height:1.5}[dir] .my-editor[data-v-4e217378]{background:#f3f3f3;padding:5px}.prism-editor__textarea[data-v-4e217378]:focus{outline:none}",""])},b0nE:function(t,e,a){"use strict";a.r(e);var r=a("U87P"),o=a("uBql"),n=a("Snq/"),i=a.n(n),s=a("Jeo8"),c=a("t2rG"),l=a.n(c),u=a("5XpT"),v=a("jHpe");a("y1X9"),a("QWvX"),a("hL/g"),a("yr/+");function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(){p=function(){return t};var t={},e=Object.prototype,a=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",n=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function s(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,a){return t[e]=a}}function c(t,e,a,r){var o=e&&e.prototype instanceof v?e:v,n=Object.create(o.prototype),i=new L(r||[]);return n._invoke=function(t,e,a){var r="suspendedStart";return function(o,n){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw n;return $()}for(a.method=o,a.arg=n;;){var i=a.delegate;if(i){var s=x(i,a);if(s){if(s===u)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var c=l(t,e,a);if("normal"===c.type){if(r=a.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r="completed",a.method="throw",a.arg=c.arg)}}}(t,a,i),n}function l(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u={};function v(){}function g(){}function f(){}var h={};s(h,o,(function(){return this}));var m=Object.getPrototypeOf,_=m&&m(m(N([])));_&&_!==e&&a.call(_,o)&&(h=_);var y=f.prototype=v.prototype=Object.create(h);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var r;this._invoke=function(o,n){function i(){return new e((function(r,i){!function r(o,n,i,s){var c=l(t[o],t,n);if("throw"!==c.type){var u=c.arg,v=u.value;return v&&"object"==d(v)&&a.call(v,"__await")?e.resolve(v.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(v).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}(o,n,r,i)}))}return r=r?r.then(i,i):i()}}function x(t,e){var a=t.iterator[e.method];if(void 0===a){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=l(a,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,u;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:$}}function $(){return{value:void 0,done:!0}}return g.prototype=f,s(y,"constructor",f),s(f,"constructor",g),g.displayName=s(f,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,s(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(w.prototype),s(w.prototype,n,(function(){return this})),t.AsyncIterator=w,t.async=function(e,a,r,o,n){void 0===n&&(n=Promise);var i=new w(c(e,a,r,o),n);return t.isGeneratorFunction(a)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),s(y,i,"Generator"),s(y,o,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){for(;e.length;){var r=e.pop();if(r in t)return a.value=r,a.done=!1,a}return a.done=!0,a}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(a,r){return i.type="throw",i.arg=t,e.next=a,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o],i=n.completion;if("root"===n.tryLoc)return r("end");if(n.tryLoc<=this.prev){var s=a.call(n,"catchLoc"),c=a.call(n,"finallyLoc");if(s&&c){if(this.prev<n.catchLoc)return r(n.catchLoc,!0);if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else if(s){if(this.prev<n.catchLoc)return r(n.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return r(n.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var i=n?n.completion:{};return i.type=t,i.arg=e,n?(this.method="next",this.next=n.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),C(a),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var o=r.arg;C(a)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:N(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},t}function g(t,e,a,r,o,n,i){try{var s=t[n](i),c=s.value}catch(t){return void a(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function f(t){return function(){var e=this,a=arguments;return new Promise((function(r,o){var n=t.apply(e,a);function i(t){g(n,r,o,i,s,"next",t)}function s(t){g(n,r,o,i,s,"throw",t)}i(void 0)}))}}var h={data:function(){return{loading:!0,categories:{data:[],per_page:0,total:0,last_page:0},table_options:{current_page:1},dropdown_categories:[],search_keyword:"",category_popup:!1,category:{featured:!1,meta:{}},image_preview:null,view_style:"table",categories_tree:[],treeOptions:{checkbox:!1,propertyNames:{text:"title",data:"category_image"}},table_type:"full"}},components:{"v-select":i.a,MetaFields:r.a,"cat-tree":s.a,draggable:l.a,PrismEditor:u.a},mounted:function(){this.fetchCategories(),this.fetchCategoryDropdown()},methods:{highlighter:function(t){return Object(v.highlight)(t,v.languages.js)},fetchCategoryDropdown:function(){var t=this;return f(p().mark((function e(){var a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.get("/api/admin/product-categories-dropdown");case 3:a=e.sent,t.dropdown_categories=a.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.errorNotification("Something went wrong!! Please retry");case 10:return e.prev=10,t.loading=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()},fetchCategoryTree:function(){var t=this;return f(p().mark((function e(){var a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$http.get("/api/admin/product-categories-tree");case 4:a=e.sent,t.categories_tree=a.data.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.errorNotification("Something went wrong!! Please retry");case 11:return e.prev=11,t.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()},fetchCategories:function(){var t=this;return f(p().mark((function e(){var a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading||t.$vs.loading({container:"#category--table"}),e.prev=1,e.next=4,t.$http.get("/api/admin/product-categories",{params:{page:t.table_options.current_page,search:t.search_keyword,data:t.table_type}});case 4:a=e.sent,t.categories=a.data.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.errorNotification("Something went wrong!! Please retry");case 11:return e.prev=11,t.$vs.loading.close("#category--table > .con-vs-loading"),t.loading=!1,e.finish(11);case 15:case"end":return e.stop()}}),e,null,[[1,8,11,15]])})))()},imageUploaded:function(){var t=this.$refs.category_thumbnail_image.files[0];this.image_preview=URL.createObjectURL(t),this.category.image=t},clearImage:function(){this.category.image=null,this.image_preview=null,this.$refs.category_thumbnail_image.value=""},saveCategory:function(){var t=this;return f(p().mark((function e(){var a,r,n,i;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$validator.validateAll();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return t.$vs.loading({container:"#loading--container"}),e.prev=6,a={title:t.category.title,image:t.category.image,parent_id:t.category.parent_id,meta:JSON.stringify(t.category.meta),featured:t.category.featured,description:t.category.description,custom_code:t.category.custom_code},r="/api/admin/product-categories",t.category.id&&(r="/api/admin/product-categories/".concat(t.category.id),a._method="PATCH",a.slug=t.category.slug),n=Object(o.a)(a),e.next=13,t.$http.post(r,n);case 13:(i=e.sent).data.success&&(t.successNotification(i.data.message),t.fetchCategories(),t.category_popup=!1),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(6),Object(o.e)(t.errors,e.t0),t.errorNotification("Something went wrong! Please retry!!");case 21:return e.prev=21,t.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[6,17,21,24]])})))()},editCategory:function(t){this.category=_.cloneDeep(t),this.image_preview=this.category.category_image.thumb,this.category_popup=!0},deleteCategory:function(t){var e,a=this;this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Are you sure you want to delete this category?",accept:(e=f(p().mark((function e(){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.$http.delete("/api/admin/product-categories/".concat(t));case 2:(r=e.sent).data.success?(a.successNotification(r.data.message),a.fetchCategories()):a.errorNotification(r.data.message);case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})})},handlePagination:function(t){this.table_options.current_page=t,this.fetchCategories()},sortCategories:function(){var t=this;return f(p().mark((function e(){var a,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.$vs.loading({container:"#category--table"}),a=[],t.categories.data.map((function(t,e){a.push({category_id:t.id,order:e+1})})),e.next=6,t.$http.post("/api/admin/product-categories/sort-categories",{payload:a});case 6:(r=e.sent).data.success&&t.successNotification(r.data.message),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:return e.prev=12,t.$vs.loading.close("#category--table > .con-vs-loading"),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,10,12,15]])})))()}},watch:{category_popup:function(t){t||(this.category={meta:{}},this.errors.clear(),this.image_preview=null)},"table_options.current_page":function(){this.fetchCategories()},view_style:function(t){"tree"===t&&this.fetchCategoryTree()},table_type:function(t){this.fetchCategories()}}},m=(a("RFmA"),a("KHd+")),y=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("vs-popup",{staticClass:"popup-lg",attrs:{title:"Category Detail",active:t.category_popup},on:{"update:active":function(e){t.category_popup=e}}},[e("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[e("div",{staticClass:"w-full mb-4"},[e("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Parent Category")]),t._v(" "),e("v-select",{attrs:{options:t.dropdown_categories,label:"category_full_name",value:"id",reduce:function(t){return t.id},name:"parent_id"},model:{value:t.category.parent_id,callback:function(e){t.$set(t.category,"parent_id",e)},expression:"category.parent_id"}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("parent_id"),expression:"errors.has('parent_id')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("parent_id")))])],1),t._v(" "),e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"title",label:"Category name"},model:{value:t.category.title,callback:function(e){t.$set(t.category,"title",e)},expression:"category.title"}}),t._v(" "),e("p",[t.errors.has("title")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("title")))]):t._e()]),t._v(" "),t.category.id?e("div",{staticClass:"vx-col w-full mt-4"},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"slug",label:"Category Slug"},model:{value:t.category.slug,callback:function(e){t.$set(t.category,"slug",e)},expression:"category.slug"}}),t._v(" "),e("p",[t.errors.has("slug")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("slug")))]):t._e()])],1):t._e(),t._v(" "),e("div",{staticClass:"vx-col w-full mt-4"},[e("vs-checkbox",{model:{value:t.category.featured,callback:function(e){t.$set(t.category,"featured",e)},expression:"category.featured"}},[t._v("Featured")])],1),t._v(" "),e("div",{staticClass:"w-full mt-4"},[t.image_preview?e("div",{staticClass:"image-preview-container"},[e("div",{staticClass:"text-right float-right mr-10"},[e("vs-button",{staticClass:"image-remove--button",attrs:{radius:"",size:"small",color:"danger",type:"filled","icon-pack":"feather",icon:"icon-x"},on:{click:t.clearImage}})],1),t._v(" "),e("img",{attrs:{src:t.image_preview,alt:""}})]):t._e(),t._v(" "),e("input",{directives:[{name:"validate",rawName:"v-validate",value:"image|size:1024",expression:"'image|size:1024'"}],ref:"category_thumbnail_image",staticClass:"hidden",attrs:{type:"file",name:"thumbnail",accept:"image/*"},on:{change:t.imageUploaded}}),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("thumbnail"),expression:"errors.has('thumbnail')"}],staticClass:"text-danger text-sm mb-3"},[t._v("\n          "+t._s(t.errors.first("thumbnail"))+"\n        ")]),t._v(" "),e("vs-button",{attrs:{color:"primary",type:"border",size:"small"},on:{click:function(e){return t.$refs.category_thumbnail_image.click()}}},[t._v("Thumbnail Image")])],1),t._v(" "),e("div",{staticClass:"vx-col mt-4"},[e("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Description")]),t._v(" "),e("q-editor",{model:{value:t.category.description,callback:function(e){t.$set(t.category,"description",e)},expression:"category.description"}})],1),t._v(" "),e("MetaFields",{model:{value:t.category.meta,callback:function(e){t.$set(t.category,"meta",e)},expression:"category.meta"}}),t._v(" "),e("div",{staticClass:"vx-col mt-4"},[e("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Custom Code")]),t._v(" "),e("prism-editor",{staticClass:"my-editor",attrs:{"line-numbers":"",highlight:t.highlighter},model:{value:t.category.custom_code,callback:function(e){t.$set(t.category,"custom_code",e)},expression:"category.custom_code"}})],1),t._v(" "),e("vs-button",{staticClass:"mr-3 mt-5",on:{click:t.saveCategory}},[t._v("Submit")])],1)]),t._v(" "),t.loading?e("pageLoader"):e("vx-card",{staticClass:"card-padding-5 vs-con-loading__container",attrs:{id:"category--table"}},[e("vs-button",{attrs:{size:"small",color:"table"===t.view_style?"primary":"#AAA"},on:{click:function(e){t.view_style="table"}}},[t._v("Table View")]),t._v(" "),e("vs-button",{attrs:{size:"small",color:"tree"===t.view_style?"primary":"#AAA"},on:{click:function(e){t.view_style="tree"}}},[t._v("Tree View")]),t._v(" "),"table"===t.view_style?e("div",[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full mt-4"},[e("vs-radio",{staticClass:"mr-5",attrs:{"vs-name":"radio_table_type","vs-value":"full"},model:{value:t.table_type,callback:function(e){t.table_type=e},expression:"table_type"}},[t._v("All Categories")]),t._v(" "),e("vs-radio",{attrs:{"vs-name":"radio_table_type","vs-value":"parent"},model:{value:t.table_type,callback:function(e){t.table_type=e},expression:"table_type"}},[t._v("Parents Only")])],1)]),t._v(" "),"full"===t.table_type?e("vs-table",{staticClass:"mt-4",attrs:{stripe:"",data:t.categories.data,"max-items":t.categories.per_page,total:t.categories.total,sst:!0},on:{"change-page":t.handlePagination},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.data;return t._l(r,(function(a,r){return e("vs-tr",{key:r,attrs:{data:a}},[e("vs-td",[e("img",{attrs:{src:a.category_image.thumb,alt:"",width:"50px"}})]),t._v(" "),e("vs-td",[e("a",{attrs:{href:"/category/".concat(a.slug),target:"_blank"}},[t._v("\n                "+t._s(a.title)+"\n              ")])]),t._v(" "),e("vs-td",[t._v(t._s(a.slug))]),t._v(" "),e("vs-td",[a.parent_id?e("span",[t._v(t._s(a.parent_tree))]):e("span",[t._v("PARENT")])]),t._v(" "),e("vs-td",[t._v(t._s(a.images_count)+"    \n              "),e("router-link",{attrs:{to:{name:"admin-product-categories-images",params:{id:a.id}}}},[e("vs-button",{attrs:{size:"small"}},[t._v("View Images")])],1)],1),t._v(" "),e("vs-td",[t.checkPermission("edit-product-category")?e("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"warning",type:"filled",size:"small",icon:"create"},on:{click:function(e){return t.editCategory(a)}}}):t._e(),t._v(" "),t.checkPermission("delete-product-category")?e("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",size:"small",color:"danger",type:"filled",icon:"delete"},on:{click:function(e){return t.deleteCategory(a.id)}}}):t._e()],1)],1)}))}}],null,!1,1966023179)},[e("template",{slot:"header"},[e("strong",[t._v("Total :")]),t._v("\n           "+t._s(t.categories.total)+"    \n          "),t.checkPermission("add-product-category")?e("vs-button",{staticClass:"mb-4",attrs:{color:"primary",type:"border"},on:{click:function(e){t.category_popup=!0}}},[t._v("Add Category")]):t._e(),t._v(" "),e("div",{staticClass:"con-input-search vs-table--search"},[e("vs-input",{staticClass:"inline-block",model:{value:t.search_keyword,callback:function(e){t.search_keyword=e},expression:"search_keyword"}}),t._v(" "),e("vs-button",{attrs:{type:"filled",icon:"search"},on:{click:function(e){t.table_options.current_page=1,t.fetchCategories()}}})],1)],1),t._v(" "),e("template",{slot:"thead"},[e("vs-th",[t._v("Image")]),t._v(" "),e("vs-th",{attrs:{"sort-key":"title"}},[t._v("Name")]),t._v(" "),e("vs-th",{attrs:{"sort-key":"title"}},[t._v("Slug")]),t._v(" "),e("vs-th",[t._v("Level")]),t._v(" "),e("vs-th",[t._v("Images")]),t._v(" "),e("vs-th",[t._v("Actions")])],1)],2):e("vs-table",{staticClass:"mt-4",attrs:{stripe:"",data:t.categories.data,"max-items":t.categories.per_page,total:t.categories.total,sst:!0},on:{"change-page":t.handlePagination},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.data;return[e("draggable",{attrs:{tag:"tbody"},on:{change:t.sortCategories},model:{value:t.categories.data,callback:function(e){t.$set(t.categories,"data",e)},expression:"categories.data"}},t._l(r,(function(a,r){return e("tr",{key:r,staticClass:"tr-values",attrs:{data:a}},[e("vs-td",[e("img",{attrs:{src:a.category_image.thumb,alt:"",width:"50px"}})]),t._v(" "),e("vs-td",[t._v(t._s(a.title))]),t._v(" "),e("vs-td",[a.parent_id?e("span",[t._v(t._s(a.parent_tree))]):e("span",[t._v("PARENT")])]),t._v(" "),e("vs-td",[t._v("Active")]),t._v(" "),e("vs-td",[t.checkPermission("edit-product-category")?e("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"warning",type:"filled",size:"small",icon:"create"},on:{click:function(e){return t.editCategory(a)}}}):t._e(),t._v(" "),t.checkPermission("delete-product-category")?e("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",size:"small",color:"danger",type:"filled",icon:"delete"},on:{click:function(e){return t.deleteCategory(a.id)}}}):t._e()],1)],1)})),0)]}}],null,!1,58623160)},[e("template",{slot:"header"},[e("strong",[t._v("Total :")]),t._v("\n           "+t._s(t.categories.total)+"    \n          "),t.checkPermission("add-product-category")?e("vs-button",{staticClass:"mb-4",attrs:{color:"primary",type:"border"},on:{click:function(e){t.category_popup=!0}}},[t._v("Add Category")]):t._e(),t._v(" "),e("div",{staticClass:"con-input-search vs-table--search"},[e("vs-input",{staticClass:"inline-block",model:{value:t.search_keyword,callback:function(e){t.search_keyword=e},expression:"search_keyword"}}),t._v(" "),e("vs-button",{attrs:{type:"filled",icon:"search"},on:{click:function(e){t.table_options.current_page=1,t.fetchCategories()}}})],1)],1),t._v(" "),e("template",{slot:"thead"},[e("vs-th",[t._v("Image")]),t._v(" "),e("vs-th",{attrs:{"sort-key":"title"}},[t._v("Name")]),t._v(" "),e("vs-th",[t._v("Level")]),t._v(" "),e("vs-th",[t._v("Status")]),t._v(" "),e("vs-th",[t._v("Actions")])],1)],2),t._v(" "),e("vs-pagination",{staticClass:"mt-4",attrs:{total:t.categories.last_page},model:{value:t.table_options.current_page,callback:function(e){t.$set(t.table_options,"current_page",e)},expression:"table_options.current_page"}})],1):e("div",[e("cat-tree",{staticClass:"mt-4",attrs:{data:t.categories_tree,options:t.treeOptions},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.node;return e("span",{staticClass:"tree-text"},[[r.data.thumb?e("img",{staticStyle:{display:"inline-block","margin-right":"5px",position:"relative",top:"10px"},attrs:{src:r.data.thumb,alt:"",width:"40px"}}):t._e(),t._v("\n            "+t._s(r.text)+"\n          ")]],2)}}])})],1)],1)],1)}),[],!1,null,"4e217378",null);e.default=y.exports}}]);