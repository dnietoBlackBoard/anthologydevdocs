"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[106],{4137:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,m=p["".concat(c,".").concat(u)]||p[u]||b[u]||s;return a?n.createElement(m,o(o({ref:t},i),{},{components:a})):n.createElement(m,o({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[p]="string"==typeof e?e:r,o[1]=d;for(var l=2;l<s;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9102:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var n=a(7462),r=(a(7294),a(4137));const s={layout:"post",title:"Calculated Grade Snapshot Events",categories:"Standards",id:"caliper-events-calculated_grade_snapshots",author:"Scott Hurrey"},o="Calculated Grade Snapshot Events",d={unversionedId:"Standards/Caliper/events/caliper-events-calculated_grade_snapshots",id:"Standards/Caliper/events/caliper-events-calculated_grade_snapshots",title:"Calculated Grade Snapshot Events",description:"Learn's Caliper Analytics stream emits a CalculatedGradeSnapshotEvent nightly for any grade that is recalculated.",source:"@site/docs/Standards/Caliper/events/calculated-grade-snapshot-events.md",sourceDirName:"Standards/Caliper/events",slug:"/Standards/Caliper/events/caliper-events-calculated_grade_snapshots",permalink:"/anthologydevdocs/docs/Standards/Caliper/events/caliper-events-calculated_grade_snapshots",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Calculated Grade Snapshot Events",categories:"Standards",id:"caliper-events-calculated_grade_snapshots",author:"Scott Hurrey"},sidebar:"documentationSidebar",previous:{title:"Blog Events",permalink:"/anthologydevdocs/docs/Standards/Caliper/events/caliper-events-blogs"},next:{title:"Content Events",permalink:"/anthologydevdocs/docs/Standards/Caliper/events/caliper-events-content_events"}},c={},l=[{value:"CalculatedGradeSnapshotEvent",id:"calculatedgradesnapshotevent",level:3},{value:"Sample Payload",id:"sample-payload",level:3}],i={toc:l},p="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"calculated-grade-snapshot-events"},"Calculated Grade Snapshot Events"),(0,r.kt)("p",null,"Learn's Caliper Analytics stream emits a CalculatedGradeSnapshotEvent nightly for any grade that is recalculated."),(0,r.kt)("p",null,"Here is some of the key data that is associated with these events:"),(0,r.kt)("h3",{id:"calculatedgradesnapshotevent"},"CalculatedGradeSnapshotEvent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"object.course.courseNumber")," - the course batch_uid (i.e. the ID sent in by LIS or Data Integration)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"object.itemId")," - the primary key for the calculated grade column"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"user.id")," - contains a unique ID of the user (the ID is known to Bb)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"object.score")," - score provided"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"object.isCourseGrade")," - true if final grade"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"user.extensions")," - contains a tag called ",(0,r.kt)("strong",{parentName:"p"},"bb:user.externalId")," with the batch_uid for the user"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"action")," - Graded"),(0,r.kt)("h3",{id:"sample-payload"},"Sample Payload"),(0,r.kt)("p",null,"Here is a sample of what a payload might look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sensor": "54b54b42-dd02-42f8-88ed-07bd719bfb7c",\n  "sendTime": "2021-01-05T08:20:38.600Z",\n  "dataVersion": "http://purl.imsglobal.org/ctx/caliper/v1p1",\n  "data": [\n    {\n      "@context": [\n        "http://caliper.blackboard.com/ctx/caliper/v1/Context",\n        "http://purl.imsglobal.org/ctx/caliper/v1p1"\n      ],\n      "type": "http://caliper.blackboard.com/caliper/v1/CalculatedGradeSnapshotEvent",\n      "id": "54b54b42-dd02-42f8-88ed-07bd719bfb7c",\n      "actor": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/applications/learn",\n        "type": "SoftwareApplication"\n      },\n      "action": "Graded",\n      "object": {\n        "@context": [\n          "http://caliper.blackboard.com/ctx/caliper/v1/Context",\n          "http://purl.imsglobal.org/ctx/caliper/v1p1"\n        ],\n        "type": "http://caliper.blackboard.com/caliper/v1/CalculatedGrade",\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/gradableItems/_12345_1/calculatedGrade/329189703",\n        "name": "",\n        "description": "",\n        "itemId": "_12345_1",\n        "scorePossible": 100,\n        "isCourseGrade": false,\n        "syncVersion": 329189703,\n        "user": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/users/b1ea2fccd95144a29e5e906034e4ddee",\n          "type": "Person",\n          "extensions": {\n            "bb:user.id": "_12345_1",\n            "bb:user.externalId": "54b54b42-dd02-42f8-88ed-07bd719bfb7c"\n          }\n        },\n        "course": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/courses/ab336626104044daab61e9a9d72ac8e2",\n          "type": "CourseOffering",\n          "extensions": {\n            "bb:course.id": "_12345_1"\n          },\n          "members": [],\n          "courseNumber": "BIO-101"\n        },\n        "extensions": {}\n      },\n      "eventTime": "2021-01-05T08:20:33.572Z",\n      "edApp": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/applications/learn",\n        "type": "SoftwareApplication"\n      },\n      "membership": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/courses/ab336626104044daab61e9a9d72ac8e2/members/b1ea2fccd95144a29e5e906034e4ddee",\n        "type": "Membership",\n        "extensions": {\n          "bb:course.id": "_12345_1",\n          "bb:course.externalId": "BIO-101",\n          "bb:user.id": "_12345_1",\n          "bb:user.externalId": "54b54b42-dd02-42f8-88ed-07bd719bfb7c"\n        },\n        "member": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/users/b1ea2fccd95144a29e5e906034e4ddee",\n          "type": "Person",\n          "extensions": {\n            "bb:user.id": "_12345_1",\n            "bb:user.externalId": "54b54b42-dd02-42f8-88ed-07bd719bfb7c"\n          }\n        },\n        "organization": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/courses/ab336626104044daab61e9a9d72ac8e2",\n          "type": "CourseOffering",\n          "extensions": {\n            "bb:course.id": "_12345_1"\n          },\n          "members": [],\n          "courseNumber": "BIO-101"\n        },\n        "roles": ["Learner"],\n        "status": "Active"\n      },\n      "extensions": {}\n    }\n  ]\n}\n')))}b.isMDXComponent=!0}}]);