(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{U87P:function(t,e,a){"use strict";var s={props:{value:{type:Object,required:!0},small:{type:Boolean,default:!1}},watch:{value:function(){this.$emit("input",this.value)}}},l=a("KHd+"),r=Object(l.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full mt-2",class:{"md:w-1/2":!t.small}},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:70",expression:"'max:70'"}],staticClass:"w-full",attrs:{name:"meta_title",maxlength:"100",label:"Meta Title"},model:{value:t.value.meta_title,callback:function(e){t.$set(t.value,"meta_title",e)},expression:"value.meta_title"}}),t._v(" "),a("p",[t.errors.has("meta_title")?a("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("meta_title")))]):t._e()])],1),t._v(" "),a("div",{staticClass:"vx-col w-full mt-2",class:{"md:w-1/2":!t.small}},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:180",expression:"'max:180'"}],staticClass:"w-full",attrs:{name:"meta_keywords",label:"Meta Keywords",maxlength:"180"},model:{value:t.value.meta_keywords,callback:function(e){t.$set(t.value,"meta_keywords",e)},expression:"value.meta_keywords"}}),t._v(" "),a("p",[t.errors.has("meta_keywords")?a("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("meta_keywords")))]):t._e()])],1),t._v(" "),a("div",{staticClass:"vx-col w-full mt-2"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:180",expression:"'max:180'"}],staticClass:"w-full",attrs:{name:"meta_description",label:"Meta Description",maxlength:"180"},model:{value:t.value.meta_description,callback:function(e){t.$set(t.value,"meta_description",e)},expression:"value.meta_description"}}),t._v(" "),a("p",[t.errors.has("meta_description")?a("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("meta_description")))]):t._e()])],1)])}),[],!1,null,null,null);e.a=r.exports},p5VP:function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),l=a.n(s),r=a("uBql"),i=a("U87P"),o=a("w48C"),n=a.n(o),c=a("Snq/"),u=a.n(c);a("CVKz"),a("wd/R");function v(t,e,a,s,l,r,i){try{var o=t[r](i),n=o.value}catch(t){return void a(t)}o.done?e(n):Promise.resolve(n).then(s,l)}function d(t){return function(){var e=this,a=arguments;return new Promise((function(s,l){var r=t.apply(e,a);function i(t){v(r,s,l,i,o,"next",t)}function o(t){v(r,s,l,i,o,"throw",t)}i(void 0)}))}}var m={data:function(){return{id:null,thumbnail_preview:null,blog:{publish_date:this.$options.filters.date_format(Date.now()),meta:{}},categories:[]}},components:{MetaFields:i.a,flatPickr:n.a,"v-select":u.a},mounted:function(){this.id=this.$route.params.id,this.fetchCategories(),this.fetchBlog()},methods:{fetchCategories:function(){var t=this;return d(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.get("/api/admin/blog-categories/get-dropdown");case 3:a=e.sent,t.categories=a.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.errorNotification("Something went wrong while fetching albums!! Please retry");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},fetchBlog:function(){var t=this;return d(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id){e.next=2;break}return e.abrupt("return");case 2:return t.$vs.loading({container:"#loading--container"}),e.prev=3,e.next=6,t.$http.get("/api/admin/blogs/".concat(t.id));case 6:(a=e.sent).data.success&&(t.blog=a.data.data,t.thumbnail_preview=t.blog.thumbnail_image.thumb),e.next=16;break;case 10:if(e.prev=10,e.t0=e.catch(3),console.log(e.t0),t.errorNotification("Something went wrong! Please retry!!"),404!==e.t0.response.status){e.next=16;break}return e.abrupt("return",t.$router.push({name:"page-error-404"}));case 16:return e.prev=16,t.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[3,10,16,19]])})))()},saveBlog:function(){var t=this;return d(l.a.mark((function e(){var a,s,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$validator.validateAll();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,t.$vs.loading({container:"#loading--container"}),a={title:t.blog.title,slug:t.blog.slug,category_id:t.blog.category_id,content:t.blog.content,short_desc:t.blog.short_desc,thumbnail:t.blog.thumbnail,author:t.blog.author,status:t.blog.status,is_featured:t.blog.is_featured,publish_date:t.blog.publish_date,meta:JSON.stringify(t.blog.meta)},s="/api/admin/blogs",t.id&&(s="/api/admin/blogs/".concat(t.id),a._method="PATCH"),i=Object(r.a)(a),e.next=13,t.$http.post(s,i);case 13:return o=e.sent,t.successNotification(o.data.message),e.abrupt("return",t.$router.push({name:"admin-blogs"}));case 18:e.prev=18,e.t0=e.catch(5),Object(r.e)(t.errors,e.t0),t.errorNotification("Something went wrong! Please retry!!");case 22:return e.prev=22,t.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(22);case 25:case"end":return e.stop()}}),e,null,[[5,18,22,25]])})))()},imageUploaded:function(){var t=this.$refs.blog_thumbnail_image.files[0];this.thumbnail_preview=URL.createObjectURL(t),this.blog.thumbnail=t},clearImage:function(){this.blog.thumbnail=null,this.thumbnail_preview=null,this.$refs.blog_thumbnail_image.value=""}}},b=a("KHd+"),g=Object(b.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[a("div",{staticClass:"tab-text vx-row"},[a("div",{staticClass:"vx-col md:w-2/3 w-full mb-4"},[a("vx-card",[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full mb-4"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"title",label:"Title"},model:{value:t.blog.title,callback:function(e){t.$set(t.blog,"title",e)},expression:"blog.title"}}),t._v(" "),t.errors.has("title")?a("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("title")))]):t._e()],1),t._v(" "),t.id?a("div",{staticClass:"vx-col w-full mb-4"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"slug",label:"Slug"},model:{value:t.blog.slug,callback:function(e){t.$set(t.blog,"slug",e)},expression:"blog.slug"}}),t._v(" "),t.errors.has("slug")?a("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("slug")))]):t._e()],1):t._e(),t._v(" "),a("div",{staticClass:"vx-col md:w-1/2 mb-4"},[a("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Category")]),t._v(" "),a("v-select",{attrs:{options:t.categories,label:"title",value:"id",reduce:function(t){return t.id},name:"category_id"},model:{value:t.blog.category_id,callback:function(e){t.$set(t.blog,"category_id",e)},expression:"blog.category_id"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("category_id"),expression:"errors.has('category_id')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("category_id")))])],1),t._v(" "),a("div",{staticClass:"vx-col md:w-1/2 mb-4"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"author",label:"Author"},model:{value:t.blog.author,callback:function(e){t.$set(t.blog,"author",e)},expression:"blog.author"}}),t._v(" "),t.errors.has("author")?a("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("author")))]):t._e()],1),t._v(" "),a("div",{staticClass:"vx-col w-full mb-4"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"short_desc",label:"Excerpt (Short Description)"},model:{value:t.blog.short_desc,callback:function(e){t.$set(t.blog,"short_desc",e)},expression:"blog.short_desc"}}),t._v(" "),t.errors.has("short_desc")?a("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("short_desc")))]):t._e()],1),t._v(" "),a("div",{staticClass:"vx-col md:w-1/3 mb-4"},[a("label",{attrs:{for:""}},[t._v("Publish Date")]),t._v(" "),a("flat-pickr",{staticClass:"w-full",attrs:{config:{enableTime:!0},name:"publish_date"},model:{value:t.blog.publish_date,callback:function(e){t.$set(t.blog,"publish_date",e)},expression:"blog.publish_date"}})],1),t._v(" "),a("div",{staticClass:"vx-col md:w-1/3 mb-4"},[a("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Status")]),t._v(" "),a("vs-switch",{staticClass:"mt-3",attrs:{color:"success","vs-value":"1"},model:{value:t.blog.status,callback:function(e){t.$set(t.blog,"status",e)},expression:"blog.status"}},[a("span",{attrs:{slot:"on"},slot:"on"},[t._v("Enabled")]),t._v(" "),a("span",{attrs:{slot:"off"},slot:"off"},[t._v("Disabled")])])],1),t._v(" "),a("div",{staticClass:"vx-col md:w-1/3 mb-4"},[a("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Is Featured?")]),t._v(" "),a("vs-switch",{staticClass:"mt-3",attrs:{color:"success","vs-value":"1"},model:{value:t.blog.is_featured,callback:function(e){t.$set(t.blog,"is_featured",e)},expression:"blog.is_featured"}},[a("span",{attrs:{slot:"on"},slot:"on"},[t._v("Yes")]),t._v(" "),a("span",{attrs:{slot:"off"},slot:"off"},[t._v("No")])])],1),t._v(" "),a("div",{staticClass:"vx-col w-full mb-4"},[a("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Content")]),t._v(" "),a("q-editor",{model:{value:t.blog.content,callback:function(e){t.$set(t.blog,"content",e)},expression:"blog.content"}}),t._v(" "),t.errors.has("content")?a("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("content")))]):t._e()],1)])])],1),t._v(" "),a("div",{staticClass:"vx-col md:w-1/3 w-full mb-4"},[a("vx-card",{attrs:{title:"Thumbnail Image"}},[a("div",{staticClass:"w-full mb-4"},[t.thumbnail_preview?a("div",{staticClass:"image-preview-container"},[a("div",{staticClass:"text-right float-right mr-10"},[a("vs-button",{staticClass:"image-remove--button",attrs:{radius:"",size:"small",color:"danger",type:"filled","icon-pack":"feather",icon:"icon-x"},on:{click:t.clearImage}})],1),t._v(" "),a("img",{attrs:{src:t.thumbnail_preview,alt:""}})]):t._e(),t._v(" "),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"image|size:1024",expression:"'image|size:1024'"}],ref:"blog_thumbnail_image",staticClass:"hidden",attrs:{type:"file",name:"thumbnail",accept:"image/*"},on:{change:t.imageUploaded}}),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("thumbnail"),expression:"errors.has('thumbnail')"}],staticClass:"text-danger text-sm mb-3"},[t._v("\n            "+t._s(t.errors.first("thumbnail"))+"\n          ")]),t._v(" "),a("vs-button",{attrs:{color:"primary",type:"border",size:"small"},on:{click:function(e){return t.$refs.blog_thumbnail_image.click()}}},[t._v("Thumbnail Image")])],1)]),t._v(" "),a("vx-card",{staticClass:"mt-3",attrs:{title:"SEO Meta"}},[a("MetaFields",{attrs:{small:""},model:{value:t.blog.meta,callback:function(e){t.$set(t.blog,"meta",e)},expression:"blog.meta"}})],1)],1),t._v(" "),a("div",{staticClass:"vx-col w-full"},[a("vs-button",{attrs:{type:"relief",color:"primary"},on:{click:t.saveBlog}},[t._v("Save")])],1)])])}),[],!1,null,null,null);e.default=g.exports}}]);