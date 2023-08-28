"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[2072],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(o,".").concat(h)]||p[h]||c[h]||l;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(4137));const l={title:"Working with Adaptive Release",id:"adaptive-release",categories:"Learn REST groups",author:"Davey Herrera",published:"",edited:""},i=void 0,s={unversionedId:"rest-apis/learn/working-with-learn-apis/adaptive-release",id:"rest-apis/learn/working-with-learn-apis/adaptive-release",title:"Working with Adaptive Release",description:"Using Bb Learn 3900.34.0-rel.24+41a9160",source:"@site/docs/rest-apis/learn/working-with-learn-apis/adaptive-release.md",sourceDirName:"rest-apis/learn/working-with-learn-apis",slug:"/rest-apis/learn/working-with-learn-apis/adaptive-release",permalink:"/docs/rest-apis/learn/working-with-learn-apis/adaptive-release",draft:!1,tags:[],version:"current",frontMatter:{title:"Working with Adaptive Release",id:"adaptive-release",categories:"Learn REST groups",author:"Davey Herrera",published:"",edited:""},sidebar:"documentationSidebar",previous:{title:"REST Integrations 3-Legged OAuth and Learn Custom Login Pages For System Administrators",permalink:"/docs/rest-apis/learn/admin/rest-3lo-and-learn-sso"},next:{title:"Using Attendance APIs",permalink:"/docs/rest-apis/learn/working-with-learn-apis/attendance"}},o={},u=[{value:"Ultra courses",id:"ultra-courses",level:2},{value:"Rules (C.R.U.D)",id:"rules-crud",level:2},{value:"Creating a Rule",id:"creating-a-rule",level:3},{value:"Returning a Rule",id:"returning-a-rule",level:3},{value:"Updating a Rule",id:"updating-a-rule",level:3},{value:"Deleting a rule",id:"deleting-a-rule",level:3},{value:"Criteria (C.R.U.D)",id:"criteria-crud",level:2},{value:"Returning criteria",id:"returning-criteria",level:3},{value:"Using GradeRange",id:"using-graderange",level:3},{value:"Creating new criteria",id:"creating-new-criteria",level:3},{value:"Using GradePercentage",id:"using-gradepercentage",level:3},{value:"Using DateRange",id:"using-daterange",level:3},{value:"Memberships",id:"memberships",level:2},{value:"About memberships",id:"about-memberships",level:3},{value:"Users",id:"users",level:2},{value:"Getting the adaptive release users",id:"getting-the-adaptive-release-users",level:3},{value:"Posting adaptive release users",id:"posting-adaptive-release-users",level:3},{value:"Groups",id:"groups",level:2},{value:"Put Groups as criteria:",id:"put-groups-as-criteria",level:3},{value:"Read Only Messages you might see",id:"read-only-messages-you-might-see",level:2},{value:"ContentComplete (Ultra Only)",id:"contentcomplete-ultra-only",level:3},{value:"GradeCompleted (Original Only)",id:"gradecompleted-original-only",level:3},{value:"ContentReviewed (Original Only)",id:"contentreviewed-original-only",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=d("VersioningTracker"),c=d("AuthorBox"),h={toc:u},m="wrapper";function g(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(p,{frontMatter:l,mdxType:"VersioningTracker"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Using Bb Learn 3900.34.0-rel.24+41a9160")),(0,r.kt)("h2",{id:"ultra-courses"},"Ultra courses"),(0,r.kt)("p",null,'First we need to see how this is displayed in the GUI, the release criteria or Release conditions is set when clicking under the button that usually says "Visible to students"'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adaptive release conditions button in the GUI",src:n(8770).Z,width:"308",height:"202"})),(0,r.kt)("p",null,"When clicked, this displays several conditions:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adaptive release conditions button in the GUI",src:n(2796).Z,width:"391",height:"544"})),(0,r.kt)("p",null,"For all members, you can use additional conditions such as Date/Time and Performance, this also allows you to pick when will the content appear:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adaptive release conditions button in the GUI",src:n(7689).Z,width:"391",height:"852"})),(0,r.kt)("p",null,"It is also possible to release the content to specific members of the course or groups."),(0,r.kt)("p",null,"Note: We are aware that there is a known issue where, if you just enrolled a user (and haven't reloaded the page) the roster is not updated on adaptive release -> Specific memebers or groups -> Individual members and search for the user that has just been enrolled, the user does not show up, groups are correctly updated. To solve this, you can just reload the page and roster will be updated."),(0,r.kt)("p",null,"Now let's move on to the REST API part"),(0,r.kt)("h2",{id:"rules-crud"},"Rules (C.R.U.D)"),(0,r.kt)("p",null,"First thing is first!"),(0,r.kt)("p",null,"A rule must be born."),(0,r.kt)("p",null,"Yes, we need to create a rule that will contain our criteria (We assume the course and content has already been created), all rules depend on content, you need to create first content, then the rule, then criteria(optional) and define who will receive these rules."),(0,r.kt)("p",null,"For specific messages that may be returned by the api, please review: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.anthology.com/portal/displayApi"},"https://developer.anthology.com/portal/displayApi")),(0,r.kt)("p",null,"Also, please make sure to always review the entitlements required for each endpoint, you can check this document ",(0,r.kt)("a",{parentName:"p",href:"/docs/rest-apis/learn/getting-started/getting-started-with-entitlements"},"How to map entitlements with privileges")," to get more information about entitlements."),(0,r.kt)("p",null,"For the rules you need course_id and Content_id"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adaptive release conditions button in the GUI",src:n(2730).Z,width:"2010",height:"1178"})),(0,r.kt)("p",null,"You can create 1 rule per content_id!"),(0,r.kt)("h3",{id:"creating-a-rule"},"Creating a Rule"),(0,r.kt)("p",null,"To create a rule on a specific content id:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET {{baseUrl}}/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules")),(0,r.kt)("p",null,"And in the body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "New rules"\n}\n')),(0,r.kt)("h3",{id:"returning-a-rule"},"Returning a Rule"),(0,r.kt)("p",null,"To obtain the rule that exist on a specific content id:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET {{baseUrl}}/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules")),(0,r.kt)("h3",{id:"updating-a-rule"},"Updating a Rule"),(0,r.kt)("p",null,"To update a rule you can use (you need to know the rule id first):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PATCH {{baseUrl}}/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId")),(0,r.kt)("p",null,"and in the body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "New rules"\n}\n')),(0,r.kt)("p",null,"If everything goes well, you should see a 201:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "_349_1",\n  "title": "New rules"\n}\n')),(0,r.kt)("p",null,"if you see a 409 conflict:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 409,\n  "message": "A rule already exists for content [_121047_1]"\n}\n')),(0,r.kt)("p",null,"Means the rule already exists, as I mentioned, one contentID can only have one rule."),(0,r.kt)("h3",{id:"deleting-a-rule"},"Deleting a rule"),(0,r.kt)("p",null,"You can also delete a rule easlily:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DELETE /learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}")),(0,r.kt)("h2",{id:"criteria-crud"},"Criteria (C.R.U.D)"),(0,r.kt)("p",null,"You can get all the criteria associated to a content_id using:"),(0,r.kt)("h3",{id:"returning-criteria"},"Returning criteria"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET {{baseUrl}}/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId/criteria")),(0,r.kt)("p",null,"You should get a result like this (may vary depending on the criteria that has already been setup):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "results": [\n    {\n      "type": "GradeRange",\n      "id": "_386_1",\n      "gradeColumnId": "_89584_1",\n      "maxScore": 10.0,\n      "minScore": 10.0\n    },\n    {\n      "type": "DateRange",\n      "id": "_387_1",\n      "endDate": "2021-03-12T22:00:00.000Z"\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"using-graderange"},"Using GradeRange"),(0,r.kt)("p",null,"This criteria specifies a gradable item, a maximun and a minimum score. When the item has been graded and the score is within the range, the content becomes available. A GradeRange criterion can be converted to a GradePercentage criterion by setting the Type to GradePercentage and"),(0,r.kt)("p",null,"You can get the gradeColumn id using (you need the course_id):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET {{baseUrl}}/learn/api/public/v2/courses/:courseId/gradebook/columns")),(0,r.kt)("p",null,"It returns the following when 200:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "results": [\n    {\n      "id": "_89584_1",\n      "name": "Test for adaptive release - GradeRange",\n      "created": "2022-01-19T20:22:03.728Z",\n      "contentId": "_120905_1",\n      "score": {\n        "possible": 10.0\n      },\n      "availability": {\n        "available": "Yes"\n      },\n      "grading": {\n        "type": "Attempts",\n        "due": "2022-01-20T05:00:00.000Z",\n        "attemptsAllowed": 1,\n        "scoringModel": "Last",\n        "schemaId": "_78778_1",\n        "anonymousGrading": {\n          "type": "None"\n        }\n      },\n      "gradebookCategoryId": "_149469_1",\n      "includeInCalculations": true,\n      "showStatisticsToStudents": false,\n      "scoreProviderHandle": "resource/x-bb-assessment"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"This endpoint needs the following data:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Type -> ",'["GradeRange", "GradePercentage"]',", mandatory to pick one"),(0,r.kt)("li",{parentName:"ol"},"GradeColumnId -> (string id from a specific grade column), mandatory"),(0,r.kt)("li",{parentName:"ol"},"maxScore -> (float, nullable)"),(0,r.kt)("li",{parentName:"ol"},"minScore -> (float, nullable)")),(0,r.kt)("p",null,"Explaining the parameters a little bit further:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GradeColumnId:")," Mandatory. Id referencing the gradebook column of another gradable content. The content cannot be the one in which the criteria has been created. The referenced content must belong to the same course."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"maxScore:")," Can be null. Should respect the grade scale chosen by the referenced gradebook column. Less than or equal to the max score set in the grade item."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"minScore:")," Can be null. Only one of the scores can be set to null in a particular request. Cannot be negative."),(0,r.kt)("p",null,"Now, lets create the criteria:"),(0,r.kt)("h3",{id:"creating-new-criteria"},"Creating new criteria"),(0,r.kt)("p",null,"You can create it using (You need course_id, contentId and ruleId):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"POST {{baseUrl}}/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId/criteria")),(0,r.kt)("p",null,"And on the body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "GradeRange",\n  "gradeColumnId": "_89584_1",\n  "maxScore": 10.0,\n  "minScore": 10.0\n}\n')),(0,r.kt)("p",null,"If everything goes well, you should see a 201 with an id:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "GradeRange",\n  "id": "_386_1",\n  "gradeColumnId": "_89584_1",\n  "maxScore": 10.0,\n  "minScore": 10.0\n}\n')),(0,r.kt)("p",null,'Please be aware that maxScore and minScore can be set to null, for both POST and PATCH requests. This will be understood as "minScore or Higher" without setting a maximum score directly:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "GradeRange",\n  "id": "_11_1",\n  "gradeColumnId": "_22_1",\n  "maxScore": null,\n  "minScore": 70.0\n}\n')),(0,r.kt)("p",null,'If we do not declare the maxScore in the request while using POST, it will have a value assigned during the request corresponding to the maximum score possible by the gradable item, in this example, "maxScore" would be set to 100. For the PATCH, because it handles partial updates, if the field is omitted then the previous value will not change, being either null or 100. This behaviour also applies to GradePercentage criteria'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "GradeRange",\n  "id": "_11_1",\n  "gradeColumnId": "_22_1",\n  "minScore": 70.0\n}\n')),(0,r.kt)("h3",{id:"using-gradepercentage"},"Using GradePercentage"),(0,r.kt)("p",null,"Specifies a gradable item, a maximum and a minimum percentage value from the maximum score possible. When the item has been graded and the score is within the range, the content becomes available. A GradePercentage criterion can be converted to a GradeRange criterion by setting the Type to GradeRange and other fields to acceptable values for GradeRange criteria.\nSo, this is basically the same as GradeRange, except that maxScore and minScore expect a number between 0 and 100 (Float)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "GradeRange",\n  "gradeColumnId": "_89584_1",\n  "maxScore": 100.0,\n  "minScore": 70.0\n}\n')),(0,r.kt)("h3",{id:"using-daterange"},"Using DateRange"),(0,r.kt)("p",null,"Specifies a start and end dates. The content becomes available during the given date range."),(0,r.kt)("p",null,"This endpoint needs the following data:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Type -> ",'["DateRange"]',", inmutable"),(0,r.kt)("li",{parentName:"ol"},"startDate -> ISODate, Nullable"),(0,r.kt)("li",{parentName:"ol"},"endDate -> ISODate, Nullable & endDate > startDate")),(0,r.kt)("p",null,"Explaining the parameters a little bit further:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"startDate:")," ISODate. Can be null. Can be a past date. Must be prior to due date."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"endDate:")," ISODate. Can be null. Must be after startDate, and prior to due date. Only one of the dates can be set to null in a particular request."),(0,r.kt)("p",null,"You can create this using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"POST {{baseUrl}}/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId/criteria")),(0,r.kt)("p",null,"And the body looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "DateRange",\n  "startDate": null,\n  "endDate": "2021-03-12T22:00:00Z"\n}\n')),(0,r.kt)("p",null,"Similar to Grade criteria, any date can be explicitly set to null in the request body for both POST and PATCH requests. If \u201cstartDate\u201d is set to null, it will be understood as \u201cbefore endDate\u201d. Similarly, if \u201cendDate\u201d is set to null that means \u201cafter startDate\u201d with no particular limit. This comes useful particularly for PATCH requests, as one of the dates can be changed to null without recreating the object. If the value is omitted during creation, it will be set to null instead of having a default value."),(0,r.kt)("p",null,"If you send a request as in the example, the API returns 201 and:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "DateRange",\n  "id": "_387_1",\n  "endDate": "2021-03-12T22:00:00.000Z"\n}\n')),(0,r.kt)("p",null,"To make the text a little bit more simple:"),(0,r.kt)("p",null,"This basically means that the content will be hidden after that specific end date, but has always been visible prior that date:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adaptive release conditions button in the GUI",src:n(1483).Z,width:"404",height:"242"})),(0,r.kt)("p",null,"If we send this body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "DateRange",\n  "startDate": "2021-03-12T22:00:00.000Z",\n  "endDate": "null"\n}\n')),(0,r.kt)("p",null,"This means that content will be shown starting that date with no end date."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adaptive release conditions button in the GUI",src:n(3184).Z,width:"404",height:"242"})),(0,r.kt)("h2",{id:"memberships"},"Memberships"),(0,r.kt)("h3",{id:"about-memberships"},"About memberships"),(0,r.kt)("p",null,"By default, all members are selected to be affected by the criteria, however, it is possible to select specific Members or groups of the course to apply these rules on, Before we start talking about the membership criteria, if you've already applied membership criteria to the content and you call:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET {{baseUrl}}/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId/criteria")),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "results": [\n    {\n      "type": "GradeRange",\n      "id": "_386_1",\n      "gradeColumnId": "_89584_1",\n      "maxScore": 10.0,\n      "minScore": 10.0\n    },\n    {\n      "type": "DateRange",\n      "id": "_387_1",\n      "endDate": "2021-03-12T22:00:00.000Z"\n    },\n    {\n      "type": "Memberships",\n      "id": "_389_1"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,'The "Memberships" part of the returned values from this endpoint, indicates that the content has specific membership criteria and has the id of the membership criteria that describes the members, this id is a way of grouping the "memberships" without describing them, if we want to know who are the members\u2026'),(0,r.kt)("p",null,"We can query the membership id only if required using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET {{baseUrl}}/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId/criteria/:criterionId")),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "Memberships",\n  "id": "_389_1"\n}\n')),(0,r.kt)("h2",{id:"users"},"Users"),(0,r.kt)("h3",{id:"getting-the-adaptive-release-users"},"Getting the adaptive release users"),(0,r.kt)("p",null,"To get the users you need to now:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Course_id"),(0,r.kt)("li",{parentName:"ol"},"Content_id"),(0,r.kt)("li",{parentName:"ol"},"Rule_id"),(0,r.kt)("li",{parentName:"ol"},"Criterion_id (Membership)")),(0,r.kt)("p",null,"You can query using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET {{baseUrl}}/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId/criteria/:criterionId/users")),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "results": [\n    {\n      "id": "_230_1",\n      "criterionId": "_389_1",\n      "userId": "_13584_1"\n    },\n    {\n      "id": "_229_1",\n      "criterionId": "_389_1",\n      "userId": "_13613_1"\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"posting-adaptive-release-users"},"Posting adaptive release users"),(0,r.kt)("p",null,"To POST a list of users, you need to know the user_id which can be retrieved using:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please keep in mind the user needs to be enrolled first in the course in order for all of this to work!")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET {{baseUrl}}/learn/api/public/v1/users")),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "results": [\n    {\n      "id": "_47939_1",\n      "uuid": "3bdfc74364d643a29c5baa8c79608c6c",\n      "externalId": "636012",\n      "dataSourceId": "_127_1",\n      "userName": "tirum",\n      "educationLevel": "Unknown",\n      "gender": "Unknown",\n      "created": "2021-11-11T04:45:14.562Z",\n      "modified": "2022-02-18T17:08:02.940Z",\n      "institutionRoleIds": ["STUDENT"],\n      "systemRoleIds": ["User"],\n      "availability": {\n        "available": "Yes"\n      },\n      "locale": {\n        "id": "en-US"\n      },\n      "avatar": {\n        "viewUrl": "https://a-testing-url.com/withsomeIDinfo",\n        "source": "Default"\n      }\n    }\n  ]\n}\n')),(0,r.kt)("p",null,'The ID that you might need to grab is "id": "',"_",'47939_1"'),(0,r.kt)("p",null,"Now to post it, we use PUT."),(0,r.kt)("p",null,"You need to pass the same information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PUT {{baseUrl}}/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId/criteria/:criterionId/groups")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Course_id"),(0,r.kt)("li",{parentName:"ol"},"Content_id"),(0,r.kt)("li",{parentName:"ol"},"Rule_id"),(0,r.kt)("li",{parentName:"ol"},"Criterion_id (Membership)")),(0,r.kt)("p",null,"Now, you need to use the following body format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "userId": "anim labore in nulla est"\n  },\n  {\n    "userId": "sunt labore ve"\n  }\n]\n')),(0,r.kt)("p",null,"Using our previous example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "userId": "_47939_1"\n  }\n]\n')),(0,r.kt)("p",null,"If the user is NOT enrolled in the course the API returns 400:"),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 400,\n  "message": "User _47939_1 is not enrolled in the course _13969_1 ",\n  "extraInfo": "1f34fc3eba27478abdea01ed7134c2e4"\n}\n')),(0,r.kt)("p",null,"If the user IS enrolled in the course:"),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "results": [\n    {\n      "id": "_231_1",\n      "criterionId": "_389_1",\n      "userId": "_47939_1"\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"groups"},"Groups"),(0,r.kt)("p",null,"Since this guide has become a little bit longer than desired, you can check our approach on groups ",(0,r.kt)("a",{parentName:"p",href:"/docs/rest-apis/learn/working-with-learn-apis/groups-in-rest-api"},"here"),"."),(0,r.kt)("p",null,"Basically, you can create groups and associate them to adaptive release content, please keep in mind you cannot reference a group set, but groups within the set:"),(0,r.kt)("h3",{id:"put-groups-as-criteria"},"Put Groups as criteria:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PUT {{baseUrl}}/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId/criteria/:criterionId/groups")),(0,r.kt)("p",null,"And the body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "groupId": "_873_1"\n  }\n]\n')),(0,r.kt)("p",null,"This returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "results": [\n    {\n      "id": "_206_1",\n      "criterionId": "_389_1",\n      "groupId": "_873_1"\n    }\n  ]\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please keep in mind that this will update and replace any current groups that are part of the criterion, you need to pass as many child groups as needed to avoid issues:")),(0,r.kt)("p",null,"Like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "groupId": "_867_1"\n  },\n  {\n    "groupId": "_873_1"\n  },\n  {\n    "groupId": "_872_1"\n  },\n  {\n    "groupId": "_871_1"\n  }\n]\n')),(0,r.kt)("p",null,"This returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "results": [\n    {\n      "id": "_208_1",\n      "criterionId": "_389_1",\n      "groupId": "_867_1"\n    },\n    {\n      "id": "_209_1",\n      "criterionId": "_389_1",\n      "groupId": "_871_1"\n    },\n    {\n      "id": "_207_1",\n      "criterionId": "_389_1",\n      "groupId": "_872_1"\n    },\n    {\n      "id": "_210_1",\n      "criterionId": "_389_1",\n      "groupId": "_873_1"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Notice that we are using the same criterionId, here is why:"),(0,r.kt)("p",null,"When you retrieve all the criterion related to a rule, you get the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "results": [\n    {\n      "type": "GradeRange",\n      "id": "_386_1",\n      "gradeColumnId": "_89584_1",\n      "maxScore": 10.0,\n      "minScore": 10.0\n    },\n    {\n      "type": "DateRange",\n      "id": "_387_1",\n      "endDate": "2021-03-12T22:00:00.000Z"\n    },\n    {\n      "type": "Memberships",\n      "id": "_389_1"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"As you can see, the membership criteria has id ","_","389_1, meaning that there is where all the membership criteria will be stored."),(0,r.kt)("h2",{id:"read-only-messages-you-might-see"},"Read Only Messages you might see"),(0,r.kt)("h3",{id:"contentcomplete-ultra-only"},"ContentComplete (Ultra Only)"),(0,r.kt)("p",null,"This is a Special type of criteria only assigned to the child contents of a learning module, where the \u201cSequence\u201d release condition can be activated. Each type of content has its own definition of what \u201ccomplete\u201d means. This behavior is not supported via public API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "ContentComplete",\n  "id": "_11_1",\n  "contentId": "_22_1"\n}\n')),(0,r.kt)("h3",{id:"gradecompleted-original-only"},"GradeCompleted (Original Only)"),(0,r.kt)("p",null,"Specifies a gradable item associated to a different content in the same course. Regardless of scores, if the grade item is deemed as completed, the content will become available."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "GradeCompleted",\n  "id": "_11_1",\n  "gradeColumnId": "_10_1"\n}\n')),(0,r.kt)("h3",{id:"contentreviewed-original-only"},"ContentReviewed (Original Only)"),(0,r.kt)("p",null,"Specifies a content of the same course. The referenced content must be set to a \u201creviewed\u201d status from entitled users for the content to become available."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "ContentReviewed",\n  "id": "_2_2",\n  "reviewedContentId": "_2_1"\n}\n')),(0,r.kt)(c,{frontMatter:l,mdxType:"AuthorBox"}))}g.isMDXComponent=!0},8770:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/adaptive-release-1-8b6a5599b945a131b20ed2c4d58fc13a.png"},2796:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/adaptive-release-2-dcfd386a16cb9e7a30dd79c8bfd66df0.png"},7689:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/adaptive-release-3-dd2e467dd0cfcaa3813994adfe981d87.png"},2730:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/adaptive-release-4-0903b7294b8a7caae69df25068950c4a.png"},1483:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/adaptive-release-5-01c33c7c4dc511ec1383e8f96fa4af6b.png"},3184:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/adaptive-release-6-ba74ef245f4ec63bf74a197830193a83.png"}}]);