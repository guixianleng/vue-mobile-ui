(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64b86b58"],{"427a":function(t,l,e){"use strict";e.r(l);var a=function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"cell"},[e("div",{staticClass:"demo"},[e("h3",[t._v("基本用法")]),e("pl-cell-group",[e("pl-cell-item",{attrs:{title:"单元格",value:"内容"}})],1),e("pl-cell-group",[e("pl-cell-item",{attrs:{title:"单元格",value:"内容",desc:"描述内容"}})],1)],1),e("div",{staticClass:"demo"},[e("h3",[t._v("展示图标")]),e("pl-cell-group",[e("pl-cell-item",{attrs:{title:"单元格",value:"内容",icon:"month"}})],1)],1),e("div",{staticClass:"demo"},[e("h3",[t._v("只展示标题及其位置")]),e("pl-cell-group",[e("pl-cell-item",{attrs:{title:"单元格"}}),e("pl-cell-item",{attrs:{title:"单元格","title-align":"center"}})],1)],1),e("div",{staticClass:"demo"},[e("h3",[t._v("展示箭头")]),e("pl-cell-group",[e("pl-cell-item",{attrs:{title:"单元格","is-link":""}})],1)],1),e("div",{staticClass:"demo"},[e("h3",[t._v("页面跳转")]),e("pl-cell-group",[e("pl-cell-item",{attrs:{title:"单元格","is-link":"",to:"/welcome"}})],1)],1),e("div",{staticClass:"demo"},[e("h3",[t._v("分组标题")]),e("pl-cell-group",{attrs:{title:"分组1"}},[e("pl-cell-item",{attrs:{title:"单元格",value:"内容"}})],1),e("pl-cell-group",{attrs:{title:"分组2"}},[e("pl-cell-item",{attrs:{title:"单元格",value:"内容"}})],1)],1),e("div",{staticClass:"demo"},[e("h3",[t._v("高级用法")]),e("pl-cell-group",{attrs:{title:"插槽"}},[e("pl-cell-item",[e("div",{staticClass:"pl-cell-item--desc",attrs:{slot:"desc"},slot:"desc"},[e("div",{staticClass:"header"},[e("span",[t._v("右侧标题")])]),e("span",{staticClass:"text"},[t._v("描述内容")])]),e("van-button",{attrs:{slot:"right",plain:"",type:"warning",size:"small"},slot:"right"},[t._v("去完成")])],1),e("pl-cell-item",{attrs:{title:"单元格",icon:"times",size:"18","is-link":""}}),e("pl-cell-item",{attrs:{title:"单元格"}},[e("pl-svg-icon",{attrs:{slot:"right",icon:"done",size:"18"},slot:"right"})],1)],1)],1)])},i=[],c=e("cb1d"),s=(e("7209"),e("a31c"),e("c5a9")),n={name:"cell",components:Object(c["a"])({},s["a"].name,s["a"])},o=n,r=(e("d2a6"),e("17cc")),p=Object(r["a"])(o,a,i,!1,null,"77bca5f5",null);l["default"]=p.exports},a31c:function(t,l,e){"use strict";e("6921")},c5a9:function(t,l,e){"use strict";var a=e("4f46"),i=e("23c4"),c=e.n(i),s=e("03fc"),n=e("83c7");function o(t,l){var e=l.to,a=l.url,i=l.replace;e&&t?t[i?"replace":"push"](e):a&&(i?location.replace(a):location.href=a)}function r(t){o(t.parent&&t.parent.$router,t.props)}var p={url:String,replace:Boolean,to:[String,Object]},u=Object(s["f"])("loading"),d=u[0],v=u[1],g="#c9c9c9";function b(t,l,e,a){var i=l.color,s=l.size,o=l.type,r="white"===i||"black"===i?i:"",p={color:"black"===i?g:i,width:s,height:s},u=[];if("spinner"===o)for(var d=0;d<12;d++)u.push(t("i"));var b="circular"===o&&t("svg",{class:v("circular"),attrs:{viewBox:"25 25 50 50"}},[t("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})]);return t("div",c()([{class:v([o,r]),style:p},Object(n["b"])(a,!0)]),[t("span",{class:v("spinner",o)},[u,b])])}b.props={size:String,type:{type:String,default:"circular"},color:{type:String,default:g}};var f=d(b),m=Object(s["f"])("button"),h=m[0],y=m[1];function S(t,l,e,a){var i=l.tag,s=l.type,o=l.disabled,p=l.loading,u=l.hairline,d=l.loadingText,v=function(t){p||o||(Object(n["a"])(a,"click",t),r(a))},g=function(t){Object(n["a"])(a,"touchstart",t)},b=[y([s,l.size,{loading:p,disabled:o,hairline:u,block:l.block,plain:l.plain,round:l.round,square:l.square,"bottom-action":l.bottomAction}]),{"van-hairline--surround":u}];return t(i,c()([{class:b,attrs:{type:l.nativeType,disabled:o},on:{click:v,touchstart:g}},Object(n["b"])(a)]),[p?[t(f,{attrs:{size:l.loadingSize,color:"default"===s?void 0:""}}),d&&t("span",{class:y("loading-text")},[d])]:t("span",{class:y("text")},[e["default"]?e["default"]():l.text])])}S.props=Object(a["a"])({},p,{text:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,bottomAction:Boolean,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}});l["a"]=h(S)},d2a6:function(t,l,e){"use strict";var a=e("ecce"),i=e.n(a);i.a},ecce:function(t,l,e){}}]);
//# sourceMappingURL=chunk-64b86b58.0f02094a.js.map