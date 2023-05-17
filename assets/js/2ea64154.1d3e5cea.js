"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[701],{4137:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),h=r,g=u["".concat(s,".").concat(h)]||u[h]||p[h]||i;return t?a.createElement(g,l(l({ref:n},d),{},{components:t})):a.createElement(g,l({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=h;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7633:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(7462),r=(t(7294),t(4137));const i={layout:"post",title:"Creating content with REST-API",id:"rest_apis-learn-getting_started-creating_content_with_API",categories:"Learn REST API Content",toc:!0},l="Managing content with REST API in ULTRA (C.R.U.D)",o={unversionedId:"REST APIs/Learn/Working with Learn APIs/rest_apis-learn-getting_started-creating_content_with_API",id:"REST APIs/Learn/Working with Learn APIs/rest_apis-learn-getting_started-creating_content_with_API",title:"Creating content with REST-API",description:"This guide was created using Learn Release 3900.37.0-rel.2+bf4004cd",source:"@site/docs/REST APIs/Learn/Working with Learn APIs/creating-content.md",sourceDirName:"REST APIs/Learn/Working with Learn APIs",slug:"/REST APIs/Learn/Working with Learn APIs/rest_apis-learn-getting_started-creating_content_with_API",permalink:"/anthologydevdocs/docs/REST APIs/Learn/Working with Learn APIs/rest_apis-learn-getting_started-creating_content_with_API",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Creating content with REST-API",id:"rest_apis-learn-getting_started-creating_content_with_API",categories:"Learn REST API Content",toc:!0},sidebar:"documentationSidebar",previous:{title:"Working with Adaptive Release",permalink:"/anthologydevdocs/docs/REST APIs/Learn/Working with Learn APIs/rest_apis-learn-getting_started-adaptive_release"},next:{title:"Working with groups and the API",permalink:"/anthologydevdocs/docs/REST APIs/Learn/Working with Learn APIs/rest_apis-learn-getting_started-groups_and_api"}},s={},c=[{value:"Returning content",id:"returning-content",level:2},{value:"Creating and Updating content",id:"creating-and-updating-content",level:2},{value:"Deleting content",id:"deleting-content",level:3},{value:"Children content (C.R.U.D)",id:"children-content-crud",level:2},{value:"Returning children content",id:"returning-children-content",level:3},{value:"Creating Children content",id:"creating-children-content",level:2},{value:"Creating a folder within a folder",id:"creating-a-folder-within-a-folder",level:3},{value:"Creating content within a folder",id:"creating-content-within-a-folder",level:3},{value:"Updating children content",id:"updating-children-content",level:3},{value:"Deleting children content",id:"deleting-children-content",level:3},{value:"Some notes on Original",id:"some-notes-on-original",level:2}],d={toc:c},u="wrapper";function p(e){let{components:n,...i}=e;return(0,r.kt)(u,(0,a.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"managing-content-with-rest-api-in-ultra-crud"},"Managing content with REST API in ULTRA (C.R.U.D)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This guide was created using Learn Release 3900.37.0-rel.2+bf4004cd")),(0,r.kt)("p",null,"We do talk about original at the end, however, the main process is the same, we focus a bit more in Ultra since there is a bit of difference."),(0,r.kt)("h2",{id:"returning-content"},"Returning content"),(0,r.kt)("p",null,"Let's first get the available content available in the root of the course, this is how it looks like in the GUI:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Returning content with the api",src:t(894).Z,width:"1762",height:"850"})),(0,r.kt)("p",null,'The ROOT is where content such "This is a folder", "This is a test" and "This is another folder" lives. '),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET {{baseUrl}}/learn/api/public/v1/courses/:courseId/contents")),(0,r.kt)("p",null,"Returns when 200:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "results": [\n        {\n            "id": "_121047_1",\n            "parentId": "_120893_1",\n            "title": "This is a folder",\n            "body": "content body",\n            "description": "This is the folder description",\n            "created": "2022-01-21T18:03:37.076Z",\n            "modified": "2022-03-14T21:01:57.411Z",\n            "position": 0,\n            "hasChildren": true,\n            "launchInNewWindow": false,\n            "reviewable": false,\n            "availability": {\n                "available": "Yes",\n                "allowGuests": true,\n                "allowObservers": true,\n                "adaptiveRelease": {}\n            },\n            "contentHandler": {\n                "id": "resource/x-bb-folder"\n            },\n            "links": [\n                {\n                    "href": "/ultra/redirect?redirectType=nautilus&courseId=_13969_1&contentId=_121047_1&parentId=_120893_1",\n                    "rel": "alternate",\n                    "title": "User Interface View",\n                    "type": "text/html"\n                }\n            ]\n        },\n        {\n            "id": "_120905_1",\n            "parentId": "_120893_1",\n            "title": "This is a test",\n            "created": "2022-01-19T20:22:03.605Z",\n            "modified": "2022-03-14T20:56:15.194Z",\n            "position": 1,\n            "hasGradebookColumns": true,\n            "launchInNewWindow": true,\n            "reviewable": false,\n            "availability": {\n                "available": "Yes",\n                "allowGuests": true,\n                "allowObservers": true,\n                "adaptiveRelease": {}\n            },\n            "contentHandler": {\n                "id": "resource/x-bb-asmt-test-link",\n                "assessmentId": "_109303_1",\n                "gradeColumnId": "_89584_1",\n                "proctoring": {\n                    "secureBrowserRequiredToTake": false,\n                    "secureBrowserRequiredToReview": false,\n                    "webcamRequired": false\n                },\n                "originalityReportingTool": {\n                    "id": "safeAssign",\n                    "checkSubmission": false,\n                    "studentViewReports": false,\n                    "excludeSubmissionsFromDatabases": false\n                }\n            },\n            "links": [\n                {\n                    "href": "/ultra/redirect?redirectType=nautilus&courseId=_13969_1&contentId=_120905_1&parentId=_120893_1",\n                    "rel": "alternate",\n                    "title": "User Interface View",\n                    "type": "text/html"\n                }\n            ]\n        },\n        {\n            "id": "_120902_1",\n            "parentId": "_120893_1",\n            "title": "This is another folder",\n            "description": "This is the folder description",\n            "created": "2022-01-19T20:20:27.429Z",\n            "modified": "2022-03-14T21:02:03.619Z",\n            "position": 2,\n            "hasChildren": true,\n            "launchInNewWindow": true,\n            "reviewable": false,\n            "availability": {\n                "available": "Yes",\n                "allowGuests": true,\n                "allowObservers": true,\n                "adaptiveRelease": {}\n            },\n            "contentHandler": {\n                "id": "resource/x-bb-folder"\n            },\n            "links": [\n                {\n                    "href": "/ultra/redirect?redirectType=nautilus&courseId=_13969_1&contentId=_120902_1&parentId=_120893_1",\n                    "rel": "alternate",\n                    "title": "User Interface View",\n                    "type": "text/html"\n                }\n            ]\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"We can also get content of one specific content_id:\n",(0,r.kt)("img",{alt:"Returning content with the api",src:t(6682).Z,width:"1248",height:"308"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET {{baseUrl}}/learn/api/public/v1/courses/:courseId/contents/:contentId")),(0,r.kt)("p",null,"Returns: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "_121047_1",\n    "parentId": "_120893_1",\n    "title": "This is a folder",\n    "body": "content body",\n    "description": "This is the folder description",\n    "created": "2022-01-21T18:03:37.076Z",\n    "modified": "2022-03-14T21:01:57.411Z",\n    "position": 0,\n    "hasChildren": true,\n    "launchInNewWindow": false,\n    "reviewable": false,\n    "availability": {\n        "available": "Yes",\n        "allowGuests": true,\n        "allowObservers": true,\n        "adaptiveRelease": {}\n    },\n    "contentHandler": {\n        "id": "resource/x-bb-folder"\n    },\n    "links": [\n        {\n            "href": "/ultra/redirect?redirectType=nautilus&courseId=_13969_1&contentId=_121047_1&parentId=_120893_1",\n            "rel": "alternate",\n            "title": "User Interface View",\n            "type": "text/html"\n        }\n    ]\n}\n')),(0,r.kt)("h2",{id:"creating-and-updating-content"},"Creating and Updating content"),(0,r.kt)("p",null,"We can create new content or update existing content in the ROOT of the course using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"POST {{baseUrl}}/learn/api/public/v1/courses/:courseId/contents"),(0,r.kt)("li",{parentName:"ul"},"PATCH {{baseUrl}}/learn/api/public/v1/courses/:courseId/contents/:contentId")),(0,r.kt)("p",null,"And in the body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "This is a new folder for content created using REST API",\n    "body": "Body can be created using BBML, please review developers.blackboard.com for more information and docs.anthology.com https://docs.anthology.com/docs/REST%20APIs/Learn/Advanced/rest_apis-learn-advanced-bbml",\n    "description": "Content description",\n    "position": 1,\n    "launchInNewWindow": false,\n    "reviewable": true,\n    "availability": {\n        "available": "PartiallyVisible",\n        "allowGuests": true,\n        "allowObservers": true,\n        "adaptiveRelease": {\n            "start": "2003-06-12T02:12:48.505Z",\n            "end": "2011-01-04T06:08:38.119Z"\n        }\n    },\n    "contentHandler": {\n        "id": "resource/x-bb-folder"\n    }\n}\n')),(0,r.kt)("p",null,"It returns when 201:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "_126266_1",\n    "parentId": "_120893_1",\n    "title": "This is a new folder for content created using REST API",\n    "body": "Body can be created using BBML, please review developers.blackboard.com for more information and docs.anthology.com https://docs.anthology.com/docs/REST%20APIs/Learn/Advanced/rest_apis-learn-advanced-bbml",\n    "description": "Content description",\n    "created": "2022-03-14T21:31:32.552Z",\n    "modified": "2022-03-14T21:31:32.611Z",\n    "position": 1,\n    "hasChildren": true,\n    "launchInNewWindow": false,\n    "reviewable": false,\n    "availability": {\n        "available": "PartiallyVisible",\n        "allowGuests": true,\n        "allowObservers": true,\n        "adaptiveRelease": {\n            "start": "2003-06-12T02:12:48.505Z",\n            "end": "2011-01-04T06:08:38.119Z"\n        }\n    },\n    "contentHandler": {\n        "id": "resource/x-bb-folder"\n    },\n    "links": [\n        {\n            "href": "/ultra/redirect?redirectType=nautilus&courseId=_13969_1&contentId=_126266_1&parentId=_120893_1",\n            "rel": "alternate",\n            "title": "User Interface View",\n            "type": "text/html"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"And it looks in the gui, It has adaptive release, however, you can set it like this to avoid any type of adaptive release:"),(0,r.kt)("p",null,"You can Learn more about adaptive release ",(0,r.kt)("a",{parentName:"p",href:"/anthologydevdocs/docs/REST%20APIs/Learn/Working%20with%20Learn%20APIs/rest_apis-learn-getting_started-adaptive_release"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Creating content with the api",src:t(7497).Z,width:"1248",height:"581"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "This is a new folder for content created using REST API, without adaptive release",\n    "body": "Body can be created using BBML, please review developers.blackboard.com for more information and docs.anthology.com https://docs.anthology.com/docs/REST%20APIs/Learn/Advanced/rest_apis-learn-advanced-bbml",\n    "description": "Content description",\n    "position": 1,\n    "launchInNewWindow": false,\n    "reviewable": true,\n    "availability": {\n        "available": "Yes",\n        "allowGuests": true,\n        "allowObservers": true\n    },\n    "contentHandler": {\n        "id": "resource/x-bb-folder"\n    }\n}\n')),(0,r.kt)("p",null,"Looks like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Creating content with the api",src:t(6782).Z,width:"1709",height:"908"})),(0,r.kt)("h3",{id:"deleting-content"},"Deleting content"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DELETE {{baseUrl}}/learn/api/public/v1/courses/:courseId/contents/:contentId")),(0,r.kt)("p",null,"Returns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"204 - No content\n")),(0,r.kt)("h2",{id:"children-content-crud"},"Children content (C.R.U.D)"),(0,r.kt)("h3",{id:"returning-children-content"},"Returning children content"),(0,r.kt)("p",null,"Let's say I want to check the content within my folder:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Creating content with the api",src:t(5434).Z,width:"1248",height:"308"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET {{baseUrl}}/learn/api/public/v1/courses/:courseId/contents/:contentId/children")),(0,r.kt)("p",null,"Returns when 200:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "results": [\n        {\n            "id": "_121048_1",\n            "parentId": "_121047_1",\n            "title": "ut dolor ipsum labore",\n            "body": "CONTENT",\n            "created": "2022-01-21T18:08:56.086Z",\n            "modified": "2022-01-21T18:08:56.138Z",\n            "position": 0,\n            "hasChildren": true,\n            "launchInNewWindow": true,\n            "reviewable": false,\n            "availability": {\n                "available": "Yes",\n                "allowGuests": true,\n                "allowObservers": true,\n                "adaptiveRelease": {}\n            },\n            "contentHandler": {\n                "id": "resource/x-bb-folder",\n                "isBbPage": true\n            },\n            "links": [\n                {\n                    "href": "/ultra/redirect?redirectType=nautilus&courseId=_13969_1&contentId=_121048_1&parentId=_121047_1",\n                    "rel": "alternate",\n                    "title": "User Interface View",\n                    "type": "text/html"\n                }\n            ]\n        }\n    ]\n}\n')),(0,r.kt)("h2",{id:"creating-children-content"},"Creating Children content"),(0,r.kt)("p",null,"Please review the types of content you can create based on the contentHandler, please review: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.anthology.com/REST"},"https://docs.anthology.com/REST")," APIs/Learn/advanced/contenthandler-datatypes"),(0,r.kt)("h3",{id:"creating-a-folder-within-a-folder"},"Creating a folder within a folder"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"POST {{baseUrl}}/learn/api/public/v1/courses/:courseId/contents/:contentId/children")),(0,r.kt)("p",null,"And in the body (Please notice the parentId attribute AND contentHandler):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "This is a child of a folder, a folder within a folder",\n    "parentId": "_121047_1",\n    "body": "Body can be created using BBML, please review developers.blackboard.com for more information and docs.anthology.com https://docs.anthology.com/docs/REST%20APIs/Learn/Advanced/rest_apis-learn-advanced-bbml",\n    "description": "Content description",\n    "position": 1,\n    "launchInNewWindow": false,\n    "reviewable": true,\n    "availability": {\n        "available": "Yes",\n        "allowGuests": true,\n        "allowObservers": true\n    },\n    "contentHandler": {\n        "id": "resource/x-bb-folder"\n    }\n}\n')),(0,r.kt)("p",null,"Returns with 201:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "_127321_1",\n    "parentId": "_121047_1",\n    "title": "This is a child of a folder, a folder within a folder",\n    "body": "Body can be created using BBML, please review developers.blackboard.com for more information and docs.anthology.com https://docs.anthology.com/docs/REST%20APIs/Learn/Advanced/rest_apis-learn-advanced-bbml",\n    "description": "Content description",\n    "created": "2022-03-17T17:03:13.686Z",\n    "modified": "2022-03-17T17:03:13.761Z",\n    "position": 1,\n    "hasChildren": true,\n    "launchInNewWindow": false,\n    "reviewable": false,\n    "availability": {\n        "available": "Yes",\n        "allowGuests": true,\n        "allowObservers": true,\n        "adaptiveRelease": {}\n    },\n    "contentHandler": {\n        "id": "resource/x-bb-folder"\n    },\n    "links": [\n        {\n            "href": "/ultra/redirect?redirectType=nautilus&courseId=_13969_1&contentId=_127321_1&parentId=_121047_1",\n            "rel": "alternate",\n            "title": "User Interface View",\n            "type": "text/html"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"And looks: "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Creating content with the api",src:t(7908).Z,width:"3424",height:"1658"})),(0,r.kt)("h3",{id:"creating-content-within-a-folder"},"Creating content within a folder"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"POST {{baseUrl}}/learn/api/public/v1/courses/:courseId/contents/:contentId/children")),(0,r.kt)("p",null,"And in the body (Please notice the parentId attribute AND contentHandler):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "This is a child of a folder, This is content",\n    "parentId": "_121047_1",\n    "body": "Body can be created using BBML, please review developers.blackboard.com for more information and docs.anthology.com https://docs.anthology.com/docs/REST%20APIs/Learn/Advanced/rest_apis-learn-advanced-bbml",\n    "description": "Content description",\n    "position": 1,\n    "launchInNewWindow": false,\n    "reviewable": true,\n    "availability": {\n        "available": "Yes",\n        "allowGuests": true,\n        "allowObservers": true\n    },\n    "contentHandler": {\n        "id": "resource/x-bb-folder",\n        "isBbPage": true\n    }\n}\n')),(0,r.kt)("p",null,"When 201 returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "_127322_1",\n    "parentId": "_121047_1",\n    "title": "This is a child of a folder, This is content",\n    "body": "Body can be created using BBML, please review developers.blackboard.com for more information and docs.anthology.com https://docs.anthology.com/docs/REST%20APIs/Learn/Advanced/rest_apis-learn-advanced-bbml",\n    "description": "Content description",\n    "created": "2022-03-17T17:28:29.688Z",\n    "modified": "2022-03-17T17:28:29.796Z",\n    "position": 1,\n    "hasChildren": true,\n    "launchInNewWindow": false,\n    "reviewable": false,\n    "availability": {\n        "available": "Yes",\n        "allowGuests": true,\n        "allowObservers": true,\n        "adaptiveRelease": {}\n    },\n    "contentHandler": {\n        "id": "resource/x-bb-folder",\n        "isBbPage": true\n    },\n    "links": [\n        {\n            "href": "/ultra/redirect?redirectType=nautilus&courseId=_13969_1&contentId=_127322_1&parentId=_121047_1",\n            "rel": "alternate",\n            "title": "User Interface View",\n            "type": "text/html"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"And it looks:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Creating content with the api",src:t(9852).Z,width:"3424",height:"1658"})),(0,r.kt)("h3",{id:"updating-children-content"},"Updating children content"),(0,r.kt)("p",null,"This is the same as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PATCH {{baseUrl}}/learn/api/public/v1/courses/:courseId/contents/:contentId")),(0,r.kt)("p",null,"Which was reviewed (and is the same) in the previous segment."),(0,r.kt)("h3",{id:"deleting-children-content"},"Deleting children content"),(0,r.kt)("p",null,"This is the same as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DELETE {{baseUrl}}/learn/api/public/v1/courses/:courseId/contents/:contentId")),(0,r.kt)("p",null,"Returns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"204 - No content\n")),(0,r.kt)("h2",{id:"some-notes-on-original"},"Some notes on Original"),(0,r.kt)("p",null,"The main difference about managing content in original is that you will always find two specific items created by default on toc:\nInformation and content, those become the parents of content and you may create children content under those, you may create new parents and those should be reflected under the TOC, however those items cannot display information but contain it:\n",(0,r.kt)("img",{alt:"Creating content with the api",src:t(320).Z,width:"400",height:"454"})))}p.isMDXComponent=!0},894:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/manage-content-1-dcd45fc5d4e0b450397bb19a37790854.png"},6682:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/manage-content-2-dbf343fe8807c8588c6caec3e4f30c8b.png"},7497:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/manage-content-3-4bbaa1cb536aaf29c22bae0a37fa2ab3.png"},6782:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/manage-content-4-81bc736e63dfa10e66ed5dc423c9993d.png"},5434:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/manage-content-5-f0b029e39a10aab942ebdcc06380e939.png"},7908:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/manage-content-6-4ee84bc2eaf6ef5a4d8ee3e9ce21b803.png"},9852:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/manage-content-7-c9344ed5976f4e3f0f1168df3fc833e2.png"},320:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/manage-content-8-2edde66b3a7b188f1237a5be9e44a406.png"}}]);