(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{Wc94:function(e,r,t){"use strict";t("uU8r")},uU8r:function(e,r,t){var a=t("w+Ev");"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(a,n);a.locals&&(e.exports=a.locals)},"w+Ev":function(e,r,t){(e.exports=t("I1BE")(!1)).push([e.i,".emi--detail-table[data-v-4125a8fc]{width:100%;border-collapse:collapse}[dir] .emi--detail-table[data-v-4125a8fc],[dir] .emi--detail-table th[data-v-4125a8fc]{border:1px solid #f8f8f8}.emi--detail-table td[data-v-4125a8fc]{min-width:200px}[dir] .emi--detail-table td[data-v-4125a8fc]{padding:13px 20px;border:1px solid #f8f8f8}[dir] .reply--area[data-v-4125a8fc]{border:1px solid #ccc;padding:20px}",""])},yOeY:function(e,r,t){"use strict";t.r(r);var a=t("o0o1"),n=t.n(a);function o(e,r,t,a,n,o,i){try{var s=e[o](i),d=s.value}catch(e){return void t(e)}s.done?r(d):Promise.resolve(d).then(a,n)}function i(e){return function(){var r=this,t=arguments;return new Promise((function(a,n){var i=e.apply(r,t);function s(e){o(i,a,n,s,d,"next",e)}function d(e){o(i,a,n,s,d,"throw",e)}s(void 0)}))}}var s={data:function(){return{pre_order_id:"",order:{},order_loading:!0,order_detail_popup:!1}},mounted:function(){this.pre_order_id=this.$route.params.id,this.fetchOrderDetail()},methods:{fetchOrderDetail:function(){var e=this;return i(n.a.mark((function r(){var t;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.order_loading=!0,r.prev=1,r.next=4,e.$http.get("/api/admin/orders/".concat(e.pre_order_id,"/get-pre-order-detail"));case 4:(t=r.sent).data.success&&(e.order=t.data.data),r.next=13;break;case 8:if(r.prev=8,r.t0=r.catch(1),e.errorNotification("Something went wrong! Please retry!!"),404!==r.t0.response.status){r.next=13;break}return r.abrupt("return",e.$router.push({name:"page-error-404"}));case 13:return r.prev=13,e.order_loading=!1,r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[1,8,13,16]])})))()},updateOrderDetail:function(){var e=this;return i(n.a.mark((function r(){var t,a;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.$vs.loading({container:"#loading--container"}),r.prev=1,t={status:e.order.status,notify_user:e.order.notify_user,notify_via_email:e.order.notify_via_email,notify_via_sms:e.order.notify_via_sms},r.next=5,e.$http.post("/api/admin/orders/".concat(e.order_id,"/update-order-status"),t);case 5:(a=r.sent).data.success&&(e.successNotification(a.data.message),e.order_detail_popup=!1,e.fetchOrderDetail()),r.next=14;break;case 9:if(r.prev=9,r.t0=r.catch(1),e.errorNotification("Something went wrong! Please retry!!"),404!==r.t0.response.status){r.next=14;break}return r.abrupt("return",e.$router.push({name:"page-error-404"}));case 14:return r.prev=14,e.$vs.loading.close("#loading--container > .con-vs-loading"),r.finish(14);case 17:case"end":return r.stop()}}),r,null,[[1,9,14,17]])})))()}}},d=(t("Wc94"),t("KHd+")),c=Object(d.a)(s,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"vx-card p-4"},[e.order_loading?e._e():t("div",[t("table",{staticClass:"emi--detail-table"},[t("tr",[t("th",[e._v("Product")]),e._v(" "),t("td",[e._v("\n          "+e._s(e.order.product.name)+"\n        ")])]),e._v(" "),t("tr",[t("th",[e._v("Customer Name")]),e._v(" "),t("td",[e._v("\n          "+e._s(e.order.name)+"\n        ")])]),e._v(" "),t("tr",[t("th",[e._v("Contact Number")]),e._v(" "),t("td",[e._v("\n          "+e._s(e.order.phone)+"\n        ")])]),e._v(" "),t("tr",[t("th",[e._v("Email Address")]),e._v(" "),t("td",[e._v("\n          "+e._s(e.order.user.email)+"\n        ")])]),e._v(" "),t("tr",[t("th",[e._v("Message")]),e._v(" "),t("td",[e._v("\n          "+e._s(e.order.message)+"\n        ")])])])])])}),[],!1,null,"4125a8fc",null);r.default=c.exports}}]);