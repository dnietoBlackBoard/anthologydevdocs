"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[9301],{4137:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},h=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=u(o),d=a,m=c["".concat(l,".").concat(d)]||c[d]||p[d]||i;return o?n.createElement(m,r(r({ref:t},h),{},{components:o})):n.createElement(m,r({ref:t},h))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7278:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=o(7462),a=(o(7294),o(4137));const i={layout:"post",title:"Use One-Time Session Token to Authenticate with UEF",date:"2021-05-10 16:13",category:"blog",post_id:"20210511-uefnocookies",author:"Scott Hurrey",tags:["uef","ultra","lti","rest"],summary:"As browsers continue to lock down cookies, particularly with iframes, there is a new way to handle authentication with the Ultra Extension Framework."},r="Use One-Time Session Token to Authenticate with UEF",s={permalink:"/blog/2021/05/10/2021/use one time session tokens instead of cookies for UEF authentication",source:"@site/blog/2021/2021-05-10-use one time session tokens instead of cookies for UEF authentication.md",title:"Use One-Time Session Token to Authenticate with UEF",description:"In testing with the Google Canary Chrome Browser, one of our clients discovered an issue that was blocking users from logging in to their Learn instance. After much troubleshooting, we discovered a multi-layer issue that brings us to, you guessed it, cookies.",date:"2021-05-10T16:13:00.000Z",formattedDate:"May 10, 2021",tags:[{label:"uef",permalink:"/blog/tags/uef"},{label:"ultra",permalink:"/blog/tags/ultra"},{label:"lti",permalink:"/blog/tags/lti"},{label:"rest",permalink:"/blog/tags/rest"}],readingTime:4.515,hasTruncateMarker:!1,authors:[{name:"Scott Hurrey"}],frontMatter:{layout:"post",title:"Use One-Time Session Token to Authenticate with UEF",date:"2021-05-10 16:13",category:"blog",post_id:"20210511-uefnocookies",author:"Scott Hurrey",tags:["uef","ultra","lti","rest"],summary:"As browsers continue to lock down cookies, particularly with iframes, there is a new way to handle authentication with the Ultra Extension Framework."},prevItem:{title:"LTI 1.3 tools must generate their own keys and JWKS URL",permalink:"/blog/2021/07/22/2021/LTI 1.3 tools must generate their own keys and JWKS URL"},nextItem:{title:"How to Create a User With Limited Entitlements For REST API Calls",permalink:"/blog/2021/01/06/2021/How to Create a User With Limited Entitlements For REST API Calls"}},l={authorsImageUrls:[void 0]},u=[{value:"So what can you do?",id:"so-what-can-you-do",level:2},{value:"LTI\xa01.3",id:"lti13",level:3},{value:"LTI\xa01.1",id:"lti11",level:3},{value:"Summary",id:"summary",level:2}],h={toc:u},c="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In testing with the ",(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/chrome/canary/"},"Google Canary Chrome Browser"),", one of our clients discovered an issue that was blocking users from logging in to their Learn instance. After much troubleshooting, we discovered a multi-layer issue that brings us to, you guessed it, ",(0,a.kt)("a",{parentName:"p",href:"https://docs.anthology.com/blog/2020/10/15/Cookies-and-Browsers"},"cookies"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"This affects clients in SaaS with Ultra Base Navigation enabled using Ultra integrations that rely on UEF"))),(0,a.kt)("p",null,"Here is a brief description of the contributing factors:"),(0,a.kt)("p",null,"First, the client had built a custom Ultra login page. The page included code designed to ensure that Learn login pages would never render inside of an iframe within Learn. It looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"if\xa0(\xa0top\xa0!=\xa0self\xa0)\n{\n\xa0\xa0\xa0\xa0top.location.replace(\xa0self.location.href\xa0);\n}\n")),(0,a.kt)("p",null,"In and of itself there's nothing wrong with it. We, at Anthology, have removed it from the default Ultra login page, but many clients use it in Original login pages, and so it's moved with them into Ultra."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you are unsure whether you have a custom login page, visit ",(0,a.kt)("a",{parentName:"p",href:"https://help.blackboard.com/Learn/Administrator/SaaS/User_Interface_Options/Ultra_Experience/Institution_Branding/Customize_the_Login_Page"},"help.blackboard.com")," for more information.")),(0,a.kt)("p",null,"Secondly, when a user logged in, Ultra Extensions automatically fired off an LTI launch to UEF-enabled tools. The way UEF works is: after the LTI launch is validated, the tool redirects to the Learn REST endpoint to initiate a UserAuth flow. In our documentation, we call this a Three-Legged OAuth or ",(0,a.kt)("a",{parentName:"p",href:"https://docs.anthology.com/docs/REST%20APIs/Learn/Getting%20Started/rest_apis-learn-getting-started-3lo"},"3LO"),". In most cases, it's a process that relies on a session cookie to hold everything together. This impending release of Chrome (and other browsers) will block this cookie because everything is happening across domains and involves the use of iframes."),(0,a.kt)("p",null,"So what happens is that, even though the integration is configured in Learn to not force the end-user to authorize the integration, the lack of the session cookie means that Learn has no idea that this user is logged in, so it pops open the login page."),(0,a.kt)("p",null,"Remember that code snippet above in the custom login page? Well, that takes over the entire browser page with the Learn login. And when the user logs in again, it renders the JavaScript meant for the UEF iframe into the page. In other words, it overtakes your Learn browser session. There is no way to actually get past that screen."),(0,a.kt)("p",null,"Related, this same issue affects Safari users when ",(0,a.kt)("a",{parentName:"p",href:"https://support.apple.com/guide/safari/prevent-cross-site-tracking-sfri40732/mac"},"cross-site tracking is disabled"),"."),(0,a.kt)("h2",{id:"so-what-can-you-do"},"So what can you do?"),(0,a.kt)("p",null,"Well, that depends upon who is reading this blog. If you are an administrator trying to get your users back in Learn, the most immediate fix is to remove that snippet from your login page. It won't fix your broken UEF integration, but it will at least let your users log in and interact with Learn."),(0,a.kt)("p",null,"If you are a developer that has built a UEF integration, we actually implemented a fix for this in April: a way to bypass the need for a session cookie in this process. In the LTI launch, we now provide what is called a\xa0one-time session cookie. This is present in both LTI 1.1 and 1.3 launches."),(0,a.kt)("p",null,"If you are using LTI 1.3, there's a small bug in this. I will share a workaround that will both get around this bug, but not fail when the bug is fixed."),(0,a.kt)("p",null,"This one-time session cookie is added to the claims in the LTI 1.3 JWT and the form POST parameters in LTI 1.1. You can grab that value from the LTI launch, return it as a parameter in your 3LO authorization code request, and your problem will be solved."),(0,a.kt)("h3",{id:"lti13"},"LTI\xa01.3"),(0,a.kt)("p",null,"In LTI 1.3, you will see the value in the ",(0,a.kt)("inlineCode",{parentName:"p"},"https://blackboard.com/lti/claim/one_time_session_token")," claim. This token is made up of a specially generated token value. It should also be followed by a comma and the user's UUID. The bug is that the comma is missing. Luckily, the user's UUID is the sub token in the same set of LTI claims. We intend to fix this, but to ensure your code works both now and after the fix, you can simply look for the comma. If it's not there, append it and the sub and you will be off and running. Here's a Python 3 code snippet to illustrate how this might look. We will be updating our UEF sample code, but at the time of this writing, we have not done so."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\xa0\xa0\xa0\xa0#\xa0Get\xa0the\xa0value\xa0of\xa0the\xa0one\xa0time\xa0session\xa0token\xa0from\xa0the\xa0LTI\xa0claim\n\xa0\xa0\xa0\xa0one_time_session_token\xa0\xa0=\xa0message_launch_data['https://blackboard.com/lti/claim/one_time_session_token']\n\n\xa0\xa0\xa0\xa0#\xa0If\xa0there\xa0is\xa0no\xa0comma\xa0in\xa0the\xa0value,\xa0we've\xa0hit\xa0the\xa0bug.\xa0Add\xa0it\xa0and\xa0the\xa0user's\xa0UUID\n\xa0\xa0\xa0\xa0if\xa0\",\"\xa0not\xa0in\xa0one_time_session_token:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0one_time_session_token\xa0+=\xa0\",\"\xa0+\xa0message_launch_data['sub']\n\n\xa0\xa0\xa0\xa0#\xa0Add\xa0the\xa0one_time_session_token\xa0to\xa0the\xa0query\xa0parameters\xa0to\xa0send\xa0to\xa0the\xa0Authorization\xa0Code\xa0endpoint\n\xa0\xa0\xa0\xa0params\xa0=\xa0{\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'redirect_uri'\xa0:\xa0Config.config['app_url']\xa0+\xa0'/authcode/',\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'response_type'\xa0:\xa0'code',\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'client_id'\xa0:\xa0Config.config['learn_rest_key'],\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'one_time_session_token'\xa0:\xa0one_time_session_token,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'scope'\xa0:\xa0'*',\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'state'\xa0:\xa0str(uuid.uuid4())\n\xa0\xa0\xa0\xa0}\n\n\xa0\xa0\xa0\xa0#\xa0Encode\xa0the\xa0parameters\n\xa0\xa0\xa0\xa0encoded_params\xa0=\xa0urllib.parse.urlencode(params)\n\n\xa0\xa0\xa0\xa0#\xa0Redirect\xa0the\xa0successful\xa0LTI\xa0validation\xa0to\xa0the\xa0Authorization\xa0Code\xa0endpoint\n\xa0\xa0\xa0\xa0return(redirect(learn_url\xa0+\xa0'/learn/api/public/v1/oauth2/authorizationCode?'\xa0+\xa0encoded_params))\n")),(0,a.kt)("h3",{id:"lti11"},"LTI\xa01.1"),(0,a.kt)("p",null,"By now, I hope you are using LTI 1.3, but I know many are not. As a result, we also added a one-time session token to LTI 1.1 launches. This will come in the form POST parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"ext_one_time_session_token"),". Just like in the 1.3 example, your application should take this value from the LTI launch, append it to the authorization code request endpoint as ",(0,a.kt)("inlineCode",{parentName:"p"},"one_time_session_token=that_token")," and redirect them to the authorization code endpoint."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"We have validated this fix with one of the partners that was affected. If you are a developer, please fix the issue immediately! If you are an administrator of a Learn SaaS instance using Ultra, and you have UEF integrations, make sure you do not have that JavaScript snippet on your login page. And if you do, please remove it. Then let your UEF integration partners and developers know that this fix must be made as soon as possible."),(0,a.kt)("p",null,"Regardless of whether you are an administrator or a developer, please feel free to reach out to us at\xa0",(0,a.kt)("a",{parentName:"p",href:"mailto:developers@anthology.com"},"developers@anthology.com"),"\xa0with any questions."),(0,a.kt)("p",null,"Happy coding!"))}p.isMDXComponent=!0}}]);