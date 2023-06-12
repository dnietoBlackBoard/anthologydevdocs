"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[1205],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3075:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(4137));const i={layout:"post",title:"Are Your Switches ON? (Troubleshooting)",id:"lti-trouble-turn_on_all_switches",categories:"Standards",author:"Scott Hurrey",sidebar_position:6,displayed_sidebar:"documentationSidebar"},a="LTI In Learn - Turn On All The Switches",l={unversionedId:"LTI/lti-trouble-turn_on_all_switches",id:"LTI/lti-trouble-turn_on_all_switches",title:"Are Your Switches ON? (Troubleshooting)",description:"Overview",source:"@site/docs/LTI/turn-on-all-switches.md",sourceDirName:"LTI",slug:"/LTI/lti-trouble-turn_on_all_switches",permalink:"/docs/LTI/lti-trouble-turn_on_all_switches",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{layout:"post",title:"Are Your Switches ON? (Troubleshooting)",id:"lti-trouble-turn_on_all_switches",categories:"Standards",author:"Scott Hurrey",sidebar_position:6,displayed_sidebar:"documentationSidebar"},sidebar:"documentationSidebar",previous:{title:"LTI Advantage - Sample Deep Linking JSON",permalink:"/docs/LTI/lti-deep_linking_two"},next:{title:"Handling id_token JWT",permalink:"/docs/LTI/Core/lti-core-launch-id_token"}},s={},c=[{value:"Overview",id:"overview",level:3},{value:"All the Switches",id:"all-the-switches",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lti-in-learn---turn-on-all-the-switches"},"LTI In Learn - Turn On All The Switches"),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,'We often hear about this message "The Tool Provider has been disabled by the System Administrator" The usual cause is that one of the 3 LTI switches is disabled. There are 3 places you need to enable LTI: (1) at the tool level, (2) at the course/organization level, and (3) at the LTI Global Properties level. Screenshots follow. ',(0,o.kt)("strong",{parentName:"p"},"LAST, BUT NOT LEAST - Make certain you are enrolled in the course, as an instructor or student, before using the LTI placements you create in a course! Your launch will fail if you don't have a role in the course.")),(0,o.kt)("h3",{id:"all-the-switches"},"All the Switches"),(0,o.kt)("p",null,"(1) Administrator Panel -> Tools & Utilities section -> Tools"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"1-LTIConfigAdminTools.png",src:r(9986).Z,width:"500",height:"191"})),(0,o.kt)("p",null,"(2) In a Course/Organization, Start at the Left Nav Menu"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"2-LTIConfigCourseOrg.png",src:r(2091).Z,width:"500",height:"272"})),(0,o.kt)("p",null,"(3) Administrator Panel -> Integrations section -> LTI Tool Providers -> Manage Global Properties"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"3-LTIConfigManageGlobal.png",src:r(4169).Z,width:"500",height:"425"})))}p.isMDXComponent=!0},9986:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/turn-on-all-switches-1-f72105f195b55cea809faca33faf8ae5.png"},2091:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/turn-on-all-switches-2-f599f66fe936602d505be1e44267654c.png"},4169:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/turn-on-all-switches-3-59a783c27ce95a19f9113b39edd51aca.png"}}]);