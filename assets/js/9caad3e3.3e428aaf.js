"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[111],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(c,".").concat(u)]||d[u]||b[u]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const i={title:"Wiki Events",categories:"Standards",id:"wikis-events",author:"Scott Hurrey",published:"",edited:""},o=void 0,s={unversionedId:"standards/caliper/events/wikis-events",id:"standards/caliper/events/wikis-events",title:"Wiki Events",description:"Learn's Caliper Analytics stream emits a WikiEvent whenever a",source:"@site/docs/standards/caliper/events/wiki-events.md",sourceDirName:"standards/caliper/events",slug:"/standards/caliper/events/wikis-events",permalink:"/docs/standards/caliper/events/wikis-events",draft:!1,tags:[],version:"current",frontMatter:{title:"Wiki Events",categories:"Standards",id:"wikis-events",author:"Scott Hurrey",published:"",edited:""},sidebar:"documentationSidebar",previous:{title:"View Events",permalink:"/docs/standards/caliper/events/view-events"},next:{title:"Become a Partner!",permalink:"/docs/partners/partners-become_a_partner"}},c={},p=[{value:"WikiEvent",id:"wikievent",level:3},{value:"Sample Payload",id:"sample-payload",level:3}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=l("VersioningTracker"),b=l("AuthorBox"),u={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d,{frontMatter:i,mdxType:"VersioningTracker"}),(0,a.kt)("p",null,"Learn's Caliper Analytics stream emits a WikiEvent whenever a\nstudent posts to a wiki in an original experience course. Here is some of the\nkey data that is associated with these events:"),(0,a.kt)("h3",{id:"wikievent"},"WikiEvent"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"object.wikiId")," - the primary key for the wiki"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"action")," - Created, Modified, Commented"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"extensions")," - contains a tag called ",(0,a.kt)("strong",{parentName:"p"},"bb:user.externalId")," with the batch_uid for the user"),(0,a.kt)("h3",{id:"sample-payload"},"Sample Payload"),(0,a.kt)("p",null,"Here is a sample of what an event payload might look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sensor": "530efc49-6b9f-40a6-918b-966ee83a744c",\n  "sendTime": "2021-01-05T16:58:53.778Z",\n  "dataVersion": "http://purl.imsglobal.org/ctx/caliper/v1p1",\n  "data": [\n    {\n      "@context": [\n        "http://caliper.blackboard.com/ctx/caliper/v1/Context",\n        "http://purl.imsglobal.org/ctx/caliper/v1p1"\n      ],\n      "type": "http://caliper.blackboard.com/caliper/v1/WikiEvent",\n      "id": "1162c8d4-c3f8-446f-a08a-c673e2a2eaf2",\n      "actor": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/530efc49-6b9f-40a6-918b-966ee83a744c/users/9c60a9cdb3144d1aa77ff56c34ef248b",\n        "type": "Person",\n        "extensions": {\n          "bb:user.id": "_227_1",\n          "bb:user.externalId": "scott.hurrey@myschool.edu"\n        }\n      },\n      "action": "Created",\n      "object": {\n        "@context": [\n          "http://caliper.blackboard.com/ctx/caliper/v1/Context",\n          "http://purl.imsglobal.org/ctx/caliper/v1p1"\n        ],\n        "type": "http://caliper.blackboard.com/caliper/v1/WikiPage",\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/530efc49-6b9f-40a6-918b-966ee83a744c/wiki/7cdeb8248ba84ec3a6f859973fb7764c",\n        "name": "Second Wiki Post",\n        "description": "",\n        "wikiId": "_36_1",\n        "wikiName": "Test Wiki",\n        "pointsPossible": 100,\n        "extensions": {}\n      },\n      "generated": {\n        "@context": [\n          "http://caliper.blackboard.com/ctx/caliper/v1/Context",\n          "http://purl.imsglobal.org/ctx/caliper/v1p1"\n        ],\n        "type": "http://caliper.blackboard.com/caliper/v1/WikiPost",\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/530efc49-6b9f-40a6-918b-966ee83a744c/wiki/7cdeb8248ba84ec3a6f859973fb7764c/post/AXbTfLPSgpyqar8j43GB",\n        "name": "",\n        "description": "",\n        "totalWordCount": 17,\n        "extensions": {}\n      },\n      "eventTime": "2021-01-05T16:58:42.126Z",\n      "edApp": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/530efc49-6b9f-40a6-918b-966ee83a744c/applications/learn",\n        "type": "SoftwareApplication"\n      },\n      "membership": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/530efc49-6b9f-40a6-918b-966ee83a744c/courses/e9c09e39c7844ae3b2ed677ac4fd90d7/members/9c60a9cdb3144d1aa77ff56c34ef248b",\n        "type": "Membership",\n        "extensions": {\n          "bb:course.id": "_124_1",\n          "bb:course.externalId": "og-101",\n          "bb:user.id": "_227_1",\n          "bb:user.externalId": "scott.hurrey@myschool.edu"\n        },\n        "member": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/530efc49-6b9f-40a6-918b-966ee83a744c/users/9c60a9cdb3144d1aa77ff56c34ef248b",\n          "type": "Person",\n          "extensions": {\n            "bb:user.id": "_227_1",\n            "bb:user.externalId": "scott.hurrey@myschool.edu"\n          }\n        },\n        "organization": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/530efc49-6b9f-40a6-918b-966ee83a744c/courses/e9c09e39c7844ae3b2ed677ac4fd90d7",\n          "type": "CourseOffering",\n          "extensions": {\n            "bb:course.id": "_124_1"\n          },\n          "members": [],\n          "courseNumber": "og-101"\n        },\n        "roles": ["Learner"],\n        "status": "Active"\n      },\n      "federatedSession": {\n        "startedAtTime": "2021-01-05T16:58:42.126Z",\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/530efc49-6b9f-40a6-918b-966ee83a744c/sessions/5118E091FCBDF29709BBD9D6F6758679",\n        "type": "LtiSession",\n        "name": "5118E091FCBDF29709BBD9D6F6758679",\n        "dateCreated": "2021-01-05T16:58:42.126Z",\n        "user": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/530efc49-6b9f-40a6-918b-966ee83a744c/users/9c60a9cdb3144d1aa77ff56c34ef248b",\n          "type": "Person",\n          "extensions": {\n            "bb:user.id": "_227_1",\n            "bb:user.externalId": "scott.hurrey@myschool.edu"\n          }\n        }\n      },\n      "extensions": {},\n      "session": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/530efc49-6b9f-40a6-918b-966ee83a744c/sessions/5118E091FCBDF29709BBD9D6F6758679",\n        "type": "Session"\n      }\n    }\n  ]\n}\n')),(0,a.kt)(b,{frontMatter:i,mdxType:"AuthorBox"}))}f.isMDXComponent=!0}}]);