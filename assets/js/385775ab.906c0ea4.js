"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[7558],{4137:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>b});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(o),h=r,b=u["".concat(l,".").concat(h)]||u[h]||d[h]||n;return o?a.createElement(b,s(s({ref:t},p),{},{components:o})):a.createElement(b,s({ref:t},p))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,s=new Array(n);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<n;c++)s[c]=o[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},1956:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=o(7462),r=(o(7294),o(4137));const n={layout:"post",title:"Cookies and Browsers",date:"2020-10-15 12:00",category:"blog",post_id:"20201015-cookiesandbrowsers",author:"Eric Preston",tags:["lti","learn","api"],toc:!1,summary:"Most people like cookies. Internet browsers used to like cookies, but a lot has changed in the last few years."},s="Cookies and Browsers",i={permalink:"/anthologydevdocs/blog/2020/10/15/2020/Cookies-and-Browsers",source:"@site/blog/2020/2020-10-15-Cookies-and-Browsers.md",title:"Cookies and Browsers",description:"Most people like cookies. Internet browsers used to like cookies, but a lot has changed in the last few years.",date:"2020-10-15T12:00:00.000Z",formattedDate:"October 15, 2020",tags:[{label:"lti",permalink:"/anthologydevdocs/blog/tags/lti"},{label:"learn",permalink:"/anthologydevdocs/blog/tags/learn"},{label:"api",permalink:"/anthologydevdocs/blog/tags/api"}],readingTime:1.555,hasTruncateMarker:!1,authors:[{name:"Eric Preston"}],frontMatter:{layout:"post",title:"Cookies and Browsers",date:"2020-10-15 12:00",category:"blog",post_id:"20201015-cookiesandbrowsers",author:"Eric Preston",tags:["lti","learn","api"],toc:!1,summary:"Most people like cookies. Internet browsers used to like cookies, but a lot has changed in the last few years."},prevItem:{title:"SOAP EOL Explained",permalink:"/anthologydevdocs/blog/2020/12/16/2020/SOAP-EOL-Explained"},nextItem:{title:"Student Id Template Variable",permalink:"/anthologydevdocs/blog/2020/10/07/2020/New-Student-Id-Template-Variable"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Most people like cookies. Internet browsers used to like cookies, but a lot has changed in the last few years."),(0,r.kt)("p",null,"We are seeing a lot of applications stop working in some browsers because cookies are not being shared, and this post hopes to help explain why that is happening and what can be done about it."),(0,r.kt)("p",null,"A web application may set a cookie to track a user\u2019s session. This is very common, however if your web application is going to be hosted in an iframe, then there\u2019s a good chance your cookie won\u2019t be sent back to you. This is because browsers are clamping down on sending \u201c3rd-party\u201d cookies back to applications hosted in an iframe. Note that a 3rd party is a site that is hosted on a domain different than the 1st party, or your web application. The reason is because these cookies can be used for tracking your internet and browsing activity. Safari has disallowed this for years as a user privacy measure."),(0,r.kt)("p",null,"Another case where cookies aren\u2019t being sent back is during a form POST back to your application. If you set a cookie, then launch to a 3rd party application, if that application does a form POST back to you, the browser will likely not send your cookie back because it is trying to help prevent cross-site request forgery attacks."),(0,r.kt)("p",null,"Rather than detail all the scenarios and work arounds here I link to two web pages that are immensely helpful in explaining the situation and some possible workarounds."),(0,r.kt)("p",null,"The TL;DR is if you must set a cookie in your web application, be careful how you configure that cookie\u2019s properties, and understand that at least in Safari, your cookies may not get passed back to you. The other browser makers are going to get as restrictive as Safari soon."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://web.dev/samesite-cookies-explained/"},"Samesite Cookies Explained")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://web.dev/samesite-cookie-recipes/"},"Samesite Cookie Recipes"))))}d.isMDXComponent=!0}}]);