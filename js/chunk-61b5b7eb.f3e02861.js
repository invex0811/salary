(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61b5b7eb"],{"0510":function(e,t,n){},2561:function(e,t,n){},"43e8":function(e,t,n){"use strict";n("0510")},"6e91":function(e,t,n){"use strict";n("bd21")},bd21:function(e,t,n){},bfba:function(e,t,n){"use strict";n("2561")},d953:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=Object(c["cb"])("data-v-72057db8");Object(c["E"])("data-v-72057db8");var o={class:"convertingTime"},a=Object(c["m"])("h2",null,"Converting time",-1),u={class:"wrapperTenths"},b={class:"wrapper_buttons"},i=Object(c["l"])(" Convert to time "),s=Object(c["l"])(" Convert to tenth ");Object(c["C"])();var l=r((function(e,t,n,l,m,d){var T=Object(c["J"])("v-btn"),j=Object(c["J"])("router-view");return Object(c["B"])(),Object(c["j"])(c["a"],null,[Object(c["m"])("div",o,[a,Object(c["m"])("div",u,[Object(c["m"])("div",b,[Object(c["m"])(T,{color:"secondary",onClick:t[1]||(t[1]=function(e){return m.currentTab="TenthToTime"}),class:["button-left buttons",{active:"TenthToTime"===m.currentTab}]},{default:r((function(){return[i]})),_:1},8,["class"]),Object(c["m"])(T,{color:"secondary",onClick:t[2]||(t[2]=function(e){return m.currentTab="TimeToTenth"}),class:["button-right buttons",{active:"TimeToTenth"===m.currentTab}]},{default:r((function(){return[s]})),_:1},8,["class"])]),(Object(c["B"])(),Object(c["j"])(c["b"],null,[(Object(c["B"])(),Object(c["j"])(Object(c["L"])(m.currentTab)))],1024))])]),Object(c["m"])(j)],64)})),m=Object(c["cb"])("data-v-6eb3dcf9");Object(c["E"])("data-v-6eb3dcf9");var d={class:"tenthToTime"},T=Object(c["m"])("h3",null,"Tenth to time",-1),j=Object(c["l"])(" OK ");Object(c["C"])();var O=m((function(e,t,n,r,o,a){var u=Object(c["J"])("v-btn");return Object(c["B"])(),Object(c["j"])("div",d,[T,Object(c["ab"])(Object(c["m"])("input",{onKeyup:t[1]||(t[1]=Object(c["bb"])((function(){return a.plusDec&&a.plusDec.apply(a,arguments)}),["enter"])),type:"number","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.a=e}),placeholder:"Number"},null,544),[[c["U"],o.a,void 0,{number:!0}]]),Object(c["m"])(u,{class:"btn",color:"primary",onClick:a.plusDec},{default:m((function(){return[j]})),_:1},8,["onClick"]),Object(c["m"])("span",null,Object(c["O"])(o.answer),1)])})),v={name:"TenthToTime",data:function(){return{a:"",answer:""}},methods:{plusDec:function(){var e;e=this.a%1,console.log("ostatoc:"+e);var t=this.a-e;console.log("hours:"+t);var n=Math.round(60*e);return console.log("convertMinute:"+n),this.answer=t+":"+n}}};n("6e91");v.render=O,v.__scopeId="data-v-6eb3dcf9";var p=v,f=Object(c["cb"])("data-v-f71aa282");Object(c["E"])("data-v-f71aa282");var h={class:"timeToTenth"},w=Object(c["m"])("h3",null,"Time to tenth",-1),C={class:"wrapperInput"},y=Object(c["m"])("b",{style:{"font-size":"30px"}},":",-1),_=Object(c["l"])(" OK ");Object(c["C"])();var k=f((function(e,t,n,r,o,a){var u=Object(c["J"])("v-btn");return Object(c["B"])(),Object(c["j"])("div",h,[w,Object(c["m"])("div",C,[Object(c["ab"])(Object(c["m"])("input",{onKeyup:t[1]||(t[1]=Object(c["bb"])((function(){return a.convertToTime&&a.convertToTime.apply(a,arguments)}),["enter"])),type:"number","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.hours=e}),placeholder:"Hours"},null,544),[[c["U"],o.hours,void 0,{number:!0}]]),y,Object(c["ab"])(Object(c["m"])("input",{onKeyup:t[3]||(t[3]=Object(c["bb"])((function(){return a.convertToTime&&a.convertToTime.apply(a,arguments)}),["enter"])),type:"number","onUpdate:modelValue":t[4]||(t[4]=function(e){return o.minutes=e}),placeholder:"Minutes"},null,544),[[c["U"],o.minutes,void 0,{number:!0}]])]),Object(c["m"])(u,{class:"btn",color:"primary",onClick:a.convertToTime},{default:f((function(){return[_]})),_:1},8,["onClick"]),Object(c["m"])("span",null,Object(c["O"])(o.answer),1)])})),g={name:"TimeToTenth",data:function(){return{hours:"",minutes:"",answer:""}},methods:{convertToTime:function(){var e=this.minutes/60;return this.answer=this.hours+e}}};n("bfba");g.render=k,g.__scopeId="data-v-f71aa282";var J=g,U={name:"ConvertingTime",components:{TimeToTenth:J,TenthToTime:p},data:function(){return{currentTab:"TenthToTime",tabs:[{title:"Convert to time",id:"TenthToTime"},{title:"Convert to tenth",id:"TimeToTenth"}]}},computed:{}};n("43e8");U.render=l,U.__scopeId="data-v-72057db8";t["default"]=U}}]);
//# sourceMappingURL=chunk-61b5b7eb.f3e02861.js.map