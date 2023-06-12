"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[7783],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},8482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(4137));const o={layout:"post",title:"LTI Events",id:"caliper-events-lti_events",categories:"Standards",author:"Scott Hurrey"},s="LTI Events",l={unversionedId:"Standards/Caliper/events/caliper-events-lti_events",id:"Standards/Caliper/events/caliper-events-lti_events",title:"LTI Events",description:"Learn's Caliper Analytics stream emits an LTIEvent when any user:",source:"@site/docs/Standards/Caliper/events/lti-events.md",sourceDirName:"Standards/Caliper/events",slug:"/Standards/Caliper/events/caliper-events-lti_events",permalink:"/docs/Standards/Caliper/events/caliper-events-lti_events",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"LTI Events",id:"caliper-events-lti_events",categories:"Standards",author:"Scott Hurrey"},sidebar:"documentationSidebar",previous:{title:"Grade Events",permalink:"/docs/Standards/Caliper/events/caliper-events-grade_events"},next:{title:"Session Events",permalink:"/docs/Standards/Caliper/events/caliper-events-sessions"}},i={},c=[{value:"LTIEvent",id:"ltievent",level:3},{value:"Sample Payload",id:"sample-payload",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lti-events"},"LTI Events"),(0,r.kt)("p",null,"Learn's Caliper Analytics stream emits an LTIEvent when any user:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Clicks an LTI link")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Returns from an LTI link"))),(0,r.kt)("p",null,"Here is some of the key data that is associated with these events:"),(0,r.kt)("h3",{id:"ltievent"},"LTIEvent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"actor.@id")," - contains a unique ID of the user (the ID is known to Bb)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"extensions")," - contains a tag called ",(0,r.kt)("strong",{parentName:"p"},"bb:user.externalId")," with the batch_uid for the user"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"object.launchUrl")," - URL of the LTI Provider"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"object.launchParameters")," - name/value pairs passed"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"group.courseNumber")," - the course batch_uid (i.e. the ID sent in by LIS or Data Integration)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"action")," - LoggedIn, LoggedOut"),(0,r.kt)("h3",{id:"sample-payload"},"Sample Payload"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": [\n    "http://caliper.blackboard.com/ctx/caliper/v1/Context",\n    "http://purl.imsglobal.org/ctx/caliper/v1p1"\n  ],\n  "type": "http://caliper.blackboard.com/caliper/v1/LTIEvent",\n  "id": "6b495fe6-cdd9-459a-aa1f-39e4979b87f5",\n  "actor": {\n    "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/a118bba8-5378-4533-899b-8862ac59db03/users/ffc08009f0884c059192bac549e117b2",\n    "type": "Person",\n    "extensions": {\n      "bb:user.id": "_1_1",\n      "bb:user.externalId": "administrator"\n    }\n  },\n  "action": "LoggedIn",\n  "object": {\n    "@context": [\n      "http://caliper.blackboard.com/ctx/caliper/v1/Context",\n      "http://purl.imsglobal.org/ctx/caliper/v1p1"\n    ],\n    "type": "http://caliper.blackboard.com/caliper/v1/LTILaunchInfo",\n    "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/a118bba8-5378-4533-899b-8862ac59db03/ltiLaunches/d0b8a363-7484-4ee6-b458-0f0e0ce5f05f",\n    "name": "",\n    "description": "",\n    "launchUrl": "https://ltiah.herokuapp.com/launch_lti",\n    "launchParameters": {\n      "tool_consumer_instance_contact_email": "admin@support-ultra-test.blackboard.com",\n      "tool_consumer_info_product_family_code": "BlackboardLearn",\n      "oauth_signature_method": "HMAC-SHA1",\n      "tool_consumer_info_version": "3900.4.0-rel.14+d8ea606",\n      "oauth_signature": "PEPikqcsphXcnKe/WQajV2VDNcQ=",\n      "launch_presentation_document_target": "window",\n      "lti_message_type": "basic-lti-launch-request",\n      "custom_caliper_profile_url": "https://support-ultra-test.blackboard.com/learn/api/v1/telemetry/caliper/profile/ultra",\n      "ext_launch_id": "d0b8a363-7484-4ee6-b458-0f0e0ce5f05f",\n      "lis_person_sourcedid": "administrator",\n      "ext_lms": "bb-3900.4.0-rel.14+d8ea606",\n      "lis_person_name_family": "Administrator",\n      "custom_caliper_federated_session_id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/a118bba8-5378-4533-899b-8862ac59db03/sessions/0356052DAA966AA071787F54DBFEB1B1",\n      "lis_person_name_full": "Blackboard Administrator",\n      "context_label": "Ultra Ltiah_herokuapp_placement",\n      "oauth_consumer_key": "mykeyagain",\n      "user_id": "ffc08009f0884c059192bac549e117b2",\n      "launch_presentation_return_url": "https://support-ultra-test.blackboard.com/webapps/blackboard/execute/blti/launchReturn?launch_id=d0b8a363-7484-4ee6-b458-0f0e0ce5f05f&link_id=ultra&launch_time=1608831491592",\n      "oauth_version": "1.0",\n      "resource_link_id": "ultra",\n      "custom_tc_profile_url": "https://support-ultra-test.blackboard.com/learn/api/v1/lti/profile?lti_version=LTI-1p0",\n      "oauth_callback": "about:blank",\n      "lis_person_contact_email_primary": "noreply@blackboard.com",\n      "roles": "urn:lti:sysrole:ims/lis/Administrator",\n      "tool_consumer_instance_name": "Blackboard, Inc.",\n      "launch_presentation_locale": "en-US",\n      "context_title": "Ultra Ltiah_herokuapp_placement",\n      "tool_consumer_instance_guid": "82ef1947e5974e559156e8a6c8c2ea79",\n      "lis_person_name_given": "Blackboard",\n      "oauth_timestamp": "1608831491",\n      "lti_version": "LTI-1p0",\n      "ext_launch_presentation_css_url": "https://support-ultra-test.blackboard.com/common/shared.css,https://support-ultra-test.blackboard.com/themes/as_2015/theme.css",\n      "context_id": "_41_1",\n      "oauth_nonce": "171815513849839",\n      "tool_consumer_instance_description": "Blackboard, Inc."\n    },\n    "customParameters": {},\n    "extensions": {}\n  },\n  "eventTime": "2020-12-24T17:38:11.660Z",\n  "edApp": {\n    "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/a118bba8-5378-4533-899b-8862ac59db03/applications/learn",\n    "type": "SoftwareApplication",\n    "extensions": {\n      "bb:request.headers.ipAddress": "186.28.208.123"\n    }\n  },\n  "federatedSession": {\n    "startedAtTime": "2020-12-24T17:38:11.660Z",\n    "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/a118bba8-5378-4533-899b-8862ac59db03/sessions/0356052DAA966AA071787F54DBFEB1B1",\n    "type": "LtiSession",\n    "name": "0356052DAA966AA071787F54DBFEB1B1",\n    "dateCreated": "2020-12-24T17:38:11.660Z",\n    "user": {\n      "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/a118bba8-5378-4533-899b-8862ac59db03/users/ffc08009f0884c059192bac549e117b2",\n      "type": "Person",\n      "extensions": {\n        "bb:user.id": "_1_1",\n        "bb:user.externalId": "administrator"\n      }\n    }\n  },\n  "extensions": {},\n  "session": {\n    "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/a118bba8-5378-4533-899b-8862ac59db03/sessions/0356052DAA966AA071787F54DBFEB1B1",\n    "type": "Session"\n  }\n}\n')))}d.isMDXComponent=!0}}]);