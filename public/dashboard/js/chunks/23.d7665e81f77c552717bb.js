(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{QVdw:function(t,s,e){(t.exports=e("I1BE")(!1)).push([t.i,"",""])},p7SD:function(t,s,e){"use strict";e("z2gT")},pvfS:function(t,s,e){"use strict";e.r(s);var i=e("o0o1"),a=e.n(i),n=e("v/P4"),l=e("LvDl"),o=e.n(l),r=e("uBql"),m=e("0Vgt");function c(t,s,e,i,a,n,l){try{var o=t[n](l),r=o.value}catch(t){return void e(t)}o.done?s(r):Promise.resolve(r).then(i,a)}var _={data:function(){return{email_settings:{smtp_setting:{},email_setting:{}}}},components:{"settings-sidebar":n.a},computed:{state:function(){return this.$store.state.settings}},mounted:function(){this.initComponent()},watch:{state:{deep:!0,handler:function(){this.initComponent()}}},methods:{initComponent:function(){o.a.has(this.$store.state,"settings.dashboard_settings.email_settings")&&(this.email_settings=o.a.cloneDeep(this.$store.state.settings.dashboard_settings.email_settings))},saveEmailSettings:function(){var t,s=this;return(t=a.a.mark((function t(){var e,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.$validator.validateAll();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:return s.$vs.loading({container:"#loading--container"}),t.prev=6,e={_method:"PATCH",settings:s.email_settings},t.next=10,s.$http.post("/api/admin/settings/email_settings/update-settings",e);case 10:(i=t.sent).data.success&&(m.a.dispatch("settings/fetchSettings",{once:!1}),s.successNotification(i.data.message)),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(6),Object(r.e)(s.errors,t.t0),s.errorNotification("Something went wrong! Please retry!!");case 18:return t.prev=18,s.$vs.loading.close("#loading--container > .con-vs-loading"),t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[6,14,18,21]])})),function(){var s=this,e=arguments;return new Promise((function(i,a){var n=t.apply(s,e);function l(t){c(n,i,a,l,o,"next",t)}function o(t){c(n,i,a,l,o,"throw",t)}l(void 0)}))})()}}},u=e("KHd+"),d=Object(u.a)(_,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col md:w-3/12 w-full mb-2 rounded-lg"},[e("settings-sidebar")],1),t._v(" "),e("div",{staticClass:"vx-col md:w-9/12 mb-2"},[e("vx-card",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full mb-3"},[e("h4",[t._v("SMTP Settings")])]),t._v(" "),e("div",{staticClass:"vx-col sm:w-1/2 w-full mb-4"},[e("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"Mailer",name:"mail_mailer"},model:{value:t.email_settings.smtp_setting.mail_mailer,callback:function(s){t.$set(t.email_settings.smtp_setting,"mail_mailer",s)},expression:"email_settings.smtp_setting.mail_mailer"}})],1),t._v(" "),e("div",{staticClass:"vx-col sm:w-1/2 w-full mb-4"},[e("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"Mail Host",name:"mail_host"},model:{value:t.email_settings.smtp_setting.mail_host,callback:function(s){t.$set(t.email_settings.smtp_setting,"mail_host",s)},expression:"email_settings.smtp_setting.mail_host"}})],1),t._v(" "),e("div",{staticClass:"vx-col sm:w-1/2 w-full mb-4"},[e("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"Mail Port",name:"mail_port"},model:{value:t.email_settings.smtp_setting.mail_port,callback:function(s){t.$set(t.email_settings.smtp_setting,"mail_port",s)},expression:"email_settings.smtp_setting.mail_port"}})],1),t._v(" "),e("div",{staticClass:"vx-col sm:w-1/2 w-full mb-4"},[e("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"Encryption",name:"mail_encryption"},model:{value:t.email_settings.smtp_setting.mail_encryption,callback:function(s){t.$set(t.email_settings.smtp_setting,"mail_encryption",s)},expression:"email_settings.smtp_setting.mail_encryption"}})],1),t._v(" "),e("div",{staticClass:"vx-col sm:w-1/2 w-full mb-4"},[e("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"Mail Username/Email",name:"mail_username"},model:{value:t.email_settings.smtp_setting.mail_username,callback:function(s){t.$set(t.email_settings.smtp_setting,"mail_username",s)},expression:"email_settings.smtp_setting.mail_username"}})],1),t._v(" "),e("div",{staticClass:"vx-col sm:w-1/2 w-full mb-4"},[e("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"Password",name:"mail_password"},model:{value:t.email_settings.smtp_setting.mail_password,callback:function(s){t.$set(t.email_settings.smtp_setting,"mail_password",s)},expression:"email_settings.smtp_setting.mail_password"}})],1),t._v(" "),e("div",{staticClass:"vx-col sm:w-1/2 w-full mb-4"},[e("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"From Address",name:"mail_from_address"},model:{value:t.email_settings.smtp_setting.mail_from_address,callback:function(s){t.$set(t.email_settings.smtp_setting,"mail_from_address",s)},expression:"email_settings.smtp_setting.mail_from_address"}})],1),t._v(" "),e("div",{staticClass:"vx-col sm:w-1/2 w-full mb-4"},[e("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"From Name",name:"mail_from_name"},model:{value:t.email_settings.smtp_setting.mail_from_name,callback:function(s){t.$set(t.email_settings.smtp_setting,"mail_from_name",s)},expression:"email_settings.smtp_setting.mail_from_name"}})],1)]),t._v(" "),e("div",{staticClass:"vx-row mt-3 mb-3"},[e("div",{staticClass:"vx-col w-full"},[e("h4",[t._v("Email Settings")])]),t._v(" "),t._l(t.email_settings.email_setting,(function(s,i){return e("div",{key:"field-"+i,staticClass:"vx-col sm:w-1/2 w-full mt-3"},[e("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":t._f("title")(i),name:"mail_from_name"},model:{value:t.email_settings.email_setting[i],callback:function(s){t.$set(t.email_settings.email_setting,i,s)},expression:"email_settings.email_setting[index]"}})],1)}))],2),t._v(" "),e("vs-button",{attrs:{color:"success",type:"filled",size:"small"},on:{click:t.saveEmailSettings}},[t._v("Submit")])],1)],1)])}),[],!1,null,null,null);s.default=d.exports},"v/P4":function(t,s,e){"use strict";var i={data:function(){return{}},computed:{dashboard_settings:function(){return this.$store.state.settings.dashboard_settings},active_tab:function(){var t=location.href.split("/");return t[t.indexOf("settings")+1]}}},a=(e("p7SD"),e("KHd+")),n=Object(a.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("vx-card",{staticClass:"dashboard--setting-sidebar",attrs:{title:"Modules"}},[e("ul",t._l(t.dashboard_settings,(function(s,i){return e("li",{key:i,staticClass:"p-2 font-medium items-center"},[e("router-link",{staticClass:"flex cursor-pointer",attrs:{tag:"span",to:"/admin/settings/"+i}},[e("span",{class:{"text-primary":i===t.active_tab}},[e("vs-icon",{staticClass:"align-middle",staticStyle:{color:"black !important"},attrs:{icon:"chevron_right"}}),t._v(t._s(t._f("title")(i)))],1)])],1)})),0)])}),[],!1,null,"012456a9",null);s.a=n.exports},z2gT:function(t,s,e){var i=e("QVdw");"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,a);i.locals&&(t.exports=i.locals)}}]);