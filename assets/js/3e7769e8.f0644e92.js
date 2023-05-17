"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[3437],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(4137));const r={layout:"post",title:"Preparing Your Building Blocks For Learn SaaS and Newer Learn Versions",categories:"Learn b2",id:"archive-b2-resources-moving_to_saas",author:"Scott Hurrey",displayed_sidebar:"documentationSidebar"},i=void 0,s={unversionedId:"archive/b2/resources/archive-b2-resources-moving_to_saas",id:"archive/b2/resources/archive-b2-resources-moving_to_saas",title:"Preparing Your Building Blocks For Learn SaaS and Newer Learn Versions",description:"This document is deprecated!",source:"@site/docs/archive/b2/resources/preparing-for-saas-and-new-learn-versions.md",sourceDirName:"archive/b2/resources",slug:"/archive/b2/resources/archive-b2-resources-moving_to_saas",permalink:"/anthologydevdocs/docs/archive/b2/resources/archive-b2-resources-moving_to_saas",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Preparing Your Building Blocks For Learn SaaS and Newer Learn Versions",categories:"Learn b2",id:"archive-b2-resources-moving_to_saas",author:"Scott Hurrey",displayed_sidebar:"documentationSidebar"},sidebar:"documentationSidebar"},l={},c=[{value:"APIs",id:"apis",level:2},{value:"Database",id:"database",level:2},{value:"Shared Content Folder",id:"shared-content-folder",level:2}],d={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u26a0\ufe0f This document is deprecated!"),(0,o.kt)("h1",{id:"preparing-your-building-blocks-for-learn-saas-and-newer-learn-versions"},"Preparing Your Building Blocks For Learn SaaS and Newer Learn Versions"),(0,o.kt)("p",null,"Blackboard Building Blocks have long been a staple in the Blackboard Learn\nplatform. These Java Web Apps allow you to customize the workflow and\nexperience that you and your faculty use to interact with the system."),(0,o.kt)("p",null,"We realize that this is an important part of the Learn ecosystem, and so\nBlackboard Learn SaaS with the Original Experience will continue to support\nyour Building Blocks going forward",(0,o.kt)("strong",{parentName:"p"},"*"),". That said, the architecture of the\nSaaS-delivered platform is dramatically different than that of the self- and\nmanaged-hosted servers you are used to. As a result, your Building Block will\nlikely need to be modified to run in the new Blackboard."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The following sections list requirements that must be met for a B2 to function in a SaaS environment"),". For example, your B2 must be compiled with Java 8, the database may be Postgres so the best practice is to use Schema.xml, the shared content must be accessed as described below, etc. Many of these are also requirements for a B2 to function on Learn Q2 2016 (3000.x.x) and Q4 2016 (3100.x.x). The best practice is to code to meet all of these requirements, then your B2 will function on SaaS, Managed Hosted, and Self Hosted systems."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"*","Note:")," Building Blocks cannot surface content in an Ultra course, ",(0,o.kt)("strong",{parentName:"p"},"ever"),". B2s meant designed to work with Original Experience courses can continue to work in SaaS, provided they meet the requirements documented here. Ultra Courses surface content from the Content Market - which are built on Partner Cloud, or the LTI standard & Blackboard Learn REST APIs."),(0,o.kt)("h2",{id:"apis"},"APIs"),(0,o.kt)("p",null,"Only use the ",(0,o.kt)("a",{parentName:"p",href:"/anthologydevdocs/docs/archive/b2/getting-started/archive-b2-gs-api_docs"},"published APIs"),". If it's not published, it's private. Our product development\nteam is cleaning up and refactoring a lot of code. If you're using private\nAPIs, there is a good chance they will stop working. So, remove all use of\nprivate APIs. For example we've discovered that B2s that depend on\n",(0,o.kt)("strong",{parentName:"p"},"DocumentManagerEx")," now fail in newer versions of Learn.\n",(0,o.kt)("strong",{parentName:"p"},"DocumentManagerEx")," is private. Don't use it. Eliminate the use of all\nprivate APIs."),(0,o.kt)("h2",{id:"database"},"Database"),(0,o.kt)("p",null,"In SaaS, the database schema name will no longer be ",(0,o.kt)("strong",{parentName:"p"},"BBLEARN")," or\n",(0,o.kt)("strong",{parentName:"p"},"bb_bb60"),". Your B2 code must determine the actual schema name if it has any\ndependency on the value. See ",(0,o.kt)("a",{parentName:"p",href:"https://community.blackboard.com/blogs/4/23"},"Bye Bye BBLEARN & bb_bb60")),(0,o.kt)("p",null,"Also, in SaaS, the database is Postgres. If you\u2019ve been testing your code on\nthe Developer Virtual Machine, this isn\u2019t that big of a deal. Schema.xml will\ncontinue to be supported as it is today. If you are providing SQL statements\nin the form of stored procedures, post_schema_updates, etc, you will just need\nto be sure to supply those files in postgres form, as well. These files will\ntake the suffix, ",(0,o.kt)("strong",{parentName:"p"},"db-pgsql"),'. If a self or managed-hosted client is migrating\nyour B2 to SaaS via a "full database migration" be certain to read ',(0,o.kt)("a",{parentName:"p",href:"https://community.blackboard.com/blogs/4/24"},"SaaS\nMigrations - Sequences and Tables"),"."),(0,o.kt)("p",null,"In addition, its important to note that Exceptions encountered during postgres\ntransactions stop all processing. You must code to handle this occurrence. One\napproach is to create a save point before you start the transaction and roll\nback to that save point upon exception. Here\u2019s a small sample demonstrating\nthis."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Much of the error handling stripped for space\n\npublic static T withSavePoint(Callable c, Connection con) throws SQLException\n{\n  Savepoint savepoint = null;\n\n  try {\n    if ( null != con && !con.getAutoCommit() ) {\n      savepoint = con.setSavepoint();\n    }\n\n    return c.call();\n  } catch ( SQLException e ) {\n    if ( con != null && savepoint != null ) {\n      con.rollback( savepoint );\n    }\n    throw e;\n  }\n}\n")),(0,o.kt)("p",null,"Postgres handles timestamps differently. There are two types of timestamps:\n",(0,o.kt)("strong",{parentName:"p"},"localtimestamp")," and ",(0,o.kt)("strong",{parentName:"p"},"clock_timestamp::timestamp"),". The ",(0,o.kt)("strong",{parentName:"p"},"localtimestamp"),"\nreturns the time at the start of the transaction. The\n",(0,o.kt)("strong",{parentName:"p"},"clock_timestamp()::timestamp")," returns the actual current time. As a result,\nit is best practice to use ",(0,o.kt)("strong",{parentName:"p"},"clock_timestamp()::timestamp")," in your Building\nBlock, as this matches the behavior of timestamps in other databases."),(0,o.kt)("p",null,"Avoid the use of ",(0,o.kt)("strong",{parentName:"p"},"data-templates")," for management of objects that can be\nmanaged through the bb-manifest.xml file. This includes rows in tables like\napplication, navigation_item, and entitlements. The use of data-templates both\nadds risk to live-upgrades and loses customizations (application status,\nentitlement-to-role mappings, etc.)."),(0,o.kt)("h2",{id:"shared-content-folder"},"Shared Content Folder"),(0,o.kt)("p",null,"In the Enterprise Blackboard Learn you are accustomed to developing for, the\nBuilding Block home lives in the shared content directory. For instance, if I\nwrote a building block and set my vendor ID to \u2018bbdn\u2019 and my plugin handle to\n\u2018my-b2\u2019, my building block and all of its related files would live in\n",(0,o.kt)("strong",{parentName:"p"},"blackboard/content/vi/BBLEARN/plugins/bbdn-my-b2"),", and this directory would\nexist once, in only one place, so changes were persisted to all application\nservers."),(0,o.kt)("p",null,"In Learn SaaS, there are two building block homes. There is still the shared\nfile system that is shared among the entire group of application servers, but\nthere is also a local cache on each individual server. As a result, the\nBuilding Block would still reside in the shared directory, similar to\n",(0,o.kt)("strong",{parentName:"p"},"blackboard/content/vi/BBLEARN/plugins/bbdn-my-b2"),", however the web app\nwould live in the local cache on each server, in a directory similar to\n",(0,o.kt)("strong",{parentName:"p"},"blackboard/cache/vi/BBLEARN/plugins/bbdn-my-b2"),"."),(0,o.kt)("p",null,"As a result of this change, several of the Plugin API methods have been\nmodified to handle the dual-folder deployment.\n",(0,o.kt)("strong",{parentName:"p"},"PlugInManager.getPlugInDir()")," and ",(0,o.kt)("strong",{parentName:"p"},"PlugInManager.getPluginsDirectory()"),"\ncan now only be used to access the read-only files from the exploded war in\nthe cache folder. If you need to access the shared config folder for your\nBuilding Block, you can use ",(0,o.kt)("strong",{parentName:"p"},"PlugInUtil.getConfigDirectory()"),". Calling\nmethods like ",(0,o.kt)("strong",{parentName:"p"},"ServletContent.getRealPath()")," will point to the cache folder,\nso be sure that any method you are calling that returns a path or a file is\nreturning what you expect it to."),(0,o.kt)("p",null,"As an example, with prior versions of Learn you could use the following code\nto write to a file in your plugin\u2019s folder and create a configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},'PlugInManager manager = PlugInManagerFactory.getInstance();\nFile myDir = manager.getPlugInDir( manager.getPlugIn( "myVendorId","myB2Handle" ) );\nFile myConfigDir = new File( myDir, "config" );\nFile myConfigFile = new File( myConfigDir, "config.txt" );\n\n// read/write myConfigFile\n')),(0,o.kt)("p",null,"You will now need to re-write the above code code to look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'File myConfigDir = PlugInUtil.getConfigDirectory( "myVendorId", "myB2Handle");\nFile myConfigFile = new File(myConfigDir, \u201cconfig.txt\u201d);\n\n// read/write myConfigFile\n')),(0,o.kt)("p",null,"If you just need to read from a file that is included with in your Building\nBlock, you can use the following code snippet to access the cached copy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'PlugInManager manager = PlugInManagerFactory.getInstance();\nFile myDir = manager.getPlugInDir( manager.getPlugIn( "myVendorId","myB2Handle" ) );\nFile myStaticDirectory = new File (myDir, "webapp/myStaticStuff");\n\n// read from myStaticDirectory - files as originally present in war file\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-See",metastring:"the bb-config.properties section in Developer Virtual Machine - DVM for how to configure your DVM to behave like Learn SaaS in regards to the",the:!0,"bb-config.properties":!0,section:!0,in:!0,Developer:!0,Virtual:!0,Machine:!0,"-":!0,DVM:!0,for:!0,how:!0,to:!0,configure:!0,your:!0,behave:!0,like:!0,Learn:!0,SaaS:!0,regards:!0},'shared content folder.~~~ Note: we no longer provide a local DVM. You must contact us for a special build of the AWS AMI.\n\nEventually, all write access to the shared folder will be phased out, and\nwrite access for logging will be limited to the log directory returned by\nPlugInUtil.getLogDirectory(). Prior to this change, a new way will be\ndocumented to achieve the same goal without writing directly to the backend of\nthe server.\n\n## Logging Changes\n\nIn SaaS, logging is handled a bit differently, as clients will not have back-\nend access to the system. You can still log to the log directory, but those\nlogs are redirected to Kibana so your Building Block won\u2019t be able to read\nthat log file. There will be access to the logs through the System Admin\npanel.\n\nIn order to see your B2s logs in Kibana-Elasticsearch, the only SaaS interface\nfor log files, your B2 must do the following:\n\n1. Write the log files to the directory returned by **blackboard.platform.plugin.PlugInUtil.getLogDirectory.**[**PlugInUtil** (Building Blocks API 3000.1.0)](https://library.blackboard.com/ref/16ce28ed-bbca-4c63-8a85-8427e135a710/blackboard/platform/plugin/PlugInUtil.html){: target:\\_blank}\n\n   1. Typically looks like **&lt;blackboard home&gt;/logs/plugins/&lt;vendorId&gt;-&lt;handle%gt;/...**\n   2. Read the API documentation on how to get write permission.\n\n2. Use this format, with four columns that are pipe separated:\n\n```java\n2016-03-15 01:00:00 | DEBUG | 41:c.b.c.i.task.UsageReportingTask | Generating Usage Report...\n2016-03-15 01:00:00 | ERROR | 68:o.s.s.support.MethodInvokingRunnable | Invocation of method \'doUsageReport\' on target class ...failed\njava.lang.NullPointerException: null\n  at com.blackboard.consulting.internships.task.UsageReportingTask.getFirstTimeActivationDateModified(UsageReportingTask.java:68)\n```\n\nThe b2 logging configuration in the logback.xml file that produces this log\nformat is:\n\n```xml\n<appender ... >\n\n...\n\n<encoder>\n\n<pattern>%date{yyyy-MM-dd HH:mm:ss} | %-5level | %-45(%L:%logger{40}) |\n%m%n%ex{10}</pattern>\n\n</encoder>\n\n...\n\n</appender>\n```\n\n**[Sample logging code that works in a SaaS environment.](https://github.com/mark-b-kauffman/bbdn-bblogbackb2){: target:\\_blank}**\n\n## Statelessness\n\nThe Learn SaaS cloud architecture is built to the best practices of cloud\ncomputing. As such, in SaaS, Learn is stateless. As a result, you can no\nlonger rely on **HttpSession** persisting across requests. As a result,\nBuilding Blocks that synchronize data on sessions will need to be refactored.\nYou can still use **BbSession.setGlobalKey()** to store data, but you will\nneed to be cognizant of the size of the data, as this is stored in the\ndatabase.\n\nAs an example, if you currently employ code like the following to store an\nobject in the session:\n\n```java\nrequest.getSession().setAttribute( "myKey", "myValue" );\nrequest.getSession().setAttribute( "myObjectKey", myObject );\n```\n\nYou will need to refactor to look like this:\n\n```java\nContextManagerFactory.getInstance().getContext().getSession().setGlobalKey("myVendorId.myB2Handle.myKey", "myValue" );\n```\n\nNon-String values need to be serialized to save on the **BbSession** -\nrefactor to avoid if at all possible.\n\n## Java 11\n\nBlackboard Learn SaaS runs on Java 11, as of Learn 3800. As a result, Building Block that are to\nbe installed in the cloud, or on 9.1 Q2 2020 or later, need to be built with\nJava 11. For more information see [8 steps to prepare for Java 11](/anthologydevdocs/docs/archive/b2/resources/archive-b2-resources-prepare_for_java_11).\n\n## Tomcat 8\n\nTomcat 8 introduces a few new complexities to the Building Block development\nprocess. This move was an opportunity to re-imagine how the Learn application\nstartup performance could be improved. This work has been extremely\nsuccessful, but requires some refactoring of your code.\n\n### JSP Precompilation\n\nIt is expected that going forward, all Building Blocks will precompile JSPs.\nThis simple step will assure that your JSP files render properly in Blackboard\nLearn. All bundled Building Blocks are required to take this step, while\ncurrently optional, this could become mandatory in the future.\n\nThis blog post describes one way to [precompile you Java Server Pages](https://community/blackboard.com/blogs/4/25){: target:\\_blank} when using Gradle.\n\n### bb-context-config.properties\n\nTomcat 8.5 is substantially more configurable in the way that you can\nimplement [jar scanning](https://tomcat.apache.org/tomcat-8.5-doc/config/jar-scanner.html){: target:\\_blank}. This file lives in the WEB-INF directory of your Building Block\nand provides the following options:\n\n#### com.blackboard.tomcat.servletcontainer.jarscanner.tldJars\n\nBecause you should be precompiling your JSP files, this will normally be left\nblank. If on-demand JSP compilation is used, this may be set to a Java regular\nexpression of jar file names. You should only include the jar files containing\nthe TLD files needed by the non-compiled JSP files. The patter can include the\ntemplate variable _@CORE_TLD_PATTERN@_, which will resolve to a regular\nexpression matching all Blackboard jar files containing TLDs.\n\nHere are a few examples:\n\n- **RECOMMENDED**: Building Block uses several Blackboard Tag Libraries\n\n```java\ncom.blackboard.tomcat.servletcontainer.jarscanner.tldJars=@CORE_TLD_PATTERN@\n```\n\n- Default\n\n```java\ncom.blackboard.tomcat.servletcontainer.jarscanner.tldJars=\n```\n\n- Building Block uses Struts and the bbNG Tags\n\n```java\ncom.blackboard.tomcat.servletcontainer.jarscanner.tldJars=bb-\ntaglibs.jar|struts-taglib-.*\\\\.jar\n```\n\n- Building Block uses several Blackboard libraries and Struts\n\n```java\ncom.blackboard.tomcat.servletcontainer.jarscanner.tldJars=@CORE_TLD_PATTERN@|s\ntruts-taglib-.*\\\\.jar\n```\n\n#### com.blackboard.tomcat.servletcontainer.jarscanner.pluggabilityJars\n\nSet this to a Java regular expression of jar file names that contain web\nfragments, ServletContainerInitializers (SCIs), and other classes with\nannotations defined in the Servlet 3.1 specifications if they are used by the\nBuilding Block.The pattern can contain the template variable\n_@CORE_PLUGGABILITY_PATTERN@_, which will resolve to a regular expression that\nmatches all Blackboard jar files containing such components.\n\nHere is an example:\n\n- A Building Block contains classes that implement Spring\'s WebApplicationInitializer\n\n```java\ncom.blackboard.tomcat.servletcontainer.jarscanner.pluggabilityJars=spring-\nweb-.*\\\\.jar\n```\n\n#### com.blackboard.tomcat.servletcontainer.context.containerSciFilter\n\nThis Java regular expression should list all SCIs in the CLASSPATH that are\n**not** used by the Building Block. The default value is **^.\\*$**, which\nmatches ALL SCIs and assumes that the Building Block does not use any.\n\nExamples:\n\n- Building Block does not use SCIs and does not have any uncompiled jsps\n\n```java\ncom.blackboard.tomcat.servletcontainer.context.containerSciFilter=^.*$\n```\n\n- If for some reason, your JSP is not compiled, use\n\n```java\ncom.blackboard.tomcat.servletcontainer.context.containerSciFilter=^.*(?<!\\\\.JasperInitializer)$\n```\n\n- If the JSPs are compiled, but your code relies on classes that implement Spring\'s WebAppplicationInitializer\n\n```java\ncom.blackboard.tomcat.servletcontainer.context.containerSciFilter=^.*(?<!\\\\.SpringServletContainerInitializer)$\n```\n\n#### com.blackboard.tomcat.servletcontainer.context.processTldsOnStartup\n\nThis is not required to be in the bb-context-config.properties file. You would\ninclude this and set it to true only if the Building Block or one of the jar\nfiles it contains defines a listener in a TLD that the Building Block\nrequires.\n\n```java\ncom.blackboard.tomcat.servletcontainer.context.processTldsOnStartup=true\n```\n\nHere is a final example of a typical /WEB-INF/bb-context-config.properties\nfile:\n\n```java\ncom.blackboard.tomcat.servletcontainer.jarscanner.tldJars=\ncom.blackboard.tomcat.servletcontainer.jarscanner.pluggabilityJars=\ncom.blackboard.tomcat.servletcontainer.context.containerSciFilter=^.*$\n```\n\nIf you see errors like:\n\n```java\nUnable to compile <myclass> root cause:\nINFO | jvm 1 | 2018/02/06 00:51:17 | java.lang.NullPointerException\nINFO | jvm 1 | 2018/02/06 00:51:17 | at org.apache.jasper.JspCompilationContex\nt.getTldResourcePath(JspCompilationContext.java:566)\nINFO | jvm 1 | 2018/02/06 00:51:17 | at\norg.apache.jasper.compiler.Parser.parseTaglibDirective\n```\n\ntry adding making your bb-config-context.properties file look like this:\n\n```java\ncom.blackboard.tomcat.servletcontainer.jarscanner.tldJars=@CORE_TLD_PATTERN@\ncom.blackboard.tomcat.servletcontainer.jarscanner.pluggabilityJars=\ncom.blackboard.tomcat.servletcontainer.context.containerSciFilter=^.*(?<!\\\\.JasperInitializer)$\n```\n\n## web.xml\n\nYour Building Block should be using Web App version 3.0, and requires\nmetadata-complete to be set. By default and in most cases, this should be set\nto **true** for best performance. Set this to **false** ONLY if your Building\nBlock uses annotation-based web_xml extensions as defined in the Servlet 3.1\nspecification or if your jar files should be scanned for web-fragment.xml.\nThese are some of the annotations that require the metadata-complete attribute\nto be set to false:\n\n- WebServlet\n- WebFilter\n- WebInitParam\n- WebListener\n- MultipartConfig\n- ServletSecurity\n- HttpConstraint\n- HttpMethodConstraint\n- DeclareRoles\n- EJB\n- EJBs\n- Resource\n- Resources\n- PersistenceContext\n- PersistentContexts\n- PersistenceUnit\n- PersistenceUnits\n- PostConstruct\n- PreDestroy\n- RunAs\n- WebServiceRef\n- WebServiceRefs\n\nSome of these annotations, like PostContruct, PreDestroy, and Resource, only\nrequire the setting to be false if they are placed in an object whose life-\ncycle is managed by the container, such as a Servlet or a Listener.\n\nHere is an example of what this will look like in your web.xml file:\n\n```xml\n<web-app\n  xmlns="[http://java.sun.com/xml/ns/javaee](https://community.blackboa\nrd.com/external-link.jspa?url=http%3A//java.sun.com/xml/ns/javaee)"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-\napp_3_0.xsd"\n\nversion="3.0" metadata-complete="true">\n```\n\nIn addition to metadata-complete, another new tag should be included at the\nend of the web.xml file: absolute-ordering. Generally, this should be an empty\ntag for best performance. If web fragments are used, the ones that are\nrequired should be listed explicitly her to to avoid unnecessary\ninitialization of other unused fragments in the class path.\n\nFor example:\n\n- The Building Block does NOT use web fragments\n\n```xml\n<absolute-ordering/>\n```\n\n- The Building block uses web fragments from the spring-web jar\n\n```xml\n<absolute-ordering>\n  <name>spring_web</name>\n</absolute-ordering>\n```\n\n## Faster Startup\n\nWhen declaring servlets in web.xml, the &lt;load-on-startup&gt; tag allows you to\ndecide when a servlet is loaded into memory. The default value is to load at\nfirst access, but that is not always appropriate for every situation. The\nfollowing table illustrates the tags and their meanings. Be sure to select the\none that is right for your Building Block.\n\n| Tag Value                                | Description                                                            |\n| ---------------------------------------- | ---------------------------------------------------------------------- |\n| &lt;load-on-startup&gt;1&lt;/load-on-startup&gt;     | Load the servlet during system initialization.                         |\n| &lt;load-on-startup&gt;-1&lt;/load-on-startup&gt;    | Load the servlet the first time it is accessed.                        |\n| &lt;load-on-startup&gt;-9876&lt;/load-on-startup&gt; | Load the servlet immediately following the Learn system initialization |\n\nBe sure to evaluate your individual integration before deferring your startup.\nIf this or another Building Block depends on the servlet code being registered\nor if this servlet must be live prior to the system starting for user access,\ndeferring startup is not appropriate.\n\nDeferring all of your servlets to load immediately following system startup\nwill definitely make the system available to users more quickly, though one\nshould note that those user requests might be a bit slower as all of the\nservlets are starting. In addition, it is important to note that should a user\naccess a servlet that has been deferred and not yet started, it will load at\nthat time, so there is no risk of a servlet being unavailable should the\nprocess still be underway.\n\nIf you are executing other startup logic inside something such as a\nServletContextListener\'s contextInitialized method and that logic is not 100%\nrequired to be executed before user activity then please defer it by calling\nContextInitThreadRunner.startThread(Thread) or .startDaemonThread(Thread).\n\nHere is a snippet from the Javadoc explaining this method:\n\n```java\n/**\n\n* This method can be used in place of thread.start() when you are starting a thread typically during system startup\n\n* and you do not absolutely NEED that thread to start immediately. Once the system has completed normal startup of\n\n* all webapps (b2s) and is ready to accept requests, any threads registered via this method will be started. <br>\n\n* <br>\n\n* It is safe to call this at any point in time though - if the server has already started then this will merely start\n* the thread.<br>`\n\n* <br>\n\n* The reason we are doing this is to make sure all resources can be\ndedicated to pure startup tasks and not diverted\n\n* to \'background\' activity, thus getting the system to a ready state a bit\nfaster.\n\n*/\n```\n\n## URL Encoding\n\nTomcat 8.5.12 and later releases of Tomcat 8.5.x by default does not allow\ncurly braces ( { } ) or vertical bars, often referred to as pipes ( | ) in\nURLs. For backward compatibility, [Tomcat provides a way to override this\nbehavior](https://tomcat.apache.org/tomcat-8.5-doc/config/systemprops.html) by allowing\na system property tomcat.util.http.parser.HttpParser.requestTargetAllow to be\ndefined. Please be advised that this exposes the application to a [known\nsecurity issue](https://nvd.nist.gov/vuln/detail/CVE-2016-6816).\n\nFuture versions of Tomcat may not support this override. Therefore, all B2s\nmust url-encode these characters. For example, an URL like `http://myuniversity.blackboard.com/webapps/myb2/appController?options={x|y}` must be written by the application as `http://myuniversity.blackboard.com/webapps/myb2/appController?options=%7bx%7cy%7d`. Otherwise, Tomcat will reject the request.\n\n## Permissions\n\nAs Blackboard continues to modernize the Blackboard Learn platform and move\nservices out of the Learn code line and into microservices, the need to secure\nthe application from both accidental and malicious actions, the properties\ngranted to Building Block integrations is necessarily tightening. This is\nbeing addressed in a phased manner, with the intent of providing third-party\ndevelopers ample runway for adjusting to the new restrictions. As new\nrestrictions are added, this page will list them, so be sure you are following\nthis page to receive updates.\n\n| Permission                   | Mitigating Factors                                          | Current Action\\*\\* |\n| ---------------------------- | ----------------------------------------------------------- | ------------------ |\n| java.security.AllPermission  |                                                             | Filtered Out       |\n| java.lang.RuntimePermission  | createSecurityManager, setSecurityManager                   | Filtered Out       |\n| java.lang.RuntimePermission  | action implying createSecurityManager or setSecurityManager | Warning Message    |\n| java.util.PropertyPermission | write                                                       | Warning Message    |\n| java.io.FilePermission       | ALL FILES                                                   | Warning Message    |\n\nMany Building Blocks rely on the ALL FILES permission for writing to the file\nsystem. This will be filtered out soon. The Building Block should request\nexplicit file system permissions and utilize the advice in this guide when\nwriting to log files and config directories. To illustrate the change, here is\nan example of a bad permission and a good permission for writing to a log file\nfrom a Building Block.\n\n#### BAD\n\n```java\n<permission type="java.io.FilePermission"name="&lt;&lt;ALLFILES&gt;&gt;" actions="read,write,delete,wxecute"/>\n```\n\n#### GOOD\n\n( A couple examples. See [ALL FILES No More](https://community.blackboard.com/blogs/4/26){: target=\'\\_blank\'} for a full set.)\n\n```java\n<permission type="java.io.FilePermission" name="BB_HOME/-" actions="read,write,delete"/>\n<permission type="java.io.FilePermission" name="BB_HOME/logs/" actions="read,write,delete"/>\n```\n\n## Original UI\n\nOriginal courses run in an iframe on Learn SaaS. This shouldn\u2019t affect your\nBuilding Block, except in the two following cases:\n\n- If you set **top.document.location** or **top.location.href** or any other similar settings that change the top page for the browser, your Building Block will not display properly. You can use **window.location** instead.\n- HTML form tags with **target="\\_top"**, or **target="\\_blank"** will break out of the Ultra Original course peek panel. Change these to **target="\\_self"**.\n- To meet accepted best practices in web design, there is a new maximum browser width of **1920px**. Make sure you plan accordingly.\n- B2s using the bbUI and bbData tag libraries should be refactored were at all possible to use bbNG.\n\n## Ultra UI\n\nThere are currently no extension points for Building Blocks in the Ultra UI.\n\n## Continuous Delivery\n\nBlackboard strives to deliver updates every two weeks. As a result, you should\nbe using only public APIs whenever possible, as the continuous delivery model,\ncoupled with the possibility of undocumented private API changes without\nwarning, makes using private APIs extremely risky.\n\n## Installing Building Blocks in Learn SaaS\n\nThere is no way to install a Building Block in Learn SaaS, regardless of the\nUser Interface you are using. If you have licensed Learn SaaS Plus or\nAdvantage, you do have the ability to install Building Blocks, but you must\nwork with support to schedule the installation\n\n## Update a Building Block for TinyMCE 5\n\nIn Learn 3900.X we intend to implement an updated content editor, TinyMCE 5, in the Original Course View and Original Experience of Learn. (\\*Forward-looking statement applies.) This editor changes certain patterns of UI with more of them living in an overlay modal rather than pop-up window after pop-up window. This change has led to required changes that are specific to B2s that have a Mashup. Cancel buttons in these mashups that expect to close a window will actually now need to close on overlay modal. The overlay modal will also include a close action button, an \u201cx\u201d in the interface, which will also work to close the window in case the cancel button doesn\u2019t work; but if a cancel button in a mashup B2 is going to continue to work, the code will need to be updated.\n\nThe code below needs to be added for the cancel button. This code assumes that a B2 is being designed that is compatible with both the new editor and the older one, Learn v 3900.x vs v3800.x and earlier.\n\n```java\nif ( parent && parent.tinymce &&\n     parent.tinymce.activeEditor &&\n     parent.tinymce.activeEditor.windowManager )\n{\n  parent.tinymce.activeEditor.windowManager.close();\n}\nelse\n{\n  // Call the JavaScript you currently use for Cancel here.\n}\n```\n\nIf the B2 will only be compatible with the updated editor and not backwards compatible, the else section isn\u2019t required:\n\n```java\nif ( parent && parent.tinymce &&\n     parent.tinymce.activeEditor &&\n     parent.tinymce.activeEditor.windowManager )\n{\n  parent.tinymce.activeEditor.windowManager.close();\n}\n```\n\n\\*Statements regarding our product development initiatives, including new products and future product upgrades, updates or enhancements represent our current intentions, but may be modified, delayed or abandoned without prior notice and there is no assurance that such offering, upgrades, updates or functionality will become available unless and until they have been made generally available to our customers.\n\n## B2 Changes Required for SameSite Issues with B2 Mashups\n\n#### Why These Changes Are Necessary\n\nAs of mid/late April 2021 Google Chrome 90 does not consider a GET request "safe" and blocks different site cookies even for a GET request. If an external server used GET with parameters to send data to a Learn server, that will no longer work because the session cookies are blocked. Hence, if your B2 provides a mashup that can be used in an Original course, you must implement a solution similar to the following. You can no longer use a GET as a workaround for SameSite issues. Or, you can migrate users to an LTI solution. The next paragraph gives more background.\n\nHistorically a Building Block can launch from content created by a Blackboard Learn B2 to a remote server where some content is selected to push back to Blackboard Learn. With the advent of browsers now enforcing a SameSite cookie policy the remote server cannot then make a request back to Learn with the cookies necessary for that Learn session due to stringent browser SameSite enforcement. For this discussion we\u2019ll describe how that impacts a B2 mashup and describe a solution that uses JavaScript to get around the browser\u2019s enforcement of the SameSite policy. You will need to examine the rest of your B2 functionality to determine if you need to make similar changes in other areas that get content from your server.\n\n#### Overview of the Changes\n\nAs an example, we will discuss a B2 that provides a mashup that does a launch to get content from a mashup content provider, say\xa0mashupsource.com. The user used to be able to select content on\xa0mashupsource.com which then did a form POST, or a GET back to the B2 endpoint. Because browsers now enforce the SameSite policy by default,the form POST will no longer work. Some browsers recently have also become more stringent with 3rd-party cookies and GET requests. The browser will not send the Learn Server (LearnServerFQDN) cookies to LearnServerFQDN when the cookies are on a request from any source other than the domain of the LearnServer, instead it blocks them.\n\nHence you need a way update Learn Server content without a cross-site HTTP request from\xa0mashupsource.com\xa0to the Learn Server. The following describes how you can do this.\n\nInstead of redirecting the browser to a page on\xa0mashupsource.com, that page needs to load an iframe, provided by your B2, with the source being\xa0mashupsource.com. The user will interact with\xa0mashupsource.com\xa0within that iframe and when done, that page will use JavaScript to postMessage to the parent window with whatever the result of the user\u2019s interaction with\xa0mashupsource.com\xa0is. JavaScript in the parent (authored by mashupsource developers, rendered by your B2 as part of your mashup) will accept that message (after validating it is coming from\xa0mashupsource.com) and then from within this window (the one launched from LearnServerFQDN/B2\u2026) it will then POST (or GET) back to the Learn B2 endpoint. Since this is a POST (or GET) from a page coming from the same origin it will work. These changes are compatible with the current and future releases of Blackboard Learn.\n\nHere\'s a diagram showing the message chain from a mashupsource.com to the B2 on the Learn server:\n\n```java\n[window/iframe: LearnServerFQDN \u2013 the Learn Original Course page with the editor on it\n\xa0 \xa0 \xa0 \xa0 [iframe:LearnServerFQDN/B2 providing mashup (receive postMessage then POST or GET to appropriate B2 endpoint)\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 [iframe src=mashupsource.com (postMessage to parent)]\n\xa0 \xa0 \xa0 \xa0 ]\n]\n```\n\nNote the brackets are indicating how the iframes are nested.\n\nSummary - If your B2 provides a mashup for use in an Original Course\'s TinyMCE editor you will need to re-architect as described above, or mirgrate users to an LTI-based solution.\n')))}h.isMDXComponent=!0}}]);