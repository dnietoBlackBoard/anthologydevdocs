"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[3141],{4137:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),h=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=h(i),p=n,m=c["".concat(l,".").concat(p)]||c[p]||d[p]||o;return i?a.createElement(m,r(r({ref:t},u),{},{components:i})):a.createElement(m,r({ref:t},u))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,r[1]=s;for(var h=2;h<o;h++)r[h]=i[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},8392:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var a=i(7462),n=(i(7294),i(4137));const o={title:"LTI 1.3 Tool Implementation Guide",id:"lti-implementation-guide",categories:"Standards",published:"",edited:"",author:"Eric Preston"},r=void 0,s={unversionedId:"lti/tutorials/lti-implementation-guide",id:"lti/tutorials/lti-implementation-guide",title:"LTI 1.3 Tool Implementation Guide",description:"Overview",source:"@site/docs/lti/tutorials/implementation-guide.md",sourceDirName:"lti/tutorials",slug:"/lti/tutorials/lti-implementation-guide",permalink:"/docs/lti/tutorials/lti-implementation-guide",draft:!1,tags:[],version:"current",frontMatter:{title:"LTI 1.3 Tool Implementation Guide",id:"lti-implementation-guide",categories:"Standards",published:"",edited:"",author:"Eric Preston"},sidebar:"documentationSidebar",previous:{title:"Developing an LTI 1.3/Advantage Solution - Recordings and Resources",permalink:"/docs/lti/tutorials/develop-lti-advantage"},next:{title:"LTI Advantage - Names and Roles",permalink:"/docs/lti/tutorials/names-and-roles"}},l={},h=[{value:"Overview",id:"overview",level:3},{value:"What is LTI?",id:"what-is-lti",level:3},{value:"Security",id:"security",level:3},{value:"Cross-site Request Forgery",id:"cross-site-request-forgery",level:4},{value:"Encryption",id:"encryption",level:4},{value:"Authentication",id:"authentication",level:4},{value:"Registration Information",id:"registration-information",level:3},{value:"LTI Message Launch Flow",id:"lti-message-launch-flow",level:2},{value:"LTI Launch",id:"lti-launch",level:3},{value:"OIDC Login",id:"oidc-login",level:4},{value:"Receive JWT",id:"receive-jwt",level:4},{value:"Optional Steps",id:"optional-steps",level:4},{value:"Learn REST Token",id:"learn-rest-token",level:5},{value:"LTI Rest Token",id:"lti-rest-token",level:5},{value:"LTI Deep Linking",id:"lti-deep-linking",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=u("VersioningTracker"),d=u("AuthorBox"),p={toc:h},m="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(c,{frontMatter:o,mdxType:"VersioningTracker"}),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Implementing an LTI 1.3 + Advantage tool is involved, but we'll break down the steps here. There are many good resources\nfor building an LTI 1.3 tool as well:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.imsglobal.org/spec/lti/v1p3/impl"},"IMS LTI Implementation Guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IMSGlobal/ltibootcamp"},"LTI Bootcamp Resources"))),(0,n.kt)("h3",{id:"what-is-lti"},"What is LTI?"),(0,n.kt)("p",null,"At the end of the day all LTI is is a hyperlink from one web application (a Learning Management System or Virtual Learning Environment, called a Platform in the LTI specs) to another web application, called a Tool. The tool is normally hosted at a different domain and often created and supported by another vendor or the learning institution."),(0,n.kt)("p",null,"The difference with LTI from a regular hyperlink is it includes data such as the user making the request, the course context and possibly information about the resource (e.g., assignment, discussion, book chapter). For this reason an LTI message must be sent as an HTTP FORM POST to the receiving web application."),(0,n.kt)("h3",{id:"security"},"Security"),(0,n.kt)("p",null,"Why is LTI complicated if all it is is a hyperlink with data? The answer is: security."),(0,n.kt)("p",null,"A tool cannot blindly receive an HTTP POST with data from just anywhere. It needs to know who is sending that data and that it can trust the sender. A security contract must be established between the learning institution hosting the LMS and the tool. Additionally, because all LTI traffic is being transfered via a web browser, that traffic needs to be secured, both from an encryption standpoint as well as from a request forgery standpoint."),(0,n.kt)("h4",{id:"cross-site-request-forgery"},"Cross-site Request Forgery"),(0,n.kt)("p",null,"When a browser-based application has links that a user can click on to make something happen, there is an inherent risk of a cross-site request forgery attack, often abbreviated as CSRF or XSRF. If you are logged into your bank account's web site and they have a link or a URL that allows you to transfer money from one account to another, you run the risk of a malicious party offering you a link via email or social media that could get you to transfer money from your account to accounts you don't intend to send money."),(0,n.kt)("p",null,"In the world of teaching and learning, with an LTI tool link, there exists the possibility that a malicious user could offer you a link via email or social media to get you to act on their behalf, such as take a quiz or buy a book. We'll soon see how the LTI specs prevent this sort of attack."),(0,n.kt)("h4",{id:"encryption"},"Encryption"),(0,n.kt)("p",null,"Sensitive personal data are sent in LTI messages, so those data must be encrypted and LTI requires the use of TLS 1.2 or higher protocol from the browser. The days of insecure http transport are over. You must run your tool behind SSL supporting the TLS 1.2 or higher protocol."),(0,n.kt)("h4",{id:"authentication"},"Authentication"),(0,n.kt)("p",null,"A tool needs to have a trust relationship with any LMS sending them an LTI message. They can't just accept a message from anyone. Messages must be signed by the sending party and that signature must be validated by the receiving party. The solution the IMS Global has adopted is to use OAuth 2, OpenID Connect, JSON Web Tokens (JWT), and asymmetric public/private key pairs. These are all industry standard specifications for security, and LTI builds upon those."),(0,n.kt)("p",null,"When a platform sends a message it packages it up as a JSON Web Token (",(0,n.kt)("a",{parentName:"p",href:"https://jwt.io"},"JWT"),") and signs the token with its private key that it has minted and stores securely. The platform publishes its public key at a publicly-accessibly URL and the tool uses that public key to validate the signer of the message."),(0,n.kt)("h3",{id:"registration-information"},"Registration Information"),(0,n.kt)("p",null,"In order to achieve the security objectives, there are some pieces of information that must be exchanged between the platform and the tool. This is the security contract."),(0,n.kt)("p",null,"The platform must receive the following information from the tool:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The fully-qualified domain name(s) where the tool is hosted, e.g., example.com"),(0,n.kt)("li",{parentName:"ul"},"The OIDC Login URI - a URL to the tool's endpoint for initiating the 3rd-party initiated login flow, which protects agains CSRF. See the ",(0,n.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-core-1_0.html#ThirdPartyInitiatedLogin"},"OIDC 3rd-party intiated login specification"),"."),(0,n.kt)("li",{parentName:"ul"},"One or more Redirect URIs - a URL where the tool will receive the LTI FORM POST with the id_token (JWT) containing the LTI message payload. Note, the redirect URIs must use the fully-qualified domain names referenced above."),(0,n.kt)("li",{parentName:"ul"},"JWKS URL - The URL for the tool's public key set. If the tool is going to send messages to the platform, such as a Deep Linking response or a request for an OAuth access token, then the tool must sign those messages with a private key that it has minted, and provide the public key associated with that private key. This is the asymmetric part mentioned above. See ",(0,n.kt)("a",{parentName:"li",href:"https://tools.ietf.org/id/draft-ietf-jose-json-web-key-00.html"},"https://tools.ietf.org/id/draft-ietf-jose-json-web-key-00.html")," for more information."),(0,n.kt)("li",{parentName:"ul"},"A signing algorithm, e.g., RS-256 or RS-512. Both sides need to agree on the algorithm to sign and verify messages.")),(0,n.kt)("p",null,"The tool must receive and store for later use the following information from the platform:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Issuer - the issuer of the credentials. In Learn's case it is always ",(0,n.kt)("a",{parentName:"li",href:"https://blackboard.com"},"https://blackboard.com")),(0,n.kt)("li",{parentName:"ul"},"Client ID - in Learn this is labeled the Application ID. An issuer can have one or more client IDs associated with it."),(0,n.kt)("li",{parentName:"ul"},"Public JWKS URL - the JWKS URL of the platform (Learn in this case) with which the tool validates the signature of incoming LTI messages"),(0,n.kt)("li",{parentName:"ul"},"OAuth 2 Token URL - the URL of the platform's OAuth 2 token issuer for use when making LTI service calls, such as for Assignment and Grades, or Names and Roles."),(0,n.kt)("li",{parentName:"ul"},"OIDC Auth Request URL - the URL the tool must redirect back to after an OIDC login request. This is part of the OIDC login flow for protecting agains CSRF attacks"),(0,n.kt)("li",{parentName:"ul"},"Deployment ID - a single client ID can have one or more deployments, so tools must track each of those deployments. This is an extension created by the LTI specification.")),(0,n.kt)("p",null,"With Learn you will also receive an Application Key and and Application Secret. Store these securely. These are what you use if you want to use the Learn public REST API."),(0,n.kt)("h2",{id:"lti-message-launch-flow"},"LTI Message Launch Flow"),(0,n.kt)("p",null,"We have covered the information the two parties need to exchange and why that information is needed, at a high level. Now we look at the specifics of implementing the reception of an LTI launch by a tool from a platform."),(0,n.kt)("p",null,"The UML sequence diagram below shows all the steps, including some optional ones, for implementing the reception of an LTI message launch. We'll break each step down in words."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"LTI Launch Sequence",src:i(2637).Z,width:"1443",height:"1300"})),(0,n.kt)("h3",{id:"lti-launch"},"LTI Launch"),(0,n.kt)("h4",{id:"oidc-login"},"OIDC Login"),(0,n.kt)("p",null,"When a user clicks on an LTI link within Learn the Learn server receives a GET request from the browser with information about that LTI link. Once it loads the tool configuration associated with that link the first thing it does is initiate the OIDC Login request with a browser redirect to the registered OIDC Login URI provided by the tool. It passes some information along with the request as query parameters."),(0,n.kt)("p",null,"The data sent by the platform on the OIDC login are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"issuer"),(0,n.kt)("li",{parentName:"ul"},"login_hint - an opaque value to the tool that must be returned back"),(0,n.kt)("li",{parentName:"ul"},"target_link_uri - the URI configured by the tool for this LTI link"),(0,n.kt)("li",{parentName:"ul"},"lti_message_hint - an opaque value to the tool that must be returned back"),(0,n.kt)("li",{parentName:"ul"},"lti_deployment_id - this is optional, but Learn always sends it"),(0,n.kt)("li",{parentName:"ul"},"client_id - this is optional, but Learn always sends it"),(0,n.kt)("li",{parentName:"ul"},"lti_storage_target - for use if cookies aren't possible")),(0,n.kt)("p",null,"The tool must then redirect or post back to the registered OIDC Authentication Request URI provided by the platform, including a Redirect URI (which must be pre-registered) and a state value, along with the other values passed in by the platform. The Redirect URI declares where the tool wants the subsequent LTI launch to go, and the state is what protects against CSRF. The state should be saved in a cookie, so the tool can verify that the initiator of the request is the same browser that sends the LTI message launch. If a cookie cannot work because of browser restrictions preventing setting of cookies by 3rd parties in iframes, then another option must be pursued. There is a new spec coming soon to help with that."),(0,n.kt)("p",null,"The fields the tool must send back are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"response_type=id_token"),(0,n.kt)("li",{parentName:"ul"},"scope=open_id"),(0,n.kt)("li",{parentName:"ul"},"login_hint - that was passed in on the login request"),(0,n.kt)("li",{parentName:"ul"},"lti_message_hint - that was passed in on the login request"),(0,n.kt)("li",{parentName:"ul"},"state - a value the tool generates for protecting against CSRF"),(0,n.kt)("li",{parentName:"ul"},"nonce - a value the tool generates to protect against duplicate requests"),(0,n.kt)("li",{parentName:"ul"},"redirect_uri - a pre-registered URL the tool wants the subsequent LTI POST to be made"),(0,n.kt)("li",{parentName:"ul"},"client_id - the client ID of this registration")),(0,n.kt)("h4",{id:"receive-jwt"},"Receive JWT"),(0,n.kt)("p",null,"The platform receives the OIDC authentication request from the tool and validates that the redirect URI is registered. It then builds the id_token (JWT) that contains the LTI payload (user, course, resource, etc.) and signs it with its private key. The platform then auto-submits a FORM with the POST method to the redirect URI the tool specified with two form parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"id_token - the JWT"),(0,n.kt)("li",{parentName:"ul"},"state - the state the tool passed to the platform in the OIDC login response")),(0,n.kt)("p",null,"The tool receives this FORM POST from the browser and the first thing it should do is validate the state is what it stored in the cookie. If it doesn't match the tool should reject the request."),(0,n.kt)("p",null,"The next step is to unpack the JWT and validate the signature. JWTs are comprised of three Base64-encoded strings separated by the period (.) sign. The first part is the header which contains the key ID (kid) and signing algorithm. The second part is the payload in JSON format, and it contains the issuer (iss), client ID (aud), user ID (sub) and other information about the launch. The tool must look up the platform configuration for that issuer/client ID/deployment ID combination and get the platform's public key from the registered public key URL, using the kid in the JWT header for selecting the particular public key the platform requires. The third part is the signature, which normally the tool code won't work with directly."),(0,n.kt)("p",null,"The tool then uses a library of their choosing to validate the signature of the JWT. If the signature is valid then the tool can proceed to process the rest of the JWT information and render its UI with the information it has about the LTI message."),(0,n.kt)("h4",{id:"optional-steps"},"Optional Steps"),(0,n.kt)("p",null,"There are two optional steps in the sequence diagram above."),(0,n.kt)("h5",{id:"learn-rest-token"},"Learn REST Token"),(0,n.kt)("p",null,"If your tool is going to use the Learn public REST API in order to get or set information it can't via LTI then it should retrive a Learn OAuth 2 access token at this time and cache it. There are choices as to what OAuth 2 flow you can use, so please refer to this document on how to ",(0,n.kt)("a",{parentName:"p",href:"/docs/rest-apis/learn/getting-started/first-steps"},"retrieve a Learn OAuth 2 access token"),". In the diagram above we show using the AuthCode flow as its the most common for UI-based work where you want the API call to be done on behalf of the interacting user. See this document on using ",(0,n.kt)("a",{parentName:"p",href:"/docs/rest-apis/learn/getting-started/3lo"},"three-legged oauth"),"."),(0,n.kt)("h5",{id:"lti-rest-token"},"LTI Rest Token"),(0,n.kt)("p",null,"If your tool wants to take advantage of the LTI services, such as Assignment & Grades, or Names & Roles, then you'll need to retrieve an LTI access token. This token is of a different format and uses a different security model than the Learn public API."),(0,n.kt)("p",null,"You'll need to construct a signed (with your private key) JWT and post that to the OAuth 2 Token URL registered with the tool. If all is well you will receive an access token back, which you should cache, and use for making service calls back to Learn. We'll cover making service calls in a later section."),(0,n.kt)("h2",{id:"lti-deep-linking"},"LTI Deep Linking"),(0,n.kt)("p",null,"LTI Deep Linking is a UI flow that allows a user, often an instructor, to launch from the platform to the tool, via the browser, and display a UI from the tool from which to select or create content that will end up back in the platform. For example, you may wish to include links to publisher content in the course outline. You may wish to embed an instructional video in the rich text editor of a discussion or assignment. You may wish to create an assignment via a plagiarism detection service and include that in a learning module. There are unlimited use cases for deep linking. The key point to understand is that it's about getting content from a 3rd party LTI provider into the Learning Management System of your choice. Rather than having an instructor copy and paste URLs the tool vendor provides, which is the old way of doing things, deep linking allows the instructor (or student, in the case of submitting an assignment or contributing to a discussion) to select content via the tool's browser-based UI."),(0,n.kt)("p",null,"An LTI Deep Linking launch is much like a Resource Link launch, except the message type is different, and you receive an additional claim: ",(0,n.kt)("inlineCode",{parentName:"p"},"https://purl.imsglobal.org/spec/lti-dl/claim/deep_linking_settings")),(0,n.kt)("p",null,"This claim contains information about what the platform accepts, and a data field that must be sent back."),(0,n.kt)("p",null,"The tool then presents a UI allowing the user to select or create content the tool provides. It can be LTI links, web links, files, images, or html. Learn only supports LTI links and web links at the moment."),(0,n.kt)("p",null,"You can return one or more content items, and depending on from where the tool was launched the links will appear in the course outline or the rich text editor. If returned to the rich text editor they can be displayed as hyperlinks or embedded in the editor. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/lti/lti-deep-linking"},"Deep Linking JSON")," for details on how to configure the rendering of LTI links in the rich text editor."),(0,n.kt)(d,{frontMatter:o,mdxType:"AuthorBox"}))}f.isMDXComponent=!0},2637:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/lti-launch-sequence-76ffacb6a6a800c5a927e9fece1ed79d.png"}}]);