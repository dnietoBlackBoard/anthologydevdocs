"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[9037],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,g=p["".concat(s,".").concat(f)]||p[f]||u[f]||n;return r?o.createElement(g,i(i({ref:t},d),{},{components:r})):o.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=r(7462),a=(r(7294),r(4137));const n={title:"Developing an LTI 1.3/Advantage Solution - Recordings and Resources",id:"develop-lti-advantage",categories:"Standards",published:"",edited:"",author:"Mark Kauffman"},i=void 0,l={unversionedId:"lti/tutorials/develop-lti-advantage",id:"lti/tutorials/develop-lti-advantage",title:"Developing an LTI 1.3/Advantage Solution - Recordings and Resources",description:"Caveat",source:"@site/docs/lti/tutorials/develop-lti-advantage-solution.md",sourceDirName:"lti/tutorials",slug:"/lti/tutorials/develop-lti-advantage",permalink:"/docs/lti/tutorials/develop-lti-advantage",draft:!1,tags:[],version:"current",frontMatter:{title:"Developing an LTI 1.3/Advantage Solution - Recordings and Resources",id:"develop-lti-advantage",categories:"Standards",published:"",edited:"",author:"Mark Kauffman"},sidebar:"documentationSidebar",previous:{title:"proctoring-service-tutorials",permalink:"/docs/lti/proctoring/proctoring-service-tutorials"},next:{title:"LTI 1.3 Tool Implementation Guide",permalink:"/docs/lti/tutorials/lti-implementation-guide"}},s={},c=[{value:"Caveat",id:"caveat",level:3},{value:"Webinars",id:"webinars",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=d("VersioningTracker"),u=d("AuthorBox"),f={toc:c},g="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(g,(0,o.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(p,{frontMatter:n,mdxType:"VersioningTracker"}),(0,a.kt)("h1",{id:""}),(0,a.kt)("h3",{id:"caveat"},"Caveat"),(0,a.kt)("p",null,"Deleting a registered LTI domain and/or the associated managed placements from the Administrator Panel -> LTI Tool Providers page will invalidate all of the associated LTI launch links in courses. The data will be gone from the database. There is no way to fix this. NEVER delete a registered domain or managed placements without considering these consequences. If you create an LTI 1.3 Tool that uses the same domain as a currently registered LTI 1.1 tool on a Learn system, there is code in Learn that will prompt you to migrate from LTI 1.1 to LTI 1.3. Generally that's a great option. Finally, only very brave people make changes on a production system without testing first on a test or staging system. We recommend you be more cautious than brave."),(0,a.kt)("h3",{id:"webinars"},"Webinars"),(0,a.kt)("p",null,"NEW!! During DevCon 2020 Eric Preston presented the following on developing an LTI 1.3/Advantage solution. This is a must-watch if you are starting out on your LTI 1.3/Advantage journey. Or, if you have questions, you will likely find the answers here. ",(0,a.kt)("a",{parentName:"p",href:"https://bbdemo.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f2b32ac9-1789-4639-9139-abfb0029c0e2"},"Watch this recording.")," Here are the ",(0,a.kt)("a",{target:"_blank",href:r(4231).Z},"slides")),(0,a.kt)("p",null,"On April 10, 2019, Eric Preston, Blackboard's resident LTI expert, spoke with us in Technical Office Hours. He gave us an overview of LTI technology. ",(0,a.kt)("a",{parentName:"p",href:"https://us.bbcollab.com/collab/ui/session/playback/load/53618fbbef8b45628ff9b18f407d7456"},"Watch recording the recording in Bb Collaborate.")),(0,a.kt)("p",null,"On May 1, 2019, Eric followed up with another, deeper dive into coding an LTI integration. ",(0,a.kt)("a",{parentName:"p",href:"https://us.bbcollab.com/recording/e193c6cb59cb4ed1a776c271665d4154"},"Watch the recording in Bb Collaborate"),". ",(0,a.kt)("a",{parentName:"p",href:"https://slack-files.com/TFA153DM0-FJFEJH8NB-fbe304b473"},"This is the associated slide deck."),")"),(0,a.kt)("p",null,"Here is the sample code referenced in the presentations: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/blackboard/BBDN-LTI-Tool-Provider-Node"},"https://github.com/blackboard/BBDN-LTI-Tool-Provider-Node")),(0,a.kt)(u,{frontMatter:n,mdxType:"AuthorBox"}))}m.isMDXComponent=!0},4231:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/files/DevCon20LTIWorkshop-3fee003a0fc0b25a7021be8ef2e14672.pdf"}}]);