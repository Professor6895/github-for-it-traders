(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"4X8/":function(t,e,n){"use strict";n.r(e);var a=n("o0o1"),s=n.n(a);function r(t,e,n,a,s,r,o){try{var i=t[r](o),v=i.value}catch(t){return void n(t)}i.done?e(v):Promise.resolve(v).then(a,s)}var o={data:function(){return{loading:!0,vendors:[]}},mounted:function(){this.fetchVendors()},methods:{fetchVendors:function(){var t,e=this;return(t=s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.$http.get("/api/admin/vendors");case 4:n=t.sent,e.vendors=n.data.data,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.errorNotification("Something went wrong!! Please retry");case 11:return t.prev=11,e.loading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})),function(){var e=this,n=arguments;return new Promise((function(a,s){var o=t.apply(e,n);function i(t){r(o,a,s,i,v,"next",t)}function v(t){r(o,a,s,i,v,"throw",t)}i(void 0)}))})()},deleteVendor:function(t){this.errorNotification("Feature Not implemented YET!")}}},i=n("KHd+"),v=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("pageLoader"):n("vx-card",{staticClass:"card-padding-5"},[n("vs-table",{attrs:{search:"",stripe:"",data:t.vendors,"max-items":"40",pagination:""},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return t._l(a,(function(e,a){return n("vs-tr",{key:a,attrs:{data:e}},[n("vs-td",[n("i",[t._v("#"+t._s(e.id))])]),t._v(" "),n("vs-td",[t._v(t._s(e.full_name))]),t._v(" "),n("vs-td",[t._v("\n            "+t._s(e.email)+"\n          ")]),t._v(" "),n("vs-td",[t._v("\n            "+t._s(e.contact)+"\n          ")]),t._v(" "),n("vs-td",[t._v("\n            "+t._s(e.name)+"\n          ")]),t._v(" "),n("vs-td",[0===e.status?n("strong",{staticClass:"text-danger"},[t._v("Inactive")]):t._e(),t._v(" "),1===e.status?n("strong",{staticClass:"text-success"},[t._v("Active")]):t._e(),t._v(" "),2===e.status?n("strong",{staticClass:"text-warning"},[t._v("Requested")]):t._e()]),t._v(" "),n("vs-td",[n("router-link",{attrs:{to:{name:"admin-page-detail",params:{id:e.id}}}},[n("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"warning",type:"filled",size:"small",icon:"create"}})],1),t._v(" "),n("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",size:"small",color:"danger",type:"filled",icon:"delete"},on:{click:function(n){return t.deleteVendor(e.id)}}})],1)],1)}))}}])},[n("template",{slot:"header"},[n("strong",[t._v("Total :")]),t._v("\n         "+t._s(t.vendors.length)+"    \n        "),n("router-link",{attrs:{to:{name:"admin-vendor-detail"}}},[n("vs-button",{attrs:{color:"primary",size:"small",type:"border"}},[t._v("Add Vendor")])],1)],1),t._v(" "),n("template",{slot:"thead"},[n("vs-th",{attrs:{"sort-key":"email"}},[t._v("SN")]),t._v(" "),n("vs-th",[t._v("Full Name")]),t._v(" "),n("vs-th",[t._v("Email")]),t._v(" "),n("vs-th",[t._v("Contact")]),t._v(" "),n("vs-th",[t._v("Business Name")]),t._v(" "),n("vs-th",[t._v("Status")]),t._v(" "),n("vs-th",[t._v("Actions")])],1)],2)],1)],1)}),[],!1,null,null,null);e.default=v.exports}}]);