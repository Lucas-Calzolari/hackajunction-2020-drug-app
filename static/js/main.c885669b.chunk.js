(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),o=n(4),r=n.n(o),i=(n(10),n(2)),u=(n(11),n(12),function(e){return Object(a.jsxs)("div",{className:"home-page",children:[Object(a.jsx)("img",{className:"background-image",src:"/hackajunction-2020-drug-app/LandingPage.jpg"}),Object(a.jsxs)("div",{className:"content-container",children:[Object(a.jsx)("h1",{className:"title",children:"Think you can outsmart drugs?"}),Object(a.jsx)("h2",{className:"subtitle",children:"Choose your own drug adventure to see who wins: You or Drugs"}),Object(a.jsx)("button",{className:"start-button",onClick:e.onStart,children:"Play Now"})]})]})}),l=(n(13),[{type:"content",content:"You just joined a new group of friends, and they are awesome!"},{type:"content",content:"They decided to go somewhere during the weekend and started using meth."},{type:"content",content:"You did not want to be the boring one, so you gave it a try!"},["I dont want to go against the trend.","Decide to quit."],{type:"content",content:"You havent paid much attention to your previous friends.",icon:"/hackajunction-2020-drug-app/heart.svg"},{type:"content",content:"Your scores have never been this low, you concentration is surely not at its peak.",icon:"/hackajunction-2020-drug-app/brain.svg"},["Fine you have new friends now.","Care about your previous friends and relationships."],{type:"content",content:"Skipping school sometimes would hurts, and there are best places to be."},{type:"content",content:"Your mom feels something is wrong but not sure what is causing it.",icon:"/hackajunction-2020-drug-app/mom.svg"},{type:"content",content:"She cries frequently and has trouble sleeping, but you are not aware of it."},{type:"content",content:"Trying a direct approach she talks to you."},["The last thing you need is a punishment , lie and hope for the best.","Tell her everything and face the issue."],{type:"content",content:"Seems like she fell for it and you are safe."},{type:"content",content:"You still dont feel like you have a reason to stop and keep using it casually."},{type:"content",content:"Are people able to see the change to your skin color and teeth decaying?",icon:"/hackajunction-2020-drug-app/tooth.svg"},{type:"result",content:"Your mom is not able to help you anymore, you\u2019ve lost your beauty, friends, grades & the ability to even understand any of this loss. Think you\u2019ll do better on another drug?"}]),j=(n(14),function(){return Object(a.jsx)("div",{className:"progress-bar",children:Object(a.jsx)("div",{className:"inner-bar"})})}),d=(n(15),function(e){return Object(a.jsxs)("div",{className:"decay-trail",children:[e.imgName&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{src:"/hackajunction-2020-drug-app/bw_".concat(e.imgName),style:{transform:"translate(6px, -15px)  scale(0.5)"}}),Object(a.jsx)("img",{src:"/hackajunction-2020-drug-app/bw_".concat(e.imgName),style:{transform:"scaleX(-1) translate(6px, -12px)  scale(0.6)"}}),Object(a.jsx)("img",{src:"/hackajunction-2020-drug-app/bw_".concat(e.imgName),style:{transform:"translate(6px, -9px)  scale(0.7)"}}),Object(a.jsx)("img",{src:"/hackajunction-2020-drug-app/bw_".concat(e.imgName),style:{transform:"scaleX(-1) translate(6px, -6px)  scale(0.8)"}}),Object(a.jsx)("img",{src:"/hackajunction-2020-drug-app/bw_".concat(e.imgName),style:{transform:"translate(6px, -3px) scale(0.9)"}}),Object(a.jsx)("img",{src:"/hackajunction-2020-drug-app/bw_".concat(e.imgName),style:{transform:"scaleX(-1) translate(6px, -3px)"}})]}),Object(a.jsx)("div",{className:"main-icon-container",children:Object(a.jsx)("img",{src:e.imgName?"/hackajunction-2020-drug-app/".concat(e.imgName):"/hackajunction-2020-drug-app/full_heart.svg"})})]})}),p=(n(16),function(){return Object(a.jsxs)("div",{className:"drug-picker",children:[Object(a.jsxs)("button",{className:"drug-button",children:[Object(a.jsx)("img",{src:"/hackajunction-2020-drug-app/unavailable.svg"}),Object(a.jsx)("img",{src:"/hackajunction-2020-drug-app/cocaine.svg"})]}),Object(a.jsxs)("button",{className:"drug-button",children:[Object(a.jsx)("img",{src:"/hackajunction-2020-drug-app/unavailable.svg"}),Object(a.jsx)("img",{src:"/hackajunction-2020-drug-app/heroin.svg"})]}),Object(a.jsx)("button",{className:"drug-button",children:Object(a.jsx)("img",{src:"/hackajunction-2020-drug-app/meth.svg"})})]})}),g=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],s=t[1],o=Object(c.useRef)(null);Object(c.useEffect)((function(){var e=l[n];if(Array.isArray(e)){var t=setTimeout((function(){s(n+1)}),7e3);return function(){return clearTimeout(t)}}if("content"===e.type){var a=setTimeout((function(){s(n+1)}),4e3);return function(){return clearTimeout(a)}}}),[n]),Object(c.useEffect)((function(){o.current&&o.current.scrollTo({top:999999999,behavior:"smooth"})}),[n]);var r="/hackajunction-2020-drug-app/profile_0.jpg";n>=7&&(r="/hackajunction-2020-drug-app/profile_1.jpg"),n>=12&&(r="/hackajunction-2020-drug-app/profile_2.jpg");var u=null;return n>=4&&(u="heart.svg"),n>=5&&(u="brain.svg"),n>=14&&(u="tooth.svg"),Object(a.jsxs)("div",{className:"game-page",children:[Array.isArray(l[n])&&Object(a.jsx)(j,{}),Object(a.jsx)("div",{className:"gradient-overlay"}),Object(a.jsx)("img",{className:"profile-image",src:r}),Object(a.jsx)(p,{}),n==l.length&&Object(a.jsx)("button",{className:"share-button",children:Object(a.jsx)("img",{src:"/hackajunction-2020-drug-app/share.svg"})}),Object(a.jsxs)("div",{className:"chat-box",children:[Object(a.jsxs)("div",{className:"location-tag",style:{display:"flex"},children:[Object(a.jsx)("img",{src:"/hackajunction-2020-drug-app/pin.png",style:{width:"20px",marginRight:"10px"}}),"aalto university"]}),Object(a.jsx)("div",{className:"text-container",ref:o,children:l.slice(0,n+1).map((function(e,t){return Array.isArray(e)?t!==n?Object(a.jsx)("div",{className:"message action",children:e[0]}):Object(a.jsxs)("div",{className:"action-buttons-container",children:[Object(a.jsx)("button",{className:"option-button",onClick:function(){return s(n+1)},children:e[0]}),Object(a.jsx)("button",{className:"option-button",style:{cursor:"default"},disabled:!0,children:e[1]})]}):"content"===e.type?Object(a.jsxs)("div",{className:"message",children:[e.icon&&Object(a.jsx)("img",{className:"message-icon",src:e.icon}),e.content]}):"result"===e.type?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"message",children:e.content}),Object(a.jsx)("button",{className:"play-again-button",onClick:function(){return s(0)},children:"Play Again"})]}):void 0}))}),Object(a.jsx)(d,{imgName:u})]})]})};var h=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(a.jsxs)("div",{className:"App",children:[!n&&Object(a.jsx)(u,{onStart:function(){return s(!0)}}),n&&Object(a.jsx)(g,{})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),m()}],[[17,1,2]]]);
//# sourceMappingURL=main.c885669b.chunk.js.map