(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c96de9c0"],{"0d2f":function(t,n,e){"use strict";var o=e("fd06"),i=e.n(o);i.a},"370b":function(t,n,e){"use strict";e("e84b");var o=e("65b3"),i=e("6b3e"),a=e("c438"),s="toString",r=/./[s],c=function(t){e("7711")(RegExp.prototype,s,t,!0)};e("a347")(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?c(function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?i.call(t):void 0)}):r.name!=s&&c(function(){return r.call(this)})},8935:function(t,n,e){"use strict";var o=e("a28a"),i=e.n(o);i.a},a28a:function(t,n,e){},a31c:function(t,n,e){"use strict";e("6921")},b172:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"toast"},[e("div",{staticClass:"demo"},[e("h3",[t._v("文字提示")]),e("van-button",{attrs:{type:"default"},on:{click:function(n){return t.$vueToast(t.text)}}},[t._v("文字提示")]),e("van-button",{attrs:{type:"default"},on:{click:function(n){return t.$vueToast(t.longText)}}},[t._v("长文字提示")])],1),e("div",{staticClass:"demo"},[e("h3",[t._v("颜色文字提示")]),e("van-button",{attrs:{type:"default"},on:{click:t.handleColorful}},[t._v("颜色文字提示")])],1),e("div",{staticClass:"demo"},[e("h3",[t._v("标题和内容文字提示")]),e("van-button",{attrs:{type:"default"},on:{click:t.handleTitle}},[t._v("标题和内容文字提示")])],1),e("div",{staticClass:"demo"},[e("h3",[t._v("加载提示")]),e("h3",[t._v("加载基本用法")]),e("van-button",{attrs:{type:"default"},on:{click:t.handleLoading1}},[t._v("加载提示")]),e("h3",[t._v("自定义遮盖层背景、内容提示背景和图标")]),e("van-button",{attrs:{type:"default"},on:{click:t.handleLoading2}},[t._v("更改内容背景")]),e("van-button",{attrs:{type:"default"},on:{click:t.handleLoading3}},[t._v("更改加载图标")]),e("van-button",{attrs:{type:"default"},on:{click:t.handleLoading4}},[t._v("更改遮盖层背景")])],1),e("div",{staticClass:"demo"},[e("h3",[t._v("成功/失败提示")]),e("van-button",{attrs:{type:"default"},on:{click:function(n){return t.$vueToast.success(t.successText)}}},[t._v("成功提示")]),e("van-button",{attrs:{type:"default"},on:{click:function(n){return t.$vueToast.fail(t.failText)}}},[t._v("失败提示")])],1)])},i=[],a=e("cb1d"),s=(e("7209"),e("a31c"),e("c5a9")),r=e("e20c"),c=e("8bbf"),l=e.n(c),u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition-group",{attrs:{name:t.mergedOptions.transition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showing,expression:"showing"}],key:1,ref:t.mergedOptions.id,staticClass:"pl-toast",class:t.clazz,attrs:{transition:t.mergedOptions.transition}},[e("div",{staticClass:"pl-toast-content"},[t.svgIcon?e("pl-svg-icon",{attrs:{icon:t.svgIcon,size:60}}):t._e(),e("div",{domProps:{innerHTML:t._s(t.htmlRender)}})],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.mergedOptions.mask&&t.showing,expression:"mergedOptions.mask && showing"}],key:2,staticClass:"pl-toast-overlay",attrs:{transition:t.mergedOptions.transition}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],key:3,staticClass:"pl-toast-loading",style:t.backgroundStyle},[e("div",{staticClass:"pl-toast-loading--content",class:t.clazz},[e("pl-svg-icon",{attrs:{icon:t.svgIcon,size:t.mergedOptions.size,animation:t.mergedOptions.animation,animationName:t.mergedOptions.animationName}}),t.mergedOptions.message?e("div",{staticClass:"pl-toast-loading--msg",domProps:{innerHTML:t._s(t.htmlRender)}}):t._e()],1)])])},d=[],f={id:"pl-toast",className:"",position:"middle",parent:"body",transition:"fade",duration:2e3,message:"",type:"text",title:"",text:"",background:"rgba(0, 0, 0, 0.3)",bgContent:"black",color:"#F89516",colorText:"",mask:!0,size:48,animation:!1,animationName:"",icon:"",isClose:!1},p={name:"Toast",defaultOptions:f,data:function(){return{queue:[],option:{},showing:!1,isLoading:!1}},computed:{mergedOptions:function(){return Object.assign({},f,this.option)},backgroundStyle:function(){return{backgroundColor:this.mergedOptions.background}},clazz:function(){var t=[],n=this.option.className,e=this.mergedOptions.position,o=this.mergedOptions.bgContent,i=this.mergedOptions.type;return n&&("string"===typeof n&&t.push(n),Array.isArray(n)&&(t=t.concat(n))),e&&t.push("pl-toast-".concat(e)),o&&t.push("pl-toast--".concat(o)),"text"===i&&t.push("pl-toast--text"),t.join(" ")},svgIcon:function(){var t=this.mergedOptions.type;if(this.mergedOptions.icon)return this.mergedOptions.icon;switch(t){case"success":return"success";case"fail":return"fail";case"loading":return"loading";default:return this.icon}},htmlRender:function(){var t=this.mergedOptions.type,n=this.mergedOptions.message;switch(t){case"html":return"<div v-html=".concat(n,"></div>");case"colorful":return"\n            <div>\n              <span>".concat(this.mergedOptions.title,'</span>\n              <span style="color: ').concat(this.mergedOptions.color,'">\n                ').concat(this.mergedOptions.colorText,"\n              </span>\n            </div>\n          ");case"normal":return"\n            <div>".concat(this.mergedOptions.title,"</div>\n            <div>").concat(this.mergedOptions.text,"</div>\n          ");case"loading":return"<span>".concat(n,"</span>");default:return"<span>".concat(n,"</span>")}}},watch:{queue:function(){var t=this,n=this.queue.length;0!==n&&(this.option=this.queue[0],"loading"===this.option.type?(this.isLoading=!0,this.mergedOptions.isClose&&(this.timeoutId=setTimeout(function(){t.isLoading=!1,t.timeoutId=null,setTimeout(function(){return t.queue.shift()})},this.mergedOptions.duration))):(this.showing=!0,this.timeoutId=setTimeout(function(){t.showing=!1,t.timeoutId=null,setTimeout(function(){return t.queue.shift()})},this.mergedOptions.duration)))}}},g=p,v=(e("8935"),e("17cc")),h=Object(v["a"])(g,u,d,!1,null,"bba99924",null),m=h.exports,b=e("ed08"),y=function(t){return Object(b["c"])(t)?t:{message:t}},O=[],x=Object(r["a"])({},m.defaultOptions);function k(){if(!O.length||!Object(b["b"])(O[0].$el)){var t=new(l.a.extend(m))({el:document.createElement("div")});O.push(t)}return O[O.length-1]}function S(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=k();if(t=Object(r["a"])({},x,y(t)),n.$el){var e=n.$mount();document.body.appendChild(e.$el)}n.queue.push(t)}var w=function(t){return function(n){return S(Object(r["a"])({type:t},y(n)))}},T=["loading","close","success","fail"];T.forEach(function(t){S[t]=w(t)}),S.setDefaultOptions=function(t){Object.assign(x,t)},S.resetDefaultOptions=function(){x=Object(r["a"])({},S.defaultOptions)},S.close=function(){var t=k(),n=t.$el.parentNode;n&&n.removeChild(t.$el),O.shift(),t.$destroy()},S.install=function(){l.a.use(m)},l.a.prototype.$vueToast=S;var $,C=S,_={name:"toast",components:($={},Object(a["a"])($,s["a"].name,s["a"]),Object(a["a"])($,C.name,C),$),data:function(){return{text:"提示文案",longText:"这是一条长文字提示，超过一定字数就会居中换行",successText:"成功文案",failText:"失败文案"}},methods:{handleColorful:function(){this.$vueToast({type:"colorful",title:"领取成功",colorText:"+30积分",bgContent:"white"})},handleTitle:function(){this.$vueToast({type:"normal",title:"敬请期待",text:"程序猿正在努力开发中"})},handleLoading1:function(){this.$vueToast({type:"loading",message:"加载中",isClose:!0})},handleLoading2:function(){this.$vueToast({type:"loading",isClose:!0,bgContent:"white"})},handleLoading3:function(){this.$vueToast({type:"loading",isClose:!0,animation:!0,size:48,animationName:"v-loading",icon:"v_loading"})},handleLoading4:function(){this.$vueToast({type:"loading",isClose:!0,background:"rgba(249, 120, 39, 0.2)"})}}},j=_,z=(e("0d2f"),Object(v["a"])(j,o,i,!1,null,"2e87b2ef",null));n["default"]=z.exports},c5a9:function(t,n,e){"use strict";var o=e("4f46"),i=e("23c4"),a=e.n(i),s=e("03fc"),r=e("83c7");function c(t,n){var e=n.to,o=n.url,i=n.replace;e&&t?t[i?"replace":"push"](e):o&&(i?location.replace(o):location.href=o)}function l(t){c(t.parent&&t.parent.$router,t.props)}var u={url:String,replace:Boolean,to:[String,Object]},d=Object(s["f"])("loading"),f=d[0],p=d[1],g="#c9c9c9";function v(t,n,e,o){var i=n.color,s=n.size,c=n.type,l="white"===i||"black"===i?i:"",u={color:"black"===i?g:i,width:s,height:s},d=[];if("spinner"===c)for(var f=0;f<12;f++)d.push(t("i"));var v="circular"===c&&t("svg",{class:p("circular"),attrs:{viewBox:"25 25 50 50"}},[t("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})]);return t("div",a()([{class:p([c,l]),style:u},Object(r["b"])(o,!0)]),[t("span",{class:p("spinner",c)},[d,v])])}v.props={size:String,type:{type:String,default:"circular"},color:{type:String,default:g}};var h=f(v),m=Object(s["f"])("button"),b=m[0],y=m[1];function O(t,n,e,o){var i=n.tag,s=n.type,c=n.disabled,u=n.loading,d=n.hairline,f=n.loadingText,p=function(t){u||c||(Object(r["a"])(o,"click",t),l(o))},g=function(t){Object(r["a"])(o,"touchstart",t)},v=[y([s,n.size,{loading:u,disabled:c,hairline:d,block:n.block,plain:n.plain,round:n.round,square:n.square,"bottom-action":n.bottomAction}]),{"van-hairline--surround":d}];return t(i,a()([{class:v,attrs:{type:n.nativeType,disabled:c},on:{click:p,touchstart:g}},Object(r["b"])(o)]),[u?[t(h,{attrs:{size:n.loadingSize,color:"default"===s?void 0:""}}),f&&t("span",{class:y("loading-text")},[f])]:t("span",{class:y("text")},[e["default"]?e["default"]():n.text])])}O.props=Object(o["a"])({},u,{text:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,bottomAction:Boolean,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}});n["a"]=b(O)},e84b:function(t,n,e){e("c438")&&"g"!=/./g.flags&&e("5024").f(RegExp.prototype,"flags",{configurable:!0,get:e("6b3e")})},ed08:function(t,n,e){"use strict";e("fa26"),e("370b");function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t){return i="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)},i(t)}function a(t){var n=i(t);return null!==t&&("object"===n||"function"===n)}function s(t){return document.body.contains(t)}function r(t,n){if(0===arguments.length)return null;var e,o=n||"{y}-{m}-{d} {h}:{i}:{s}";"object"===i(t)?e=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),e=new Date(t));var a={y:e.getFullYear(),m:e.getMonth()+1,d:e.getDate(),h:e.getHours(),i:e.getMinutes(),s:e.getSeconds(),a:e.getDay()},s=o.replace(/{(y|m|d|h|i|s|a)+}/g,function(t,n){var e=a[n];return"a"===n?["日","一","二","三","四","五","六"][e]:(t.length>0&&e<10&&(e="0"+e),e||0)});return s}e.d(n,"c",function(){return a}),e.d(n,"b",function(){return s}),e.d(n,"a",function(){return r})},fa26:function(t,n,e){"use strict";var o=e("65b3"),i=e("8f73"),a=e("6565"),s=e("9406"),r=e("e3d2"),c=e("e758"),l=Math.max,u=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};e("b4fd")("replace",2,function(t,n,e,v){return[function(o,i){var a=t(this),s=void 0==o?void 0:o[n];return void 0!==s?s.call(o,a,i):e.call(String(a),o,i)},function(t,n){var i=v(e,t,this,n);if(i.done)return i.value;var d=o(t),f=String(this),p="function"===typeof n;p||(n=String(n));var m=d.global;if(m){var b=d.unicode;d.lastIndex=0}var y=[];while(1){var O=c(d,f);if(null===O)break;if(y.push(O),!m)break;var x=String(O[0]);""===x&&(d.lastIndex=r(f,a(d.lastIndex),b))}for(var k="",S=0,w=0;w<y.length;w++){O=y[w];for(var T=String(O[0]),$=l(u(s(O.index),f.length),0),C=[],_=1;_<O.length;_++)C.push(g(O[_]));var j=O.groups;if(p){var z=[T].concat(C,$,f);void 0!==j&&z.push(j);var L=String(n.apply(void 0,z))}else L=h(T,f,$,C,j,n);$>=S&&(k+=f.slice(S,$)+L,S=$+T.length)}return k+f.slice(S)}];function h(t,n,o,a,s,r){var c=o+t.length,l=a.length,u=p;return void 0!==s&&(s=i(s),u=f),e.call(r,u,function(e,i){var r;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,o);case"'":return n.slice(c);case"<":r=s[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>l){var f=d(u/10);return 0===f?e:f<=l?void 0===a[f-1]?i.charAt(1):a[f-1]+i.charAt(1):e}r=a[u-1]}return void 0===r?"":r})}})},fd06:function(t,n,e){}}]);
//# sourceMappingURL=chunk-c96de9c0.61c97187.js.map