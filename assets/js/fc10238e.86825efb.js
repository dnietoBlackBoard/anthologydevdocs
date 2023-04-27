"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[2894],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),h=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=h(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=h(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var h=2;h<r;h++)i[h]=n[h];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var o=n(7462),a=(n(7294),n(4137));const r={layout:"post",title:"LTI Registration and Deployment with Learn",id:"lti-registration-deployment",categories:"Standards",author:"Eric Preston",sidebar_position:4,displayed_sidebar:"documentationSidebar"},i="LTI Registration and Deployment with Learn",l={unversionedId:"LTI/lti-registration-deployment",id:"LTI/lti-registration-deployment",title:"LTI Registration and Deployment with Learn",description:"Why do we use a central service at Anthology?",source:"@site/docs/LTI/lti-registration-and-deployment.md",sourceDirName:"LTI",slug:"/LTI/lti-registration-deployment",permalink:"/anthologydevdocs/docs/LTI/lti-registration-deployment",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{layout:"post",title:"LTI Registration and Deployment with Learn",id:"lti-registration-deployment",categories:"Standards",author:"Eric Preston",sidebar_position:4,displayed_sidebar:"documentationSidebar"},sidebar:"documentationSidebar",previous:{title:"Anthology Sacntioned LTI Registration and Deployment with Learn",permalink:"/anthologydevdocs/docs/LTI/sanctioned-lti-registration-deployment"},next:{title:"LTI Advantage - Sample Deep Linking JSON",permalink:"/anthologydevdocs/docs/LTI/lti-deep_linking_two"}},s={},h=[{value:"Why do we use a central service at Anthology?",id:"why-do-we-use-a-central-service-at-anthology",level:2},{value:"LTI 1.3/Advantage Security",id:"lti-13advantage-security",level:2},{value:"LTI 1.3 Registration",id:"lti-13-registration",level:2},{value:"Anthology Developer Portal",id:"anthology-developer-portal",level:2},{value:"LTI Links or Placements",id:"lti-links-or-placements",level:2}],p={toc:h},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lti-registration-and-deployment-with-learn"},"LTI Registration and Deployment with Learn"),(0,a.kt)("h2",{id:"why-do-we-use-a-central-service-at-anthology"},"Why do we use a central service at Anthology?"),(0,a.kt)("p",null,"We believe that having Tool vendors register an LTI Tool ",(0,a.kt)("em",{parentName:"p"},"once")," through ",(0,a.kt)("a",{parentName:"p",href:"https://developer.anthology.com/"},"the Developer Portal"),'{:target="_blank"} is the best approach. It allows Learn admins to deploy that tool by entering just one piece of information (the Client ID) in the Admin Panel and sharing another piece of information (the Deployment ID) with the Tool vendor.'),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Tool vendor's clients don't need to register individual applications with the Developer Portal. That defeats the entire purpose of building this centralized service to make everyone's life a little simpler.")),(0,a.kt)("p",null,"When a Tool vendor needs to make changes to their tool configuration they do it in one place for Learn: the Developer Portal. If they add a new redirect URL, change the name of their application, or if they need to change the attributes of a placement (such as the icon, name, or target link URL) they can do so in one place. Learn admins can then synchronize their deployment without having to make those changes themselves: all the information required to perform an LTI launch is retrieved from the Developer Portal."),(0,a.kt)("h2",{id:"lti-13advantage-security"},"LTI 1.3/Advantage Security"),(0,a.kt)("p",null,"With LTI 1.3, an LTI Tool or Tool Provider shares a lot of information with a Tool Consumer or Platform and we must manage the signing and validation of the payload in a very different way than with the previous versions."),(0,a.kt)("p",null,"With LTI 1.1, we used to exchange just 3 pieces of information: Key, Secret, and URL. LTI 1.1 uses OAuth 1.0a signing of the FORM POST parameters to ensure that the data is secure. With LTI 1.3, the entire security model has changed."),(0,a.kt)("p",null,"The LTI 1.3/Advantage security model is based on OAuth 2 and OpenID Connect. It uses client credentials grant for getting bearer tokens, just like our REST API mechanism but rather than issuing keys and secrets we rely on asymmetric public/private key pairs."),(0,a.kt)("p",null,"Learn is responsible for generating a private key that signs the LTI messages it sends to the tool, and it makes its public key(s) available via a JWKS URL for the tool to validate the signature of those messages."),(0,a.kt)("p",null,"A tool is responsible for generating a private key that it uses to sign OAuth 2 bearer token requests for LTI messages it sends to Learn, such as Deep Linking response, Names and Roles, and Assignment and Grades. It provides a JWKS URL for its public key(s) so Learn can validate the signature of messages the tool sends to Learn."),(0,a.kt)("h2",{id:"lti-13-registration"},"LTI 1.3 Registration"),(0,a.kt)("p",null,"Because of the new security model and because LTI 1.3 has built-in support for preventing cross-site request forgery attacks (CSRF or XSRF), there is more information that needs to be shared between a tool and a platform."),(0,a.kt)("p",null,"The LTI 1.3 specification requires that a Tool share the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Login Initiation URL"),(0,a.kt)("li",{parentName:"ol"},"Tool Redirect URL(s)"),(0,a.kt)("li",{parentName:"ol"},"Tool JWKS URL"),(0,a.kt)("li",{parentName:"ol"},"Signing Algorithm (RS256 or RS512 are the current choices)")),(0,a.kt)("p",null,"The above values are defined by the OpenID Connect 3rd-party-initiated login flow and the fact that we are using asymmetric keys."),(0,a.kt)("p",null,"The specification also requires that a Platform share the following information with the tool:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Client ID"),(0,a.kt)("li",{parentName:"ol"},"Issuer"),(0,a.kt)("li",{parentName:"ol"},"Auth token endpoint"),(0,a.kt)("li",{parentName:"ol"},"OIDC auth request endpoint"),(0,a.kt)("li",{parentName:"ol"},"Platform JWKS URL"),(0,a.kt)("li",{parentName:"ol"},"Deployment ID")),(0,a.kt)("p",null,"The first 5 come from the OAuth 2 and OpenID Connect specifications upon which the LTI 1.3 security model is built."),(0,a.kt)("p",null,"The Deployment ID is an LTI 1.3 construct to allow multiple deployments of a tool for a single Client ID, such as different colleges at a university."),(0,a.kt)("p",null,"We've gone from three pieces of information to share between a platform and tool in LTI 1.1 to ten pieces of information that must be shared."),(0,a.kt)("h2",{id:"anthology-developer-portal"},"Anthology Developer Portal"),(0,a.kt)("p",null,"With LTI 1.3, since keys and secrets are no longer shared, and the signing of messages uses asymmetric public/private key pairs, Blackboard has the opportunity to generate its keys in a central service and do the signing and validation of messages there."),(0,a.kt)("p",null,"With Learn we have split the ",(0,a.kt)("em",{parentName:"p"},"registration")," of a tool from the ",(0,a.kt)("em",{parentName:"p"},"deployment")," of a tool."),(0,a.kt)("p",null,"Rather than ask a Learn administrator to exchange all of the above information with a Tool vendor (which is information the Learn admin doesn't care about and could easily make mistakes in entering) and in order to make both the Tool vendor and the Learn admin lives a bit better, we have centralized the registration of a tool."),(0,a.kt)("p",null,"A Tool vendor registers their tool ",(0,a.kt)("em",{parentName:"p"},"once")," with the Blackboard Developer Portal, exchanging all of the information above ",(0,a.kt)("em",{parentName:"p"},"except")," the Deployment ID. The tool vendor is granted a Client ID and shares it with their clients."),(0,a.kt)("p",null,"A Learn admin takes that Client ID and deploys it to Learn by entering a single value (the Client ID) in the Admin Panel. All the rest of the information required to perform an LTI launch from that Learn instance is retrieved from the Developer Portal."),(0,a.kt)("p",null,"A Learn admin is granted a Deployment ID that it shares with the Tool vendor to uniquely identify the account associated with that institution. A Tool vendor now has all the information they need to accept LTI launches from that institution."),(0,a.kt)("h2",{id:"lti-links-or-placements"},"LTI Links or Placements"),(0,a.kt)("p",null,"Another aspect of LTI that the specification does not address is the issue of where an LTI link gets surfaced and what type of links do they support."),(0,a.kt)("p",null,"A tool may want a link in the course outline, or in the rich content editor, or in a system-wide area, or as a link for a course but not in the outline."),(0,a.kt)("p",null,"A tool may want to support Deep Linking so an instructor can select or create content in the Tool and have the links appear in the course."),(0,a.kt)("p",null,"Learn has the concept of LTI Placements to support this. Blackboard allows a Tool vendor to register those placements with the Developer Portal, so an admin doesn't have to do that work."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"LTI diagram",src:n(1769).Z,width:"600",height:"326"}),"{: .center-image }"),(0,a.kt)("p",null,"If you have any other questions about LTI Registration and Deployment with Learn, ","[let us know]","(mailto: ",(0,a.kt)("a",{parentName:"p",href:"mailto:developers@anthology.com"},"developers@anthology.com"),")."))}c.isMDXComponent=!0},1769:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ltidiagram-889e00c108071f6240e1f0ef4eaf556c.png"}}]);