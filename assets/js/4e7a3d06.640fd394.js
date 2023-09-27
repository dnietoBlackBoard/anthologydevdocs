"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[7005],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=i,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(4137));const a={title:"REST Integrations and Other Integrations",id:"rest-integrations-and-other-integrations",categories:"Learn REST",published:"2023-09-26",edited:"2023-09-27",author:"Mark Kauffman"},o=void 0,s={unversionedId:"rest-apis/learn/working-with-learn-apis/rest-integrations-and-other-integrations",id:"rest-apis/learn/working-with-learn-apis/rest-integrations-and-other-integrations",title:"REST Integrations and Other Integrations",description:"Introduction",source:"@site/docs/rest-apis/learn/working-with-learn-apis/rest-integrations-and-other-integrations.md",sourceDirName:"rest-apis/learn/working-with-learn-apis",slug:"/rest-apis/learn/working-with-learn-apis/rest-integrations-and-other-integrations",permalink:"/docs/rest-apis/learn/working-with-learn-apis/rest-integrations-and-other-integrations",draft:!1,tags:[],version:"current",frontMatter:{title:"REST Integrations and Other Integrations",id:"rest-integrations-and-other-integrations",categories:"Learn REST",published:"2023-09-26",edited:"2023-09-27",author:"Mark Kauffman"},sidebar:"documentationSidebar",previous:{title:"Pulling Gradebook Data and Assessment Grades",permalink:"/docs/rest-apis/learn/working-with-learn-apis/pulling-gradebook-data-and-assessment-grades"},next:{title:"Using the calendar APIs with Ultra",permalink:"/docs/rest-apis/learn/working-with-learn-apis/calendar-apis"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is the relationship between my RESTFul Application and other integration mechanisms?",id:"what-is-the-relationship-between-my-restful-application-and-other-integration-mechanisms",level:3},{value:"Summary",id:"summary",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},u=p("VersioningTracker"),d=p("AuthorBox"),g={toc:c},h="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(u,{frontMatter:a,mdxType:"VersioningTracker"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Let's say you have developed a RESTful API integration with Blackboard Learn. Now you have clients asking about the relationship between your REST Application and the several other mechanisms of integration with Blackboard Learn. This document provides the details."),(0,i.kt)("h3",{id:"what-is-the-relationship-between-my-restful-application-and-other-integration-mechanisms"},"What is the relationship between my RESTFul Application and other integration mechanisms?"),(0,i.kt)("p",null,"There are multiple forms of integration with Learn. No integration will know anything about the configuration settings of a different integration type, ever. For example if you have configured Data Integration>Student Information System Integrations>\u2019LIS20 Integration\u2019>Advanced Configuration>Courses>Field Mapping> Source Course Copy Key for course creation, a RESTful API integration will know nothing of that configuration. Any relationship between a RESTful integration and SIS Framework configuration (e.g. templating and or mapping and or actions post CRUD) is the responsibility of the developer of the RESTful integration.  The vendor that was using SIS will need to add code to their REST integration where you can configure the Source Course on their application server to replace what you had been configuring in Blackboard Learn, or find some other means of achieving the same."),(0,i.kt)("h3",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Any given integration type in Learn will never automatically know anything about the configuration settings of a different integration type, ever."),(0,i.kt)(d,{frontMatter:a,mdxType:"AuthorBox"}))}f.isMDXComponent=!0}}]);