(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"0SV0":function(t,s,n){"use strict";n.r(s);var e=n("o0o1"),i=n.n(e),a=n("v/P4"),o=n("LvDl"),r=n.n(o),c=n("uBql"),l=n("0Vgt");function u(t,s,n,e,i,a,o){try{var r=t[a](o),c=r.value}catch(t){return void n(t)}r.done?s(c):Promise.resolve(c).then(e,i)}var d={data:function(){return{sms_settings:{}}},components:{"settings-sidebar":a.a},computed:{state:function(){return this.$store.state.settings}},mounted:function(){this.initComponent()},watch:{state:{deep:!0,handler:function(){this.initComponent()}}},methods:{initComponent:function(){r.a.has(this.$store.state,"settings.dashboard_settings.sms_settings")&&(this.sms_settings=r.a.cloneDeep(this.$store.state.settings.dashboard_settings.sms_settings))},saveSMSSetting:function(){var t,s=this;return(t=i.a.mark((function t(){var n,e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.$validator.validateAll();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:return s.$vs.loading({container:"#loading--container"}),t.prev=6,n={_method:"PATCH",settings:s.sms_settings},t.next=10,s.$http.post("/api/admin/settings/sms_settings/update-settings",n);case 10:e=t.sent,console.log(e.data),e.data.success&&(l.a.dispatch("settings/fetchSettings",{once:!1}),s.successNotification(e.data.message)),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(6),Object(c.e)(s.errors,t.t0),s.errorNotification("Something went wrong! Please retry!!");case 19:return t.prev=19,s.$vs.loading.close("#loading--container > .con-vs-loading"),t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[6,15,19,22]])})),function(){var s=this,n=arguments;return new Promise((function(e,i){var a=t.apply(s,n);function o(t){u(a,e,i,o,r,"next",t)}function r(t){u(a,e,i,o,r,"throw",t)}o(void 0)}))})()}}},v=n("KHd+"),p=Object(v.a)(d,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"vx-row"},[n("div",{staticClass:"vx-col md:w-3/12 w-full mb-2 rounded-lg"},[n("settings-sidebar")],1),t._v(" "),n("div",{staticClass:"vx-col md:w-9/12 mb-2"},[n("vx-card",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[n("div",{staticClass:"vx-row"},[n("div",{staticClass:"vx-col w-full mb-3"},[n("h4",[t._v("SMS Settings")])]),t._v(" "),n("div",{staticClass:"vx-col w-full mb-4"},[n("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"API Endpoint",name:"api_endpoint"},model:{value:t.sms_settings.api_endpoint,callback:function(s){t.$set(t.sms_settings,"api_endpoint",s)},expression:"sms_settings.api_endpoint"}})],1),t._v(" "),n("div",{staticClass:"vx-col  w-full mb-4"},[n("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"Token",name:"token"},model:{value:t.sms_settings.token,callback:function(s){t.$set(t.sms_settings,"token",s)},expression:"sms_settings.token"}})],1)]),t._v(" "),n("vs-button",{attrs:{color:"success",type:"filled",size:"small"},on:{click:t.saveSMSSetting}},[t._v("Submit")])],1)],1)])}),[],!1,null,null,null);s.default=p.exports},QVdw:function(t,s,n){(t.exports=n("I1BE")(!1)).push([t.i,"",""])},p7SD:function(t,s,n){"use strict";n("z2gT")},"v/P4":function(t,s,n){"use strict";var e={data:function(){return{}},computed:{dashboard_settings:function(){return this.$store.state.settings.dashboard_settings},active_tab:function(){var t=location.href.split("/");return t[t.indexOf("settings")+1]}}},i=(n("p7SD"),n("KHd+")),a=Object(i.a)(e,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("vx-card",{staticClass:"dashboard--setting-sidebar",attrs:{title:"Modules"}},[n("ul",t._l(t.dashboard_settings,(function(s,e){return n("li",{key:e,staticClass:"p-2 font-medium items-center"},[n("router-link",{staticClass:"flex cursor-pointer",attrs:{tag:"span",to:"/admin/settings/"+e}},[n("span",{class:{"text-primary":e===t.active_tab}},[n("vs-icon",{staticClass:"align-middle",staticStyle:{color:"black !important"},attrs:{icon:"chevron_right"}}),t._v(t._s(t._f("title")(e)))],1)])],1)})),0)])}),[],!1,null,"012456a9",null);s.a=a.exports},z2gT:function(t,s,n){var e=n("QVdw");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(t.exports=e.locals)}}]);