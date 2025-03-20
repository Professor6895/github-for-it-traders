(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+/GB":function(e,t,a){"use strict";var r=a("EUZL"),s=a.n(r),i={props:{onSuccess:{type:Function,required:!0}},data:function(){return{excelData:{header:null,results:null,meta:null}}},methods:{generateData:function(e){var t=e.header,a=e.results,r=e.meta;this.excelData.header=t,this.excelData.results=a,this.excelData.meta=r,this.onSuccess&&this.onSuccess(this.excelData)},getHeaderRow:function(e){var t,a=[],r=s.a.utils.decode_range(e["!ref"]),i=r.s.r;for(t=r.s.c;t<=r.e.c;++t){var n=e[s.a.utils.encode_cell({c:t,r:i})],o="UNKNOWN "+t;n&&n.t&&(o=s.a.utils.format_cell(n)),a.push(o)}return a},handleDragover:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},handleDrop:function(e){e.stopPropagation(),e.preventDefault();var t=e.dataTransfer.files;if(1===t.length){var a=t[0];if(!this.isExcel(a))return this.$vs.notify({title:"Login Attempt",text:"Only supports upload .xlsx, .xls, .csv suffix files",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1;this.uploadFile(a)}else this.$vs.notify({title:"Login Attempt",text:"Only support uploading one file!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"})},readerData:function(e){var t=this;return new Promise((function(a){var r=new FileReader;r.onload=function(e){var r=e.target.result,i=s.a.read(r,{type:"array"}),n=i.SheetNames[0],o=i.Sheets[n],l=t.getHeaderRow(o),c=s.a.utils.sheet_to_json(o),d={sheetName:n};t.generateData({header:l,results:c,meta:d}),a()},r.readAsArrayBuffer(e)}))},handleClick:function(e){var t=e.target.files[0];t&&this.uploadFile(t)},isExcel:function(e){return/\.(xlsx|xls|csv)$/.test(e.name)},uploadFile:function(e){this.$refs.fileInput.value=null,this.readerData(e)}}},n=a("KHd+"),o=Object(n.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"excel-import"},[a("input",{ref:"fileInput",staticClass:"hidden",attrs:{type:"file",accept:".xlsx, .xls"},on:{change:e.handleClick}}),e._v(" "),a("div",{staticClass:"px-8 py-5 cursor-pointer text-center border-2 border-dashed d-theme-border-grey-light d-theme-dark-bg text-xl",on:{click:function(t){return e.$refs.fileInput.click()},drop:e.handleDrop,dragover:e.handleDragover,dragenter:e.handleDragover}},[a("feather-icon",{staticClass:"block",attrs:{icon:"UploadCloudIcon",svgClasses:"h-16 w-16 stroke-current text-grey"}}),e._v(" "),a("span",[e._v("Drop Excel File or ")]),e._v(" "),a("span",{staticClass:"font-medium text-primary",on:{click:function(t){return t.stopPropagation(),e.$refs.fileInput.click()}}},[e._v("Browse")])],1)])}),[],!1,null,null,null);t.a=o.exports},0:function(e,t){},"0VA/":function(e,t,a){"use strict";a.r(t);var r=a("o0o1"),s=a.n(r),i=a("+/GB"),n=a("LvDl"),o=a.n(n);function l(e,t,a,r,s,i,n){try{var o=e[i](n),l=o.value}catch(e){return void a(e)}o.done?t(l):Promise.resolve(l).then(r,s)}function c(e){return function(){var t=this,a=arguments;return new Promise((function(r,s){var i=e.apply(t,a);function n(e){l(i,r,s,n,o,"next",e)}function o(e){l(i,r,s,n,o,"throw",e)}n(void 0)}))}}var d={components:{ImportExcel:i.a},data:function(){return{help_popup:!1,importing:!1,import_progress:0,tableData:[],validated:!1,validation:{requiredHeaders:["name","sku","description","price","categories","quantity"],headerDifferences:[]},header:[],sheetName:"",server_side_validated:!1,server_side_validation_messages:[],server_side_error_popup:!1,import_files:[],product_images_popup:!1}},mounted:function(){this.fetchImportImages()},methods:{fetchImportImages:function(){var e=this;return c(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.get("/api/admin/data-import/product/get-import-images");case 3:a=t.sent,e.import_files=a.data,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},loadDataInTable:function(e){var t=e.results,a=e.header,r=e.meta;this.header=a,this.tableData=t,this.sheetName=r.sheetName,this.validation.headerDifferences=o.a.difference(this.validation.requiredHeaders,this.header),this.server_side_validation_messages=[],this.server_side_validated=!1,this.validated=!1},resetComponenet:function(){this.header=[],this.tableData=[],this.sheetName="",this.validated=!1,this.importing=!1,this.import_progress=0},importProducts:function(){var e=this;return c(s.a.mark((function t(){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.importing=!0,a={onUploadProgress:function(t){var a=Math.floor(100*t.loaded/t.total);e.import_progress=a-5}},t.next=5,e.$http.post("/api/admin/data-import/product/import-products",{products:e.tableData},a);case 5:(r=t.sent).data.success&&e.successNotification(r.data.message),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e.errorNotification("Something went wrong while importing!! Please recheck the data and try again");case 12:return t.prev=12,e.import_progress=100,e.resetComponenet(),t.finish(12);case 16:case"end":return t.stop()}}),t,null,[[0,9,12,16]])})))()},validateProducts:function(){var e=this;return c(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.$vs.loading({container:"#loading--container"}),t.next=4,e.$http.post("/api/admin/data-import/product/validate-products",{products:e.tableData});case 4:a=t.sent,e.server_side_validated=a.data.validated,e.server_side_validation_messages=a.data.responses,t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:return t.prev=11,e.$vs.loading.close("#loading--container > .con-vs-loading"),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,9,11,14]])})))()},uploadImageArchive:function(){var e=this;return c(s.a.mark((function t(){var a,r,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((a=e.$refs.images_archive_file.files).length){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,e.$vs.loading({container:"#loading--container"}),(r=new FormData).append("file",a[0]),t.next=9,e.$http.post("/api/admin/data-import/product/extract-images",r);case 9:(i=t.sent).data.success&&(e.successNotification(i.data.message),e.fetchImportImages()),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),console.log(t.t0);case 16:return t.prev=16,e.$vs.loading.close("#loading--container > .con-vs-loading"),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[3,13,16,19]])})))()}},watch:{"validation.headerDifferences":function(e){e.length?this.validated=!1:this.validated=!0}}},u=a("KHd+"),v=Object(u.a)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vs-popup",{attrs:{title:"Product Import Facts",active:e.help_popup},on:{"update:active":function(t){e.help_popup=t}}},[a("h5",[e._v("Excel file must contain following headers.")]),e._v(" "),a("div",{staticClass:"px-3 mt-4 mb-4"},e._l(e.validation.requiredHeaders,(function(t){return a("p",{key:"help-"+t,staticClass:"mb-1"},[a("vs-icon",{attrs:{icon:"chevron_right"}}),e._v(" \n        "),a("strong",[e._v(e._s(t))])],1)})),0)]),e._v(" "),a("vs-popup",{staticClass:"popup-xl",attrs:{title:"Import Images",active:e.product_images_popup},on:{"update:active":function(t){e.product_images_popup=t}}},[a("div",{staticClass:"vx-row"},e._l(e.import_files,(function(t,r){return a("div",{key:"import-image-"+r,staticClass:"vx-col md:w-1/4 mb-4 text-center"},[a("img",{staticClass:"w-full",staticStyle:{border:"2px solid #DDD"},attrs:{src:"/import_images/"+t.filename+"."+t.extension,alt:""}}),e._v("\n        "+e._s(t.filename+"."+t.extension)+"\n      ")])})),0)]),e._v(" "),a("vs-popup",{staticClass:"popup-xl",attrs:{title:"Server side validation errors",active:e.server_side_error_popup},on:{"update:active":function(t){e.server_side_error_popup=t}}},[a("div",{staticClass:"px-3 mt-4 mb-4"},e._l(e.server_side_validation_messages,(function(t,r){return a("div",{key:"server-validation-"+r,staticClass:"mb-3"},[a("h3",{staticClass:"mb-2"},[e._v(e._s(r))]),e._v(" "),a("ul",{staticClass:"ml-4"},e._l(t,(function(t){return a("li",[a("vs-icon",{attrs:{icon:"chevron_right"}}),e._v("\n             "+e._s(t)+"\n          ")],1)})),0)])})),0)]),e._v(" "),a("div",{staticClass:"vx-row vs-con-loading__container",attrs:{id:"loading--container"}},[a("div",{staticClass:"vx-col w-full"},[a("vx-card",{staticClass:"mb-4"},[a("h3",[e._v("Import Prooduct Images")]),e._v(" "),a("div",{staticClass:"vx-row mt-4"},[a("div",{staticClass:"vx-col w-1/2"},[a("div",{staticClass:"text-center"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.uploadImageArchive.apply(null,arguments)}}},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"size:10024",expression:"'size:10024'"}],ref:"images_archive_file",attrs:{required:"",type:"file",name:"thumbnail"}}),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),a("button",{staticClass:"vs-component vs-button vs-button-primary vs-button-filled",attrs:{type:"submit"}},[e._v("Upload Images Archive File")])]),e._v(" "),a("p",{staticClass:"text-warning mt-4"},[e._v("Uploading archive file will replace previously uploaded zip file on server.")])])]),e._v(" "),a("div",{staticClass:"vx-col w-1/2 text-center"},[a("h3",{staticClass:"mt-4"},[e._v("Current Images")]),e._v(" "),a("h1",[e._v(e._s(e.import_files.length))]),e._v(" "),a("br"),e._v(" "),a("vs-button",{on:{click:function(t){e.product_images_popup=!0}}},[e._v("View Images")])],1)])]),e._v(" "),a("vx-card",[a("h3",[e._v("\n          Products Import\n          "),a("vs-icon",{staticClass:"cursor-pointer",attrs:{icon:"help",size:"small"},on:{click:function(t){e.help_popup=!0}}})],1),e._v(" "),e.importing?a("div",[a("div",{staticClass:"text-center mt-5"},[a("h4",[e._v("Please wait while importing products.")]),e._v(" "),a("vs-progress",{attrs:{height:12,percent:e.import_progress,color:"success"}},[e._v("success")]),e._v(" "),a("p",[e._v(e._s(e.import_progress)+"% Completed.")])],1)]):a("div",[a("div",{staticClass:"mb-8 mt-4"},[a("import-excel",{attrs:{onSuccess:e.loadDataInTable}})],1),e._v(" "),e.validation.headerDifferences.length?a("vs-alert",{staticClass:"h-auto",attrs:{color:"danger"}},[e._l(e.validation.headerDifferences,(function(t){return a("p",{key:"error"+t,staticClass:"mb-1"},[a("vs-icon",{attrs:{icon:"error_outline"}}),e._v(" \n              "),a("strong",[e._v(e._s(t))]),e._v(" field is missing.\n            ")],1)})),e._v(" "),a("p",[e._v("NOTE: Please review the uploaded file and make sure all the headers are correct.")])],2):e._e(),e._v(" "),e.validated?a("vs-alert",{staticStyle:{height:"40px !important"},attrs:{color:"success",icon:"thumb_up_alt"}},[a("span",[e._v("All the headers are correct. Review the data and start importing.")])]):e._e(),e._v(" "),Object.keys(e.server_side_validation_messages).length?a("vs-alert",{staticClass:"h-auto",attrs:{color:"danger",icon:"thumb_down_alt"}},[a("span",[e._v("Server side product validation failed.  ")]),e._v(" "),a("span",{staticStyle:{cursor:"pointer"},on:{click:function(t){e.server_side_error_popup=!0}}},[e._v("Click here to peek the validation results.")])]):e._e(),e._v(" "),e.server_side_validated?a("vs-alert",{staticClass:"h-auto mt-3",attrs:{color:"success",icon:"thumb_up_alt"}},[a("span",[e._v("Server side product validation passed. Now you may proceed to import the products.")])]):e._e(),e._v(" "),e.tableData.length&&e.header.length?a("vs-table",{attrs:{stripe:"",pagination:"","max-items":20,search:"",data:e.tableData},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.data;return e._l(r,(function(t,s){return a("vs-tr",{key:s,attrs:{data:t}},e._l(e.header,(function(t,i){return a("vs-td",{key:""+t+i},[e._v(e._s("string"==typeof r[s][t]?r[s][t].substring(0,100):r[s][t]))])})),1)}))}}],null,!1,299072593)},[a("template",{slot:"header"},[a("h4",[e._v(e._s(e.sheetName))])]),e._v(" "),a("template",{slot:"thead"},e._l(e.header,(function(t){return a("vs-th",{key:t,attrs:{"sort-key":t}},[e._v(e._s(t))])})),1)],2):e._e(),e._v(" "),e.validated&&!e.server_side_validated?a("vs-button",{on:{click:e.validateProducts}},[e._v("Validate Uploaded File")]):e._e(),e._v(" "),e.validated&&e.server_side_validated?a("vs-button",{on:{click:e.importProducts}},[e._v("Start Import")]):e._e()],1)])],1)])],1)}),[],!1,null,null,null);t.default=v.exports},1:function(e,t){},2:function(e,t){},Ivpn:function(e,t,a){var r={"./core/ImportUsers":"XmsB","./core/ImportUsers.vue":"XmsB","./ecommerce/ImportProducts":"0VA/","./ecommerce/ImportProducts.vue":"0VA/","./musics/ImportArtists":"yfNK","./musics/ImportArtists.vue":"yfNK"};function s(e){var t=i(e);return a(t)}function i(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=i,e.exports=s,s.id="Ivpn"},XmsB:function(e,t,a){"use strict";a.r(t);var r=a("o0o1"),s=a.n(r),i=a("+/GB"),n=a("LvDl"),o=a.n(n);function l(e,t,a,r,s,i,n){try{var o=e[i](n),l=o.value}catch(e){return void a(e)}o.done?t(l):Promise.resolve(l).then(r,s)}var c={components:{ImportExcel:i.a},data:function(){return{help_popup:!1,importing:!1,import_progress:0,tableData:[],validated:!1,validation:{requiredHeaders:["first_name","middle_name","last_name","contact_number","district","province","municipality","ward_no","locality","gender","dob_bs","ethnicity","religion","father_name","father_mobile_number","mother_name","mother_mobile_number"],headerDifferences:[]},header:[],sheetName:""}},methods:{loadDataInTable:function(e){var t=e.results,a=e.header,r=e.meta;this.header=a,this.tableData=t,this.sheetName=r.sheetName,this.validation.headerDifferences=o.a.difference(this.validation.requiredHeaders,this.header)},resetComponenet:function(){this.header=[],this.tableData=[],this.sheetName="",this.validated=!1,this.importing=!1,this.import_progress=0},importStudents:function(){var e,t=this;return(e=s.a.mark((function e(){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.importing=!0,a={onUploadProgress:function(e){var a=Math.floor(100*e.loaded/e.total);t.import_progress=a-5}},e.next=5,t.$http.post("/api/admin/data-import/students",{students:t.tableData},a);case 5:(r=e.sent).data.success&&t.successNotification(r.data.message),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.errorNotification("Something went wrong while importing!! Please recheck the data and try again");case 12:return e.prev=12,t.import_progress=100,t.resetComponenet(),e.finish(12);case 16:case"end":return e.stop()}}),e,null,[[0,9,12,16]])})),function(){var t=this,a=arguments;return new Promise((function(r,s){var i=e.apply(t,a);function n(e){l(i,r,s,n,o,"next",e)}function o(e){l(i,r,s,n,o,"throw",e)}n(void 0)}))})()}},watch:{"validation.headerDifferences":function(e){e.length?this.validated=!1:this.validated=!0}}},d=a("KHd+"),u=Object(d.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vs-popup",{attrs:{title:"Student Import Facts",active:e.help_popup},on:{"update:active":function(t){e.help_popup=t}}},[a("h5",[e._v("Excel file must contain following headers.")]),e._v(" "),a("div",{staticClass:"px-3 mt-4 mb-4"},e._l(e.validation.requiredHeaders,(function(t){return a("p",{key:"help-"+t,staticClass:"mb-1"},[a("vs-icon",{attrs:{icon:"chevron_right"}}),e._v(" \n        "),a("strong",[e._v(e._s(t))])],1)})),0),e._v(" "),a("p",{staticClass:"text-warning"},[e._v("\n      You must include above listed headers in excel file. You may leave field empty if there is no data e.g\n      "),a("strong",[e._v("middle_name")])])]),e._v(" "),a("vx-card",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[a("h3",[e._v("\n      Students Data Import\n      "),a("vs-icon",{staticClass:"cursor-pointer",attrs:{icon:"help",size:"small"},on:{click:function(t){e.help_popup=!0}}})],1),e._v(" "),e.importing?a("div",[a("div",{staticClass:"text-center mt-5"},[a("h4",[e._v("Please wait while importing students.")]),e._v(" "),a("vs-progress",{attrs:{height:12,percent:e.import_progress,color:"success"}},[e._v("success")]),e._v(" "),a("p",[e._v(e._s(e.import_progress)+"% Completed.")])],1)]):a("div",[a("div",{staticClass:"mb-8 mt-4"},[a("import-excel",{attrs:{onSuccess:e.loadDataInTable}})],1),e._v(" "),e.validation.headerDifferences.length?a("vs-alert",{staticClass:"h-auto",attrs:{color:"danger"}},[e._l(e.validation.headerDifferences,(function(t){return a("p",{key:"error"+t,staticClass:"mb-1"},[a("vs-icon",{attrs:{icon:"error_outline"}}),e._v(" \n          "),a("strong",[e._v(e._s(t))]),e._v(" field is missing.\n        ")],1)})),e._v(" "),a("p",[e._v("NOTE: Please review the uploaded file and make sure all the headers are correct.")])],2):e._e(),e._v(" "),e.validated?a("vs-alert",{staticStyle:{height:"40px !important"},attrs:{color:"success",icon:"thumb_up_alt"}},[a("span",[e._v("All the headers are correct. Review the data and start importing.")])]):e._e(),e._v(" "),e.tableData.length&&e.header.length?a("vs-table",{attrs:{stripe:"",pagination:"","max-items":20,search:"",data:e.tableData},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.data;return e._l(r,(function(t,s){return a("vs-tr",{key:s,attrs:{data:t}},e._l(e.header,(function(t,i){return a("vs-td",{key:""+t+i},[e._v(e._s(r[s][t]))])})),1)}))}}],null,!1,3156374335)},[a("template",{slot:"header"},[a("h4",[e._v(e._s(e.sheetName))])]),e._v(" "),a("template",{slot:"thead"},e._l(e.header,(function(t){return a("vs-th",{key:t,attrs:{"sort-key":t}},[e._v(e._s(t))])})),1)],2):e._e(),e._v(" "),a("vs-button",{attrs:{size:"small",disabled:!e.validated},on:{click:e.importStudents}},[e._v("Start Import")])],1)])],1)}),[],!1,null,null,null);t.default=u.exports},jWRg:function(e,t,a){"use strict";a.r(t);var r=a("o0o1"),s=a.n(r);function i(e,t,a,r,s,i,n){try{var o=e[i](n),l=o.value}catch(e){return void a(e)}o.done?t(l):Promise.resolve(l).then(r,s)}var n={data:function(){return{active_module:{},import_modules:[]}},mounted:function(){this.getImportModules()},methods:{getImportModules:function(){var e,t=this;return(e=s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/api/admin/get-import-modules");case 2:a=e.sent,t.import_modules=a.data.data;case 4:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(r,s){var n=e.apply(t,a);function o(e){i(n,r,s,o,l,"next",e)}function l(e){i(n,r,s,o,l,"throw",e)}o(void 0)}))})()},getComponentName:function(){try{if(Object.keys(this.active_module).length)return a("Ivpn")("./".concat(this.active_module.module,"/").concat(this.active_module.component)).default}catch(e){}}}},o=a("KHd+"),l=Object(o.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vx-card",[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/2"},[a("vs-select",{staticClass:"w-full",attrs:{label:"Import Type",name:"active_module"},model:{value:e.active_module,callback:function(t){e.active_module=t},expression:"active_module"}},e._l(e.import_modules,(function(e){return a("vs-select-item",{key:e.slug,attrs:{value:e,text:e.name}})})),1)],1)])]),e._v(" "),Object.keys(e.active_module).length?a("div",[a(e.getComponentName(),{tag:"component",staticClass:"mt-3"})],1):e._e()],1)}),[],!1,null,null,null);t.default=l.exports},yfNK:function(e,t,a){"use strict";a.r(t);var r=a("o0o1"),s=a.n(r),i=a("+/GB"),n=a("LvDl"),o=a.n(n);function l(e,t,a,r,s,i,n){try{var o=e[i](n),l=o.value}catch(e){return void a(e)}o.done?t(l):Promise.resolve(l).then(r,s)}var c={components:{ImportExcel:i.a},data:function(){return{help_popup:!1,importing:!1,import_progress:0,tableData:[],validated:!1,validation:{requiredHeaders:["first_name","middle_name","last_name","contact_number","district","province","municipality","ward_no","locality","gender","dob_bs","ethnicity","religion","father_name","father_mobile_number","mother_name","mother_mobile_number"],headerDifferences:[]},header:[],sheetName:""}},methods:{loadDataInTable:function(e){var t=e.results,a=e.header,r=e.meta;this.header=a,this.tableData=t,this.sheetName=r.sheetName,this.validation.headerDifferences=o.a.difference(this.validation.requiredHeaders,this.header)},resetComponenet:function(){this.header=[],this.tableData=[],this.sheetName="",this.validated=!1,this.importing=!1,this.import_progress=0},importStudents:function(){var e,t=this;return(e=s.a.mark((function e(){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.importing=!0,a={onUploadProgress:function(e){var a=Math.floor(100*e.loaded/e.total);t.import_progress=a-5}},e.next=5,t.$http.post("/api/admin/data-import/students",{students:t.tableData},a);case 5:(r=e.sent).data.success&&t.successNotification(r.data.message),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.errorNotification("Something went wrong while importing!! Please recheck the data and try again");case 12:return e.prev=12,t.import_progress=100,t.resetComponenet(),e.finish(12);case 16:case"end":return e.stop()}}),e,null,[[0,9,12,16]])})),function(){var t=this,a=arguments;return new Promise((function(r,s){var i=e.apply(t,a);function n(e){l(i,r,s,n,o,"next",e)}function o(e){l(i,r,s,n,o,"throw",e)}n(void 0)}))})()}},watch:{"validation.headerDifferences":function(e){e.length?this.validated=!1:this.validated=!0}}},d=a("KHd+"),u=Object(d.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vs-popup",{attrs:{title:"Student Import Facts",active:e.help_popup},on:{"update:active":function(t){e.help_popup=t}}},[a("h5",[e._v("Excel file must contain following headers.")]),e._v(" "),a("div",{staticClass:"px-3 mt-4 mb-4"},e._l(e.validation.requiredHeaders,(function(t){return a("p",{key:"help-"+t,staticClass:"mb-1"},[a("vs-icon",{attrs:{icon:"chevron_right"}}),e._v(" \n        "),a("strong",[e._v(e._s(t))])],1)})),0),e._v(" "),a("p",{staticClass:"text-warning"},[e._v("\n      You must include above listed headers in excel file. You may leave field empty if there is no data e.g\n      "),a("strong",[e._v("middle_name")])])]),e._v(" "),a("vx-card",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[a("h3",[e._v("\n      Students Data Import\n      "),a("vs-icon",{staticClass:"cursor-pointer",attrs:{icon:"help",size:"small"},on:{click:function(t){e.help_popup=!0}}})],1),e._v(" "),e.importing?a("div",[a("div",{staticClass:"text-center mt-5"},[a("h4",[e._v("Please wait while importing students.")]),e._v(" "),a("vs-progress",{attrs:{height:12,percent:e.import_progress,color:"success"}},[e._v("success")]),e._v(" "),a("p",[e._v(e._s(e.import_progress)+"% Completed.")])],1)]):a("div",[a("div",{staticClass:"mb-8 mt-4"},[a("import-excel",{attrs:{onSuccess:e.loadDataInTable}})],1),e._v(" "),e.validation.headerDifferences.length?a("vs-alert",{staticClass:"h-auto",attrs:{color:"danger"}},[e._l(e.validation.headerDifferences,(function(t){return a("p",{key:"error"+t,staticClass:"mb-1"},[a("vs-icon",{attrs:{icon:"error_outline"}}),e._v(" \n          "),a("strong",[e._v(e._s(t))]),e._v(" field is missing.\n        ")],1)})),e._v(" "),a("p",[e._v("NOTE: Please review the uploaded file and make sure all the headers are correct.")])],2):e._e(),e._v(" "),e.validated?a("vs-alert",{staticStyle:{height:"40px !important"},attrs:{color:"success",icon:"thumb_up_alt"}},[a("span",[e._v("All the headers are correct. Review the data and start importing.")])]):e._e(),e._v(" "),e.tableData.length&&e.header.length?a("vs-table",{attrs:{stripe:"",pagination:"","max-items":20,search:"",data:e.tableData},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.data;return e._l(r,(function(t,s){return a("vs-tr",{key:s,attrs:{data:t}},e._l(e.header,(function(t,i){return a("vs-td",{key:""+t+i},[e._v(e._s(r[s][t]))])})),1)}))}}],null,!1,3156374335)},[a("template",{slot:"header"},[a("h4",[e._v(e._s(e.sheetName))])]),e._v(" "),a("template",{slot:"thead"},e._l(e.header,(function(t){return a("vs-th",{key:t,attrs:{"sort-key":t}},[e._v(e._s(t))])})),1)],2):e._e(),e._v(" "),a("vs-button",{attrs:{size:"small",disabled:!e.validated},on:{click:e.importStudents}},[e._v("Start Import")])],1)])],1)}),[],!1,null,null,null);t.default=u.exports}}]);