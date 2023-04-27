"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[7779],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9332:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(4137));const i={layout:"post",title:"Learn's UEF",categories:"Learn UEF",authors:"Mark Kauffman, Sarah Lehnert",id:"uef_getting_started",sidebar_position:1,displayed_sidebar:"documentationSidebar"},o="Learn's Ultra Extension Framework",s={unversionedId:"REST APIs/Premium APIs/UEF/uef_getting_started",id:"REST APIs/Premium APIs/UEF/uef_getting_started",title:"Learn's UEF",description:"Introducing Learn's Ultra Extension Framework",source:"@site/docs/REST APIs/Premium APIs/UEF/uef_getting_started.md",sourceDirName:"REST APIs/Premium APIs/UEF",slug:"/REST APIs/Premium APIs/UEF/uef_getting_started",permalink:"/anthologydevdocs/docs/REST APIs/Premium APIs/UEF/uef_getting_started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{layout:"post",title:"Learn's UEF",categories:"Learn UEF",authors:"Mark Kauffman, Sarah Lehnert",id:"uef_getting_started",sidebar_position:1,displayed_sidebar:"documentationSidebar"},sidebar:"documentationSidebar",previous:{title:"Requesting Premium APIs",permalink:"/anthologydevdocs/docs/REST APIs/Premium APIs/rest_apis-learn-uef-request_premium_apis"},next:{title:"UEF Tutorials",permalink:"/anthologydevdocs/docs/REST APIs/Premium APIs/UEF/Tutorials/"}},l={},p=[{value:"Introducing Learn&#39;s Ultra Extension Framework",id:"introducing-learns-ultra-extension-framework",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"learns-ultra-extension-framework"},"Learn's Ultra Extension Framework"),(0,n.kt)("h2",{id:"introducing-learns-ultra-extension-framework"},"Introducing Learn's Ultra Extension Framework"),(0,n.kt)("p",null,"We\u2019re excited to introduce a new means of integration with the Learn Ultra Experience, known as the Ultra Extension Framework (UEF). The UEF is a set of Premium APIs that augment the Ultra experience of Learn with a robust set of capabilities including telemetry, help provider registration, and UI element rendering - all designed to enable better integrations and richer user experience."),(0,n.kt)("p",null,"What can you do with the UEF? The UEF is a set of Premium APIs that offers several new capabilities for integrations with the Learn Ultra Experience."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Telemetry:")," Receiving of detailed user navigation behavior data, including click, route, and hoover events: ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/rnMsvVo6xOA"},"Here you may find a demo")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"User Interface Elements:")," Ability to populate UI elements and content, including capabilities for banners, modals, and notifications."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Help Provider Registration:")," Option to override the default behavior of the native help tool in Ultra."),(0,n.kt)("p",null,"We gave several partners early access to the UEF. The following videos are examples of how these partners used the UEF to better deliver their integration in Ultra."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/OKJWiddjJws"},"Video:")," Eesysoft uses help provider registration, telemetry, notifications and modals to deliver enhanced, context-sensitive help to the user.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"http://images.email.blackboard.com/Web/BlackboardInc/%7B06cb8e9e-5a54-4c15-bde4-fda7df2d8911%7D_EesySoftUEFscreenshots.pdf"},"Screenshots"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://appcatalog.blackboard.com/details/blue/"},"eXplorance")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/WuH-QpkFyqA"},"Video:")," eXplorance uses telemetry, notifications, and a modal peek-panel to prompt for Blue Course Evaluations.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"http://images.email.blackboard.com/Web/BlackboardInc/%7B8ca742bc-d001-440c-9e47-6f3263fa677e%7D_ExploranceUEFscreenshots.pdf"},"Screenshots"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"http://appcatalog.blackboard.com/partners/0017000000w4nNgAAI/Qwickly%2C+Inc"},"Qwickly")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://vimeo.com/432279170/4b30aed978"},"Video:")," Qwickly delivers capabilities to a student in an Ultra Course banner without the need to launch a separate LTI peek-panel.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"http://images.email.blackboard.com/Web/BlackboardInc/%7Baffc825e-e416-4c69-aa09-69cf160a5a57%7D_QwicklyUEFscreenshots.pdf"},"Screenshots")))))),(0,n.kt)("p",null,"If you are a developer and interested in pursuing use of the UEF Premium APIs in your integration with the Learn Ultra Experience, what are your next steps? Send an email to BbPartnerTeam ",(0,n.kt)("a",{parentName:"p",href:"mailto:bbpartnerteam@blackboard.com"},"bbpartnerteam@blackboard.com"),' with the subject "Interested in Partnership That Includes Premium API Access." Ask for time to discuss such with a member of our partnership team. Note that if you are a partner with a partnership-level of Bronze or higher, or you are a client, then you can simply file a Behind the Blackbaord ticket requesting UEF access. In the ticket include the email used to register the REST application, and the name of the group where you will place applications that you want UEF enabled.'),(0,n.kt)("p",null,"Check back here often as this page will be updated frequently with more details."))}m.isMDXComponent=!0}}]);