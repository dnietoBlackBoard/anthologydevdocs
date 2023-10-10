"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[7885],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,m=d["".concat(l,".").concat(u)]||d[u]||g[u]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(4137));const a={title:"Ultra Proctoring Service Integration - IMS Proctoring Spec + UEF",parent:"lti",id:"proctoring-service-integration",published:"",edited:"",author:"Mark Kauffman"},i=void 0,s={unversionedId:"lti/proctoring/proctoring-service-integration",id:"lti/proctoring/proctoring-service-integration",title:"Ultra Proctoring Service Integration - IMS Proctoring Spec + UEF",description:"Overview",source:"@site/docs/lti/proctoring/ultra-proctoring-service-integration.md",sourceDirName:"lti/proctoring",slug:"/lti/proctoring/proctoring-service-integration",permalink:"/docs/lti/proctoring/proctoring-service-integration",draft:!1,tags:[],version:"current",frontMatter:{title:"Ultra Proctoring Service Integration - IMS Proctoring Spec + UEF",parent:"lti",id:"proctoring-service-integration",published:"",edited:"",author:"Mark Kauffman"},sidebar:"documentationSidebar",previous:{title:"Migrating from LTI 1.0/1.1 to 1.3",permalink:"/docs/lti/migrating/migrating-from-lt1.1-to-lti1.3"},next:{title:"proctoring-service-tutorials",permalink:"/docs/lti/proctoring/proctoring-service-tutorials"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Frameworks and Specifications",id:"frameworks-and-specifications",level:2},{value:"Configuration",id:"configuration",level:2},{value:"LTI Tool",id:"lti-tool",level:3},{value:"Create a new group for your organization",id:"create-a-new-group-for-your-organization",level:5},{value:"Register a new application (if you do not already have one)",id:"register-a-new-application-if-you-do-not-already-have-one",level:5},{value:"LTI Placements",id:"lti-placements",level:3},{value:"Ultra Extension",id:"ultra-extension",level:4},{value:"Create new Ultra Extension placement:",id:"create-new-ultra-extension-placement",level:5},{value:"Proctoring",id:"proctoring",level:4},{value:"Create new Ultra Extension placement:",id:"create-new-ultra-extension-placement-1",level:5},{value:"Ultra Extension Framework",id:"ultra-extension-framework",level:3},{value:"proctoring-service:register",id:"proctoring-serviceregister",level:4},{value:"proctoring-service:register",id:"proctoring-serviceregister-1",level:4},{value:"proctoring-service:settings-saved",id:"proctoring-servicesettings-saved",level:4},{value:"proctoring-service:settings-saved",id:"proctoring-servicesettings-saved-1",level:4},{value:"event:subscribe",id:"eventsubscribe",level:4},{value:"portal:render",id:"portalrender",level:4},{value:"Accessing assessment settings",id:"accessing-assessment-settings",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=p("VersioningTracker"),g=p("AuthorBox"),u={toc:c},m="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(m,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(d,{frontMatter:a,mdxType:"VersioningTracker"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"There are many proctoring solutions available in the market today. Our clients license a variety of these services and would like to continue to use them in Ultra. Given the sheer number of proctoring services out there, it is not feasible for Blackboard to build and maintain customized integrations with each one. Therefore there was a need for us to develop a solution that would allow all proctoring solutions to be able to integrate with Ultra."),(0,o.kt)("h2",{id:"frameworks-and-specifications"},"Frameworks and Specifications"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Ultra Extension Framework:"),"\xa0This solution utilizes Ultra Extension Framework, allowing proctoring services to render settings directly inside of Ultra assessment settings. This provides a uniform experience for instructors as proctoring settings are now amongst other settings."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"IMS Proctoring Specification:\xa0IMS global recently released V1 of a proctoring spec. This spec is built on top of LTI and provides a baseline for how assessment platforms communicate with proctoring services. As part of this solution, Learn has been updated (and certified by IMS) to support this spec and utilize it for proctoring. Below is a diagram outlining the spec:")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7890).Z,width:"959",height:"1083"})),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"lti-tool"},"LTI Tool"),(0,o.kt)("p",null,"Each proctoring provider will need to create an account on the Dev Portal and register an application. Follow the steps below:"),(0,o.kt)("h5",{id:"create-a-new-group-for-your-organization"},"Create a new group for your organization"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Click "My Groups" in the header'),(0,o.kt)("li",{parentName:"ol"},'Click "Create new group"\n',(0,o.kt)("img",{src:n(294).Z,width:"3262",height:"886"})),(0,o.kt)("li",{parentName:"ol"},"Enter your organization name as the group name")),(0,o.kt)("p",null,"Note: Ultra Extension Framework requires Premium API Access. This will need to be granted to your group by a dev portal administrator."),(0,o.kt)("h5",{id:"register-a-new-application-if-you-do-not-already-have-one"},"Register a new application (if you do not already have one)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click + sign to add a new application\n",(0,o.kt)("img",{src:n(5164).Z,width:"3296",height:"912"})),(0,o.kt)("li",{parentName:"ol"},"Fill out all required fields"),(0,o.kt)("li",{parentName:"ol"},"Select the group name that you created above in step 1"),(0,o.kt)("li",{parentName:"ol"},'Slide the toggle next to "My Integration supports LTI 1.3" to enter information for LTI 1.3\n',(0,o.kt)("img",{src:n(5870).Z,width:"3300",height:"1468"}))),(0,o.kt)("h3",{id:"lti-placements"},"LTI Placements"),(0,o.kt)("p",null,"Two types of LTI placements will need to be created to successfully integrates as a proctoring service."),(0,o.kt)("h4",{id:"ultra-extension"},"Ultra Extension"),(0,o.kt)("p",null,"id: rest_apis-premium-apis-uef-getting_started\nid: rest_apis-premium-apis-uef-getting_started\nThis placement will be the primary means of communication between your application and Ultra Extension Framework. Ultra Extension Framework will be used to render the settings of each proctoring service inside the assessment settings of Ultra. Once your application is authorized with Ultra Extension Framework, your app will be able to use the API to register as a proctoring service and provide HTML to display. ",(0,o.kt)("a",{parentName:"p",href:"/docs/rest-apis/premium-apis/uef/getting-started"},"See for more information")," about UEF including tutorials on how to get started."),(0,o.kt)("h5",{id:"create-new-ultra-extension-placement"},"Create new Ultra Extension placement:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'From the "My Applications" screen click the ... menu next to your application'),(0,o.kt)("li",{parentName:"ol"},'Select "Manage Placements"'),(0,o.kt)("li",{parentName:"ol"},'Click the "Register" Button'),(0,o.kt)("li",{parentName:"ol"},'Fill out required fields. Be sure to select "Ultra extension" as Type:\n',(0,o.kt)("img",{src:n(1698).Z,width:"2732",height:"1590"})),(0,o.kt)("li",{parentName:"ol"},'Click "Register placement"')),(0,o.kt)("h4",{id:"proctoring"},"Proctoring"),(0,o.kt)("p",null,"This placement will be used to communicate with your application when a student takes starts a proctored assessment. This placement type is restricted and will need to be created by a Dev Portal admin at Blackboard."),(0,o.kt)("h5",{id:"create-new-ultra-extension-placement-1"},"Create new Ultra Extension placement:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'From the "My Applications" screen click the ... menu next to your application'),(0,o.kt)("li",{parentName:"ol"},'Select "Manage Placements"'),(0,o.kt)("li",{parentName:"ol"},'Click the "Register" Button'),(0,o.kt)("li",{parentName:"ol"},'Fill out required fields. Be sure to select "Proctoring" as Type:\n',(0,o.kt)("img",{src:n(1245).Z,width:"2366",height:"1600"})),(0,o.kt)("li",{parentName:"ol"},'Click "Register placement"')),(0,o.kt)("h3",{id:"ultra-extension-framework"},"Ultra Extension Framework"),(0,o.kt)("p",null,"Now that your LTI tool and placements are configured and you have authorized with UEF, it's time to register as a proctoring service with UEF. Below is an outline of events that will be of interest to you."),(0,o.kt)("h4",{id:"proctoring-serviceregister"},"proctoring-service:register"),(0,o.kt)("p",null,"You will need to register as a proctoring service with UEF. At this step, you will need the unique handle of the proctoring placement supplied by Blackboard."),(0,o.kt)("h4",{id:"proctoring-serviceregister-1"},"proctoring-service:register"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Tell UEF we are a proctoring service\nsendMessage({\n    type: 'proctoring-service:register',\n    proctoringPlacementHandle: <unique_handle_goes_here>\n});\n\n\n// UEF sent a new message\nif (msg.data.type === 'proctoring-service:register') {\n\n   // This is UEF responding to your message. A status will be included as well as an error if something went wrong\n   console.log(msg.data.proctoringPlacementHandle);\n   console.log(msg.data.status);\n   console.log(msg.data.errorMessage);\n}\n\n")),(0,o.kt)("h4",{id:"proctoring-servicesettings-saved"},"proctoring-service:settings-saved"),(0,o.kt)("p",null,"UEF will send this message when the user saves the assessment settings. This is to notify the proctoring service to save off the current settings for this assessment. This is an asynchronous message so UEF will wait for your response until the timeout is reached."),(0,o.kt)("h4",{id:"proctoring-servicesettings-saved-1"},"proctoring-service:settings-saved"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"if (msg.data.type === 'proctoring-service:settings-saved') {\n   // Settings were saved for this contentId\n   console.log(msg.data.contentId);\n\n   // Status of proctoring\n   console.log(msg.data.enabled);\n\n\n   // Your response back to UEF after you have done what you need to\n   sendMessage({\n      type: 'proctoring-service:settings-saved:response',\n      correlationId: msg.data.correlationId,\n      success: true,\n      error: undefined\n   });\n}\n")),(0,o.kt)("h4",{id:"eventsubscribe"},"event:subscribe"),(0,o.kt)("p",null,"You will need to subscribe to portal:new events. Once subscribed, UEF will notify you when a portal (an area to host content) becomes visible in the UI. In this case when the proctoring configuration panel is opened."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"event:subscribe")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Tell UEF we want to subscribe to portal events\nsendMessage({\n    type: 'event:subscribe',\n    subscriptions: ['portal:new', 'portal:remove']\n});\n\n// UEF sent a new message\nif (msg.data.type === 'event:event') {\n\n    // The event type is a new portal\n    if (msg.data.eventType === 'portal:new') {\n\n       // Name of the portal in view\n       console.log(msg.data.selector)\n\n       // ID of portal in view\n       console.log(msg.data.portalId)\n\n\n       // Any specific data relavant to this portal\n       console.log(msg.data.selectorData)\n    }\n}\n")),(0,o.kt)("h4",{id:"portalrender"},"portal:render"),(0,o.kt)("p",null,"This is the message the proctoring service will send to UEF to render the proctoring settings. The selector for proctoring panel is\xa0course.content.assessment.settings.proctoring.panel.settings:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"portal:render")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// UEF sent a new message\nif (msg.data.type === 'event:event') {\n\n    // The event type is a new portal\n    if (msg.data.eventType === 'portal:new') {\n\n       // Check if this matches the proctoring panel selector\n       if (msg.data.selector === 'course.content.assessment.settings.proctoring.panel.settings') {\n\n          // ID of this portal. This must be sent back to UEF in the portal:render message\n          const portalId = msg.data.portalId;\n\n          // contentId is included for convience in the selectorData\n          console.log(msg.data.selectorData.contentId);\n\n          const contentsToSend = {\n             tag: 'div',\n             children: [{\n                tag: 'span',\n                children: `Proctoring Service Settings`\n            }]\n          };\n\n          // Send message to UEF to render this content\n          sendMessage({\n             type: \"portal:render\",\n             portalId: portalId,\n             contents: contentsToSend\n          });\n       }\n    }\n}\n")),(0,o.kt)("h2",{id:"accessing-assessment-settings"},"Accessing assessment settings"),(0,o.kt)("p",null,"Pre-requisites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create an Ultra course"),(0,o.kt)("li",{parentName:"ul"},"Create a Test or Assignment")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click the gear icon next to "Test Settings"\n',(0,o.kt)("img",{src:n(3870).Z,width:"3158",height:"1126"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Scroll down and click the "Configure proctoring settings" link\n',(0,o.kt)("em",{parentName:"p"},"Note: If this section is not present, the proctoring placement has likely not been created or is set to unavailable.\n",(0,o.kt)("img",{src:n(7946).Z,width:"896",height:"1458"})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the setup was done correctly, you should see your proctoring service in the dropdown menu. If the toggle is enabled the contents you passed to Ultra Extension Framework in the portal:render message should display in the (red) box in the image below\n",(0,o.kt)("img",{src:n(1093).Z,width:"898",height:"1546"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the following error message is shown"),(0,o.kt)("p",{parentName:"li"},"   ",(0,o.kt)("img",{src:n(8330).Z,width:"896",height:"1560"})),(0,o.kt)("p",{parentName:"li"},"   One of the following may be true:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ultra Extension placement has not been created or is set to unavailable"),(0,o.kt)("li",{parentName:"ul"},"Authorization with Ultra Extension Framework failed"),(0,o.kt)("li",{parentName:"ul"},"Error in your JS script Ultra Extension Framework is calling",(0,o.kt)(g,{frontMatter:a,mdxType:"AuthorBox"}))))))}h.isMDXComponent=!0},7890:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Aspose.Words.aaa5fe5c-6d33-4e17-8ca7-9a778984b297.001-f6991e82c8566d52f2b35ee5ba04fda3.jpeg"},294:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Aspose.Words.aaa5fe5c-6d33-4e17-8ca7-9a778984b297.002-a613308bff9cb446cb8f7bd5756c5798.png"},5164:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Aspose.Words.aaa5fe5c-6d33-4e17-8ca7-9a778984b297.003-21f017adde2e1dd59157d260eeae20c7.png"},5870:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Aspose.Words.aaa5fe5c-6d33-4e17-8ca7-9a778984b297.004-0e4c250ddadfabd98dd3e71833a55055.png"},1698:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Aspose.Words.aaa5fe5c-6d33-4e17-8ca7-9a778984b297.005-4323bf250ea01c89b421f57278e05110.png"},1245:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Aspose.Words.aaa5fe5c-6d33-4e17-8ca7-9a778984b297.006-4c7a0de25034269916f29d8e95241939.png"},3870:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Aspose.Words.aaa5fe5c-6d33-4e17-8ca7-9a778984b297.007-953c65d866561786007303a84672daeb.png"},7946:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Aspose.Words.aaa5fe5c-6d33-4e17-8ca7-9a778984b297.008-936e730d76d51a27b09f0998d9961fa5.png"},1093:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Aspose.Words.aaa5fe5c-6d33-4e17-8ca7-9a778984b297.009-ce52b4728ac846b3fe1fb66ad58ca3c8.png"},8330:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Aspose.Words.aaa5fe5c-6d33-4e17-8ca7-9a778984b297.010-e79a4196ae5a46613269be3a0925c789.png"}}]);