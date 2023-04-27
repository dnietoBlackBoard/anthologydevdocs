"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[1309],{4137:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),g=r,m=d["".concat(o,".").concat(g)]||d[g]||c[g]||l;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=g;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6367:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=t(7462),r=(t(7294),t(4137));const l={layout:"post",title:"Working with groups and the API",id:"rest_apis-learn-getting_started-groups_and_api",categories:"Learn REST groups",toc:!0},i="Groups and REST API",s={unversionedId:"REST APIs/Learn/Working with Learn APIs/rest_apis-learn-getting_started-groups_and_api",id:"REST APIs/Learn/Working with Learn APIs/rest_apis-learn-getting_started-groups_and_api",title:"Working with groups and the API",description:"Using Learn ULTRA on Ultra Course view on Release 3900.34.0-rel.24+41a9160",source:"@site/docs/REST APIs/Learn/Working with Learn APIs/groups-and-rest-api.md",sourceDirName:"REST APIs/Learn/Working with Learn APIs",slug:"/REST APIs/Learn/Working with Learn APIs/rest_apis-learn-getting_started-groups_and_api",permalink:"/docs/REST APIs/Learn/Working with Learn APIs/rest_apis-learn-getting_started-groups_and_api",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Working with groups and the API",id:"rest_apis-learn-getting_started-groups_and_api",categories:"Learn REST groups",toc:!0},sidebar:"documentationSidebar",previous:{title:"Creating content with REST-API",permalink:"/docs/REST APIs/Learn/Working with Learn APIs/rest_apis-learn-getting_started-creating_content_with_API"},next:{title:"C# Demo",permalink:"/docs/REST APIs/Learn/Examples/rest_apis-learn-examples-csharpdemo"}},o={},u=[{value:"Group sets",id:"group-sets",level:2},{value:"Creating Group sets",id:"creating-group-sets",level:3},{value:"Reading group sets",id:"reading-group-sets",level:2},{value:"Update groups and group sets",id:"update-groups-and-group-sets",level:2},{value:"Group Sets",id:"group-sets-1",level:3},{value:"Update Groups",id:"update-groups",level:3},{value:"Deleting groups and group sets",id:"deleting-groups-and-group-sets",level:2},{value:"Deleting group sets",id:"deleting-group-sets",level:3},{value:"Deleting groups",id:"deleting-groups",level:3},{value:"Group Memberships (C.R.U.D)",id:"group-memberships-crud",level:2},{value:"Creating Memberships",id:"creating-memberships",level:3},{value:"Reading Memberships",id:"reading-memberships",level:3},{value:"Deleting Membership",id:"deleting-membership",level:3},{value:"Creating Groups",id:"creating-groups",level:3},{value:"Updating Groups",id:"updating-groups",level:3},{value:"Delete groups",id:"delete-groups",level:3}],p={toc:u},d="wrapper";function c(e){let{components:n,...l}=e;return(0,r.kt)(d,(0,a.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"groups-and-rest-api"},"Groups and REST API"),(0,r.kt)("p",null,"Using Learn ULTRA on Ultra Course view on Release 3900.34.0-rel.24+41a9160"),(0,r.kt)("p",null,"On a course, it is possible to create groups to divide students according to the study plan, we have APIs available to perform this task, although this document is written thinking in differentiating Ultra and Original, all group set endpoints work with original, even thought it is displayed in a different way."),(0,r.kt)("p",null,"In case you were wondering, C.R.U.D means:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create"),(0,r.kt)("li",{parentName:"ul"},"Read"),(0,r.kt)("li",{parentName:"ul"},"Update"),(0,r.kt)("li",{parentName:"ul"},"Delete")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please remember to always use ",(0,r.kt)("a",{parentName:"p",href:"https://developer.anthology.com/portal/displayApi"},"https://developer.anthology.com/portal/displayApi")," as your first source")),(0,r.kt)("h1",{id:"groups-in-ultra-experience-crud"},"Groups in Ultra Experience (C.R.U.D)"),(0,r.kt)("p",null,"This is how the group manager looks like in ultra. The groups displayed here are group sets:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"How group sets look in the GUI",src:t(6338).Z,width:"1251",height:"688"})),(0,r.kt)("p",null,'And this is how groups look on the GUI within the "New group set 2/18/222":'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"How groups look withing a group set",src:t(5751).Z,width:"1251",height:"969"})),(0,r.kt)("h2",{id:"group-sets"},"Group sets"),(0,r.kt)("h3",{id:"creating-group-sets"},"Creating Group sets"),(0,r.kt)("p",null,"It is possible to create a new set sending:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"POST {{baseUrl}}/learn/api/public/v2/courses/:courseId/groups/sets")),(0,r.kt)("p",null,"And using body (You can use BBML, more about it here ",(0,r.kt)("a",{parentName:"p",href:"https://docs.blackboard.com/REST"},"https://docs.blackboard.com/REST")," APIs/Learn/advanced/bbml ):"),(0,r.kt)("p",null,"Returns when 200:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "GroupSetFromAPI",\n    "externalId": "enim Duis ea non exercitation",\n    "description": "A description that can use BBML",\n    "availability": {\n        "available": "No"\n    },\n    "enrollment": {\n        "type": "InstructorOnly",\n        "limit": 6,\n        "signupSheet": {\n            "name": "SignUpSheet Name",\n            "description": "signUpSheet description that can use BBML",\n            "showMembers": true\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Returns when 201 - Created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "_875_1",\n    "externalId": "enim Duis ea non exercitation",\n    "name": "GroupSetFromAPI",\n    "description": "A description that can use BBML",\n    "availability": {\n        "available": "No"\n    },\n    "enrollment": {\n        "type": "InstructorOnly",\n        "limit": 6\n    },\n    "uuid": "c2a6b04e187646e79c64e740a32d8c5a",\n    "created": "2022-03-01T19:31:27.840Z",\n    "modified": "2022-03-01T19:31:27.840Z"\n}\n')),(0,r.kt)("h2",{id:"reading-group-sets"},"Reading group sets"),(0,r.kt)("p",null,"You can read them by sending:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET {{baseUrl}}/learn/api/public/v2/courses/:courseId/groups/sets")),(0,r.kt)("p",null,"And, since we already have 3 sets it returns when 200:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "results": [\n        {\n            "id": "_875_1",\n            "externalId": "enim Duis ea non exercitation",\n            "name": "GroupSetFromAPI",\n            "description": "A description that can use BBML",\n            "availability": {\n                "available": "No"\n            },\n            "enrollment": {\n                "type": "InstructorOnly",\n                "limit": 6\n            },\n            "uuid": "c2a6b04e187646e79c64e740a32d8c5a",\n            "created": "2022-03-01T19:31:27.840Z",\n            "modified": "2022-03-01T19:31:27.840Z"\n        },\n        {\n            "id": "_866_1",\n            "externalId": "7af727199eb941daa96d75f1163b2a89",\n            "name": "New Group Set 2/18/22",\n            "availability": {\n                "available": "No"\n            },\n            "enrollment": {\n                "type": "InstructorOnly",\n                "limit": 0\n            },\n            "uuid": "b5ff482694114dd7b81df921b9a7ff90",\n            "created": "2022-02-18T20:29:41.965Z",\n            "modified": "2022-02-18T20:29:41.965Z"\n        },\n        {\n            "id": "_870_1",\n            "externalId": "89d999d600814e6db5df26214843b405",\n            "name": "New Group Set 2/28/22",\n            "availability": {\n                "available": "No"\n            },\n            "enrollment": {\n                "type": "InstructorOnly",\n                "limit": 0\n            },\n            "uuid": "958d29cc470045709dd3bacdacb55ae6",\n            "created": "2022-02-28T20:51:06.986Z",\n            "modified": "2022-02-28T20:51:06.986Z"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"It is also possible to get all the groups, including sets using (check the parents to know which one is a set and which one is a child of that parent, if parentId is null, is because the group is a set.):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET {{baseUrl}}/learn/api/public/v1/courses/:courseId/groups")),(0,r.kt)("p",null,"Returns when 200: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "results": [\n        {\n            "id": "_875_1",\n            "externalId": "enim Duis ea non exercitation",\n            "parentId": null,\n            "name": "GroupSetFromAPI",\n            "description": "A description that can use BBML",\n            "isGroupSet": true,\n            "availability": {\n                "available": "No"\n            },\n            "enrollment": {\n                "type": "InstructorOnly",\n                "limit": 6\n            },\n            "uuid": "c2a6b04e187646e79c64e740a32d8c5a"\n        },\n        {\n            "id": "_867_1",\n            "externalId": "2f77cf366064488a94d6778a133c2ba6",\n            "parentId": "_866_1",\n            "name": "New Group 1",\n            "isGroupSet": false,\n            "availability": {\n                "available": "No"\n            },\n            "enrollment": {\n                "type": "InstructorOnly",\n                "limit": 0\n            },\n            "uuid": "de138f580ef34edb8531d48d04e2b0e7"\n        },\n        {\n            "id": "_871_1",\n            "externalId": "fa87d1ca21ae4eee92a1b1a73db9c189",\n            "parentId": "_870_1",\n            "name": "New Group 1",\n            "isGroupSet": false,\n            "availability": {\n                "available": "No"\n            },\n            "enrollment": {\n                "type": "InstructorOnly",\n                "limit": 0\n            },\n            "uuid": "e546b01898f34d1aad8a05d615e9e53f"\n        },\n        {\n            "id": "_868_1",\n            "externalId": "3fec1b86660541d2982c93fe5b51c24f",\n            "parentId": "_866_1",\n            "name": "New Group 2",\n            "isGroupSet": false,\n            "availability": {\n                "available": "No"\n            },\n            "enrollment": {\n                "type": "InstructorOnly",\n                "limit": 0\n            },\n            "uuid": "6e311e235d474e0abd82284a61c5c3f1"\n        },\n        {\n            "id": "_872_1",\n            "externalId": "169b1d4ede8343f6b7ed2e2c93646013",\n            "parentId": "_870_1",\n            "name": "New Group 2",\n            "isGroupSet": false,\n            "availability": {\n                "available": "No"\n            },\n            "enrollment": {\n                "type": "InstructorOnly",\n                "limit": 0\n            },\n            "uuid": "ac3e3617a1a84d1ab7dcb8803d0b671c"\n        },\n        {\n            "id": "_873_1",\n            "externalId": "0ee40767726a4c87875ee7243205dd32",\n            "parentId": "_870_1",\n            "name": "New Group 3",\n            "isGroupSet": false,\n            "availability": {\n                "available": "No"\n            },\n            "enrollment": {\n                "type": "InstructorOnly",\n                "limit": 0\n            },\n            "uuid": "8fb901da7cac4f04a19c6721790d7ec1"\n        },\n        {\n            "id": "_866_1",\n            "externalId": "7af727199eb941daa96d75f1163b2a89",\n            "parentId": null,\n            "name": "New Group Set 2/18/22",\n            "isGroupSet": true,\n            "availability": {\n                "available": "No"\n            },\n            "enrollment": {\n                "type": "InstructorOnly",\n                "limit": 0\n            },\n            "uuid": "b5ff482694114dd7b81df921b9a7ff90"\n        },\n        {\n            "id": "_870_1",\n            "externalId": "89d999d600814e6db5df26214843b405",\n            "parentId": null,\n            "name": "New Group Set 2/28/22",\n            "isGroupSet": true,\n            "availability": {\n                "available": "No"\n            },\n            "enrollment": {\n                "type": "InstructorOnly",\n                "limit": 0\n            },\n            "uuid": "958d29cc470045709dd3bacdacb55ae6"\n        }\n    ]\n}\n\n')),(0,r.kt)("p",null,"In the GUI it looks like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"How groups look withing a group set",src:t(1941).Z,width:"1251",height:"568"})),(0,r.kt)("p",null,"To add groups to a set:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"POST {{baseUrl}}/learn/api/public/v2/courses/:courseId/groups/sets/:groupId/groups")),(0,r.kt)("p",null,"And in the body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "GroupSetFromAPI First Child",\n    "externalId": "",\n    "description": "BBML CAPABLE",\n    "availability": {\n        "available": "No"\n    },\n    "enrollment": {\n        "type": "InstructorOnly",\n        "limit": -11076931,\n        "signupSheet": {\n            "name": "SignupSheet name",\n            "description": "SignUpSheet description",\n            "showMembers": true\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Returns when 201:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "_876_1",\n    "externalId": "b8c68679be084e1581ff3c3f9490f473",\n    "groupSetId": "_875_1",\n    "name": "GroupSetFromAPI First Child",\n    "description": "BBML CAPABLE",\n    "availability": {\n        "available": "No"\n    },\n    "enrollment": {\n        "type": "InstructorOnly",\n        "limit": -11076931\n    },\n    "uuid": "a30a62775ae749a884022f2ffc1bf0b5",\n    "created": "2022-03-02T20:34:46.308Z",\n    "modified": "2022-03-02T20:34:46.500Z"\n}\n')),(0,r.kt)("p",null,"To get the group set children of a specific parent:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET {{baseUrl}}/learn/api/public/v2/courses/:courseId/groups/sets/:groupId/groups")),(0,r.kt)("p",null,"Returns when 200:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "results": [\n        {\n            "id": "_876_1",\n            "externalId": "b8c68679be084e1581ff3c3f9490f473",\n            "groupSetId": "_875_1",\n            "name": "GroupSetFromAPI First Child",\n            "description": "BBML CAPABLE",\n            "availability": {\n                "available": "No"\n            },\n            "enrollment": {\n                "type": "InstructorOnly",\n                "limit": -11076931\n            },\n            "uuid": "a30a62775ae749a884022f2ffc1bf0b5",\n            "created": "2022-03-02T20:34:46.308Z",\n            "modified": "2022-03-02T20:34:46.500Z"\n        }\n    ]\n}\n')),(0,r.kt)("h2",{id:"update-groups-and-group-sets"},"Update groups and group sets"),(0,r.kt)("h3",{id:"group-sets-1"},"Group Sets"),(0,r.kt)("p",null,"You can update the group set using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PATCH {{baseUrl}}/learn/api/public/v2/courses/:courseId/groups/sets/:groupId")),(0,r.kt)("p",null,"And in the body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "GroupSetFromAPI First Child updated",\n    "externalId": "",\n    "description": "BBML CAPABLE patched",\n    "availability": {\n        "available": "No"\n    },\n    "enrollment": {\n        "type": "InstructorOnly",\n        "limit": -11076931,\n        "signupSheet": {\n            "name": "SignupSheet name patched",\n            "description": "SignUpSheet description patched",\n            "showMembers": true\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Returns when 200"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "_875_1",\n    "name": "GroupSetFromAPI First Child updated",\n    "description": "BBML CAPABLE patched",\n    "availability": {\n        "available": "No"\n    },\n    "enrollment": {\n        "type": "InstructorOnly",\n        "limit": -11076931\n    },\n    "uuid": "c2a6b04e187646e79c64e740a32d8c5a",\n    "created": "2022-03-01T19:31:27.840Z",\n    "modified": "2022-03-02T21:24:14.198Z"\n}\n')),(0,r.kt)("h3",{id:"update-groups"},"Update Groups"),(0,r.kt)("p",null,"You can update a group by using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PATCH {{baseUrl}}/learn/api/public/v2/courses/:courseId/groups/:groupId")),(0,r.kt)("p",null,"Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "previous name was New Group 3",\n    "description": "A description that can use BBML updated",\n    "availability": {\n        "available": "No"\n    },\n    "enrollment": {\n        "type": "InstructorOnly",\n        "limit": 6,\n        "signupSheet": {\n            "name": "SignUpSheet Name",\n            "description": "signUpSheet description that can use BBML updated",\n            "showMembers": true\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Returns when 200:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "_873_1",\n    "externalId": "0ee40767726a4c87875ee7243205dd32",\n    "groupSetId": "_870_1",\n    "name": "previous name was New Group 3",\n    "description": "A description that can use BBML updated",\n    "availability": {\n        "available": "No"\n    },\n    "enrollment": {\n        "type": "InstructorOnly",\n        "limit": 6\n    },\n    "uuid": "8fb901da7cac4f04a19c6721790d7ec1",\n    "created": "2022-02-28T20:51:07.710Z",\n    "modified": "2022-03-02T22:01:01.813Z"\n}\n')),(0,r.kt)("h2",{id:"deleting-groups-and-group-sets"},"Deleting groups and group sets"),(0,r.kt)("h3",{id:"deleting-group-sets"},"Deleting group sets"),(0,r.kt)("p",null,"You can remove group sets by using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DELETE {{baseUrl}}/learn/api/public/v2/courses/:courseId/groups/sets/:groupId")),(0,r.kt)("p",null,"Returns 204"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"No content\n")),(0,r.kt)("h3",{id:"deleting-groups"},"Deleting groups"),(0,r.kt)("p",null,"You can remove groups by using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DELETE {{baseUrl}}/learn/api/public/v2/courses/:courseId/groups/:groupId")),(0,r.kt)("p",null,"Returns 204"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"No content\n")),(0,r.kt)("h2",{id:"group-memberships-crud"},"Group Memberships (C.R.U.D)"),(0,r.kt)("p",null,"Fortunately this is pretty simple to use, there is no post method, but there is PUT:"),(0,r.kt)("h3",{id:"creating-memberships"},"Creating Memberships"),(0,r.kt)("p",null,"To Create a group membership you can use:"),(0,r.kt)("p",null,"(The group id needs to be the group within a set, not the set itself)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PUT {{baseUrl}}/learn/api/public/v2/courses/:courseId/groups/:groupId/users/:userId")),(0,r.kt)("p",null,"Returns (it just returns the uer id) when 201:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "userId": "_43755_1"\n}\n')),(0,r.kt)("h3",{id:"reading-memberships"},"Reading Memberships"),(0,r.kt)("p",null,"This endooint returns only the userId, is useful if you only need to know if the user is part of the group:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET {{baseUrl}}/learn/api/public/v2/courses/:courseId/groups/:groupId/users/:userId")),(0,r.kt)("p",null,"Returns when 200:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "userId": "_43755_1"\n}\n')),(0,r.kt)("h3",{id:"deleting-membership"},"Deleting Membership"),(0,r.kt)("p",null,"You can Use:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DELETE {{baseUrl}}/learn/api/public/v2/courses/:courseId/groups/:groupId/users/:userId")),(0,r.kt)("p",null,"Returns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"204 No Content\n")),(0,r.kt)("h1",{id:"groups-in-original-experience-crud"},"Groups in Original Experience (C.R.U.D)"),(0,r.kt)("p",null,"Groups in original experience work in a very similar way as in Ultra, You can also use Group sets in original experience, the endpoints should be the same and should work in the same way as well, the main difference would be in the way they are displayed."),(0,r.kt)("p",null,"Now, you cannot create stand alone groups in Ultra, meaning, groups cannot be created if there is no group set created first, but in original, you can."),(0,r.kt)("h3",{id:"creating-groups"},"Creating Groups"),(0,r.kt)("p",null,"You can create a group using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"POST {{baseUrl}}/learn/api/public/v2/courses/:courseId/groups")),(0,r.kt)("p",null,"And the body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Stand Alone Group in Original",\n    "description": "BBML Group description in original",\n    "availability": {\n        "available": "No"\n    },\n    "enrollment": {\n        "type": "InstructorOnly",\n        "limit": 1,\n        "signupSheet": {\n            "name": "SignUp Sheet name for a standalone group in original",\n            "description": "SignUp sheet description for a standalone group in original",\n            "showMembers": true\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Returns when 200:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "_882_1",\n    "externalId": "ea9a2336e6444d4b8bdeffb0aa5ce058",\n    "groupSetId": null,\n    "name": "Stand Alone Group in Original",\n    "description": "BBML Group description in original",\n    "availability": {\n        "available": "No"\n    },\n    "enrollment": {\n        "type": "InstructorOnly",\n        "limit": 1\n    },\n    "uuid": "71e7f81fb6de4c92b873f04108d51df0",\n    "created": "2022-03-03T15:32:04.410Z",\n    "modified": "2022-03-03T15:32:04.487Z"\n}\n')),(0,r.kt)("p",null,"Reading Groups"),(0,r.kt)("p",null,"You can either get all groups within a course:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET {{baseUrl}}/learn/api/public/v2/courses/:courseId/groups")),(0,r.kt)("p",null,"Returns when 200:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "results": [\n        {\n            "id": "_882_1",\n            "externalId": "ea9a2336e6444d4b8bdeffb0aa5ce058",\n            "groupSetId": null,\n            "name": "Stand Alone Group in Original",\n            "description": "BBML Group description in original",\n            "availability": {\n                "available": "No"\n            },\n            "enrollment": {\n                "type": "InstructorOnly",\n                "limit": 1\n            },\n            "uuid": "71e7f81fb6de4c92b873f04108d51df0",\n            "created": "2022-03-03T15:32:04.410Z",\n            "modified": "2022-03-03T15:32:04.487Z"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"Or get data about only one group:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET {{baseUrl}}/learn/api/public/v2/courses/:courseId/groups/:groupId")),(0,r.kt)("p",null,"Returns when 200:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "_882_1",\n    "externalId": "ea9a2336e6444d4b8bdeffb0aa5ce058",\n    "groupSetId": null,\n    "name": "Stand Alone Group in Original",\n    "description": "BBML Group description in original",\n    "availability": {\n        "available": "No"\n    },\n    "enrollment": {\n        "type": "InstructorOnly",\n        "limit": 1\n    },\n    "uuid": "71e7f81fb6de4c92b873f04108d51df0",\n    "created": "2022-03-03T15:32:04.410Z",\n    "modified": "2022-03-03T15:32:04.487Z"\n}\n')),(0,r.kt)("p",null,"This is basically the same but more specific and one less level."),(0,r.kt)("h3",{id:"updating-groups"},"Updating Groups"),(0,r.kt)("p",null,"To update a group, you can use:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PATCH {{baseUrl}}/learn/api/public/v2/courses/:courseId/groups/:groupId")),(0,r.kt)("p",null,"And on the body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "previous name was New Group 3",\n    "description": "A description that can use BBML updated",\n    "availability": {\n        "available": "No"\n    },\n    "enrollment": {\n        "type": "InstructorOnly",\n        "limit": 6,\n        "signupSheet": {\n            "name": "SignUpSheet Name",\n            "description": "signUpSheet description that can use BBML updated",\n            "showMembers": true\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Returns when 200:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "_882_1",\n    "externalId": "ea9a2336e6444d4b8bdeffb0aa5ce058",\n    "groupSetId": null,\n    "name": "previous name was New Group 3",\n    "description": "A description that can use BBML updated",\n    "availability": {\n        "available": "No"\n    },\n    "enrollment": {\n        "type": "InstructorOnly",\n        "limit": 6\n    },\n    "uuid": "71e7f81fb6de4c92b873f04108d51df0",\n    "created": "2022-03-03T15:32:04.410Z",\n    "modified": "2022-03-03T16:59:25.107Z"\n}\n')),(0,r.kt)("h3",{id:"delete-groups"},"Delete groups"),(0,r.kt)("p",null,"You can delete groups using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DELETE {{baseUrl}}/learn/api/public/v2/courses/:courseId/groups/:groupId")),(0,r.kt)("p",null,"It returns 204:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"No content\n")))}c.isMDXComponent=!0},6338:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/rest-api-groups-1-a5d013b8ef28cf20c8586bd335e3520c.png"},5751:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/rest-api-groups-2-7386f2d7d3b78a32ea0a0bb5f571261d.png"},1941:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/rest-api-groups-3-2a780183543074d02220c7c052d7d8a0.png"}}]);