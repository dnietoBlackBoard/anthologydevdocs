"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[5366],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(k,s(s({ref:t},c),{},{components:r})):a.createElement(k,s({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1480:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(4137));const i={title:"REST API Best Practices",id:"rest-api-best-practices",sidebar_position:2,published:"2023-10-11",edited:"2023-10-11",author:"Davey Herrera, Mark O'Neil"},s=void 0,o={unversionedId:"rest-apis/rest-api-best-practices",id:"rest-apis/rest-api-best-practices",title:"REST API Best Practices",description:"General Best Practices",source:"@site/docs/rest-apis/rest-api-best-practices.md",sourceDirName:"rest-apis",slug:"/rest-apis/rest-api-best-practices",permalink:"/docs/rest-apis/rest-api-best-practices",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"REST API Best Practices",id:"rest-api-best-practices",sidebar_position:2,published:"2023-10-11",edited:"2023-10-11",author:"Davey Herrera, Mark O'Neil"},sidebar:"documentationSidebar",previous:{title:"Welcome to our REST APIs!",permalink:"/docs/rest-apis/start-here"},next:{title:"Welcome to Learn REST APIs!",permalink:"/docs/rest-apis/learn/learn-intro"}},l={},p=[{value:"General Best Practices",id:"general-best-practices",level:2},{value:"Best Practices per Product and API",id:"best-practices-per-product-and-api",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=c("VersioningTracker"),d=c("AuthorBox"),m={toc:p},k="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(k,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(u,{frontMatter:i,mdxType:"VersioningTracker"}),(0,n.kt)("h2",{id:"general-best-practices"},"General Best Practices"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Learn System Administrators should be enrolled in courses only using a non-Admin enabled user. "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"System Administrator information is generally only available to 3LO Administrator requests. "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Always monitor your API usage using the x-header information returned on non-oauth requests "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Details on rate_limits and x-headers are available ",(0,n.kt)("a",{parentName:"li",href:"https://docs.anthology.com/docs/developer-portal/production-groups-rest-api-and-site-registration-limits#rest-api-calls-limit"},"here"),". "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Not all data operations are best done Just-In-Time (JIT).\nSome operations, such as backfilling data warehouses or refreshing caches are best done during off-peak Learn hours. "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'JIT calling or repeatedly calling for the same "static" data is inefficient. '),(0,n.kt)("li",{parentName:"ul"},"Checking whether a student is still in a course or getting their course grades are reasonable JIT activities as that is data that may change between now and their last access. "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Cache infrequently changed or \u201cstatic\u201d data and refresh periodically. "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This reduces repetitive calls.  "),(0,n.kt)("li",{parentName:"ul"},"This reduces integration performance impact. "),(0,n.kt)("li",{parentName:"ul"},"Don\u2019t JIT retrieve ALL Courses for example as that data changes infrequently. Instead do this once and then periodically retrieve course data created or modified since you last request. "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Always "optimize" your requests.'),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"reduce your \u201csearch\u201d criteria to as small a set of data as possible. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This limits the number of pages of returned data set. "),(0,n.kt)("li",{parentName:"ul"},"E.g. use ",(0,n.kt)("inlineCode",{parentName:"li"},"?dataSourceId=")," to reduce your search to objects created using a specific DSK and follow caching practices. "))),(0,n.kt)("li",{parentName:"ul"},"Use the fields parameter to reduce the returned data set to only data points you require. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This limits the data transmitted and system load "))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Always try to logically bound your requests or before acting on request results: "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Check if dates are within bounds "),(0,n.kt)("li",{parentName:"ul"},"Check if attempts exist of if items are graded "),(0,n.kt)("li",{parentName:"ul"},"Check availability "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Do not use Collection Gets to test for a specific object."),(0,n.kt)("p",{parentName:"li"},"E.g.: don't use ",(0,n.kt)("inlineCode",{parentName:"p"},"GET /learn/api/public/v1/courses/{courseId}/users")," to get all the course memberships to test if a student is enrolled. "),(0,n.kt)("p",{parentName:"li"},"Instead use: ",(0,n.kt)("inlineCode",{parentName:"p"},"GET /learn/api/public/v1/courses/{courseId}/users/{userId}")," and branch your code based on the result."))),(0,n.kt)("h2",{id:"best-practices-per-product-and-api"},"Best Practices per Product and API"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Learn"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"* ",(0,n.kt)("a",{parentName:"td",href:"/docs/rest-apis/learn/working-with-learn-apis/calendar-apis#calendar-api-best-practices"},"Calendar"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"* ",(0,n.kt)("a",{parentName:"td",href:"/docs/rest-apis/learn/working-with-learn-apis/pulling-gradebook-data-and-assessment-grades#gradebook-api-best-practices"},"Gradebook"))))),(0,n.kt)(d,{frontMatter:i,mdxType:"AuthorBox"}))}f.isMDXComponent=!0}}]);