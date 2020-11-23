(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),a=c.n(s),r=c(16),i=c.n(r),l=(c(23),c(24),c(4));var j=function(e){return Object(n.jsxs)("div",{className:"settings",children:[Object(n.jsxs)("div",{id:"break-label",className:"break-label",children:[Object(n.jsx)("p",{class:"break-label__paragraph",children:"Break Length"}),Object(n.jsx)("button",{id:"break-decrement",className:"btn",onClick:e.breakDecrement,children:"-"}),Object(n.jsx)("p",{children:e.breakLength}),Object(n.jsx)("button",{id:"break-increment",className:"btn",onClick:e.breakIncrement,children:"+"})]}),Object(n.jsxs)("div",{id:"session-label",className:"session-label",children:[Object(n.jsx)("p",{class:"session-label__paragraph",children:"Session Length"}),Object(n.jsx)("button",{className:"btn",id:"session-decrement",onClick:e.sessionDecrement,children:"-"}),Object(n.jsx)("p",{children:e.sessionLength}),Object(n.jsx)("button",{className:"btn",id:"session-increment",onClick:e.sessionIncrement,children:"+"})]})]})};var b=function(e){return Object(n.jsxs)("div",{className:"session",children:[Object(n.jsx)("div",{id:"timer-label",className:"timer-label",children:Object(n.jsx)("p",{className:"timer-label__paragraph",children:e.breakTime?"Break":"Session"})}),Object(n.jsx)("div",{id:"time-left",className:"time-left",children:e.showTime()}),Object(n.jsx)("audio",{id:"beep",src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"}),Object(n.jsx)("i",{id:"start_stop",onClick:e.handleStart,onMouseEnter:e.enterName,onMouseLeave:e.leaveName,className:"icon ".concat(e.name)}),Object(n.jsx)("i",{id:"reset",onClick:e.reset,class:"fas icon reset-icon fa-sync"})]})};var o=function(){var e=Object(s.useState)(5),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(25),i=Object(l.a)(r,2),o=i[0],u=i[1],d=Object(s.useState)(60*o),m=Object(l.a)(d,2),O=m[0],h=m[1],f=Object(s.useState)(!1),p=Object(l.a)(f,2),x=p[0],v=p[1],N=Object(s.useState)(!1),k=Object(l.a)(N,2),S=k[0],_=k[1],I=Object(s.useState)(S?"far fa-pause-circle":" far fa-play-circle"),g=Object(l.a)(I,2),w=g[0],C=g[1],E=Object(s.useState)(!1),y=Object(l.a)(E,2),L=y[0],T=y[1];return Object(s.useEffect)((function(){h(60*o)}),[o]),Object(s.useEffect)((function(){if(S){var e=setInterval((function(){O>0?h((function(e){return e-1})):(v(!x),clearInterval(e))}),1e3);return function(){return clearInterval(e)}}}),[S,O,x]),Object(s.useEffect)((function(){h(x?60*c:60*o)}),[x]),Object(s.useEffect)((function(){0===O&&document.getElementById("beep").play()}),[O]),Object(s.useEffect)((function(){C(L?S?"fas fa-pause-circle":"fas fa-play-circle":S?"far fa-pause-circle":" far fa-play-circle")}),[L,S]),Object(n.jsxs)("div",{className:"timer-app",children:[Object(n.jsx)("div",{className:"timer-header",children:Object(n.jsx)("h1",{className:"timer-header__header",children:"Timer"})}),Object(n.jsx)(j,{breakLength:c,sessionLength:o,breakIncrement:function(){c<60&&a(c+1)},breakDecrement:function(){c>1&&a(c-1)},sessionDecrement:function(){o>1&&u(o-1)},sessionIncrement:function(){o<60&&u(o+1)}}),Object(n.jsx)(b,{breakTime:x,showTime:function(){var e=Math.floor(O/60),t=O-60*e;return(e=e<10?"0"+e:e)+":"+(t=t<10?"0"+t:t)},handleStart:function(){_(!S)},enterName:function(){T(!0)},leaveName:function(){T(!1)},name:w,reset:function(){a(5),u(25),h(60*o),_(!1),v(!1);var e=document.getElementById("beep");e.pause(),e.currentTime=0}})]})};var u=function(){var e=Object(s.useState)(0),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(!1),i=Object(l.a)(r,2),j=i[0],b=i[1],o=Object(s.useState)(!1),u=Object(l.a)(o,2),d=u[0],m=u[1],O=Object(s.useState)(0),h=Object(l.a)(O,2),f=(h[0],h[1]),p=Object(s.useState)(0),x=Object(l.a)(p,2),v=x[0],N=x[1];return Object(s.useEffect)((function(){var e=setInterval((function(){j&&!d?N(Math.round(performance.now()-c)):clearInterval(e)}),10);return function(){return clearInterval(e)}})),Object(n.jsxs)("div",{className:"stopwatch",children:[Object(n.jsx)("h1",{className:"stopwatch__header",children:"Stoper"}),Object(n.jsx)("div",{className:"time",children:function(){var e,t,c,n;return j?(e=parseInt(v%1e3),t=parseInt(v/1e3%60),c=parseInt(v/6e4%60),n=(n=parseInt(v/36e5%24))<10?"0"+n:n,c=c<10?"0"+c:c,t=t<10?"0"+t:t):(e="00",t="00",c="00",n="00"),n+":"+c+":"+t+"."+e}()}),Object(n.jsx)("button",{onClick:function(){j||a(performance.now()),b(!0),m(!1)},children:"Start"}),Object(n.jsx)("button",{onClick:function(){f(performance.now()),m(!0)},children:"Stop"}),Object(n.jsx)("button",{onClick:function(){b(!1),N("00:00:00")},children:"Reset"})]})},d=c(10),m=c(2);var O=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(d.a,{basename:"/stopwatch",children:Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsxs)("ul",{className:"nav__list",children:[Object(n.jsx)("li",{className:"nav__item",children:Object(n.jsx)(d.b,{className:"nav__link",to:"/",children:"Timer"})}),Object(n.jsx)("li",{className:"nav__item",children:Object(n.jsx)(d.b,{className:"nav__link",to:"/stoper",children:"Stoper"})})]}),Object(n.jsxs)(m.c,{children:[Object(n.jsx)(m.a,{exact:!0,path:"/",children:Object(n.jsx)(o,{})}),Object(n.jsx)(m.a,{path:"/stoper",children:Object(n.jsx)(u,{})})]})]})})})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.8a3dae08.chunk.js.map