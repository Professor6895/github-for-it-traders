(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{iLnv:function(e,t,a){"use strict";a.r(t);var i=a("o0o1"),n=a.n(i),r=a("uBql");a("LvDl");function s(e,t,a,i,n,r,s){try{var o=e[r](s),c=o.value}catch(e){return void a(e)}o.done?t(c):Promise.resolve(c).then(i,n)}function o(e){return function(){var t=this,a=arguments;return new Promise((function(i,n){var r=e.apply(t,a);function o(e){s(r,i,n,o,c,"next",e)}function c(e){s(r,i,n,o,c,"throw",e)}o(void 0)}))}}var c={data:function(){return{brand_id:"",loading:!1,imagePopup:!1,images:[],image:{},image_preview:null}},mounted:function(){this.brand_id=this.$route.params.id,this.fetchImages()},methods:{fetchImages:function(){var e=this;return o(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.$http.get("/api/admin/product-brands/".concat(e.brand_id,"/images"));case 4:a=t.sent,e.images=a.data.data,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.errorNotification("Something went wrong!! Please retry");case 11:return t.prev=11,e.loading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))()},saveImage:function(){var e=this;return o(n.a.mark((function t(){var a,i,s,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$validator.validateAll();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:return t.prev=5,e.$vs.loading({container:"#banner-image--container"}),a={image:e.image.image,link:e.image.link},i="/api/admin/product-brands/".concat(e.brand_id,"/images"),s=Object(r.a)(a),t.next=12,e.$http.post(i,s);case 12:o=t.sent,e.successNotification(o.data.message),e.imagePopup=!1,e.fetchImages(),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(5),Object(r.e)(e.errors,t.t0),e.errorNotification("Something went wrong! Please retry!!");case 22:return t.prev=22,e.$vs.loading.close("#banner-image--container > .con-vs-loading"),t.finish(22);case 25:case"end":return t.stop()}}),t,null,[[5,18,22,25]])})))()},imageUploaded:function(){var e=this.$refs.banner_image.files[0];this.image_preview=URL.createObjectURL(e),this.image.image=e},clearImage:function(){this.image.image=null,this.image_preview=null,this.$refs.banner_image.value=""},deleteImage:function(e){var t,a=this;this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Are you sure you want to delete the image?",accept:(t=o(n.a.mark((function t(){var i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.$http.delete("/api/admin/product-brands/".concat(a.brand_id,"/images/").concat(e));case 2:(i=t.sent).data.success?(a.successNotification(i.data.message),a.fetchImages()):a.errorNotification(i.data.message);case 4:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)})})}},watch:{imagePopup:function(e){e||(this.image_preview=null,this.image={},this.errors.clear())}}},l=a("KHd+"),m=Object(l.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.loading?a("pageLoader"):a("vx-card",{staticClass:"card-padding-5 vs-con-loading__container",attrs:{title:"Brand Images",id:"images-loading--container"}},[a("vs-table",{attrs:{search:"",stripe:"",data:e.images,"max-items":"40",pagination:""},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.data;return e._l(i,(function(t){return a("tr",{key:t.id,staticClass:"tr-values"},[a("vs-td",[a("img",{attrs:{src:t.image_preview,alt:"",width:"200px"}})]),e._v(" "),a("vs-td",[e._v("\n              "+e._s(t.custom_properties.link)+"\n            ")]),e._v(" "),a("vs-td",[a("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"danger",type:"filled",icon:"delete"},on:{click:function(a){return e.deleteImage(t.id)}}})],1)],1)}))}}])},[a("template",{slot:"header"},[a("strong",[e._v("Total :")]),e._v("\n         "+e._s(e.images.length)+"    \n        "),a("vs-button",{attrs:{color:"primary",size:"small",type:"border"},on:{click:function(t){e.imagePopup=!0}}},[e._v("Add Image")])],1),e._v(" "),a("template",{slot:"thead"},[a("vs-th",[e._v("Image")]),e._v(" "),a("vs-th",[e._v("Link")]),e._v(" "),a("vs-th",[e._v("Actions")])],1)],2)],1),e._v(" "),a("vs-popup",{staticClass:"popup-lg",attrs:{title:"Brand Image",active:e.imagePopup},on:{"update:active":function(t){e.imagePopup=t}}},[a("form",{staticClass:"vs-con-loading__container",attrs:{id:"banner-image--container"}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full"},[e.image_preview?a("div",{staticClass:"image-preview-container mt-4"},[a("div",{staticClass:"text-right float-right mr-10"},[a("vs-button",{staticClass:"image-remove--button",attrs:{radius:"",size:"small",color:"danger",type:"filled","icon-pack":"feather",icon:"icon-x"},on:{click:e.clearImage}})],1),e._v(" "),a("img",{attrs:{src:e.image_preview,alt:""}})]):e._e(),e._v(" "),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"image|size:2048",expression:"'image|size:2048'"}],ref:"banner_image",staticClass:"hidden",attrs:{type:"file",name:"image",accept:"image/*"},on:{change:e.imageUploaded}}),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("image"),expression:"errors.has('image')"}],staticClass:"text-danger text-sm mb-3"},[e._v(e._s(e.errors.first("image")))]),e._v(" "),a("vs-button",{attrs:{color:"primary",type:"border",size:"small"},on:{click:function(t){return e.$refs.banner_image.click()}}},[e._v("Upload Image")])],1),e._v(" "),a("div",{staticClass:"vx-col w-full"},[a("vs-input",{staticClass:"w-full mt-4",attrs:{name:"link",label:"Banner Link"},model:{value:e.image.link,callback:function(t){e.$set(e.image,"link",t)},expression:"image.link"}}),e._v(" "),e.errors.has("link")?a("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("link")))]):e._e()],1)]),e._v(" "),a("div",{staticClass:"flex justify-between flex-row-reverse"},[a("vs-button",{staticClass:"mt-4 float-right",attrs:{type:"border"},on:{click:e.saveImage}},[e._v("Save")])],1)])])],1)}),[],!1,null,null,null);t.default=m.exports}}]);