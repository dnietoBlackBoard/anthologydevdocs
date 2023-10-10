"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[6063],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9884:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(4137));const l={title:"Retrieve the feedback for multiple files",id:"getting-batched-feedback",categories:"Ally",published:"",edited:"",author:"Simon Gaeremynck"},i=void 0,o={unversionedId:"rest-apis/ally/getting-batched-feedback",id:"rest-apis/ally/getting-batched-feedback",title:"Retrieve the feedback for multiple files",description:"The batch endpoint allows you to retrieve content for more than one content hash",source:"@site/docs/rest-apis/ally/get-batched-feedback.md",sourceDirName:"rest-apis/ally",slug:"/rest-apis/ally/getting-batched-feedback",permalink:"/docs/rest-apis/ally/getting-batched-feedback",draft:!1,tags:[],version:"current",frontMatter:{title:"Retrieve the feedback for multiple files",id:"getting-batched-feedback",categories:"Ally",published:"",edited:"",author:"Simon Gaeremynck"},sidebar:"documentationSidebar",previous:{title:"Feedback parameter definitions",permalink:"/docs/rest-apis/ally/feedback-parameter-definitions"},next:{title:"Retrieve the feedback for a file",permalink:"/docs/rest-apis/ally/getting-feedback"}},s={},c=[{value:"Endpoint",id:"endpoint",level:2},{value:"Path Parameters",id:"path-parameters",level:3},{value:"Body Parameters",id:"body-parameters",level:4},{value:"Query Parameters",id:"query-parameters",level:4},{value:"Expected response",id:"expected-response",level:2},{value:"Testing with cURL",id:"testing-with-curl",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=p("VersioningTracker"),u=p("AuthorBox"),m={toc:c},f="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d,{frontMatter:l,mdxType:"VersioningTracker"}),(0,a.kt)("p",null,"The batch endpoint allows you to retrieve content for more than one content hash"),(0,a.kt)("h2",{id:"endpoint"},"Endpoint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"GET /api/v2/clients/:clientId/content/batch\n")),(0,a.kt)("h3",{id:"path-parameters"},"Path Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"clientId")," - Path parameter - Your Ally Client ID")),(0,a.kt)("h4",{id:"body-parameters"},"Body Parameters"),(0,a.kt)("p",null,"The request body is a JSON encoded request of the form:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "references": [\n    { "hash": "a1b2c3d..." },\n    { "hash": "QWxseSs..." },\n    { "hash": "e1f2123..." }\n  ]\n}\n')),(0,a.kt)("h4",{id:"query-parameters"},"Query Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"feedback"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Query parameter - Whether feedback information should be returned. Should be true, false or omitted."),(0,a.kt)("li",{parentName:"ul"},"Requires the ",(0,a.kt)("inlineCode",{parentName:"li"},"content:getDetails:withFeedback")," action to be granted in the JWT token before data is release"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"formats"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Query parameter - Whether alternative format information should be returned. Should be true, false or omitted."),(0,a.kt)("li",{parentName:"ul"},"Requires the ",(0,a.kt)("inlineCode",{parentName:"li"},"content:getDetails:withFormats")," action to be granted in the JWT token before data is release")))),(0,a.kt)("h2",{id:"expected-response"},"Expected response"),(0,a.kt)("p",null,"The values in the JSON array will follow the same order as in the submitted request. If no information could be\nretrieved for a content reference, the ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," value will be returned."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"formats=true")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "reports": [\n    null,\n    {\n      "hash": "QWxseSs...",\n      "feedback": null,\n      "formats": {\n        "availableFormats": ["Beeline", "Tts", "Epub", "Braille", "Html"],\n        "canToggleAvailability": false,\n        "available": true,\n        "visibility": true\n      },\n      "metadata": {\n        "name": "Ally+-+One+Pager+-+Higher+Ed+-+General.pdf",\n        "decorative": null,\n        "description": null,\n        "fileType": "pdf",\n        "mimeType": "application/pdf",\n        "isVersioned": false,\n        "isSeizureInducing": false,\n        "libraryReference": null\n      }\n    },\n    null\n  ]\n}\n')),(0,a.kt)("h3",{id:"testing-with-curl"},"Testing with cURL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n  -H "Authorization: Bearer myJwtToken" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"references": [{"hash": "a1b2c3d..."},{"hash": "QWxseSs..."},{"hash": "e1f2123..."}]}\' \\\n  https://prod.ally.ac/api/v2/clients/:clientId/content/bash\n')),(0,a.kt)(u,{frontMatter:l,mdxType:"AuthorBox"}))}h.isMDXComponent=!0}}]);