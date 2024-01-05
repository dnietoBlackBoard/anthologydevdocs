"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[6911],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=n,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return r?i.createElement(g,a(a({ref:t},d),{},{components:r})):i.createElement(g,a({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=r(7462),n=(r(7294),r(4137));const o={layout:"post",title:"OIDC Login Without Cookies - Sharing the lti_storage_target Between Platform and Tool",id:"poidc-login-lti_storage_target",categories:"Standards",published:"2024-01-05",edited:"2024-01-05",author:"Mark Kauffman"},a=void 0,s={unversionedId:"lti/core/poidc-login-lti_storage_target",id:"lti/core/poidc-login-lti_storage_target",title:"OIDC Login Without Cookies - Sharing the lti_storage_target Between Platform and Tool",description:"Motivation",source:"@site/docs/lti/core/poidc-login-lti_storage_target.md",sourceDirName:"lti/core",slug:"/lti/core/poidc-login-lti_storage_target",permalink:"/docs/lti/core/poidc-login-lti_storage_target",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"OIDC Login Without Cookies - Sharing the lti_storage_target Between Platform and Tool",id:"poidc-login-lti_storage_target",categories:"Standards",published:"2024-01-05",edited:"2024-01-05",author:"Mark Kauffman"},sidebar:"documentationSidebar",previous:{title:"Handling OIDC Login",permalink:"/docs/lti/core/handling-oidc-login"},next:{title:"Migrating from LTI 1.0/1.1 to 1.3",permalink:"/docs/lti/migrating/migrating-from-lt1.1-to-lti1.3"}},l={},c=[{value:"Motivation",id:"motivation",level:3},{value:"Details",id:"details",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},p=d("VersioningTracker"),u=d("AuthorBox"),h={toc:c},g="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(g,(0,i.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(p,{frontMatter:o,mdxType:"VersioningTracker"}),(0,n.kt)("h3",{id:"motivation"},"Motivation"),(0,n.kt)("p",null,"We've seen questions from tool developers about the fact that Learn does not append the lti_storage_target parameter to the redirect URL that the tool has pre-registered with the Learn platform. We don't append that because Learn keeps that redirect URL sacrosanct given that ",(0,n.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/redirect-uri-registration/"},"https://www.oauth.com/oauth2-servers/redirect-uris/redirect-uri-registration/")," indicates it should never be modified from the value given at registration time. You can get the lti_storage_target a couple of ways as shown in ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/li1xkqDo1XQ?feature=shared"},"this video"),", one being to use the capabilities request, because Learn supports the optional frame field. The other way that you could get the lti_storage_target as a parameter on your redirect URL is to add that parameter and the value Learn uses: ","<","i_storage_target=lti_storage_frame"),(0,n.kt)("h3",{id:"details"},"Details"),(0,n.kt)("p",null,"In the evolving landscape of Learning Tools Interoperability (LTI) and online learning platforms, LTI 1.3 has emerged as a crucial standard for integrating learning applications with Learning Management Systems (Platforms) like Blackboard Learn and others. The core of LTI 1.3 facilitates seamless single sign-on (SSO) from an LMS into a learning application, but it's faced challenges with the move to block third-party cookies in web browsers for privacy reasons."),(0,n.kt)("p",null,"Third-party cookies, used in the original LTI 1.3 Core and LTI Advantage Deep Linking specifications, are crucial for completing the security handshake required for users to SSO into a learning tool's user interface within an iframe in the LMS. However, as browsers increasingly block these cookies to protect user privacy, this poses a significant hurdle for LTI integrations."),(0,n.kt)("p",null,"In response to these challenges, 1EdTech (formerly IMS Global) has developed new specifications to circumvent the use of third-party cookies during LTI 1.3 Core resource link launches, as well as Deep Linking content picker launches. These include allowing the tool to use JavaScript postMessage for accessing an additional iframe for shared storage between the tool and LMS. This approach maintains high security standards, ensuring that neither LTI Core resource link launches nor Deep Linking content picker launches can be spoofed."),(0,n.kt)("p",null,"An essential aspect of this new specification is that it does not require the inclusion of the lti_storage_target parameter in the tool launch process following the OIDC login. Instead, the specifications offer alternative ways to achieve the necessary functionality without relying on this parameter. For example, the LMS can indicate its support for an additional iframe for shared storage through a capabilities endpoint. This flexibility is particularly crucial for platforms like Learn, which adheres strictly to the guidelines that redirect URIs should not be modified from their registered value, as indicated by OAuth 2.0 standards."),(0,n.kt)("p",null,"These changes represent a significant advancement in addressing the challenges posed by the evolving web privacy landscape, ensuring that LTI integrations can continue to provide seamless and secure user experiences in online learning environments. For developers and institutions, it's essential to stay informed about these updates and consider implementing them to maintain the efficacy and security of their LTI integrations."),(0,n.kt)(u,{frontMatter:o,mdxType:"AuthorBox"}))}f.isMDXComponent=!0}}]);