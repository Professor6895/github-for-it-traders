(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{RxFF:function(t,e){t.exports="/images/loader.gif?03777e3e9736a04cfe5890dfa0cee1b6"},ixJa:function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),n=a.n(s),i=a("uBql"),r=a("eM4r"),o={props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String},color:{type:String,default:"primary"},colorTo:{type:String},iconRight:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},link:{type:String,default:null},linkLabel:{type:String,default:"View All"},hideChart:{type:Boolean,default:!1}},methods:{getHex:function(t){if(r.a.isColor(t)){var e=window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(t));return e=e.split(","),"#"+((1<<24)+(Number(e[0])<<16)+(Number(e[1])<<8)+Number(e[2])).toString(16).slice(1)}return t},gradientToColor:function(t){var e={primary:"#A9A2F6",success:"#55DD92",warning:"#ffc085",danger:"#F97794"};return e[t]?e[t]:e.primary}}},c=a("KHd+");function l(t,e,a,s,n,i,r){try{var o=t[i](r),c=o.value}catch(t){return void a(t)}o.done?e(c):Promise.resolve(c).then(s,n)}var d={components:{StatisticsCardLine:Object(c.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{staticClass:"overflow-hidden"},[s("div",{staticClass:"pb-3",attrs:{slot:"no-body"},slot:"no-body"},[t.loading?s("div",{staticClass:"mt-3 mb-3"},[s("div",{staticClass:"text-center"},[s("img",{staticStyle:{"margin-left":"33%"},attrs:{src:a("RxFF"),alt:"",width:"80px"}})])]):s("div",{staticClass:"p-6",class:{"flex justify-between flex-row-reverse items-center":t.iconRight,"text-center":!t.iconRight&&t.hideChart,"pb-0":!t.hideChart}},[s("feather-icon",{staticClass:"p-3 inline-flex rounded-full",class:["text-"+t.color,{"mb-4":!t.iconRight}],style:{background:"rgba(var(--vs-"+t.color+"),.15)"},attrs:{icon:t.icon}}),t._v(" "),s("div",{staticClass:"truncate"},[s("h2",{staticClass:"mb-1 font-bold"},[t._v(t._s(t.statistic))]),t._v(" "),s("span",[t._v(t._s(t.statisticTitle))]),t._v(" "),s("br"),t._v(" "),t.link?s("router-link",{attrs:{to:t.link}},[s("vs-button",{staticClass:"mt-3",attrs:{size:"small",color:t.color,type:"border"}},[t._v(t._s(t.linkLabel))])],1):t._e()],1)],1)])])}),[],!1,null,null,null).exports},data:function(){return{loading_stats:!0,stats:{total_users:0,new_contacts:0,total_pages:0},modules:[]}},mounted:function(){this.modules=Object(i.b)(),this.getDashboardData()},methods:{getComponentName:function(t){try{return a("rpnf")("./".concat(t,"/resources/js/src/views/admin/Dashboard")).default}catch(t){}},getDashboardData:function(){var t,e=this;return(t=n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading_stats=!0,t.prev=1,t.next=4,e.$http.get("/api/admin/dashboard-data");case 4:a=t.sent,e.stats=a.data.data,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.errorNotification("Something went wrong!! Please retry");case 11:return t.prev=11,e.loading_stats=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})),function(){var e=this,a=arguments;return new Promise((function(s,n){var i=t.apply(e,a);function r(t){l(i,s,n,r,o,"next",t)}function o(t){l(i,s,n,r,o,"throw",t)}r(void 0)}))})()}}},u=Object(c.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._l(t.modules,(function(e){return a("div",[a(t.getComponentName(e),{tag:"component"})],1)})),t._v(" "),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full mb-4 sm:w-1/4"},[a("statistics-card-line",{attrs:{icon:"UsersIcon",statistic:t.stats.total_users,iconRight:!0,loading:t.loading_stats,link:"/admin/user-management",statisticTitle:"Total Users",color:"success"}})],1),t._v(" "),a("div",{staticClass:"vx-col w-full mb-4 sm:w-1/4"},[a("statistics-card-line",{attrs:{icon:"MessageSquareIcon",statistic:t.stats.new_contacts,iconRight:!0,loading:t.loading_stats,link:"/admin/contact-inquiries",statisticTitle:"New Contact Inquiries"}})],1),t._v(" "),t.modules.includes("pages")?a("div",{staticClass:"vx-col w-full mb-4 sm:w-1/4"},[a("statistics-card-line",{attrs:{icon:"LayoutIcon",color:"danger",loading:t.loading_stats,statistic:t.stats.total_pages,iconRight:!0,statisticTitle:"Total Pages",link:"/admin/page",linkLabel:"Add New"}})],1):t._e()])],2)}),[],!1,null,null,null);e.default=u.exports},rpnf:function(t,e){function a(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return[]},a.resolve=a,t.exports=a,a.id="rpnf"}}]);