"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[850],{4137:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return t?n.createElement(f,o(o({ref:r},l),{},{components:t})):n.createElement(f,o({ref:r},l))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7611:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=t(7462),i=(t(7294),t(4137));const a={title:"Requesting Premium APIs",id:"requesting-premium-apis",categories:"REST UEF",author:"Hernan Ortiz",published:"",edited:"",sidebar_position:1},o=void 0,s={unversionedId:"rest-apis/premium-apis/requesting-premium-apis",id:"rest-apis/premium-apis/requesting-premium-apis",title:"Requesting Premium APIs",description:"Premium APIs offer several new capabilities for integrations with",source:"@site/docs/rest-apis/premium-apis/requesting-premium-apis.md",sourceDirName:"rest-apis/premium-apis",slug:"/rest-apis/premium-apis/requesting-premium-apis",permalink:"/docs/rest-apis/premium-apis/requesting-premium-apis",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Requesting Premium APIs",id:"requesting-premium-apis",categories:"REST UEF",author:"Hernan Ortiz",published:"",edited:"",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Anthology Student Service Catalog",permalink:"/docs/rest-apis/student/service-catalog/service-catalog"},next:{title:"Learn's Ultra Extension Framework",permalink:"/docs/rest-apis/premium-apis/uef/getting-started"}},p={},u=[{value:"How to request a Premium API",id:"how-to-request-a-premium-api",level:2},{value:"Our Premium APIs",id:"our-premium-apis",level:2},{value:"Ultra Extension Framework",id:"ultra-extension-framework",level:3}],l=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",r)},m=l("VersioningTracker"),c=l("AuthorBox"),d={toc:u},f="wrapper";function g(e){let{components:r,...t}=e;return(0,i.kt)(f,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)(m,{frontMatter:a,mdxType:"VersioningTracker"}),(0,i.kt)("p",null,"Premium APIs offer several new capabilities for integrations with\nLearn Ultra experience."),(0,i.kt)("h2",{id:"how-to-request-a-premium-api"},"How to request a Premium API"),(0,i.kt)("p",null,"If you\u2019re an Anthology client or a partner in Bronze level or above,\nplease ",(0,i.kt)("a",{parentName:"p",href:"https://blackboard.secure.force.com/"},"submit a Behind the Blackboard ticket"),"\nand we\u2019ll get back to you as soon as possible."),(0,i.kt)("p",null,"If you\u2019re a Blackboard Developer Network Partner (BbDN), a Community\nPartner or a third-party developer interested in our Premium APIs,\nwe offer a variety of partnership levels in the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.blackboard.com/partnerships/become-a-partner"},"Anthology Partnership Program"),".\nOnce you upgrade your partnership level, please ",(0,i.kt)("a",{parentName:"p",href:"https://blackboard.secure.force.com/"},"submit a Behind the Blackboard ticket"),"."),(0,i.kt)("h2",{id:"our-premium-apis"},"Our Premium APIs"),(0,i.kt)("h3",{id:"ultra-extension-framework"},"Ultra Extension Framework"),(0,i.kt)("p",null,"UEF is a set of Premium APIs that augment the Ultra experience of\nLearn. We designed a robust set of capabilities such as\ntelemetry, help provider registration, and UI element rendering to\nenable better integrations and richer user experience.\nTake a look at ",(0,i.kt)("a",{parentName:"p",href:"/docs/rest-apis/premium-apis/uef/getting-started"},"First steps with UEF")," to get started."),(0,i.kt)(c,{frontMatter:a,mdxType:"AuthorBox"}))}g.isMDXComponent=!0}}]);