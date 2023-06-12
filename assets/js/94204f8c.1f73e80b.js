"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[6363],{4137:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),u=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(h,i(i({ref:e},p),{},{components:a})):n.createElement(h,i({ref:e},p))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3150:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(4137));const o={layout:"post",title:"Student REST API: First Steps",id:"rest_apis-student-getting-started-first-steps",categories:"Student REST"},i="First Steps with Student REST API",s={unversionedId:"REST APIs/Student/Getting Started/rest_apis-student-getting-started-first-steps",id:"REST APIs/Student/Getting Started/rest_apis-student-getting-started-first-steps",title:"Student REST API: First Steps",description:"Anthology offers a suite of education technology tools, both software and hardware. REST stands for Representational State Transfer. It is a lightweight, flexible web service architecture that allows HTTP commands to be sent to Web Applications without unnecessary overhead.",source:"@site/docs/REST APIs/Student/Getting Started/student-first-steps.md",sourceDirName:"REST APIs/Student/Getting Started",slug:"/REST APIs/Student/Getting Started/rest_apis-student-getting-started-first-steps",permalink:"/docs/REST APIs/Student/Getting Started/rest_apis-student-getting-started-first-steps",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Student REST API: First Steps",id:"rest_apis-student-getting-started-first-steps",categories:"Student REST"},sidebar:"documentationSidebar",previous:{title:"Upload a file to Ally",permalink:"/docs/REST APIs/Ally/rest_apis-ally-uploading_files"},next:{title:"Service Catalog: Anthology Student",permalink:"/docs/REST APIs/Student/Service Catalog/rest_apis-student-service-catalog"}},l={},u=[{value:"Before You Get Started",id:"before-you-get-started",level:2},{value:"Availability",id:"availability",level:4},{value:"API Access",id:"api-access",level:4},{value:"Authorization",id:"authorization",level:4},{value:"More Information",id:"more-information",level:4}],p={toc:u},c="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"first-steps-with-student-rest-api"},"First Steps with Student REST API"),(0,r.kt)("p",null,"Anthology offers a suite of education technology tools, both software and hardware. REST stands for Representational State Transfer. It is a lightweight, flexible web service architecture that allows HTTP commands to be sent to Web Applications without unnecessary overhead."),(0,r.kt)("h2",{id:"before-you-get-started"},"Before You Get Started"),(0,r.kt)("h4",{id:"availability"},"Availability"),(0,r.kt)("p",null,"Student APIs are made available exclusively to licensed Anthology member campuses. Third-party or public use of Student APIs is prohibited without the consent of Anthology."),(0,r.kt)("h4",{id:"api-access"},"API Access"),(0,r.kt)("p",null,"Campus developers who wish to access the API must be pre-approved by Anthology."),(0,r.kt)("p",null,"Developers may be added to the approved list by having the official campus contact, who is responsible for your license, send the following information for each developer to the Support Team (",(0,r.kt)("a",{parentName:"p",href:"mailto:support@campuslabs.com"},"support@campuslabs.com"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Full name"),(0,r.kt)("li",{parentName:"ul"},"Unique identifier"),(0,r.kt)("li",{parentName:"ul"},"Campus email address")),(0,r.kt)("p",null,"Once approved, developers may manage their own access keys at: ",(0,r.kt)("a",{parentName:"p",href:"https://%7Bcampusdomain%7D.campuslabs.com/keymanagement"},"https://{campusdomain}.campuslabs.com/keymanagement"),"\nwhere {campusdomain} is the name/host of your institution's Anthology installation."),(0,r.kt)("h4",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,"In order to maintain data security, an authorization token is required to make calls to the API. How you handle retrieving an authorization token is dependent on your Student configuration. You may read about authorization tokens and Student configuration in detail at ",(0,r.kt)("a",{parentName:"p",href:"https://help.campusmanagement.com/IM/Content/CNS/CNSAPI.htm"},"https://help.campusmanagement.com/IM/Content/CNS/CNSAPI.htm")),(0,r.kt)("h4",{id:"more-information"},"More Information"),(0,r.kt)("p",null,"We will continue to add new examples, tutorials, and code samples so make sure to check these links regularly."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.anthology.com"},"Student Developer Docs")," (navigate to REST APIs>Student)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.anthology.com/"},"Developer Portal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.anthology.com/portal/displayApi"},"REST Documentation"))))}d.isMDXComponent=!0}}]);