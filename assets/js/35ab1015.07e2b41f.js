"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[3726],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9972:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(4137));const o={layout:"post",title:"How to Create a User With Limited Entitlements For REST API Calls",date:"2021-01-06 12:59",category:"blog",post_id:"20210106-howtocreatelimiteduser",author:"Mark Kauffman",tags:["rest","learn","api"],summary:"How to Create a User With Limited Entitlements For REST API Calls"},i="How to Create a User With Limited Entitlements For REST API Calls",s={permalink:"/anthologydevdocs/blog/2021/01/06/2021/How to Create a User With Limited Entitlements For REST API Calls",source:"@site/blog/2021/2021-01-06-How to Create a User With Limited Entitlements For REST API Calls.md",title:"How to Create a User With Limited Entitlements For REST API Calls",description:"First, as our documentation states, a Learn admin should never be told to associate a user with Learn admin privileges with any REST API integration, see this document. Hence we often get questions from folks on how to create a user to associate with a REST API integration that has limited capability on a Learn system. One way is to research and design your REST application to use OAuth 2 3-legged Authentication. See the documents referenced below. 3LO guarentees that the user using your REST Application can only do what they can do via the Learn UX when they are logged into Learn.",date:"2021-01-06T12:59:00.000Z",formattedDate:"January 6, 2021",tags:[{label:"rest",permalink:"/anthologydevdocs/blog/tags/rest"},{label:"learn",permalink:"/anthologydevdocs/blog/tags/learn"},{label:"api",permalink:"/anthologydevdocs/blog/tags/api"}],readingTime:1.025,hasTruncateMarker:!1,authors:[{name:"Mark Kauffman"}],frontMatter:{layout:"post",title:"How to Create a User With Limited Entitlements For REST API Calls",date:"2021-01-06 12:59",category:"blog",post_id:"20210106-howtocreatelimiteduser",author:"Mark Kauffman",tags:["rest","learn","api"],summary:"How to Create a User With Limited Entitlements For REST API Calls"},prevItem:{title:"Use One-Time Session Token to Authenticate with UEF",permalink:"/anthologydevdocs/blog/2021/05/10/2021/use one time session tokens instead of cookies for UEF authentication"},nextItem:{title:"Caliper Documentation Updated for 1.1",permalink:"/anthologydevdocs/blog/2021/01/05/2021/Caliper-Documentation-Updated-for-1.1"}},l={authorsImageUrls:[void 0]},c=[],u={toc:c},m="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"First, as our documentation states, a Learn admin should never be told to associate a user with Learn admin privileges with any REST API integration, see this document. Hence we often get questions from folks on how to create a user to associate with a REST API integration that has limited capability on a Learn system. One way is to research and design your REST application to use OAuth 2 3-legged Authentication. See the documents referenced below. 3LO guarentees that the user using your REST Application can only do what they can do via the Learn UX when they are logged into Learn."),(0,r.kt)("p",null,'However, if your application is using our OAuth 2 2-legged Authentication read on. Or I should say, watch on. I created the following to answer the question "Is it possible to create a user that has only the necessary permissions and avoid using "Learn System Admin" user?"'),(0,r.kt)("p",null,"The answer is yes! ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/uyKdbCpcZMc"},"Here's a video explaining exactly how to proceed"),"."),(0,r.kt)("p",null,"Reference Documentation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.anthology.com/docs/REST%20APIs/Learn/Admin/rest_apis-learn-admin-rest_and_learn"},"Managing REST Integrations in Learn: The REST Integrations Tool for System Administrators")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.anthology.com/docs/REST%20APIs/Learn/Getting%20Started/rest_apis-learn-getting-started-basic_auth"},"Basic Authentication with REST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.anthology.com/docs/REST%20APIs/Learn/Getting%20Started/rest_apis-learn-getting-started-3lo"},"Three-Legged OAuth")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Kong/mashape-oauth/blob/master/FLOWS.md"},"https://github.com/Kong/mashape-oauth/blob/master/FLOWS.md")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.anthology.com/docs/REST%20APIs/Learn/Getting%20Started/Tutorials"},"REST Tutorials")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://community.blackboard.com/blogs/4/18"},"Bookmarklet to help map entitlements to permissions")," (requires login.) or ",(0,r.kt)("a",{parentName:"li",href:"https://docs.anthology.com/docs/REST%20APIs/Learn/Getting%20Started/rest_apis-learn-getting-started-entitlements"},"document on this site"))))}p.isMDXComponent=!0}}]);