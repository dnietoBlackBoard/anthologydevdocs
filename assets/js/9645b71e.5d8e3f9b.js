"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[1205],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(4137));const a={layout:"post",title:"Are Your Switches ON? (Troubleshooting)",id:"lti-trouble-turn_on_all_switches",categories:"Standards",author:"Scott Hurrey",sidebar_position:6,displayed_sidebar:"documentationSidebar"},i="LTI In Learn - Turn On All The Switches",l={unversionedId:"LTI/lti-trouble-turn_on_all_switches",id:"LTI/lti-trouble-turn_on_all_switches",title:"Are Your Switches ON? (Troubleshooting)",description:"Overview",source:"@site/docs/LTI/turn-on-all-switches.md",sourceDirName:"LTI",slug:"/LTI/lti-trouble-turn_on_all_switches",permalink:"/anthologydevdocs/docs/LTI/lti-trouble-turn_on_all_switches",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{layout:"post",title:"Are Your Switches ON? (Troubleshooting)",id:"lti-trouble-turn_on_all_switches",categories:"Standards",author:"Scott Hurrey",sidebar_position:6,displayed_sidebar:"documentationSidebar"},sidebar:"documentationSidebar",previous:{title:"LTI Advantage - Sample Deep Linking JSON",permalink:"/anthologydevdocs/docs/LTI/lti-deep_linking_two"},next:{title:"Handling id_token JWT",permalink:"/anthologydevdocs/docs/LTI/Core/lti-core-launch-id_token"}},s={},c=[{value:"Overview",id:"overview",level:3},{value:"All the Switches",id:"all-the-switches",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lti-in-learn---turn-on-all-the-switches"},"LTI In Learn - Turn On All The Switches"),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,'We often hear about this message "The Tool Provider has been disabled by the System Administrator" The usual cause is that one of the 3 LTI switches is disabled. There are 3 places you need to enable LTI: (1) at the tool level, (2) at the course/organization level, and (3) at the LTI Global Properties level. Screenshots follow. ',(0,o.kt)("strong",{parentName:"p"},"LAST, BUT NOT LEAST - Make certain you are enrolled in the course, as an instructor or student, before using the LTI placements you create in a course! Your launch will fail if you don't have a role in the course.")),(0,o.kt)("h3",{id:"all-the-switches"},"All the Switches"),(0,o.kt)("p",null,"(1) Administrator Panel -> Tools & Utilities section -> Tools"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"1-LTIConfigAdminTools.png",src:n(9986).Z,width:"500",height:"191"})),(0,o.kt)("p",null,"(2) In a Course/Organization, Start at the Left Nav Menu"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"2-LTIConfigCourseOrg.png",src:n(2091).Z,width:"500",height:"272"})),(0,o.kt)("p",null,"(3) Administrator Panel -> Integrations section -> LTI Tool Providers -> Manage Global Properties"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"3-LTIConfigManageGlobal.png",src:n(4169).Z,width:"500",height:"425"})))}p.isMDXComponent=!0},9986:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/turn-on-all-switches-1-f72105f195b55cea809faca33faf8ae5.png"},2091:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/turn-on-all-switches-2-f599f66fe936602d505be1e44267654c.png"},4169:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/turn-on-all-switches-3-59a783c27ce95a19f9113b39edd51aca.png"}}]);