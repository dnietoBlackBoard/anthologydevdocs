"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[9868],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(4137));const o={layout:"post",title:"LTI Launch context added in new Window Launches",categories:"Learn UEF",id:"rest_apis-learn-uef-launch_context_added_nwl",author:"Subitha Muniasamy",toc:!0},i=void 0,s={unversionedId:"rest-apis/premium-apis/uef/tutorials/rest_apis-learn-uef-launch_context_added_nwl",id:"rest-apis/premium-apis/uef/tutorials/rest_apis-learn-uef-launch_context_added_nwl",title:"LTI Launch context added in new Window Launches",description:"Introduction",source:"@site/docs/rest-apis/premium-apis/uef/tutorials/lti_launch_context_added.md",sourceDirName:"rest-apis/premium-apis/uef/tutorials",slug:"/rest-apis/premium-apis/uef/tutorials/rest_apis-learn-uef-launch_context_added_nwl",permalink:"/docs/rest-apis/premium-apis/uef/tutorials/rest_apis-learn-uef-launch_context_added_nwl",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"LTI Launch context added in new Window Launches",categories:"Learn UEF",id:"rest_apis-learn-uef-launch_context_added_nwl",author:"Subitha Muniasamy",toc:!0},sidebar:"documentationSidebar",previous:{title:"Migrate an LTI Tool to UEF",permalink:"/docs/rest-apis/premium-apis/uef/tutorials/rest_apis-learn-uef_tutorial_lti"},next:{title:"Security and Tokens",permalink:"/docs/rest-apis/premium-apis/uef/tutorials/rest_apis-learn-uef-security-and-tokens"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Updated response for existing EventTypes",id:"updated-response-for-existing-eventtypes",level:3},{value:"Sample Response:",id:"sample-response",level:4},{value:"New response for new EventTypes",id:"new-response-for-new-eventtypes",level:3},{value:"Sample response:",id:"sample-response-1",level:4}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=p("VersioningTracker"),d=p("AuthorBox"),m={toc:u},h="wrapper";function f(e){let{components:t,...i}=e;return(0,a.kt)(h,(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c,{frontMatter:o,mdxType:"VersioningTracker"}),(0,a.kt)("h1",{id:"lti-launch-context-added-in-new-window-launches"},"LTI Launch context added in new Window Launches"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This enhancement to the UEF integration framework provides the ability for an integration to send a newEvent ",(0,a.kt)("strong",{parentName:"p"},"lti:launch")," even when the route is directed to new window launch from the LTI service, which inclujdes toolHref (launchUrl) and the placementId along with it."),(0,a.kt)("h3",{id:"updated-response-for-existing-eventtypes"},"Updated response for existing EventTypes"),(0,a.kt)("p",null,"Currently when navigation to the LTI laumch inside the same page, the route event type we subscribe to is eventType: ",(0,a.kt)("strong",{parentName:"p"},'"route","route:changing"'),". As expected the LTI launch in the same window, will have the previously defined events and the launch URL is added as toolHref and the placementId in the same url as the ",(0,a.kt)("strong",{parentName:"p"},"blti_placement_id"),"."),(0,a.kt)("h4",{id:"sample-response"},"Sample Response:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Existing - Subscribing Events")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  type: "event:event",\n  eventType: "route",\n   routeData: {\n    "coursesOrOrganizations": "courses",\n    "courseId": "_3_1",\n    "isLaunchedInNewWindow": true/false,\n    "toolHref": "https://mylearn.int.bbpd.io/webapps/blackboard/execute/blti/launchPlacement?blti_placement_id=_12_1&content_id=_35_1&course_id=_3_1&wrapped=true&from_ultra=true"\n    }   ...\n}\n')),(0,a.kt)("h3",{id:"new-response-for-new-eventtypes"},"New response for new EventTypes"),(0,a.kt)("p",null,"This is when we select new window options while creating placements in LTI.\nAs expected the LTI launch in a new window will have the new mentioned events and launch url is added as toolHref and placementId in the same irl as ",(0,a.kt)("strong",{parentName:"p"},"blti_placement_id"),"."),(0,a.kt)("h4",{id:"sample-response-1"},"Sample response:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'New - Subscribing Events - eventType: "lti:launch"')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  type: "event:event",\n  eventType: "lti:launch",\n   launchData: {\n    "coursesOrOrganizations": "courses",\n    "courseId": "_3_1",\n    "isLaunchedInNewWindow": true/false,\n    "toolHref": "https://mylearn.int.bbpd.io/webapps/blackboard/execute/blti/launchPlacement?blti_placement_id=_12_1&content_id=_35_1&course_id=_3_1&wrapped=true&from_ultra=true"\n    }   ...\n\n}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"LTI launch context added",src:n(7374).Z,width:"2984",height:"1400"})),(0,a.kt)(d,{frontMatter:o,mdxType:"AuthorBox"}))}f.isMDXComponent=!0},7374:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/lti_launch_context_added_1-041f66955b24bd146e812eb8a92a793e.png"}}]);