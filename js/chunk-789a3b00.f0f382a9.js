(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-789a3b00"],{1148:function(e,t,c){"use strict";var n=c("a691"),i=c("1d80");e.exports=function(e){var t=String(i(this)),c="",o=n(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(c+=t);return c}},"19a4":function(e,t,c){"use strict";c.r(t);c("b680");var n=c("7a23"),i=Object(n["J"])("data-v-67be09cc");Object(n["u"])("data-v-67be09cc");var o={class:"wrap-page__moneyCalc"},l=Object(n["i"])("h2",null,"Salary",-1),r={class:"wrap-input"},s={class:"test-percent-wrap"},a={class:"wrap-checkbox"},u={class:"label",for:"checkHoursBonus",title:"Your X2 time"},b=Object(n["i"])("div",{class:"label-text"},"Time X2:",-1),h={class:"toggle"},O=Object(n["i"])("div",{class:"indicator"},null,-1),j={class:"label",for:"checkMoneyBonus"},d=Object(n["i"])("div",{class:"label-text"},"Money bonus:",-1),m={class:"toggle"},p=Object(n["i"])("div",{class:"indicator"},null,-1),f={class:"label",for:"checkMoneyRate"},y=Object(n["i"])("div",{class:"label-text"},"UAH rate:",-1),k={class:"toggle"},v=Object(n["i"])("div",{class:"indicator"},null,-1),T={class:"label",for:"checkTax"},g=Object(n["i"])("div",{class:"label-text"},"Tax:",-1),B={class:"toggle"},x=Object(n["i"])("div",{class:"indicator"},null,-1),M={class:"label",for:"checkVacation"},w=Object(n["i"])("div",{class:"label-text"},"Vacation:",-1),H={class:"toggle"},P=Object(n["i"])("div",{class:"indicator"},null,-1),R={class:"wrap-buttons"},X={key:0,class:"wrap-info"},V=Object(n["i"])("td",null,"Working time:",-1),U=Object(n["i"])("td",null,"Time:",-1),E={key:0},F=Object(n["i"])("td",null,"Bonus time:",-1),C={key:1},A=Object(n["i"])("td",null,"Time per test:",-1),S={key:2},D=Object(n["i"])("td",null,"Over time:",-1),N=Object(n["i"])("td",null,"Rate:",-1),_={key:3},I=Object(n["i"])("td",null,"Over rate:",-1),J={key:4},W=Object(n["i"])("td",null,"Rate X2:",-1),K={key:5},Y=Object(n["i"])("td",null,"Money bonus:",-1),$=Object(n["i"])("td",null,"Money:",-1),q={key:6},z=Object(n["i"])("td",null,"Tax 5%:",-1),G={key:7},L=Object(n["i"])("td",null,"Salary UAH:",-1);Object(n["s"])();var Q=i((function(e,t,c,i,Q,Z){var ee=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["f"])(n["a"],null,[Object(n["i"])("div",o,[l,Object(n["i"])("div",r,[Object(n["H"])(Object(n["i"])("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=function(e){return Q.workTime=e}),placeholder:"Work time"},null,512),[[n["E"],Q.workTime,void 0,{number:!0}]]),Object(n["i"])("div",s,[Object(n["H"])(Object(n["i"])("input",{class:"input-percent",type:"number","onUpdate:modelValue":t[2]||(t[2]=function(e){return Q.firstTestPercent=e}),placeholder:"First test %"},null,512),[[n["E"],Q.firstTestPercent,void 0,{number:!0}]]),Object(n["H"])(Object(n["i"])("input",{class:"input-percent",type:"number","onUpdate:modelValue":t[3]||(t[3]=function(e){return Q.secondTestPercent=e}),placeholder:"Second test %"},null,512),[[n["E"],Q.secondTestPercent,void 0,{number:!0}]])]),Object(n["H"])(Object(n["i"])("input",{type:"number","onUpdate:modelValue":t[4]||(t[4]=function(e){return Q.rate=e}),placeholder:"Rate"},null,512),[[n["E"],Q.rate,void 0,{number:!0}]]),Q.checkHoursBonus?Object(n["H"])((Object(n["r"])(),Object(n["f"])("input",{key:0,type:"number","onUpdate:modelValue":t[5]||(t[5]=function(e){return Q.timeX2=e}),placeholder:"Time X2"},null,512)),[[n["E"],Q.timeX2,void 0,{number:!0}]]):Object(n["g"])("",!0),Q.checkMoneyBonus?Object(n["H"])((Object(n["r"])(),Object(n["f"])("input",{key:1,type:"number","onUpdate:modelValue":t[6]||(t[6]=function(e){return Q.moneyBonus=e}),placeholder:"Money bonus"},null,512)),[[n["E"],Q.moneyBonus,void 0,{number:!0}]]):Object(n["g"])("",!0),Q.checkMoneyRate?Object(n["H"])((Object(n["r"])(),Object(n["f"])("input",{key:2,type:"number","onUpdate:modelValue":t[7]||(t[7]=function(e){return Q.moneyRate=e}),placeholder:"UAH rate"},null,512)),[[n["E"],Q.moneyRate,void 0,{number:!0}]]):Object(n["g"])("",!0)]),Object(n["i"])("div",a,[Object(n["i"])("label",u,[b,Object(n["i"])("div",h,[Object(n["H"])(Object(n["i"])("input",{class:"toggle-state",type:"checkbox",id:"checkHoursBonus","onUpdate:modelValue":t[8]||(t[8]=function(e){return Q.checkHoursBonus=e})},null,512),[[n["D"],Q.checkHoursBonus]]),O])]),Object(n["i"])("label",j,[d,Object(n["i"])("div",m,[Object(n["H"])(Object(n["i"])("input",{class:"toggle-state",type:"checkbox",id:"checkMoneyBonus","onUpdate:modelValue":t[9]||(t[9]=function(e){return Q.checkMoneyBonus=e})},null,512),[[n["D"],Q.checkMoneyBonus]]),p])]),Object(n["i"])("label",f,[y,Object(n["i"])("div",k,[Object(n["H"])(Object(n["i"])("input",{class:"toggle-state",type:"checkbox",id:"checkMoneyRate","onUpdate:modelValue":t[10]||(t[10]=function(e){return Q.checkMoneyRate=e})},null,512),[[n["D"],Q.checkMoneyRate]]),v])]),Object(n["i"])("label",T,[g,Object(n["i"])("div",B,[Object(n["H"])(Object(n["i"])("input",{class:"toggle-state",type:"checkbox",id:"checkTax","onUpdate:modelValue":t[11]||(t[11]=function(e){return Q.checkTax=e})},null,512),[[n["D"],Q.checkTax]]),x])]),Object(n["i"])("label",M,[w,Object(n["i"])("div",H,[Object(n["H"])(Object(n["i"])("input",{class:"toggle-state",type:"checkbox",id:"checkVacation","onUpdate:modelValue":t[12]||(t[12]=function(e){return Q.checkVacation=e})},null,512),[[n["D"],Q.checkVacation]]),P])])]),Object(n["i"])("div",R,[Object(n["i"])("button",{onClick:t[13]||(t[13]=function(){return Z.calcMoney&&Z.calcMoney.apply(Z,arguments)})},"OK")]),Q.workTime>0?(Object(n["r"])(),Object(n["f"])("div",X,[Object(n["i"])("table",null,[Object(n["i"])("tr",null,[V,Object(n["i"])("td",null,Object(n["B"])(Q.workTime),1)]),Object(n["i"])("tr",null,[U,Object(n["i"])("td",null,Object(n["B"])(Q.hours),1)]),Q.checkHoursBonus?(Object(n["r"])(),Object(n["f"])("tr",E,[F,Object(n["i"])("td",null,Object(n["B"])(Q.timeX2),1)])):Object(n["g"])("",!0),Q.checkHoursBonus?(Object(n["r"])(),Object(n["f"])("tr",C,[A,Object(n["i"])("td",null,Object(n["B"])(Q.timeTest),1)])):Object(n["g"])("",!0),Q.overTime>0?(Object(n["r"])(),Object(n["f"])("tr",S,[D,Object(n["i"])("td",null,Object(n["B"])(Q.overTime),1)])):Object(n["g"])("",!0),Object(n["i"])("tr",null,[N,Object(n["i"])("td",null,Object(n["B"])(Q.rate),1)]),Q.rate>2?(Object(n["r"])(),Object(n["f"])("tr",_,[I,Object(n["i"])("td",null,Object(n["B"])(Q.overRate),1)])):Object(n["g"])("",!0),Q.timeX2>0?(Object(n["r"])(),Object(n["f"])("tr",J,[W,Object(n["i"])("td",null,Object(n["B"])(Q.rateX2),1)])):Object(n["g"])("",!0),Q.checkMoneyBonus?(Object(n["r"])(),Object(n["f"])("tr",K,[Y,Object(n["i"])("td",null,Object(n["B"])(Q.moneyBonus),1)])):Object(n["g"])("",!0),Object(n["i"])("tr",null,[$,Object(n["i"])("td",null,Object(n["B"])(Z.totalPlus.toFixed(2)+" $"),1)]),Q.checkMoneyRate?(Object(n["r"])(),Object(n["f"])("tr",q,[z,Object(n["i"])("td",null,"〜"+Object(n["B"])(Z.calc5Percent.toFixed(2)),1)])):Object(n["g"])("",!0),Q.checkMoneyRate?(Object(n["r"])(),Object(n["f"])("tr",G,[L,Object(n["i"])("td",null,Object(n["B"])(Z.convertMoneyToUAH.toFixed(2)),1)])):Object(n["g"])("",!0)])])):Object(n["g"])("",!0)]),Object(n["i"])(ee)],64)})),Z={name:"TestMoneyCalc",data:function(){return{workTime:"",rate:"",timeTest:"",firstTestPercent:"",secondTestPercent:"",timeX2:"",moneyBonus:"",moneyRate:"",checkHoursBonus:!1,checkMoneyBonus:!1,checkMoneyRate:!1,checkTax:!1,checkVacation:!1,hours:"",overRate:"",overTime:"",rateX2:"",totalTestPercent:"",total:"",timeX2Calc:""}},methods:{calcMoney:function(){this.hours=this.workTime,this.overRate=1.5*this.rate,this.rateX2=2*this.rate,this.totalTestPercent=(this.firstTestPercent+this.secondTestPercent)/2,this.timeX2Calc=this.timeX2,this.totalTestPercent>=91?(this.hours+=8,this.timeTest=8):this.totalTestPercent>=81&&this.totalTestPercent<=90?(this.hours+=6,this.timeTest=6):this.totalTestPercent>=71&&this.totalTestPercent<=80?(this.hours+=4,this.timeTest=4):this.totalTestPercent>=60&&this.totalTestPercent<=70?(this.hours+=0,this.timeTest=0):this.totalTestPercent<60&&(this.hours-=4,this.timeTest="-4"),this.hours<176?(this.hours+=this.timeX2Calc,this.timeX2Calc=this.hours-176,this.hours>176&&(this.overTime=this.hours-176-this.timeX2Calc)):this.hours>176&&(this.overTime=this.hours-176),this.hours<=176?this.total=this.hours*this.rate:this.hours>176&&(this.total=176*this.rate+this.overTime*this.overRate)}},computed:{plusHoursX2:function(){return this.timeX2Calc*this.rateX2},plusTax:function(){return 45*this.checkTax},plusVacation:function(){return this.total/100*(4*this.checkVacation)},plusMoneyBonus:function(){return this.moneyBonus*this.checkMoneyBonus},totalPlus:function(){return this.total+(this.plusHoursX2+this.plusTax+this.plusVacation+this.plusMoneyBonus)},convertMoneyToUAH:function(){return this.totalPlus*this.moneyRate},calc5Percent:function(){return this.convertMoneyToUAH/100*(5*this.checkMoneyRate)}}};c("9835");Z.render=Q,Z.__scopeId="data-v-67be09cc";t["default"]=Z},3253:function(e,t,c){},"408a":function(e,t,c){var n=c("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=n(e))throw TypeError("Incorrect invocation");return+e}},9835:function(e,t,c){"use strict";c("3253")},b680:function(e,t,c){"use strict";var n=c("23e7"),i=c("a691"),o=c("408a"),l=c("1148"),r=c("d039"),s=1..toFixed,a=Math.floor,u=function(e,t,c){return 0===t?c:t%2===1?u(e,t-1,c*e):u(e*e,t/2,c)},b=function(e){var t=0,c=e;while(c>=4096)t+=12,c/=4096;while(c>=2)t+=1,c/=2;return t},h=function(e,t,c){var n=-1,i=c;while(++n<6)i+=t*e[n],e[n]=i%1e7,i=a(i/1e7)},O=function(e,t){var c=6,n=0;while(--c>=0)n+=e[c],e[c]=a(n/t),n=n%t*1e7},j=function(e){var t=6,c="";while(--t>=0)if(""!==c||0===t||0!==e[t]){var n=String(e[t]);c=""===c?n:c+l.call("0",7-n.length)+n}return c},d=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){s.call({})}));n({target:"Number",proto:!0,forced:d},{toFixed:function(e){var t,c,n,r,s=o(this),a=i(e),d=[0,0,0,0,0,0],m="",p="0";if(a<0||a>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(m="-",s=-s),s>1e-21)if(t=b(s*u(2,69,1))-69,c=t<0?s*u(2,-t,1):s/u(2,t,1),c*=4503599627370496,t=52-t,t>0){h(d,0,c),n=a;while(n>=7)h(d,1e7,0),n-=7;h(d,u(10,n,1),0),n=t-1;while(n>=23)O(d,1<<23),n-=23;O(d,1<<n),h(d,1,1),O(d,2),p=j(d)}else h(d,0,c),h(d,1<<-t,0),p=j(d)+l.call("0",a);return a>0?(r=p.length,p=m+(r<=a?"0."+l.call("0",a-r)+p:p.slice(0,r-a)+"."+p.slice(r-a))):p=m+p,p}})}}]);
//# sourceMappingURL=chunk-789a3b00.f0f382a9.js.map