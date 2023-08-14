"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[8690],{4137:(e,n,s)=>{s.d(n,{Zo:()=>c,kt:()=>u});var t=s(7294);function b(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function a(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function d(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?a(Object(s),!0).forEach((function(n){b(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function r(e,n){if(null==e)return{};var s,t,b=function(e,n){if(null==e)return{};var s,t,b={},a=Object.keys(e);for(t=0;t<a.length;t++)s=a[t],n.indexOf(s)>=0||(b[s]=e[s]);return b}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)s=a[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(b[s]=e[s])}return b}var i=t.createContext({}),o=function(e){var n=t.useContext(i),s=n;return e&&(s="function"==typeof e?e(n):d(d({},n),e)),s},c=function(e){var n=o(e.components);return t.createElement(i.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},l=t.forwardRef((function(e,n){var s=e.components,b=e.mdxType,a=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=o(s),l=b,u=p["".concat(i,".").concat(l)]||p[l]||m[l]||a;return s?t.createElement(u,d(d({ref:n},c),{},{components:s})):t.createElement(u,d({ref:n},c))}));function u(e,n){var s=arguments,b=n&&n.mdxType;if("string"==typeof e||b){var a=s.length,d=new Array(a);d[0]=l;var r={};for(var i in n)hasOwnProperty.call(n,i)&&(r[i]=n[i]);r.originalType=e,r[p]="string"==typeof e?e:b,d[1]=r;for(var o=2;o<a;o++)d[o]=s[o];return t.createElement.apply(null,d)}return t.createElement.apply(null,s)}l.displayName="MDXCreateElement"},2343:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>f,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var t=s(7462),b=(s(7294),s(4137));const a={layout:"post",title:"Assessment Events",categories:"Standards",id:"caliper-events-assesments",author:"Scott Hurrey"},d=void 0,r={unversionedId:"standards/caliper/events/caliper-events-assesments",id:"standards/caliper/events/caliper-events-assesments",title:"Assessment Events",description:"Learn's Caliper Analytics stream has two event types dedicated to assessments:",source:"@site/docs/standards/caliper/events/assessment-events.md",sourceDirName:"standards/caliper/events",slug:"/standards/caliper/events/caliper-events-assesments",permalink:"/docs/standards/caliper/events/caliper-events-assesments",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Assessment Events",categories:"Standards",id:"caliper-events-assesments",author:"Scott Hurrey"},sidebar:"documentationSidebar",previous:{title:"Learn Caliper Event Guide",permalink:"/docs/standards/caliper/events/caliper-events-guide"},next:{title:"Assignable Events",permalink:"/docs/standards/caliper/events/caliper-events-assignables"}},i={},o=[{value:"AssessmentEvent",id:"assessmentevent",level:3},{value:"AssessmentItemEvent",id:"assessmentitemevent",level:3},{value:"Sample Payloads",id:"sample-payloads",level:3},{value:"1. AssessmentEvent",id:"1-assessmentevent",level:3},{value:"AssessmentItemEvent",id:"assessmentitemevent-1",level:3}],c=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,b.kt)("div",n)},p=c("VersioningTracker"),m=c("AuthorBox"),l={toc:o},u="wrapper";function f(e){let{components:n,...s}=e;return(0,b.kt)(u,(0,t.Z)({},l,s,{components:n,mdxType:"MDXLayout"}),(0,b.kt)(p,{frontMatter:a,mdxType:"VersioningTracker"}),(0,b.kt)("h1",{id:"assessment-events"},"Assessment Events"),(0,b.kt)("p",null,"Learn's Caliper Analytics stream has two event types dedicated to assessments:"),(0,b.kt)("ul",null,(0,b.kt)("li",{parentName:"ul"},(0,b.kt)("strong",{parentName:"li"},"AssessmentEvent")),(0,b.kt)("li",{parentName:"ul"},(0,b.kt)("strong",{parentName:"li"},"AssessmentItemEvent"))),(0,b.kt)("p",null,"These events work hand-in-hand. An AssessmentEvent is fired whenever a student\nstarts or submits a test, and the AssessmentItemEvent is fired whenever a\nstudent starts or submits a question on an assessment."),(0,b.kt)("p",null,"Here is some of the key data that is associated with these events:"),(0,b.kt)("h3",{id:"assessmentevent"},"AssessmentEvent"),(0,b.kt)("p",null,(0,b.kt)("strong",{parentName:"p"},"group.courseNumber")," - the course batch_uid (i.e. the ID sent in by LIS or Data Integration)"),(0,b.kt)("p",null,(0,b.kt)("strong",{parentName:"p"},"object.@id")," - \u2026/assessments/id - the primary key for the assessment ID"),(0,b.kt)("p",null,(0,b.kt)("strong",{parentName:"p"},"action")," - Started, Completed"),(0,b.kt)("h3",{id:"assessmentitemevent"},"AssessmentItemEvent"),(0,b.kt)("p",null,(0,b.kt)("strong",{parentName:"p"},"group.courseNumber")," - the course batch_uid (i.e. the ID sent in by LIS or Data Integration)"),(0,b.kt)("p",null,(0,b.kt)("strong",{parentName:"p"},"object.@id")," - \u2026/questions/id - the primary key for the question ID"),(0,b.kt)("p",null,(0,b.kt)("strong",{parentName:"p"},"object.ispartOf.@id")," .../assessments/id - the primary key for the assessment this questions is a part of"),(0,b.kt)("p",null,(0,b.kt)("strong",{parentName:"p"},"action")," - Started, Submitted"),(0,b.kt)("h3",{id:"sample-payloads"},"Sample Payloads"),(0,b.kt)("ol",null,(0,b.kt)("li",{parentName:"ol"},"AssessmentEvent"),(0,b.kt)("li",{parentName:"ol"},"AssessmentItemEvent")),(0,b.kt)("h3",{id:"1-assessmentevent"},"1. AssessmentEvent"),(0,b.kt)("pre",null,(0,b.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sensor": "54b54b42-dd02-42f8-88ed-07bd719bfb7c",\n  "sendTime": "2021-01-05T14:49:40.609Z",\n  "dataVersion": "http://purl.imsglobal.org/ctx/caliper/v1p1",\n  "data": [\n    {\n      "@context": "http://purl.imsglobal.org/ctx/caliper/v1p1",\n      "type": "AssessmentEvent",\n      "id": "54b54b42-dd02-42f8-88ed-07bd719bfb7c",\n      "actor": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/users/a361d45a65564777b98460834687183f",\n        "type": "Person",\n        "extensions": {\n          "bb:user.id": "_12345_1",\n          "bb:user.externalId": "54b54b42-dd02-42f8-88ed-07bd719bfb7c"\n        }\n      },\n      "action": "Started",\n      "object": {\n        "dateToSubmit": "2021-01-12T06:59:00.000Z",\n        "maxAttempts": 0,\n        "maxSubmits": 0,\n        "maxScore": 150,\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/assessments/_12345_1",\n        "type": "Assessment",\n        "name": "My Test",\n        "extensions": {\n          "bb:assessment.categoryId": "_12345_1",\n          "bb:assessment.categoryName": "Assignment",\n          "bb:contentId": "_12345_1",\n          "bb:assessment.gradeableItemId": "_12345_1",\n          "bb:assessment.catUserDefined": "false"\n        },\n        "creators": [],\n        "learningObjectives": [],\n        "keywords": [],\n        "items": []\n      },\n      "generated": {\n        "startedAtTime": "2021-01-05T14:49:36.451Z",\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/gradableItems/_12345_1/attempts/_12345_1",\n        "type": "Attempt",\n        "assignable": {\n          "dateToSubmit": "2021-01-12T06:59:00.000Z",\n          "maxAttempts": 0,\n          "maxSubmits": 0,\n          "maxScore": 150,\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/assessments/_12345_1",\n          "type": "Assessment",\n          "name": "My Test",\n          "extensions": {\n            "bb:assessment.categoryId": "_12345_1",\n            "bb:assessment.categoryName": "Assignment",\n            "bb:contentId": "_12345_1",\n            "bb:assessment.gradeableItemId": "_12345_1",\n            "bb:assessment.catUserDefined": "false"\n          },\n          "creators": [],\n          "learningObjectives": [],\n          "keywords": [],\n          "items": []\n        },\n        "assignee": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/users/a361d45a65564777b98460834687183f",\n          "type": "Person",\n          "extensions": {\n            "bb:user.id": "_12345_1",\n            "bb:user.externalId": "54b54b42-dd02-42f8-88ed-07bd719bfb7c"\n          }\n        },\n        "count": 1\n      },\n      "eventTime": "2021-01-05T14:49:36.451Z",\n      "edApp": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/applications/learn",\n        "type": "SoftwareApplication"\n      },\n      "group": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/courses/34f0705416864ca09a34f22f73446686",\n        "type": "CourseOffering",\n        "extensions": {\n          "bb:course.id": "_12345_1"\n        },\n        "members": [],\n        "courseNumber": "BIO-101"\n      },\n      "membership": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/courses/34f0705416864ca09a34f22f73446686/members/a361d45a65564777b98460834687183f",\n        "type": "Membership",\n        "extensions": {\n          "bb:course.id": "_12345_1",\n          "bb:course.externalId": "BIO-101",\n          "bb:user.id": "_12345_1",\n          "bb:user.externalId": "54b54b42-dd02-42f8-88ed-07bd719bfb7c"\n        },\n        "member": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/users/a361d45a65564777b98460834687183f",\n          "type": "Person",\n          "extensions": {\n            "bb:user.id": "_12345_1",\n            "bb:user.externalId": "54b54b42-dd02-42f8-88ed-07bd719bfb7c"\n          }\n        },\n        "organization": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/courses/34f0705416864ca09a34f22f73446686",\n          "type": "CourseOffering",\n          "extensions": {\n            "bb:course.id": "_12345_1"\n          },\n          "members": [],\n          "courseNumber": "BIO-101"\n        },\n        "roles": ["Learner"],\n        "status": "Active"\n      },\n      "federatedSession": {\n        "startedAtTime": "2021-01-05T14:49:36.451Z",\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/sessions/94DD6EFB1B20EBD3B62889A38C7BF590",\n        "type": "LtiSession",\n        "name": "94DD6EFB1B20EBD3B62889A38C7BF590",\n        "dateCreated": "2021-01-05T14:49:36.451Z",\n        "user": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/users/a361d45a65564777b98460834687183f",\n          "type": "Person",\n          "extensions": {\n            "bb:user.id": "_12345_1",\n            "bb:user.externalId": "54b54b42-dd02-42f8-88ed-07bd719bfb7c"\n          }\n        }\n      },\n      "extensions": {}\n    }\n  ]\n}\n')),(0,b.kt)("h3",{id:"assessmentitemevent-1"},"AssessmentItemEvent"),(0,b.kt)("pre",null,(0,b.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sensor": "54b54b42-dd02-42f8-88ed-07bd719bfb7c",\n  "sendTime": "2021-01-05T14:50:26.769Z",\n  "dataVersion": "http://purl.imsglobal.org/ctx/caliper/v1p1",\n  "data": [\n    {\n      "@context": "http://purl.imsglobal.org/ctx/caliper/v1p1",\n      "type": "AssessmentItemEvent",\n      "id": "54b54b42-dd02-42f8-88ed-07bd719bfb7c",\n      "actor": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/users/1a26d8c5b4d44f1db491db1f24407715",\n        "type": "Person",\n        "extensions": {\n          "bb:user.id": "_12345_1",\n          "bb:user.externalId": "54b54b42-dd02-42f8-88ed-07bd719bfb7c"\n        }\n      },\n      "action": "Started",\n      "object": {\n        "maxAttempts": 0,\n        "maxSubmits": 0,\n        "maxScore": 0,\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/assessments/_12345_1/questions/_12345_1",\n        "type": "AssessmentItem",\n        "creators": [],\n        "learningObjectives": [],\n        "keywords": [],\n        "isPartOf": {\n          "dateToSubmit": "2020-12-23T07:59:00.000Z",\n          "maxAttempts": 1,\n          "maxSubmits": 0,\n          "maxScore": 300,\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7cc/assessments/_12345_1",\n          "type": "Assessment",\n          "name": "My Test",\n          "extensions": {\n            "bb:assessment.categoryId": "_12345_1",\n            "bb:assessment.categoryName": "Test",\n            "bb:assessment.catUserDefined": "false",\n            "bb:assessment.gradeableItemId": "_12345_1"\n          },\n          "creators": [],\n          "learningObjectives": [],\n          "keywords": [],\n          "items": []\n        }\n      },\n      "generated": {\n        "startedAtTime": "2021-01-04T19:13:19.774Z",\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/assessments/_12345_1/questions/_12345_1/attempts/_12345_1",\n        "type": "Attempt",\n        "assignable": {\n          "maxAttempts": 0,\n          "maxSubmits": 0,\n          "maxScore": 0,\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/assessments/_12345_1/questions/_12345_1",\n          "type": "AssessmentItem",\n          "creators": [],\n          "learningObjectives": [],\n          "keywords": [],\n          "isPartOf": {\n            "dateToSubmit": "2020-12-23T07:59:00.000Z",\n            "maxAttempts": 1,\n            "maxSubmits": 0,\n            "maxScore": 300,\n            "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/assessments/_12345_1",\n            "type": "Assessment",\n            "name": "My Test",\n            "extensions": {\n              "bb:assessment.categoryId": "_12345_1",\n              "bb:assessment.categoryName": "Test",\n              "bb:assessment.catUserDefined": "false",\n              "bb:assessment.gradeableItemId": "_12345_1"\n            },\n            "creators": [],\n            "learningObjectives": [],\n            "keywords": [],\n            "items": []\n          }\n        },\n        "assignee": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/users/1a26d8c5b4d44f1db491db1f24407715",\n          "type": "Person",\n          "extensions": {\n            "bb:user.id": "_12345_1",\n            "bb:user.externalId": "54b54b42-dd02-42f8-88ed-07bd719bfb7c"\n          }\n        },\n        "count": 1\n      },\n      "eventTime": "2021-01-04T19:13:19.774Z",\n      "edApp": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/applications/learn",\n        "type": "SoftwareApplication"\n      },\n      "group": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/courses/35983609b6084ef88407f98a2263e574",\n        "type": "CourseOffering",\n        "extensions": {\n          "bb:course.id": "_12345_1"\n        },\n        "members": [],\n        "courseNumber": "BIO-101"\n      },\n      "membership": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/courses/35983609b6084ef88407f98a2263e574/members/1a26d8c5b4d44f1db491db1f24407715",\n        "type": "Membership",\n        "extensions": {\n          "bb:course.id": "_12345_1",\n          "bb:course.externalId": "BIO-101",\n          "bb:user.id": "_12345_1",\n          "bb:user.externalId": "54b54b42-dd02-42f8-88ed-07bd719bfb7c"\n        },\n        "member": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/users/1a26d8c5b4d44f1db491db1f24407715",\n          "type": "Person",\n          "extensions": {\n            "bb:user.id": "_12345_1",\n            "bb:user.externalId": "54b54b42-dd02-42f8-88ed-07bd719bfb7c"\n          }\n        },\n        "organization": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/courses/35983609b6084ef88407f98a2263e574",\n          "type": "CourseOffering",\n          "extensions": {\n            "bb:course.id": "_12345_1"\n          },\n          "members": [],\n          "courseNumber": "BIO-101"\n        },\n        "roles": ["Learner"],\n        "status": "Active"\n      },\n      "federatedSession": {\n        "startedAtTime": "2021-01-04T19:13:19.774Z",\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/sessions/DCC5DE08316F7BB7F5355929DD49AE28",\n        "type": "LtiSession",\n        "name": "DCC5DE08316F7BB7F5355929DD49AE28",\n        "dateCreated": "2021-01-04T19:13:19.774Z",\n        "user": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/users/1a26d8c5b4d44f1db491db1f24407715",\n          "type": "Person",\n          "extensions": {\n            "bb:user.id": "_12345_1",\n            "bb:user.externalId": "54b54b42-dd02-42f8-88ed-07bd719bfb7c"\n          }\n        }\n      },\n      "extensions": {}\n    },\n    {\n      "@context": "http://purl.imsglobal.org/ctx/caliper/v1p1",\n      "type": "AssessmentItemEvent",\n      "id": "54b54b42-dd02-42f8-88ed-07bd719bfb7c",\n      "actor": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/users/1a26d8c5b4d44f1db491db1f24407715",\n        "type": "Person",\n        "extensions": {\n          "bb:user.id": "_12345_1",\n          "bb:user.externalId": "54b54b42-dd02-42f8-88ed-07bd719bfb7c"\n        }\n      },\n      "action": "Completed",\n      "object": {\n        "maxAttempts": 0,\n        "maxSubmits": 0,\n        "maxScore": 0,\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/assessments/_9058464_1/questions/_9058487_1",\n        "type": "AssessmentItem",\n        "creators": [],\n        "learningObjectives": [],\n        "keywords": [],\n        "isPartOf": {\n          "dateToSubmit": "2020-12-23T07:59:00.000Z",\n          "maxAttempts": 1,\n          "maxSubmits": 0,\n          "maxScore": 300,\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/assessments/_9058464_1",\n          "type": "Assessment",\n          "name": "My Test",\n          "extensions": {\n            "bb:assessment.categoryId": "_12345_1",\n            "bb:assessment.categoryName": "Test",\n            "bb:assessment.catUserDefined": "false",\n            "bb:assessment.gradeableItemId": "_12345_1"\n          },\n          "creators": [],\n          "learningObjectives": [],\n          "keywords": [],\n          "items": []\n        }\n      },\n      "generated": {\n        "startedAtTime": "2021-01-04T19:13:19.774Z",\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/assessments/_12345_1/questions/_12345_1/attempts/_12345_1/response",\n        "type": "MultipleResponseResponse",\n        "extensions": {\n          "bb:questionType": "MultipleAnswer"\n        },\n        "attempt": {\n          "startedAtTime": "2021-01-04T19:13:19.774Z",\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/assessments/_12345_1/questions/_12345_1/attempts/_12345_1",\n          "type": "Attempt",\n          "assignable": {\n            "maxAttempts": 0,\n            "maxSubmits": 0,\n            "maxScore": 0,\n            "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/assessments/_12345_1/questions/_12345_1",\n            "type": "AssessmentItem",\n            "creators": [],\n            "learningObjectives": [],\n            "keywords": [],\n            "isPartOf": {\n              "dateToSubmit": "2020-12-23T07:59:00.000Z",\n              "maxAttempts": 1,\n              "maxSubmits": 0,\n              "maxScore": 300,\n              "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/assessments/_12345_1",\n              "type": "Assessment",\n              "name": "My Test",\n              "extensions": {\n                "bb:assessment.categoryId": "_12345_1",\n                "bb:assessment.categoryName": "Test",\n                "bb:assessment.catUserDefined": "false",\n                "bb:assessment.gradeableItemId": "_12345_1"\n              },\n              "creators": [],\n              "learningObjectives": [],\n              "keywords": [],\n              "items": []\n            }\n          },\n          "assignee": {\n            "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/users/1a26d8c5b4d44f1db491db1f24407715",\n            "type": "Person",\n            "extensions": {\n              "bb:user.id": "_12345_1",\n              "bb:user.externalId": "54b54b42-dd02-42f8-88ed-07bd719bfb7c"\n            }\n          },\n          "count": 1\n        },\n        "values": []\n      },\n      "eventTime": "2021-01-04T19:13:19.774Z",\n      "edApp": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/applications/learn",\n        "type": "SoftwareApplication"\n      },\n      "group": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/courses/35983609b6084ef88407f98a2263e574",\n        "type": "CourseOffering",\n        "extensions": {\n          "bb:course.id": "_12345_1"\n        },\n        "members": [],\n        "courseNumber": "BIO-101"\n      },\n      "membership": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/courses/35983609b6084ef88407f98a2263e574/members/1a26d8c5b4d44f1db491db1f24407715",\n        "type": "Membership",\n        "extensions": {\n          "bb:course.id": "_12345_1",\n          "bb:course.externalId": "BIO-101",\n          "bb:user.id": "_12345_1",\n          "bb:user.externalId": "54b54b42-dd02-42f8-88ed-07bd719bfb7c"\n        },\n        "member": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/users/1a26d8c5b4d44f1db491db1f24407715",\n          "type": "Person",\n          "extensions": {\n            "bb:user.id": "_12345_1",\n            "bb:user.externalId": "54b54b42-dd02-42f8-88ed-07bd719bfb7c"\n          }\n        },\n        "organization": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/courses/35983609b6084ef88407f98a2263e574",\n          "type": "CourseOffering",\n          "extensions": {\n            "bb:course.id": "_12345_1"\n          },\n          "members": [],\n          "courseNumber": "BIO-101"\n        },\n        "roles": ["Learner"],\n        "status": "Active"\n      },\n      "federatedSession": {\n        "startedAtTime": "2021-01-04T19:13:19.774Z",\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/sessions/DCC5DE08316F7BB7F5355929DD49AE28",\n        "type": "LtiSession",\n        "name": "DCC5DE08316F7BB7F5355929DD49AE28",\n        "dateCreated": "2021-01-04T19:13:19.774Z",\n        "user": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/users/1a26d8c5b4d44f1db491db1f24407715",\n          "type": "Person",\n          "extensions": {\n            "bb:user.id": "_12345_1",\n            "bb:user.externalId": "54b54b42-dd02-42f8-88ed-07bd719bfb7c"\n          }\n        }\n      },\n      "extensions": {}\n    }\n  ]\n}\n')),(0,b.kt)(m,{frontMatter:a,mdxType:"AuthorBox"}))}f.isMDXComponent=!0}}]);