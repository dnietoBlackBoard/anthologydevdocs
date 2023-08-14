"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[4726],{4137:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>u});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),c=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=c(t.components);return n.createElement(d.Provider,{value:e},t.children)},p="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,k=s(t,["components","mdxType","originalType","parentName"]),p=c(a),m=r,u=p["".concat(d,".").concat(m)]||p[m]||o[m]||l;return a?n.createElement(u,i(i({ref:e},k),{},{components:a})):n.createElement(u,i({ref:e},k))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=t,s[p]="string"==typeof t?t:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9651:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(4137));const l={layout:"post",title:"Feedback parameter definitions",id:"rest_apis-ally-api_feedback_def",categories:"Ally",author:"Scott Hurrey"},i=void 0,s={unversionedId:"rest-apis/ally/rest_apis-ally-api_feedback_def",id:"rest-apis/ally/rest_apis-ally-api_feedback_def",title:"Feedback parameter definitions",description:"Here are the feedback parameters returned when the feedback endpoint is called. The full and meta columns defines which fields are included based on the feedback query parameter. If it is set to true, you get the full response, and the full column will have a check. If it is set to false or omitted, you receive just the meta data, and Meta column will have an check",source:"@site/docs/rest-apis/ally/feedback-definitions.md",sourceDirName:"rest-apis/ally",slug:"/rest-apis/ally/rest_apis-ally-api_feedback_def",permalink:"/docs/rest-apis/ally/rest_apis-ally-api_feedback_def",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Feedback parameter definitions",id:"rest_apis-ally-api_feedback_def",categories:"Ally",author:"Scott Hurrey"},sidebar:"documentationSidebar",previous:{title:"Check the processing status of a file",permalink:"/docs/rest-apis/ally/rest_apis-ally-check_status"},next:{title:"Retrieve the feedback for multiple files",permalink:"/docs/rest-apis/ally/rest_apis-ally-getting_batched_feedback"}},d={},c=[],k=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},p=k("VersioningTracker"),o=k("AuthorBox"),m={toc:c},u="wrapper";function g(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(p,{frontMatter:l,mdxType:"VersioningTracker"}),(0,r.kt)("h1",{id:"feedback-parameter-definitions"},"Feedback parameter definitions"),(0,r.kt)("p",null,"Here are the feedback parameters returned when the feedback endpoint is called. The full and meta columns defines which fields are included based on the feedback query parameter. If it is set to true, you get the full response, and the full column will have a ",(0,r.kt)("i",{class:"material-icons"},"check"),". If it is set to false or omitted, you receive just the meta data, and Meta column will have an ",(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Meta"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hash"),(0,r.kt)("td",{parentName:"tr",align:null},"the content hash used to reference the file by Ally as a Service"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback"),(0,r.kt)("td",{parentName:"tr",align:null},"the feedback from processing the document, or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.score"),(0,r.kt)("td",{parentName:"tr",align:null},"score between 0 (low) and 1 (high) indicating the documents accessibility"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.visibility"),(0,r.kt)("td",{parentName:"tr",align:null},"visibility is the overall accessibility of your document: ",(0,r.kt)("em",{parentName:"td"},"low"),", ",(0,r.kt)("em",{parentName:"td"},"medium"),", ",(0,r.kt)("em",{parentName:"td"},"high")," or ",(0,r.kt)("em",{parentName:"td"},"perfect")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report"),(0,r.kt)("td",{parentName:"tr",align:null},"the contents of the feedback report"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results"),(0,r.kt)("td",{parentName:"tr",align:null},"the results of the feedback report"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.Scanned"),(0,r.kt)("td",{parentName:"tr",align:null},"was the document scanned?"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.Scanned.score"),(0,r.kt)("td",{parentName:"tr",align:null},"0 = scanned, 1 = not scanned"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.Tagged"),(0,r.kt)("td",{parentName:"tr",align:null},"is the document tagged?"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.Tagged.score"),(0,r.kt)("td",{parentName:"tr",align:null},"0 = untagged, 1 = tagged"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.Ocred"),(0,r.kt)("td",{parentName:"tr",align:null},"was the document ",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Optical_character_recognition"},"OCR"),"ed?"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.Ocred.score"),(0,r.kt)("td",{parentName:"tr",align:null},"0 = no, 1 = yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.AlternativeText"),(0,r.kt)("td",{parentName:"tr",align:null},"report on alternative text for images"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.AlternativeText.snippets"),(0,r.kt)("td",{parentName:"tr",align:null},"an array containing locations of detected issues"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.AlternativeText.snippets","[ ]",".page"),(0,r.kt)("td",{parentName:"tr",align:null},"the page number containing the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.AlternativeText.snippets","[ ]",".y0"),(0,r.kt)("td",{parentName:"tr",align:null},"the starting y axis location on the page of the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.AlternativeText.snippets","[ ]",".x0"),(0,r.kt)("td",{parentName:"tr",align:null},"the starting x axis location on the page of the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.AlternativeText.snippets","[ ]",".y1"),(0,r.kt)("td",{parentName:"tr",align:null},"the ending y axis location on the page of the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.AlternativeText.snippets","[ ]",".x1"),(0,r.kt)("td",{parentName:"tr",align:null},"the ending x axis location on the page of the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.AlternativeText.score"),(0,r.kt)("td",{parentName:"tr",align:null},"alternative text score between 0 (low) and 1 (high)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.Contrast"),(0,r.kt)("td",{parentName:"tr",align:null},"report on color contrast"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.Contrast.snippets"),(0,r.kt)("td",{parentName:"tr",align:null},"an array containing locations of detected issues"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.Contrast.snippets","[ ]",".page"),(0,r.kt)("td",{parentName:"tr",align:null},"the page number containing the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.Contrast.snippets","[ ]",".y0"),(0,r.kt)("td",{parentName:"tr",align:null},"the starting y axis location on the page of the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.Contrast.snippets","[ ]",".x0"),(0,r.kt)("td",{parentName:"tr",align:null},"the starting x axis location on the page of the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.Contrast.snippets","[ ]",".y1"),(0,r.kt)("td",{parentName:"tr",align:null},"the ending y axis location on the page of the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.Contrast.snippets","[ ]",".x1"),(0,r.kt)("td",{parentName:"tr",align:null},"the ending x axis location on the page of the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.Contrast.score"),(0,r.kt)("td",{parentName:"tr",align:null},"contrast score between 0 (low) and 1 (high)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsSequential"),(0,r.kt)("td",{parentName:"tr",align:null},"report on sequential headings"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsSequential.snippets"),(0,r.kt)("td",{parentName:"tr",align:null},"an array containing locations of detected issues"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsSequential.snippets","[ ]",".page"),(0,r.kt)("td",{parentName:"tr",align:null},"the page number containing the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsSequential.snippets","[ ]",".y0"),(0,r.kt)("td",{parentName:"tr",align:null},"the starting y axis location on the page of the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsSequential.snippets","[ ]",".x0"),(0,r.kt)("td",{parentName:"tr",align:null},"the starting x axis location on the page of the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsSequential.snippets","[ ]",".y1"),(0,r.kt)("td",{parentName:"tr",align:null},"the ending y axis location on the page of the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsSequential.snippets","[ ]",".x1"),(0,r.kt)("td",{parentName:"tr",align:null},"the ending x axis location on the page of the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsSequential.score"),(0,r.kt)("td",{parentName:"tr",align:null},"sequential headings score between 0 (low) and 1 (high)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsHigherLevel.snippets"),(0,r.kt)("td",{parentName:"tr",align:null},"report on PDF heading levels"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsHigherLevel.score"),(0,r.kt)("td",{parentName:"tr",align:null},"higher-level headings score between 0 (low) and 1 (high)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.Title"),(0,r.kt)("td",{parentName:"tr",align:null},"does the document have a title?"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.Title.score"),(0,r.kt)("td",{parentName:"tr",align:null},"0 = No, 1 = Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.TableHeaders"),(0,r.kt)("td",{parentName:"tr",align:null},"report on the existence of headers in tables"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.TableHeaders.snippets"),(0,r.kt)("td",{parentName:"tr",align:null},"an array containing locations of detected issues"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.TableHeaders.snippets","[ ]",".page"),(0,r.kt)("td",{parentName:"tr",align:null},"the page number containing the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.TableHeaders.snippets","[ ]",".y0"),(0,r.kt)("td",{parentName:"tr",align:null},"the starting y axis location on the page of the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.TableHeaders.snippets","[ ]",".x0"),(0,r.kt)("td",{parentName:"tr",align:null},"the starting x axis location on the page of the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.TableHeaders.snippets","[ ]",".y1"),(0,r.kt)("td",{parentName:"tr",align:null},"the ending y axis location on the page of the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.TableHeaders.snippets","[ ]",".x1"),(0,r.kt)("td",{parentName:"tr",align:null},"the ending x axis location on the page of the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.TableHeaders.score"),(0,r.kt)("td",{parentName:"tr",align:null},"table headers score between 0 (low) and 1 (high)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.LanguagePresence"),(0,r.kt)("td",{parentName:"tr",align:null},"does the document contain language information"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.LanguagePresence.score"),(0,r.kt)("td",{parentName:"tr",align:null},"language presence score: 0 = No, 1 = Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsPresence"),(0,r.kt)("td",{parentName:"tr",align:null},"does the document contain headings?"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsPresence.score"),(0,r.kt)("td",{parentName:"tr",align:null},"headings present score, 0 = No, 1 = Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.LanguageCorrect"),(0,r.kt)("td",{parentName:"tr",align:null},"does the document language declaration match the language used?"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.LanguageCorrect.detectedLanguage"),(0,r.kt)("td",{parentName:"tr",align:null},"language code declared, i.e. 'en' for English"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.LanguageCorrect.score"),(0,r.kt)("td",{parentName:"tr",align:null},"language correct score, 0 = No, 1 = Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsStartAtOne"),(0,r.kt)("td",{parentName:"tr",align:null},"report on headings and whether they start at one"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsStartAtOne.snippets"),(0,r.kt)("td",{parentName:"tr",align:null},"an array containing locations of detected issues"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsStartAtOne.snippets","[ ]",".page"),(0,r.kt)("td",{parentName:"tr",align:null},"the page number containing the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsStartAtOne.snippets","[ ]",".y0"),(0,r.kt)("td",{parentName:"tr",align:null},"the starting y axis location on the page of the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsStartAtOne.snippets","[ ]",".x0"),(0,r.kt)("td",{parentName:"tr",align:null},"the starting x axis location on the page of the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsStartAtOne.snippets","[ ]",".y1"),(0,r.kt)("td",{parentName:"tr",align:null},"the ending y axis location on the page of the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsStartAtOne.snippets","[ ]",".x1"),(0,r.kt)("td",{parentName:"tr",align:null},"the ending x axis location on the page of the issue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsStartAtOne.score"),(0,r.kt)("td",{parentName:"tr",align:null},"score between 0 (low) and 1 (high)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.LibraryReference"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Deprecated")," Not used. This will always be null and will be removed in a future release"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.results.LibraryReference.score"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Deprecated")," Not used. This will always be null and will be removed in a future release"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.suggestions"),(0,r.kt)("td",{parentName:"tr",align:null},"the portion of the report that displays improvement suggestions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.suggestions.HeadingsSequential"),(0,r.kt)("td",{parentName:"tr",align:null},"the document's total score if all headings are made sequential"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.suggestions.Title"),(0,r.kt)("td",{parentName:"tr",align:null},"the document's total score if the title is added"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.suggestions.TableHeaders"),(0,r.kt)("td",{parentName:"tr",align:null},"the document's total score if all tables include headers"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.suggestions.HeadingsStartAtOne"),(0,r.kt)("td",{parentName:"tr",align:null},"the document's total score if all headings hierarchy starts at one"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.suggestions.AlternativeText"),(0,r.kt)("td",{parentName:"tr",align:null},"the document's total score if all images contain alternative text"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.suggestions.Contrast"),(0,r.kt)("td",{parentName:"tr",align:null},"the document's total score if all color contrast issues are corrected"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedback.report.suggestions.LibraryReference"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Deprecated")," Not used. This will always be null and will be removed in a future release"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"formats"),(0,r.kt)("td",{parentName:"tr",align:null},"not currently used, will always be null"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"document metadata"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata.name"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of the processed file"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata.decorative"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Deprecated")," Not used. This will always be null and will be removed in a future release"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata.description"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Deprecated")," Not used. This will always be null and will be removed in a future release"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata.fileType"),(0,r.kt)("td",{parentName:"tr",align:null},"the file type of the processed file"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata.mimeType"),(0,r.kt)("td",{parentName:"tr",align:null},"the mime type of the processed file"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata.isVersioned"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Deprecated")," Not used. This will always be null and will be removed in a future release"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata.isSeizureInducing"),(0,r.kt)("td",{parentName:"tr",align:null},"will the processed file cause seizures?"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata.libraryReference"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Deprecated")," Not used. This will always be null and will be removed in a future release"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"material-icons"},"check"))))),(0,r.kt)("p",null,"For more information about the Ally accessibility tests, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://help.blackboard.com/ally/Ally_for_LMS/Administrator/Institution_Report/Accessibility_Checklist"},"Accessibility Checklist")," page on help.blackboard.com."),(0,r.kt)(o,{frontMatter:l,mdxType:"AuthorBox"}))}g.isMDXComponent=!0}}]);