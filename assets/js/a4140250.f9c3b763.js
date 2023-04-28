"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[5173],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),p=r,m=c["".concat(l,".").concat(p)]||c[p]||h[p]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(4137));const o={layout:"post",title:"Rest 3LO and Learn SSO",id:"rest_apis-learn-admin-rest3LO_and_learnSSO",categories:"Learn REST",author:"Mark Kauffman",doctitle:"REST Integrations 3-Legged OAuth and Learn Custom Login Pages For System Administrators"},i="REST Integrations 3-Legged OAuth and Learn Custom Login Pages For System Administrators",s={unversionedId:"REST APIs/Learn/Admin/rest_apis-learn-admin-rest3LO_and_learnSSO",id:"REST APIs/Learn/Admin/rest_apis-learn-admin-rest3LO_and_learnSSO",title:"Rest 3LO and Learn SSO",description:"Your Custom Login Page and REST 3-Legged OAuth",source:"@site/docs/REST APIs/Learn/Admin/rest3LO-and-learnSSO.md",sourceDirName:"REST APIs/Learn/Admin",slug:"/REST APIs/Learn/Admin/rest_apis-learn-admin-rest3LO_and_learnSSO",permalink:"/docs/REST APIs/Learn/Admin/rest_apis-learn-admin-rest3LO_and_learnSSO",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Rest 3LO and Learn SSO",id:"rest_apis-learn-admin-rest3LO_and_learnSSO",categories:"Learn REST",author:"Mark Kauffman",doctitle:"REST Integrations 3-Legged OAuth and Learn Custom Login Pages For System Administrators"},sidebar:"documentationSidebar",previous:{title:"Rest and Learn",permalink:"/docs/REST APIs/Learn/Admin/rest_apis-learn-admin-rest_and_learn"},next:{title:"Working with Adaptive Release",permalink:"/docs/REST APIs/Learn/Working with Learn APIs/rest_apis-learn-getting_started-adaptive_release"}},l={},u=[{value:"Your Custom Login Page and REST 3-Legged OAuth",id:"your-custom-login-page-and-rest-3-legged-oauth",level:4},{value:"What Went Wrong",id:"what-went-wrong",level:4},{value:"How to Fix",id:"how-to-fix",level:4}],d={toc:u},c="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rest-integrations-3-legged-oauth-and-learn-custom-login-pages-for-system-administrators"},"REST Integrations 3-Legged OAuth and Learn Custom Login Pages For System Administrators"),(0,r.kt)("h4",{id:"your-custom-login-page-and-rest-3-legged-oauth"},"Your Custom Login Page and REST 3-Legged OAuth"),(0,r.kt)("p",null,"This article is to help Learn administrators ensure that a custom SSO login page works with REST 3LO applications. Several clients have reported that when trying to complete the following workflow with a 3rd-party REST Application their users get stuck on the Learn landing page. Expected 3-legged authentication workflow:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Access a 3rd-party application that has a REST integration with a Learn system (App)."),(0,r.kt)("li",{parentName:"ol"},"Use functionality on the App that requires a login to Learn. (Performs an /authorizationcode REST Request)"),(0,r.kt)("li",{parentName:"ol"},"Login to Learn via a custom login .jsp page."),(0,r.kt)("li",{parentName:"ol"},"Get redirected to back the App. The App can now make REST requests to the Learn system.")),(0,r.kt)("p",null,"When the custom login .jsp page is not built to take the 3LO process into account, the user logs into Learn and 'sticks' on their Learn landing page. They are never redirected back to the App."),(0,r.kt)("h4",{id:"what-went-wrong"},"What Went Wrong"),(0,r.kt)("p",null,"The problem is caused by the login link or button that the user clicks on in the third step above. We've always found that link to have been hard-coded, usually to use the SSO integration for the Learn system. The hard-coded link does not contain the necessary parameters that are sent to the Learn system with the /authorizationcode request. The link can not be hard-coded. It must be dynamic, as ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/mM4XSkWzd7A"},"shown in this video"),"."),(0,r.kt)("h4",{id:"how-to-fix"},"How to Fix"),(0,r.kt)("p",null,"As mentioned in the video, when the custom login .jsp uses the \\<loginUI:loginForm/",">"," tag to create the link/button that the user clicks on to login to the system, that link will be dynamically generated and preserve all of the information that was sent to the Learn system with the /authorizationcode request from the 3rd-party App. You cannot merely have the tag on the page. You must use the <loginUI:loginForm> tag to create the link because that tag uses the necessary Learn internal Java code to correctly build the sign-in link."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(9907).Z},"Here is a sample custom login page that works for 3LO and SSO"),"*",". You can study how the CSS modifies the content shown by the \\<loginUI:loginForm/",">",' tag so that it shows up as a "button" with a link that is dynamically generated and maintains the 3LO /authorizationcode request parameters.'),(0,r.kt)("p",null,"Note that you may also need to study how your SSO system needs to be configured to pass through parameters. Such is out of the scope of this document - which is only meant to describe the requirements for your custom login page."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Key takeaway:"))," A custom login page can work with REST API integrations only if the Learn-provided <loginUI:loginForm/> tag is used to generate the link a user access to sign in. You may customize how that looks with some CSS, but you can never use other HTML to provide the user a login link."),(0,r.kt)("p",null,"*","Credits to Chris Bray from the University of Arkansas for the UARKexampleCustomLogin.jsp example and Dan Gioia of St. Louis Community College for much of the CSS Chris used in the .jsp. Thank you both!"))}h.isMDXComponent=!0},9907:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/UARKexampleCustomLogin-c02f98a4c905cb7e3a3b308c27bcef57.jsp"}}]);