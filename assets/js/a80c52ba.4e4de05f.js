"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[9046],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5908:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(4137));const a={layout:"post",title:"Rest registry",id:"rest-apis-learn-admin-cloud_registry",categories:"Learn Rest",author:"Scott Hurrey",status:"deprecated",doctitle:"Register Developer Instances to the Cloud"},i="Register Developer Instances to the Cloud",s={unversionedId:"REST APIs/Learn/Admin/rest-apis-learn-admin-cloud_registry",id:"REST APIs/Learn/Admin/rest-apis-learn-admin-cloud_registry",title:"Rest registry",description:"You must register developer instances of Blackboard Learn to the Blackboard",source:"@site/docs/REST APIs/Learn/Admin/cloud-registry.md",sourceDirName:"REST APIs/Learn/Admin",slug:"/REST APIs/Learn/Admin/rest-apis-learn-admin-cloud_registry",permalink:"/anthologydevdocs/docs/REST APIs/Learn/Admin/rest-apis-learn-admin-cloud_registry",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Rest registry",id:"rest-apis-learn-admin-cloud_registry",categories:"Learn Rest",author:"Scott Hurrey",status:"deprecated",doctitle:"Register Developer Instances to the Cloud"},sidebar:"documentationSidebar",previous:{title:"Learn REST Application Management for Admins",permalink:"/anthologydevdocs/docs/REST APIs/Learn/Admin/admin-intro"},next:{title:"Groups, Site quotas and rate limits",permalink:"/anthologydevdocs/docs/REST APIs/Learn/Admin/rest_apis-learn-admin-group_quotas_rates"}},l={},c=[],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"register-developer-instances-to-the-cloud"},"Register Developer Instances to the Cloud"),(0,o.kt)("p",null,"You must register developer instances of Blackboard Learn to the Blackboard\ncloud. This is true of both developer virtual machines (DVM) that you host\nlocally and AWS cloud-based instances created from the Blackboard Learn AMI.\nUse the following steps to register your DVM or AMI."),(0,o.kt)("p",null,"To register your developer instance to the Blackboard cloud:"),(0,o.kt)("p",null,"Do not select ",(0,o.kt)("strong",{parentName:"p"},"Move to Production")," in the DVM or AMI without guidance to do\nso from Blackboard's developer experience team."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into your developer instance as Administrator. You may be greeted with an first-time user message. You can select ",(0,o.kt)("strong",{parentName:"li"},"Close")," or refresh the page to close it."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"System Admin"),"."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Cloud Connector")," under ",(0,o.kt)("em",{parentName:"li"},"Cloud Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Provide a ",(0,o.kt)("strong",{parentName:"li"},"Display Name"),"."),(0,o.kt)("li",{parentName:"ol"},"Select an ",(0,o.kt)("strong",{parentName:"li"},"Instance Type"),". For most development work, select ",(0,o.kt)("strong",{parentName:"li"},"Development"),"."),(0,o.kt)("li",{parentName:"ol"},"Select a ",(0,o.kt)("strong",{parentName:"li"},"Regional Cloud"),". This one-time choice indicates the AWS region with which you want to associate your developer instance. Your choice is permanent and irrevocable."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Save and Retry")," to save the configuration and connect to the Blackboard cloud. In some cases, the developer instance of Learn throws an error explaining that it could not connect to the Blackboard cloud. This behavior is expected. Ignore it.")),(0,o.kt)("p",null,"If you are working with a developer virtual machine (DVM) rather than an AMI,\nyou may need an SSL connection to register successfully. In these cases, you\nreceive an error message like the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screen+Shot+2016-04-24+at+10.50.13.png",src:r(1005).Z,width:"1314",height:"454"})),(0,o.kt)("p",null,"If you see this error message, try connecting to the Virtual Machine at\n",(0,o.kt)("a",{parentName:"p",href:"https://localhost:9877/"},"https://localhost:9877"),"and following the steps above. This should allow you to register to the cloud and then you should be able to use it in non-SSL mode."))}p.isMDXComponent=!0},1005:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cloud-registry-1-7afd27c21e0a4e33bd27c0d5a3f2ab58.png"}}]);