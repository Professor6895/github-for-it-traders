(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"5b+3":function(e,t,s){"use strict";s.r(t);var a={data:function(){return{email:"",password:"",checkbox_remember_me:!1}},computed:{validateForm:function(){return!this.errors.any()&&""!=this.email&&""!=this.password}},methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},loginJWT:function(){var e=this;if(this.checkLogin()){this.$vs.loading();var t={checkbox_remember_me:this.checkbox_remember_me,userDetails:{email:this.email,password:this.password,authType:"vendor"}};this.$store.dispatch("auth/loginJWT",t).then((function(t){e.$vs.loading.close(),e.$vs.notify({title:"Login Success",text:"You are successfully logged in!",color:"success"}),e.$store.dispatch("updateUserRole",{aclChangeRole:e.$acl.change,userRole:t.data.userData.userRole}).then((function(){var s="/".concat(t.data.userData.userRole,"/dashboard");e.$router.push(e.$router.currentRoute.query.to||s)}))})).catch((function(t){e.$vs.loading.close(),e.$vs.notify({title:"Error",text:t.message,iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))}}}},i=s("KHd+"),o=Object(i.a)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"h-screen flex w-full bg-img vx-row no-gutter items-center justify-center",attrs:{id:"page-login"}},[t("div",{staticClass:"vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"},[t("vx-card",[t("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[t("div",{staticClass:"vx-row no-gutter justify-center items-center"},[t("div",{staticClass:"vx-col hidden lg:block lg:w-1/2"},[t("img",{staticClass:"mx-auto",attrs:{src:s("XElz"),alt:"login"}})]),e._v(" "),t("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"},[t("div",{staticClass:"px-8 pt-8 pb-8"},[t("div",{staticClass:"vx-card__title mb-4"},[t("h4",{staticClass:"mb-4"},[e._v("Vendor Login")]),e._v(" "),t("p",[e._v("Welcome back, please login to your account.")])]),e._v(" "),t("div",[t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email|min:3",expression:"'required|email|min:3'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",name:"email","icon-no-border":"",icon:"icon icon-user","icon-pack":"feather","label-placeholder":"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),t("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("email")))]),e._v(" "),t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6",expression:"'required|min:6'"}],staticClass:"w-full mt-6",attrs:{"data-vv-validate-on":"blur",type:"password",name:"password","icon-no-border":"",icon:"icon icon-lock","icon-pack":"feather","label-placeholder":"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),t("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("password")))]),e._v(" "),t("div",{staticClass:"flex flex-wrap justify-between my-5"},[t("vs-checkbox",{staticClass:"mb-3",model:{value:e.checkbox_remember_me,callback:function(t){e.checkbox_remember_me=t},expression:"checkbox_remember_me"}},[e._v("Remember Me")]),e._v(" "),t("router-link",{attrs:{to:"/pages/forgot-password"}},[e._v("Forgot Password?")])],1),e._v(" "),t("div",{staticClass:"text-right mb-3"},[t("vs-button",{attrs:{disabled:!e.validateForm},on:{click:e.loginJWT}},[e._v("Login")])],1)],1)])])])])])],1)])}),[],!1,null,null,null);t.default=o.exports},XElz:function(e,t){e.exports="/images/login.png?d814adb752d2d047b8292d6de603025f"}}]);