(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a2e12f9"],{"2e64":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),o=Object(n["J"])("data-v-272254ca");Object(n["u"])("data-v-272254ca");var l={class:"wrap-page__moneyCalc"},a=Object(n["i"])("h2",null,"TEST Money calculator",-1),u={class:"wrap-input"},i={class:"wrap-checkbox"},s={class:"label",for:"checkHoursBonus"},b={class:"toggle"},r=Object(n["i"])("div",{class:"indicator"},null,-1),O=Object(n["i"])("div",{class:"label-text"},"Time bonus:",-1),j={class:"label",for:"checkMoneyBonus"},d={class:"toggle"},h=Object(n["i"])("div",{class:"indicator"},null,-1),y=Object(n["i"])("div",{class:"label-text"},"Money bonus:",-1),k={class:"label",for:"checkMoneyRate"},p={class:"toggle"},v=Object(n["i"])("div",{class:"indicator"},null,-1),m=Object(n["i"])("div",{class:"label-text"},"Money rate:",-1),f={class:"label",for:"checkTax"},B={class:"toggle"},g=Object(n["i"])("div",{class:"indicator"},null,-1),M=Object(n["i"])("div",{class:"label-text"},"Tax:",-1),x={class:"label",for:"checkVacation"},V={class:"toggle"},w=Object(n["i"])("div",{class:"indicator"},null,-1),H=Object(n["i"])("div",{class:"label-text"},"Vacation:",-1),T={class:"wrap-buttons"},R={key:0,class:"wrap-info"},D=Object(n["i"])("td",null,"Working days:",-1),U=Object(n["i"])("td",null,"Time:",-1),E={key:0},_=Object(n["i"])("td",null,"Bonus time:",-1),C={key:1},J=Object(n["i"])("td",null,"Over time:",-1),P=Object(n["i"])("td",null,"Rate:",-1),W={key:2},I=Object(n["i"])("td",null,"Over rate:",-1),K={key:3},S=Object(n["i"])("td",null,"Money bonus:",-1),$=Object(n["i"])("td",null,"Money:",-1);Object(n["s"])();var q=o((function(e,t,c,o,q,z){var A=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["f"])(n["a"],null,[Object(n["i"])("div",l,[a,Object(n["i"])("div",u,[Object(n["H"])(Object(n["i"])("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=function(e){return q.workDay=e}),placeholder:"Work day"},null,512),[[n["E"],q.workDay,void 0,{number:!0}]]),Object(n["H"])(Object(n["i"])("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=function(e){return q.rate=e}),placeholder:"Rate"},null,512),[[n["E"],q.rate,void 0,{number:!0}]]),q.checkHoursBonus?Object(n["H"])((Object(n["r"])(),Object(n["f"])("input",{key:0,type:"number","onUpdate:modelValue":t[3]||(t[3]=function(e){return q.hoursBonus=e}),placeholder:"Hours bonus"},null,512)),[[n["E"],q.hoursBonus,void 0,{number:!0}]]):Object(n["g"])("",!0),q.checkMoneyBonus?Object(n["H"])((Object(n["r"])(),Object(n["f"])("input",{key:1,type:"number","onUpdate:modelValue":t[4]||(t[4]=function(e){return q.moneyBonus=e}),placeholder:"Money bonus"},null,512)),[[n["E"],q.moneyBonus,void 0,{number:!0}]]):Object(n["g"])("",!0),q.checkMoneyRate?Object(n["H"])((Object(n["r"])(),Object(n["f"])("input",{key:2,type:"number","onUpdate:modelValue":t[5]||(t[5]=function(e){return q.moneyRate=e}),placeholder:"Money rate"},null,512)),[[n["E"],q.moneyRate,void 0,{number:!0}]]):Object(n["g"])("",!0)]),Object(n["i"])("div",i,[Object(n["i"])("label",s,[Object(n["i"])("div",b,[Object(n["H"])(Object(n["i"])("input",{class:"toggle-state",type:"checkbox",id:"checkHoursBonus","onUpdate:modelValue":t[6]||(t[6]=function(e){return q.checkHoursBonus=e})},null,512),[[n["D"],q.checkHoursBonus]]),r]),O]),Object(n["i"])("label",j,[Object(n["i"])("div",d,[Object(n["H"])(Object(n["i"])("input",{class:"toggle-state",type:"checkbox",id:"checkMoneyBonus","onUpdate:modelValue":t[7]||(t[7]=function(e){return q.checkMoneyBonus=e})},null,512),[[n["D"],q.checkMoneyBonus]]),h]),y]),Object(n["i"])("label",k,[Object(n["i"])("div",p,[Object(n["H"])(Object(n["i"])("input",{class:"toggle-state",type:"checkbox",id:"checkMoneyRate","onUpdate:modelValue":t[8]||(t[8]=function(e){return q.checkMoneyRate=e})},null,512),[[n["D"],q.checkMoneyRate]]),v]),m]),Object(n["i"])("label",f,[Object(n["i"])("div",B,[Object(n["H"])(Object(n["i"])("input",{class:"toggle-state",type:"checkbox",id:"checkTax","onUpdate:modelValue":t[9]||(t[9]=function(e){return q.checkTax=e})},null,512),[[n["D"],q.checkTax]]),g]),M]),Object(n["i"])("label",x,[Object(n["i"])("div",V,[Object(n["H"])(Object(n["i"])("input",{class:"toggle-state",type:"checkbox",id:"checkVacation","onUpdate:modelValue":t[10]||(t[10]=function(e){return q.checkVacation=e})},null,512),[[n["D"],q.checkVacation]]),w]),H])]),Object(n["i"])("div",T,[Object(n["i"])("button",{onClick:t[11]||(t[11]=function(){return z.calcMoney&&z.calcMoney.apply(z,arguments)})},"OK")]),q.workDay>0?(Object(n["r"])(),Object(n["f"])("div",R,[Object(n["i"])("table",null,[Object(n["i"])("tr",null,[D,Object(n["i"])("td",null,Object(n["B"])(q.workDay),1)]),Object(n["i"])("tr",null,[U,Object(n["i"])("td",null,Object(n["B"])(q.hours),1)]),q.checkHoursBonus?(Object(n["r"])(),Object(n["f"])("tr",E,[_,Object(n["i"])("td",null,Object(n["B"])(q.hoursBonus),1)])):Object(n["g"])("",!0),q.hours>176?(Object(n["r"])(),Object(n["f"])("tr",C,[J,Object(n["i"])("td",null,Object(n["B"])(q.overTime),1)])):Object(n["g"])("",!0),Object(n["i"])("tr",null,[P,Object(n["i"])("td",null,Object(n["B"])(q.rate),1)]),q.rate>2?(Object(n["r"])(),Object(n["f"])("tr",W,[I,Object(n["i"])("td",null,Object(n["B"])(q.overRate),1)])):Object(n["g"])("",!0),q.checkMoneyBonus?(Object(n["r"])(),Object(n["f"])("tr",K,[S,Object(n["i"])("td",null,Object(n["B"])(q.moneyBonus),1)])):Object(n["g"])("",!0),Object(n["i"])("tr",null,[$,Object(n["i"])("td",null,Object(n["B"])(z.totalPlus+" $"),1)])])])):Object(n["g"])("",!0)]),Object(n["i"])(A)],64)})),z={name:"TestMoneyCalc",data:function(){return{workDay:"",rate:"",hoursBonus:"",moneyBonus:"",moneyRate:"",checkHoursBonus:!1,checkMoneyBonus:!1,checkMoneyRate:!1,checkTax:!1,checkVacation:!1,hours:"",overRate:"",overTime:"",total:""}},methods:{calcMoney:function(){this.hours=8*this.workDay,this.hours+=this.hoursBonus,this.overTime=this.hours-176,this.overRate=1.5*this.rate,this.hours<=176?this.total=this.hours*this.rate:this.hours>176&&(this.total=176*this.rate+this.overTime*this.overRate)}},computed:{plusTax:function(){return 45*this.checkTax},plusVacation:function(){return this.total/100*(4*this.checkVacation)},plusMoneyBonus:function(){return this.moneyBonus*this.checkMoneyBonus},totalPlus:function(){return this.total+(this.plusTax+this.plusVacation+this.plusMoneyBonus)}}};c("a593");z.render=q,z.__scopeId="data-v-272254ca";t["default"]=z},"433c":function(e,t,c){},a593:function(e,t,c){"use strict";c("433c")}}]);
//# sourceMappingURL=chunk-7a2e12f9.442d3f5e.js.map