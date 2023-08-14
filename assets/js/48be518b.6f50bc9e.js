"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[822],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6121:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(7462),o=(a(7294),a(4137));const r={layout:"post",title:"Authorize and Authenticate in Ally","purple-text-title":"",id:"rest_apis-ally-authorization",categories:"Ally",author:"Scott Hurrey"},l=void 0,i={unversionedId:"rest-apis/ally/rest_apis-ally-authorization",id:"rest-apis/ally/rest_apis-ally-authorization",title:"Authorize and Authenticate in Ally",description:"Blackboard Ally as a Service relies on JSON web tokens (JWT) to authenticate and authorize incoming REST API calls. You can read more about the JWT standard here.",source:"@site/docs/rest-apis/ally/auth.md",sourceDirName:"rest-apis/ally",slug:"/rest-apis/ally/rest_apis-ally-authorization",permalink:"/docs/rest-apis/ally/rest_apis-ally-authorization",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Authorize and Authenticate in Ally","purple-text-title":"",id:"rest_apis-ally-authorization",categories:"Ally",author:"Scott Hurrey"},sidebar:"documentationSidebar",previous:{title:"About the API Documentation",permalink:"/docs/rest-apis/ally/rest_apis-ally-about_api_doc"},next:{title:"Check the processing status of a file",permalink:"/docs/rest-apis/ally/rest_apis-ally-check_status"}},s={},c=[{value:"JWT Assertion",id:"jwt-assertion",level:3},{value:"JWT Header",id:"jwt-header",level:3},{value:"JWT Payload",id:"jwt-payload",level:3},{value:"JWT Signature",id:"jwt-signature",level:3},{value:"Using the JWT Token",id:"using-the-jwt-token",level:2},{value:"Policies",id:"policies",level:3},{value:"Resources",id:"resources",level:4},{value:"Actions",id:"actions",level:4},{value:"Policy statements",id:"policy-statements",level:4},{value:"Additional Resources",id:"additional-resources",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=u("VersioningTracker"),p=u("AuthorBox"),h={toc:c},m="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(d,{frontMatter:r,mdxType:"VersioningTracker"}),(0,o.kt)("h1",{id:"authorize-and-authenticate-in-ally-as-a-service"},"Authorize and Authenticate in Ally as a Service"),(0,o.kt)("p",null,"Blackboard Ally as a Service relies on JSON web tokens (JWT) to authenticate and authorize incoming REST API calls. You can read more about the JWT standard ",(0,o.kt)("a",{parentName:"p",href:"https:////tools.ietf.org/html/rfc7519"},"here"),"."),(0,o.kt)("p",null,"The JSON web token must be signed with HMAC. HMAC allows the JWT to be signed with a shared secret. The data can be trusted because it is digitally signed with mutually known credentials."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": ",(0,o.kt)("em",{parentName:"p"},"To request these credentials, you will need to work with your Account Executive, who can request them on your behalf."))),(0,o.kt)("h3",{id:"jwt-assertion"},"JWT Assertion"),(0,o.kt)("p",null,"To get API access to the Ally service, you must create a JWT assertion.\nA JWT assertion is a JSON web token request for access. It includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"header"),(0,o.kt)("li",{parentName:"ul"},"payload"),(0,o.kt)("li",{parentName:"ul"},"signature")),(0,o.kt)("p",null,"The header and payload are each base64 encoded and the three parts are\nseparated with a dot, resulting in a token in this format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"encodedheader.encodedpayload.signature\n")),(0,o.kt)("p",null,"and resembles the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.\neyJjbGllbnRJZCI6ImFsbHktY2xpZW50LWlkIiwiaWF0IjoxNjAwMTc0MTM3fQ.\njh0tox209FPdI2TPMgIt6v2lQZLu9OGOnRs7KxJ6mLY\n")),(0,o.kt)("h3",{id:"jwt-header"},"JWT Header"),(0,o.kt)("p",null,"The header is a JSON object with that identifies the algorithm used to\ngenerate the signature and the type of token being created. In this example, the application is signing the data with HMAC-SHA 256 and requesting a JSON Web Token."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "alg": "HS256",\n  "typ": "JWT"\n}\n')),(0,o.kt)("p",null,"To create the encodedheader part of the token, base64 encode this JSON."),(0,o.kt)("h3",{id:"jwt-payload"},"JWT Payload"),(0,o.kt)("p",null,"The payload contains information about the calling application that uniquely identifies the client to the REST server. The Ally as a Service REST APIs supports two types of payloads:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A payload that identifies the caller as a service holding the secret key. This will permit all actions to be undertaken against the Ally as a Service REST APIs. Required parameters are:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"clientId")," - holds the numerical value of your provided and unique Ally client ID"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"iat")," - when the token was issued (seconds since epoch)",(0,o.kt)("br",null),"\nFor example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clientId": "###",\n  "iat": "1480457763988"\n}\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"A payload that identifies a narrow set of of permissions that the holder can execute. This is useful for when you want to delegate ",(0,o.kt)("em",{parentName:"li"},"some")," access to the Ally as a Service REST APIs to a third party (e.g. a user of your own service) but don't want them to be able to execute other actions (such as uploading new content). Required parameters are:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"clientId")," - holds the numerical value of your provided and unique Ally client ID"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"iat")," - when the token was issued (seconds since epoch)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"policy")," - a set of statements that explicitly grant which resources and actions the token holder has access to. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/rest-apis/ally/rest_apis-ally-authorization"},"Policies")," for more details.",(0,o.kt)("br",null),"\nFor example, the following policy allows the holder to request the format related information and request an alternative format:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clientId": "###",\n  "iat": "1480457763988",\n  "policy": {\n    "statements": [\n      {\n        "resource": "content:a1b2c3d4e5f6",\n        "actions": ["content:getDetails:WithFormats", "content:getFormat"]\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Base64 encode the payload and append it to the based64-encoded header,\nseparated by a dot."),(0,o.kt)("h3",{id:"jwt-signature"},"JWT Signature"),(0,o.kt)("p",null,"The signature is basically the string created above ",(0,o.kt)("inlineCode",{parentName:"p"},"encodedheader.encodedpayload"),", signed using the algorithm specified in the header and the REST API secret provided by Blackboard. The resulting string must be appended to encodedheader.encodedpayload, separated with a dot."),(0,o.kt)("h2",{id:"using-the-jwt-token"},"Using the JWT Token"),(0,o.kt)("p",null,"A properly formed Ally as a Service API call will use this signed JWT as its bearer token. To authorize a request, simply add this token as a Bearer token in your request's authorization header. The authorization header will look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6ImFsbHktY2xpZW50LWlkIiwiaWF0IjoxNjAwMTc0MTM3fQ.jh0tox209FPdI2TPMgIt6v2lQZLu9OGOnRs7KxJ6mLY\n")),(0,o.kt)("h3",{id:"policies"},"Policies"),(0,o.kt)("p",null,"Ally as a Service supports fine-grained permissions by defining a policy that explicitly allows which resources a user has access to and what actions they're allowed to execute. A policy consists out of one or more statements expressing what resources and actions the user is allowed to interact with. These resources and actions are defined using namespaced strings."),(0,o.kt)("h4",{id:"resources"},"Resources"),(0,o.kt)("p",null,"Ally as a Service identifies the following resources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"content:hashId")," - A single piece of content identified by the hashId"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"content:","*")," - All content uploaded into Ally as a Service")),(0,o.kt)("h4",{id:"actions"},"Actions"),(0,o.kt)("p",null,"Ally as a Service identifies the following actions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"content:upload")," - Allows the holder to upload content to Ally"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"content:getStatus")," - Allows the holder to request the processing status for an uploaded piece of content"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"content:getDetails")," - Allows the holder to retrieve basic information for a piece of content"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"content:getDetails:withFeedback")," - Allows the holder to retrieve the feedback information for a piece of content"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"content:getDetails:withFormats")," - Allows the holder to retrieve the alternative formats information for a piece of content"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"content:getFormat")," - Allows the holder to request an alternative format for a piece of content")),(0,o.kt)("h4",{id:"policy-statements"},"Policy statements"),(0,o.kt)("p",null,"A policy statement identifies which action(s) can be invoked on which(s) resources."),(0,o.kt)("p",null,"For example, the following statement would allow for retrieving the procesing status of an uploaded piece of content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "resource": "content:a1b2c3d4e5f6",\n  "action": ["content:getStatus"]\n}\n')),(0,o.kt)("p",null,"Note that a colon indicates the start of a new part in the namespace. It is possible to use a wildcard asterisk ",(0,o.kt)("em",{parentName:"p"},"*")," to widen the resource or action. For example, the following statement would allow for retrieving the procesing status of all content items:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "resource": "content:*",\n  "actions": ["content:getStatus"]\n}\n')),(0,o.kt)("p",null,"This can be done for both the resource or action string. For example, the following statement would allow for executing all content related actions on all content related resources. Note how the actions array has a second item as the wildcard only applies to one part of the namespace."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "resource": "content:*",\n  "actions": ["content:*", "content:*:*"]\n}\n')),(0,o.kt)("h3",{id:"additional-resources"},"Additional Resources"),(0,o.kt)("p",null,"JSON Web Tokens are a widely adopted standard in modern applications, and\nthus, there are a ton of resources available for developers interested in JWT beyond the scope of Ally."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://jwt.io/"},"JWT.io"),": This site is dedicated to assisting developers trying to build JWT-enabled applications. There is a debugger that allows you to manually input your secret and your header and payload and generate an assertion. There is also an extensive list of available libraries in multiple languages that handle the bulk of the JWT creation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7519"},"RFC 7519"),": This is the actual standard specification document.")),(0,o.kt)(p,{frontMatter:r,mdxType:"AuthorBox"}))}k.isMDXComponent=!0}}]);