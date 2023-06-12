"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[6961],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,v=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4158:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(4137));const o={layout:"post",title:"LTI Advantage - Names and Roles",id:"lti-tutorials_names_and_roles",categories:"Standards",author:"Scott Hurrey"},i="LTI Advantage - Names and Roles",s={unversionedId:"LTI/Tutorials/lti-tutorials_names_and_roles",id:"LTI/Tutorials/lti-tutorials_names_and_roles",title:"LTI Advantage - Names and Roles",description:"Overview",source:"@site/docs/LTI/Tutorials/names-and-roles.md",sourceDirName:"LTI/Tutorials",slug:"/LTI/Tutorials/lti-tutorials_names_and_roles",permalink:"/docs/LTI/Tutorials/lti-tutorials_names_and_roles",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"LTI Advantage - Names and Roles",id:"lti-tutorials_names_and_roles",categories:"Standards",author:"Scott Hurrey"},sidebar:"documentationSidebar",previous:{title:"LTI 1.3 Tool Implementation Guide",permalink:"/docs/LTI/Tutorials/lti-lti_impl_guide"},next:{title:"pyLTI1p3",permalink:"/docs/LTI/Tutorials/lti-tutorials-pylti1p3"}},l={},d=[{value:"Overview",id:"overview",level:3},{value:"Student Preview User Now Indicated By TestUser Role via Names and Roles Service",id:"student-preview-user-now-indicated-by-testuser-role-via-names-and-roles-service",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lti-advantage---names-and-roles"},"LTI Advantage - Names and Roles"),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This document documents gives updates on Names and Roles as new features become available. For the definitive specifications, always refer to the published IMS documenation."),(0,a.kt)("h3",{id:"student-preview-user-now-indicated-by-testuser-role-via-names-and-roles-service"},"Student Preview User Now Indicated By TestUser Role via Names and Roles Service"),(0,a.kt)("p",null,"This new functionality is seen in the Names and Roles service as implemented in Learn. When your LTI 1.3 tool reaches back to Learn using the Names and Roles service to get a list of memberships, a Student Preview user listed in the course memberships will have a new role listed in the roles claim. Ex"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"https://purl.imsglobal.org/spec/lti/claim/roles": [\n    "http://purl.imsglobal.org/vocab/lti/system/person#TestUser"\n  ],\n')),(0,a.kt)("p",null,"As of this writing, 2020.04.07, this addition to the Names and Roles service has not yet been added to the IMS Names and Role Provisioning Services documentation. It will likely be added as an addendum soon."))}p.isMDXComponent=!0}}]);