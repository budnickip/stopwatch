(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),i=c(4),r=c.n(i),l=(c(10),c(2));c(11);var b=function(){var e=Object(n.useState)(5),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(25),r=Object(l.a)(i,2),b=r[0],o=r[1],j=Object(n.useState)(60*b),u=Object(l.a)(j,2),d=u[0],f=u[1],O=Object(n.useState)(!1),h=Object(l.a)(O,2),m=h[0],p=h[1],x=Object(n.useState)(!1),v=Object(l.a)(x,2),k=v[0],N=v[1],g=Object(n.useState)(k?"far fa-pause-circle":" far fa-play-circle"),S=Object(l.a)(g,2),E=S[0],y=S[1],C=Object(n.useState)(!1),_=Object(l.a)(C,2),w=_[0],B=_[1];return Object(n.useEffect)((function(){f(60*b)}),[b]),Object(n.useEffect)((function(){if(k){var e=setInterval((function(){d>0?f((function(e){return e-1})):(p(!m),clearInterval(e))}),1e3);return function(){return clearInterval(e)}}}),[k,d,m]),Object(n.useEffect)((function(){f(m?60*c:60*b)}),[m]),Object(n.useEffect)((function(){0===d&&document.getElementById("beep").play()}),[d]),Object(n.useEffect)((function(){y(w?k?"fas fa-pause-circle":"fas fa-play-circle":k?"far fa-pause-circle":" far fa-play-circle")}),[w,k]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("div",{className:"header",children:Object(s.jsx)("h1",{className:"timer_header",children:"Timer"})}),Object(s.jsxs)("div",{className:"settings",children:[Object(s.jsxs)("div",{id:"break-label",className:"break-label",children:[Object(s.jsx)("p",{class:"break-label__paragraph",children:"Break Length"}),Object(s.jsx)("button",{id:"break-decrement",className:"btn",onClick:function(){c>1&&a(c-1)},children:"-"}),Object(s.jsx)("p",{id:"break-length",children:c}),Object(s.jsx)("button",{id:"break-increment",className:"btn",onClick:function(){c<60&&a(c+1)},children:"+"})]}),Object(s.jsxs)("div",{id:"session-label",className:"session-label",children:[Object(s.jsx)("p",{class:"session-label__paragraph",children:"Session Length"}),Object(s.jsx)("button",{className:"btn",id:"session-decrement",onClick:function(){b>1&&o(b-1)},children:"-"}),Object(s.jsx)("p",{id:"session-length",children:b}),Object(s.jsx)("button",{className:"btn",id:"session-increment",onClick:function(){b<60&&o(b+1)},children:"+"})]})]}),Object(s.jsxs)("div",{className:"timer",children:[Object(s.jsx)("div",{id:"timer-label",className:"timer-label",children:Object(s.jsx)("p",{className:"timer__paragraph",children:m?"Break":"Session"})}),Object(s.jsx)("div",{id:"time-left",className:"time-left",children:function(){var e=Math.floor(d/60),t=d-60*e;return(e=e<10?"0"+e:e)+":"+(t=t<10?"0"+t:t)}()}),Object(s.jsx)("audio",{id:"beep",src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"}),Object(s.jsx)("i",{id:"start_stop",onClick:function(){N(!k)},onMouseEnter:function(){B(!0)},onMouseLeave:function(){B(!1)},className:"icon ".concat(E)}),Object(s.jsx)("i",{id:"reset",onClick:function(){a(5),o(25),f(60*b),N(!1),p(!1);var e=document.getElementById("beep");e.pause(),e.currentTime=0},class:"fas icon reset-icon fa-sync"})]})]})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.bf7eab5f.chunk.js.map