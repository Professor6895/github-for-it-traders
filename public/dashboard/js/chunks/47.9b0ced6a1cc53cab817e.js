(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{SCBn:function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),n=a.n(s);function r(t,e,a,s,n,r,i){try{var o=t[r](i),c=o.value}catch(t){return void a(t)}o.done?e(c):Promise.resolve(c).then(s,n)}var i={data:function(){return{loading:!0,emi_requests:{data:[],per_page:0,total:0,last_page:0},table_options:{current_page:1},search_keyword:""}},mounted:function(){this.fetchEmiRequests()},methods:{fetchEmiRequests:function(){var t,e=this;return(t=n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading||e.$vs.loading({container:"#loading--container"}),t.prev=1,t.next=4,e.$http.get("/api/admin/emi-requests",{params:{page:e.table_options.current_page,search:e.search_keyword}});case 4:a=t.sent,e.emi_requests=a.data.data,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.errorNotification("Something went wrong!! Please retry");case 11:return t.prev=11,e.$vs.loading.close("#loading--container > .con-vs-loading"),e.loading=!1,t.finish(11);case 15:case"end":return t.stop()}}),t,null,[[1,8,11,15]])})),function(){var e=this,a=arguments;return new Promise((function(s,n){var i=t.apply(e,a);function o(t){r(i,s,n,o,c,"next",t)}function c(t){r(i,s,n,o,c,"throw",t)}o(void 0)}))})()}}},o=a("KHd+"),c=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading?a("pageLoader"):a("vx-card",{staticClass:"card-padding-5 vs-con-loading__container",attrs:{id:"loading--container"}},[a("vs-table",{attrs:{stripe:"",data:t.emi_requests.data,"max-items":t.emi_requests.per_page,total:t.emi_requests.total,sst:!0},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return t._l(s,(function(e,s){return a("vs-tr",{key:s,staticClass:"p-4",attrs:{data:e}},[a("vs-td",[a("i",[t._v("\n              "+t._s(e.id)+"\n            ")])]),t._v(" "),a("vs-td",[t._v("\n            "+t._s(e.name)+"\n          ")]),t._v(" "),a("vs-td",[t._v("\n            "+t._s(e.email)+"\n          ")]),t._v(" "),a("vs-td",[t._v("\n            "+t._s(e.product.name)+"\n            "),e.product_attributes?a("span",[t._l(e.product_attributes,(function(e,s){return a("p",[a("strong",[t._v(t._s(s)+": ")]),t._v(t._s(e)+"\n              ")])})),t._v(" "),a("br")],2):t._e()]),t._v(" "),a("vs-td",[t._v("\n            "+t._s(t._f("date_format")(e.created_at,"MMMM Do YYYY, h:mm a"))+"\n          ")]),t._v(" "),a("vs-td",[a("strong",[1==e.status?a("span",{staticClass:"text-warning"},[t._v("Processing")]):t._e(),t._v(" "),0==e.status?a("span",{staticClass:"text-danger"},[t._v("Pending")]):t._e(),t._v(" "),2==e.status?a("span",{staticClass:"text-success"},[t._v("Completed")]):t._e()])]),t._v(" "),a("vs-td",[a("router-link",{attrs:{to:{name:"ecommerce-admin-emi-request-detail",params:{id:e.id}}}},[a("vs-button",{attrs:{size:"small"}},[t._v("View Detail")])],1)],1)],1)}))}}])},[a("template",{slot:"header"},[a("strong",[t._v("Total :")]),t._v("\n         "+t._s(t.emi_requests.total)+"\n\n        "),a("div",{staticClass:"con-input-search vs-table--search"},[a("vs-input",{staticClass:"inline-block",model:{value:t.search_keyword,callback:function(e){t.search_keyword=e},expression:"search_keyword"}}),t._v(" "),a("vs-button",{attrs:{type:"filled",icon:"search"},on:{click:function(e){t.table_options.current_page=1,t.fetchEmiRequests()}}})],1)]),t._v(" "),a("template",{slot:"thead"},[a("vs-th",[t._v("ID")]),t._v(" "),a("vs-th",[t._v("Customer")]),t._v(" "),a("vs-th",[t._v("Email Address")]),t._v(" "),a("vs-th",[t._v("Product")]),t._v(" "),a("vs-th",[t._v("Application Date")]),t._v(" "),a("vs-th",[t._v("Status")]),t._v(" "),a("vs-th",[t._v("Actions")])],1)],2),t._v(" "),a("vs-pagination",{staticClass:"mt-6",attrs:{total:t.emi_requests.last_page},model:{value:t.table_options.current_page,callback:function(e){t.$set(t.table_options,"current_page",e)},expression:"table_options.current_page"}})],1)],1)}),[],!1,null,null,null);e.default=c.exports}}]);