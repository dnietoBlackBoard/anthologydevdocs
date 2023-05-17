"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[3510],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,v=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return n?a.createElement(v,r(r({ref:t},d),{},{components:n})):a.createElement(v,r({ref:t},d))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(4137));const i={layout:"post",title:"B2s and Java Permissions",categories:"Learn b2",id:"archive-b2-gs-api_overview",author:"Scott Hurrey",status:"deprecated",displayed_sidebar:"documentationSidebar"},r=void 0,s={unversionedId:"archive/b2/getting-started/archive-b2-gs-api_overview",id:"archive/b2/getting-started/archive-b2-gs-api_overview",title:"B2s and Java Permissions",description:"This document is deprecated!",source:"@site/docs/archive/b2/getting-started/api-overview.md",sourceDirName:"archive/b2/getting-started",slug:"/archive/b2/getting-started/archive-b2-gs-api_overview",permalink:"/anthologydevdocs/docs/archive/b2/getting-started/archive-b2-gs-api_overview",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"B2s and Java Permissions",categories:"Learn b2",id:"archive-b2-gs-api_overview",author:"Scott Hurrey",status:"deprecated",displayed_sidebar:"documentationSidebar"},sidebar:"documentationSidebar"},l={},c=[{value:"Functional Overview",id:"functional-overview",level:2},{value:"Announcement",id:"announcement",level:4},{value:"Authentication",id:"authentication",level:4},{value:"Calendar",id:"calendar",level:4},{value:"Content",id:"content",level:4},{value:"Content System (When licensed)",id:"content-system-when-licensed",level:4},{value:"Context",id:"context",level:4},{value:"Courses",id:"courses",level:4},{value:"Course Categories",id:"course-categories",level:4},{value:"Discussion Board",id:"discussion-board",level:4},{value:"Enrollments",id:"enrollments",level:4},{value:"File System",id:"file-system",level:4},{value:"Gradebook",id:"gradebook",level:4},{value:"Logging",id:"logging",level:4},{value:"Navigation / Course Table of Contents",id:"navigation--course-table-of-contents",level:4},{value:"Plugins",id:"plugins",level:4},{value:"Portal data",id:"portal-data",level:4},{value:"Roles",id:"roles",level:4},{value:"System configuration",id:"system-configuration",level:4},{value:"Users",id:"users",level:4},{value:"Utility classes",id:"utility-classes",level:4}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u26a0\ufe0f This document is deprecated!"),(0,o.kt)("h1",{id:"b2s-and-java-permissions"},"B2s and Java Permissions"),(0,o.kt)("p",null,"Building Blocks are capable of fulfilling predominantly, but not exclusively\ntwo scenarios:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Plugging-in additional or enhanced functionality to the core Blackboard product"),(0,o.kt)("li",{parentName:"ul"},"Bridging the Blackboard product to an external system")),(0,o.kt)("p",null,"A Building Block is simply a java based web application that runs on your\nBlackboard application server. Packaged in the web application is an xml\nconfiguration file called the bb-manifest that defines the security\nrestrictions on that particular Building Block as well as where the Building\nBlock hooks into the core product. For Building Blocks that have user\ninterfaces, tag libraries can be used to give the interface Blackboard's\ndistinct look and feel."),(0,o.kt)("p",null,"Building Blocks are used to access, add, remove, and manipulate data within\nthe Learning System. Examples of data types include users, courses, grades,\ncalendar entries, and content items. These objects map to the entities that a\nuser would see represented in the user interface."),(0,o.kt)("p",null,"Accessing and manipulating data involves using a series of loaders and\npersisters that provide the logic and functionality required to save data into\nand read data from the Blackboard Learning System."),(0,o.kt)("h2",{id:"functional-overview"},"Functional Overview"),(0,o.kt)("h4",{id:"announcement"},"Announcement"),(0,o.kt)("p",null,"Announcements are representations of an announcement within the Blackboard\napplication. These can be either system-wide or course-specific in nature.\nBlackboard provides the ability to create, update, and remove announcements."),(0,o.kt)("h4",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"The authentication API allows developers to implement a customized\nauthentication scheme other than those that ship with the product. An example\nwould be creating a way to authenticate against a custom central\nauthentication database or other non-LDAP-based authentication service."),(0,o.kt)("h4",{id:"calendar"},"Calendar"),(0,o.kt)("p",null,"Calendar entries represent a calendar entry within the Blackboard application.\nThese can be system-wide, course-specific, or user-specific in nature.\nBlackboard provides the ability to create, update, and remove calendar\nentries."),(0,o.kt)("h4",{id:"content"},"Content"),(0,o.kt)("p",null,"Content refers to files that exist in the various content areas within a given\ncourse site such as presentations or documents. The APIs give you the ability\nto add and remove content, create links to content, create sequentially-\nordered lessons, and access data related to user interaction with a given\npiece of content."),(0,o.kt)("h4",{id:"content-system-when-licensed"},"Content System (When licensed)"),(0,o.kt)("p",null,"The Blackboard Content System allows users to upload and share content within\nthe context of a content management system. The Content System APIs allow\ncontent to be created, bookmarked, tagged with metadata, incorporated into a\nportfolio, and acted on as part of a workflow."),(0,o.kt)("h4",{id:"context"},"Context"),(0,o.kt)("p",null,"The Context allows a developer to access information regarding a given user or\ncourse based on that user's current interactions with the Learning System."),(0,o.kt)("h4",{id:"courses"},"Courses"),(0,o.kt)("p",null,"Courses can be created, updated, deleted, and copied in the same ways that are\npossible with the Snapshot enterprise data integration tool."),(0,o.kt)("h4",{id:"course-categories"},"Course Categories"),(0,o.kt)("p",null,"Course categories allow courses to be categorized according to a given\ntaxonomy. Blackboard provides ways to create, update, and remove course\ncategories."),(0,o.kt)("h4",{id:"discussion-board"},"Discussion Board"),(0,o.kt)("p",null,"Discussion board conferences, forums, threads, and posts can be accessed. You\ncan also determine the status of a given posting and generate statistics on\ndiscussion board usage."),(0,o.kt)("h4",{id:"enrollments"},"Enrollments"),(0,o.kt)("p",null,"Course enrollments can be created, updated, and removed in the same ways that\nare possible with the Snapshot enterprise data integration tool."),(0,o.kt)("h4",{id:"file-system"},"File System"),(0,o.kt)("p",null,"Various directories can be accessed directly giving access to logs, course\ncontent, temp directories, and other areas."),(0,o.kt)("h4",{id:"gradebook"},"Gradebook"),(0,o.kt)("p",null,"Individual gradebook items and scores can be created, updated, and removed."),(0,o.kt)("h4",{id:"logging"},"Logging"),(0,o.kt)("p",null,"Allows access to the core Blackboard logging system including the ability to\ndefine new logs."),(0,o.kt)("h4",{id:"navigation--course-table-of-contents"},"Navigation / Course Table of Contents"),(0,o.kt)("p",null,"Allows the loading of the course table of contents."),(0,o.kt)("h4",{id:"plugins"},"Plugins"),(0,o.kt)("p",null,"Utility class for interacting with Building Blocks on a Blackboard server\ngiving access to information such as which Building Blocks are installed,\nversions of which Blackboard products are installed, and other Building Block\nconfiguration information."),(0,o.kt)("h4",{id:"portal-data"},"Portal data"),(0,o.kt)("p",null,"Allows user-specific module data to be created and updated."),(0,o.kt)("h4",{id:"roles"},"Roles"),(0,o.kt)("p",null,"Allows individual users to be associated with various institution/portal roles\nin the same ways that are possible with the Snapshot enterprise data\nintegration tool."),(0,o.kt)("h4",{id:"system-configuration"},"System configuration"),(0,o.kt)("p",null,"Allows access to server configuration data such as application server name,\nauthentication type enabled, installation directory, database name, and SMTP\nconfiguration."),(0,o.kt)("h4",{id:"users"},"Users"),(0,o.kt)("p",null,"Allows creation, update, and removal of users in the same ways that are\npossible with the Snapshot enterprise data integration tool."),(0,o.kt)("h4",{id:"utility-classes"},"Utility classes"),(0,o.kt)("p",null,"Various classes to support functions such as byte->kilobyte conversion and\nlocalized number representation."))}p.isMDXComponent=!0}}]);