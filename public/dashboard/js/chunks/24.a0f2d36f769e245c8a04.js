(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{QVdw:function(e,t,s){(e.exports=s("I1BE")(!1)).push([e.i,"",""])},j4ks:function(e,t,s){"use strict";s.r(t);var a=s("o0o1"),r=s.n(a),i=s("v/P4"),n=s("LvDl"),o=s.n(n),c=s("0Vgt"),l=s("uBql");function v(e,t,s,a,r,i,n){try{var o=e[i](n),c=o.value}catch(e){return void s(e)}o.done?t(c):Promise.resolve(c).then(a,r)}function m(e){return function(){var t=this,s=arguments;return new Promise((function(a,r){var i=e.apply(t,s);function n(e){v(i,a,r,n,o,"next",e)}function o(e){v(i,a,r,n,o,"throw",e)}n(void 0)}))}}var d={data:function(){return{ecommerce_settings:{initial_popup:{}}}},components:{"settings-sidebar":i.a},computed:{state:function(){return this.$store.state.settings}},mounted:function(){this.initComponent()},watch:{state:{deep:!0,handler:function(){this.initComponent()}}},methods:{initComponent:function(){o.a.has(this.$store.state,"settings.dashboard_settings.ecommerce")&&(this.ecommerce_settings=o.a.cloneDeep(this.$store.state.settings.dashboard_settings.ecommerce))},saveEcommerceSettings:function(){var e=this;return m(r.a.mark((function t(){var s,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$validator.validateAll();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:return e.$vs.loading({container:"#loading--container"}),t.prev=6,s={_method:"PATCH",settings:e.ecommerce_settings},t.next=10,e.$http.post("/api/admin/settings/ecommerce/update-settings",s);case 10:(a=t.sent).data.success&&(c.a.dispatch("settings/fetchSettings",{once:!1}),e.successNotification(a.data.message)),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(6),console.log(t.t0),e.errorNotification("Something went wrong! Please retry!!");case 18:return t.prev=18,e.$vs.loading.close("#loading--container > .con-vs-loading"),t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[6,14,18,21]])})))()},generateOrderMessagePreview:function(e){return e&&(e=(e=(e=(e=e.replace("{user_name}","John Doe")).replace("{order_id}","ORD986555")).replace("{order_total}","15000")).replace("{order_url}","https://website.com/user-profile/order-detail?invoice_number=ORD9")),e},popUpImageUploaded:function(){var e=this.$refs.upload_popup_image.files[0];this.ecommerce_settings.initial_popup.image=URL.createObjectURL(e)},clearImage:function(){this.ecommerce_settings.initial_popup.image=null,this.$refs.upload_popup_image.value=""},saveEcommercePopupSetting:function(){var e=this;return m(r.a.mark((function t(){var s,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s={enabled:e.ecommerce_settings.initial_popup.enabled,popup_delay:e.ecommerce_settings.initial_popup.popup_delay,interval:e.ecommerce_settings.initial_popup.interval,link:e.ecommerce_settings.initial_popup.link},e.$refs.upload_popup_image&&e.$refs.upload_popup_image.files.length&&(s.image=e.$refs.upload_popup_image.files[0]),s=Object(l.a)(s),t.next=6,e.$http.post("/api/admin/ecommerce-settings/save-popup-settings",s);case 6:(a=t.sent).data.success&&(c.a.dispatch("settings/fetchSettings",{once:!1}),e.successNotification(a.data.message)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}},u=s("KHd+"),_=Object(u.a)(d,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col sm:w-1/6 w-full mb-2"},[s("settings-sidebar")],1),e._v(" "),s("div",{staticClass:"vx-col sm:w-5/6 mb-2"},[s("vx-card",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col mb-4 w-full"},[s("h3",{staticClass:"mb-2"},[e._v("Order Messaging")]),e._v(" "),s("vs-alert",{attrs:{color:"primary",active:"true"}},[e._v("\n            Available Short Codes to use in your messages: "),s("br"),s("br"),e._v("\n\n            * {order_id} - Order Invoice Number "),s("br"),e._v("\n            * {user_name} - Full Name Of user"),s("br"),e._v("\n            * {order_total} - Total amount of order"),s("br"),e._v("\n            * {order_url} - Link to check order status\n          ")])],1),e._v(" "),s("div",{staticClass:"vx-col w-3/5"},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full mb-3"},[s("strong",[e._v("Order Placed Message")]),e._v(" "),s("vs-textarea",{staticClass:"w-full",attrs:{name:"order_placed_message"},model:{value:e.ecommerce_settings.order_placed_message,callback:function(t){e.$set(e.ecommerce_settings,"order_placed_message",t)},expression:"ecommerce_settings.order_placed_message"}})],1),e._v(" "),s("div",{staticClass:"vx-col w-full mb-3"},[s("strong",[e._v("Order Confirmed Message")]),e._v(" "),s("vs-textarea",{staticClass:"w-full",attrs:{name:"order_confirmed_message"},model:{value:e.ecommerce_settings.order_confirmed_message,callback:function(t){e.$set(e.ecommerce_settings,"order_confirmed_message",t)},expression:"ecommerce_settings.order_confirmed_message"}})],1),e._v(" "),s("div",{staticClass:"vx-col w-full mb-3"},[s("strong",[e._v("Order Dispatched Message")]),e._v(" "),s("vs-textarea",{staticClass:"w-full",attrs:{name:"order_dispatched_message"},model:{value:e.ecommerce_settings.order_dispatched_message,callback:function(t){e.$set(e.ecommerce_settings,"order_dispatched_message",t)},expression:"ecommerce_settings.order_dispatched_message"}})],1),e._v(" "),s("div",{staticClass:"vx-col w-full mb-3"},[s("strong",[e._v("Order Completed Message")]),e._v(" "),s("vs-textarea",{staticClass:"w-full",attrs:{name:"order_completed_message"},model:{value:e.ecommerce_settings.order_completed_message,callback:function(t){e.$set(e.ecommerce_settings,"order_completed_message",t)},expression:"ecommerce_settings.order_completed_message"}})],1),e._v(" "),s("div",{staticClass:"vx-col w-full mb-3"},[s("strong",[e._v("Order Canceled Message")]),e._v(" "),s("vs-textarea",{staticClass:"w-full",attrs:{name:"order_canceled_message"},model:{value:e.ecommerce_settings.order_canceled_message,callback:function(t){e.$set(e.ecommerce_settings,"order_canceled_message",t)},expression:"ecommerce_settings.order_canceled_message"}})],1)])]),e._v(" "),s("div",{staticClass:"vx-col w-2/5"},[s("div",{staticClass:"vx-row p-3"},[s("div",{staticClass:"vx-col w-full mb-3"},[s("h4",[e._v("Order Email/SMS Message Preview")])]),e._v(" "),s("div",{staticClass:"vx-col w-full mb-4"},[s("strong",[e._v("Order Placed Message")]),e._v(" "),s("br"),e._v("\n              "+e._s(e.generateOrderMessagePreview(e.ecommerce_settings.order_placed_message))+"\n            ")]),e._v(" "),s("div",{staticClass:"vx-col w-full mb-4"},[s("strong",[e._v("Order Confirmed Message")]),e._v(" "),s("br"),e._v("\n              "+e._s(e.generateOrderMessagePreview(e.ecommerce_settings.order_confirmed_message))+"\n            ")]),e._v(" "),s("div",{staticClass:"vx-col w-full mb-4"},[s("strong",[e._v("Order Dispatched Message")]),e._v(" "),s("br"),e._v("\n              "+e._s(e.generateOrderMessagePreview(e.ecommerce_settings.order_dispatched_message))+"\n            ")]),e._v(" "),s("div",{staticClass:"vx-col w-full mb-4"},[s("strong",[e._v("Order Completed Message")]),e._v(" "),s("br"),e._v("\n              "+e._s(e.generateOrderMessagePreview(e.ecommerce_settings.order_completed_message))+"\n            ")]),e._v(" "),s("div",{staticClass:"vx-col w-full mb-4"},[s("strong",[e._v("Order Canceled Message")]),e._v(" "),s("br"),e._v("\n              "+e._s(e.generateOrderMessagePreview(e.ecommerce_settings.order_canceled_message))+"\n            ")])])]),e._v(" "),s("div",{staticClass:"vx-col w-full"},[s("vs-button",{attrs:{color:"success",type:"filled",size:"small"},on:{click:e.saveEcommerceSettings}},[e._v("Save")])],1)])]),e._v(" "),s("vx-card",{staticClass:"mt-2",attrs:{title:"Website Initial Popup"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full"},[s("vs-switch",{staticClass:"mt-3",attrs:{color:"success","vs-value":"1"},model:{value:e.ecommerce_settings.initial_popup.enabled,callback:function(t){e.$set(e.ecommerce_settings.initial_popup,"enabled",t)},expression:"ecommerce_settings.initial_popup.enabled"}},[s("span",{attrs:{slot:"on"},slot:"on"},[e._v("Enabled")]),e._v(" "),s("span",{attrs:{slot:"off"},slot:"off"},[e._v("Disabled")])])],1),e._v(" "),e.ecommerce_settings.initial_popup.enabled?s("div",{staticClass:"vx-col w-2/3 mt-3"},[s("div",{staticClass:"vx-row"},[s("vs-select",{staticClass:"vx-col w-1/2",attrs:{label:"Show Popup On"},model:{value:e.ecommerce_settings.initial_popup.interval,callback:function(t){e.$set(e.ecommerce_settings.initial_popup,"interval",t)},expression:"ecommerce_settings.initial_popup.interval"}},e._l([{text:"On Every Load",value:"everytime"},{text:"Every 1 Minute",value:"1"},{text:"Every 5 Minutes",value:"5"},{text:"Every 10 Minutes",value:"10"},{text:"Every 20 Minutes",value:"20"},{text:"Every 30 Minutes",value:"30"},{text:"Every 40 Minutes",value:"40"},{text:"Every 50 Minutes",value:"50"},{text:"Every 1 Hour",value:"60"},{text:"Every 1 & half Hour",value:"90"},{text:"Every 2 Hours",value:"120"},{text:"Every 3 Hours",value:"180"},{text:"Every 4 Hours",value:"240"},{text:"Every 5 Hours",value:"300"},{text:"Every 10 Hours",value:"600"},{text:"Every 12 Hours",value:"720"}],(function(e,t){return s("vs-select-item",{key:"interval"+t,attrs:{value:e.value,text:e.text}})})),1),e._v(" "),s("vs-input",{staticClass:"vx-col w-1/2",attrs:{label:"Popup Delay (seconds)",name:"order_placed_message"},model:{value:e.ecommerce_settings.initial_popup.popup_delay,callback:function(t){e.$set(e.ecommerce_settings.initial_popup,"popup_delay",t)},expression:"ecommerce_settings.initial_popup.popup_delay"}}),e._v(" "),s("vs-input",{staticClass:"vx-col w-full mt-2 mb-2",attrs:{label:"URL",name:"link"},model:{value:e.ecommerce_settings.initial_popup.link,callback:function(t){e.$set(e.ecommerce_settings.initial_popup,"link",t)},expression:"ecommerce_settings.initial_popup.link"}}),e._v(" "),s("div",{staticClass:"vx-col w-full mt-4"},[e.ecommerce_settings.initial_popup.image?s("div",{staticClass:"image-preview-container"},[s("div",{staticClass:"text-right float-right mr-10"},[s("vs-button",{staticClass:"image-remove--button",attrs:{radius:"",size:"small",color:"danger",type:"filled","icon-pack":"feather",icon:"icon-x"},on:{click:e.clearImage}})],1),e._v(" "),s("img",{attrs:{src:e.ecommerce_settings.initial_popup.image,alt:""}})]):e._e(),e._v(" "),s("input",{ref:"upload_popup_image",staticClass:"hidden",attrs:{type:"file",accept:"image/*"},on:{change:e.popUpImageUploaded}}),e._v(" "),s("vs-button",{attrs:{color:"primary",size:"small",type:"border"},on:{click:function(t){return e.$refs.upload_popup_image.click()}}},[e._v("Upload Logo")])],1)],1)]):e._e(),e._v(" "),s("div",{staticClass:"vx-col w-full mt-3"},[s("vs-button",{attrs:{color:"success",type:"filled",size:"small"},on:{click:e.saveEcommercePopupSetting}},[e._v("Save")])],1)])])],1)])}),[],!1,null,null,null);t.default=_.exports},p7SD:function(e,t,s){"use strict";s("z2gT")},"v/P4":function(e,t,s){"use strict";var a={data:function(){return{}},computed:{dashboard_settings:function(){return this.$store.state.settings.dashboard_settings},active_tab:function(){var e=location.href.split("/");return e[e.indexOf("settings")+1]}}},r=(s("p7SD"),s("KHd+")),i=Object(r.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("vx-card",{staticClass:"dashboard--setting-sidebar",attrs:{title:"Modules"}},[s("ul",e._l(e.dashboard_settings,(function(t,a){return s("li",{key:a,staticClass:"p-2 font-medium items-center"},[s("router-link",{staticClass:"flex cursor-pointer",attrs:{tag:"span",to:"/admin/settings/"+a}},[s("span",{class:{"text-primary":a===e.active_tab}},[s("vs-icon",{staticClass:"align-middle",staticStyle:{color:"black !important"},attrs:{icon:"chevron_right"}}),e._v(e._s(e._f("title")(a)))],1)])],1)})),0)])}),[],!1,null,"012456a9",null);t.a=i.exports},z2gT:function(e,t,s){var a=s("QVdw");"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,r);a.locals&&(e.exports=a.locals)}}]);