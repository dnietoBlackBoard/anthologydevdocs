"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[2922],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||n;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},428:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var o=r(7462),a=(r(7294),r(4137));const n={title:"UEF Tutorials",categories:"Learn UEF",author:"Mark Kauffman",id:"tutorials",published:"",edited:""},i=void 0,l={unversionedId:"rest-apis/premium-apis/uef/tutorials/tutorials",id:"rest-apis/premium-apis/uef/tutorials/tutorials",title:"UEF Tutorials",description:"You will find these tutorials very helpful as you start your Ultra Extension Framework (UEF) developement.",source:"@site/docs/rest-apis/premium-apis/uef/tutorials/tutorials.md",sourceDirName:"rest-apis/premium-apis/uef/tutorials",slug:"/rest-apis/premium-apis/uef/tutorials/",permalink:"/docs/rest-apis/premium-apis/uef/tutorials/",draft:!1,tags:[],version:"current",frontMatter:{title:"UEF Tutorials",categories:"Learn UEF",author:"Mark Kauffman",id:"tutorials",published:"",edited:""},sidebar:"documentationSidebar",previous:{title:"Security and Tokens - Authentication",permalink:"/docs/rest-apis/premium-apis/uef/tutorials/security-and-tokens"},next:{title:"introduction",permalink:"/docs/lti/introduction"}},s={},u=[{value:"How To Ultra Extension Framework - Scott Hurrey DevCon 2020",id:"how-to-ultra-extension-framework---scott-hurrey-devcon-2020",level:4},{value:"Ultra Extension Framework",id:"ultra-extension-framework",level:3},{value:"Sample Code!",id:"sample-code",level:3},{value:"Advanced UEF",id:"advanced-uef",level:3},{value:"Notice",id:"notice",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=c("VersioningTracker"),d=c("AuthorBox"),m={toc:u},f="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(p,{frontMatter:n,mdxType:"VersioningTracker"}),(0,a.kt)("p",null,"You will find these tutorials very helpful as you start your Ultra Extension Framework (UEF) developement."),(0,a.kt)("h4",{id:"how-to-ultra-extension-framework---scott-hurrey-devcon-2020"},"How To Ultra Extension Framework - Scott Hurrey DevCon 2020"),(0,a.kt)("iframe",{class:"embed-video",src:"https://bbdemo.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fc63a1ab-ea88-4c79-8ca7-abf70124b035",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h3",{id:"ultra-extension-framework"},"Ultra Extension Framework"),(0,a.kt)("p",null,"This ",(0,a.kt)("a",{parentName:"p",href:"/docs/rest-apis/premium-apis/uef/tutorials/tutorial-lti"},"tutorial")," starts with a Python-based LTI 1.3 Hello World application and shows you how to convert that project into a UEF integration."),(0,a.kt)("p",null,"The tutorial is also available in a Youtube playlist, if you prefer to learn in this way. If you prefer to go directly to Youtube, ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Mp9tFpultaQ&list=PLbewGw29xjRa2ZQ7gs3CgisvBVvyuKhsR&ab_channel=ScottHurrey"},"click here")),(0,a.kt)("iframe",{class:"embed-video",src:"https://www.youtube.com/embed/videoseries?list=PLbewGw29xjRa2ZQ7gs3CgisvBVvyuKhsR",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h3",{id:"sample-code"},"Sample Code!"),(0,a.kt)("p",null,"You may find the related code used on the videos here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/blackboard/BBDN-UEF-Python"},"GitHub BBDN-UEF-Python")),(0,a.kt)("h3",{id:"advanced-uef"},"Advanced UEF"),(0,a.kt)("p",null,"Add a course banner. ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/pxddXC-I4UI"},"See this tutorial/demo video"),". ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/blackboard/BBDN-UEF-Python/tree/101-UEF-COURSE-BANNER"},"GitHub BBDN-UEF-Python/101-UEF-COURSE-BANNER")),(0,a.kt)("h3",{id:"notice"},"Notice"),(0,a.kt)("p",null,"Before releasing a UEF integration, that uses the UEF Premium APIs, to production you will be required to meet a certain level of Blackboard Partnership. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/partners/partners-become_a_partner"},"Become a Blackboard Partner"),"."),(0,a.kt)(d,{frontMatter:n,mdxType:"AuthorBox"}))}y.isMDXComponent=!0}}]);