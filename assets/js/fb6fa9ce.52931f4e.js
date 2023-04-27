"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[3087],{4137:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||n;return o?a.createElement(h,i(i({ref:t},u),{},{components:o})):a.createElement(h,i({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<n;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5834:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=o(7462),r=(o(7294),o(4137));const n={layout:"post",title:"Groups, Site quotas and rate limits",id:"rest_apis-learn-admin-group_quotas_rates",categories:"Learn REST",author:"Ryan Haber",doctitle:"Developer Groups, Site quotas and Rate limits"},i="Developer Groups, Site quotas and Rate limits",s={unversionedId:"REST APIs/Learn/Admin/rest_apis-learn-admin-group_quotas_rates",id:"REST APIs/Learn/Admin/rest_apis-learn-admin-group_quotas_rates",title:"Groups, Site quotas and rate limits",description:"Overview",source:"@site/docs/REST APIs/Learn/Admin/groups-quotas-rates.md",sourceDirName:"REST APIs/Learn/Admin",slug:"/REST APIs/Learn/Admin/rest_apis-learn-admin-group_quotas_rates",permalink:"/docs/REST APIs/Learn/Admin/rest_apis-learn-admin-group_quotas_rates",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Groups, Site quotas and rate limits",id:"rest_apis-learn-admin-group_quotas_rates",categories:"Learn REST",author:"Ryan Haber",doctitle:"Developer Groups, Site quotas and Rate limits"},sidebar:"documentationSidebar",previous:{title:"Rest registry",permalink:"/docs/REST APIs/Learn/Admin/rest-apis-learn-admin-cloud_registry"},next:{title:"Production groups",permalink:"/docs/REST APIs/Learn/Admin/rest_apis-learn-admin-prod-groups"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Developer Groups",id:"developer-groups",level:3},{value:"Production Groups",id:"production-groups",level:3},{value:"Site Quotas",id:"site-quotas",level:3},{value:"Rate Limits",id:"rate-limits",level:3},{value:"Increasing Site Quota and Rate Limits",id:"increasing-site-quota-and-rate-limits",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-groups-site-quotas-and-rate-limits"},"Developer Groups, Site quotas and Rate limits"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"With the Blackboard Developer Portal, you can manage use of your Learn\ninstance's REST APIs and applications that use those APIs. Groups of\ndevelopers work on one or more applications and each group is subject to a\nlimit on the number of sites that can use their applications and the number of\nAPI requests their applications can make daily."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," If you are a Blackboard client, a Blackboard Partner / Vendor / Developer of a REST Application should NEVER tell you to go to the developer portal and create an App ID with the associated key/secret to install their application. They should never tell you to apply for a Rate/Site increase for their application. Blackboard DOES NOT support that model. Every REST Application developer should give you an App ID to install their REST App and tell you how to configure a system role for its use. Period. The REST Application developer needs to request the increases they need to run their application themselves. If they ask you to go to developer.anthology.com and get an App ID/Key/Secret, please tell them that is wrong. They should have exactly one App ID for their production REST application that they are asking you to install."),(0,r.kt)("p",null,"Contractors are an exception to this policy as they are producing an\nintegration on your, the Blackboard client, behalf. Questions regarding the\npolicy and whether you are impacted may be asked here, or posted to\n",(0,r.kt)("a",{parentName:"p",href:"mailto:developers@anthology.com"},"developers@anthology.com"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rate Limits: By default you get 10.000 calls every 24 hours per site. If you need more, follow the instructions in last two sections of this page.")),(0,r.kt)("h3",{id:"developer-groups"},"Developer Groups"),(0,r.kt)("p",null,"You manage control of an application using developer groups. When you create\nyour login on the developer portal, you also create a group of one that\nincludes only yourself and is named after you. You can create more groups on\nthe ",(0,r.kt)("strong",{parentName:"p"},"My Groups")," page. You can add other registered users to your groups."),(0,r.kt)("p",null,"When you create an application, you assign it to a group, and members of that\ngroup can access it."),(0,r.kt)("p",null,"Before moving to production, you must designate one group as the production\ngroup. The best practice is to name your production group after your\norganization. ","[See the Group Naming Requirements in this document for further details]","(/REST APIs/Learn/Admin/production-groups)."),(0,r.kt)("p",null,"Each developer group is subject to maximum site quotas and to daily limits on\nthe number of API requests made. These limits start relatively low because\nthey are intended for development and testing only. To qualify for production-\nlevel site quotas and rate limits, you must designate a production group. To\ndesignate one of your groups as a production follow the steps provided at the\nend of this document. For more information about using, managing, and naming\ngroups, see ","[Developer Portal Development and Production Groups]","(/REST APIs/Learn/Admin/production-groups)"),(0,r.kt)("h3",{id:"production-groups"},"Production Groups"),(0,r.kt)("p",null,"To move into production and allow your application to be used more widely,\n",(0,r.kt)("strong",{parentName:"p"},"you")," must create a production group. You create the group then tell\nBlackboard what that group name is following the process given at the bottom\nof this document. A developer group is designated as a production group when\nyou name it after your company using initial upper-case camel case, e.g.,\nYourCompanyName. The production group name identifies your REST application to\nthe Learn administrator when they install your application."),(0,r.kt)("h3",{id:"site-quotas"},"Site Quotas"),(0,r.kt)("p",null,"Each developer group has a quota of the maximum number of Learn\nsites that can access the group's applications, regardless of number of\napplications. You are responsible for keeping track of the sites where your\nLearn REST Application is installed. If a client attempts to install your REST\napplication but the site quota is exceeded for the developer group that\nmanages it, the client will get an error message when they try to install it.\nThe error message typically reads something like ",(0,r.kt)("em",{parentName:"p"},"Failure: Application\ndeveloper has exceeded maximum number of client installations. Please contact\nthe developer.")),(0,r.kt)("h3",{id:"rate-limits"},"Rate Limits"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We provide by default 10.000 calls every 24 hours. If you need more, follow the instructions in last section of this page.")),(0,r.kt)("p",null,"A rate limit is the number of API requests that can come each day from\napplications that are registered to your developer group. For example, if you\nhave a 100K limit and three applications, each application will use a portion\nof that 100K limit. ",(0,r.kt)("em",{parentName:"p"},"Your application should monitor the number of requests used so far at an\napplication level using the http headers provided in each request response.")," Inform your user when your application stops or is about to stop working because it hit the rate limit."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Header"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X-Rate-Limit-Limit"),(0,r.kt)("td",{parentName:"tr",align:null},"The rate limit ceiling for the given development group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X-Rate-Limit-Remaining"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of requests left for the 24-hour period for the development group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X-Rate-Limit-Reset"),(0,r.kt)("td",{parentName:"tr",align:null},"The remaining time before the rate limit resets, given in UTC epoch seconds")))),(0,r.kt)("h3",{id:"increasing-site-quota-and-rate-limits"},"Increasing Site Quota and Rate Limits"),(0,r.kt)("p",null,"If you are a Blackboard partner or licensed client when you need to increase\nthe site quota and rate limit for your production group, ",(0,r.kt)("strong",{parentName:"p"},"please open a\nticket on Behind the Blackboard"),". Provide the following in your request:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Production group name"),". Designate one of your groups as a production group if\nyou haven\u2019t. Follow the process described above for creating the group name.\nThis should be your CamelCaseCompanyName. Tell us the name in the ticket."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Developer email that owns the production group"),'. One of your developers\ncreated the account that is creating REST API apps and groups on\ndeveloper.anthology.com. When that developer creates your\nCamelCaseCompanyName production group, that developer\'s email is the\n"Developer email" referenced here.'),(0,r.kt)("li",{parentName:"ul"},"A description of the application, both what it does and which APIs used.")),(0,r.kt)("p",null,"If you are an open-initiative developer please make your request by email to\n",(0,r.kt)("a",{parentName:"p",href:"mailto:developers@anthology.com"},"developers@anthology.com"),". In your\nrequest, provide the same information as indicated above."))}c.isMDXComponent=!0}}]);