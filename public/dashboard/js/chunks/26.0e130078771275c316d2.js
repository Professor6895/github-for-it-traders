(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{QVdw:function(t,s,e){(t.exports=e("I1BE")(!1)).push([t.i,"",""])},n61c:function(t,s,e){"use strict";e.r(s);var a=e("o0o1"),o=e.n(a),i=e("v/P4"),n=e("LvDl"),l=e.n(n),c=e("uBql"),r=e("0Vgt");function u(t,s,e,a,o,i,n){try{var l=t[i](n),c=l.value}catch(t){return void e(t)}l.done?s(c):Promise.resolve(c).then(a,o)}var d={data:function(){return{social_settings:{facebook:{},google:{}}}},components:{"settings-sidebar":i.a},computed:{state:function(){return this.$store.state.settings}},mounted:function(){this.initComponent()},watch:{state:{deep:!0,handler:function(){this.initComponent()}}},methods:{initComponent:function(){l.a.has(this.$store.state,"settings.dashboard_settings.social_settings")&&(this.social_settings=l.a.cloneDeep(this.$store.state.settings.dashboard_settings.social_settings))},saveSocialSettings:function(){var t,s=this;return(t=o.a.mark((function t(){var e,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.$validator.validateAll();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:return s.$vs.loading({container:"#loading--container"}),t.prev=6,e={_method:"PATCH",settings:s.social_settings},t.next=10,s.$http.post("/api/admin/settings/social_settings/update-settings",e);case 10:a=t.sent,console.log(a.data),a.data.success&&(r.a.dispatch("settings/fetchSettings",{once:!1}),s.successNotification(a.data.message)),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(6),Object(c.e)(s.errors,t.t0),s.errorNotification("Something went wrong! Please retry!!");case 19:return t.prev=19,s.$vs.loading.close("#loading--container > .con-vs-loading"),t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[6,15,19,22]])})),function(){var s=this,e=arguments;return new Promise((function(a,o){var i=t.apply(s,e);function n(t){u(i,a,o,n,l,"next",t)}function l(t){u(i,a,o,n,l,"throw",t)}n(void 0)}))})()}}},g=e("KHd+"),v=Object(g.a)(d,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col md:w-3/12 w-full mb-2 rounded-lg"},[e("settings-sidebar")],1),t._v(" "),e("div",{staticClass:"vx-col md:w-9/12 mb-2"},[e("vx-card",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full mb-3"},[e("h4",[t._v("Facebook")])]),t._v(" "),e("div",{staticClass:"vx-col sm:w-1/2 w-full mb-4"},[e("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"Facebook App ID",name:"facebook_app_id"},model:{value:t.social_settings.facebook.facebook_app_id,callback:function(s){t.$set(t.social_settings.facebook,"facebook_app_id",s)},expression:"social_settings.facebook.facebook_app_id"}})],1),t._v(" "),e("div",{staticClass:"vx-col sm:w-1/2 w-full mb-4"},[e("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"Facebook App Secret",name:"facebook_app_secret"},model:{value:t.social_settings.facebook.facebook_app_secret,callback:function(s){t.$set(t.social_settings.facebook,"facebook_app_secret",s)},expression:"social_settings.facebook.facebook_app_secret"}})],1)]),t._v(" "),e("div",{staticClass:"vx-row mt-3 mb-3"},[e("div",{staticClass:"vx-col w-full"},[e("h4",[t._v("Google")])]),t._v(" "),e("div",{staticClass:"vx-col sm:w-1/2 w-full mb-4"},[e("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"Googke Client ID",name:"google_app_id"},model:{value:t.social_settings.google.google_client_id,callback:function(s){t.$set(t.social_settings.google,"google_client_id",s)},expression:"social_settings.google.google_client_id"}})],1),t._v(" "),e("div",{staticClass:"vx-col sm:w-1/2 w-full mb-4"},[e("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"Google Client Secret",name:"google_app_secret"},model:{value:t.social_settings.google.google_client_secret,callback:function(s){t.$set(t.social_settings.google,"google_client_secret",s)},expression:"social_settings.google.google_client_secret"}})],1)]),t._v(" "),e("vs-button",{attrs:{color:"success",type:"filled",size:"small"},on:{click:t.saveSocialSettings}},[t._v("Submit")])],1)],1)])}),[],!1,null,null,null);s.default=v.exports},p7SD:function(t,s,e){"use strict";e("z2gT")},"v/P4":function(t,s,e){"use strict";var a={data:function(){return{}},computed:{dashboard_settings:function(){return this.$store.state.settings.dashboard_settings},active_tab:function(){var t=location.href.split("/");return t[t.indexOf("settings")+1]}}},o=(e("p7SD"),e("KHd+")),i=Object(o.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("vx-card",{staticClass:"dashboard--setting-sidebar",attrs:{title:"Modules"}},[e("ul",t._l(t.dashboard_settings,(function(s,a){return e("li",{key:a,staticClass:"p-2 font-medium items-center"},[e("router-link",{staticClass:"flex cursor-pointer",attrs:{tag:"span",to:"/admin/settings/"+a}},[e("span",{class:{"text-primary":a===t.active_tab}},[e("vs-icon",{staticClass:"align-middle",staticStyle:{color:"black !important"},attrs:{icon:"chevron_right"}}),t._v(t._s(t._f("title")(a)))],1)])],1)})),0)])}),[],!1,null,"012456a9",null);s.a=i.exports},z2gT:function(t,s,e){var a=e("QVdw");"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,o);a.locals&&(t.exports=a.locals)}}]);