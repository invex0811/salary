(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7094fd0"],{"0d77":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=Object(r["J"])("data-v-04239f1b");Object(r["u"])("data-v-04239f1b");var i={class:"over-speed"},s=Object(r["i"])("h2",null,"Over speed",-1),c={class:"time"},o=Object(r["i"])("b",{style:{"font-size":"30px"}},":",-1),l={class:"mile"},u={key:0},p=Object(r["h"])(" - "),d={class:"wrap-checkbox"},b={for:"checkSecondMiles"},h=Object(r["h"])("2 miles"),f={class:"speed"},m={class:"speedList"};Object(r["s"])();var v=a((function(e,t,n,a,v,O){var j=Object(r["y"])("SpeedList"),x=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])("div",i,[s,Object(r["i"])("div",c,[Object(r["H"])(Object(r["i"])("input",{onKeyup:t[1]||(t[1]=function(){return O.calcSpeed&&O.calcSpeed.apply(O,arguments)}),type:"number","onUpdate:modelValue":t[2]||(t[2]=function(e){return v.timeHours=e}),placeholder:"Hours"},null,544),[[r["E"],v.timeHours,void 0,{number:!0}]]),o,Object(r["H"])(Object(r["i"])("input",{onKeyup:t[3]||(t[3]=function(){return O.calcSpeed&&O.calcSpeed.apply(O,arguments)}),type:"number","onUpdate:modelValue":t[4]||(t[4]=function(e){return v.timeMinutes=e}),placeholder:"Minutes"},null,544),[[r["E"],v.timeMinutes,void 0,{number:!0}]])]),Object(r["i"])("div",l,[Object(r["H"])(Object(r["i"])("input",{onKeyup:t[5]||(t[5]=function(){return O.calcSpeed&&O.calcSpeed.apply(O,arguments)}),type:"number",id:"mile","onUpdate:modelValue":t[6]||(t[6]=function(e){return v.miles=e}),placeholder:"Miles"},null,544),[[r["E"],v.miles,void 0,{number:!0}]]),v.checkSecondMiles?(Object(r["r"])(),Object(r["f"])("span",u,[p,Object(r["H"])(Object(r["i"])("input",{type:"number",id:"secondMile","onUpdate:modelValue":t[7]||(t[7]=function(e){return v.secondMiles=e}),placeholder:"Miles"},null,512),[[r["E"],v.secondMiles,void 0,{number:!0}]])])):Object(r["g"])("",!0)]),Object(r["i"])("div",d,[Object(r["i"])("label",b,[Object(r["H"])(Object(r["i"])("input",{id:"checkSecondMiles",type:"checkbox","onUpdate:modelValue":t[8]||(t[8]=function(e){return v.checkSecondMiles=e})},null,512),[[r["D"],v.checkSecondMiles]]),h])]),Object(r["i"])("button",{onClick:t[9]||(t[9]=function(){return O.calcSpeed&&O.calcSpeed.apply(O,arguments)})}," OK "),Object(r["i"])("div",f,[Object(r["i"])("span",{class:{redSpeed:v.redSpeed>95}},Object(r["B"])(v.inputValue),3)])]),Object(r["i"])("div",m,[Object(r["i"])("i",{class:"fi-rr-document",onClick:t[10]||(t[10]=function(){return O.showModal&&O.showModal.apply(O,arguments)}),title:"Speed list"})]),Object(r["i"])(j,{ref:"modal"},null,512),Object(r["i"])(x)],64)})),O=(n("b680"),n("ac1f"),n("841c"),Object(r["J"])("data-v-1d954c90"));Object(r["u"])("data-v-1d954c90");var j={class:"wrap-blur-modal",key:"modalWindow"},x={class:"wrap-modal"},y={class:"input-wrapper"},g={class:"speedList"},S={class:"table-wrapper"},w=Object(r["i"])("thead",null,[Object(r["i"])("th",null,"Abbr"),Object(r["i"])("th",{class:"state"},"State"),Object(r["i"])("th",null,"Speed")],-1),M={class:"td-abbr"};Object(r["s"])();var E=O((function(e,t,n,a,i,s){var c=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(r["c"],{name:"fade"},{default:O((function(){return[i.show?(Object(r["r"])(),Object(r["f"])("div",j,[Object(r["i"])("div",x,[Object(r["i"])("i",{onClick:t[1]||(t[1]=function(){return s.closeModal&&s.closeModal.apply(s,arguments)}),class:"fi-rr-cross-circle"}),Object(r["i"])("div",y,[Object(r["H"])(Object(r["i"])("input",{type:"text",class:"search-input","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.search=e}),placeholder:"Input abbreviation"},null,512),[[r["E"],i.search]])]),Object(r["i"])("div",g,[Object(r["i"])("div",S,[Object(r["i"])("table",null,[w,Object(r["i"])("tbody",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(s.todosByTitle,(function(e){return Object(r["r"])(),Object(r["f"])("tr",{key:e.id},[Object(r["i"])("td",M,Object(r["B"])(e.abbr),1),Object(r["i"])("td",null,Object(r["B"])(e.state),1),Object(r["i"])("td",null,Object(r["B"])(e.speed),1)])})),128))])])])])])])):Object(r["g"])("",!0)]})),_:1}),Object(r["i"])(c)],64)})),I=(n("4de4"),{name:"SpeedList",data:function(){return{show:!1,search:"",arrayState:[{abbr:"AL",state:"Alabama",speed:"75mph"},{abbr:"AK",state:"Alaska",speed:"70mph"},{abbr:"AZ",state:"Arizona",speed:"80mph"},{abbr:"AR",state:"Arkansas",speed:"75mph"},{abbr:"CA",state:"California",speed:"65mph"},{abbr:"CO",state:"Colorado",speed:"80mph"},{abbr:"CT",state:"Connecticut",speed:"70mph"},{abbr:"DE",state:"Delaware",speed:"70mph"},{abbr:"FL",state:"Florida",speed:"75mph"},{abbr:"GA",state:"Georgia",speed:"75mph"},{abbr:"HI",state:"Hawaii",speed:"60mph"},{abbr:"ID",state:"Idaho",speed:"75mph"},{abbr:"IL",state:"Illinois",speed:"75mph"},{abbr:"IN",state:"Indiana",speed:"70mph"},{abbr:"IA",state:"Iowa",speed:"75mph"},{abbr:"KS",state:"Kansas",speed:"80mph"},{abbr:"KY",state:"Kentucky",speed:"75mph"},{abbr:"LA",state:"Louisiana",speed:"80mph"},{abbr:"ME",state:"Maine",speed:"80mph"},{abbr:"MD",state:"Maryland",speed:"70mph"},{abbr:"MA",state:"Massachusetts",speed:"70mph"},{abbr:"MI",state:"Michigan",speed:"70mph"},{abbr:"MN",state:"Minnesota",speed:"75mph"},{abbr:"MS",state:"Mississippi",speed:"75mph"},{abbr:"MO",state:"Missouri",speed:"75mph"},{abbr:"MT",state:"Montana",speed:"70mph"},{abbr:"NE",state:"Nebraska",speed:"80mph"},{abbr:"NV",state:"Nevada",speed:"85mph"},{abbr:"NH",state:"New Hampshire",speed:"75mph"},{abbr:"NJ",state:"New Jersey",speed:"70mph"},{abbr:"NM",state:"New Mexico",speed:"80mph"},{abbr:"NY",state:"New York",speed:"70mph"},{abbr:"NC",state:"North Carolina",speed:"75mph"},{abbr:"ND",state:"North Dakota",speed:"80mph"},{abbr:"OH",state:"Ohio",speed:"75mph"},{abbr:"OK",state:"Oklahoma",speed:"80mph"},{abbr:"OR",state:"Oregon",speed:"70mph"},{abbr:"PA",state:"Pennsylvania",speed:"75mph"},{abbr:"RI",state:"Rhode Island",speed:"70mph"},{abbr:"SC",state:"South Carolina",speed:"75mph"},{abbr:"SD",state:"South Dakota",speed:"85mph"},{abbr:"TN",state:"Tennessee",speed:"75mph"},{abbr:"TX",state:"Texas",speed:"85mph"},{abbr:"UT",state:"Utah",speed:"85mph"},{abbr:"VT",state:"Vermont",speed:"70mph"},{abbr:"VA",state:"Virginia",speed:"75mph"},{abbr:"WA",state:"Washington",speed:"70mph"},{abbr:"WV",state:"West Virginia",speed:"75mph"},{abbr:"WI",state:"Wisconsin",speed:"75mph"},{abbr:"WY",state:"Wyoming",speed:"85mph"},{abbr:"WADC",state:"Washington DC",speed:"75mph"}]}},methods:{closeModal:function(){return this.show=!1}},computed:{todosByTitle:function(){var e=this;return this.arrayState.filter((function(t){return-1!==t.abbr.indexOf(e.search.toUpperCase())}))}}});n("5a24");I.render=E,I.__scopeId="data-v-1d954c90";var A=I,N={name:"OverSpeed",components:{SpeedList:A},data:function(){return{timeHours:"",timeMinutes:"",miles:"",secondMiles:"",timeToTenth:"",overSpeed:"",inputValue:"",redSpeed:"",checkSecondMiles:!1}},methods:{calcSpeed:function(){this.timeToTenth=this.timeHours+this.timeMinutes/60,this.timeHours||this.timeMinutes,this.miles<=0?this.inputValue="Input all values":!1===this.checkSecondMiles?this.inputValue=this.miles/this.timeToTenth:this.inputValue=(this.miles-this.secondMiles)/this.timeToTenth,this.redSpeed=this.inputValue,this.inputValue="Speed: "+this.inputValue.toFixed(2)},showModal:function(){return this.$refs.modal.show=!0}}};n("d847");N.render=v,N.__scopeId="data-v-04239f1b";t["default"]=N},1148:function(e,t,n){"use strict";var r=n("a691"),a=n("1d80");e.exports=function(e){var t=String(a(this)),n="",i=r(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(n+=t);return n}},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,n){var r=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"1dde":function(e,t,n){var r=n("d039"),a=n("b622"),i=n("2d00"),s=a("species");e.exports=function(e){return i>=51||!r((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"408a":function(e,t,n){var r=n("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").filter,i=n("1dde"),s=i("filter");r({target:"Array",proto:!0,forced:!s},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"5a24":function(e,t,n){"use strict";n("89b3")},"65f0":function(e,t,n){var r=n("861d"),a=n("e8b5"),i=n("b622"),s=i("species");e.exports=function(e,t){var n;return a(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"6ca2":function(e,t,n){},"841c":function(e,t,n){"use strict";var r=n("d784"),a=n("825a"),i=n("1d80"),s=n("129f"),c=n("14c3");r("search",1,(function(e,t,n){return[function(t){var n=i(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var i=a(e),o=String(this),l=i.lastIndex;s(l,0)||(i.lastIndex=0);var u=c(i,o);return s(i.lastIndex,l)||(i.lastIndex=l),null===u?-1:u.index}]}))},"89b3":function(e,t,n){},9263:function(e,t,n){"use strict";var r=n("ad6d"),a=n("9f7f"),i=n("5692"),s=RegExp.prototype.exec,c=i("native-string-replace",String.prototype.replace),o=s,l=function(){var e=/a/,t=/b*/g;return s.call(e,"a"),s.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,p=void 0!==/()??/.exec("")[1],d=l||p||u;d&&(o=function(e){var t,n,a,i,o=this,d=u&&o.sticky,b=r.call(o),h=o.source,f=0,m=e;return d&&(b=b.replace("y",""),-1===b.indexOf("g")&&(b+="g"),m=String(e).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==e[o.lastIndex-1])&&(h="(?: "+h+")",m=" "+m,f++),n=new RegExp("^(?:"+h+")",b)),p&&(n=new RegExp("^"+h+"$(?!\\s)",b)),l&&(t=o.lastIndex),a=s.call(d?n:o,m),d?a?(a.input=a.input.slice(f),a[0]=a[0].slice(f),a.index=o.lastIndex,o.lastIndex+=a[0].length):o.lastIndex=0:l&&a&&(o.lastIndex=o.global?a.index+a[0].length:t),p&&a&&a.length>1&&c.call(a[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(a[i]=void 0)})),a}),e.exports=o},"9f7f":function(e,t,n){"use strict";var r=n("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b680:function(e,t,n){"use strict";var r=n("23e7"),a=n("a691"),i=n("408a"),s=n("1148"),c=n("d039"),o=1..toFixed,l=Math.floor,u=function(e,t,n){return 0===t?n:t%2===1?u(e,t-1,n*e):u(e*e,t/2,n)},p=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},d=function(e,t,n){var r=-1,a=n;while(++r<6)a+=t*e[r],e[r]=a%1e7,a=l(a/1e7)},b=function(e,t){var n=6,r=0;while(--n>=0)r+=e[n],e[n]=l(r/t),r=r%t*1e7},h=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var r=String(e[t]);n=""===n?r:n+s.call("0",7-r.length)+r}return n},f=o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){o.call({})}));r({target:"Number",proto:!0,forced:f},{toFixed:function(e){var t,n,r,c,o=i(this),l=a(e),f=[0,0,0,0,0,0],m="",v="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return String(o);if(o<0&&(m="-",o=-o),o>1e-21)if(t=p(o*u(2,69,1))-69,n=t<0?o*u(2,-t,1):o/u(2,t,1),n*=4503599627370496,t=52-t,t>0){d(f,0,n),r=l;while(r>=7)d(f,1e7,0),r-=7;d(f,u(10,r,1),0),r=t-1;while(r>=23)b(f,1<<23),r-=23;b(f,1<<r),d(f,1,1),b(f,2),v=h(f)}else d(f,0,n),d(f,1<<-t,0),v=h(f)+s.call("0",l);return l>0?(c=v.length,v=m+(c<=l?"0."+s.call("0",l-c)+v:v.slice(0,c-l)+"."+v.slice(c-l))):v=m+v,v}})},b727:function(e,t,n){var r=n("0366"),a=n("44ad"),i=n("7b0b"),s=n("50c4"),c=n("65f0"),o=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,u=4==e,p=6==e,d=7==e,b=5==e||p;return function(h,f,m,v){for(var O,j,x=i(h),y=a(x),g=r(f,m,3),S=s(y.length),w=0,M=v||c,E=t?M(h,S):n||d?M(h,0):void 0;S>w;w++)if((b||w in y)&&(O=y[w],j=g(O,w,x),e))if(t)E[w]=j;else if(j)switch(e){case 3:return!0;case 5:return O;case 6:return w;case 2:o.call(E,O)}else switch(e){case 4:return!1;case 7:o.call(E,O)}return p?-1:l||u?u:E}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),i=n("b622"),s=n("9112"),c=i("species"),o=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),u=i("replace"),p=function(){return!!/./[u]&&""===/./[u]("a","$0")}(),d=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,u){var b=i(e),h=!a((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),f=h&&!a((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[b]=/./[b]),n.exec=function(){return t=!0,null},n[b](""),!t}));if(!h||!f||"replace"===e&&(!o||!l||p)||"split"===e&&!d){var m=/./[b],v=n(b,""[e],(function(e,t,n,r,a){return t.exec===RegExp.prototype.exec?h&&!a?{done:!0,value:m.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),O=v[0],j=v[1];r(String.prototype,e,O),r(RegExp.prototype,b,2==t?function(e,t){return j.call(e,this,t)}:function(e){return j.call(e,this)})}u&&s(RegExp.prototype[b],"sham",!0)}},d847:function(e,t,n){"use strict";n("6ca2")},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}}}]);
//# sourceMappingURL=chunk-a7094fd0.38ea71c8.js.map