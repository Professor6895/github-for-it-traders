(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"5Dge":function(t,e){t.exports="/images/default-avatar.png?27b9408da668f335b85e9fe669908cab"},"v+9Y":function(t,e,a){"use strict";a.r(e);var n=a("o0o1"),s=a.n(n);function r(t,e,a,n,s,r,o){try{var i=t[r](o),c=i.value}catch(t){return void a(t)}i.done?e(c):Promise.resolve(c).then(n,s)}function o(t){return function(){var e=this,a=arguments;return new Promise((function(n,s){var o=t.apply(e,a);function i(t){r(o,n,s,i,c,"next",t)}function c(t){r(o,n,s,i,c,"throw",t)}i(void 0)}))}}var i={data:function(){return{reviews:{data:[],per_page:0,total:0,last_page:0},table_options:{current_page:1},loading:!0}},mounted:function(){this.fetchReviews()},methods:{fetchReviews:function(){var t=this;return o(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading||t.$vs.loading({container:"#loading--container"}),e.prev=1,e.next=4,t.$http.get("/api/admin/product-reviews?page=".concat(t.table_options.current_page));case 4:a=e.sent,t.reviews=a.data.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.errorNotification("Something went wrong!! Please retry");case 11:return e.prev=11,t.loading||t.$vs.loading.close("#loading--container > .con-vs-loading"),t.loading=!1,e.finish(11);case 15:case"end":return e.stop()}}),e,null,[[1,8,11,15]])})))()},toggleStatus:function(t){var e,a=this;this.$vs.dialog({type:"confirm",color:"primary",title:"Confirm",text:"Are you sure you want to change status?",accept:(e=o(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.$http.post("/api/admin/product-reviews/".concat(t,"/toggle-status"),{_method:"PATCH"});case 2:(n=e.sent).data.success?(a.successNotification(n.data.message),a.fetchReviews()):a.errorNotification(n.data.message);case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})})},handlePagination:function(t){this.table_options.current_page=t}},watch:{"table_options.current_page":function(){this.fetchReviews()}}},c=a("KHd+"),v=Object(c.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("pageLoader"):n("vx-card",{staticClass:"card-padding-5 vs-con-loading__container",attrs:{id:"loading--container"}},[n("vs-table",{attrs:{stripe:"",data:t.reviews.data,"max-items":t.reviews.per_page,total:t.reviews.total,sst:!0},on:{"change-page":t.handlePagination},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return t._l(s,(function(e,s){return n("vs-tr",{key:s,attrs:{data:e}},[n("vs-td",[n("vs-chip",[n("vs-avatar",{attrs:{color:"transparent",size:"50px",src:e.user.avatar?e.user.avatar:a("5Dge")}}),t._v("\n              "+t._s(e.user.name)+"\n            ")],1)],1),t._v(" "),n("vs-td",[t._v(t._s(e.product.name))]),t._v(" "),n("vs-td",{staticStyle:{"max-width":"400px"}},[t._v(t._s(e.review))]),t._v(" "),n("vs-td",t._l(5,(function(t){return n("svg",{key:"star"+t,staticClass:"mx-1 w-4 h-4 fill-current",class:{"text-warning":t<=e.rating},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"}})])})),0),t._v(" "),n("vs-td",[n("small",[t._v(t._s(t._f("date_format")(e.created_at,"MMMM Do YYYY, h:mm a")))])]),t._v(" "),n("vs-td",[n("vs-td",[n("vs-icon",{staticClass:"icon-large",class:"1"===e.status||1==e.status?"text-success":"text-danger",attrs:{icon:"1"===e.status||1==e.status?"toggle_on":"toggle_off"},on:{click:function(a){return t.toggleStatus(e.id)}}})],1)],1)],1)}))}}])},[n("template",{slot:"thead"},[n("vs-th",[t._v("Reviewer")]),t._v(" "),n("vs-th",[t._v("Product")]),t._v(" "),n("vs-th",[t._v("Review Text")]),t._v(" "),n("vs-th",[t._v("Rating")]),t._v(" "),n("vs-th",[t._v("Date")]),t._v(" "),n("vs-th",[t._v("Status")])],1)],2),t._v(" "),n("vs-pagination",{staticClass:"mt-4",attrs:{total:t.reviews.last_page},model:{value:t.table_options.current_page,callback:function(e){t.$set(t.table_options,"current_page",e)},expression:"table_options.current_page"}})],1)],1)}),[],!1,null,null,null);e.default=v.exports}}]);