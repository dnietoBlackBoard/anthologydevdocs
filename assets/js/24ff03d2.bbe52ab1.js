"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[6289],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),g=a,m=c["".concat(l,".").concat(g)]||c[g]||d[g]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2687:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(4137));const o={layout:"post",title:"Configuring Ultra Extension Framework in Learn","purple-text-title":"Configuring Ultra Extension Framework in Learn",categories:"Learn UEF",id:"rest_apis-learn-uef-configure",toc:!0},i=void 0,s={unversionedId:"rest-apis/premium-apis/uef/tutorials/rest_apis-learn-uef-configure",id:"rest-apis/premium-apis/uef/tutorials/rest_apis-learn-uef-configure",title:"Configuring Ultra Extension Framework in Learn",description:"The Ultra Extension Framework (UEF) encompasses a broad array of features and functionality, and as such, each UEF-enabled integration will have its own specific configuration settings. However, the setup process followed by a Learn System Administrator leverages existing standard configuration workflows already in place. Adding a UEF-enabled integration to a Learn environment requires a System Admin to make configuration changes to one or more of the following areas:",source:"@site/docs/rest-apis/premium-apis/uef/tutorials/configure-uef.md",sourceDirName:"rest-apis/premium-apis/uef/tutorials",slug:"/rest-apis/premium-apis/uef/tutorials/rest_apis-learn-uef-configure",permalink:"/docs/rest-apis/premium-apis/uef/tutorials/rest_apis-learn-uef-configure",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Configuring Ultra Extension Framework in Learn","purple-text-title":"Configuring Ultra Extension Framework in Learn",categories:"Learn UEF",id:"rest_apis-learn-uef-configure",toc:!0},sidebar:"documentationSidebar",previous:{title:"LTI Launch context added in new Window Launches",permalink:"/docs/rest-apis/premium-apis/uef/tutorials/rest_apis-learn-uef-communication_page_lvl_analytics"},next:{title:"Migrate an LTI Tool to UEF",permalink:"/docs/rest-apis/premium-apis/uef/tutorials/rest_apis-learn-uef_tutorial_lti"}},l={},u=[],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=p("VersioningTracker"),d=p("AuthorBox"),g={toc:u},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c,{frontMatter:o,mdxType:"VersioningTracker"}),(0,a.kt)("h1",{id:"configuring-ultra-extension-framework-in-learn"},"Configuring Ultra Extension Framework in Learn"),(0,a.kt)("p",null,"The Ultra Extension Framework (UEF) encompasses a broad array of features and functionality, and as such, each UEF-enabled integration will have its own specific configuration settings. However, the setup process followed by a Learn System Administrator leverages existing standard configuration workflows already in place. Adding a UEF-enabled integration to a Learn environment requires a System Admin to make configuration changes to one or more of the following areas:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"REST API Integrations"),": UEF-enabled integrations will need to be added as a REST API integration ","[Administrator Panel \u21e8 REST API Integrations \u21e8 Create Integration]","."),(0,a.kt)("img",{alt:"Create a REST API Integration in Learn",src:"/assets/img/1RestAPIintegrations.png",width:"50%"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"LTI Tool Providers"),": UEF-enabled integrations will need to be registered as an LTI Tool Provider. We recommend using LTI 1.3, though LTI 1.1 will work."),(0,a.kt)("p",null,"To register an LTI 1.3 tool:"),(0,a.kt)("p",null,"[Administrator Panel \u21e8 LTI Tool Providers \u21e8 Register LTI 1.3 Tool]"),(0,a.kt)("p",null,"To register an LTI 1.1 tool:"),(0,a.kt)("p",null,"[Administrator Panel \u21e8 LTI Tool Providers \u21e8 Register Provider Domain]"),(0,a.kt)("img",{alt:"Register LTI Tool",src:"/assets/img/2LTIToolProviders.png",width:"50%"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"New LTI Placement Type"),': "Ultra extension"\nAs part of the Ultra integration framework development, it\'s necessary to define a way for Learn admins to register an Ultra integration and how the registered integrations are going to be loaded inside Ultra:\n\u2022 We\'ll keep the current registration workflow for LTI 3rd party tools, but a new placement type will be added so that is possible to know when an LTI tool is expected to work as an Ultra UI integration.\n\u2022 The new LTI placement type will be known as "Ultra extension" and such type will only be visible for Learn Ultra instances.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),": When registering an LTI 1.1 Placement, you must include the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tool Provider URL"),(0,a.kt)("li",{parentName:"ul"},"Tool Provider Key"),(0,a.kt)("li",{parentName:"ul"},"Tool Provider Secret")),(0,a.kt)("p",null,"The Tool Provider Key and Tool Provider Secret would be the ones given by the devportal when the application is created and the Tool Provider URL must follow this format:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://example.provider.com/lti-launch?id=<PlacementId>&appkey=<Tool Provider Key>")),(0,a.kt)("img",{alt:"Manage LTI Placements",src:"/assets/img/3ManagePlacements.png",width:"50%"}),(0,a.kt)("img",{alt:"Create LTI Placement",src:"/assets/img/4CreatePlacement.png",width:"50%"}),(0,a.kt)("p",null,"Cross-Origin Resource Sharing: For UEF-enabled integrations that make direct calls to their Learn instance's REST API will need be be configured via the Cross-Origin Resource Sharing (CORS) tool ","[Administrator Panel \u21e8 Cross-Origin Resource Sharing \u21e8 Create Configuration]","."),(0,a.kt)("img",{alt:"Cross Origin Resource Sharing Configuration",src:"/assets/img/5CORSSharing.png",width:"50%"}),(0,a.kt)(d,{frontMatter:o,mdxType:"AuthorBox"}))}f.isMDXComponent=!0}}]);