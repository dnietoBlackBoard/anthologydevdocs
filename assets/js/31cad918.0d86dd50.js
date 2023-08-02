"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[7981],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(r),c=a,m=g["".concat(s,".").concat(c)]||g[c]||d[c]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2066:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(4137));const o={layout:"post",title:"Releasing your Integration",id:"rest_apis-learn-getting-started-releasing_integration",categories:"Learn Rest",author:"Mark O'Neil"},i="Releasing your integration",l={unversionedId:"rest-apis/learn/getting-started/rest_apis-learn-getting-started-releasing_integration",id:"rest-apis/learn/getting-started/rest_apis-learn-getting-started-releasing_integration",title:"Releasing your Integration",description:"You have taken the time to build a great integration now there are a few steps that should be followed to ensure a successful product release.",source:"@site/docs/rest-apis/learn/getting-started/releasing-your-integration.md",sourceDirName:"rest-apis/learn/getting-started",slug:"/rest-apis/learn/getting-started/rest_apis-learn-getting-started-releasing_integration",permalink:"/docs/rest-apis/learn/getting-started/rest_apis-learn-getting-started-releasing_integration",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Releasing your Integration",id:"rest_apis-learn-getting-started-releasing_integration",categories:"Learn Rest",author:"Mark O'Neil"},sidebar:"documentationSidebar",previous:{title:"Rest registry",permalink:"/docs/rest-apis/learn/getting-started/rest_apis-learn-getting-started-registry"},next:{title:"REST Tutorials",permalink:"/docs/rest-apis/learn/getting-started/rest_apis-learn-getting-started-tutorials"}},s={},u=[{value:"Developer Portal Settings",id:"developer-portal-settings",level:2},{value:"Delivering your REST integration",id:"delivering-your-rest-integration",level:2},{value:"Some DON\u2019Ts",id:"some-donts",level:3},{value:"Key Takeaways",id:"key-takeaways",level:3}],p={toc:u},g="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(g,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"releasing-your-integration"},"Releasing your integration"),(0,a.kt)("p",null,"You have taken the time to build a great integration now there are a few steps that should be followed to ensure a successful product release."),(0,a.kt)("p",null,"These fall into two categories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Developer Portal Settings"),(0,a.kt)("li",{parentName:"ul"},"Learn REST Integration Configuration")),(0,a.kt)("h2",{id:"developer-portal-settings"},"Developer Portal Settings"),(0,a.kt)("p",null,"Before releasing your integration, please make sure there are sufficient site and rate limits for a smooth operation, you can review our information on ",(0,a.kt)("a",{parentName:"p",href:"/docs/rest-apis/learn/admin/rest_apis-learn-admin-group_quotas_rates"},"Groups, Quotas, and Rates")," to learn more. The first steps are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a group named after the Company or the institution, keep in mind this group will receive production level settings, also, please make sure to follow our ",(0,a.kt)("a",{href:"https://docs.anthology.com/rest-apis/learn/admin/groups-quotas-rates#production-groups",target:"_top"},"naming convention")),(0,a.kt)("li",{parentName:"ol"},"File a Support ticket requestion production settings on your group. (for BbDN-level and above partners and any Bb Client, please file a support ticket to request production settings on your group. If you are a community-level partner, please send us an email to ",(0,a.kt)("a",{parentName:"li",href:"mailto:developers@anthology.com"},"developers@anthology.com"),")"),(0,a.kt)("li",{parentName:"ol"},"We will proceed and update a group to a production group"),(0,a.kt)("li",{parentName:"ol"},"Now you can associate your application with your production group.")),(0,a.kt)("p",null,"Now your application is using production setting, next step is making your application available to your clients"),(0,a.kt)("h2",{id:"delivering-your-rest-integration"},"Delivering your REST integration"),(0,a.kt)("p",null,"Here are Three steps in releasing your integration:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Provide your client with your integration's Application ID:"),(0,a.kt)("p",{parentName:"li"},"E.G: 39CCFC5A-FC03-4854-A3D4-809663F2D237")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Provide an integration preferred username and role name:"),(0,a.kt)("p",{parentName:"li"},"E.G: UserName: SuperSoftware Sudoku User"),(0,a.kt)("p",{parentName:"li"},"Role Name: SuperSoftware Sudoku Role")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In YOUR documentation, you should provide a list of required privileges or entitlements for the integration User role."))),(0,a.kt)("p",null,"E.G: You needed to find the entitlements (from the API documentation) and the Privileges (from Learn) in order to develop and test your application with a non-system admin user. It is good practice to share those privileges with your client."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that if your application is utilizing Three Legged OAuth - which uses the logged in user\u2019s privileges - this step is not required.\nIt is strongly recommended that you include the above information in your client facing documentation.")),(0,a.kt)("h3",{id:"some-donts"},"Some DON\u2019Ts"),(0,a.kt)("p",null,"1: NEVER USE OR REQUIRE SYSTEM ADMINISTRATOR as your REST integration user"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This places your client at risk."),(0,a.kt)("li",{parentName:"ul"},"A discerning administrator will not install an integration requiring a Role of System Administrator.")),(0,a.kt)("p",null,"2: NEVER ASK YOUR CLIENT TO INSTALL USING THEIR DEVELOPER PORTAL KEY:SECRET"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Keys and Secrets should never be shared."),(0,a.kt)("li",{parentName:"ul"},"Keys and Secrets should never stored in remote systems. FWIW: the Developer Portal does not store them either."),(0,a.kt)("li",{parentName:"ul"},"Production group settings are global to specific to integrations.")),(0,a.kt)("h3",{id:"key-takeaways"},"Key Takeaways"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Providing the required Privileges to Learn Admins reduces the risk of a failure in integration installation and operation. Anthology nor you should want to burden clients with figuring out from the API Docs which Entitlements are needed and look up these Privileges on their own so that your application works as expected."),(0,a.kt)("li",{parentName:"ul"},"Following secure practices around key:secret management create a safer more secure www.")))}d.isMDXComponent=!0}}]);