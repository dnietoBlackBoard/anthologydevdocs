"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[9120],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,d=c["".concat(s,".").concat(h)]||c[h]||g[h]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(4137));const o={title:"Managing REST Integrations in Learn: The REST Integrations Tool for System Administrators",id:"rest-and-learn",categories:"Learn REST",published:"",edited:"",author:"Mark O'Neil"},i=void 0,l={unversionedId:"rest-apis/learn/admin/rest-and-learn",id:"rest-apis/learn/admin/rest-and-learn",title:"Managing REST Integrations in Learn: The REST Integrations Tool for System Administrators",description:"Overview of the REST API Integrations Tool",source:"@site/docs/rest-apis/learn/admin/rest-and-learn.md",sourceDirName:"rest-apis/learn/admin",slug:"/rest-apis/learn/admin/rest-and-learn",permalink:"/docs/rest-apis/learn/admin/rest-and-learn",draft:!1,tags:[],version:"current",frontMatter:{title:"Managing REST Integrations in Learn: The REST Integrations Tool for System Administrators",id:"rest-and-learn",categories:"Learn REST",published:"",edited:"",author:"Mark O'Neil"},sidebar:"documentationSidebar",previous:{title:"REST Tutorials",permalink:"/docs/rest-apis/learn/getting-started/tutorials"},next:{title:"REST Integrations 3-Legged OAuth and Learn Custom Login Pages For System Administrators",permalink:"/docs/rest-apis/learn/admin/rest-3lo-and-learn-sso"}},s={},p=[{value:"Overview of the REST API Integrations Tool",id:"overview-of-the-rest-api-integrations-tool",level:3},{value:"Create an Integration",id:"create-an-integration",level:3},{value:"Managing your REST Integration",id:"managing-your-rest-integration",level:3},{value:"Edit a REST Integration",id:"edit-a-rest-integration",level:3},{value:"Running an Integration",id:"running-an-integration",level:3},{value:"Converting Entitlements to GUI Privileges",id:"converting-entitlements-to-gui-privileges",level:3},{value:"Delivering your REST Integration",id:"delivering-your-rest-integration",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=u("VersioningTracker"),g=u("AuthorBox"),h={toc:p},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c,{frontMatter:o,mdxType:"VersioningTracker"}),(0,r.kt)("h3",{id:"overview-of-the-rest-api-integrations-tool"},"Overview of the REST API Integrations Tool"),(0,r.kt)("p",null,"For the other tasks related in this document, use the REST API Integrations."),(0,r.kt)("p",null,"To navigate to the REST API Integrations tool:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"System Admin")," in the main screen of Learn."),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"REST API Integrations")," link is in the Building Blocks section:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"REST API Integrations",src:n(61).Z,width:"323",height:"254"})),(0,r.kt)("p",null,"The main page for the REST API Integrations tool:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lists existing integrations"),(0,r.kt)("li",{parentName:"ul"},"Allows you to manage existing integrations"),(0,r.kt)("li",{parentName:"ul"},"Allows you to create new integrations")),(0,r.kt)("p",null,"This list will be empty if you have not created any integrations."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"REST API Integrations",src:n(307).Z,width:"752",height:"394"})),(0,r.kt)("h3",{id:"create-an-integration"},"Create an Integration"),(0,r.kt)("p",null,"An integration, here, refers to an external REST application being registered\nto work in conjunction with Learn. Before you create an\nintegration, the best practice is to create a Learn user with entitlements\nthat match those required by the REST application."),(0,r.kt)("p",null,"To create an integration and thereby allow an application to work with your\ninstance of Learn:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the REST API Integrations page, select ",(0,r.kt)("strong",{parentName:"p"},"Create Integration"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Application ID")," space, enter the application ID proved by the integration's developers.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Browse")," next to Learn User. Search through the list of Learn users to find the user that the integration should act as.",(0,r.kt)("br",{parentName:"p"}),"\n","Select a user that you specially create for the application and that has only\nthe permissions that the integration needs to function properly.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For third-party integration, set ",(0,r.kt)("strong",{parentName:"p"},"End User Access")," to Yes. End users will sign in with their own Learn ID to use the integration. Each user's access is then limited to his or her own permissions. If you set End User Access to No, the integration always has access as if it were the Learn user indicated on the form.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Submit")," to save your settings for the integration.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the Learn user in whose name the application acts. This user must have the entitlements required by the REST Application. For more information about identifying required entitlements, see ",(0,r.kt)("em",{parentName:"p"},"Converting Documented Entitlements to GUI Privileges"),", below. Note that the Institution role of this user has no impact on the entitlements, only the privileges on the user's System role."))),(0,r.kt)("p",null,"Learn user entitlements are allow a REST application to act in your Learn\nenvironment. The best practice is to restrict these except as necessary to\nallow the REST Application to function. The vendor or developer of the REST\napplication should provide a list of required entitlements."),(0,r.kt)("p",null,"NEVER configure a REST application to act as a System Admin user. Doing so\ngives the REST application full access to all data and operations of your Learn environment possibly resulting in IRREPARABLE harm. If a vendor requests a System Admin user for their application, do not allow it. In such a case, please provide the vendor's contact and application information to ",(0,r.kt)("a",{href:"mailto:developers@anthology.com?subject=Vendor requesting System Admin Privileges"},"developers","@","anthology.com")," so that we can\nhelp the vendor correct the situation."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create REST integration",src:n(9970).Z,width:"1014",height:"477"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," If you are an Anthology client, an Anthology Partner / Vendor / Developer of an LTI or REST Application should NEVER tell you to go to the developer portal and create an App ID with the associated key/secret to install their application. They should never tell you to apply for a Rate/Site increase for their application. Anthology DOES NOT support that model. Every REST Application developer should give you an App ID to install their REST App and tell you how to configure a system role for its use. Period. The REST Application developer needs to request the increases they need to run their application themselves. If they ask you to go to developer.anthology.com and get an App ID/Key/Secret, please tell them that is wrong. They should have exactly one App ID for their production REST application that they are asking you to install."),(0,r.kt)("p",null,"Contractors are an exception to this policy as they are producing an\nintegration on your, the Anthology client, behalf. Questions regarding the\npolicy and whether you are impacted may be asked here, or posted to\n",(0,r.kt)("a",{parentName:"p",href:"mailto:developers@anthology.com"},"developers@anthology.com"),"."),(0,r.kt)("h3",{id:"managing-your-rest-integration"},"Managing your REST Integration"),(0,r.kt)("p",null,"Once you have created a REST integration, you can manage it:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Edit the integration settings"),(0,r.kt)("li",{parentName:"ol"},"Set the integration availability"),(0,r.kt)("li",{parentName:"ol"},"Delete the integration")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"managing your rest integration",src:n(7624).Z,width:"982",height:"513"})),(0,r.kt)("h3",{id:"edit-a-rest-integration"},"Edit a REST Integration"),(0,r.kt)("p",null,"The editor displays information about the integration and allows you to change\nthe Learn user that the integration runs as. This allows you to manage the\npermissions on the integration."),(0,r.kt)("p",null,"To edit an application's settings, navigate to the REST API Integrations tool.\nSelect ",(0,r.kt)("strong",{parentName:"p"},"Edit")," from the context menu of the integration that you want to\nedit. A screen opens like one below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"edit a rest integration",src:n(7429).Z,width:"1000",height:"523"})),(0,r.kt)("p",null,"You may use the standard Learn user and role tools to create an integration-\nspecific user."),(0,r.kt)("h3",{id:"running-an-integration"},"Running an Integration"),(0,r.kt)("p",null,"An REST integration can be run in two ways. In both cases, the application is\nactually remote to the Learn environment."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A user selects a link within Learn which calls the remote application"),(0,r.kt)("li",{parentName:"ol"},"A remote system call from the REST application")),(0,r.kt)("h3",{id:"converting-entitlements-to-gui-privileges"},"Converting Entitlements to GUI Privileges"),(0,r.kt)("p",null,"There are a number of ways to accomplish this."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check out this blog, ",(0,r.kt)("a",{parentName:"li",href:"https://community.blackboard.com/blogs/4/18"},"Bookmarklet To Help\nMap Entitlements to Permissions")),(0,r.kt)("li",{parentName:"ul"},"Check out this ",(0,r.kt)("a",{parentName:"li",href:"https://mle.southampton.ac.uk/bb/SHOW-HIDDEN.zip"},"JSHack")," contributed by Matthew Deeprose."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{target:"_blank",href:n(6957).Z},"EntitlementsToAdminGUI worksheet")," (updated 08/10/2019 9:57 AM)\nhelps identify the ",(0,r.kt)("strong",{parentName:"li"},"entitlements")," to a string which may be searched on in\nthe role ",(0,r.kt)("strong",{parentName:"li"},"privilege")," selection page when creating the role for your REST\nApplication user. Paste the documented ",(0,r.kt)("strong",{parentName:"li"},"entitlement")," from the REST API\ndocumentation to column A and the ",(0,r.kt)("strong",{parentName:"li"},"privilege")," will appear in column B.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Here's a ",(0,r.kt)("a",{parentName:"li",href:"https://www.dropbox.com/s/552vjf3vr5fwjyg/2018-10-25_12-53-22.CreatingYourUniqueSystemRoleForYourRESTAppIntegration.mp4%3Fdl%3D0"},"video demonstration"),"."))),(0,r.kt)("li",{parentName:"ul"},"Should the spreadsheet not have what you're looking for, here's the way to\nfind these manually: ",(0,r.kt)("a",{parentName:"li",href:"https://www.dropbox.com/s/i6m80k7prqaxfcs/2018-10-30_13-39-25.FindingPrivilegeForGivenEntitlement.mp4%3Fdl%3D0"},"Dropbox - 2018-10-30_13-39-25.FindingPrivilegeForGivenEntitlement.mp4"))),(0,r.kt)("h3",{id:"delivering-your-rest-integration"},"Delivering your REST Integration"),(0,r.kt)("p",null,"For a more detailed process please see ",(0,r.kt)("a",{parentName:"p",href:"/docs/rest-apis/learn/getting-started/releasing-your-integration"},"Releasing your REST Integration")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1:")," NEVER USE OR REQUIRE SYSTEM ADMINISTRATOR as your REST application user."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2:")," You determine from the API Docs which Entitlements are required for the integration."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3:")," You set up a non-System Administrator User associated with the your REST API integration on your test system."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4:")," You utilize your test system and the API Docs to identify the list of Learn Privileges required for the integration."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 5:")," You configure your test system integration user appropriately and validate successful integration operation using your identified Learn Privileges"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 6:")," You provide the client the REST Application Id, a preferred/suggested user and role name (E.G.: ","<","application name",">"," Integration User, ","<","application name",">"," Integration Role), and a list of required Privileges for the Integration User Role."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 7:")," Include information from Step 6 in your client facing documentation."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Key takeaway:"))," Providing the required Privileges to Learn Admins reduces the risk of a failure in integration installation and operation. Anthology nor you should want to burden clients with figuring out from the API Docs which Entitlements are needed and look up these Privileges on their own so that your application works as expected."),(0,r.kt)(g,{frontMatter:o,mdxType:"AuthorBox"}))}m.isMDXComponent=!0},6957:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/EntitlementstoAdminGUI-2ddb9ccfafb062ab8f877857aee1ba0c.xlsx"},61:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rest-and-learn-1-e51a78f1220c1efe6a17891cd360912f.png"},307:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rest-and-learn-2-791aed6075647e82a96f1fedb658725b.png"},9970:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rest-and-learn-3-0de5c05f8506946993fa22c070137ce9.png"},7624:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rest-and-learn-4-05afec33f255b5818c670df90b3bc336.png"},7429:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rest-and-learn-5-006567a8f3283942babc4778bd14db79.png"}}]);