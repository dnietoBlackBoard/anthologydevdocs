"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[3639],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(4137));const r={sidebar_position:1,displayed_sidebar:"documentationSidebar"},i="Anthology Developer Portal",l={unversionedId:"Developer Portal/devportal-intro",id:"Developer Portal/devportal-intro",title:"Anthology Developer Portal",description:"What is the Developer Portal?",source:"@site/docs/Developer Portal/devportal-intro.md",sourceDirName:"Developer Portal",slug:"/Developer Portal/devportal-intro",permalink:"/docs/Developer Portal/devportal-intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"documentationSidebar"},sidebar:"documentationSidebar",previous:{title:"Wiki Events",permalink:"/docs/Standards/Caliper/events/caliper-events-wikis"},next:{title:"Getting started with the Dev Portal",permalink:"/docs/Developer Portal/community-dev_portal"}},s={},p=[{value:"What is the Developer Portal?",id:"what-is-the-developer-portal",level:2},{value:"Using the Developer Portal",id:"using-the-developer-portal",level:2},{value:"1. Review API Documentation",id:"1-review-api-documentation",level:3},{value:"2. Create a Developer Account",id:"2-create-a-developer-account",level:3},{value:"3. Group Management",id:"3-group-management",level:3},{value:'Developer Portal Maintenance and Releases <a id="release_notes"></a>',id:"developer-portal-maintenance-and-releases-",level:2},{value:"Maintenance and Update Window",id:"maintenance-and-update-window",level:3},{value:"Release Notes",id:"release-notes",level:3},{value:"07/11/2023",id:"07112023",level:4},{value:"06/06/2023",id:"06062023",level:4}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"anthology-developer-portal"},"Anthology Developer Portal"),(0,o.kt)("h2",{id:"what-is-the-developer-portal"},"What is the Developer Portal?"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://developer.anthology.com"},"Anthology Developer Portal")," is for anyone interested in developing integrations with the Anthology product portfolio. At the Portal you will find information about our REST APIs, our Developer facing documentation, and Developer Experience and Portal related announcements. "),(0,o.kt)("p",null,"When you create an account you will be able to register an application which is a required step for testing and releasing your integration."),(0,o.kt)("h2",{id:"using-the-developer-portal"},"Using the Developer Portal"),(0,o.kt)("p",null,"Instructions for using the Developer Portal are located in our ",(0,o.kt)("a",{parentName:"p",href:"/docs/REST%20APIs/Learn/Getting%20Started/rest_apis-learn-getting-started-first-steps"},"First Steps")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/REST%20APIs/Learn/Getting%20Started/rest_apis-learn-getting-started-registry"},"Registry")," sections of our REST API Learn Getting Started guide."),(0,o.kt)("p",null,"In brief there are three primary tasks you complete using the Developer Portal..."),(0,o.kt)("h3",{id:"1-review-api-documentation"},"1. Review API Documentation"),(0,o.kt)("p",null,"The great news is that you don't need an account to review our API documentation! We want you to be able to quickly understand what we have for APIs, and enable you to prototype and test with mock objects. "),(0,o.kt)("p",null,"In other words dig in and have a good time. "),(0,o.kt)("p",null,"When you are ready to test in a real environment move on to step two!"),(0,o.kt)("h3",{id:"2-create-a-developer-account"},"2. Create a Developer Account"),(0,o.kt)("p",null,"To test your prototype against an Anthology instance you need to register your application in the portal to get authentication details. To do this you need to head over to the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.anthology.com"},"Anthology Developer Portal")," and sign up for a Developer account - don't worry this too is gratis!"),(0,o.kt)("h3",{id:"3-group-management"},"3. Group Management"),(0,o.kt)("p",null,"When you register for a Developer account you are given a group of one - you! In some cases you may want to share your application management with others on or outside of your team. To do this you create additional groups. "),(0,o.kt)("p",null,"The only time a group is required - beyond you - is for production application release. It is this group that receives production settings and is a requirement for production application release."),(0,o.kt)("p",null,"A few great articles on Groups and Production releases are our write ups on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/REST%20APIs/Learn/Admin/rest_apis-learn-admin-group_quotas_rates"},"Groups, Site quotas and rate limits")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/REST%20APIs/Learn/Admin/rest_apis-learn-admin-prod-groups"},"Production Groups")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/REST%20APIs/Learn/Getting%20Started/rest_apis-learn-getting-started-releasing_integration"},"Releasing your Integration"))),(0,o.kt)("h2",{id:"developer-portal-maintenance-and-releases-"},"Developer Portal Maintenance and Releases ",(0,o.kt)("a",{id:"release_notes"})),(0,o.kt)("h3",{id:"maintenance-and-update-window"},"Maintenance and Update Window"),(0,o.kt)("p",null,"The Developer Portal has an ",(0,o.kt)("em",{parentName:"p"},"optional")," maintenance window scheduled every month on the Tuesday of the second week (after SaaS updates). The exception to this monthly maintenance schedule is when critical patches are required."),(0,o.kt)("p",null,"You may monitor the Portal maintenance schedule and progress at ",(0,o.kt)("a",{parentName:"p",href:"https://status.blackboard.com"},"https://status.blackboard.com")," and review any update release notes below."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: Should a critical outage","*"," take place, we will release a detailed post-mortem on Behind the Blackboard as soon as possible - typically within four days post event. Any non-critical outage","*","*"," will be covered using our in-Portal announcements feature only.")),(0,o.kt)("p",null,"*"," critical outage: service is unavailable or operating outside of usable performance or functional parameters."),(0,o.kt)("p",null,"*","*"," non-critical outage: service is available, but operating at degraded performance."),(0,o.kt)("h3",{id:"release-notes"},"Release Notes"),(0,o.kt)("h4",{id:"07112023"},"07/11/2023"),(0,o.kt)("p",null,"Release Name: 2023.3"),(0,o.kt)("p",null,"\u2757 The length of this maintenance window, 12:30 am - 02:30 am EST, is due to the Redis Upgrade, but may complete in ~45 minutes. We apologize in advance for the short notice."),(0,o.kt)("p",null,"Features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Redis Upgrade"),": For security and performance purposes we are upgrading to the latest version of Redis. This will have no impact on current Developer-facing functionality."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LTI Dynamic Registration"),": For performance and forward looking enhancements we are improving the backend which supports the dynamic registration of LTI integrations with Learn. This will have no impact on current Developer-facing functionality.")),(0,o.kt)("h4",{id:"06062023"},"06/06/2023"),(0,o.kt)("p",null,"Release Name: 2023.2"),(0,o.kt)("p",null,"Features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Announcement Panel"),": The Announcement Panel provides Developer facing Portal, APIs, and Event information. When a new announcement is available it will be indicated via a red dot on the Announcements icon in the Portal task bar. Clicking on the Announcements icon displays active announcements - latest at the top.")))}c.isMDXComponent=!0}}]);