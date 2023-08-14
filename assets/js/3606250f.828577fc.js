"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[4578],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return r?a.createElement(h,i(i({ref:t},d),{},{components:r})):a.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9503:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(4137));const o={layout:"post",title:"Introduction to Building Blocks",categories:"Learn b2",id:"archive-b2-gs-intro",author:"Scott Hurrey",status:"deprecated",displayed_sidebar:"documentationSidebar"},i=void 0,s={unversionedId:"archive/b2/getting-started/archive-b2-gs-intro",id:"archive/b2/getting-started/archive-b2-gs-intro",title:"Introduction to Building Blocks",description:"This document is deprecated!",source:"@site/docs/archive/b2/getting-started/intro.md",sourceDirName:"archive/b2/getting-started",slug:"/archive/b2/getting-started/archive-b2-gs-intro",permalink:"/docs/archive/b2/getting-started/archive-b2-gs-intro",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Introduction to Building Blocks",categories:"Learn b2",id:"archive-b2-gs-intro",author:"Scott Hurrey",status:"deprecated",displayed_sidebar:"documentationSidebar"},sidebar:"documentationSidebar"},l={},c=[{value:"Data that can be accessed includes:",id:"data-that-can-be-accessed-includes",level:2},{value:"Learn More",id:"learn-more",level:3},{value:"Request a Developers License",id:"request-a-developers-license",level:3},{value:"Commercial Partnerships",id:"commercial-partnerships",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=d("VersioningTracker"),p=d("AuthorBox"),m={toc:c},h="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u26a0\ufe0f This document is deprecated!"),(0,n.kt)(u,{frontMatter:o,mdxType:"VersioningTracker"}),(0,n.kt)("h1",{id:"introduction-to-building-blocks"},"Introduction to Building Blocks"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"NOTE: For new development, Blackboard recommends building REST and LTI integrations and NOT Building Blocks(B2s). B2s do not work within the Ultra Course UI; REST and LTI works for all Learn deployment and UI options. Use the Developer AMI listed under DVBA for your Blackboard Learn server.")),(0,n.kt)("p",null,"Blackboard Building Blocks, one of several components of Blackboard Learn's open\narchitecture, allow you to enhance the online education experience for your\nstudents and faculty. You may assemble a solution of homegrown, commercial and\nopen source software and tools using Blackboard Building Blocks that best\nmeets your needs whether it is a discipline-specific tool, an integration to a\nhomegrown application or other enterprise application, or seamless integration\nto a subscription database at your library."),(0,n.kt)("p",null,"Through Blackboard Building Blocks, developers can create sharable, re-usable\nweb applications that can be deployed on Blackboard Learn. This open\narchitecture ensures that you can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"extend Blackboard Learn and incorporate new functionality"),(0,n.kt)("li",{parentName:"ul"},"provide customizations to meet discipline-specific or pedagogical needs"),(0,n.kt)("li",{parentName:"ul"},"leverage this technology to enhance and aid administration of their systems on campus"),(0,n.kt)("li",{parentName:"ul"},"automate procedures or repetitive tasks"),(0,n.kt)("li",{parentName:"ul"},"integrate with external systems or applications across your learning enterprise for example the Registrar's office, the Library to name just two"),(0,n.kt)("li",{parentName:"ul"},"customize your implementation by integrating open source or locally-developed applications and tools")),(0,n.kt)("h2",{id:"data-that-can-be-accessed-includes"},"Data that can be accessed includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Authentication and authorization information - to ensure seamless authentication and authorization between Blackboard software and other systems"),(0,n.kt)("li",{parentName:"ul"},"User data - name, course of study, contact information"),(0,n.kt)("li",{parentName:"ul"},"Course data and Enrollment records"),(0,n.kt)("li",{parentName:"ul"},"Outcomes - student quiz and test data, scores, grades, participation and activity data"),(0,n.kt)("li",{parentName:"ul"},"Content - the ability to seamlessly integrate rich content from a variety of sources"),(0,n.kt)("li",{parentName:"ul"},"System management - information to help administrators manage and monitor your Blackboard software installations")),(0,n.kt)("h3",{id:"learn-more"},"Learn More"),(0,n.kt)("p",null,"To learn more about creating Building Blocks, start\n",(0,n.kt)("a",{parentName:"p",href:"/docs/archive/b2/getting-started/archive-b2-gs-first_steps"},"here"),". To see examples of Building Blocks that have already been created,\ntake a look at released building blocks on the Blackboard Learn ",(0,n.kt)("a",{parentName:"p",href:"https://www.blackboardextensions.com/"},"extensions site")," which highlights\nBuilding Blocks produced by Blackboard Partners, or take a look at open source\nprojects contributed by the Learn developer community at OSCELOT's\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/oscelot"},"projects")," site."),(0,n.kt)("h3",{id:"request-a-developers-license"},"Request a Developers License"),(0,n.kt)("p",null,'All Blackboard Learn clients receive a Blackboard developers license at no\ncost. A developers license is a "small footprint" version of Blackboard with\nthe Community and Content Management modules turned on. It can be run on a\ndevelopment server or even a virtual machine image for development purposes.\nIf you require a developer network account visit ',(0,n.kt)("a",{parentName:"p",href:"https://blackboard.secure.force.com/"},"Behind the Blackboard")," (as an\nadministrator) or contact your sales representative."),(0,n.kt)("h3",{id:"commercial-partnerships"},"Commercial Partnerships"),(0,n.kt)("p",null,"If you are interested in becoming a Blackboard partner visit the ",(0,n.kt)("a",{parentName:"p",href:"https://www.blackboard.com/partnership/index.aspx"},"Blackboard Partnerships"),"\u2122\nprogram site. Partnering with Blackboard provides access to design guidance\nand support among other benefits."),(0,n.kt)(p,{frontMatter:o,mdxType:"AuthorBox"}))}b.isMDXComponent=!0}}]);