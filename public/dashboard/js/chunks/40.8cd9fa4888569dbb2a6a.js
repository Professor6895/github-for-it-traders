(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"5Dge":function(e,a){e.exports="/images/default-avatar.png?27b9408da668f335b85e9fe669908cab"},"hZp+":function(e,a,s){"use strict";s.r(a);var t=s("o0o1"),r=s.n(t),n=s("LvDl"),i=s.n(n),o=s("uBql"),l=s("w48C"),c=s.n(l);s("CVKz");function v(e,a,s,t,r,n,i){try{var o=e[n](i),l=o.value}catch(e){return void s(e)}o.done?a(l):Promise.resolve(l).then(t,r)}var u={data:function(){return{user:{},avatar_preview:""}},mounted:function(){this.loadUser()},components:{flatPickr:c.a},methods:{loadUser:function(){this.user=i.a.cloneDeep(this.$store.state.AppActiveUser)},avatarUploaded:function(e){var a=this,s=this.$refs.update_avatar_input.files[0],t=new FileReader;t.onload=function(){a.$set(a.user,"avatar",t.result),a.avatar_preview=t.result},t.readAsDataURL(s)},saveChanges:function(){var e,a=this;return(e=r.a.mark((function e(){var s,t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.$validator.validateAll();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,a.$vs.loading({container:"#loading--container"}),s={name:a.user.name,email:a.user.email,birth_date:a.user.birth_date,contact:a.user.contact,address:a.user.address,inventory_location:a.user.inventory_location,full_name:a.user.full_name,contact_person_phone:a.user.contact_person_phone,contact_person_address:a.user.contact_person_address,_method:"PATCH"},a.user.avatar&&i.a.startsWith(a.user.avatar,"data:image")&&(s.avatar=a.$refs.update_avatar_input.files[0]),t=Object(o.a)(s),e.next=12,a.$http.post("/api/vendor/update-profile",t);case 12:(n=e.sent).data.success?(a.$store.commit("UPDATE_USER_INFO",n.data.userInfo,{root:!0}),a.successNotification(n.data.message)):a.$vs.notify({position:"top-right",title:"Error",text:"Something went wrong while updating profile!! Please retry",color:"danger"}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),a.errorNotification("Error while updating profile! Please try again");case 19:return e.prev=19,a.loadUser(),a.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(19);case 23:case"end":return e.stop()}}),e,null,[[5,16,19,23]])})),function(){var a=this,s=arguments;return new Promise((function(t,r){var n=e.apply(a,s);function i(e){v(n,t,r,i,o,"next",e)}function o(e){v(n,t,r,i,o,"throw",e)}i(void 0)}))})()},getUserAvatar:function(){}}},d=s("KHd+");function m(e,a,s,t,r,n,i){try{var o=e[n](i),l=o.value}catch(e){return void s(e)}o.done?a(l):Promise.resolve(l).then(t,r)}var p={data:function(){return{current_password:"",new_password:"",confirm_password:""}},mounted:function(){},methods:{clearForm:function(){this.current_password="",this.new_password="",this.confirm_password=""},savechanges:function(){var e,a=this;return(e=r.a.mark((function e(){var s,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.$validator.validateAll();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,a.$vs.loading({container:"#loading--container"}),s={current_password:a.current_password,new_password:a.new_password,confirm_password:a.confirm_password,_method:"PATCH"},e.next=10,a.$http.post("/api/vendor/update-security",s);case 10:(t=e.sent).data.success?(a.$vs.notify({title:"success",position:"top-right",text:t.data.message,color:"success"}),setTimeout((function(){location.reload()}),1e3)):a.errorNotification("Something went wrong while updating security!! Please retry"),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),Object(o.e)(a.errors,e.t0),a.errorNotification("Something went wrong! Please retry!!");case 18:return e.prev=18,a.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[5,14,18,21]])})),function(){var a=this,s=arguments;return new Promise((function(t,r){var n=e.apply(a,s);function i(e){m(n,t,r,i,o,"next",e)}function o(e){m(n,t,r,i,o,"throw",e)}i(void 0)}))})()}}},_={components:{UserInformation:Object(d.a)(u,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"vx-row"},[t("div",{staticClass:"vx-col w-full"},[t("div",{staticClass:"flex items-start flex-col sm:flex-row"},[""!==e.avatar_preview?t("img",{staticClass:"mr-8 rounded h-24 w-24",attrs:{src:e.avatar_preview,alt:""}}):t("img",{staticClass:"mr-8 rounded h-24 w-24",attrs:{src:e.user.avatar&&""!==e.user.avatar?e.user.avatar_image.thumb:s("5Dge")}}),e._v(" "),t("div",{staticClass:"ml-4"},[t("p",{staticClass:"text-lg font-medium mb-2 mt-4 sm:mt-0"},[e._v("\n            "+e._s(e.user.name)+"\n          ")]),e._v(" "),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"image|size:1024",expression:"'image|size:1024'"}],ref:"update_avatar_input",staticClass:"hidden",attrs:{type:"file",accept:"image/*",name:"avatar"},on:{change:e.avatarUploaded}}),e._v(" "),t("vs-button",{staticClass:"mr-4 mb-4",attrs:{size:"small"},on:{click:function(a){return e.$refs.update_avatar_input.click()}}},[e._v("Change Avatar")])],1)]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("avatar"),expression:"errors.has('avatar')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("avatar")))])])]),e._v(" "),t("div",{staticClass:"vx-row mt-4"},[t("div",{staticClass:"vx-col md:w-1/2 w-full"},[t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-4",attrs:{label:"Business Name",name:"name"},model:{value:e.user.name,callback:function(a){e.$set(e.user,"name",a)},expression:"user.name"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("name")))])],1),e._v(" "),t("div",{staticClass:"vx-col md:w-1/2 w-full"},[t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-4",attrs:{label:"Email",name:"email"},model:{value:e.user.email,callback:function(a){e.$set(e.user,"email",a)},expression:"user.email"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("email")))])],1)]),e._v(" "),t("div",{staticClass:"vx-row mt-4"},[t("div",{staticClass:"vx-col md:w-1/2 w-full"},[t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-4",attrs:{label:"Contact Number",name:"contact_number"},model:{value:e.user.contact_number,callback:function(a){e.$set(e.user,"contact_number",a)},expression:"user.contact_number"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("contact_number"),expression:"errors.has('contact_number')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("contact_number")))])],1),e._v(" "),t("div",{staticClass:"vx-col md:w-1/2 w-full"},[t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-4",attrs:{label:"Inventory Location",name:"inventory_location"},model:{value:e.user.inventory_location,callback:function(a){e.$set(e.user,"inventory_location",a)},expression:"user.inventory_location"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("inventory_location"),expression:"errors.has('inventory_location')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("inventory_location")))])],1)]),e._v(" "),t("div",{staticClass:"vx-row mt-4"},[t("div",{staticClass:"vx-col w-full"},[t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-4",attrs:{label:"Address",name:"address"},model:{value:e.user.address,callback:function(a){e.$set(e.user,"address",a)},expression:"user.address"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("address"),expression:"errors.has('address')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("address")))])],1)]),e._v(" "),t("div",{staticClass:"vx-row mt-3"},[e._m(0),e._v(" "),t("div",{staticClass:"vx-col mb-3 md:w-1/2 w-full"},[t("vs-input",{staticClass:"w-full",attrs:{label:"Full Name",name:"full_name"},model:{value:e.user.full_name,callback:function(a){e.$set(e.user,"full_name",a)},expression:"user.full_name"}})],1),e._v(" "),t("div",{staticClass:"vx-col md:w-1/2 w-full"},[t("vs-input",{staticClass:"w-full",attrs:{label:"Contact",name:"contact_person_phone"},model:{value:e.user.contact_person_phone,callback:function(a){e.$set(e.user,"contact_person_phone",a)},expression:"user.contact_person_phone"}})],1),e._v(" "),t("div",{staticClass:"vx-col w-full"},[t("vs-input",{staticClass:"w-full",attrs:{label:"Address",name:"contact_person_address"},model:{value:e.user.contact_person_address,callback:function(a){e.$set(e.user,"contact_person_address",a)},expression:"user.contact_person_address"}})],1)]),e._v(" "),t("div",{staticClass:"vx-row"},[t("div",{staticClass:"vx-col w-full"},[t("div",{staticClass:"mt-8 flex"},[t("vs-button",{staticClass:"mt-2",on:{click:e.saveChanges}},[e._v("Save Changes")])],1)])])])}),[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"vx-col w-full mb-3"},[a("h3",[this._v("Contact Person Info")])])}],!1,null,null,null).exports,UserSecurity:Object(d.a)(p,(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full md:w-1/2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Current Password","icon-no-border":"",name:"current_password"},model:{value:e.current_password,callback:function(a){e.current_password=a},expression:"current_password"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("current_password"),expression:"errors.has('current_password')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("current_password")))]),e._v(" "),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-4",attrs:{label:"New Passowrd","icon-no-border":"",name:"new_password"},model:{value:e.new_password,callback:function(a){e.new_password=a},expression:"new_password"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("new_password"),expression:"errors.has('new_password')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("new_password")))]),e._v(" "),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-4 mt-4",attrs:{label:"Confirm Password","icon-no-border":"",name:"confirm_password"},model:{value:e.confirm_password,callback:function(a){e.confirm_password=a},expression:"confirm_password"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("confirm_password"),expression:"errors.has('confirm_password')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("confirm_password")))])],1)]),e._v(" "),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full"},[s("div",{staticClass:"mt-8 flex"},[s("vs-button",{staticClass:"mt-2",on:{click:e.savechanges}},[e._v("Save Changes")])],1)])])])}),[],!1,null,null,null).exports}},w=Object(d.a)(_,(function(){var e=this.$createElement,a=this._self._c||e;return a("div",[a("vx-card",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[a("div",{staticClass:"tabs-container px-6 pt-6",attrs:{slot:"no-body"},slot:"no-body"},[a("vs-tabs",{staticClass:"tab-action-btn-fill-conatiner"},[a("vs-tab",{attrs:{label:"Information","icon-pack":"feather",icon:"icon-info"}},[a("div",{staticClass:"tab-text"},[a("UserInformation")],1)]),this._v(" "),a("vs-tab",{attrs:{label:"Security",icon:"vpn_key"}},[a("div",{staticClass:"tab-text"},[a("UserSecurity")],1)])],1)],1)])],1)}),[],!1,null,null,null);a.default=w.exports}}]);