"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[1783],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(r),d=n,h=p["".concat(l,".").concat(d)]||p[d]||c[d]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},672:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=r(7462),n=(r(7294),r(4137));const o={layout:"post",title:"Template Variables: Dynamic Rendering",categories:"Learn rest",id:"rest_apis-learn-advanced-dynamic_rendering",author:"Scott Hurrey",doctitle:"Dynamic Rendering with Template Variables"},i="Dynamic Rendering with Template Variables",s={unversionedId:"REST APIs/Learn/Advanced/rest_apis-learn-advanced-dynamic_rendering",id:"REST APIs/Learn/Advanced/rest_apis-learn-advanced-dynamic_rendering",title:"Template Variables: Dynamic Rendering",description:"Using template variables you can create URLs to integrate with other systems by including information about the user's context.",source:"@site/docs/REST APIs/Learn/Advanced/dynamic-rendering-with-template-variables.md",sourceDirName:"REST APIs/Learn/Advanced",slug:"/REST APIs/Learn/Advanced/rest_apis-learn-advanced-dynamic_rendering",permalink:"/anthologydevdocs/docs/REST APIs/Learn/Advanced/rest_apis-learn-advanced-dynamic_rendering",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Template Variables: Dynamic Rendering",categories:"Learn rest",id:"rest_apis-learn-advanced-dynamic_rendering",author:"Scott Hurrey",doctitle:"Dynamic Rendering with Template Variables"},sidebar:"documentationSidebar",previous:{title:"ContentHandler Data Types ",permalink:"/anthologydevdocs/docs/REST APIs/Learn/Advanced/rest_apis-learn-advanced-content_hndlr"},next:{title:"Merge and Crosslist courses",permalink:"/anthologydevdocs/docs/REST APIs/Learn/Advanced/rest_apis-learn-advanced-crosslist_courses"}},l={},m=[{value:"Using context variables",id:"using-context-variables",level:2}],u={toc:m},p="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dynamic-rendering-with-template-variables"},"Dynamic Rendering with Template Variables"),(0,n.kt)("p",null,"Using template variables you can create URLs to integrate with other systems by including information about the user's context."),(0,n.kt)("p",null,"Template variables are represented by a series of values given the special syntax: @",(0,n.kt)("a",{parentName:"p",href:"mailto:X@object.attribute"},"X@object.attribute"),"@X@. These variables are expanded when rendered into their corresponding values. Within the UI, they can be used in portal modules and within the body of content items in courses."),(0,n.kt)("p",null,"Note that not all of these variables will resolve on all pages. For example, if the page is not inside a course, there will be no course-related variables available."),(0,n.kt)("h2",{id:"using-context-variables"},"Using context variables"),(0,n.kt)("p",null,"| Context item                                                             | Context variable                                                     | Example output                                                                                                                                                                                                                   |\n|---|---|---|                                                     |\n| User external person key                                                 | @",(0,n.kt)("a",{parentName:"p",href:"mailto:X@user.batch_uid"},"X@user.batch_uid"),"@X@                                                 | 123-45-6789                                                                                                                                                                                                                      |\n| User username (user id)                                                  | @",(0,n.kt)("a",{parentName:"p",href:"mailto:X@user.id"},"X@user.id"),"@X@                                                        | jsmith                                                                                                                                                                                                                           |\n| User student",(0,n.kt)("em",{parentName:"p"},"id (student id)                                             | @",(0,n.kt)("a",{parentName:"em",href:"mailto:X@user.student_id"},"X@user.student_id"),"@X@                                                | jsmith                                                                                                                                                                                                                           |\n| User full name                                                           | @",(0,n.kt)("a",{parentName:"em",href:"mailto:X@user.full_name"},"X@user.full_name"),"@X@                                                 | John Smith                                                                                                                                                                                                                       |\n| User primary key identifier                                              | @",(0,n.kt)("a",{parentName:"em",href:"mailto:X@user.pk_string"},"X@user.pk_string"),"@X@                                                 | ","_","521_1                                                                                                                                                                                                                          |\n| User locale                                                              | @",(0,n.kt)("a",{parentName:"em",href:"mailto:X@user.locale"},"X@user.locale"),"@X@                                                    | en_GB                                                                                                                                                                                                                            |\n| User system role(s)                                                      | @",(0,n.kt)("a",{parentName:"em",href:"mailto:X@user.role"},"X@user.role"),"@X@                                                      | System Roles:",(0,n.kt)("br",null))," C- Course Administrator",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"p"}," U- Guest",(0,n.kt)("br",null))," N- None",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"p"}," O- Observer",(0,n.kt)("br",null))," Y- Community Administrator",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"p"}," R- Support",(0,n.kt)("br",null))," Z- System Admin",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"p"}," H- System Support",(0,n.kt)("br",null),"*"," A- User Administrator |\n| User primary institution role                                            | @",(0,n.kt)("a",{parentName:"em",href:"mailto:X@user.institution_role"},"X@user.institution_role"),"@X@",(0,n.kt)("br",null),"@",(0,n.kt)("a",{parentName:"em",href:"mailto:X@user.primary_institution_role"},"X@user.primary_institution_role"),"@X@ | student                                                                                                                                                                                                                          |\n| User secondary institution role(s)                                       | @",(0,n.kt)("a",{parentName:"em",href:"mailto:X@user.secondary_institution_role"},"X@user.secondary_institution_role"),"@X@                                | student,faculty                                                                                                                                                                                                                  |\n| User company (as of 3900.34)                                             | @",(0,n.kt)("a",{parentName:"em",href:"mailto:X@user.company"},"X@user.company"),"@X@                                                   | Anthology                                                            |\n| User institution email (as of 3900.34)                                   | @",(0,n.kt)("a",{parentName:"em",href:"mailto:X@user.email.institution_email"},"X@user.email.institution_email"),"@X@                                   | ",(0,n.kt)("a",{parentName:"em",href:"mailto:john.smith@anthology.com"},"john.smith@anthology.com"),"                                                            |\n| User other name (as of 3900.34)                                          | @",(0,n.kt)("a",{parentName:"em",href:"mailto:X@user.name.other"},"X@user.name.other"),"@X@                                                | Johnie                                                            |\n| User title (as of 3900.34)                                               | @",(0,n.kt)("a",{parentName:"em",href:"mailto:X@user.name.title"},"X@user.name.title"),"@X@                                                | Dr.                                                            |\n| User mobile phone (as of 3900.34)                                        | @",(0,n.kt)("a",{parentName:"em",href:"mailto:X@user.mobile_phone"},"X@user.mobile_phone"),"@X@                                              | 0-123-456-7890                                                            |\n| User website (as of 3900.34)                                             | @",(0,n.kt)("a",{parentName:"em",href:"mailto:X@user.website"},"X@user.website"),"@X@                                                   | ",(0,n.kt)("a",{parentName:"em",href:"https://smithjohn.anthology.com"},"https://smithjohn.anthology.com"),"                                                            |\n| Course membership role                                                   | @",(0,n.kt)("a",{parentName:"em",href:"mailto:X@membership.role"},"X@membership.role"),"@X@                                                | Course/Organization Roles:",(0,n.kt)("br",null))," B- Course Builder/Organization Builder",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"p"}," G- Grader/Grader",(0,n.kt)("br",null))," U- Guest/Guest",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"p"}," P- Instructor/Leader",(0,n.kt)("br",null))," S- Student/Participant",(0,n.kt)("br",null),"_ T- Teacher's Assistant/Assistant         |\n| Course external course key                                               | @",(0,n.kt)("a",{parentName:"p",href:"mailto:X@course.batch_uid"},"X@course.batch_uid"),"@X@                                               | ABC123ABC                                                                                                                                                                                                                        |\n| Course course id                                                         | @",(0,n.kt)("a",{parentName:"p",href:"mailto:X@course.id"},"X@course.id"),"@X@                                                      | BIO101                                                                                                                                                                                                                           |\n| Course name                                                              | @",(0,n.kt)("a",{parentName:"p",href:"mailto:X@course.course_name"},"X@course.course_name"),"@X@                                             | Introduction to Concepts in Biology                                                                                                                                                                                              |\n| Course primary key identifier                                            | @",(0,n.kt)("a",{parentName:"p",href:"mailto:X@course.pk_string"},"X@course.pk_string"),"@X@                                               | ","_","12344_1                                                                                                                                                                                                                        |\n| Course URL                                                               | @",(0,n.kt)("a",{parentName:"p",href:"mailto:X@course.url"},"X@course.url"),"@X@                                                     | /courses/1/BIO101/                                                                                                                                                                                                               |\n| Course membership role                                                   | @",(0,n.kt)("a",{parentName:"p",href:"mailto:X@course.role"},"X@course.role"),"@X@                                                    | student                                                                                                                                                                                                                          |\n| Course locale     (As of 3900.32)                                        | @",(0,n.kt)("a",{parentName:"p",href:"mailto:X@course.locale"},"X@course.locale"),"@X@                                                  | en_US                                                            |",(0,n.kt)("br",{parentName:"p"}),"\n","| Institution hierarchy nodes (As of 3900.32 ",(0,n.kt)("em",{parentName:"p"},"use with caution. The output can be a long list that might affect an LTI launch."),")                          | @",(0,n.kt)("a",{parentName:"p",href:"mailto:X@course.ih_nodes"},"X@course.ih_nodes"),"@X@                                                            | db75df7b-04e8-4d3c-b7f9-7f1371a3f325,fb11e84b-ff7f-44ab-bf77-89299b053232                                       |",(0,n.kt)("br",{parentName:"p"}),"\n","| Institution primary node\t (As of 3900.32)                               | @",(0,n.kt)("a",{parentName:"p",href:"mailto:X@course.ih_primary_node"},"X@course.ih_primary_node"),"@X@                                                            | fb11e84b-ff7f-44ab-bf77-89299b053232                                                           |",(0,n.kt)("br",{parentName:"p"}),"\n","| Is it an Ultra course?\t (As of 3900.32)                               | @",(0,n.kt)("a",{parentName:"p",href:"mailto:X@course.ultra_status"},"X@course.ultra_status"),"@X@                                                            | false                     |\n| Content primary key identifier                                           | @",(0,n.kt)("a",{parentName:"p",href:"mailto:X@content.id"},"X@content.id"),"@X@",(0,n.kt)("br",null),"@",(0,n.kt)("a",{parentName:"p",href:"mailto:X@content.pk_string"},"X@content.pk_string"),"@X@                        | ","_","23_1                                                                                                                                                                                                                           |\n| Content URL                                                              | @",(0,n.kt)("a",{parentName:"p",href:"mailto:X@content.url"},"X@content.url"),"@X@                                                    | /courses/1/BOB101/content/","_","221_1                                                                                                                                                                                                |\n| Request ",(0,n.kt)("a",{parentName:"p",href:"https://www.opengroup.org/onlinepubs/009629399/apdxa.htm"},"UUID")," | @",(0,n.kt)("a",{parentName:"p",href:"mailto:X@request.id"},"X@request.id"),"@X@                                                     |\n| Request locale                                                           | @",(0,n.kt)("a",{parentName:"p",href:"mailto:X@request.locale"},"X@request.locale"),"@X@                                                 |\n| Request return URL                                                       | @",(0,n.kt)("a",{parentName:"p",href:"mailto:X@request.return"},"X@request.return"),"@X@                                                 |\n| System host name                                                         | @",(0,n.kt)("a",{parentName:"p",href:"mailto:X@system.site_id"},"X@system.site_id"),"@X@                                                 |"))}c.isMDXComponent=!0}}]);