(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"KI/P":function(t,e,s){"use strict";s("O6NC")},O6NC:function(t,e,s){var n=s("Z6J3");"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(n,a);n.locals&&(t.exports=n.locals)},XH0y:function(t,e,s){var n,a;!function(i,o){"use strict";void 0===(a="function"==typeof(n=function(){var t=function(){},e="undefined"!=typeof window&&void 0!==window.navigator&&/Trident\/|MSIE /.test(window.navigator.userAgent),s=["trace","debug","info","warn","error"];function n(t,e){var s=t[e];if("function"==typeof s.bind)return s.bind(t);try{return Function.prototype.bind.call(s,t)}catch(e){return function(){return Function.prototype.apply.apply(s,[t,arguments])}}}function a(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function i(s){return"debug"===s&&(s="log"),"undefined"!=typeof console&&("trace"===s&&e?a:void 0!==console[s]?n(console,s):void 0!==console.log?n(console,"log"):t)}function o(e,n){for(var a=0;a<s.length;a++){var i=s[a];this[i]=a<e?t:this.methodFactory(i,e,n)}this.log=this.debug}function r(t,e,s){return function(){"undefined"!=typeof console&&(o.call(this,e,s),this[t].apply(this,arguments))}}function c(t,e,s){return i(t)||r.apply(this,arguments)}function l(t,e,n){var a,i=this,r="loglevel";function l(){var t;if("undefined"!=typeof window&&r){try{t=window.localStorage[r]}catch(t){}if(void 0===t)try{var e=window.document.cookie,s=e.indexOf(encodeURIComponent(r)+"=");-1!==s&&(t=/^([^;]+)/.exec(e.slice(s))[1])}catch(t){}return void 0===i.levels[t]&&(t=void 0),t}}"string"==typeof t?r+=":"+t:"symbol"==typeof t&&(r=void 0),i.name=t,i.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},i.methodFactory=n||c,i.getLevel=function(){return a},i.setLevel=function(e,n){if("string"==typeof e&&void 0!==i.levels[e.toUpperCase()]&&(e=i.levels[e.toUpperCase()]),!("number"==typeof e&&e>=0&&e<=i.levels.SILENT))throw"log.setLevel() called with invalid level: "+e;if(a=e,!1!==n&&function(t){var e=(s[t]||"silent").toUpperCase();if("undefined"!=typeof window&&r){try{return void(window.localStorage[r]=e)}catch(t){}try{window.document.cookie=encodeURIComponent(r)+"="+e+";"}catch(t){}}}(e),o.call(i,e,t),"undefined"==typeof console&&e<i.levels.SILENT)return"No console available for logging"},i.setDefaultLevel=function(t){l()||i.setLevel(t,!1)},i.enableAll=function(t){i.setLevel(i.levels.TRACE,t)},i.disableAll=function(t){i.setLevel(i.levels.SILENT,t)};var d=l();null==d&&(d=null==e?"WARN":e),i.setLevel(d,!1)}var d=new l,v={};d.getLogger=function(t){if("symbol"!=typeof t&&"string"!=typeof t||""===t)throw new TypeError("You must supply a name when creating a logger.");var e=v[t];return e||(e=v[t]=new l(t,d.getLevel(),d.methodFactory)),e};var u="undefined"!=typeof window?window.log:void 0;return d.noConflict=function(){return"undefined"!=typeof window&&window.log===d&&(window.log=u),d},d.getLoggers=function(){return v},d.default=d,d})?n.call(e,s,e,t):n)||(t.exports=a)}()},Z6J3:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".emi--detail-table[data-v-1beb48ac]{width:100%;border-collapse:collapse}[dir] .emi--detail-table[data-v-1beb48ac],[dir] .emi--detail-table th[data-v-1beb48ac]{border:1px solid #f8f8f8}.emi--detail-table td[data-v-1beb48ac]{min-width:200px}[dir] .emi--detail-table td[data-v-1beb48ac]{padding:13px 20px;border:1px solid #f8f8f8}[dir] .reply--area[data-v-1beb48ac]{border:1px solid #ccc;padding:20px}",""])},bpuz:function(t,e,s){"use strict";s.r(e);var n=s("o0o1"),a=s.n(n);s("XH0y");function i(t,e,s,n,a,i,o){try{var r=t[i](o),c=r.value}catch(t){return void s(t)}r.done?e(c):Promise.resolve(c).then(n,a)}function o(t){return function(){var e=this,s=arguments;return new Promise((function(n,a){var o=t.apply(e,s);function r(t){i(o,n,a,r,c,"next",t)}function c(t){i(o,n,a,r,c,"throw",t)}r(void 0)}))}}var r={data:function(){return{processing:!1,id:null,emiRequest:{bank_detail:{},product:{}}}},mounted:function(){this.id=this.$route.params.id,this.getEmiRequest()},methods:{getEmiRequest:function(){var t=this;return o(a.a.mark((function e(){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id){e.next=2;break}return e.abrupt("return");case 2:return t.$vs.loading({container:"#loading--container"}),e.prev=3,e.next=6,t.$http.get("/api/admin/emi-request/".concat(t.id,"/get-detail"));case 6:(s=e.sent).data.success&&(t.emiRequest=s.data.data),e.next=15;break;case 10:if(e.prev=10,e.t0=e.catch(3),t.errorNotification("Something went wrong! Please retry!!"),404!==e.t0.response.status){e.next=15;break}return e.abrupt("return",t.$router.push({name:"page-error-404"}));case 15:return e.prev=15,t.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[3,10,15,18]])})))()},processEmiApplication:function(){var t=this;return o(a.a.mark((function e(){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$vs.loading({container:"#loading--container"}),e.prev=1,e.next=4,t.$http.post("/api/admin/emi-request/".concat(t.id,"/process-application"));case 4:(s=e.sent).data.success&&(t.successNotification(s.data.message),t.getEmiRequest()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.errorNotification(e.t0);case 11:return e.prev=11,t.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()},approveEmiApplication:function(){var t=this;return o(a.a.mark((function e(){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$vs.loading({container:"#loading--container"}),e.prev=1,e.next=4,t.$http.post("/api/admin/emi-request/".concat(t.id,"/approve-application"));case 4:(s=e.sent).data.success&&(t.successNotification(s.data.message),t.getEmiRequest()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.errorNotification(e.t0);case 11:return e.prev=11,t.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()},completeEmiApplication:function(){var t=this;return o(a.a.mark((function e(){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$vs.loading({container:"#loading--container"}),e.prev=1,e.next=4,t.$http.post("/api/admin/emi-request/".concat(t.id,"/complete-application"));case 4:(s=e.sent).data.success&&(t.successNotification(s.data.message),t.getEmiRequest()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.errorNotification(e.t0);case 11:return e.prev=11,t.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()},declineEmiApplication:function(){var t=this;return o(a.a.mark((function e(){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$vs.loading({container:"#loading--container"}),e.prev=1,e.next=4,t.$http.post("/api/admin/emi-request/".concat(t.id,"/decline-application"));case 4:(s=e.sent).data.success&&(t.successNotification(s.data.message),t.getEmiRequest()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.errorNotification(e.t0);case 11:return e.prev=11,t.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()}}},c=(s("KI/P"),s("KHd+")),l=Object(c.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"vx-row vs-con-loading__container",attrs:{id:"loading--container"}},[s("div",{staticClass:"vx-col w-full md:w-1/2 mb-4"},[s("vx-card",{staticClass:"card-padding-5",attrs:{title:"EMI Details"}},[s("table",{staticClass:"emi--detail-table"},[s("tr",[s("th",[t._v("Product")]),t._v(" "),s("td",[t._v("\n              "+t._s(t.emiRequest.product.name)+"\n              "),t.emiRequest.product_attributes?s("span",[t._l(t.emiRequest.product_attributes,(function(e,n){return s("p",[s("strong",[t._v(t._s(n)+": ")]),t._v(t._s(e)+"\n                ")])})),t._v(" "),s("br")],2):t._e()])]),t._v(" "),s("tr",[s("th",[t._v("Down Payment")]),t._v(" "),s("td",[t._v("NPR "+t._s(t.emiRequest.down_payment)+" /-")])]),t._v(" "),s("tr",[s("th",[t._v("Finance Amount")]),t._v(" "),s("td",[t._v("NPR "+t._s(t.emiRequest.finance_amount)+" /-")])]),t._v(" "),s("tr",[s("th",[t._v("Duration in Month")]),t._v(" "),s("td",[t._v(t._s(t.emiRequest.emi_mode)+" Months")])]),t._v(" "),s("tr",[s("th",[t._v("EMI Per Month")]),t._v(" "),s("td",[t._v("NPR "+t._s(t.emiRequest.emi_per_month)+" /-")])]),t._v(" "),s("tr",[s("th",[t._v("Has Credit Card?")]),t._v(" "),s("td",{staticClass:"td vs-table--td"},[t._v("\n              "+t._s(t.emiRequest.credit_card?"Yes":"No")+"\n            ")])]),t._v(" "),s("tr",[s("th",[t._v("Bank")]),t._v(" "),s("td",{staticClass:"td vs-table--td"},[t._v("\n              "+t._s(t.emiRequest.bank_detail.name)+"\n            ")])]),t._v(" "),s("tr",[s("th",[t._v("Customer Name")]),t._v(" "),s("td",{staticClass:"td vs-table--td"},[t._v(t._s(t.emiRequest.name))])]),t._v(" "),s("tr",[s("th",[t._v("Email Address")]),t._v(" "),s("td",{staticClass:"td vs-table--td"},[t._v(t._s(t.emiRequest.email))])]),t._v(" "),s("tr",[s("th",[t._v("Contact Number")]),t._v(" "),s("td",{staticClass:"td vs-table--td"},[t._v(t._s(t.emiRequest.contact_number))])]),t._v(" "),s("tr",[s("th",[t._v("Address")]),t._v(" "),s("td",{staticClass:"td vs-table--td"},[t._v(t._s(t.emiRequest.address))])]),t._v(" "),s("tr",[s("th",[t._v("Date of Birth (AD)")]),t._v(" "),s("td",{staticClass:"td vs-table--td"},[t._v(t._s(t.emiRequest.dob_ad))])]),t._v(" "),s("tr",[s("th",[t._v("Date of Birth (BS)")]),t._v(" "),s("td",{staticClass:"td vs-table--td"},[t._v(t._s(t.emiRequest.dob_bs))])]),t._v(" "),s("tr",[s("th",[t._v("Gender")]),t._v(" "),s("td",{staticClass:"td vs-table--td"},[t._v(t._s(t.emiRequest.gender))])]),t._v(" "),t.emiRequest.credit_card?t._e():s("tbody",[s("tr",[s("th",[t._v("Residental Status")]),t._v(" "),s("td",{staticClass:"td vs-table--td"},[t._v("\n                "+t._s(t.emiRequest.residental_status)+"\n              ")])]),t._v(" "),s("tr",[s("th",[t._v("Vehicle")]),t._v(" "),s("td",{staticClass:"td vs-table--td"},[t._v(t._s(t.emiRequest.vehicle))])]),t._v(" "),s("tr",[s("th",[t._v("Occupation")]),t._v(" "),s("td",{staticClass:"td vs-table--td"},[t._v(t._s(t.emiRequest.occupation))])]),t._v(" "),s("tr",[s("th",[t._v("Number of Dependants")]),t._v(" "),s("td",{staticClass:"td vs-table--td"},[t._v("\n                "+t._s(t.emiRequest.no_of_dependents)+"\n              ")])]),t._v(" "),s("tr",[s("th",[t._v("Montly Income")]),t._v(" "),s("td",{staticClass:"td vs-table--td"},[t._v("\n                NPR "+t._s(t.emiRequest.monthly_income)+" /-\n              ")])]),t._v(" "),s("tr",[s("th",[t._v("Length of Employment")]),t._v(" "),s("td",{staticClass:"td vs-table--td"},[t._v("\n                "+t._s(t.emiRequest.length_of_employment)+"\n              ")])]),t._v(" "),s("tr",[s("th",[t._v("Application Status")]),t._v(" "),s("td",{staticClass:"td vs-table--td"},[1==t.emiRequest.status?s("strong",{staticClass:"text-warning"},[t._v("Processing")]):t._e(),t._v(" "),0==t.emiRequest.status?s("strong",{staticClass:"text-danger"},[t._v("Pending")]):t._e(),t._v(" "),2==t.emiRequest.status?s("strong",{staticClass:"text-success"},[t._v("Approved")]):t._e(),t._v(" "),3==t.emiRequest.status?s("strong",{staticClass:"text-success"},[t._v("Finished")]):t._e(),t._v(" "),4==t.emiRequest.status?s("strong",{staticClass:"text-danger"},[t._v("Declined")]):t._e()])])]),t._v(" "),s("tr",[s("th",[t._v("Actions")]),t._v(" "),s("td",[0===t.emiRequest.status?s("vs-button",{attrs:{size:"small",color:"success"},on:{click:t.processEmiApplication}},[t._v("Start Processing")]):t._e(),t._v(" "),1===t.emiRequest.status?s("vs-button",{attrs:{size:"small",color:"success"},on:{click:t.approveEmiApplication}},[t._v("Approve")]):t._e(),t._v(" "),2===t.emiRequest.status?s("vs-button",{attrs:{size:"small",color:"success"},on:{click:t.completeEmiApplication}},[t._v("Complete")]):t._e(),t._v(" "),3!=t.emiRequest.status&&4!=t.emiRequest.status?s("vs-button",{attrs:{size:"small",color:"danger"},on:{click:t.declineEmiApplication}},[t._v("Decline")]):t._e()],1)])])])],1),t._v(" "),t.emiRequest.credit_card?t._e():s("div",{staticClass:"vx-col w-full md:w-1/2"},[s("vx-card",{staticClass:"card-padding-5",attrs:{title:"User Documents"}},[s("div",{staticClass:"mb-4"},[s("h5",{staticClass:"mb-1"},[t._v("Citizenship")]),t._v(" "),s("div",{staticClass:"image-preview-container"},[s("img",{attrs:{src:t.emiRequest.citizenship_url,alt:""}})])]),t._v(" "),s("div",{staticClass:"mb-4"},[s("h5",{staticClass:"mb-1"},[t._v("Salary Certificate")]),t._v(" "),s("div",{staticClass:"image-preview-container"},[s("img",{attrs:{src:t.emiRequest.salary_certificate_url,alt:""}})])]),t._v(" "),s("div",{staticClass:"mb-4"},[s("h5",{staticClass:"mb-1"},[t._v("Passport photo")]),t._v(" "),s("div",{staticClass:"image-preview-container"},[s("img",{attrs:{src:t.emiRequest.photo_url,alt:""}})])]),t._v(" "),s("div",{staticClass:"mb-4"},[s("h5",{staticClass:"mb-1"},[t._v("Bank Statement")]),t._v(" "),s("vs-button",{staticClass:"mt-2"},[t._v("Download")])],1)])],1)])])}),[],!1,null,"1beb48ac",null);e.default=l.exports}}]);