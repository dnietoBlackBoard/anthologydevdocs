"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[6379],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,g=p["".concat(l,".").concat(d)]||p[d]||h[d]||r;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(7462),i=(n(7294),n(4137));const r={slug:"Anthology Integrations and Customer Experience",title:"Integration Installation and Customer Experience",authors:[{name:"Mark O'Neil",title:"Product Manager"}],tags:["Best Practices","Integrations","Partners","Developers"],hide_table_of_contents:!1},a="Integration Installation and Customer Experience",s={permalink:"/anthologydevdocs/blog/Anthology Integrations and Customer Experience",source:"@site/blog/2023/2023-05-01-IntegrationInstallationandCustomerExperience.md",title:"Integration Installation and Customer Experience",description:"Anthology has designed it's model for integrations in a manner which, when executed following our best practices, improves the Customer Integration Experience. Our goals in this area are multi-fold, yet all drive toward the best experience possible when Customers license, purchase, or develop integrations for enhancing their Anthology Products as campus differentiators and enablers in achieving their Teaching and Learning objectives for their Staff, Faculty, and Students.",date:"2023-05-01T00:00:00.000Z",formattedDate:"May 1, 2023",tags:[{label:"Best Practices",permalink:"/anthologydevdocs/blog/tags/best-practices"},{label:"Integrations",permalink:"/anthologydevdocs/blog/tags/integrations"},{label:"Partners",permalink:"/anthologydevdocs/blog/tags/partners"},{label:"Developers",permalink:"/anthologydevdocs/blog/tags/developers"}],readingTime:8.425,hasTruncateMarker:!1,authors:[{name:"Mark O'Neil",title:"Product Manager"}],frontMatter:{slug:"Anthology Integrations and Customer Experience",title:"Integration Installation and Customer Experience",authors:[{name:"Mark O'Neil",title:"Product Manager"}],tags:["Best Practices","Integrations","Partners","Developers"],hide_table_of_contents:!1},nextItem:{title:"DevCon 2022 Presentations!",permalink:"/anthologydevdocs/blog/DevCon-2022-Presentations!"}},l={authorsImageUrls:[void 0]},u=[{value:"Why is Customer Experience Important?",id:"why-is-customer-experience-important",level:2},{value:"Integration Installation",id:"integration-installation",level:2},{value:"SaaS changed everything...",id:"saas-changed-everything",level:3},{value:"Integration Design Considerations",id:"integration-design-considerations",level:3},{value:"Best Practices",id:"best-practices",level:3},{value:"Developer Portal Accounts",id:"developer-portal-accounts",level:4},{value:"Production Integration Release",id:"production-integration-release",level:4},{value:"Customer Facing Documentation",id:"customer-facing-documentation",level:4},{value:"Integration User Roles: Entitlements vs Privileges",id:"integration-user-roles-entitlements-vs-privileges",level:5},{value:"Integration Support",id:"integration-support",level:2},{value:"Who is responsible for your integration&#39;s support?",id:"who-is-responsible-for-your-integrations-support",level:3},{value:"The Future is Bright(er)",id:"the-future-is-brighter",level:2},{value:"Simplification of Integration Installation",id:"simplification-of-integration-installation",level:3},{value:"Auto-Install of REST Users with Privileges",id:"auto-install-of-rest-users-with-privileges",level:4},{value:"LTI and REST share JWT for authN",id:"lti-and-rest-share-jwt-for-authn",level:4}],c={toc:u},p="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Anthology has designed it's model for integrations in a manner which, when executed following our best practices, improves the Customer Integration Experience. Our goals in this area are multi-fold, yet all drive toward the best experience possible when Customers license, purchase, or develop integrations for enhancing their Anthology Products as campus differentiators and enablers in achieving their Teaching and Learning objectives for their Staff, Faculty, and Students."),(0,i.kt)("h2",{id:"why-is-customer-experience-important"},"Why is Customer Experience Important?"),(0,i.kt)("p",null,"Customer experience is important for Partners and Anthology Customers for many reasons. Most notably:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Customer Retention"),": Providing a positive customer experience can help improve customer retention rates. Customers are more likely to remain loyal to a brand if they have had a positive experience with the company."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Brand Reputation"),": A positive customer experience can enhance your company's reputation and help build a positive brand image. Word of mouth and online reviews are powerful marketing tools, and customers are more likely to share their positive experiences with others."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Competitive Advantage"),": Providing a superior customer experience can set a business apart from its competitors and give it a competitive advantage."),(0,i.kt)("p",null,"Overall, a positive customer experience is essential for building strong customer relationships, increasing customer loyalty, and improving the overall success of a business. This applies to our developer community as well as Anthology."),(0,i.kt)("p",null,"In addition to the general integration functionality, for which the integration development team is ultimately responsible, the most significant impact on the Customer Experience is installation and support of your integration. "),(0,i.kt)("p",null,"Installation of your integration is often the first experience customers will have with your business and first impressions are lasting and influence future interactions. "),(0,i.kt)("p",null,"How clients discover and know whom to contact for Support is also a significant influencer of impressions of your business."),(0,i.kt)("p",null,"Anthology has built our integration experience and best practices, with these latter two concepts in mind. "),(0,i.kt)("h2",{id:"integration-installation"},"Integration Installation"),(0,i.kt)("p",null,'Anthology has thought long about how to simplify the integration experience for customers in the world of SaaS. In doing so we arrived at a "Register once, deploy everywhere" model for Integration developers to deliver theirr solutions. This applies to LTI 1.3 and RESTful integrations alike, and greatly simplifies installation for our mutual customers.'),(0,i.kt)("h3",{id:"saas-changed-everything"},"SaaS changed everything..."),(0,i.kt)("p",null,"In prior years you may have built integrations which ran on-prem or in-process alongside the Anthology product. This required customers to manage the software themselves. Under the more modern SaaS model, which is used by Anthology, the customer is no responsible for updating and maintaining the integration, as SaaS product consumers receive updates automatically."),(0,i.kt)("p",null,"To facilitate the SaaS model, the Anthology Developer Portal provides the means for you the Developer to register your integration once and deploy to multiple customers. Once your integration is registered in the Developer Portal an identifier is issued - this identifier is used by ",(0,i.kt)("em",{parentName:"p"},"all customers")," to install your integration."),(0,i.kt)("p",null,"This means you have one instance of your integration and all customers use that instance. This of course imply some design concepts for your integration."),(0,i.kt)("p",null,"This model for delivering innovative solutions to customers provides cost savings and improved efficiency for your business. This is because instead of multiple instances (with per instance charges accrued) you only ",(0,i.kt)("em",{parentName:"p"},"need")," one instance of your integration which is shared by all your customers. This is the SaaS way."),(0,i.kt)("h3",{id:"integration-design-considerations"},"Integration Design Considerations"),(0,i.kt)("p",null,"Register once and Deploy anywhere means there are some differences in how you design and deliver your integration."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: The following pertains to development of integrations which are marketed to multiple customers. Only point 1 is pertinent to those who are developing campus-only solutions.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Logs and data"),": Integrations should maintain archives of customer logs and any integration specific data as those are not provided by Anthology products. "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Multi-tenancy"),": Integrations should follow a multi-tenant model vs single tenant. Multi-tenant means one integration service delivering your integration to all your customers vs requiring a new intetegration service per customer. This means you have to design into your integration the ability for enabling individual customer accounts, likely only administrator, for any customer specific configuration."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Separation of Customer data"),": Multi-tenancy means that in addition to running a single service for your customers you are likely using a single database. This dictates a secure separation of customer data using a unique customer identifier prefix on customer-centric data keys.")),(0,i.kt)("p",null,"Each of the above enable you to deliver a secure, efficient, and postive experience to customers at a cost savings of single instance vs multiple instance service delivery."),(0,i.kt)("h3",{id:"best-practices"},"Best Practices"),(0,i.kt)("h4",{id:"developer-portal-accounts"},"Developer Portal Accounts"),(0,i.kt)("p",null,"There are really two ",(0,i.kt)("em",{parentName:"p"},"types")," of Developer Portal accounts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Developer Accounts: the personal accounts which are used for prototyping and testing of your integration. These are in the form of developer_name","@","domain.tld. These are often referred to as test or development ",(0,i.kt)("em",{parentName:"li"},"groups"),". These groups are restricted in the number of request which may be made w/in a 24 hour time period to non-production level settings."),(0,i.kt)("li",{parentName:"ol"},"Production Accounts: these are your accounts used for production release of your integration. Given this account's information is what customers see when they install your integration it is considered a best practice to use a mailinglist such as business","@",", integration_name","@",", or support","@","domain.tld. This email must be publicly reachable."),(0,i.kt)("li",{parentName:"ol"},"Production Group: This is a very specific group within your Production Account which contains your integrations. This group receives production level settings.")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{href:"https://docs.anthology.com/docs/Developer%20Portal/community-dev_portal",target:"_top"},"Getting Started with the Developer Portal")," for more information."),(0,i.kt)("h4",{id:"production-integration-release"},"Production Integration Release"),(0,i.kt)("p",null,"See our ",(0,i.kt)("a",{href:"https://docs.anthology.com/docs/REST%20APIs/Learn/Getting%20Started/rest_apis-learn-getting-started-releasing_integration",target:"_top"},"Releasing your Integration")," guide for production release details."),(0,i.kt)("p",null,"Also see ",(0,i.kt)("a",{href:"https://docs.anthology.com/docs/LTI/lti-registration-deployment",target:"_top"},"LTI Registration and Deployment with Learn")," guide which describes Anthology's approach behind releasing LTI 1.3 integrations."),(0,i.kt)("h4",{id:"customer-facing-documentation"},"Customer Facing Documentation"),(0,i.kt)("p",null,"It is the integration developer's responsibility to provide the necessary documentation for a successful installation. This is greatly simplified when following our best practices for Register once, deploy anywhere."),(0,i.kt)("p",null,"Currently there are three things which will generate no end of consternation for customers which degrades their experience with your integration/company. These three things fall into two groups User Roles and Support."),(0,i.kt)("h5",{id:"integration-user-roles-entitlements-vs-privileges"},"Integration User Roles: Entitlements vs Privileges"),(0,i.kt)("p",null,"Aside from it ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"not"))," being a best practice to ask your customer to register your integration on the Developer Portal on your behalf, even worse is asking them to do so and then ask that they give your integration an Admin Role. ",(0,i.kt)("em",{parentName:"p"},"Never, never, never")," ask them to do these terrible things."),(0,i.kt)("p",null,"Instead, develop your integration following the Register once model, and hand off your integration Identifier to your customer. If you are an LTI 1.3 provider - you are done. Your customer adds your LTI integration and sets availability to their users and they are done. No passing around of Keys and Secrets or error prone multiple copy pasting of multiple configuration strings... you hand off one integration Id which you get when you register your integration on the portal and done."),(0,i.kt)("p",null,"Well almost... the current exception (see The Future is Bright(er) below) is if your integration uses our REST APIs. Then your integration documentation must  provide Anthology administrators with a list of privileges that need to be added to the user which is associated with your integration. The APIs list entitlements, not privileges, and therein lay a problem for Customers."),(0,i.kt)("p",null,"As the integration provider you want a great customer experience so you use the ",(0,i.kt)("a",{href:"https://docs.anthology.com/docs/REST%20APIs/Learn/Admin/rest_apis-learn-admin-rest_and_learn#converting-entitlements-to-gui-privileges",target:"_top"}," bookmarklet tool")," to determine the privileges you include in your documentation to provide guidance to admins installing your integration."),(0,i.kt)("h2",{id:"integration-support"},"Integration Support"),(0,i.kt)("h3",{id:"who-is-responsible-for-your-integrations-support"},"Who is responsible for your integration's support?"),(0,i.kt)("p",null,"It probably goes without saying, but the integration vendor is responsible. Not Anthology."),(0,i.kt)("p",null,"When the vendor registers in the Developer Portal they provide email information which is seen by customers when they install the integration. That is why this email and contact information must be publicly reachable. That is also why it makes sense to have a specific account from which all your integrations are delivered. "),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{href:"https://docs.anthology.com/docs/Developer%20Portal/community-dev_portal",target:"_top"},"Getting Started with the Dev Portal")," for information."),(0,i.kt)("h2",{id:"the-future-is-brighter"},"The Future is Bright(er)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Forward Looking Statement")," applies:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Statements regarding our product development initiatives, including new products and future product upgrades, updates or enhancements represent our current intentions, but may be modified, delayed or abandoned without prior notice and there is no assurance that such offering, upgrades, updates or functionality will become available unless and until they have been made generally available to our customers.")),(0,i.kt)("h3",{id:"simplification-of-integration-installation"},"Simplification of Integration Installation"),(0,i.kt)("p",null,"To ensure an optimal customer experience we have a few items which we intend to deliver in 2023. Each of these enable the offset the heavy lift of the installation of any integration from customers to the developer."),(0,i.kt)("h4",{id:"auto-install-of-rest-users-with-privileges"},"Auto-Install of REST Users with Privileges"),(0,i.kt)("p",null,"Integrations using the REST API require association with a REST integration user who has the necessary system role privileges (never a System Administrator Role!!!). "),(0,i.kt)("p",null,"The REST APIs identify with ",(0,i.kt)("em",{parentName:"p"},"entitlements")," while the systems identify with ",(0,i.kt)("em",{parentName:"p"},"privileges"),". This complicates installation of REST integrations not using Three Legged OAuth (3LO). "),(0,i.kt)("p",null,'Late 2023 we intend to release a "manifest" model for integrations which, amongst other useful data points,  identifies the entitlements required by an integration. This manifest will be used on Administrator request to install an integration to display important information about the integration to the Administrator - notably the privileges requested by the integration developer. '),(0,i.kt)("p",null,"The now informed Administrator may choose to install the integration at which time the REST integration user is created with the necessary privileges. "),(0,i.kt)("p",null,"No interaction on the part of the Administrator other than reviewing and accepting the installation!"),(0,i.kt)("h4",{id:"lti-and-rest-share-jwt-for-authn"},"LTI and REST share JWT for authN"),(0,i.kt)("p",null,"Currently LTI 1.3 and REST APIs use two separate authentication models. LTI 1.3 uses JSON Web Tokens (JWT) and REST uses OAuth 2 basic authentication using Key:Secret pairs. "),(0,i.kt)("p",null,"Late 2023 the use of JWT will be optional for REST API-based integrations and JWT will be used exclusively for LTI 1.3 integrations which also use our REST APIs."),(0,i.kt)("p",null,"This greatly simplifies the development of LTI 1.3 integrations which use our REST APIs. The optional use of JWTs for non-LTI integrations provide an improved security model for REST API-based integrations while being backward compatible with existing REST integrations."))}h.isMDXComponent=!0}}]);