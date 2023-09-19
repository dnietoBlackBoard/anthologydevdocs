"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[1126],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4120:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(4137));const o={title:"Welcome to our REST APIs!",id:"start-here",sidebar_position:1,author:"Mark O'Neil",published:"",edited:""},s=void 0,i={unversionedId:"rest-apis/start-here",id:"rest-apis/start-here",title:"Welcome to our REST APIs!",description:"Many Anthology products offer integration capabilities through the use of RESTful APIs. These products are listed to the left under REST APIs. We expect this list to grow over time so check in frequently!",source:"@site/docs/rest-apis/apis-intro.md",sourceDirName:"rest-apis",slug:"/rest-apis/start-here",permalink:"/docs/rest-apis/start-here",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Welcome to our REST APIs!",id:"start-here",sidebar_position:1,author:"Mark O'Neil",published:"",edited:""},sidebar:"documentationSidebar",previous:{title:"Developer Portal Maintenance and Releases",permalink:"/docs/developer-portal/devportal-maintenance"},next:{title:"Welcome to Learn REST APIs!",permalink:"/docs/rest-apis/learn/learn-intro"}},l={},c=[{value:"What are RESTful APIs?",id:"what-are-restful-apis",level:2},{value:"Why are RESTful APIs important?",id:"why-are-restful-apis-important",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=p("VersioningTracker"),d=p("AuthorBox"),f={toc:c},m="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(u,{frontMatter:o,mdxType:"VersioningTracker"}),(0,a.kt)("p",null,"Many Anthology products offer integration capabilities through the use of RESTful APIs. These products are listed to the left under ",(0,a.kt)("strong",{parentName:"p"},"REST APIs"),". We expect this list to grow over time so check in frequently!"),(0,a.kt)("h2",{id:"what-are-restful-apis"},"What are RESTful APIs?"),(0,a.kt)("p",null,"RESTful APIs (REpresentational State Transfer Application Programming Interface) are a type of web service API that follow a set of architectural principles, known as the REST architecture. These APIs use HTTP verbs - GET, POST, PUT, DELETE - to access and manipulate resources, such as data or files, on a server."),(0,a.kt)("p",null,"RESTful APIs have become the most common type of web service API, used by many companies and applications to enable communication between different systems or applications."),(0,a.kt)("h2",{id:"why-are-restful-apis-important"},"Why are RESTful APIs important?"),(0,a.kt)("p",null,"There are several reasons why RESTful APIs are important:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Interoperability"),": RESTful APIs enable interoperability between different systems and programming languages. This means that applications built on different platforms or programming languages can communicate with each other easily using a common protocol."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Ease of development"),": Applications using RESTful APIs are easy to develop because REST APIs use standard HTTP methods and have a well-defined structure. This makes them easy to understand and implement, reducing the time and cost of development."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scalability"),": RESTful APIs are highly scalable because they use HTTP as their underlying protocol, which is a widely adopted protocol for web communication. This allows for easy load balancing and horizontal scaling of services."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Security"),": RESTful APIs can be secured using various authentication mechanisms such as OAuth and SSL/TLS. This ensures that the data being transmitted is secure and only accessible to authorized users."),(0,a.kt)("p",null,"Overall, RESTful APIs provide a simple and effective way to expose data and services over the web, making them an important tool for modern software development."),(0,a.kt)(d,{frontMatter:o,mdxType:"AuthorBox"}))}h.isMDXComponent=!0}}]);