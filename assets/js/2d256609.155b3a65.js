"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[1275],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(4137));const r={layout:"post",title:"Developer AMI",tipue_search_active:!0,id:"rest_apis-learn-sandbox-developer_ami",categories:"DVBA"},i="Using the Learn AMI for REST and LTI Development",s={unversionedId:"REST APIs/Learn/Sandbox/rest_apis-learn-sandbox-developer_ami",id:"REST APIs/Learn/Sandbox/rest_apis-learn-sandbox-developer_ami",title:"Developer AMI",description:"This document outlines usage of the Learn REST and LTI Developer AMI made available via the Amazon AWS Marketplace.",source:"@site/docs/REST APIs/Learn/Sandbox/developer-ami.md",sourceDirName:"REST APIs/Learn/Sandbox",slug:"/REST APIs/Learn/Sandbox/rest_apis-learn-sandbox-developer_ami",permalink:"/anthologydevdocs/docs/REST APIs/Learn/Sandbox/rest_apis-learn-sandbox-developer_ami",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Developer AMI",tipue_search_active:!0,id:"rest_apis-learn-sandbox-developer_ami",categories:"DVBA"},sidebar:"documentationSidebar",previous:{title:"Working with Ultra assignments",permalink:"/anthologydevdocs/docs/REST APIs/Learn/Advanced/rest_apis-learn-advanced-ultra_assignments"},next:{title:"Bb App students launch schema",permalink:"/anthologydevdocs/docs/REST APIs/Learn/Learn App/rest_apis-learn-bbapp-student_launch_schema"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Get the Blackboard REST and LTI Developer AMI",id:"get-the-blackboard-rest-and-lti-developer-ami",level:3},{value:"Use the Blackboard REST and LTI Developer AMI",id:"use-the-blackboard-rest-and-lti-developer-ami",level:3},{value:"Support for Let\u2019s Encrypt SSL Certificates",id:"support-for-lets-encrypt-ssl-certificates",level:3},{value:"Setup",id:"setup",level:4},{value:"What does the Learn REST and LTI Developer AMI cost?",id:"what-does-the-learn-rest-and-lti-developer-ami-cost",level:4},{value:"Log into the Learn Application on the AMI",id:"log-into-the-learn-application-on-the-ami",level:4},{value:"Configure Your AMI-based Learn Instance",id:"configure-your-ami-based-learn-instance",level:3},{value:"Triage Your AMI-based Learn Instance",id:"triage-your-ami-based-learn-instance",level:4},{value:"Migration Cookbook - Recreating Data between AMIs",id:"migration-cookbook---recreating-data-between-amis",level:3},{value:"Notice - AVG on Windows Systems",id:"notice---avg-on-windows-systems",level:4}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-the-learn-ami-for-rest-and-lti-development"},"Using the Learn AMI for REST and LTI Development"),(0,o.kt)("p",null,"This document outlines usage of the ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/marketplace/pp/prodview-fdbvv2vvikoq4"},"Learn REST and LTI Developer AMI")," made available via the Amazon AWS Marketplace."),(0,o.kt)("p",null,"Please note that AMI licenses are not upgradable. You must subscribe to a newer release and migrate any content or tools prior to license expiration. Please review the ",(0,o.kt)("strong",{parentName:"p"},"Migration Cookbook - Recreating Data between AMIs")," section below."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Learn REST and LTI Developer Amazon Machine Image (\u201cAMI\u201d) is an image of a Learn server available in the Amazon Marketplace. The AMI allows a developer to spin up a copy of Learn for building applications that use the REST APIs and/or Learning Tool Interoperability (\u201cLTI\u201d) to integrate with Learn. This image is a standalone copy of the SaaS deployment of Learn that allows development and testing against the Ultra user experience. Once the developer spins up the copy of Learn, it lives in his or her AWS account and the developer has full control over the instance of Learn. All instances are pre-licensed with a developer license. New developer AMIs will be made available in the same cadence as SaaS releases. Please note that there is a potential delay of 1-2 days before the AMI is available due to AMI and AWS processing time."),(0,o.kt)("p",null,"This program allows a developer to build an integration for Learn without a formal paid partnership. Anyone who wants to test the Ultra experience can create copy. Note that you cannot deploy a custom building block to this AMI. It is meant only for REST and LTI development."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:")," Building Block installation is NOT supported on the AMIs."),(0,o.kt)("h3",{id:"get-the-blackboard-rest-and-lti-developer-ami"},"Get the Blackboard REST and LTI Developer AMI"),(0,o.kt)("p",null,"The easiest way to find the Developer AMI is by using the link above or searching the Amazon Marketplace for Learn. The results show all of the currently available AMIs. Given the cadence or releases, you should locate the Learn instance you want."),(0,o.kt)("h3",{id:"use-the-blackboard-rest-and-lti-developer-ami"},"Use the Blackboard REST and LTI Developer AMI"),(0,o.kt)("p",null,"Before you begin, you must have an Amazon AWS account. If you do not have an AWS account you will need to create one. The steps to set up an AMI are typically as follows."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Subscribe to the AMI"),(0,o.kt)("li",{parentName:"ul"},"Configure the specific instance"),(0,o.kt)("li",{parentName:"ul"},"Spin it up and code!"),(0,o.kt)("li",{parentName:"ul"},"When configuring the instance, it is completely up to you how you set up the server. We do have a few recommendations, however.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: The default SSL cert generated on first startup is ",(0,o.kt)("em",{parentName:"p"},"not")," a trusted certificate. Please follow the instructions below for full SSL support.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We recommend using the Large Tier instance type. This gives you enough storage and power to run Learn effectively and build your integration.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you see 502 Gateway errors, you may need to increase the size of your AMI.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We recommend you adjust the security settings to allow:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SSH from your IP only"),(0,o.kt)("li",{parentName:"ul"},"Enable HTTPS access")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"You must configure VPC for the EC2 to properly function. You do this by going to the VPC Console from the AWS Console:"),(0,o.kt)("li",{parentName:"ol"},"Under Services open VPC under Networking and Content Delivery"),(0,o.kt)("li",{parentName:"ol"},"Open Your VPCs"),(0,o.kt)("li",{parentName:"ol"},"select the VPC connected to your EC2 and"),(0,o.kt)("li",{parentName:"ol"},"select Actions => Edit DNS Hostnames \u2014> Change DNS hostnames: to YES"),(0,o.kt)("li",{parentName:"ol"},"Startup time: The startup time for your EC2 will vary and may take as long as 15 minutes before you may access the site via your browser. SSH access may be available in 3 minutes or less."),(0,o.kt)("li",{parentName:"ol"},"On initial startup the Original UX login screen appears. Note the messaging on that page as it informs you when the license expires. You will need to subscribe to a new AMI release prior to license expiration if you wish to migrate data from the old EC2 to the new. Licenses on AMIs are not extendible.")),(0,o.kt)("h3",{id:"support-for-lets-encrypt-ssl-certificates"},"Support for Let\u2019s Encrypt SSL Certificates"),(0,o.kt)("p",null,"Starting with version 3300.6.0 the Learn for REST and LTI Developers AMI supports free Let\u2019s Encrypt SSL Certificates. At this time we do not support alternative SSL certificate processes. Here's a ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/eQu7Ii923DU"},"video walkthrough")," of setting up with Let's Encrypt."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:")," Per the Let\u2019s Encrypt FAQ certificates are valid for only 90 days. In order to update your Let\u2019s Encrypt certificate you must perform a server reboot per below instructions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You may read about Let\u2019s Encrypt at Let\u2019s Encrypt - Free SSL/TLS Certificates")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You may read about certbot at Certbot")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You may read about how to get a free DNS at Free Dynamic DNS - No-IP.com - Managed DNS Services"))),(0,o.kt)("h4",{id:"setup"},"Setup"),(0,o.kt)("p",null,"After starting your AMI there are a few steps to installing and using Let\u2019s Encrypt Certificates. After installing the certificate, management of the Let\u2019s Encrypt SSL certificate is automatic."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Register the AWS provided EC2 public IP to your DNS as an A-record. The best practice as an introduction is to use a free DNS service such as freeddns.no-ip.com to provide the FQDN used for your Learn EC2.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the EC2 Security controls to open HTTP as an inbound security rule - you should have HTTP, HTTPS, and SSH (from your console IP) enabled at this point.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"SSH to your EC2 instance and create a file containing your FQDN from freeddns.no-ip.com and your email address and save to /home/ubuntu/my_ssl_config. The format of this file is important and should follow the example below. The file contains only two lines specifying the domain and email used to configure the Let\u2019s Encrypt process, e.g.:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"ssldomain: devmen.hopto.org\nsslemail: developers@anthology.com\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"SSH to your EC2 instance and from the command line reboot the instance using the command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo reboot now\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"On reboot the server will generate your Let\u2019s Encrypt SSL certificate, on future reboots or restarts the server will check whether the certificate requires renewal. If renewal is required reboot the server to renew the Let\u2019s Encrypt certificate. If your certificate is past expiration, because you ignored the renewal notices, sudo mv the /etc/letsencrypt directory to your home directory for safe keeping and reboot.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Warning:")," When you stop and start an existing EC2 instance, AWS resets the public domain name and IP - you must update your DNS entry to reflect the new IP."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Warning:")," Let\u2019s Encrypt has a limit of 20 certificate requests on a domain per week. Repeated stop and starts of an AMI using the same domain may exceed the Let\u2019s Encrypt request limit, requiring you to provide a new domain name. ","*","*"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Warning:")," Timing is important. If you attempt to access your EC2 before the Let's Encrypt cert installation is complete you will need to rebuild. If you are having issues, ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/eQu7Ii923DU"},"watch this video walkthrough")," of settup and getting a Let's Encrypt certificate working."),(0,o.kt)("h4",{id:"what-does-the-learn-rest-and-lti-developer-ami-cost"},"What does the Learn REST and LTI Developer AMI cost?"),(0,o.kt)("p",null,"The Open Innovation Initiative was created to lower the cost of entry for developing software solutions on the Learn platform. This is accomplished by removing the previous Partner program costs and replacing those partner program costs with low hourly AMI usage costs. This enables you the developer to control your costs for prototyping your applications and entering the education software market."),(0,o.kt)("p",null,"Use of the Developer AMI will result in two charges being made to your account:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"An AWS Infrastructure charge\nThis charge is based on the EC2 instance type selected to run the AMI and varies based on the instance type size and region. An example is $0.0464/hr for a t2.medium instance served from")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Software charge\nA Software charge of $0.05/hr (US dollars) is added to the AWS infrastructure charge."))),(0,o.kt)("p",null,"If you have any questions, feel free to ask in this space or email us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:developers@anthology.com"},"developers@anthology.com"),"."),(0,o.kt)("h4",{id:"log-into-the-learn-application-on-the-ami"},"Log into the Learn Application on the AMI"),(0,o.kt)("p",null,"The username is administrator. The password is the instance ID, e.g., i-234234234234. If you look at the log created when you spin it up it is also printed there. You can find the log from the EC2 console."),(0,o.kt)("p",null,"The first time you go to login, you will see text on the page like the following. NOTE: There is no way to upgrade an AMI. You will need to get the latest AMI, and transfer any necessary data, BEFORE the expiration date shown on the page you see."),(0,o.kt)("p",null,"<<<<<<<<< IMAGE >>>>>>>>>"),(0,o.kt)("p",null,"Landing page seen the first time you login to the developer AMI"),(0,o.kt)("h3",{id:"configure-your-ami-based-learn-instance"},"Configure Your AMI-based Learn Instance"),(0,o.kt)("p",null,"When you set up your instance of Learn, you can configure different options. These options are discussed in Enable Learn Tool Interoperability (LTI) Links and Text."),(0,o.kt)("h4",{id:"triage-your-ami-based-learn-instance"},"Triage Your AMI-based Learn Instance"),(0,o.kt)("p",null,"Note that not stopping your EC2 when you encounter an error will continue to incur EC2 charges and we do not issue refunds.Always stop your EC2 if you encounter an error or do not require a 24x7 development instance."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For General Learn System Administration you may visit: ",(0,o.kt)("a",{parentName:"p",href:"https://help.blackboard.com/Learn/Administrator/SaaS"},"Learn SaaS Deployments"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"504 Gateway Error")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Visiting https:// displays a 504 error in your browser: 1. Shutdown the instance to stop accumulating charges and try again 2. Or reboot the instance:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ssh into the instance")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Issue this command:"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo reboot now\n")),(0,o.kt)("ol",{parentName:"li",start:3},(0,o.kt)("li",{parentName:"ol"},"Issue a reboot from the AWS console")))),(0,o.kt)("p",null,"The above restarts the instance and will typically correct the 504 error."),(0,o.kt)("h3",{id:"migration-cookbook---recreating-data-between-amis"},"Migration Cookbook - Recreating Data between AMIs"),(0,o.kt)("p",null,"Prior to the expiration of an AMI license (which is not upgradable) if you wish, you may migrate existing Learn data to your new subscription."),(0,o.kt)("p",null,"Currently, there is no formal migration/transfer tool to port Learn data between AMI (EC2) instances. However, there are several existing administrative tools that can be leveraged to capture the bulk of T&L (teaching/learning data) like courses, users, institutional roles, and enrollments, etc. from an existing (source) EC2 and reinstate/recreate the data onto a (new) EC2. The resources linked below will guide you through this data transfer process:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{target:"_blank",href:a(8882).Z},"Bb Learn EC2 Data Transfer.docx"),": A Word doc outlining a comprehensive step-by-step overview of the migration/transfer process between a source and destination EC2."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{target:"_blank",href:a(9108).Z},"EC2 Migration SQL Scripts and Feed Files.zip"),": A zip file containing all the SQL scripts (PostgreSQL format) and example feed files referenced in the Data Transfer overview document (above).")),(0,o.kt)("h4",{id:"notice---avg-on-windows-systems"},"Notice - AVG on Windows Systems"),(0,o.kt)("p",null,"While using the AVG antivirus product on a Windows system and attempting to create a course using Learn, AVG may manifest what we believe is a false positive dialog regarding CVE-2014-0286-A. This can occur while using any browser, though the error message is specific to now unsupported versions of Microsoft Internet Explorer 6 through 11. Our security team has indicated that this is an issue with the AVG software. See the AVG website for questions about configuring the AVG software, and for their contact information."))}d.isMDXComponent=!0},8882:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/Bb Learn EC2 Data Transfer-a44262fe7817bece60750c8a517e90fb.docx"},9108:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/EC2 Migration SQL Scripts and Feed Files-9ddff8e92fc0fee79e0eaedabf2f2163.zip"}}]);