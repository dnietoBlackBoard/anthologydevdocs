"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[9037],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),f=o,g=p["".concat(s,".").concat(f)]||p[f]||u[f]||n;return a?r.createElement(g,i(i({ref:t},d),{},{components:a})):r.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2786:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=a(7462),o=(a(7294),a(4137));const n={layout:"post",title:"Developing an LTI 1.3/Advantage",id:"lti-tutorials-develop_lti_advantage",categories:"Standards",author:"Mark Bykerk Kauffman"},i="Developing an LTI 1.3/Advantage Solution - Recordings and Resources",l={unversionedId:"lti/tutorials/lti-tutorials-develop_lti_advantage",id:"lti/tutorials/lti-tutorials-develop_lti_advantage",title:"Developing an LTI 1.3/Advantage",description:"Caveat",source:"@site/docs/lti/tutorials/develop-lti-advantage-solution.md",sourceDirName:"lti/tutorials",slug:"/lti/tutorials/lti-tutorials-develop_lti_advantage",permalink:"/docs/lti/tutorials/lti-tutorials-develop_lti_advantage",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Developing an LTI 1.3/Advantage",id:"lti-tutorials-develop_lti_advantage",categories:"Standards",author:"Mark Bykerk Kauffman"},sidebar:"documentationSidebar",previous:{title:"Ultra Proctoring Service Tutorials - IMS Proctoring Spec + UEF",permalink:"/docs/lti/proctoring/lti-proctoring-proctoring_service_tutorials"},next:{title:"LTI 1.3 Tool Implementation Guide",permalink:"/docs/lti/tutorials/lti-lti_impl_guide"}},s={},c=[{value:"Caveat",id:"caveat",level:3},{value:"Webinars",id:"webinars",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"developing-an-lti-13advantage-solution---recordings-and-resources"},"Developing an LTI 1.3/Advantage Solution - Recordings and Resources"),(0,o.kt)("h3",{id:"caveat"},"Caveat"),(0,o.kt)("p",null,"Deleting a registered LTI domain and/or the associated managed placements from the Administrator Panel -> LTI Tool Providers page will invalidate all of the associated LTI launch links in courses. The data will be gone from the database. There is no way to fix this. NEVER delete a registered domain or managed placements without considering these consequences. If you create an LTI 1.3 Tool that uses the same domain as a currently registered LTI 1.1 tool on a Learn system, there is code in Learn that will prompt you to migrate from LTI 1.1 to LTI 1.3. Generally that's a great option. Finally, only very brave people make changes on a production system without testing first on a test or staging system. We recommend you be more cautious than brave."),(0,o.kt)("h3",{id:"webinars"},"Webinars"),(0,o.kt)("p",null,"NEW!! During DevCon 2020 Eric Preston presented the following on developing an LTI 1.3/Advantage solution. This is a must-watch if you are starting out on your LTI 1.3/Advantage journey. Or, if you have questions, you will likely find the answers here. ",(0,o.kt)("a",{parentName:"p",href:"https://bbdemo.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f2b32ac9-1789-4639-9139-abfb0029c0e2"},"Watch this recording.")," Here are the ",(0,o.kt)("a",{target:"_blank",href:a(4231).Z},"slides")),(0,o.kt)("p",null,"On April 10, 2019, Eric Preston, Blackboard's resident LTI expert, spoke with us in Technical Office Hours. He gave us an overview of LTI technology. ",(0,o.kt)("a",{parentName:"p",href:"https://us.bbcollab.com/collab/ui/session/playback/load/53618fbbef8b45628ff9b18f407d7456"},"Watch recording the recording in Bb Collaborate.")),(0,o.kt)("p",null,"On May 1, 2019, Eric followed up with another, deeper dive into coding an LTI integration. ",(0,o.kt)("a",{parentName:"p",href:"https://us.bbcollab.com/recording/e193c6cb59cb4ed1a776c271665d4154"},"Watch the recording in Bb Collaborate"),". ",(0,o.kt)("a",{parentName:"p",href:"https://slack-files.com/TFA153DM0-FJFEJH8NB-fbe304b473"},"This is the associated slide deck."),")"),(0,o.kt)("p",null,"Here is the sample code referenced in the presentations: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/blackboard/BBDN-LTI-Tool-Provider-Node"},"https://github.com/blackboard/BBDN-LTI-Tool-Provider-Node")))}u.isMDXComponent=!0},4231:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/DevCon20LTIWorkshop-3fee003a0fc0b25a7021be8ef2e14672.pdf"}}]);