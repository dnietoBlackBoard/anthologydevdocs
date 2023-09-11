"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[4754],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),g=o,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||n;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<n;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},549:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=a(7462),o=(a(7294),a(4137));const n={title:"Creating and Managing groups",id:"creating-and-managing-groups",categories:"Developer Portal",sidebar_position:3,published:"2023-05-09",edited:"2023-05-09",date:new Date("2023-05-09T00:00:00.000Z"),author:"Davey Herrera"},i=void 0,l={unversionedId:"developer-portal/creating-and-managing-groups",id:"developer-portal/creating-and-managing-groups",title:"Creating and Managing groups",description:"What are Groups",source:"@site/docs/developer-portal/creating-and-managing-groups.md",sourceDirName:"developer-portal",slug:"/developer-portal/creating-and-managing-groups",permalink:"/docs/developer-portal/creating-and-managing-groups",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Creating and Managing groups",id:"creating-and-managing-groups",categories:"Developer Portal",sidebar_position:3,published:"2023-05-09",edited:"2023-05-09",date:"2023-05-09T00:00:00.000Z",author:"Davey Herrera"},sidebar:"documentationSidebar",previous:{title:"Registering and Managing a REST or LTI Application",permalink:"/docs/developer-portal/creating-new-rest-or-lti-application"},next:{title:"Production groups, REST API and site registrations limits",permalink:"/docs/developer-portal/production-groups-rest-api-and-site-registration-limits"}},p={},s=[{value:"What are Groups",id:"what-are-groups",level:2},{value:"Creating a group",id:"creating-a-group",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=c("VersioningTracker"),d=c("AuthorBox"),g={toc:s},m="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(m,(0,r.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{frontMatter:n,mdxType:"VersioningTracker"}),(0,o.kt)("h2",{id:"what-are-groups"},"What are Groups"),(0,o.kt)("p",null,"The Blackboard Developer Portal provides the means to manage application releases and associated developers through the concept of Groups. You can create groups for individual and team development, as well as target a specific group for a production application release (your Production Group). This allows you to manage your applications and the developer teams behind them, enabling access to application references by team members."),(0,o.kt)("p",null,"Groups always have at least one member - that unique member has admin rights and may not be removed from the group. You may add developers to groups. Developers added to groups may be given administrator privileges on the group."),(0,o.kt)("p",null,"Groups may also have one or more applications associated with the group. Application association allows for granular management of applications and teams access to application information."),(0,o.kt)("p",null,"Groups enable you to manage the developers associated with your projects and the release level of your applications."),(0,o.kt)("p",null,"And finally Groups allow for a higher contracted rate_limit, and site quota, over those set for default developer accounts. These settings are based on your Blackboard license or Business Development contract. If you do not have a Blackboard product license or do not have a Business Development contract your groups will all have default developer account settings."),(0,o.kt)("p",null,"This document explains how to create and manage your groups."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Groups, at the writing of this document ",(0,o.kt)("strong",{parentName:"p"},"cannot")," be deleted or removed, nor in the front end, not by us in the backend.")),(0,o.kt)("h2",{id:"creating-a-group"},"Creating a group"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Groups page composition",src:a(2071).Z,width:"1479",height:"675"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Create a group"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'You can create a group by clicking the button "Create"\n',(0,o.kt)("img",{alt:"Creating a group in developer portal",src:a(7564).Z,width:"1183",height:"845"}))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Rename a group")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'You can rename an existing group bu clicking the "Rename" button\n',(0,o.kt)("img",{alt:"renaming a group in developer portal",src:a(7567).Z,width:"1183",height:"845"}))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Select a new group"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This dropdown will allow you to select a Group between the ones you have created.")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Add a new developer to the group"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Here, given the specific group you have selected, you will be able to add a developer's email to the group.\n",(0,o.kt)("img",{alt:"Adding a developer to the developer portal",src:a(3993).Z,width:"1183",height:"845"}))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Change the admin status"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Options when not an admin",src:a(9085).Z,width:"1059",height:"425"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This allows you to provide a developer, on the group, with admin access. This will prevent the user to:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Add new developers to the group"),(0,o.kt)("li",{parentName:"ul"},"Edit, Delete or manage keys of the application."))),(0,o.kt)("li",{parentName:"ul"},"It allows the user to manage placements and see which schools have the application deployed.\n",(0,o.kt)("img",{alt:"Options when not an admin",src:a(644).Z,width:"1364",height:"733"}),(0,o.kt)(d,{frontMatter:n,mdxType:"AuthorBox"}))))}h.isMDXComponent=!0},2071:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-and-manage-groups-1-92b9dfb4e64368f90ec98baa076e6f99.png"},7564:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-and-manage-groups-2-7c6e74912f79b415438282c40bd469a4.png"},7567:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-and-manage-groups-3-92864017efc1410b6c3438fb33502676.png"},3993:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-and-manage-groups-4-494af292c0b34254080b7a95c837659f.png"},644:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-and-manage-groups-5-deab846d9208bc10d4cc40a1875ff716.png"},9085:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-and-manage-groups-6-1bce200913f692302b12e1e5444b3636.png"}}]);