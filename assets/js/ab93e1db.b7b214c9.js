"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[6634],{4137:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},o="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=m(t,["components","mdxType","originalType","parentName"]),o=p(a),k=r,N=o["".concat(d,".").concat(k)]||o[k]||u[k]||l;return a?n.createElement(N,i(i({ref:e},s),{},{components:a})):n.createElement(N,i({ref:e},s))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var m={};for(var d in e)hasOwnProperty.call(e,d)&&(m[d]=e[d]);m.originalType=t,m[o]="string"==typeof t?t:r,i[1]=m;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1076:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var n=a(7462),r=(a(7294),a(4137));const l={layout:"post",title:"Learn Caliper Event Guide",categories:"Standards",id:"caliper-events-guide",author:"Scott Hurrey",sidebar_position:1},i=void 0,m={unversionedId:"standards/caliper/events/caliper-events-guide",id:"standards/caliper/events/caliper-events-guide",title:"Learn Caliper Event Guide",description:"This document contains a map of the Caliper events emitted by",source:"@site/docs/standards/caliper/events/event-guide.md",sourceDirName:"standards/caliper/events",slug:"/standards/caliper/events/caliper-events-guide",permalink:"/docs/standards/caliper/events/caliper-events-guide",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{layout:"post",title:"Learn Caliper Event Guide",categories:"Standards",id:"caliper-events-guide",author:"Scott Hurrey",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Caliper Metric Profiles",permalink:"/docs/standards/caliper/getting-started/caliper-gs-metric_profiles"},next:{title:"Assessment Events",permalink:"/docs/standards/caliper/events/caliper-events-assesments"}},d={},p=[{value:"SessionEvent",id:"sessionevent",level:3},{value:"ViewEvent",id:"viewevent",level:3},{value:"LTIEvent",id:"ltievent",level:3},{value:"AssignableEvent",id:"assignableevent",level:3},{value:"AssessmentEvent",id:"assessmentevent",level:3},{value:"AssessmentItemEvent",id:"assessmentitemevent",level:3},{value:"ForumEvent",id:"forumevent",level:3},{value:"GradeEvent",id:"gradeevent",level:3},{value:"CalculatedGradeSnapshotEvent",id:"calculatedgradesnapshotevent",level:3},{value:"ContentEvent",id:"contentevent",level:3},{value:"CourseGroupEvent",id:"coursegroupevent",level:3},{value:"BlogEvent",id:"blogevent",level:3},{value:"WikiEvent",id:"wikievent",level:3}],s=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},o=s("VersioningTracker"),u=s("AuthorBox"),k={toc:p},N="wrapper";function g(t){let{components:e,...a}=t;return(0,r.kt)(N,(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(o,{frontMatter:l,mdxType:"VersioningTracker"}),(0,r.kt)("h1",{id:"learn-caliper-event-guide"},"Learn Caliper Event Guide"),(0,r.kt)("p",null,"This document contains a map of the Caliper events emitted by\nLearn. If you are interested in learning more about Moodle's Caliper\nimplementation, please visit the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Caliper"},"Moodle Documentation"),"."),(0,r.kt)("h3",{id:"sessionevent"},"SessionEvent"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Actor"),(0,r.kt)("th",{parentName:"tr",align:null},"When"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Log In"),(0,r.kt)("td",{parentName:"tr",align:null},"All Users"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Log Out"),(0,r.kt)("td",{parentName:"tr",align:null},"All Users"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Session Time Out"),(0,r.kt)("td",{parentName:"tr",align:null},"All Users"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")))),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/standards/caliper/events/caliper-events-sessions"},"Session Events"),"."),(0,r.kt)("h3",{id:"viewevent"},"ViewEvent"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Actor"),(0,r.kt)("th",{parentName:"tr",align:null},"When"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Click Content File Link"),(0,r.kt)("td",{parentName:"tr",align:null},"All Users"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Click External Link"),(0,r.kt)("td",{parentName:"tr",align:null},"All Users"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Click Assignment Link"),(0,r.kt)("td",{parentName:"tr",align:null},"All Users"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Click Discussion Link"),(0,r.kt)("td",{parentName:"tr",align:null},"All Users"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")))),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/standards/caliper/events/caliper-events-views"},"View Events"),"."),(0,r.kt)("h3",{id:"ltievent"},"LTIEvent"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Actor"),(0,r.kt)("th",{parentName:"tr",align:null},"When"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Click LTI Link"),(0,r.kt)("td",{parentName:"tr",align:null},"All Users"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Return from LTI Link"),(0,r.kt)("td",{parentName:"tr",align:null},"All Users"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")))),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/standards/caliper/events/caliper-events-lti_events"},"LTI Events"),"."),(0,r.kt)("h3",{id:"assignableevent"},"AssignableEvent"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Actor"),(0,r.kt)("th",{parentName:"tr",align:null},"When"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Start an Assignment"),(0,r.kt)("td",{parentName:"tr",align:null},"Student"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Start a Group Assignment"),(0,r.kt)("td",{parentName:"tr",align:null},"Student"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Submit an Assignment"),(0,r.kt)("td",{parentName:"tr",align:null},"Student"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Submit a Group Assignment"),(0,r.kt)("td",{parentName:"tr",align:null},"Student"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")))),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/standards/caliper/events/caliper-events-assignables"},"Assignable Events"),"."),(0,r.kt)("h3",{id:"assessmentevent"},"AssessmentEvent"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Actor"),(0,r.kt)("th",{parentName:"tr",align:null},"When"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Start a Test"),(0,r.kt)("td",{parentName:"tr",align:null},"Student"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Submit a Test"),(0,r.kt)("td",{parentName:"tr",align:null},"Student"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")))),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/standards/caliper/events/caliper-events-assesments"},"Assessment Events"),"."),(0,r.kt)("h3",{id:"assessmentitemevent"},"AssessmentItemEvent"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Actor"),(0,r.kt)("th",{parentName:"tr",align:null},"When"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Start a Test Question"),(0,r.kt)("td",{parentName:"tr",align:null},"Student"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Submit a Test Question"),(0,r.kt)("td",{parentName:"tr",align:null},"Student"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")))),(0,r.kt)("p",null,"For more information see, ",(0,r.kt)("a",{parentName:"p",href:"/docs/standards/caliper/events/caliper-events-assesments"},"Assessment Events"),"."),(0,r.kt)("h3",{id:"forumevent"},"ForumEvent"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Actor"),(0,r.kt)("th",{parentName:"tr",align:null},"When"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create a Discussion Thread Top Message"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update Discussion Thread Name, Points Possible, or Message"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Delete a Discussion Thread Top Message"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Post a Thread"),(0,r.kt)("td",{parentName:"tr",align:null},"All Users"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Save a Thread as Draft"),(0,r.kt)("td",{parentName:"tr",align:null},"All Users"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Post an Assignment Conversation Comment"),(0,r.kt)("td",{parentName:"tr",align:null},"All Users"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Post a Group Thread"),(0,r.kt)("td",{parentName:"tr",align:null},"All Users"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Post a Group Conversation Comment"),(0,r.kt)("td",{parentName:"tr",align:null},"All Users"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Delete a Message"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")))),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/standards/caliper/events/caliper-events-forum"},"Forum Events"),"."),(0,r.kt)("h3",{id:"gradeevent"},"GradeEvent"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Actor"),(0,r.kt)("th",{parentName:"tr",align:null},"When"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Submit an Assignment"),(0,r.kt)("td",{parentName:"tr",align:null},"Student"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Submit a Group Assignment"),(0,r.kt)("td",{parentName:"tr",align:null},"Student"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Submit a Test"),(0,r.kt)("td",{parentName:"tr",align:null},"Student"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enter Grade, Comments, or Feedback"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Nightly")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update Feedback"),(0,r.kt)("td",{parentName:"tr",align:null},"All Users"),(0,r.kt)("td",{parentName:"tr",align:null},"Nightly")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Post a Manual Grade"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Nightly")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Override a Grade"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Nightly")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Clear an Overridden Grade"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Nightly")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Delete an Attempt"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Nightly")))),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/standards/caliper/events/caliper-events-grade_events"},"Grade Events"),"."),(0,r.kt)("h3",{id:"calculatedgradesnapshotevent"},"CalculatedGradeSnapshotEvent"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Actor"),(0,r.kt)("th",{parentName:"tr",align:null},"When"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Trigger Calculated Grade Re-Calculation"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Nightly")))),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/standards/caliper/events/caliper-events-calculated_grade_snapshots"},"Calculated Grade Snapshot Events"),"."),(0,r.kt)("h3",{id:"contentevent"},"ContentEvent"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Actor"),(0,r.kt)("th",{parentName:"tr",align:null},"When"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create or Delete Folder"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update Folder: Name, Description, Availability, Show Dates, Hide Dates"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create or Delete Link"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update Link: Name, URL, Description, Availability, Show Dates, Hide Dates"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create or Delete LTI"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update LTI: Name, URL, Description, Parameters, Availability, Points Possible,Due Date, Show Dates, Hide Dates"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create or Delete Assignment"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update Assignment: Name, Availability, Points Possible, Due Date, Show Dates, Hide Dates, Instructions, Attempts Allowed, Scoring Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create or Delete Discussion Forum Link"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update Discussion Forum Link: Name, Availability, Due Date, Show Dates, Hide Dates"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create or Delete Content File (Upload)"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update Content File (Upload): Name, Availability, Show Dates, Hide Dates, Instructions"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create or Delete Test"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update Test: Name, Availability, Points Possible, Due Date, Show Dates, Hide Dates, Instructions, Attempts Allowed, Scoring Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create or Delete Document"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update Document: Name, Availability, Show Dates, Hide Dates, Instructions"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create or Delete Document File"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update Document File: Name, Availability, Show Dates, Hide Dates, Instructions"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add Questions to Assignment or Test"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")))),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/standards/caliper/events/caliper-events-content_events"},"Content Events"),"."),(0,r.kt)("h3",{id:"coursegroupevent"},"CourseGroupEvent"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Actor"),(0,r.kt)("th",{parentName:"tr",align:null},"When"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create or Delete Group"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update Group: Assignment, Discussion Forum, or Test"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructor"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")))),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/standards/caliper/events/caliper-events-course_group"},"Course Group Events"),"."),(0,r.kt)("h3",{id:"blogevent"},"BlogEvent"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Actor"),(0,r.kt)("th",{parentName:"tr",align:null},"When"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Post a Blog Entry in an Original Experience Course"),(0,r.kt)("td",{parentName:"tr",align:null},"Student"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")))),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/standards/caliper/events/caliper-events-blogs"},"Blog Events"),"."),(0,r.kt)("h3",{id:"wikievent"},"WikiEvent"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Actor"),(0,r.kt)("th",{parentName:"tr",align:null},"When"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Post to a Wiki in an Original Experience Course"),(0,r.kt)("td",{parentName:"tr",align:null},"Student"),(0,r.kt)("td",{parentName:"tr",align:null},"Immediately")))),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/standards/caliper/events/caliper-events-wikis"},"Wiki Events"),"."),(0,r.kt)(u,{frontMatter:l,mdxType:"AuthorBox"}))}g.isMDXComponent=!0}}]);