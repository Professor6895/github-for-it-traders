(window.webpackJsonp=window.webpackJsonp||[]).push([[8,30],{"3EOT":function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,".each--order[data-v-1318d17f]{display:inline-block;width:100%}[dir] .each--order[data-v-1318d17f]{border:1px solid #e5e5e5;border-radius:10px;margin:4px 0}",""])},"4EgE":function(t,e,r){"use strict";r("x71V")},"5Dge":function(t,e){t.exports="/images/default-avatar.png?27b9408da668f335b85e9fe669908cab"},LwD4:function(t,e,r){"use strict";r.r(e);var s=r("o0o1"),a=r.n(s);function n(t,e,r,s,a,n,i){try{var o=t[n](i),d=o.value}catch(t){return void r(t)}o.done?e(d):Promise.resolve(d).then(s,a)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(s,a){var i=t.apply(e,r);function o(t){n(i,s,a,o,d,"next",t)}function d(t){n(i,s,a,o,d,"throw",t)}o(void 0)}))}}var o={data:function(){return{order_id:"",order:{},order_loading:!0,order_detail_popup:!1}},mounted:function(){this.order_id=this.$route.params.id,this.fetchOrderDetail()},methods:{fetchOrderDetail:function(){var t=this;return i(a.a.mark((function e(){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.order_loading=!0,e.prev=1,e.next=4,t.$http.get("/api/admin/orders/".concat(t.order_id,"/get-order-detail"));case 4:(r=e.sent).data.success&&(t.order=r.data.data),e.next=13;break;case 8:if(e.prev=8,e.t0=e.catch(1),t.errorNotification("Something went wrong! Please retry!!"),404!==e.t0.response.status){e.next=13;break}return e.abrupt("return",t.$router.push({name:"page-error-404"}));case 13:return e.prev=13,t.order_loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,8,13,16]])})))()},updateOrderDetail:function(){var t=this;return i(a.a.mark((function e(){var r,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$vs.loading({container:"#loading--container"}),e.prev=1,r={status:t.order.status,notify_user:t.order.notify_user,notify_via_email:t.order.notify_via_email,notify_via_sms:t.order.notify_via_sms},e.next=5,t.$http.post("/api/admin/orders/".concat(t.order_id,"/update-order-status"),r);case 5:(s=e.sent).data.success&&(t.successNotification(s.data.message),t.order_detail_popup=!1,t.fetchOrderDetail()),e.next=14;break;case 9:if(e.prev=9,e.t0=e.catch(1),t.errorNotification("Something went wrong! Please retry!!"),404!==e.t0.response.status){e.next=14;break}return e.abrupt("return",t.$router.push({name:"page-error-404"}));case 14:return e.prev=14,t.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,9,14,17]])})))()},getOrderStatusColor:function(){switch(this.order.status){case 1:return"text-warning";case 2:return"text-success";case 3:return"text-priamry";case 4:return"text-success";case 5:return"text-danger";default:return""}}}},d=(r("tuF7"),r("KHd+")),c=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vx-card p-4"},[t.order_loading?t._e():r("div",[r("vs-popup",{attrs:{title:"Order Detail",active:t.order_detail_popup},on:{"update:active":function(e){t.order_detail_popup=e}}},[r("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[r("div",{staticClass:"vx-row"},[r("div",{staticClass:"vx-col w-full mb-4"},[r("vs-select",{staticClass:"w-full",attrs:{label:"Order Status"},model:{value:t.order.status,callback:function(e){t.$set(t.order,"status",e)},expression:"order.status"}},t._l([{text:"Placed",value:1},{text:"Confirmed",value:2},{text:"Dispatched",value:3},{text:"Completed",value:4},{text:"Canceled",value:5}],(function(t,e){return r("vs-select-item",{key:"order"+e,attrs:{value:t.value,text:t.text}})})),1),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("parent_id"),expression:"errors.has('parent_id')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("parent_id")))])],1),t._v(" "),1!==t.order.status?r("div",{staticClass:"vx-col w-full mb-4"},[r("vs-checkbox",{model:{value:t.order.notify_user,callback:function(e){t.$set(t.order,"notify_user",e)},expression:"order.notify_user"}},[t._v("Notify User")]),t._v(" "),t.order.notify_user?r("vs-checkbox",{staticClass:"mt-2",model:{value:t.order.notify_via_email,callback:function(e){t.$set(t.order,"notify_via_email",e)},expression:"order.notify_via_email"}},[t._v("Via Email")]):t._e(),t._v(" "),t.order.notify_user?r("vs-checkbox",{staticClass:"mt-2",model:{value:t.order.notify_via_sms,callback:function(e){t.$set(t.order,"notify_via_sms",e)},expression:"order.notify_via_sms"}},[t._v("Via SMS")]):t._e()],1):t._e(),t._v(" "),r("div",{staticClass:"vx-col w-full"},[r("vs-button",{staticClass:"mr-3 mt-5",attrs:{size:"small"},on:{click:t.updateOrderDetail}},[t._v("Submit")])],1)])])]),t._v(" "),r("div",[r("div",{staticClass:"vx-row mb-4"},[r("div",{staticClass:"vx-col w-1/2"},[r("p",[r("strong",[t._v("Order Status")]),t._v(" :\n\n            "),r("span",{class:t.getOrderStatusColor()},[t._v(t._s(this.order.order_status))])]),t._v(" "),r("p",{staticClass:"mt-2"},[r("strong",[t._v("Invoice Number")]),t._v(" :\n            "),r("i",[t._v("#"+t._s(t.order.invoice_number))])])]),t._v(" "),r("div",{staticClass:"vx-col w-1/2"},[r("vs-button",{staticClass:"float-right",attrs:{color:"warning",size:"small",icon:"create"},on:{click:function(e){t.order_detail_popup=!0}}},[t._v("Edit Order")])],1)])]),t._v(" "),r("div",{staticClass:"vx-row mt-4"},[r("div",{staticClass:"vx-col md:w-1/3"},[r("div",{staticClass:"order-detail--wrapper p-3"},[r("h6",{staticClass:"mb-3"},[t._v("Order Details")]),t._v(" "),r("p",[r("strong",[t._v("Order Date")]),t._v(" :\n            "+t._s(t._f("date_format")(t.order.created_at,"MMMM Do YYYY, h:mm a"))+"\n          ")]),t._v(" "),r("p",{staticClass:"mt-2"},[r("strong",[t._v("Payment Method")]),t._v(" : "+t._s(t.order.payment_type)+"\n          ")])])]),t._v(" "),r("div",{staticClass:"vx-col md:w-1/3"},[r("div",{staticClass:"order-detail--wrapper p-3"},[r("h6",{staticClass:"mb-3"},[t._v("Customer Details")]),t._v(" "),r("p",[r("strong",[t._v("Full Name : ")]),t._v(" "+t._s(t.order.user.name))]),t._v(" "),r("p",[r("strong",[t._v("Email : ")]),t._v(" "+t._s(t.order.user.email))]),t._v(" "),r("p",[r("strong",[t._v("Contact : ")]),t._v(" "+t._s(t.order.user.contact_number))])])]),t._v(" "),r("div",{staticClass:"vx-col md:w-1/3"},[r("div",{staticClass:"order-detail--wrapper p-3"},[r("h6",{staticClass:"mb-3"},[t._v("Shipping Address")]),t._v(" "),r("p",[r("strong",[t._v("Full Name : ")]),t._v("\n            "+t._s(t.order.shipping_address.full_name)+"\n          ")]),t._v(" "),r("p",[r("strong",[t._v("Contact : ")]),t._v("\n            "+t._s(t.order.shipping_address.contact_number)+"\n          ")]),t._v(" "),r("p",[t._v("\n            "+t._s(t.order.shipping_address.province_detail.name)+",\n            "+t._s(t.order.shipping_address.district+" "+t.order.shipping_address.country)+"\n          ")]),t._v(" "),r("p",[r("strong",[t._v("City : ")]),t._v("\n            "+t._s(t.order.shipping_address.city)+" ("+t._s(t.order.shipping_address.landmark)+")\n          ")])])])]),t._v(" "),r("div",{staticClass:"vx-row mt-4"},[r("div",{staticClass:"vx-col w-full"},[r("vs-table",{attrs:{stripe:"",data:t.order.items,"max-items":"40"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return t._l(s,(function(e,s){return r("vs-tr",{key:s,attrs:{data:e}},[r("vs-td",[r("img",{staticClass:"d-inline-block",attrs:{src:e.product.product_image.thumb,width:"40"}})]),t._v(" "),r("vs-td",[r("span",{staticClass:"d-inline-block"},[t._v(t._s(e.product.name))])]),t._v(" "),r("vs-td",[Object.keys(e.product_attributes).length?r("div",t._l(e.product_attributes,(function(e,s){return r("p",[r("strong",[t._v(t._s(s)+" : ")]),t._v(" "+t._s(e)+"\n                  ")])})),0):r("div",[t._v("---")])]),t._v(" "),r("vs-td",[t._v(" Rs. "+t._s(e.product_price)+" ")]),t._v(" "),r("vs-td",[t._v("\n                "+t._s(e.quantity)+"\n              ")]),t._v(" "),r("vs-td",[t._v(" Rs. "+t._s(e.product_price*e.quantity)+" ")])],1)}))}}],null,!1,739458615)},[r("template",{slot:"thead"},[r("vs-th",[t._v("Image")]),t._v(" "),r("vs-th",[t._v("Product")]),t._v(" "),r("vs-th",[t._v("Attribute")]),t._v(" "),r("vs-th",[t._v("Unit Price")]),t._v(" "),r("vs-th",[t._v("Qty")]),t._v(" "),r("vs-th",[t._v("Total")])],1)],2)],1)]),t._v(" "),r("div",{staticClass:"vx-row mt-3"},[r("div",{staticClass:"vx-col w-full md:w-2/3 text-right"}),t._v(" "),r("div",{staticClass:"vx-col w-full md:w-1/3"},[r("table",{staticClass:"order-price-table"},[r("tr",[r("th",[t._v("Order Total")]),t._v(" "),r("td",[t._v("Rs. "+t._s(t.order.order_total))])]),t._v(" "),r("tr",[r("th",[t._v("Shipping Cost")]),t._v(" "),r("td",[t._v("Rs. "+t._s(t.order.shipping_cost))])]),t._v(" "),r("tr",[r("th",[t._v("Grand Total")]),t._v(" "),r("td",[t._v("Rs. "+t._s(t.order.total))])])])])])],1)])}),[],!1,null,"4cdbf09a",null);e.default=c.exports},Lzn6:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,"[dir] .order-detail--wrapper[data-v-4cdbf09a]{border:1px solid #e5e5e5;border-radius:15px}.order-price-table[data-v-4cdbf09a]{font-size:20px}",""])},WXph:function(t,e,r){var s=r("Lzn6");"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(s,a);s.locals&&(t.exports=s.locals)},cIXt:function(t,e,r){"use strict";r.r(e);var s=r("o0o1"),a=r.n(s);function n(t,e,r,s,a,n,i){try{var o=t[n](i),d=o.value}catch(t){return void r(t)}o.done?e(d):Promise.resolve(d).then(s,a)}var i={data:function(){return{loading:!0,orders:{data:[],per_page:0,total:0,last_page:0},table_options:{current_page:1},search_keyword:""}},components:{OrderDetail:r("LwD4").default},mounted:function(){this.fetchOrders()},methods:{fetchOrders:function(){var t,e=this;return(t=a.a.mark((function t(){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading||e.$vs.loading({container:"#loading--container"}),t.prev=1,t.next=4,e.$http.get("/api/admin/orders/get-orders",{params:{page:e.table_options.current_page,search:e.search_keyword}});case 4:r=t.sent,e.orders=r.data.data,e.selectedOrder=r.data.data.data[0],t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e.errorNotification("Something went wrong!! Please retry");case 12:return t.prev=12,e.$vs.loading.close("#loading--container > .con-vs-loading"),e.loading=!1,t.finish(12);case 16:case"end":return t.stop()}}),t,null,[[1,9,12,16]])})),function(){var e=this,r=arguments;return new Promise((function(s,a){var i=t.apply(e,r);function o(t){n(i,s,a,o,d,"next",t)}function d(t){n(i,s,a,o,d,"throw",t)}o(void 0)}))})()},getOrderStatus:function(t){switch(t){case 1:return"Pending";case 2:return"Confirmed";case 3:return"Dispatched";case 4:return"Completed";case 5:return"Cancelled";default:return""}},getOrderStatusColor:function(t){switch(t){case 1:return"text-warning";case 2:return"text-success";case 3:return"text-priamry";case 4:return"text-success";case 5:return"text-danger";default:return""}}},watch:{"table_options.current_page":function(){this.fetchOrders()}}},o=(r("4EgE"),r("KHd+")),d=Object(o.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.loading?s("pageLoader"):s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full"},[s("div",{staticClass:"con-input-search vs-table--search"},[s("vs-input",{staticClass:"inline-block",model:{value:t.search_keyword,callback:function(e){t.search_keyword=e},expression:"search_keyword"}}),t._v(" "),s("vs-button",{attrs:{type:"filled",icon:"search"},on:{click:function(e){t.table_options.current_page=1,t.fetchOrders()}}})],1)]),t._v(" "),s("div",{staticClass:"vx-col w-full mt-2"},[s("vx-card",{staticClass:"card-padding-5 vs-con-loading__container",attrs:{id:"loading--container"}},[s("vs-table",{staticClass:"mt-4",attrs:{data:t.orders.data,stripe:"","max-items":t.orders.per_page,total:t.orders.total,sst:!0},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return[s("tbody",t._l(a,(function(e,a){return s("vs-tr",{key:a,attrs:{data:e}},[s("vs-td",[s("i",[t._v("#"+t._s(e.invoice_number))])]),t._v(" "),s("vs-td",[s("vs-chip",[s("vs-avatar",{attrs:{color:"transparent",size:"50px",src:e.user.avatar?e.user.avatar_image.thumb:r("5Dge")}}),t._v("\n                    "+t._s(e.user.name)+"\n                  ")],1)],1),t._v(" "),s("vs-td",[t._v("\n                  "+t._s(t._f("title")(e.payment_type))+"\n                ")]),t._v(" "),s("vs-td",[t._v(" Rs. "+t._s(e.total)+" ")]),t._v(" "),s("vs-td",[s("span",{class:t.getOrderStatusColor(e.status)},[t._v(t._s(t.getOrderStatus(e.status)))])]),t._v(" "),s("vs-td",[t._v("\n                  "+t._s(t._f("date_format")(e.created_at,"timeago"))+"\n                ")]),t._v(" "),s("vs-td",[s("router-link",{attrs:{to:{name:"ecommerce-admin-order-detail",params:{id:e.id}}}},[s("vs-button",{attrs:{size:"small"}},[t._v("View Detail")])],1)],1)],1)})),1)]}}])},[s("template",{slot:"thead"},[s("vs-th",[t._v("Invoice Number")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"title"}},[t._v("Customer Name")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"title"}},[t._v("Payment Type")]),t._v(" "),s("vs-th",[t._v("Order Price")]),t._v(" "),s("vs-th",[t._v("Status")]),t._v(" "),s("vs-th",[t._v("Order Date")]),t._v(" "),s("vs-th",[t._v("Actions")])],1)],2),t._v(" "),s("vs-pagination",{staticClass:"mt-6",attrs:{total:t.orders.last_page},model:{value:t.table_options.current_page,callback:function(e){t.$set(t.table_options,"current_page",e)},expression:"table_options.current_page"}})],1)],1)])],1)}),[],!1,null,"1318d17f",null);e.default=d.exports},tuF7:function(t,e,r){"use strict";r("WXph")},x71V:function(t,e,r){var s=r("3EOT");"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(s,a);s.locals&&(t.exports=s.locals)}}]);