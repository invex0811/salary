(function(e){function t(t){for(var r,a,i=t[0],u=t[1],l=t[2],d=0,s=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&s.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(s.length)s.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-043adb6d":"2f819864","chunk-76d51228":"91678c41","chunk-77570c67":"79364968","chunk-789a3b00":"f0f382a9","chunk-8f42918a":"e8d00547","chunk-d6949692":"e963e826","chunk-f508fc00":"d132da3e"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-043adb6d":1,"chunk-76d51228":1,"chunk-77570c67":1,"chunk-789a3b00":1,"chunk-8f42918a":1,"chunk-d6949692":1,"chunk-f508fc00":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-043adb6d":"e99e8d3f","chunk-76d51228":"71a233fb","chunk-77570c67":"c4c7e853","chunk-789a3b00":"47a9e094","chunk-8f42918a":"8a6d742d","chunk-d6949692":"f47a6bf0","chunk-f508fc00":"6a5208d8"}[e]+".css",c=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===c))return t()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){l=s[i],d=l.getAttribute("data-href");if(d===r||d===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(e);var s=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}c[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/salary/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var f=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1375:function(e,t,n){},"17f7":function(e,t,n){"use strict";n("d84c")},2771:function(e,t,n){"use strict";n("1375")},"3e5c":function(e,t,n){},"419c":function(e,t,n){"use strict";n("8b33")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("3ca3"),n("ddb0");var r=n("7a23");function a(e,t,n,a,c,o){var i=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(Object(r["z"])(o.layout),null,{default:Object(r["G"])((function(){return[Object(r["i"])(i)]})),_:1})}var c=Object(r["J"])("data-v-2a11481e"),o=c((function(e,t,n,a,c,o){var i=Object(r["y"])("Navbar"),u=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(i),Object(r["i"])(u)],64)})),i=Object(r["J"])("data-v-76ecfd7a");Object(r["u"])("data-v-76ecfd7a");var u={class:"navbar"},l=Object(r["i"])("h1",null,"Monitoring tools",-1);Object(r["s"])();var d=i((function(e,t,n,a,c,o){var d=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("nav",u,[Object(r["i"])(d,{tag:"a",to:c.url},{default:i((function(){return[l]})),_:1},8,["to"])])})),s={name:"Navbar",data:function(){return{url:"/",today:""}},computed:{}};n("e6e3");s.render=d,s.__scopeId="data-v-76ecfd7a";var f=s,b={name:"LayoutWithNavbar",components:{Navbar:f}};b.render=o,b.__scopeId="data-v-2a11481e";var v=b;function p(e,t,n,a,c,o){var i=Object(r["y"])("Navbar"),u=Object(r["y"])("Sidebar"),l=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(i),Object(r["i"])(u),Object(r["i"])(l)],64)}var h=Object(r["J"])("data-v-1cf3dc02");Object(r["u"])("data-v-1cf3dc02");var m={class:"sidebar"},O={class:"link-wrap"},j={class:"wrap-toogl"};Object(r["s"])();var y=h((function(e,t,n,a,c,o){var i=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",m,[Object(r["i"])("div",O,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(e.links,(function(e){return Object(r["r"])(),Object(r["f"])(i,{class:"link",key:e.url,"active-class":"active",to:e.url,exact:e.exact},{default:h((function(){return[Object(r["i"])("div",j,[Object(r["i"])("i",{class:e.img},null,2)])]})),_:2},1032,["to","exact"])})),128))])])})),g={name:"Sidebar",data:function(){return{showToogl:!1,links:[{img:"fi-rr-dollar",title:"Salary",url:"/salary"},{img:"fi-rr-dashboard",title:"Over speed",url:"/overSpeed"},{img:"fi-rr-time-forward-ten",title:"Converting time",url:"/convertingTime"},{img:"fi-rr-time-add",title:"Plus time",url:"/plusTime"}]}}};n("953c");g.render=y,g.__scopeId="data-v-1cf3dc02";var k=g,w={name:"MainLayout",components:{Sidebar:k,Navbar:f}};w.render=p;var _=w,S={components:{LayoutWithNavbar:v,MainLayout:_},computed:{layout:function(){return this.$route.meta.layout||"LayoutWithNavbar"}}};n("419c");S.render=a;var L=S,P=n("9483");Object(P["a"])("".concat("/salary/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var N=n("6c02"),x=Object(r["J"])("data-v-3ae4c4ba");Object(r["u"])("data-v-3ae4c4ba");var T={class:"home"},M=Object(r["i"])("h2",null,"Choose a tools",-1);Object(r["s"])();var C=x((function(e,t,n,a,c,o){var i=Object(r["y"])("Link"),u=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])("div",T,[M,Object(r["i"])(i)]),Object(r["i"])(u)],64)})),A=Object(r["J"])("data-v-4f1a02dd");Object(r["u"])("data-v-4f1a02dd");var E={class:"all-wrap"},J={class:"link-wrap"},I={href:"#",class:"link-tool"};Object(r["s"])();var B=A((function(e,t,n,a,c,o){var i=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",E,[Object(r["i"])("div",J,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(e.links,(function(e){return Object(r["r"])(),Object(r["f"])(i,{class:"link",key:e.url,"active-class":"active",to:e.url,exact:e.exact},{default:A((function(){return[Object(r["i"])("i",{class:e.img},null,2),Object(r["i"])("a",I,Object(r["B"])(e.title),1)]})),_:2},1032,["to","exact"])})),128))])])})),W={name:"Link",data:function(){return{links:[{img:"fi-rr-dollar",title:"Salary",url:"/salary"},{img:"fi-rr-dashboard",title:"Over speed",url:"/overSpeed"},{img:"fi-rr-time-forward-ten",title:"Converting time",url:"/convertingTime"},{img:"fi-rr-time-add",title:"Plus time",url:"/plusTime"},{img:"fi-rr-text",title:"Phrases",url:"/phrasesPage"}]}}};n("2771");W.render=B,W.__scopeId="data-v-4f1a02dd";var q=W,F={name:"Home",components:{Link:q}};n("17f7");F.render=C,F.__scopeId="data-v-3ae4c4ba";var H=F,U=[{path:"/",name:"Home",meta:{layout:"LayoutWithNavbar"},component:H},{path:"/salary",name:"Salary",meta:{layout:"MainLayout"},component:function(){return n.e("chunk-789a3b00").then(n.bind(null,"19a4"))}},{path:"/overSpeed",name:"OverSpeed",meta:{layout:"MainLayout"},component:function(){return n.e("chunk-d6949692").then(n.bind(null,"0d77"))}},{path:"/convertingTime",name:"ConvertingTime",meta:{layout:"MainLayout"},component:function(){return n.e("chunk-8f42918a").then(n.bind(null,"d953"))}},{path:"/plusTime",name:"PlusTime",meta:{layout:"MainLayout"},component:function(){return n.e("chunk-77570c67").then(n.bind(null,"75e0"))}},{path:"/phrasesPage",name:"PhrasesPage",meta:{layout:"MainLayout"},component:function(){return n.e("chunk-f508fc00").then(n.bind(null,"a48c"))}},{path:"/mapUSA",name:"MapUSA",meta:{layout:"MainLayout"},component:function(){return n.e("chunk-043adb6d").then(n.bind(null,"65c8"))}}],D=Object(N["a"])({history:Object(N["b"])("/salary/"),routes:U}),z=D;n.e("chunk-76d51228").then(n.t.bind(null,"77ed",7)),Object(r["e"])(L).use(z).mount("#app")},"8b33":function(e,t,n){},"953c":function(e,t,n){"use strict";n("c0d3")},c0d3:function(e,t,n){},d84c:function(e,t,n){},e6e3:function(e,t,n){"use strict";n("3e5c")}});
//# sourceMappingURL=app.b9ccd36e.js.map