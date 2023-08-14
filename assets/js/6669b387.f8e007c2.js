"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[5065],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(a),h=n,g=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return a?o.createElement(g,i(i({ref:t},u),{},{components:a})):o.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<r;l++)i[l]=a[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4625:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var o=a(7462),n=(a(7294),a(4137));const r={layout:"post",title:"Production groups",id:"rest_apis-learn-admin-prod-groups",categories:"Learn Rest Admin",author:"Scott Hurrey",doctitle:"Developer Portal, Development and Production Groups"},i=void 0,p={unversionedId:"rest-apis/learn/admin/rest_apis-learn-admin-prod-groups",id:"rest-apis/learn/admin/rest_apis-learn-admin-prod-groups",title:"Production groups",description:"What are Groups?",source:"@site/docs/rest-apis/learn/admin/production-groups.md",sourceDirName:"rest-apis/learn/admin",slug:"/rest-apis/learn/admin/rest_apis-learn-admin-prod-groups",permalink:"/docs/rest-apis/learn/admin/rest_apis-learn-admin-prod-groups",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Production groups",id:"rest_apis-learn-admin-prod-groups",categories:"Learn Rest Admin",author:"Scott Hurrey",doctitle:"Developer Portal, Development and Production Groups"},sidebar:"documentationSidebar",previous:{title:"Groups, Site quotas and rate limits",permalink:"/docs/rest-apis/learn/admin/rest_apis-learn-admin-group_quotas_rates"},next:{title:"Rest and Learn",permalink:"/docs/rest-apis/learn/admin/rest_apis-learn-admin-rest_and_learn"}},s={},l=[{value:"What are Groups?",id:"what-are-groups",level:3},{value:"Group Naming Requirements",id:"group-naming-requirements",level:3},{value:"Creating Groups in the Developer Portal",id:"creating-groups-in-the-developer-portal",level:3},{value:"Managing Group Applications",id:"managing-group-applications",level:3},{value:"Managing Group Developers",id:"managing-group-developers",level:2},{value:"The Developer View",id:"the-developer-view",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},d=u("VersioningTracker"),c=u("AuthorBox"),h={toc:l},g="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(g,(0,o.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(d,{frontMatter:r,mdxType:"VersioningTracker"}),(0,n.kt)("h1",{id:"developer-portal-development-and-production-groups"},"Developer Portal, Development and Production Groups"),(0,n.kt)("h3",{id:"what-are-groups"},"What are Groups?"),(0,n.kt)("p",null,"The Blackboard Developer Portal provides the means to manage application\nreleases and associated developers through the concept of Groups. You can\ncreate groups for individual and team development, as well as ",(0,n.kt)("strong",{parentName:"p"},"target a\nspecific group for a production application release (your Production Group)"),".\nThis allows you to manage your applications and the developer teams behind\nthem, enabling access to application references by team members."),(0,n.kt)("p",null,"Groups always have at least one member - that unique member has admin rights\nand may not be removed from the group. You may add developers to groups.\nDevelopers added to groups may be given administrator privileges on the group."),(0,n.kt)("p",null,"Groups may also have one or more applications associated with the group.\nApplication association allows for granular management of applications and\nteams access to application information."),(0,n.kt)("p",null,"Groups enable you to manage the developers associated with your projects and\nthe release level of your applications."),(0,n.kt)("p",null,"And finally Groups allow for a higher contracted rate_limit, and site quota,\nover those set for default developer accounts. These settings are based on\nyour Blackboard license or Business Development contract. If you do not have a\nBlackboard product license or do not have a Business Development contract your\ngroups will all have default developer account settings."),(0,n.kt)("p",null,"This document explains how to create and manage your groups."),(0,n.kt)("h3",{id:"group-naming-requirements"},"Group Naming Requirements"),(0,n.kt)("p",null,"This is a very important topic because the name you give the group is the name\nthat shows up in the Learn system that is associated with the\napplication ID when the Learn Administrator configures the integration. In\ngeneral, you want the Group Name to include at minimum one or two items, 1.The\nname of the company/vendor that owns the application, and optionally 2. the\nname of the application or product. Below is an example for one application\nID:"),(0,n.kt)("p",null,"For developers you could use following name. Notice how we include the company\nname, the product name, and who the group belongs to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SuperSoftware - Sudoku For Learners - Development Team 1"),(0,n.kt)("li",{parentName:"ul"},"SuperSoftware - Sudoku For Learners - Development Team 2")),(0,n.kt)("p",null,"Then your production group name could be the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SuperSoftware - Sudoku For Learners; or"),(0,n.kt)("li",{parentName:"ul"},"SuperSoftware, Sudoku For Learners")),(0,n.kt)("p",null,"If your company had a different product, say Multinote, it will have a\ndifferent application ID and you will associate it with different groups, say:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SuperSoftware - Multinote - Development Team 1"),(0,n.kt)("li",{parentName:"ul"},"SuperSoftware - Multinote - Development Team 2"),(0,n.kt)("li",{parentName:"ul"},"SuperSoftware - Multinote")),(0,n.kt)("p",null,"If your company name indicates your product, and your product name is\ntrademarked, then you have several choices for a production group name. For\nexample if your company is Mark's Software and your Trademarked' application\nis Multinote then you can have your production group name be one of the\nfollowing:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mark's Software"),(0,n.kt)("li",{parentName:"ul"},"Multinote"),(0,n.kt)("li",{parentName:"ul"},"Mark's Software - Multinote")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"We ask that you not add other, unnecessary information to a production group name. For example, including text indicating that the group name is associated with Blackboard REST APIs is not necessary, nor is an indication of server type such as '-test', '-stage', or '-production', as given the context, we and the Learn Administrator know that's where and how the group name is being used.")," It doesn't matter if you have a SOAP Web Service proxy of the same name as that shows up on a different page."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"We will only assign site and rate limits higher than the defaults for development groups to Production Groups that meet these naming requirements.")),(0,n.kt)("p",null,"Next, let's take a look at how you create Groups."),(0,n.kt)("h3",{id:"creating-groups-in-the-developer-portal"},"Creating Groups in the Developer Portal"),(0,n.kt)("p",null,"Management of Groups and Applications requires that you have logged into the\nDeveloper Portal. Once logged in you are taken to the Application Management\nportion of the Developer Portal. It is here that you may manage your groups."),(0,n.kt)("p",null,"Note in the below screen capture that Sterling Silver is a member of the\nSTERLING MOSS group which was created when he created his Developer Portal\nAccount. We already know that Sterling is the Admin of the group so let's\nclick My Groups and take a look a the STERLING MOSS group."),(0,n.kt)("p",null,"If you created your Developer Portal account before we introduced groups that\nis not a problem, you will now have a group based on your account information\nand you may edit this group name."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1 - Sterling Moss apps - cropped.png",src:a(6201).Z,width:"2272",height:"1469"})),(0,n.kt)("p",null,"When Sterling clicks on the My Groups link he is taken to the Groups\nmanagement page (1) where he may view groups in which he is a member (2), view\ndevelopers in his groups (3), add developers to groups of which he is an\nadministrator (4), and create groups and rename groups he is administering\n(5)."),(0,n.kt)("p",null,"Groups are created by clicking the Create link next to the Group chooser."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2 - Sterling Moss groups - cropped.png",src:a(7482).Z,width:"2288",height:"1465"})),(0,n.kt)("p",null,"When Stirling clicks Create, a dialog is displayed where he may enter the name\nof his group. Clicking the Create button will saves the group."),(0,n.kt)("p",null,"Groups may be used to manage application releases. For example Sterling may\nhave a limited-use alpha group with full developer team access, a beta-group\nwith broader application distribution and a smaller developer team, or a\nproduction group with limited admin access. We will discuss Managing Group\nApplications later in this document."),(0,n.kt)("p",null,"Sterling chooses to add a group. In this case Sterling is creating a group for\nhis company's production software."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"3 - Sterling Moss add group - cropped.png",src:a(164).Z,width:"2290",height:"1464"})),(0,n.kt)("p",null,"Note that on creating a group you are automatically added to the group with\nadministrator privileges. This allows you to add developers or otherwise\nmanage the group and it's associated applications."),(0,n.kt)("p",null,"Now that Sterling has created a production group he may want to associate one\n(or more) of his applications with this group, or add developers from his team\nto this new group to assist with administrating the group."),(0,n.kt)("p",null,"Let's take a look at managing a group's applications..."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"4 - Sterling Moss groups after add group - cropped.png",src:a(3618).Z,width:"2287",height:"1463"})),(0,n.kt)("h3",{id:"managing-group-applications"},"Managing Group Applications"),(0,n.kt)("p",null,"As the owner of several applications and several groups you can associate\napplications with different developer groups."),(0,n.kt)("p",null,"Let's log in as Steve Ranger, owner of RangerSoft."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"5 - Steve Ranger login - cropped.png",src:a(4442).Z,width:"2291",height:"1464"})),(0,n.kt)("p",null,"When clicking the My Apps link Steve can now see his applications and the\ngroups with which they are associated."),(0,n.kt)("p",null,'Steve has his personal group "STEVE RANGER" (1), a development group -\n"RangerSoft - dev" (2), and his production group "RangerSoft" (3).'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"6 - Steve Ranger apps - cropped.png",src:a(7833).Z,width:"2289",height:"1464"})),(0,n.kt)("p",null,"Steve's groups have specific applications associated with them. Steve has his\nexperimental application - Steve's Experiment - under his personal group. This\napplication may be deleted by using the Trash can icon."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"7 - Steve Ranger change app group - cropped.png",src:a(8989).Z,width:"2282",height:"1463"})),(0,n.kt)("p",null,"Steve also has an application in development - Multinote Plus. This is under\nhis RangerSoft - dev group. This application also may be deleted by using the\nTrash can icon."),(0,n.kt)("p",null,"Finally Steve has a production application - Multinote. This is under his\nproduction RangerSoft group. This application (extra space was here..) may not\nbe deleted. This is to protect from accidentally deleting applications which\nhave been deployed to production environments."),(0,n.kt)("p",null,"Because Steve has administrative rights he may change the group with which an\napplication is associated at any time. Changing an application's group from a\nproduction group to a non-production group allows for the deleting of that\napplication."),(0,n.kt)("p",null,"Note that deleting an application ",(0,n.kt)("strong",{parentName:"p"},"will")," break any deployments. Also note\nthat changing an application's group may change the rate_limit for that\napplication."),(0,n.kt)("h2",{id:"managing-group-developers"},"Managing Group Developers"),(0,n.kt)("p",null,"Developers who have been added to groups may see applications that are\nassociated with a group and may also be designated as administrators of a\ngroup."),(0,n.kt)("p",null,"Steve has multiple developers. and Steve wants to add a developer to his\nproduction RangerSoft group so he clicks the My Groups link and opens his\nGroups management page."),(0,n.kt)("p",null,"He then clicks the Add Developers icon as indicated by the arrow."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"8 - Steve Ranger groups - cropped.png",src:a(6543).Z,width:"2284",height:"1464"})),(0,n.kt)("p",null,"Clicking the Add Developer Icon opens a dialog for entering the email address\nof the developer he wants to add to his group."),(0,n.kt)("p",null,"Note that in order to add developers they must have previously registered for\na developer portal account and you must know the email address with which they\nregistered."),(0,n.kt)("p",null,"Steve enters the email address for one of his developers and clicks the Add\nDeveloper button."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"9 - Steve Ranger add dev to group - cropped.png",src:a(1554).Z,width:"2289",height:"1467"})),(0,n.kt)("p",null,"Adding a developer to your group allows that developer to see all your\napplications. The administrator setting on the developer for a specific group\nis what enables that developer to manage the associated application"),(0,n.kt)("p",null,"The default when adding a developer is that they have no admin privileges."),(0,n.kt)("p",null,"Steve wants Junior to admin the applications associated with the RangerSoft -\ndev group, so Steve changes to that group and changes Junior's privileges."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"10 - Steve Ranger change group - cropped.png",src:a(3607).Z,width:"2285",height:"1461"})),(0,n.kt)("h3",{id:"the-developer-view"},"The Developer View"),(0,n.kt)("p",null,"When Junior Developer logs into the Developer Portal he now sees the two\nRangerSoft groups that Steve created."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"11 - Picture1.png",src:a(4352).Z,width:"702",height:"341"})),(0,n.kt)("p",null,"Junior may admin the application association for the Multinote Plus\napplication which is associated with the RangerSoft - dev group because Steve\nmade Junior an administrator on that group. Also note that because Steve did\nnot make Junior an admin on the the RangerSoft group Junior has no application\nadmin privileges."),(0,n.kt)(c,{frontMatter:r,mdxType:"AuthorBox"}))}m.isMDXComponent=!0},6201:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/production-groups-1-ef0a065c844de85fd1ec08ab247048b3.png"},3607:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/production-groups-10-0587d4ce7b019029b0e0b67d366d4724.png"},4352:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/production-groups-11-c2dcf1da20a7b742698e66c89f8b88f2.png"},7482:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/production-groups-2-78726be270860d0c27729d2e34134aa2.png"},164:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/production-groups-3-d592753476a2c3f71128c9771b6c1038.png"},3618:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/production-groups-4-2506e6f79f4fd80d04331e90a457bc70.png"},4442:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/production-groups-5-daed0f02daad08272d5b23c8b27de902.png"},7833:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/production-groups-6-d6efdef734724edf103e96ea901562d3.png"},8989:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/production-groups-7-684e398d0c848599b3d605eb71a1a4e3.png"},6543:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/production-groups-8-bdde937cee56496346107284e20020ca.png"},1554:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/production-groups-9-b70606f4c020287b8776aa32569cf1ff.png"}}]);