(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{XuXX:function(e,s,a){"use strict";a.r(s);var r=a("o0o1"),t=a.n(r),n=a("LvDl"),i=a.n(n),o=a("uBql");function c(e,s,a,r,t,n,i){try{var o=e[n](i),c=o.value}catch(e){return void a(e)}o.done?s(c):Promise.resolve(c).then(r,t)}function l(e){return function(){var s=this,a=arguments;return new Promise((function(r,t){var n=e.apply(s,a);function i(e){c(n,r,t,i,o,"next",e)}function o(e){c(n,r,t,i,o,"throw",e)}i(void 0)}))}}var d={data:function(){return{user:{}}},mounted:function(){this.loadUser()},methods:{loadUser:function(){this.user=i.a.cloneDeep(this.$store.state.AppActiveUser)},reloadUserInfo:function(){var e=this;return l(t.a.mark((function s(){var a;return t.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,e.$vs.loading({container:"#loading--container"}),s.next=4,e.$http.post("/api/admin/reload-user");case 4:(a=s.sent).data.success?(e.$store.commit("UPDATE_USER_INFO",a.data.data,{root:!0}),e.successNotification("Refreshed")):e.errorNotification("Something went wrong while updating profile!! Please retry"),s.next=11;break;case 8:s.prev=8,s.t0=s.catch(0),e.errorNotification("Error while updating profile! Please try again");case 11:return s.prev=11,e.$vs.loading.close("#loading--container > .con-vs-loading"),s.finish(11);case 14:case"end":return s.stop()}}),s,null,[[0,8,11,14]])})))()},saveChanges:function(){var e=this;return l(t.a.mark((function s(){var a,r,n;return t.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.$validator.validateAll();case 2:if(s.sent){s.next=5;break}return s.abrupt("return");case 5:return s.prev=5,e.$vs.loading({container:"#loading--container"}),a={name:e.user.name,email:e.user.email,_method:"PATCH"},r=Object(o.a)(a),s.next=11,e.$http.post("/api/admin/update-profile",r);case 11:(n=s.sent).data.success?(e.$store.commit("UPDATE_USER_INFO",n.data.userInfo,{root:!0}),e.successNotification(n.data.message),e.loadUser()):e.errorNotification("Something went wrong while updating profile!! Please retry"),s.next=19;break;case 15:s.prev=15,s.t0=s.catch(5),Object(o.e)(e.errors,s.t0),e.errorNotification("Error while updating profile! Please try again");case 19:return s.prev=19,e.$vs.loading.close("#loading--container > .con-vs-loading"),s.finish(19);case 22:case"end":return s.stop()}}),s,null,[[5,15,19,22]])})))()}}},u=a("KHd+");function v(e,s,a,r,t,n,i){try{var o=e[n](i),c=o.value}catch(e){return void a(e)}o.done?s(c):Promise.resolve(c).then(r,t)}var p={data:function(){return{current_password:"",new_password:"",confirm_password:""}},mounted:function(){},methods:{clearForm:function(){this.current_password="",this.new_password="",this.confirm_password=""},savechanges:function(){var e,s=this;return(e=t.a.mark((function e(){var a,r;return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.$validator.validateAll();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,s.$vs.loading({container:"#loading--container"}),a={current_password:s.current_password,new_password:s.new_password,confirm_password:s.confirm_password,_method:"PATCH"},e.next=10,s.$http.post("/api/admin/update-security",a);case 10:(r=e.sent).data.success?(s.successNotification(r.data.message),setTimeout((function(){location.reload()}),1e3)):s.errorNotification("Something went wrong while updating security!! Please retry"),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),Object(o.e)(s.errors,e.t0),s.errorNotification("Something went wrong! Please retry!!");case 18:return e.prev=18,s.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[5,14,18,21]])})),function(){var s=this,a=arguments;return new Promise((function(r,t){var n=e.apply(s,a);function i(e){v(n,r,t,i,o,"next",e)}function o(e){v(n,r,t,i,o,"throw",e)}i(void 0)}))})()}}},w={components:{UserInformation:Object(u.a)(d,(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col"},[a("vs-button",{on:{click:e.reloadUserInfo}},[e._v("Reload User Info")])],1)]),e._v(" "),a("div",{staticClass:"vx-row mt-3"},[a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-3",attrs:{label:"Full Name",name:"name"},model:{value:e.user.name,callback:function(s){e.$set(e.user,"name",s)},expression:"user.name"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("name")))])],1),e._v(" "),a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-3",attrs:{label:"Email",name:"email"},model:{value:e.user.email,callback:function(s){e.$set(e.user,"email",s)},expression:"user.email"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("email")))])],1)]),e._v(" "),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full"},[a("div",{staticClass:"mt-3 flex"},[a("vs-button",{staticClass:"mt-2",attrs:{size:"small"},on:{click:e.saveChanges}},[e._v("Save Changes")])],1)])])])}),[],!1,null,null,null).exports,UserSecurity:Object(u.a)(p,(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full md:w-1/2"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Current Password","icon-no-border":"",type:"password",name:"current_password"},model:{value:e.current_password,callback:function(s){e.current_password=s},expression:"current_password"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("current_password"),expression:"errors.has('current_password')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("current_password")))]),e._v(" "),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-4",attrs:{label:"New Passowrd","icon-no-border":"",type:"password",name:"new_password"},model:{value:e.new_password,callback:function(s){e.new_password=s},expression:"new_password"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("new_password"),expression:"errors.has('new_password')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("new_password")))]),e._v(" "),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-4 mt-4",attrs:{label:"Confirm Password",type:"password","icon-no-border":"",name:"confirm_password"},model:{value:e.confirm_password,callback:function(s){e.confirm_password=s},expression:"confirm_password"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("confirm_password"),expression:"errors.has('confirm_password')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("confirm_password")))])],1)]),e._v(" "),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full"},[a("div",{staticClass:"mt-4 flex"},[a("vs-button",{attrs:{size:"small"},on:{click:e.savechanges}},[e._v("Save Changes")])],1)])])])}),[],!1,null,null,null).exports}},m=Object(u.a)(w,(function(){var e=this.$createElement,s=this._self._c||e;return s("div",[s("vx-card",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[s("div",{staticClass:"tabs-container px-6 pt-6",attrs:{slot:"no-body"},slot:"no-body"},[s("vs-tabs",{staticClass:"tab-action-btn-fill-conatiner"},[s("vs-tab",{attrs:{label:"Information","icon-pack":"feather",icon:"icon-info"}},[s("div",{staticClass:"tab-text"},[s("UserInformation")],1)]),this._v(" "),s("vs-tab",{attrs:{label:"Security",icon:"vpn_key"}},[s("div",{staticClass:"tab-text"},[s("UserSecurity")],1)])],1)],1)])],1)}),[],!1,null,null,null);s.default=m.exports}}]);