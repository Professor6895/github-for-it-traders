(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"5Dge":function(t,e){t.exports="/images/default-avatar.png?27b9408da668f335b85e9fe669908cab"},FaLL:function(t,e,a){"use strict";a.r(e);var r=a("o0o1"),s=a.n(r);function n(t,e,a,r,s,n,o){try{var i=t[n](o),c=i.value}catch(t){return void a(t)}i.done?e(c):Promise.resolve(c).then(r,s)}var o={data:function(){return{loading:!0,orders:{data:[],per_page:0,total:0,last_page:0},table_options:{current_page:1},search_keyword:""}},mounted:function(){this.fetchPreOrders()},methods:{fetchPreOrders:function(){var t,e=this;return(t=s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading||e.$vs.loading({container:"#loading--container"}),t.prev=1,t.next=4,e.$http.get("/api/admin/orders/get-pre-orders",{params:{page:e.table_options.current_page,search:e.search_keyword}});case 4:a=t.sent,e.orders=a.data.data,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.errorNotification("Something went wrong!! Please retry");case 11:return t.prev=11,e.$vs.loading.close("#loading--container > .con-vs-loading"),e.loading=!1,t.finish(11);case 15:case"end":return t.stop()}}),t,null,[[1,8,11,15]])})),function(){var e=this,a=arguments;return new Promise((function(r,s){var o=t.apply(e,a);function i(t){n(o,r,s,i,c,"next",t)}function c(t){n(o,r,s,i,c,"throw",t)}i(void 0)}))})()},getOrderStatus:function(t){switch(t){case 0:return"Pending";case 1:return"Confirmed";case 2:return"Rejected";default:return""}},getOrderStatusColor:function(t){switch(t){case 0:return"text-warning";case 1:return"text-success";case 2:return"text-danger";default:return""}}},watch:{"table_options.current_page":function(){this.fetchPreOrders()}}},i=(a("qHp3"),a("KHd+")),c=Object(i.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.loading?r("pageLoader"):r("div",{staticClass:"vx-row"},[r("div",{staticClass:"vx-col w-full"}),t._v(" "),r("div",{staticClass:"vx-col w-full mt-2"},[r("vx-card",{staticClass:"card-padding-5 vs-con-loading__container",attrs:{id:"loading--container"}},[r("vs-table",{staticClass:"mt-4",attrs:{data:t.orders.data,stripe:"","max-items":t.orders.per_page,total:t.orders.total,sst:!0},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return[r("tbody",t._l(s,(function(e,s){return r("vs-tr",{key:s,attrs:{data:e}},[r("vs-td",[r("vs-chip",[r("vs-avatar",{attrs:{color:"transparent",size:"50px",src:e.user.avatar?e.user.avatar_image.thumb:a("5Dge")}}),t._v("\n                    "+t._s(e.user.name)+"\n                  ")],1)],1),t._v(" "),r("vs-td",[t._v("\n                  "+t._s(e.product.name)+"\n                ")]),t._v(" "),r("vs-td",[t._v("\n                  "+t._s(e.phone)+"\n                ")]),t._v(" "),r("vs-td",[t._v("\n                  "+t._s(e.email)+"\n                ")]),t._v(" "),r("vs-td",[r("span",{class:t.getOrderStatusColor(e.status)},[t._v(t._s(t.getOrderStatus(e.status)))])]),t._v(" "),r("vs-td",[t._v("\n                  "+t._s(t._f("date_format")(e.created_at,"timeago"))+"\n                ")]),t._v(" "),r("vs-td",[r("router-link",{attrs:{to:{name:"ecommerce-admin-pre-order-detail",params:{id:e.id}}}},[r("vs-button",{attrs:{size:"small"}},[t._v("View Detail")])],1)],1)],1)})),1)]}}])},[r("template",{slot:"thead"},[r("vs-th",{attrs:{"sort-key":"title"}},[t._v("Customer Name")]),t._v(" "),r("vs-th",[t._v("Product")]),t._v(" "),r("vs-th",[t._v("Contact Number")]),t._v(" "),r("vs-th",[t._v("Email")]),t._v(" "),r("vs-th",[t._v("Status")]),t._v(" "),r("vs-th",[t._v("Pre Order Date")])],1)],2),t._v(" "),r("vs-pagination",{staticClass:"mt-6",attrs:{total:t.orders.last_page},model:{value:t.table_options.current_page,callback:function(e){t.$set(t.table_options,"current_page",e)},expression:"table_options.current_page"}})],1)],1)])],1)}),[],!1,null,"c9f19842",null);e.default=c.exports},VDou:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".each--order[data-v-c9f19842]{display:inline-block;width:100%}[dir] .each--order[data-v-c9f19842]{border:1px solid #e5e5e5;border-radius:10px;margin:4px 0}",""])},YGUW:function(t,e,a){var r=a("VDou");"string"==typeof r&&(r=[[t.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,s);r.locals&&(t.exports=r.locals)},qHp3:function(t,e,a){"use strict";a("YGUW")}}]);