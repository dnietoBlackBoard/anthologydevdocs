"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[6699],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(r),p=o,u=m["".concat(s,".").concat(p)]||m[p]||g[p]||i;return r?n.createElement(u,a(a({ref:t},d),{},{components:r})):n.createElement(u,a({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5500:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(4137));const i={title:"Migrating from LTI 1.0/1.1 to 1.3",id:"migrating-from-lt1.1-to-lti1.3",categories:"Standards",published:"",edited:"",author:"Eric Preston"},a=void 0,l={unversionedId:"lti/migrating/migrating-from-lt1.1-to-lti1.3",id:"lti/migrating/migrating-from-lt1.1-to-lti1.3",title:"Migrating from LTI 1.0/1.1 to 1.3",description:"Overview",source:"@site/docs/lti/migrating/migrating-11.md",sourceDirName:"lti/migrating",slug:"/lti/migrating/migrating-from-lt1.1-to-lti1.3",permalink:"/docs/lti/migrating/migrating-from-lt1.1-to-lti1.3",draft:!1,tags:[],version:"current",frontMatter:{title:"Migrating from LTI 1.0/1.1 to 1.3",id:"migrating-from-lt1.1-to-lti1.3",categories:"Standards",published:"",edited:"",author:"Eric Preston"},sidebar:"documentationSidebar",previous:{title:"OIDC Login Without Cookes and Sharing the lti_storage_target Between Platform and Tool",permalink:"/docs/lti/core/poidc-login-lti_storage_target"},next:{title:"Ultra Proctoring Service Integration - IMS Proctoring Spec + UEF",permalink:"/docs/lti/proctoring/proctoring-service-integration"}},s={},c=[{value:"Overview",id:"overview",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},m=d("VersioningTracker"),g=d("AuthorBox"),p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(m,{frontMatter:i,mdxType:"VersioningTracker"}),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"For the first time in LTI's history we need to handle migrating from one version to another. Before 1.3 the changes were all\nadditive, but with 1.3 the payload format and security model have changed significantly, so we need a way to\nmigrate existing LTI 1.1 (and 1.0) links to support the 1.3 format."),(0,o.kt)("p",null,"Note that Learn has never allowed two tools or applications to be configured in the same Learn instance with the\nsame fully qualified domain name (fqdn). This means that you cannot have both a 1.1 version and a 1.3 version of\na tool configured at the same time if they use the same fqdn."),(0,o.kt)("p",null,"If a tool provider wants to upgrade their tool to LTI 1.3/Advantage but not break all of an institution's existing links\nthen they will need to host their LTI 1.3/Advantage tool at the same fqdn."),(0,o.kt)("p",null,"In Learn we automatically upgrade the links for a tool when a Learn administrator deploys the 1.3 version of the tool."),(0,o.kt)("p",null,'At deployment time, if Learn sees there is an existing 1.1 tool registered with the same domain(s) as the 1.3\ntool the admin is prompted to migrate the links. If they choose "yes" then we migrate ALL LTI 1.1 links to the\nnew LTI 1.3 application, effectively removing the LTI 1.1 domain configuration. The links remain and should work\nfine if the tool developer has done their job correctly. The target_link_uri for the 1.3 tool is the same\nas the launch URL defined in the LTI 1.1 placement or link.'),(0,o.kt)(g,{frontMatter:i,mdxType:"AuthorBox"}))}f.isMDXComponent=!0}}]);