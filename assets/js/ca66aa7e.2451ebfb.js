"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[5173],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),y=n,h=u["".concat(l,".").concat(y)]||u[y]||d[y]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},254:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(4137));const i={layout:"post",title:"Getting Started",id:"rest_apis-ally-getting_started",categories:"Ally",author:"Scott Hurrey",sidebar_position:1,displayed_sidebar:"documentationSidebar"},o="Getting Started Developing for Ally as a Service",s={unversionedId:"rest-apis/ally/rest_apis-ally-getting_started",id:"rest-apis/ally/rest_apis-ally-getting_started",title:"Getting Started",description:"Ally as a Service provides separatly licensed, stand-alone API access to allow an application to process files for accessibility. Many of you are using this power in your LMS to help instructors improve the accessibility of their content, and to give students, regardless of ability, access to the content that meets their needs and learning style the best.",source:"@site/docs/rest-apis/ally/getting-started.md",sourceDirName:"rest-apis/ally",slug:"/rest-apis/ally/rest_apis-ally-getting_started",permalink:"/docs/rest-apis/ally/rest_apis-ally-getting_started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{layout:"post",title:"Getting Started",id:"rest_apis-ally-getting_started",categories:"Ally",author:"Scott Hurrey",sidebar_position:1,displayed_sidebar:"documentationSidebar"},sidebar:"documentationSidebar",previous:{title:"Bb App students launch schema",permalink:"/docs/rest-apis/learn/learn-app/rest_apis-learn-bbapp-student_launch_schema"},next:{title:"About the API Documentation",permalink:"/docs/rest-apis/ally/rest_apis-ally-about_api_doc"}},l={},c=[{value:"Tutorials and Examples",id:"tutorials-and-examples",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started-developing-for-ally-as-a-service"},"Getting Started Developing for Ally as a Service"),(0,n.kt)("p",null,"Ally as a Service provides separatly licensed, stand-alone API access to allow an application to process files for accessibility. Many of you are using this power in your LMS to help instructors improve the accessibility of their content, and to give students, regardless of ability, access to the content that meets their needs and learning style the best."),(0,n.kt)("p",null,"To get started, the first thing you need is a client ID, key, and secret. At this time, the best way to obtain this information is to engage your Account Executive to discuss pricing and request credentials. As the API continues to grow, this process may change, so be sure to check back here often."),(0,n.kt)("p",null,"Once you have your key and secret, the first step in any REST integration framework is typically to learn how to authenticate and authorize your application. Ally as a Service uses JSON Web Tokens (JWT) in order to generate a token, which is then used as a Bearer token in the Authorization header of each request."),(0,n.kt)("p",null,"Click here to learn more about ",(0,n.kt)("a",{parentName:"p",href:"/docs/rest-apis/ally/rest_apis-ally-authorization"},"authorization and authentication")," for Ally as a Service."),(0,n.kt)("p",null,"There are a number of ways to test out the API. The easiest is to use the Ally API. You can enter your client ID and your secret, and then interact with the available API directly from the documentation."),(0,n.kt)("p",null,"Click here to learn more about ",(0,n.kt)("a",{parentName:"p",href:"/docs/rest-apis/ally/rest_apis-ally-about_api_doc"},"using the API documentation")," in this way."),(0,n.kt)("p",null,"Here are the operations currently available in the API (each page has a sample cURL command at the bottom):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/rest-apis/ally/rest_apis-ally-uploading_files"},"Upload a file to Ally")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/rest-apis/ally/rest_apis-ally-check_status"},"Check the processing status for a file")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/rest-apis/ally/rest_apis-ally-getting_feedback"},"Retrieve the feedback for the file"))),(0,n.kt)("p",null,"This list is ever growing, so be sure to check back often to get the latest list of functionality available."),(0,n.kt)("h3",{id:"tutorials-and-examples"},"Tutorials and Examples"),(0,n.kt)("p",null,"As we create tutorials and sample code, we will list them here."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ally.ac/api/"},"Ally as a Service API documentation")," - Includes sample cURL Commands"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/blackboard/BBDN-AaaS-Postman"},"Postman Collection")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/blackboard/BBDN-AaaS-Python"},"Python"))))}d.isMDXComponent=!0}}]);