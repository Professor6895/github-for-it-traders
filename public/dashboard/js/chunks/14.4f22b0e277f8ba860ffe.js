(window.webpackJsonp=window.webpackJsonp||[]).push([[14,17],{RxFF:function(t,e){t.exports="/images/loader.gif?03777e3e9736a04cfe5890dfa0cee1b6"},XvtT:function(t,e,a){"use strict";a("a62k")},YA4P:function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),n=a.n(s);function r(t,e,a,s,n,r,o){try{var i=t[r](o),c=i.value}catch(t){return void a(t)}i.done?e(c):Promise.resolve(c).then(s,n)}function o(t){return function(){var e=this,a=arguments;return new Promise((function(s,n){var o=t.apply(e,a);function i(t){r(o,s,n,i,c,"next",t)}function c(t){r(o,s,n,i,c,"throw",t)}i(void 0)}))}}var i={data:function(){return{loading:!0,blogs:[]}},components:{PageLoader:a("mtLw").default},mounted:function(){this.fetchBlogs()},methods:{fetchBlogs:function(){var t=this;return o(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$http.get("/api/admin/blogs");case 4:a=e.sent,t.blogs=a.data.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.errorNotification("Something went wrong!! Please retry");case 11:return e.prev=11,t.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()},deleteBlog:function(t){var e,a=this;this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Are you sure you want to delete blog?",accept:(e=o(n.a.mark((function e(){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.$http.delete("/api/admin/blogs/".concat(t));case 2:(s=e.sent).data.success?(a.successNotification(s.data.message),a.fetchBlogs()):a.errorNotification(s.data.message);case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})})},toggleBlogStatus:function(t){var e,a=this;this.$vs.dialog({type:"confirm",color:"primary",title:"Confirm",text:"Are you sure you want to change the blog status?",accept:(e=o(n.a.mark((function e(){var s,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={_method:"PATCH"},e.next=3,a.$http.post("/api/admin/blogs/".concat(t.id,"/toggle-status"),s);case 3:(r=e.sent).data.success?(a.successNotification(r.data.message),t.status=r.data.status):a.errorNotification(r.data.message);case 5:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})})},toggleBlogFeature:function(t){var e,a=this;this.$vs.dialog({type:"confirm",color:"primary",title:"Confirm",text:"Are you sure you want to set the blog as ".concat(t.is_featured?"not featured":"featured","?"),accept:(e=o(n.a.mark((function e(){var s,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={_method:"PATCH"},e.next=3,a.$http.post("/api/admin/blogs/".concat(t.id,"/toggle-feature"),s);case 3:(r=e.sent).data.success?(a.successNotification(r.data.message),t.is_featured=r.data.is_featured):a.errorNotification(r.data.message);case 5:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})})}}},c=a("KHd+"),l=Object(c.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading?a("pageLoader"):a("vx-card",{staticClass:"card-padding-5"},[a("vs-table",{attrs:{search:"",stripe:"",data:t.blogs,"max-items":"40",pagination:""},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return t._l(s,(function(e,s){return a("vs-tr",{key:s,attrs:{data:e}},[a("vs-td",[a("i",[t._v("#"+t._s(e.id))])]),t._v(" "),a("vs-td",[a("img",{staticClass:"table--image",attrs:{src:e.thumbnail_image.thumb,alt:""}})]),t._v(" "),a("vs-td",[t._v(t._s(e.title))]),t._v(" "),a("vs-td",[t._v(t._s(e.author))]),t._v(" "),a("vs-td",[a("div",{on:{click:function(a){return t.toggleBlogFeature(e)}}},[a("vs-icon",{staticClass:"icon-large",class:e.is_featured?"text-success":"text-danger",attrs:{icon:e.is_featured?"toggle_on":"toggle_off"}})],1)]),t._v(" "),a("vs-td",[a("div",{on:{click:function(a){return t.toggleBlogStatus(e)}}},[a("vs-icon",{staticClass:"icon-large",class:e.status?"text-success":"text-danger",attrs:{icon:e.status?"toggle_on":"toggle_off"}})],1)]),t._v(" "),a("vs-td",[a("small",[t._v(t._s(t._f("date_format")(e.publish_date,"MMMM Do YYYY, h:mm a")))])]),t._v(" "),a("vs-td",[a("router-link",{attrs:{to:{name:"admin-blog-form",params:{id:e.id}}}},[a("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"warning",type:"filled",size:"small",icon:"create"}})],1),t._v(" "),a("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",size:"small",color:"danger",type:"filled",icon:"delete"},on:{click:function(a){return t.deleteBlog(e.id)}}})],1)],1)}))}}])},[a("template",{slot:"header"},[a("strong",[t._v("Total :")]),t._v("\n         "+t._s(t.blogs.length)+"    \n        "),a("router-link",{attrs:{to:{name:"admin-blog-form"}}},[a("vs-button",{attrs:{color:"primary",size:"small",type:"border"}},[t._v("Add Blogs")])],1)],1),t._v(" "),a("template",{slot:"thead"},[a("vs-th",{attrs:{"sort-key":"email"}},[t._v("SN")]),t._v(" "),a("vs-th",[t._v("Thumbnail")]),t._v(" "),a("vs-th",[t._v("Title")]),t._v(" "),a("vs-th",[t._v("Author")]),t._v(" "),a("vs-th",[t._v("Featured")]),t._v(" "),a("vs-th",[t._v("Status")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"email"}},[t._v("Publish Date")]),t._v(" "),a("vs-th",[t._v("Actions")])],1)],2)],1)],1)}),[],!1,null,null,null);e.default=l.exports},a62k:function(t,e,a){var s=a("zluA");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,n);s.locals&&(t.exports=s.locals)},mtLw:function(t,e,a){"use strict";a.r(e);var s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("img",{staticClass:"loader-icon",attrs:{src:a("RxFF"),alt:"",width:"120px"}})])}],n=(a("XvtT"),a("KHd+")),r=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),s,!1,null,"1f857cd5",null);e.default=r.exports},zluA:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"[dir] .loader-icon[data-v-1f857cd5]{margin-top:120px;margin-bottom:120px}",""])}}]);