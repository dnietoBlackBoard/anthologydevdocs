"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[7572],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3397:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(7462),o=(a(7294),a(4137));const r={title:"UEF Tutorials - LTI Launch From Ultra Course Leftnav",categories:"Learn UEF",author:"Mark Kauffman",id:"tutorials-course-leftnav",published:"2023-10-10",edited:"2023-10-10"},l=void 0,i={unversionedId:"rest-apis/premium-apis/uef/tutorials/tutorials-course-leftnav",id:"rest-apis/premium-apis/uef/tutorials/tutorials-course-leftnav",title:"UEF Tutorials - LTI Launch From Ultra Course Leftnav",description:"Overview",source:"@site/docs/rest-apis/premium-apis/uef/tutorials/tutorials-course-leftnav.md",sourceDirName:"rest-apis/premium-apis/uef/tutorials",slug:"/rest-apis/premium-apis/uef/tutorials/tutorials-course-leftnav",permalink:"/docs/rest-apis/premium-apis/uef/tutorials/tutorials-course-leftnav",draft:!1,tags:[],version:"current",frontMatter:{title:"UEF Tutorials - LTI Launch From Ultra Course Leftnav",categories:"Learn UEF",author:"Mark Kauffman",id:"tutorials-course-leftnav",published:"2023-10-10",edited:"2023-10-10"},sidebar:"documentationSidebar",previous:{title:"Security and Tokens - Authentication",permalink:"/docs/rest-apis/premium-apis/uef/tutorials/security-and-tokens"},next:{title:"UEF Tutorials",permalink:"/docs/rest-apis/premium-apis/uef/tutorials/"}},s={},c=[{value:"Overview",id:"overview",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"How To Ultra Extension Framework - Create A Link to Launch An LTI Managed Placement",id:"how-to-ultra-extension-framework---create-a-link-to-launch-an-lti-managed-placement",level:3},{value:"Sample Code",id:"sample-code",level:3},{value:"Explanation of the Video and Associated Code",id:"explanation-of-the-video-and-associated-code",level:3},{value:"Notice",id:"notice",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=p("VersioningTracker"),d=p("AuthorBox"),m={toc:c},h="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{frontMatter:r,mdxType:"VersioningTracker"}),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"We've had a lot of requests asking about how to add an LTI launch to an Ultra course's left navigation (Details & Actions). If you have that question, this page is for you."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Group your application is in must be UEF enabled. If it's not, file a Behind the Blackboard Support ticket. Provide the developer email address and the Group your UEF application will be in, NOT the application ID. The application ID is usless informaiton for this. If you are a vendor, you must have a Partnership level that is Bronze or higher. See See ",(0,o.kt)("a",{parentName:"p",href:"/docs/partners/partners-become_a_partner"},"Become a Blackboard Partner"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Complete the ",(0,o.kt)("a",{parentName:"p",href:"/docs/rest-apis/premium-apis/uef/tutorials/"},"Ultra Extension Framework")," tutorial.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You know the handle of the managed placement for your LTI tool that you want the click on the link in the left nav to launch. You can find this by going to the Learn admin page, opening the LTI tools, looking at your tool's managed placements, click edit on the one you want, and copy the handle. You'll see where this is used in the code in number six of the explanation below."))),(0,o.kt)("h3",{id:"how-to-ultra-extension-framework---create-a-link-to-launch-an-lti-managed-placement"},"How To Ultra Extension Framework - Create A Link to Launch An LTI Managed Placement"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=1SNQXsaPLKg&ab_channel=AnthologyDevelopers"},"This video")," demonstrates creating a link in the Ultra course Details & Actions section that does an LTI launch."),(0,o.kt)("h3",{id:"sample-code"},"Sample Code"),(0,o.kt)("p",null,"You may find the related code used on the video here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/blackboard/BBDN-UEF-Python/tree/102-UEF-COURSE-LEFTNAV"},"GitHub BBDN-UEF-Python")," "),(0,o.kt)("h3",{id:"explanation-of-the-video-and-associated-code"},"Explanation of the Video and Associated Code"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We clear the browser cache often when making changes to integration file. Your browser will cache it so when you make changes if you don't clear the browser cache you won't see your work.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Registration for a course detail message. In our onAuthorizedWithUltra function we add the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"messageChannel.postMessage({\n   type: \"course:detail:register\",\n   registrationName: 'UEF course:detail Test',\n});  \n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add our link to the course details section. Do this as follows. "))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"if (message.data.eventType === 'portal:new' && message.data.selector === 'course.outline.details') {\n    showCourseDetails(message.data.portalId, 'UEF cod Test', 'Click Here');\n}\n\nfunction showCourseDetails (portalId, titleName, linkName) {\n    messageChannel.postMessage({\n        type: 'portal:render',\n        portalId: portalId,\n        contents: {\n            tag: 'div',\n            props: {\n                className: 'uef--course-details--container',\n            },\n            children: [\n                {\n                    tag: 'button',\n                    props: {\n                        className: 'uef--button--course-details',\n                        onClick: {\n                            callbackId: 'course-details-test',\n                            mode: 'sync',\n                        }\n                    },\n\n... for brevity. Read the rest of the code. Of interest here is the callbackId: 'course-details-test'\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"In our onMessageFromUltra function we add code to watch for the user clicking the link, the callback. It will call the openPanelCD function to open the panel that causes the LTI launch and displays its contents.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Our link was clicked. We get a callback and tell Ultra to open our course details panel\nif (message.data.type === 'portal:callback') {\n    switch(message.data.callbackId) {\n        case 'course-details-test':\n            openPanelCD('full', localStorage.getItem('context'));\n            break;\n    }\n}\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Our openPanelCD fuction posts a message to Ultra to open a new panel. We'll have this panel opening make the LTI launch and display the response.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// COURSE-LEFTNAV tell Ultra to open our panel. It will send us a message back after\n// it does. Then we render some content there in panel-3\nfunction openPanelCD(panelSize, data) {\n    localStorage.setItem('context', data);\n    localStorage.setItem('action', 'SHOW_PANEL');\n\n    messageChannel.postMessage({\n        type: 'portal:panel',\n        correlationId: 'panel-3',\n        panelType: panelSize,\n        panelTitle: 'UEF Courses Details Demo',\n        attributes: {\n            onClose: {\n                callbackId: 'panel-3-close',\n            },\n        },\n    });\n}\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"We add code to our renderPanelContents function. renderPanelContents gets called when Ultra responds to any of our requests to open a new panel. Remember that the handle in the code will be unique to your tool's managed placement.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"function renderPanelContents(message) {\n    ... for brevity\n    // You MUST change the handle: value to match that of your LTI managed placment handle.\n    // In summary the panel got opened so we put the contents of an LTI launch within.\n    if (message.data.correlationId === 'panel-3') {\n\n        panelId = message.data.portalId;\n        \n        const contentsToSendLti = {\n            tag: 'LtiLaunch',\n            props: {\n              handle: 'ce9718549a1d4151b62e9fdfeff15dff',\n              customParameters: JSON.stringify({\n                'keya': 'foo',\n                'keyb': 'bar',\n                'keyc': 'baz'\n              }),\n              style: {\n                width: '75%',\n                height: '75%',\n              },\n            }\n        }\n\n        messageChannel.postMessage({\n            type: 'portal:render',\n            portalId: message.data.portalId,\n            contents: contentsToSendLti\n        });\n\n    } \n")),(0,o.kt)("h3",{id:"notice"},"Notice"),(0,o.kt)("p",null,"Before releasing a UEF integration, that uses the UEF Premium APIs, to production you will be required to meet a certain level of Blackboard Partnership. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/partners/partners-become_a_partner"},"Become a Blackboard Partner"),"."),(0,o.kt)(d,{frontMatter:r,mdxType:"AuthorBox"}))}f.isMDXComponent=!0}}]);