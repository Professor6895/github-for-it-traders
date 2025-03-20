(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{q8nS:function(t,a,e){"use strict";e.r(a);var n=e("o0o1"),i=e.n(n),s=e("w48C"),r=e.n(s),c=(e("CVKz"),e("uBql")),o=e("LvDl"),l=e.n(o);function d(t,a,e,n,i,s,r){try{var c=t[s](r),o=c.value}catch(t){return void e(t)}c.done?a(o):Promise.resolve(o).then(n,i)}function v(t){return function(){var a=this,e=arguments;return new Promise((function(n,i){var s=t.apply(a,e);function r(t){d(s,n,i,r,c,"next",t)}function c(t){d(s,n,i,r,c,"throw",t)}r(void 0)}))}}var p={data:function(){return{loading:!0,campaigns:[],campaign_popup:!1,campaign:{}}},components:{flatPickr:r.a},mounted:function(){this.fetchDiscountCampaigns()},methods:{fetchDiscountCampaigns:function(){var t=this;return v(i.a.mark((function a(){var e;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.loading=!0,a.prev=1,a.next=4,t.$http.get("/api/admin/discount-campaigns");case 4:e=a.sent,t.campaigns=e.data.data,a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),t.errorNotification("Something went wrong!! Please retry");case 11:return a.prev=11,t.loading=!1,a.finish(11);case 14:case"end":return a.stop()}}),a,null,[[1,8,11,14]])})))()},saveCampaign:function(){var t=this;return v(i.a.mark((function a(){var e,n,s;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$validator.validateAll();case 2:if(a.sent){a.next=5;break}return a.abrupt("return");case 5:return a.prev=5,t.$vs.loading({container:"#loading--container"}),e={title:t.campaign.title,start_date:t.campaign.start_date,end_date:t.campaign.end_date},n="/api/admin/discount-campaigns",t.campaign.id&&(n="/api/admin/discount-campaigns/".concat(t.campaign.id),e._method="PATCH"),a.next=12,t.$http.post(n,e);case 12:(s=a.sent).data.success?(t.successNotification(s.data.message),t.fetchDiscountCampaigns()):t.errorNotification("Something went wrong! Please reload the page and retry!!"),a.next=20;break;case 16:a.prev=16,a.t0=a.catch(5),Object(c.e)(t.errors,a.t0),t.errorNotification("Something went wrong! Please retry!!");case 20:return a.prev=20,t.$vs.loading.close("#loading--container > .con-vs-loading"),t.campaign_popup=!1,a.finish(20);case 24:case"end":return a.stop()}}),a,null,[[5,16,20,24]])})))()},editCampaign:function(t){this.campaign=l.a.cloneDeep(t),this.campaign_popup=!0}}},u=e("KHd+"),m=Object(u.a)(p,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("vs-popup",{staticClass:"popup-lg",attrs:{title:"Campaign Detail",active:t.campaign_popup},on:{"update:active":function(a){t.campaign_popup=a}}},[e("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full mb-4"},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"title",label:"Title"},model:{value:t.campaign.title,callback:function(a){t.$set(t.campaign,"title",a)},expression:"campaign.title"}}),t._v(" "),t.errors.has("title")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("title")))]):t._e()],1),t._v(" "),e("div",{staticClass:"vx-col w-full md:w-1/2 mb-4"},[e("label",{attrs:{for:""}},[t._v("Start Date")]),t._v(" "),e("flat-pickr",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{config:{dateFormat:"Y-m-d H:i",enableTime:!0},name:"start_date"},model:{value:t.campaign.start_date,callback:function(a){t.$set(t.campaign,"start_date",a)},expression:"campaign.start_date"}}),t._v(" "),t.errors.has("start_date")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("start_date")))]):t._e()],1),t._v(" "),e("div",{staticClass:"vx-col w-full md:w-1/2 mb-4"},[e("label",{attrs:{for:""}},[t._v("End Date")]),t._v(" "),e("flat-pickr",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{config:{dateFormat:"Y-m-d H:i",enableTime:!0},name:"end_date"},model:{value:t.campaign.end_date,callback:function(a){t.$set(t.campaign,"end_date",a)},expression:"campaign.end_date"}}),t._v(" "),t.errors.has("end_date")?e("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("end_date")))]):t._e()],1)]),t._v(" "),e("vs-button",{staticClass:"mr-3 mt-5",on:{click:t.saveCampaign}},[t._v("Submit")])],1)]),t._v(" "),t.loading?e("pageLoader"):e("vx-card",{staticClass:"card-padding-5"},[e("vs-table",{attrs:{search:"",stripe:"",data:t.campaigns,"max-items":"40",pagination:""},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.data;return t._l(n,(function(a,n){return e("vs-tr",{key:n,attrs:{state:a.is_active?"success":"danger",data:a}},[e("vs-td",[e("i",[t._v("#"+t._s(a.id))])]),t._v(" "),e("vs-td",[t._v(t._s(a.title))]),t._v(" "),e("vs-td",[t._v(t._s(a.start_date))]),t._v(" "),e("vs-td",[t._v(t._s(a.end_date))]),t._v(" "),e("vs-td",[t._v(t._s(a.is_active?"Active":"Inactive"))]),t._v(" "),e("vs-td",[e("router-link",{attrs:{to:{name:"ecommerce-admin-discount-campaign-detail",params:{id:a.id}}}},[e("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"success",type:"filled",size:"small",icon:"search"}})],1),t._v(" "),e("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"warning",type:"filled",size:"small",icon:"create"},on:{click:function(e){return t.editCampaign(a)}}})],1)],1)}))}}])},[e("template",{slot:"header"},[e("strong",[t._v("Total :")]),t._v("\n         "+t._s(t.campaigns.length)+"    \n\n        "),e("vs-button",{attrs:{color:"primary",size:"small",type:"border"},on:{click:function(a){t.campaign_popup=!0}}},[t._v("Add Campaign")])],1),t._v(" "),e("template",{slot:"thead"},[e("vs-th",{attrs:{"sort-key":"email"}},[t._v("SN")]),t._v(" "),e("vs-th",[t._v("Campaign Name")]),t._v(" "),e("vs-th",[t._v("Start Date")]),t._v(" "),e("vs-th",[t._v("End Date")]),t._v(" "),e("vs-th",[t._v("Status")]),t._v(" "),e("vs-th",[t._v("Actions")])],1)],2)],1)],1)}),[],!1,null,null,null);a.default=m.exports}}]);