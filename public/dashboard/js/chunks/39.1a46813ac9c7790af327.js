(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"2+by":function(e,t,a){"use strict";a.r(t);var i=a("o0o1"),s=a.n(i),n=a("uBql"),r=a("LvDl"),l=a.n(r);function c(e,t,a,i,s,n,r){try{var l=e[n](r),c=l.value}catch(e){return void a(e)}l.done?t(c):Promise.resolve(c).then(i,s)}function o(e){return function(){var t=this,a=arguments;return new Promise((function(i,s){var n=e.apply(t,a);function r(e){c(n,i,s,r,l,"next",e)}function l(e){c(n,i,s,r,l,"throw",e)}r(void 0)}))}}var u={props:["pageid"],data:function(){return{loading:!0,page_sections:[],page_section:{},sectionPopup:!1,thumbnail_preview:""}},mounted:function(){this.fetchPageSections()},methods:{fetchPageSections:function(){var e=this;return o(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.$http.get("/api/admin/page/".concat(e.pageid,"/sections"));case 4:a=t.sent,e.page_sections=a.data.data,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.errorNotification("Something went wrong!! Please retry");case 11:return t.prev=11,e.loading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))()},editSection:function(e){this.page_section=l.a.cloneDeep(e),this.thumbnail_preview=e.thumbnail_image.thumb,this.sectionPopup=!0},saveSection:function(){var e=this;return o(s.a.mark((function t(){var a,i,r,l;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$validator.validateAll();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:return t.prev=5,e.$vs.loading({container:"#page-section--container"}),a={title:e.page_section.title,content:e.page_section.content,excerpt:e.page_section.excerpt,thumbnail:e.page_section.thumbnail},i="/api/admin/page/".concat(e.pageid,"/sections"),e.page_section.id&&(i="/api/admin/page/".concat(e.pageid,"/sections/").concat(e.page_section.id),a._method="PATCH"),r=Object(n.a)(a),t.next=13,e.$http.post(i,r);case 13:l=t.sent,e.successNotification(l.data.message),e.sectionPopup=!1,e.fetchPageSections(),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(5),Object(n.e)(e.errors,t.t0),e.errorNotification("Something went wrong! Please retry!!");case 23:return t.prev=23,e.$vs.loading.close("#page-section--container > .con-vs-loading"),t.finish(23);case 26:case"end":return t.stop()}}),t,null,[[5,19,23,26]])})))()},imageUploaded:function(){var e=this.$refs.page_section_thumbnail_image.files[0];this.thumbnail_preview=URL.createObjectURL(e),this.page_section.thumbnail=e},clearImage:function(){this.page_section.thumbnail=null,this.thumbnail_preview=null,this.$refs.page_section_thumbnail_image.value=""},deletePageSection:function(e){var t,a=this;this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Are you sure you want to delete page section?",accept:(t=o(s.a.mark((function t(){var i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.$http.delete("/api/admin/page/".concat(a.pageid,"/sections/").concat(e));case 2:(i=t.sent).data.success?(a.successNotification(i.data.message),a.fetchPageSections()):a.errorNotification(i.data.message);case 4:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)})})}},watch:{sectionPopup:function(e){e||(this.page_section={},this.thumbnail_preview="",this.errors.clear())}}},v=a("KHd+");function p(e,t,a,i,s,n,r){try{var l=e[n](r),c=l.value}catch(e){return void a(e)}l.done?t(c):Promise.resolve(c).then(i,s)}function d(e){return function(){var t=this,a=arguments;return new Promise((function(i,s){var n=e.apply(t,a);function r(e){p(n,i,s,r,l,"next",e)}function l(e){p(n,i,s,r,l,"throw",e)}r(void 0)}))}}var m={data:function(){return{id:null,thumbnail_preview:null,page:{meta:{}}}},components:{PageSections:Object(v.a)(u,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.loading?a("pageLoader"):a("vx-card",{staticClass:"card-padding-5"},[a("vs-table",{attrs:{search:"",stripe:"",data:e.page_sections,"max-items":"40",pagination:""},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.data;return e._l(i,(function(t,i){return a("vs-tr",{key:i,attrs:{data:t}},[a("vs-td",[a("i",[e._v("#"+e._s(t.id))])]),e._v(" "),a("vs-td",[e._v(e._s(t.title))]),e._v(" "),a("vs-td",[a("small",[e._v(e._s(e._f("date_format")(t.created_at,"MMMM Do YYYY, h:mm a")))])]),e._v(" "),a("vs-td",[a("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"warning",type:"filled",size:"small",icon:"create"},on:{click:function(a){return e.editSection(t)}}}),e._v(" "),a("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",size:"small",color:"danger",type:"filled",icon:"delete"},on:{click:function(a){return e.deletePageSection(t.id)}}})],1)],1)}))}}])},[a("template",{slot:"header"},[a("vs-button",{attrs:{color:"primary",size:"small",type:"border"},on:{click:function(t){e.sectionPopup=!0}}},[e._v("Add Section")])],1),e._v(" "),a("template",{slot:"thead"},[a("vs-th",{attrs:{"sort-key":"email"}},[e._v("SN")]),e._v(" "),a("vs-th",[e._v("Title")]),e._v(" "),a("vs-th",{attrs:{"sort-key":"email"}},[e._v("Created At")]),e._v(" "),a("vs-th",[e._v("Actions")])],1)],2)],1),e._v(" "),a("vs-popup",{staticClass:"popup-lg",attrs:{title:"Page Section",active:e.sectionPopup},on:{"update:active":function(t){e.sectionPopup=t}}},[a("form",{staticClass:"vs-con-loading__container",attrs:{id:"page-section--container"}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full mb-4"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"title",label:"Section Title"},model:{value:e.page_section.title,callback:function(t){e.$set(e.page_section,"title",t)},expression:"page_section.title"}}),e._v(" "),e.errors.has("title")?a("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("title")))]):e._e()],1),e._v(" "),a("div",{staticClass:"vx-col w-full mb-4"},[e.thumbnail_preview?a("div",{staticClass:"image-preview-container"},[a("div",{staticClass:"text-right float-right mr-10"},[a("vs-button",{staticClass:"image-remove--button",attrs:{radius:"",size:"small",color:"danger",type:"filled","icon-pack":"feather",icon:"icon-x"},on:{click:e.clearImage}})],1),e._v(" "),a("img",{attrs:{src:e.thumbnail_preview,alt:""}})]):e._e(),e._v(" "),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"image|size:1024",expression:"'image|size:1024'"}],ref:"page_section_thumbnail_image",staticClass:"hidden",attrs:{type:"file",name:"thumbnail",accept:"image/*"},on:{change:e.imageUploaded}}),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("thumbnail"),expression:"errors.has('thumbnail')"}],staticClass:"text-danger text-sm mb-3"},[e._v(e._s(e.errors.first("thumbnail")))]),e._v(" "),a("vs-button",{attrs:{color:"primary",type:"border",size:"small"},on:{click:function(t){return e.$refs.page_section_thumbnail_image.click()}}},[e._v("Thumbnail Image")])],1),e._v(" "),a("div",{staticClass:"vx-col w-full mb-4"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"excerpt",label:"Excerpt"},model:{value:e.page_section.excerpt,callback:function(t){e.$set(e.page_section,"excerpt",t)},expression:"page_section.excerpt"}}),e._v(" "),e.errors.has("excerpt")?a("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("excerpt")))]):e._e()],1),e._v(" "),a("div",{staticClass:"vx-col w-full"},[a("q-editor",{model:{value:e.page_section.content,callback:function(t){e.$set(e.page_section,"content",t)},expression:"page_section.content"}})],1)]),e._v(" "),a("div",{staticClass:"flex justify-between flex-row-reverse"},[a("vs-button",{staticClass:"mt-4 float-right",attrs:{type:"border"},on:{click:e.saveSection}},[e._v("Save")])],1)])])],1)}),[],!1,null,null,null).exports,MetaFields:a("U87P").a},mounted:function(){this.id=this.$route.params.id,this.fetchPage()},methods:{fetchPage:function(){var e=this;return d(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.id){t.next=2;break}return t.abrupt("return");case 2:return e.$vs.loading({container:"#loading--container"}),t.prev=3,t.next=6,e.$http.get("/api/admin/pages/".concat(e.id));case 6:(a=t.sent).data.success&&(e.page=a.data.data,e.thumbnail_preview=e.page.thumbnail_image.thumb),t.next=15;break;case 10:if(t.prev=10,t.t0=t.catch(3),e.errorNotification("Something went wrong! Please retry!!"),404!==t.t0.response.status){t.next=15;break}return t.abrupt("return",e.$router.push({name:"page-error-404"}));case 15:return t.prev=15,e.$vs.loading.close("#loading--container > .con-vs-loading"),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[3,10,15,18]])})))()},savePage:function(){var e=this;return d(s.a.mark((function t(){var a,i,r,l;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$validator.validateAll();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:return t.prev=5,e.$vs.loading({container:"#loading--container"}),a={title:e.page.title,content:e.page.content,excerpt:e.page.excerpt,thumbnail:e.page.thumbnail,meta:JSON.stringify(e.page.meta),delete_image:!0},i="/api/admin/pages",e.id&&(i="/api/admin/pages/".concat(e.id),a._method="PATCH"),r=Object(n.a)(a),t.next=13,e.$http.post(i,r);case 13:if(l=t.sent,e.successNotification(l.data.message),e.id){t.next=17;break}return t.abrupt("return",e.$router.push({name:"admin-page-detail",params:{id:l.data.page.id}}));case 17:t.next=23;break;case 19:t.prev=19,t.t0=t.catch(5),Object(n.e)(e.errors,t.t0),e.errorNotification("Something went wrong! Please retry!!");case 23:return t.prev=23,e.$vs.loading.close("#loading--container > .con-vs-loading"),t.finish(23);case 26:case"end":return t.stop()}}),t,null,[[5,19,23,26]])})))()},imageUploaded:function(){var e=this.$refs.page_thumbnail_image.files[0];this.thumbnail_preview=URL.createObjectURL(e),this.page.thumbnail=e},clearImage:function(){this.page.thumbnail=null,this.thumbnail_preview=null,this.$refs.page_thumbnail_image.value="",this.page.delete_image=!0}}},g=Object(v.a)(m,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[a("vs-tabs",[a("vs-tab",{attrs:{label:"Page"}},[a("div",{staticClass:"tab-text vx-row"},[a("div",{staticClass:"vx-col md:w-2/3 w-full mb-4"},[a("vx-card",[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full mb-4"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"title",label:"Title"},model:{value:e.page.title,callback:function(t){e.$set(e.page,"title",t)},expression:"page.title"}}),e._v(" "),e.errors.has("title")?a("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("title")))]):e._e()],1),e._v(" "),a("div",{staticClass:"vx-col w-full mb-4"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"excerpt",label:"Excerpt (Short Description)"},model:{value:e.page.excerpt,callback:function(t){e.$set(e.page,"excerpt",t)},expression:"page.excerpt"}}),e._v(" "),e.errors.has("excerpt")?a("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("excerpt")))]):e._e()],1),e._v(" "),a("div",{staticClass:"vx-col w-full mb-4"},[a("label",{staticClass:"vs-input--label",attrs:{for:""}},[e._v("Content")]),e._v(" "),a("q-editor",{model:{value:e.page.content,callback:function(t){e.$set(e.page,"content",t)},expression:"page.content"}}),e._v(" "),e.errors.has("content")?a("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("content")))]):e._e()],1)])])],1),e._v(" "),a("div",{staticClass:"vx-col md:w-1/3 w-full mb-4"},[a("vx-card",{attrs:{title:"Page Thumbnail"}},[a("div",{staticClass:"w-full mb-4"},[e.thumbnail_preview?a("div",{staticClass:"image-preview-container"},[a("div",{staticClass:"text-right float-right mr-10"},[a("vs-button",{staticClass:"image-remove--button",attrs:{radius:"",size:"small",color:"danger",type:"filled","icon-pack":"feather",icon:"icon-x"},on:{click:e.clearImage}})],1),e._v(" "),a("img",{attrs:{src:e.thumbnail_preview,alt:""}})]):e._e(),e._v(" "),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"image|size:1024",expression:"'image|size:1024'"}],ref:"page_thumbnail_image",staticClass:"hidden",attrs:{type:"file",name:"thumbnail",accept:"image/*"},on:{change:e.imageUploaded}}),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("thumbnail"),expression:"errors.has('thumbnail')"}],staticClass:"text-danger text-sm mb-3"},[e._v(e._s(e.errors.first("thumbnail")))]),e._v(" "),a("vs-button",{attrs:{color:"primary",type:"border",size:"small"},on:{click:function(t){return e.$refs.page_thumbnail_image.click()}}},[e._v("Thumbnail Image")])],1)]),e._v(" "),a("vx-card",{staticClass:"mt-3",attrs:{title:"SEO Meta"}},[a("MetaFields",{attrs:{small:""},model:{value:e.page.meta,callback:function(t){e.$set(e.page,"meta",t)},expression:"page.meta"}})],1)],1),e._v(" "),a("div",{staticClass:"vx-col w-full"},[a("vs-button",{attrs:{type:"relief",color:"primary"},on:{click:e.savePage}},[e._v("Save")])],1)])]),e._v(" "),e.checkPermission("page-sections-manage")?a("vs-tab",{attrs:{label:"Sections",disabled:!e.id}},[a("div",{staticClass:"tab-text"},[e.id?a("PageSections",{attrs:{pageid:e.id}}):e._e()],1)]):e._e()],1)],1)}),[],!1,null,null,null);t.default=g.exports},U87P:function(e,t,a){"use strict";var i={props:{value:{type:Object,required:!0},small:{type:Boolean,default:!1}},watch:{value:function(){this.$emit("input",this.value)}}},s=a("KHd+"),n=Object(s.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vx-row"},[a("di12v",{staticClass:"vx-col w-full mt-2",class:{"md:w-1/2":!e.small}},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:70",expression:"'max:70'"}],staticClass:"w-full",attrs:{name:"meta_title",maxlength:"100",label:"Meta Title"},model:{value:e.value.meta_title,callback:function(t){e.$set(e.value,"meta_title",t)},expression:"value.meta_title"}}),e._v(" "),a("p",[e.errors.has("meta_title")?a("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("meta_title")))]):e._e()])],1),e._v(" "),a("div",{staticClass:"vx-col w-full mt-2",class:{"md:w-1/2":!e.small}},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:180",expression:"'max:180'"}],staticClass:"w-full",attrs:{name:"meta_keywords",label:"Meta Keywords",maxlength:"180"},model:{value:e.value.meta_keywords,callback:function(t){e.$set(e.value,"meta_keywords",t)},expression:"value.meta_keywords"}}),e._v(" "),a("p",[e.errors.has("meta_keywords")?a("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("meta_keywords")))]):e._e()])],1),e._v(" "),a("div",{staticClass:"vx-col w-full mt-2"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:180",expression:"'max:180'"}],staticClass:"w-full",attrs:{name:"meta_description",label:"Meta Description",maxlength:"180"},model:{value:e.value.meta_description,callback:function(t){e.$set(e.value,"meta_description",t)},expression:"value.meta_description"}}),e._v(" "),a("p",[e.errors.has("meta_description")?a("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("meta_description")))]):e._e()])],1)],1)}),[],!1,null,null,null);t.a=n.exports}}]);