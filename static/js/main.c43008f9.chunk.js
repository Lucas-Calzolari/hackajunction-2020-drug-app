(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),a=n.n(c),o=n(4),r=n.n(o),i=(n(10),n(2)),l=(n(11),n(12),function(e){return Object(s.jsxs)("div",{className:"home-page",children:[Object(s.jsx)("img",{className:"background-image",src:"/LandingPage.jpg"}),Object(s.jsxs)("div",{className:"content-container",children:[Object(s.jsx)("h1",{className:"title",children:"Think you can outsmart drugs?"}),Object(s.jsx)("h2",{className:"subtitle",children:"Choose your own drug adventure to see who wins: You or Drugs"}),Object(s.jsx)("button",{className:"start-button",onClick:e.onStart,children:"Play Now"})]})]})}),u=(n(13),[{type:"content",content:"You just joined a new group of friends, and they are awesome!"},{type:"content",content:"They decided to go somewhere during the weekend and started using meth."},{type:"content",content:"You did not want to be the boring one, so you gave it a try!"},["I dont want to go against the trend.","Decide to quit."],{type:"content",content:"You havent paid much attention to your previous friends.",icon:"/heart.svg"},{type:"content",content:"Your scores have never been this low, you concentration is surely not at its peak.",icon:"/brain.svg"},["Fine you have new friends now.","Care about your previous friends and relationships."],{type:"content",content:"Skipping school sometimes would hurts, and there are best places to be."},{type:"content",content:"Your mom feels something is wrong but not sure what is causing it.",icon:"/mom.svg"},{type:"content",content:"She cries frequently and has trouble sleeping, but you are not aware of it."},{type:"content",content:"Trying a direct approach she talks to you."},["The last thing you need is a punishment , lie and hope for the best.","Tell her everything and face the issue."],{type:"content",content:"Seems like she fell for it and you are safe."},{type:"content",content:"You still dont feel like you have a reason to stop and keep using it casually."},{type:"content",content:"Are people able to see the change to your skin color and teeth decaying?",icon:"/tooth.svg"},{type:"result",content:"Your mom is not able to help you anymore, you\u2019ve lost your beauty, friends, grades & the ability to even understand any of this loss. Think you\u2019ll do better on another drug?"}]),j=(n(14),function(){return Object(s.jsx)("div",{className:"progress-bar",children:Object(s.jsx)("div",{className:"inner-bar"})})}),m=(n(15),function(e){return Object(s.jsxs)("div",{className:"decay-trail",children:[e.imgName&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("img",{src:"/bw_".concat(e.imgName),style:{transform:"translate(6px, -15px)  scale(0.5)"}}),Object(s.jsx)("img",{src:"/bw_".concat(e.imgName),style:{transform:"scaleX(-1) translate(6px, -12px)  scale(0.6)"}}),Object(s.jsx)("img",{src:"/bw_".concat(e.imgName),style:{transform:"translate(6px, -9px)  scale(0.7)"}}),Object(s.jsx)("img",{src:"/bw_".concat(e.imgName),style:{transform:"scaleX(-1) translate(6px, -6px)  scale(0.8)"}}),Object(s.jsx)("img",{src:"/bw_".concat(e.imgName),style:{transform:"translate(6px, -3px) scale(0.9)"}}),Object(s.jsx)("img",{src:"/bw_".concat(e.imgName),style:{transform:"scaleX(-1) translate(6px, -3px)"}})]}),Object(s.jsx)("div",{className:"main-icon-container",children:Object(s.jsx)("img",{src:e.imgName?"/".concat(e.imgName):"/full_heart.svg"})})]})}),b=(n(16),function(){return Object(s.jsxs)("div",{className:"drug-picker",children:[Object(s.jsxs)("button",{className:"drug-button",children:[Object(s.jsx)("img",{src:"/unavailable.svg"}),Object(s.jsx)("img",{src:"/cocaine.svg"})]}),Object(s.jsxs)("button",{className:"drug-button",children:[Object(s.jsx)("img",{src:"/unavailable.svg"}),Object(s.jsx)("img",{src:"/heroin.svg"})]}),Object(s.jsx)("button",{className:"drug-button",children:Object(s.jsx)("img",{src:"/meth.svg"})})]})}),d=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(c.useRef)(null);Object(c.useEffect)((function(){var e=u[n];if(Array.isArray(e)){var t=setTimeout((function(){a(n+1)}),7e3);return function(){return clearTimeout(t)}}if("content"===e.type){var s=setTimeout((function(){a(n+1)}),4e3);return function(){return clearTimeout(s)}}}),[n]),Object(c.useEffect)((function(){o.current&&o.current.scrollTo({top:999999999,behavior:"smooth"})}),[n]);var r="/profile_0.jpg";n>=7&&(r="/profile_1.jpg"),n>=12&&(r="/profile_2.jpg");var l=null;return n>=4&&(l="heart.svg"),n>=5&&(l="brain.svg"),n>=14&&(l="tooth.svg"),Object(s.jsxs)("div",{className:"game-page",children:[Array.isArray(u[n])&&Object(s.jsx)(j,{}),Object(s.jsx)("div",{className:"gradient-overlay"}),Object(s.jsx)("img",{className:"profile-image",src:r}),Object(s.jsx)(b,{}),n==u.length&&Object(s.jsx)("button",{className:"share-button",children:Object(s.jsx)("img",{src:"/share.svg"})}),Object(s.jsxs)("div",{className:"chat-box",children:[Object(s.jsxs)("div",{className:"location-tag",style:{display:"flex"},children:[Object(s.jsx)("img",{src:"/pin.png",style:{width:"20px",marginRight:"10px"}}),"aalto university"]}),Object(s.jsx)("div",{className:"text-container",ref:o,children:u.slice(0,n+1).map((function(e,t){return Array.isArray(e)?t!==n?Object(s.jsx)("div",{className:"message action",children:e[0]}):Object(s.jsxs)("div",{className:"action-buttons-container",children:[Object(s.jsx)("button",{className:"option-button",onClick:function(){return a(n+1)},children:e[0]}),Object(s.jsx)("button",{className:"option-button",style:{cursor:"default"},disabled:!0,children:e[1]})]}):"content"===e.type?Object(s.jsxs)("div",{className:"message",children:[e.icon&&Object(s.jsx)("img",{className:"message-icon",src:e.icon}),e.content]}):"result"===e.type?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"message",children:e.content}),Object(s.jsx)("button",{className:"play-again-button",onClick:function(){return a(0)},children:"Play Again"})]}):void 0}))}),Object(s.jsx)(m,{imgName:l})]})]})};var g=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(s.jsxs)("div",{className:"App",children:[!n&&Object(s.jsx)(l,{onStart:function(){return a(!0)}}),n&&Object(s.jsx)(d,{})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),a(e),o(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root")),h()}],[[17,1,2]]]);
//# sourceMappingURL=main.c43008f9.chunk.js.map