"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[6063],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||l;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9884:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(4137));const l={layout:"post",title:"Retrieve the feedback for multiple files",id:"rest_apis-ally-getting_batched_feedback",categories:"Ally",author:"Simon Gaeremynck"},i="Retrieve the feedback for multiple files",o={unversionedId:"rest-apis/ally/rest_apis-ally-getting_batched_feedback",id:"rest-apis/ally/rest_apis-ally-getting_batched_feedback",title:"Retrieve the feedback for multiple files",description:"The batch endpoint allows you to retrieve content for more than one content hash",source:"@site/docs/rest-apis/ally/get-batched-feedback.md",sourceDirName:"rest-apis/ally",slug:"/rest-apis/ally/rest_apis-ally-getting_batched_feedback",permalink:"/docs/rest-apis/ally/rest_apis-ally-getting_batched_feedback",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Retrieve the feedback for multiple files",id:"rest_apis-ally-getting_batched_feedback",categories:"Ally",author:"Simon Gaeremynck"},sidebar:"documentationSidebar",previous:{title:"Feedback parameter definitions",permalink:"/docs/rest-apis/ally/rest_apis-ally-api_feedback_def"},next:{title:"Retrieve the feedback for a file",permalink:"/docs/rest-apis/ally/rest_apis-ally-getting_feedback"}},s={},p=[{value:"Endpoint",id:"endpoint",level:2},{value:"Path Parameters",id:"path-parameters",level:3},{value:"Body Parameters",id:"body-parameters",level:4},{value:"Query Parameters",id:"query-parameters",level:4},{value:"Expected response",id:"expected-response",level:2},{value:"Testing with cURL",id:"testing-with-curl",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"retrieve-the-feedback-for-multiple-files"},"Retrieve the feedback for multiple files"),(0,n.kt)("p",null,"The batch endpoint allows you to retrieve content for more than one content hash"),(0,n.kt)("h2",{id:"endpoint"},"Endpoint"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"GET /api/v2/clients/:clientId/content/batch\n")),(0,n.kt)("h3",{id:"path-parameters"},"Path Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"clientId")," - Path parameter - Your Ally Client ID")),(0,n.kt)("h4",{id:"body-parameters"},"Body Parameters"),(0,n.kt)("p",null,"The request body is a JSON encoded request of the form:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "references": [\n    { "hash": "a1b2c3d..." },\n    { "hash": "QWxseSs..." },\n    { "hash": "e1f2123..." }\n  ]\n}\n')),(0,n.kt)("h4",{id:"query-parameters"},"Query Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"feedback"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Query parameter - Whether feedback information should be returned. Should be true, false or omitted."),(0,n.kt)("li",{parentName:"ul"},"Requires the ",(0,n.kt)("inlineCode",{parentName:"li"},"content:getDetails:withFeedback")," action to be granted in the JWT token before data is release"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"formats"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Query parameter - Whether alternative format information should be returned. Should be true, false or omitted."),(0,n.kt)("li",{parentName:"ul"},"Requires the ",(0,n.kt)("inlineCode",{parentName:"li"},"content:getDetails:withFormats")," action to be granted in the JWT token before data is release")))),(0,n.kt)("h2",{id:"expected-response"},"Expected response"),(0,n.kt)("p",null,"The values in the JSON array will follow the same order as in the submitted request. If no information could be\nretrieved for a content reference, the ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," value will be returned."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"formats=true")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "reports": [\n    null,\n    {\n      "hash": "QWxseSs...",\n      "feedback": null,\n      "formats": {\n        "availableFormats": ["Beeline", "Tts", "Epub", "Braille", "Html"],\n        "canToggleAvailability": false,\n        "available": true,\n        "visibility": true\n      },\n      "metadata": {\n        "name": "Ally+-+One+Pager+-+Higher+Ed+-+General.pdf",\n        "decorative": null,\n        "description": null,\n        "fileType": "pdf",\n        "mimeType": "application/pdf",\n        "isVersioned": false,\n        "isSeizureInducing": false,\n        "libraryReference": null\n      }\n    },\n    null\n  ]\n}\n')),(0,n.kt)("h3",{id:"testing-with-curl"},"Testing with cURL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n  -H "Authorization: Bearer myJwtToken" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"references": [{"hash": "a1b2c3d..."},{"hash": "QWxseSs..."},{"hash": "e1f2123..."}]}\' \\\n  https://prod.ally.ac/api/v2/clients/:clientId/content/bash\n')))}d.isMDXComponent=!0}}]);