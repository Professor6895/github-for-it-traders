(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{AbxY:function(t,e,a){"use strict";a.r(e);var r=a("o0o1"),n=a.n(r),o=a("LuQd"),i=(a("2pMc"),a("L8Bc")),c=a("tedb"),s=a("gX/G"),u=a("BmqG"),d=a("iOMJ"),p=a("U87P");function l(t,e,a,r,n,o,i){try{var c=t[o](i),s=c.value}catch(t){return void a(t)}c.done?e(s):Promise.resolve(s).then(r,n)}function v(t){return function(){var e=this,a=arguments;return new Promise((function(r,n){var o=t.apply(e,a);function i(t){l(o,r,n,i,c,"next",t)}function c(t){l(o,r,n,i,c,"throw",t)}i(void 0)}))}}var h={data:function(){return{loading:!0,product_id:"",product:{meta:{},variants:[]},active_tab:0,web_host:"",random_id:Math.floor(1e4*Math.random())}},components:{ProductDetail:i.a,FormWizard:o.FormWizard,TabContent:o.TabContent,PriceAndStock:c.a,ProductImages:s.a,MetaFields:p.a,ProductAttributes:u.a,ProductVariants:d.a},mounted:function(){this.checkVendorStatus(),this.web_host=window.location.host,this.product_id=this.$route.params.id,this.getProductDetail()},methods:{checkVendorStatus:function(){var t,e=this,a=!0,r="",o="";this.$store.state.AppActiveUser.data_updated||(a=!1,r="Your KYC is not fully updated. Please update your KYC to get full access to features.",o="Please Update KYC!!"),this.$store.state.AppActiveUser.status||(a=!1,r="Your account has not been activated. Please contact your administrator.",o="Account Disabled!!"),a||this.$vs.dialog({color:"danger",title:o,text:r,"accept-text":"OK",accept:(t=v(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$router.push("/vendor/profile");case 1:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)})})},generateRandomID:function(){this.random_id=Math.floor(1e4*Math.random())},getProductDetail:function(){var t=this;return v(n.a.mark((function e(){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.product_id){e.next=3;break}return t.loading=!1,e.abrupt("return");case 3:return t.$vs.loading({container:"#loading--container"}),e.prev=4,e.next=7,t.$http.get("/api/vendor/products/".concat(t.product_id));case 7:(a=e.sent).data.success&&(t.product=a.data.data,t.generateRandomID()),e.next=16;break;case 11:if(e.prev=11,e.t0=e.catch(4),t.errorNotification("Something went wrong! Please retry!!"),404!==e.t0.response.status){e.next=16;break}return e.abrupt("return",t.$router.push({name:"page-error-404"}));case 16:return e.prev=16,t.$vs.loading.close("#loading--container > .con-vs-loading"),t.loading=!1,r=t,setTimeout((function(){r.$refs.productWizard.activateAll()}),2e3),e.finish(16);case 22:case"end":return e.stop()}}),e,null,[[4,11,16,22]])})))()},saveMetaFields:function(){var t=this;return v(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$vs.loading({container:"#loading--container"}),e.prev=1,a={meta:JSON.stringify(t.product.meta),_method:"PATCH"},e.next=5,t.$http.post("/api/vendor/products/".concat(t.product_id,"/update-meta"),a);case 5:e.sent.data.success&&(t.successNotification("Data saved successfully"),t.$router.push({name:"ecommerce-vendor-products"})),e.next=14;break;case 9:if(e.prev=9,e.t0=e.catch(1),t.errorNotification("Something went wrong! Please retry!!"),404!==e.t0.response.status){e.next=14;break}return e.abrupt("return",t.$router.push({name:"page-error-404"}));case 14:return e.prev=14,t.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,9,14,17]])})))()},changeTab:function(t){"next"==t?this.$refs.productWizard.nextTab():this.$refs.productWizard.prevTab()},updateProductDetail:function(t){this.product=t,this.product_id=t.id}},watch:{}},f=(a("s9XZ"),a("KHd+")),m=Object(f.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[t.loading?a("pageLoader"):a("form-wizard",{ref:"productWizard",attrs:{color:"rgba(var(--vs-primary), 1)",errorColor:"rgba(var(--vs-danger), 1)",title:"Add Product Details",subtitle:null,"hide-buttons":!0,finishButtonText:"Submit",stepSize:"sm"}},[a("tab-content",{staticClass:"mb-5",attrs:{title:"Product Info",icon:"feather icon-shopping-bag"}},[a("ProductDetail",{attrs:{isadmin:!1,"product-detail":t.product},on:{updateProduct:t.updateProductDetail,nextTabPlease:function(e){return t.changeTab("next")}}})],1),t._v(" "),a("tab-content",{staticClass:"mb-5",attrs:{title:"Pricing & Stock",icon:"feather icon-dollar-sign"}},[a("PriceAndStock",{attrs:{"product-detail":t.product},on:{nextTabPlease:function(e){return t.changeTab("next")},prevTabPlease:function(e){return t.changeTab("prev")}}})],1),t._v(" "),a("tab-content",{staticClass:"mb-5",attrs:{title:"Attributes",icon:"feather icon-list"}},[t.product.id?a("ProductAttributes",{attrs:{isadmin:!1,"product-id":t.product.id,"product-attributes":t.product.attributes},on:{refreshProduct:t.getProductDetail,nextTabPlease:function(e){return t.changeTab("next")},prevTabPlease:function(e){return t.changeTab("prev")}}}):t._e()],1),t._v(" "),a("tab-content",{staticClass:"mb-5",attrs:{title:"Variants",icon:"feather icon-align-center"}},[t.product.id?a("ProductVariants",{key:"p-variant-"+t.random_id,attrs:{isadmin:!1,"product-detail":t.product},on:{nextTabPlease:function(e){return t.changeTab("next")},prevTabPlease:function(e){return t.changeTab("prev")},refreshProduct:t.getProductDetail}}):t._e()],1),t._v(" "),a("tab-content",{staticClass:"mb-5",attrs:{title:"Images",icon:"feather icon-image"}},[t.product.id?a("ProductImages",{key:"product-image-"+t.product.variants.length,attrs:{isadmin:!1,"product-id":t.product.id,variants:t.product.variants},on:{nextTabPlease:function(e){return t.changeTab("next")},prevTabPlease:function(e){return t.changeTab("prev")}}}):t._e()],1),t._v(" "),a("tab-content",{staticClass:"mb-5",attrs:{title:"SEO",icon:"feather icon-globe"}},[a("vx-card",[a("MetaFields",{staticClass:"mb-4",model:{value:t.product.meta,callback:function(e){t.$set(t.product,"meta",e)},expression:"product.meta"}}),t._v(" "),a("div",{staticClass:"mt-4 vx-row",staticStyle:{"margin-top":"50px !important"}},[a("div",{staticClass:"vx-col w-full md:w-1/2"},[a("h4",[t._v("Search Engine Listing Preview")]),t._v(" "),a("div",{staticClass:"search-engine-preview"},[a("p",{staticStyle:{color:"black"}},[t._v("\n                https://wwww."+t._s(t.web_host)+"/product-detail/"+t._s(t.product.slug)+"\n              ")]),t._v(" "),a("h2",{staticClass:"mt-2 mb-2",staticStyle:{color:"#1a0dab"}},[t._v("\n                "+t._s(t.product.meta.meta_title?t.product.meta.meta_title:t.product.name)+"\n              ")]),t._v(" "),a("p",[t._v("\n                "+t._s(t.product.meta.meta_description?t.product.meta.meta_description:t.product.short_description)+"\n              ")])])])])],1),t._v(" "),a("div",{staticClass:"vx-col w-full mt-4"},[a("vs-button",{attrs:{type:"relief",color:"primary"},on:{click:function(e){return t.changeTab("prev")}}},[t._v("Prev")]),t._v(" "),a("vs-button",{attrs:{type:"relief",color:"primary"},on:{click:t.saveMetaFields}},[t._v("Save")])],1)],1)],1)],1)}),[],!1,null,"2420c6f4",null);e.default=m.exports},hekH:function(t,e,a){var r=a("iyDv");"string"==typeof r&&(r=[[t.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,n);r.locals&&(t.exports=r.locals)},iyDv:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".search-engine-preview[data-v-2420c6f4]{font-family:Arial,Helvetica,sans-serif}[dir] .search-engine-preview[data-v-2420c6f4]{margin-top:20px}",""])},s9XZ:function(t,e,a){"use strict";a("hekH")}}]);