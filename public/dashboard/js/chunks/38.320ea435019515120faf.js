(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{DoMi:function(t,a,e){"use strict";e.r(a);var s=e("o0o1"),i=e.n(s),c=e("U87P");e("YTpH");function n(t,a,e,s,i,c,n){try{var r=t[c](n),o=r.value}catch(t){return void e(t)}r.done?a(o):Promise.resolve(o).then(s,i)}function r(t){return function(){var a=this,e=arguments;return new Promise((function(s,i){var c=t.apply(a,e);function r(t){n(c,s,i,r,o,"next",t)}function o(t){n(c,s,i,r,o,"throw",t)}r(void 0)}))}}var o={data:function(){return{loading:!0,products:{data:[],per_page:0,total:0,last_page:0},table_options:{current_page:1},search_keyword:"",duplicate_popup:!1,duplicate_product:{duplicate_images:!1,duplicate_variants:!1}}},components:{MetaFields:c.a},mounted:function(){this.fetchProducts()},methods:{fetchProducts:function(){var t=this;return r(i.a.mark((function a(){var e;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.loading||t.$vs.loading({container:"#loading--container"}),a.prev=1,a.next=4,t.$http.get("/api/admin/products",{params:{page:t.table_options.current_page,search:t.search_keyword}});case 4:e=a.sent,t.products=e.data.data,a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),t.errorNotification("Something went wrong!! Please retry");case 11:return a.prev=11,t.$vs.loading.close("#loading--container > .con-vs-loading"),t.loading=!1,a.finish(11);case 15:case"end":return a.stop()}}),a,null,[[1,8,11,15]])})))()},toggleProductStatus:function(t){var a,e=this;this.$vs.dialog({type:"confirm",color:"primary",title:"Confirm",text:"Are you sure you want to change the product status?",accept:(a=r(i.a.mark((function a(){var s,c;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s={_method:"PATCH"},a.next=3,e.$http.post("/api/admin/products/".concat(t.id,"/toggle-status"),s);case 3:(c=a.sent).data.success?(e.successNotification(c.data.message),t.status=c.data.status):e.errorNotification(c.data.message);case 5:case"end":return a.stop()}}),a)}))),function(){return a.apply(this,arguments)})})},duplicateProduct:function(t){this.duplicate_product.product_id=t,this.duplicate_popup=!0},processProductDuplication:function(){var t=this;return r(i.a.mark((function a(){var e;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t.$vs.loading({container:"#loading--container"}),"/api/admin/product/make-duplicate",a.next=5,t.$http.post("/api/admin/product/make-duplicate",t.duplicate_product);case 5:(e=a.sent).data.success?(t.successNotification(e.data.message),t.duplicate_popup=!1,t.fetchProducts()):t.errorNotification(e.data.message),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),t.errorNotification("Something went wrong! Please retry!!");case 12:return a.prev=12,t.$vs.loading.close("#loading--container > .con-vs-loading"),a.finish(12);case 15:case"end":return a.stop()}}),a,null,[[0,9,12,15]])})))()},deleteProduct:function(t){var a,e=this;this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Are you sure you want to delete the product?",accept:(a=r(i.a.mark((function a(){var s;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$http.delete("/api/admin/products/".concat(t));case 2:(s=a.sent).data.success?(e.successNotification(s.data.message),e.fetchProducts()):e.errorNotification(s.data.message);case 4:case"end":return a.stop()}}),a)}))),function(){return a.apply(this,arguments)})})}},watch:{"table_options.current_page":function(){this.fetchProducts()},duplicate_popup:function(t){t||(this.duplicate_product={duplicate_images:!1,duplicate_variants:!1})}}},l=e("KHd+"),u=Object(l.a)(o,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t.loading?s("pageLoader"):s("vx-card",{staticClass:"card-padding-5 vs-con-loading__container",attrs:{id:"loading--container"}},[s("vs-table",{staticClass:"mt-4",attrs:{stripe:"",data:t.products.data,"max-items":t.products.per_page,total:t.products.total,sst:!0},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.data;return t._l(i,(function(a,i){return s("vs-tr",{key:i,staticClass:"p-4",attrs:{data:a}},[s("vs-td",{staticStyle:{width:"110px !important"}},[s("img",{attrs:{src:a.product_image.thumb?a.product_image.thumb:e("c3Qt"),alt:"",width:"90px"}})]),t._v(" "),s("vs-td",{staticStyle:{"vertical-align":"top"}},[s("strong",[t._v(t._s(a.name))]),t._v(" "),s("br"),t._v(" "),s("p",{staticClass:"mt-2 text-sm"},[s("strong",[1==a.status?s("span",{staticClass:"text-success"},[t._v("Enabled")]):t._e(),t._v(" "),0==a.status?s("span",{staticClass:"text-danger"},[t._v("Inactive")]):t._e(),t._v(" "),2==a.status?s("span",{staticClass:"text-warning"},[t._v("Draft")]):t._e()])]),t._v(" "),s("p",{staticClass:"mt-2 text-sm"},[t._v(t._s(a.quantity)+" in stock")])]),t._v(" "),s("vs-td",[a.price?s("div",[s("strong",{staticClass:"text-2xl"},[t._v("Rs. "+t._s(a.price))]),t._v(" "),a.original_price?s("span",{staticClass:"text-lg text-strike"},[t._v("Rs. "+t._s(a.original_price))]):t._e()]):s("div",[t._v("---")])]),t._v(" "),s("vs-td",[s("strong",[t._v("SKU:")]),t._v("\n            "+t._s(a.sku)+"\n          ")]),t._v(" "),s("vs-td",[s("div",{on:{click:function(e){return t.toggleProductStatus(a)}}},[s("strong",[t._v("Status")]),t._v(" "),s("br"),t._v(" "),s("vs-icon",{staticClass:"icon-large",class:1===a.status?"text-success":"text-danger",attrs:{icon:1===a.status?"toggle_on":"toggle_off"}})],1)]),t._v(" "),s("vs-td",[s("vs-button",{attrs:{size:"small"},on:{click:function(e){return t.duplicateProduct(a.id)}}},[t._v("Make Duplicate")])],1),t._v(" "),s("vs-td",[s("router-link",{attrs:{to:{name:"admin-product-detail",params:{id:a.id}}}},[t.checkPermission("edit-product")?s("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"warning",type:"filled",icon:"create"}}):t._e()],1),t._v(" "),t.checkPermission("delete-product")?s("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"danger",type:"filled",icon:"delete"},on:{click:function(e){return t.deleteProduct(a.id)}}}):t._e()],1)],1)}))}}])},[s("template",{slot:"header"},[s("strong",[t._v("Total :")]),t._v("\n         "+t._s(t.products.total)+"    \n        "),t.checkPermission("add-product")?s("router-link",{attrs:{to:{name:"admin-product-detail"}}},[s("vs-button",{attrs:{color:"primary",size:"small",type:"border"}},[t._v("Add New Product")])],1):t._e(),t._v(" "),s("div",{staticClass:"con-input-search vs-table--search"},[s("vs-input",{staticClass:"inline-block",model:{value:t.search_keyword,callback:function(a){t.search_keyword=a},expression:"search_keyword"}}),t._v(" "),s("vs-button",{attrs:{type:"filled",icon:"search"},on:{click:function(a){t.table_options.current_page=1,t.fetchProducts()}}})],1)],1)],2),t._v(" "),s("vs-pagination",{staticClass:"mt-6",attrs:{total:t.products.last_page},model:{value:t.table_options.current_page,callback:function(a){t.$set(t.table_options,"current_page",a)},expression:"table_options.current_page"}})],1),t._v(" "),s("vs-popup",{attrs:{title:"Duplicate Product",active:t.duplicate_popup},on:{"update:active":function(a){t.duplicate_popup=a}}},[s("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-1/2 mb-4"},[s("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Duplicate Images")]),t._v(" "),s("vs-switch",{attrs:{"vs-value":"1","icon-pack":"feather","vs-icon-on":"icon-check-circle","vs-icon-off":"icon-slash"},model:{value:t.duplicate_product.duplicate_images,callback:function(a){t.$set(t.duplicate_product,"duplicate_images",a)},expression:"duplicate_product.duplicate_images"}},[s("span",{attrs:{slot:"on"},slot:"on"},[t._v("Yes")]),t._v(" "),s("span",{attrs:{slot:"off"},slot:"off"},[t._v("No")])])],1),t._v(" "),s("div",{staticClass:"vx-col w-1/2 mb-4"},[s("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Duplicate Variants")]),t._v(" "),s("vs-switch",{attrs:{"vs-value":"1","icon-pack":"feather","vs-icon-on":"icon-check-circle","vs-icon-off":"icon-slash"},model:{value:t.duplicate_product.duplicate_variants,callback:function(a){t.$set(t.duplicate_product,"duplicate_variants",a)},expression:"duplicate_product.duplicate_variants"}},[s("span",{attrs:{slot:"on"},slot:"on"},[t._v("Yes")]),t._v(" "),s("span",{attrs:{slot:"off"},slot:"off"},[t._v("No")])])],1)]),t._v(" "),s("vs-button",{staticClass:"mr-3 mt-5",on:{click:t.processProductDuplication}},[t._v("Submit")])],1)])],1)}),[],!1,null,null,null);a.default=u.exports},U87P:function(t,a,e){"use strict";var s={props:{value:{type:Object,required:!0},small:{type:Boolean,default:!1}},watch:{value:function(){this.$emit("input",this.value)}}},i=e("KHd+"),c=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full mt-2",class:{"md:w-1/2":!t.small}},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:70",expression:"'max:70'"}],staticClass:"w-full",attrs:{name:"meta_title",maxlength:"100",label:"Meta Title"},model:{value:t.value.meta_title,callback:function(a){t.$set(t.value,"meta_title",a)},expression:"value.meta_title"}}),t._v(" "),e("p",[t.errors.has("meta_title")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("meta_title")))]):t._e()])],1),t._v(" "),e("div",{staticClass:"vx-col w-full mt-2",class:{"md:w-1/2":!t.small}},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:180",expression:"'max:180'"}],staticClass:"w-full",attrs:{name:"meta_keywords",label:"Meta Keywords",maxlength:"180"},model:{value:t.value.meta_keywords,callback:function(a){t.$set(t.value,"meta_keywords",a)},expression:"value.meta_keywords"}}),t._v(" "),e("p",[t.errors.has("meta_keywords")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("meta_keywords")))]):t._e()])],1),t._v(" "),e("div",{staticClass:"vx-col w-full mt-2"},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:180",expression:"'max:180'"}],staticClass:"w-full",attrs:{name:"meta_description",label:"Meta Description",maxlength:"180"},model:{value:t.value.meta_description,callback:function(a){t.$set(t.value,"meta_description",a)},expression:"value.meta_description"}}),t._v(" "),e("p",[t.errors.has("meta_description")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("meta_description")))]):t._e()])],1)])}),[],!1,null,null,null);a.a=c.exports},c3Qt:function(t,a){t.exports="/images/no-image-placeholder.jpg?398a6fa0902f42b38c7dad067cf1e540"}}]);