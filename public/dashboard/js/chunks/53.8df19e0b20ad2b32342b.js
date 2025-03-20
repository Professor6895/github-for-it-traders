(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{lmsQ:function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),r=a.n(s),n=a("dL/0");function i(t,e,a,s,r,n,i){try{var c=t[n](i),o=c.value}catch(t){return void a(t)}c.done?e(o):Promise.resolve(o).then(s,r)}function c(t){return function(){var e=this,a=arguments;return new Promise((function(s,r){var n=t.apply(e,a);function c(t){i(n,s,r,c,o,"next",t)}function o(t){i(n,s,r,c,o,"throw",t)}c(void 0)}))}}var o={props:["classId"],data:function(){return{loading_attributes:!1,attributes:[],attribute:{type:"text",values:[]},attribute_popup:!1}},components:{"input-tag":a.n(n).a},mounted:function(){this.fetchClassAttributes()},methods:{fetchClassAttributes:function(){var t=this;return c(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading_attributes=!0,e.prev=1,e.next=4,t.$http.get("/api/admin/product-class/".concat(t.classId,"/attributes"));case 4:a=e.sent,t.attributes=a.data.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.errorNotification("Something went wrong while fetching attributes!! Please retry");case 11:return e.prev=11,t.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()},saveAttribute:function(){var t=this;return c(r.a.mark((function e(){var a,s,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$validator.validateAll("class-attribute");case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return t.$vs.loading({container:"#loading--container"}),e.prev=6,a={name:t.attribute.name,type:t.attribute.type,values:t.attribute.values,use_for_variant:t.attribute.use_for_variant,use_in_filter:t.attribute.use_in_filter},s="/api/admin/product-class/".concat(t.classId,"/attribute"),t.attribute.id&&(s="/api/admin/product-class/".concat(t.classId,"/attribute/").concat(t.attribute.id),a._method="PATCH"),e.next=12,t.$http.post(s,a);case 12:(n=e.sent).data.success?(t.successNotification(n.data.message),t.fetchClassAttributes(),t.attribute_popup=!1):t.errorNotification(n.data.message),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),t.errorNotification("Something went wrong! Please retry!!");case 19:return e.prev=19,t.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[6,16,19,22]])})))()},editAttribute:function(t){this.attribute=_.cloneDeep(t),this.attribute_popup=!0},deleteAttribute:function(t){var e,a=this;this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Are you sure you want to delete this attribute?",accept:(e=c(r.a.mark((function e(){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.$http.delete("/api/admin/product-class/".concat(a.classId,"/attribute/").concat(t));case 2:(s=e.sent).data.success?(a.successNotification(s.data.message),a.fetchClassAttributes()):a.errorNotification(s.data.message);case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})})}},watch:{attribute_popup:function(t){t||(this.attribute={type:"text",values:[]},this.errors.clear())}}},l=a("KHd+");function u(t,e,a,s,r,n,i){try{var c=t[n](i),o=c.value}catch(t){return void a(t)}c.done?e(o):Promise.resolve(o).then(s,r)}function v(t){return function(){var e=this,a=arguments;return new Promise((function(s,r){var n=t.apply(e,a);function i(t){u(n,s,r,i,c,"next",t)}function c(t){u(n,s,r,i,c,"throw",t)}i(void 0)}))}}var d={data:function(){return{loading:!0,classes_:[],class_popup:!1,class_:{},selected_class:{}}},components:{ProductAttributes:Object(l.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vs-popup",{staticClass:"popup-lg",attrs:{title:"Class Detail",active:t.attribute_popup},on:{"update:active":function(e){t.attribute_popup=e}}},[a("form",{attrs:{action:"","data-vv-scope":"class-attribute"}},[a("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full mb-4"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"name",label:"Attribute Name"},model:{value:t.attribute.name,callback:function(e){t.$set(t.attribute,"name",e)},expression:"attribute.name"}}),t._v(" "),a("p",[t.errors.has("class-attribute.name")?a("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("class-attribute.name")))]):t._e()])],1),t._v(" "),a("div",{staticClass:"vx-col w-full mb-4"},[a("vs-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Type",name:"type"},model:{value:t.attribute.type,callback:function(e){t.$set(t.attribute,"type",e)},expression:"attribute.type"}},t._l([{text:"Text",value:"text"},{text:"Option",value:"option"}],(function(t,e){return a("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})})),1),t._v(" "),a("p",[t.errors.has("class-attribute.type")?a("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("class-attribute.type")))]):t._e()])],1),t._v(" "),"option"==t.attribute.type?a("div",{staticClass:"vx-col w-full mb-4"},[a("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Options")]),t._v(" "),a("input-tag",{model:{value:t.attribute.values,callback:function(e){t.$set(t.attribute,"values",e)},expression:"attribute.values"}})],1):t._e(),t._v(" "),"option"==t.attribute.type?a("div",{staticClass:"vx-col w-1/2 mb-4"},[a("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Use for variant")]),t._v(" "),a("vs-switch",{attrs:{"vs-value":"1","icon-pack":"feather","vs-icon-on":"icon-check-circle","vs-icon-off":"icon-slash"},model:{value:t.attribute.use_for_variant,callback:function(e){t.$set(t.attribute,"use_for_variant",e)},expression:"attribute.use_for_variant"}},[a("span",{attrs:{slot:"on"},slot:"on"},[t._v("Yes")]),t._v(" "),a("span",{attrs:{slot:"off"},slot:"off"},[t._v("No")])])],1):t._e(),t._v(" "),"option"==t.attribute.type?a("div",{staticClass:"vx-col w-1/2 mb-4"},[a("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Use in fitler")]),t._v(" "),a("vs-switch",{attrs:{"vs-value":"1","icon-pack":"feather","vs-icon-on":"icon-check-circle","vs-icon-off":"icon-slash"},model:{value:t.attribute.use_in_filter,callback:function(e){t.$set(t.attribute,"use_in_filter",e)},expression:"attribute.use_in_filter"}},[a("span",{attrs:{slot:"on"},slot:"on"},[t._v("Yes")]),t._v(" "),a("span",{attrs:{slot:"off"},slot:"off"},[t._v("No")])])],1):t._e()]),t._v(" "),a("vs-button",{staticClass:"mr-3 mt-5",on:{click:t.saveAttribute}},[t._v("Submit")])],1)])]),t._v(" "),a("vs-table",{attrs:{data:t.attributes,"max-items":"40",pagination:""},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return t._l(s,(function(e,s){return a("vs-tr",{key:s,attrs:{data:e}},[a("vs-td",[t._v(t._s(e.name))]),t._v(" "),a("vs-td",[t._v(t._s(e.values?e.values.join(", "):"--"))]),t._v(" "),a("vs-td",[a("vs-icon",{staticClass:"icon-large",class:e.use_for_variant?"text-success":"text-danger",attrs:{icon:e.use_for_variant?"toggle_on":"toggle_off"}})],1),t._v(" "),a("vs-td",[a("vs-icon",{staticClass:"icon-large",class:e.use_in_filter?"text-success":"text-danger",attrs:{icon:e.use_in_filter?"toggle_on":"toggle_off"}})],1),t._v(" "),a("vs-td",[a("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"warning",type:"filled",size:"small",icon:"create"},on:{click:function(a){return t.editAttribute(e)}}}),t._v(" "),a("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",size:"small",color:"danger",type:"filled",icon:"delete"},on:{click:function(a){return t.deleteAttribute(e.id)}}})],1)],1)}))}}])},[a("template",{slot:"header"},[a("vs-button",{staticClass:"mb-3",attrs:{color:"primary",size:"small",type:"border"},on:{click:function(e){t.attribute_popup=!0}}},[t._v("Add Attribute")])],1),t._v(" "),a("template",{slot:"thead"},[a("vs-th",{attrs:{"sort-key":"name"}},[t._v("Name")]),t._v(" "),a("vs-th",[t._v("Values")]),t._v(" "),a("vs-th",[t._v("Usable for variants?")]),t._v(" "),a("vs-th",[t._v("Usable in filter?")]),t._v(" "),a("vs-th",[t._v("Actions")])],1)],2)],1)}),[],!1,null,null,null).exports},mounted:function(){this.fetchClasses()},methods:{fetchClasses:function(){var t=this;return v(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$http.get("/api/admin/product-classes");case 4:a=e.sent,t.classes_=a.data.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.errorNotification("Something went wrong!! Please retry");case 11:return e.prev=11,t.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()},saveClass:function(){var t=this;return v(r.a.mark((function e(){var a,s,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$validator.validateAll("product-class");case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return t.$vs.loading({container:"#loading--container"}),e.prev=6,a={name:t.class_.name},s="/api/admin/product-classes",t.class_.id&&(s="/api/admin/product-classes/".concat(t.class_.id),a._method="PATCH"),e.next=12,t.$http.post(s,a);case 12:(n=e.sent).data.success&&(t.successNotification(n.data.message),t.fetchClasses(),t.class_popup=!1),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(6),console.log(e.t0),t.errorNotification("Something went wrong! Please retry!!");case 20:return e.prev=20,t.$vs.loading.close("#loading--container > .con-vs-loading"),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[6,16,20,23]])})))()},editClass:function(t){this.class_=_.cloneDeep(t),this.class_popup=!0},deleteClass:function(t){var e,a=this;this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Are you sure you want to delete this product class?",accept:(e=v(r.a.mark((function e(){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.$http.delete("/api/admin/product-classes/".concat(t));case 2:(s=e.sent).data.success?(a.successNotification(s.data.message),a.fetchClasses(),a.selected_class={}):a.errorNotification(s.data.message);case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})})}},watch:{class_popup:function(t){t||(this.class_={},this.errors.clear())}}},p=Object(l.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vs-popup",{staticClass:"popup-lg",attrs:{title:"Class Detail",active:t.class_popup},on:{"update:active":function(e){t.class_popup=e}}},[a("form",{attrs:{action:"","data-vv-scope":"product-class"}},[a("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading--container"}},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"name",label:"Class Name"},model:{value:t.class_.name,callback:function(e){t.$set(t.class_,"name",e)},expression:"class_.name"}}),t._v(" "),a("p",[t.errors.has("product-class.name")?a("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("product-class.name")))]):t._e()]),t._v(" "),a("vs-button",{staticClass:"mr-3 mt-5",on:{click:t.saveClass}},[t._v("Submit")])],1)])]),t._v(" "),t.loading?a("pageLoader"):a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full mb-4 md:w-2/5"},[a("vx-card",{staticClass:"card-padding-5"},[a("vs-table",{attrs:{data:t.classes_,"max-items":"40",pagination:""},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return t._l(s,(function(e,s){return a("vs-tr",{key:s,attrs:{data:e}},[a("vs-td",[t._v(t._s(e.name))]),t._v(" "),a("vs-td",[a("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",color:"warning",type:"filled",size:"small",icon:"create"},on:{click:function(a){return t.editClass(e)}}}),t._v(" "),a("vs-button",{staticClass:"table-action--buttons",attrs:{radius:"",size:"small",color:"danger",type:"filled",icon:"delete"},on:{click:function(a){return t.deleteClass(e.id)}}})],1)],1)}))}}]),model:{value:t.selected_class,callback:function(e){t.selected_class=e},expression:"selected_class"}},[t._v("\n          >\n          "),a("template",{slot:"header"},[a("vs-button",{staticClass:"mb-3",attrs:{color:"primary",size:"small",type:"border"},on:{click:function(e){t.class_popup=!0}}},[t._v("Add Product Class")])],1),t._v(" "),a("template",{slot:"thead"},[a("vs-th",{attrs:{"sort-key":"name"}},[t._v("Name")]),t._v(" "),a("vs-th",[t._v("Actions")])],1)],2)],1)],1),t._v(" "),a("div",{staticClass:"vx-col w-full md:w-3/5"},[a("vx-card",{attrs:{title:"Attributes"}},[Object.keys(t.selected_class).length?a("div",[a("ProductAttributes",{key:"class-"+t.selected_class.id+"-attr",attrs:{"class-id":t.selected_class.id}})],1):a("div",[a("div",{staticClass:"text-center",staticStyle:{padding:"80px 0px"}},[a("h3",[t._v("Please select product class first!!")])])])])],1)])],1)}),[],!1,null,null,null);e.default=p.exports}}]);