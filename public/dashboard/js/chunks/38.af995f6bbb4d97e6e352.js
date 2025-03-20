(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{U87P:function(t,e,a){"use strict";var s={props:{value:{type:Object,required:!0},small:{type:Boolean,default:!1}},watch:{value:function(){this.$emit("input",this.value)}}},r=a("KHd+"),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full mt-2",class:{"md:w-1/2":!t.small}},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:70",expression:"'max:70'"}],staticClass:"w-full",attrs:{name:"meta_title",maxlength:"100",label:"Meta Title"},model:{value:t.value.meta_title,callback:function(e){t.$set(t.value,"meta_title",e)},expression:"value.meta_title"}}),t._v(" "),a("p",[t.errors.has("meta_title")?a("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("meta_title")))]):t._e()])],1),t._v(" "),a("div",{staticClass:"vx-col w-full mt-2",class:{"md:w-1/2":!t.small}},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:180",expression:"'max:180'"}],staticClass:"w-full",attrs:{name:"meta_keywords",label:"Meta Keywords",maxlength:"180"},model:{value:t.value.meta_keywords,callback:function(e){t.$set(t.value,"meta_keywords",e)},expression:"value.meta_keywords"}}),t._v(" "),a("p",[t.errors.has("meta_keywords")?a("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("meta_keywords")))]):t._e()])],1),t._v(" "),a("div",{staticClass:"vx-col w-full mt-2"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:180",expression:"'max:180'"}],staticClass:"w-full",attrs:{name:"meta_description",label:"Meta Description",maxlength:"180"},model:{value:t.value.meta_description,callback:function(e){t.$set(t.value,"meta_description",e)},expression:"value.meta_description"}}),t._v(" "),a("p",[t.errors.has("meta_description")?a("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("meta_description")))]):t._e()])],1)])}),[],!1,null,null,null);e.a=i.exports},b0nE:function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),r=a.n(s),i=a("U87P"),o=a("uBql"),n=a("Snq/"),c=a.n(n),l=a("Jeo8"),v=a("t2rG"),d=a.n(v);function u(t,e,a,s,r,i,o){try{var n=t[i](o),c=n.value}catch(t){return void a(t)}n.done?e(c):Promise.resolve(c).then(s,r)}function p(t){return function(){var e=this,a=arguments;return new Promise((function(s,r){var i=t.apply(e,a);function o(t){u(i,s,r,o,n,"next",t)}function n(t){u(i,s,r,o,n,"throw",t)}o(void 0)}))}}var g={data:function(){return{loading:!0,categories:{data:[],per_page:0,total:0,last_page:0},table_options:{current_page:1},dropdown_categories:[],search_keyword:"",category_popup:!1,category:{featured:!1,meta:{}},image_preview:null,view_style:"table",categories_tree:[],treeOptions:{checkbox:!1,propertyNames:{text:"title",data:"category_image"}},table_type:"full"}},components:{"v-select":c.a,MetaFields:i.a,"cat-tree":l.a,draggable:d.a},mounted:function(){this.fetchCategories(),this.fetchCategoryDropdown()},methods:{fetchCategoryDropdown:function(){var t=this;return p(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.get("/api/admin/product-categories-dropdown");case 3:a=e.sent,t.dropdown_categories=a.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.errorNotification("Something went wrong!! Please retry");case 10:return e.prev=10,t.loading=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()},fetchCategoryTree:function(){var t=this;return p(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$http.get("/api/admin/product-categories-tree");case 4:a=e.sent,t.categories_tree=a.data.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.errorNotification("Something went wrong!! Please retry");case 11:return e.prev=11,t.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()},fetchCategories:function(){var t=this;return p(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading||t.$vs.loading({container:"#category--table"}),e.prev=1,e.next=4,t.$http.get("/api/admin/product-categories",{params:{page:t.table_options.current_page,search:t.search_keyword,data:t.table_type}});case 4:a=e.sent,t.categories=a.data.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.errorNotification("Something went wrong!! Please retry");case 11:return e.prev=11,t.$vs.loading.close("#category--table > .con-vs-loading"),t.loading=!1,e.finish(11);case 15:case"end":return e.stop()}}),e,null,[[1,8,11,15]])})))()},imageUploaded:function(){var t=this.$refs.category_thumbnail_image.files[0];this.image_preview=URL.createObjectURL(t),this.category.image=t},clearImage:function(){this.category.image=null,this.image_preview=null,this.$refs.category_thumbnail_image.value=""},saveCategory:function(){var t=this;return p(r.a.mark((function e(){var a,s,i,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$validator.validateAll();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return t.$vs.loading({container:"#loading--container"}),e.prev=6,a={title:t.category.title,image:t.category.image,parent_id:t.category.parent_id,meta:JSON.stringify(t.category.meta),featured:t.category.featured,description:t.category.description},s="/api/admin/product-categories",t.category.id&&(s="/api/admin/product-categories/".concat(t.category.id),a._method="PATCH"),i=Object(o.a)(a),e.next=13,t.$http.post(s,i);case 13:(n=e.sent).data.success&&(t.successNotification(n.data.message),t.fetchCategories(),t.category_popup=!1),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(6),Object(o.e)(t.errors,e.t0),t.errorNotification("Something went wrong! Please retry!!");case 21:return e.prev=21,t.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[6,17,21,24]])})))()},editCategory:function(t){this.category=_.cloneDeep(t),this.image_preview=this.category.category_image.thumb,this.category_popup=!0},deleteCategory:function(t){var e,a=this;this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Are you sure you want to delete this category?",accept:(e=p(r.a.mark((function e(){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.$http.delete("/api/admin/product-categories/".concat(t));case 2:(s=e.sent).data.success?(a.successNotification(s.data.message),a.fetchCategories()):a.errorNotification(s.data.message);case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})})},handlePagination:function(t){this.table_options.current_page=t,this.fetchCategories()},sortCategories:function(){var t=this;return p(r.a.mark((function e(){var a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.$vs.loading({container:"#category--table"}),a=[],t.categories.data.map((function(t,e){a.push({category_id:t.id,order:e+1})})),e.next=6,t.$http.post("/api/admin/product-categories/sort-categories",{payload:a});case 6:(s=e.sent).data.success&&t.successNotification(s.data.message),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:return e.prev=12,t.$vs.loading.close("#category--table > .con-vs-loading"),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,10,12,15]])})))()}},watch:{category_popup:function(t){t||(this.category={meta:{}},this.errors.clear(),this.image_preview=null)},"table_options.current_page":function(){this.fetchCategories()},view_style:function(t){"tree"===t&&this.fetchCategoryTree()},table_type:function(t){this.fetchCategories()}}},m=a("KHd+"),f=Object(m.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vs-popup",{staticClass:"popup-lg",attrs:{title:"Category Detail",active:t.category_popup},on:{"update:active":function(e){t.category_popup=e}}},[a("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[a("div",{staticClass:"w-full mb-4"},[a("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Parent Category")]),t._v(" "),a("v-select",{attrs:{options:t.dropdown_categories,label:"category_full_name",value:"id",reduce:function(t){return t.id},name:"parent_id"},model:{value:t.category.parent_id,callback:function(e){t.$set(t.category,"parent_id",e)},expression:"category.parent_id"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("parent_id"),expression:"errors.has('parent_id')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("parent_id")))])],1),t._v(" "),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"title",label:"Category name"},model:{value:t.category.title,callback:function(e){t.$set(t.category,"title",e)},expression:"category.title"}}),t._v(" "),a("p",[t.errors.has("title")?a("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("title")))]):t._e()]),t._v(" "),a("div",{staticClass:"vx-col w-full mt-4"},[a("vs-checkbox",{model:{value:t.category.featured,callback:function(e){t.$set(t.category,"featured",e)},expression:"category.featured"}},[t._v("Featured")])],1),t._v(" "),a("div",{staticClass:"w-full mt-4"},[t.image_preview?a("div",{staticClass:"image-preview-container"},[a("div",{staticClass:"text-right float-right mr-10"},[a("vs-button",{staticClass:"image-remove--button",attrs:{radius:"",size:"small",color:"danger",type:"filled","icon-pack":"feather",icon:"icon-x"},on:{click:t.clearImage}})],1),t._v(" "),a("img",{attrs:{src:t.image_preview,alt:""}})]):t._e(),t._v(" "),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"image|size:1024",expression:"'image|size:1024'"}],ref:"category_thumbnail_image",staticClass:"hidden",attrs:{type:"file",name:"thumbnail",accept:"image/*"},on:{change:t.imageUploaded}}),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("thumbnail"),expression:"errors.has('thumbnail')"}],staticClass:"text-danger text-sm mb-3"},[t._v("\n          "+t._s(t.errors.first("thumbnail"))+"\n        ")]),t._v(" "),a("vs-button",{attrs:{color:"primary",type:"border",size:"small"},on:{click:function(e){return t.$refs.category_thumbnail_image.click()}}},[t._v("Thumbnail Image")])],1),t._v(" "),a("div",{staticClass:"vx-col mt-4"},[a("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Description")]),t._v(" "),a("q-editor",{model:{value:t.category.description,callback:function(e){t.$set(t.category,"description",e)},expression:"category.description"}})],1),t._v(" "),a("MetaFields",{model:{value:t.category.meta,callback:function(e){t.$set(t.category,"meta",e)},expression:"category.meta"}}),t._v(" "),a("vs-button",{staticClass:"mr-3 mt-5",on:{click:t.saveCategory}},[t._v("Submit")])],1)]),t._v(" "),t.loading?a("pageLoader"):a("vx-card",{staticClass:"card-padding-5 vs-con-loading__container",attrs:{id:"category--table"}},[a("vs-button",{attrs:{size:"small",color:"table"===t.view_style?"primary":"#AAA"},on:{click:function(e){t.view_style="table"}}},[t._v("Table View")]),t._v(" "),a("vs-button",{attrs:{size:"small",color:"tree"===t.view_style?"primary":"#AAA"},on:{click:function(e){t.view_style="tree"}}},[t._v("Tree View")]),t._v(" "),"table"===t.view_style?a("div",[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full mt-4"},[a("vs-radio",{staticClass:"mr-5",attrs:{"vs-name":"radio_table_type","vs-value":"full"},model:{value:t.table_type,callback:function(e){t.table_type=e},expression:"table_type"}},[t._v("All Categories")]),t._v(" "),a("vs-radio",{attrs:{"vs-name":"radio_table_type","vs-value":"parent"},model:{value:t.table_type,callback:function(e){t.table_type=e},expression:"table_type"}},[t._v("Parents Only")])],1)]),t._v(" "),"full"===t.table_type?a("vs-table",{staticClass:"mt-4",attrs:{stripe:"",data:t.categories.data,"max-items":t.categories.per_page,total:t.categories.total,sst:!0},on:{"change-page":t.handlePagination},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return t._l(s,(function(e,s){return a("vs-tr",{key:s,attrs:{data:e}},[a("vs-td",[a("img",{attrs:{src:e.category_image.thumb,alt:"",width:"50px"}})]),t._v(" "),a("vs-td",[t._v(t._s(e.title))]),t._v(" "),a("vs-td",[e.parent_id?a("span",[t._v(t._s(e.parent_tree))]):a("span",[t._v("PARENT")])]),t._v(" "),a("vs-td",[t._v(t._s(e.images_count)+"    \n              "),a("router-link",{attrs:{to:{name:"admin-product-categories-images",params:{id:e.id}}}},[a("vs-button",{attrs:{size:"small"}},[t._v("View Images")])],1)],1),t._v(" "),a("vs-td",[t.checkPermission("edit-product-category")?a("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"warning",type:"filled",size:"small",icon:"create"},on:{click:function(a){return t.editCategory(e)}}}):t._e(),t._v(" "),t.checkPermission("delete-product-category")?a("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",size:"small",color:"danger",type:"filled",icon:"delete"},on:{click:function(a){return t.deleteCategory(e.id)}}}):t._e()],1)],1)}))}}],null,!1,1492323626)},[a("template",{slot:"header"},[a("strong",[t._v("Total :")]),t._v("\n           "+t._s(t.categories.total)+"    \n          "),t.checkPermission("add-product-category")?a("vs-button",{staticClass:"mb-4",attrs:{color:"primary",type:"border"},on:{click:function(e){t.category_popup=!0}}},[t._v("Add Category")]):t._e(),t._v(" "),a("div",{staticClass:"con-input-search vs-table--search"},[a("vs-input",{staticClass:"inline-block",model:{value:t.search_keyword,callback:function(e){t.search_keyword=e},expression:"search_keyword"}}),t._v(" "),a("vs-button",{attrs:{type:"filled",icon:"search"},on:{click:function(e){t.table_options.current_page=1,t.fetchCategories()}}})],1)],1),t._v(" "),a("template",{slot:"thead"},[a("vs-th",[t._v("Image")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"title"}},[t._v("Name")]),t._v(" "),a("vs-th",[t._v("Level")]),t._v(" "),a("vs-th",[t._v("Images")]),t._v(" "),a("vs-th",[t._v("Actions")])],1)],2):a("vs-table",{staticClass:"mt-4",attrs:{stripe:"",data:t.categories.data,"max-items":t.categories.per_page,total:t.categories.total,sst:!0},on:{"change-page":t.handlePagination},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return[a("draggable",{attrs:{tag:"tbody"},on:{change:t.sortCategories},model:{value:t.categories.data,callback:function(e){t.$set(t.categories,"data",e)},expression:"categories.data"}},t._l(s,(function(e,s){return a("tr",{key:s,staticClass:"tr-values",attrs:{data:e}},[a("vs-td",[a("img",{attrs:{src:e.category_image.thumb,alt:"",width:"50px"}})]),t._v(" "),a("vs-td",[t._v(t._s(e.title))]),t._v(" "),a("vs-td",[e.parent_id?a("span",[t._v(t._s(e.parent_tree))]):a("span",[t._v("PARENT")])]),t._v(" "),a("vs-td",[t._v("Active")]),t._v(" "),a("vs-td",[t.checkPermission("edit-product-category")?a("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"warning",type:"filled",size:"small",icon:"create"},on:{click:function(a){return t.editCategory(e)}}}):t._e(),t._v(" "),t.checkPermission("delete-product-category")?a("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",size:"small",color:"danger",type:"filled",icon:"delete"},on:{click:function(a){return t.deleteCategory(e.id)}}}):t._e()],1)],1)})),0)]}}],null,!1,58623160)},[a("template",{slot:"header"},[a("strong",[t._v("Total :")]),t._v("\n           "+t._s(t.categories.total)+"    \n          "),t.checkPermission("add-product-category")?a("vs-button",{staticClass:"mb-4",attrs:{color:"primary",type:"border"},on:{click:function(e){t.category_popup=!0}}},[t._v("Add Category")]):t._e(),t._v(" "),a("div",{staticClass:"con-input-search vs-table--search"},[a("vs-input",{staticClass:"inline-block",model:{value:t.search_keyword,callback:function(e){t.search_keyword=e},expression:"search_keyword"}}),t._v(" "),a("vs-button",{attrs:{type:"filled",icon:"search"},on:{click:function(e){t.table_options.current_page=1,t.fetchCategories()}}})],1)],1),t._v(" "),a("template",{slot:"thead"},[a("vs-th",[t._v("Image")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"title"}},[t._v("Name")]),t._v(" "),a("vs-th",[t._v("Level")]),t._v(" "),a("vs-th",[t._v("Status")]),t._v(" "),a("vs-th",[t._v("Actions")])],1)],2),t._v(" "),a("vs-pagination",{staticClass:"mt-4",attrs:{total:t.categories.last_page},model:{value:t.table_options.current_page,callback:function(e){t.$set(t.table_options,"current_page",e)},expression:"table_options.current_page"}})],1):a("div",[a("cat-tree",{staticClass:"mt-4",attrs:{data:t.categories_tree,options:t.treeOptions},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.node;return a("span",{staticClass:"tree-text"},[[s.data.thumb?a("img",{staticStyle:{display:"inline-block","margin-right":"5px",position:"relative",top:"10px"},attrs:{src:s.data.thumb,alt:"",width:"40px"}}):t._e(),t._v("\n            "+t._s(s.text)+"\n          ")]],2)}}])})],1)],1)],1)}),[],!1,null,null,null);e.default=f.exports}}]);