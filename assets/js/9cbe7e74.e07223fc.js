"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[281],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(v,i(i({ref:t},s),{},{components:n})):a.createElement(v,i({ref:t},s))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(4137));const o={title:"Developer Portal Maintenance and Releases",sidebar_position:7,displayed_sidebar:"documentationSidebar",id:"devportal-maintenance",published:"2023-05-09",edited:"2023-05-09",author:"Mark O'Neil"},i=void 0,l={unversionedId:"developer-portal/devportal-maintenance",id:"developer-portal/devportal-maintenance",title:"Developer Portal Maintenance and Releases",description:"Maintenance and Update Window",source:"@site/docs/developer-portal/dev-portal-maintenance.md",sourceDirName:"developer-portal",slug:"/developer-portal/devportal-maintenance",permalink:"/docs/developer-portal/devportal-maintenance",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Developer Portal Maintenance and Releases",sidebar_position:7,displayed_sidebar:"documentationSidebar",id:"devportal-maintenance",published:"2023-05-09",edited:"2023-05-09",author:"Mark O'Neil"},sidebar:"documentationSidebar",previous:{title:"FAQ",permalink:"/docs/developer-portal/faq"},next:{title:"Welcome to our REST APIs!",permalink:"/docs/rest-apis/start-here"}},c={},p=[{value:"Maintenance and Update Window",id:"maintenance-and-update-window",level:3},{value:"Release Notes",id:"release-notes",level:3},{value:"07/11/2023",id:"07112023",level:4},{value:"06/06/2023",id:"06062023",level:4}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=s("VersioningTracker"),u=s("AuthorBox"),m={toc:p},v="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(v,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(d,{frontMatter:o,mdxType:"VersioningTracker"}),(0,r.kt)("h3",{id:"maintenance-and-update-window"},"Maintenance and Update Window"),(0,r.kt)("p",null,"The Developer Portal has an ",(0,r.kt)("em",{parentName:"p"},"optional")," maintenance window scheduled every month on the Tuesday of the second week (after SaaS updates). The exception to this monthly maintenance schedule is when critical patches are required."),(0,r.kt)("p",null,"You may monitor the Portal maintenance schedule and progress at ",(0,r.kt)("a",{parentName:"p",href:"https://status.blackboard.com"},"https://status.blackboard.com")," and review any update release notes below."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: Should a critical outage","*"," take place, we will release a detailed post-mortem on Behind the Blackboard as soon as possible - typically within four days post event. Any non-critical outage","*","*"," will be covered using our in-Portal announcements feature only.")),(0,r.kt)("p",null,"*"," critical outage: service is unavailable or operating outside of usable performance or functional parameters."),(0,r.kt)("p",null,"*","*"," non-critical outage: service is available, but operating at degraded performance."),(0,r.kt)("h3",{id:"release-notes"},"Release Notes"),(0,r.kt)("h4",{id:"07112023"},"07/11/2023"),(0,r.kt)("p",null,"Release Name: 2023.3"),(0,r.kt)("p",null,"\u2757 The length of this maintenance window, 12:30 am - 02:30 am EST, is due to the Redis Upgrade, but may complete in ~45 minutes. We apologize in advance for the short notice."),(0,r.kt)("p",null,"Features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Redis Upgrade"),": For security and performance purposes we are upgrading to the latest version of Redis. This will have no impact on current Developer-facing functionality."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LTI Dynamic Registration"),": For performance and forward looking enhancements we are improving the backend which supports the dynamic registration of LTI integrations with Learn. This will have no impact on current Developer-facing functionality.")),(0,r.kt)("h4",{id:"06062023"},"06/06/2023"),(0,r.kt)("p",null,"Release Name: 2023.2"),(0,r.kt)("p",null,"Features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Announcement Panel"),": The Announcement Panel provides Developer facing Portal, APIs, and Event information. When a new announcement is available it will be indicated via a red dot on the Announcements icon in the Portal task bar. Clicking on the Announcements icon displays active announcements - latest at the top.")),(0,r.kt)(u,{frontMatter:o,mdxType:"AuthorBox"}))}f.isMDXComponent=!0}}]);