"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[6873],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=l,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||n;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4936:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=a(7462),l=(a(7294),a(4137));const n={layout:"post",title:"Upload a file to Ally",id:"rest_apis-ally-uploading_files",categories:"Ally",author:"Scott Hurrey"},i="Upload a file to Ally",o={unversionedId:"REST APIs/Ally/rest_apis-ally-uploading_files",id:"REST APIs/Ally/rest_apis-ally-uploading_files",title:"Upload a file to Ally",description:"Start the process by uploading the file you would like to get feedback for. This is a multipart POST request. The response will contain the statusUrl that you can poll to check whether the file has been processed. If the file was processed previously, a resourceUrl will be provided through which you can fetch the feedback information immediately.",source:"@site/docs/REST APIs/Ally/uploading-files.md",sourceDirName:"REST APIs/Ally",slug:"/REST APIs/Ally/rest_apis-ally-uploading_files",permalink:"/anthologydevdocs/docs/REST APIs/Ally/rest_apis-ally-uploading_files",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Upload a file to Ally",id:"rest_apis-ally-uploading_files",categories:"Ally",author:"Scott Hurrey"},sidebar:"documentationSidebar",previous:{title:"Integrate Ally as a Service into your own user interface",permalink:"/anthologydevdocs/docs/REST APIs/Ally/rest_apis-ally-ui_integration"},next:{title:"Student REST API: First Steps",permalink:"/anthologydevdocs/docs/REST APIs/Student/Getting Started/rest_apis-student-getting-started-first-steps"}},s={},p=[{value:"Supported content types",id:"supported-content-types",level:2},{value:"Endpoint",id:"endpoint",level:3},{value:"Path Parameters",id:"path-parameters",level:3},{value:"Body Parameters",id:"body-parameters",level:3},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Expected response",id:"expected-response",level:2},{value:"Testing with cURL",id:"testing-with-curl",level:3},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"Upload - input",id:"upload---input",level:3},{value:"Upload - mechanics",id:"upload---mechanics",level:3},{value:"Upload - output",id:"upload---output",level:3}],u={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"upload-a-file-to-ally"},"Upload a file to Ally"),(0,l.kt)("p",null,"Start the process by uploading the file you would like to get feedback for. This is a multipart POST request. The response will contain the statusUrl that you can poll to check whether the file has been processed. If the file was processed previously, a resourceUrl will be provided through which you can fetch the feedback information immediately."),(0,l.kt)("h2",{id:"supported-content-types"},"Supported content types"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PDF files"),(0,l.kt)("li",{parentName:"ul"},"Microsoft\xae Word files"),(0,l.kt)("li",{parentName:"ul"},"Microsoft\xae PowerPoint\xae files"),(0,l.kt)("li",{parentName:"ul"},"OpenOffice/LibreOffice files"),(0,l.kt)("li",{parentName:"ul"},"Uploaded HTML files"),(0,l.kt)("li",{parentName:"ul"},"Image files (JPG, JPEG, GIF, PNG, BPM, TIFF)")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"endpoint"},"Endpoint"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"POST /api/v2/clients/:clientId/content\n")),(0,l.kt)("h3",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"clientId")," - Path parameter - Your Ally Client ID")),(0,l.kt)("h3",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"file")," - Post parameter - The binary file data")),(0,l.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"None")),(0,l.kt)("h2",{id:"expected-response"},"Expected response"),(0,l.kt)("p",null,"There are two potential outcomes:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The file is new and will be processed asynchronously. The endpoint will return with a 202 Accepted response and the following response body:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "hash": "UkVBRE1FLm1k...",\n    "status": "pending",\n    "statusUrl": "/api/v2/clients/:clientId/content/UkVBRE1FLm1k.../status,\n    "resourceUrl": null\n}\n')),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hash"),(0,l.kt)("td",{parentName:"tr",align:null},"the content hash used to reference the file by Ally as a Service")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"the stage of processing the file is in","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statusUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"the endpoint to call to check the status")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resourceUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"the endpoint to retrieve the report or metadata")))),(0,l.kt)("p",{parentName:"li"},"*","The following status values can be identified:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"success"),(0,l.kt)("li",{parentName:"ul"},"pending"),(0,l.kt)("li",{parentName:"ul"},"inprogress"),(0,l.kt)("li",{parentName:"ul"},"failed"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The file has been processed before. The endpoint will return a ",(0,l.kt)("inlineCode",{parentName:"p"},"303 See Other")," with a ",(0,l.kt)("inlineCode",{parentName:"p"},"Location")," header to the feedback URL"))),(0,l.kt)("h3",{id:"testing-with-curl"},"Testing with cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n  -H "Authorization: Bearer myJwtToken" \\\n  -F"file=@test.pdf" https://prod.ally.ac/api/v2/clients/:clientId/content\n')),(0,l.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,l.kt)("p",null,"This section contains answers to many of the common questions we field as developers are on-boarding to the Ally as a Service API."),(0,l.kt)("h3",{id:"upload---input"},"Upload - input"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Q: I have questions about the version support for each of these. For instance, which versions of Office are supported?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Office 365, Office 2016, LibreOffice 5.2, LibreOffice 5.4"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Q: What image file formats are supported?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Most image types whose mimetype starts with image/"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Q: Are there constraints on images: sizes, resolution?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Q: Are there any restrictions on HTML files? What about external references in the HTML files?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"External references will be resolved and included for the HTML accessibility check, but the files themselves will not be checked."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Q: Is there support for HTML archive formats?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Q: Is there any support for archive format: zip, tar?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No")))),(0,l.kt)("h3",{id:"upload---mechanics"},"Upload - mechanics"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Q: We\u2019re posting into an end-point protected with TLS 1.2 or higher, right?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Yes. We use standard AWS security practices (ELBSecurityPolicy-TLS-1-2-2017-01)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Q: Related to the archive question, are we posting the raw file, or is it organized in a multipart/form-data?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Raw Files are uploaded through a multipart upload. One file at a time."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Q: What\u2019s the maximum file size?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"There is a 50MB file size limit. We're gathering feedback on how large this limit should be to support our customers."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Q: Does the endpoint require a particular encoding?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"UTF-8 is recommended"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Q: Does the POST have to have an accurate Content-Length: header?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Yes"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Q: Do the authentication tokens expire?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Q: If we had N writers submitting to this API, would each have to have a separate authentication token?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Q: Can we submit compressed files? No If so, what compression does Ally support?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"None"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Q: For the 303/See Other response, if we mistakenly permitted two writers to submit the same file in some brief period, would that automatically be caught? How long is that window?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Yes")))),(0,l.kt)("h3",{id:"upload---output"},"Upload - output"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Q: I\u2019m especially surprised to see the (x0,y0,x1,y) notation for errors. Can you tell me more about that?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"These are coordinates for areas in the document that contain some accessibility issue. They are coordinates that correspond to our PDF preview version."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Q: The output meta data contains \u201cisVersioned\u201d. Is there a standard way to present versions of documents when we post them?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No, see next answer."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Q: The meta data contains a \u201cname\u201d, \u201cdescription\u201d and other parameters. But these are not reflections of arguments in the initial POST. Is this just an indication that there\u2019s a richer set of arguments for the submission phase?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"These parameters are artifacts from our LMS API. They will be removed shortly as they carry no function in a standalone function.")))))}c.isMDXComponent=!0}}]);