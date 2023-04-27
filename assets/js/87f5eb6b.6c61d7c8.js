"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[3083],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=s,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:s,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),s=(n(7294),n(4137));const r={layout:"post",title:"Java Demo",id:"rest_apis-learn-examples-java-demo",categories:"Learn Rest",author:"Scott Hurrey",doctitle:"Demo using Java"},o="Demo using Java",i={unversionedId:"REST APIs/Learn/Examples/rest_apis-learn-examples-java-demo",id:"REST APIs/Learn/Examples/rest_apis-learn-examples-java-demo",title:"Java Demo",description:"The rest demo script demonstrates authenticating a REST application,",source:"@site/docs/REST APIs/Learn/Examples/java-demo.md",sourceDirName:"REST APIs/Learn/Examples",slug:"/REST APIs/Learn/Examples/rest_apis-learn-examples-java-demo",permalink:"/docs/REST APIs/Learn/Examples/rest_apis-learn-examples-java-demo",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Java Demo",id:"rest_apis-learn-examples-java-demo",categories:"Learn Rest",author:"Scott Hurrey",doctitle:"Demo using Java"},sidebar:"documentationSidebar",previous:{title:"Command line REST Application",permalink:"/docs/REST APIs/Learn/Examples/rest_apis-learn-examples-java_command_line"},next:{title:"PHP Demo",permalink:"/docs/REST APIs/Learn/Examples/rest_apis-learn-examples-php-demo"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Assumptions",id:"assumptions",level:3},{value:"Code Walkthrough",id:"code-walkthrough",level:3},{value:"Authorization and Authentication",id:"authorization-and-authentication",level:3},{value:"Calling Services",id:"calling-services",level:3},{value:"Datasources",id:"datasources",level:3},{value:"Terms",id:"terms",level:3},{value:"Courses",id:"courses",level:3},{value:"Users",id:"users",level:3},{value:"Memberships",id:"memberships",level:3},{value:"Conclusion",id:"conclusion",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"demo-using-java"},"Demo using Java"),(0,s.kt)("p",null,"The rest demo script demonstrates authenticating a REST application,\nmanagement and use of the authorization token, and creating, updating,\ndiscovering, and deleting supported Learn objects. For a more complete tutorial, check out this ","[page]","(/REST APIs/Learn/examples/java-command-line) to walkthrough building a Java command-line application."),(0,s.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"You must ","[register a developer account and application]","(/REST APIs/Learn/Getting Started/registry) in the Developer Portal"),(0,s.kt)("li",{parentName:"ul"},"You must\n","[register your application]","(/REST APIs/Learn/Getting Started/registry) in Learn"),(0,s.kt)("li",{parentName:"ul"},"You must also configure the script as outlined in the README for the project")),(0,s.kt)("p",null,"This webapp allows you to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Authenticate"),(0,s.kt)("li",{parentName:"ul"},"Create, Read, and Update a Data Source"),(0,s.kt)("li",{parentName:"ul"},"Create, Read, and Update a Term"),(0,s.kt)("li",{parentName:"ul"},"Create, Read, and Update a Course"),(0,s.kt)("li",{parentName:"ul"},"Create, Read, and Update a User"),(0,s.kt)("li",{parentName:"ul"},"Create, Read, and Update a Membership"),(0,s.kt)("li",{parentName:"ul"},"Delete created objects in reverse order of create - membership, user, course, term, datasource.")),(0,s.kt)("p",null,"All generated output is sent to the browser."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"This is not meant to be a Java tutorial. It will not teach you to write code\nin Java. It will, however, give a Developer familiar with Java the knowledge\nnecessary to build a Web Services integration.")),(0,s.kt)("h3",{id:"assumptions"},"Assumptions"),(0,s.kt)("p",null,"This help topic assumes the Developer:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"is familiar with Java"),(0,s.kt)("li",{parentName:"ul"},"has Tomcat running somewhere the webapp can be installed"),(0,s.kt)("li",{parentName:"ul"},"has obtained a copy of the ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/blackboard/BBDN-REST-Demo-Java-Webapp"},"source code")," and built and deployed it to Tomcat in conjunction with the project ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/blackboard/BBDN-REST-Demo-Java-Webapp/blob/master/README.md"},"README.md")," file."),(0,s.kt)("li",{parentName:"ul"},"has a REST-enabled Learn instance.")),(0,s.kt)("h3",{id:"code-walkthrough"},"Code Walkthrough"),(0,s.kt)("p",null,"To build an integration with the Learn REST Web Services, regardless of\nthe programming language of choice, can really be summed up in two steps:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Use the Application Key and Secret to obtain an OAuth 2.0 access token, as described in the ","[Basic Authentication]","(/REST APIs/Learn/Getting Started/basic-authentication) document."),(0,s.kt)("li",{parentName:"ol"},"Call the appropriate REST endpoint with the appropriate data to perform the appropriate action.")),(0,s.kt)("h3",{id:"authorization-and-authentication"},"Authorization and Authentication"),(0,s.kt)("p",null,"The REST Services rely on OAuth 2.0 Bearer Tokens for authentication. A\nrequest is made to the token endpoint with a Basic Authorization header\ncontaining the base64-encoded key:secret string as its key. The token service\nreturns a JSON object containing the Access Token, the Token Type, and the\nnumber of seconds until the token expires. The token is set to expire after\none hour, and subsequent calls to retrieve the token will return the same\ntoken with an updated expiry time until such time that the token has expired.\nThere is no refresh token and currently no revoke token method."),(0,s.kt)("p",null,"The java code handles this in ",(0,s.kt)("inlineCode",{parentName:"p"},"bbdn.rest.Authorizer"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    \xa0 HttpHeaders headers = new HttpHeaders();\n    \xa0 headers.add("Authorization", "Basic " + getHash());\n    \xa0 headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);\n    \xa0\xa0\n    \xa0 HttpEntity<String> request = new HttpEntity<String>("grant_type=client_credentials",headers);\n    \xa0\n    \xa0 ResponseEntity<Token> response = restTemplate.exchange(uri, HttpMethod.POST, request, Token.class);\n    \xa0 \xa0\xa0\xa0\xa0\xa0\n    \xa0 Token token = response.getBody();\n')),(0,s.kt)("p",null,"The JSON response is serialized into the Token object, and you may then\nretrieve those values from that object."),(0,s.kt)("h3",{id:"calling-services"},"Calling Services"),(0,s.kt)("p",null,"The individual service calls are handled by Java Classes in service specific\npackages, that all implement the ",(0,s.kt)("inlineCode",{parentName:"p"},"bbdn.rest.RestHandler")," interface. The\ninterface is used to normalize each service handler to make additional service\nimplementation standardized as new endpoints are added."),(0,s.kt)("p",null,"RestHandler dictates that four methods must be implemented:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"String createObject(String access_token);"),(0,s.kt)("li",{parentName:"ul"},"String readObject(String access_token);"),(0,s.kt)("li",{parentName:"ul"},"String updateObject(String access_token);"),(0,s.kt)("li",{parentName:"ul"},"String deleteObject(String access_token);")),(0,s.kt)("p",null,"Each of these methods creates the JSON body when appropriate and then calls\n",(0,s.kt)("inlineCode",{parentName:"p"},"bbdn.rest.RestRequest")," to generate the appropriate HTTP Request, ship it to\nLearn, and return the JSON response as a String to be displayed in the browser\nwindow."),(0,s.kt)("p",null,"This all happens with the following code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    public static String sendRequest(String sUri, HttpMethod method, String access_token, String body) {\n    \xa0\xa0\xa0\xa0 try {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 RestTemplate restTemplate = new RestTemplate();\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // Workaround for allowing unsuccessful HTTP Errors to still print to the screen\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 restTemplate.setErrorHandler(new DefaultResponseErrorHandler(){\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 protected boolean hasError(HttpStatus statusCode) {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return false;\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }});\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // Workaround to allow for PATCH requests\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 HttpComponentsClientHttpRequestFactory requestFactory = new HttpComponentsClientHttpRequestFactory();\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 restTemplate.setRequestFactory(requestFactory);\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 URI uri = null;\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 try {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 uri = new URI(RestConstants.HOSTNAME + sUri);\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } catch (URISyntaxException e) {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 e.printStackTrace();\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 HttpHeaders headers = new HttpHeaders();\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 headers.add("Authorization", "Bearer " + access_token);\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 headers.setContentType(MediaType.APPLICATION_JSON);\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 HttpEntity<String> request = new HttpEntity<String>(body, headers);\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ResponseEntity<String> response = restTemplate.exchange(uri, method, request, String.class);\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return (response.toString());\n    \xa0\xa0\xa0\xa0 }\n    \xa0\xa0\xa0\xa0 catch (Exception e) {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return(e.getMessage());\n    \xa0\xa0\xa0\xa0 }\n    }\n')),(0,s.kt)("p",null,"End points are generally defined as ",(0,s.kt)("inlineCode",{parentName:"p"},"/learn/api/public/v1/<object type>/<objectId>"),". Object ID can be either the pk1, like ",(0,s.kt)("inlineCode",{parentName:"p"},"_1_1"),", or as the\nbatchuid. This value should be prepended by externalId:, like\n",(0,s.kt)("inlineCode",{parentName:"p"},"externalId:test101"),"."),(0,s.kt)("p",null,"For example, to retrieve a course by the pk1 ",(0,s.kt)("inlineCode",{parentName:"p"},"_1_1"),", you would call ",(0,s.kt)("strong",{parentName:"p"},"GET\n/learn/api/public/v1/courses/","_","1_1"),". To retrieve by the batchuid ",(0,s.kt)("inlineCode",{parentName:"p"},"test101"),", you\nwould call ",(0,s.kt)("strong",{parentName:"p"},"GET /learn/api/public/v1/courses/externalId:test101.")),(0,s.kt)("p",null,"Create is sent to Learn as a HTTP POST message with a JSON body that defines\nthe object. The endpoint should omit the objectId, as this will be generated\non creation."),(0,s.kt)("p",null,"Read is sent to Learn as a HTTP GET message with an empty body. The endpoint\nshould include the objectId being retrieved."),(0,s.kt)("p",null,"Update is sent to Learn as a HTTP PATCH message with a JSON body that defines\nthe object. The endpoint should include the objectId being updated."),(0,s.kt)("p",null,"Delete is sent to Learn as a HTTP DELETE message with empty body. The endpoint\nshould include the objectId being deleted."),(0,s.kt)("h3",{id:"datasources"},"Datasources"),(0,s.kt)("p",null,"Datasources are handled in ",(0,s.kt)("inlineCode",{parentName:"p"},"bbdn.rest.datasources.DatasourceHandler"),". As\nillustrated above, this Class implements the RestHandler interface and exposes\nfour methods. It also includes a private method to create the JSON payload."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Create")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public String createObject(String access_token) {\n    \xa0\xa0\xa0\xa0\xa0 return(RestRequest.sendRequest(RestConstants.DATASOURCE_PATH, HttpMethod.POST, access_token, getBody()));\n    }\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Read")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public String readObject(String access_token) {\n    \xa0\xa0\xa0\xa0 return(RestRequest.sendRequest(RestConstants.DATASOURCE_PATH + "/externalId:" + RestConstants.DATASOURCE_ID, HttpMethod.GET, access_token, ""));\n    }\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Update")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public String updateObject(String access_token) {\n    \xa0\xa0\xa0\xa0 return(RestRequest.sendRequest(RestConstants.DATASOURCE_PATH + "/externalId:" + RestConstants.DATASOURCE_ID, HttpMethod.PATCH, access_token, getBody()));\n    }\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Delete")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'     @Override\n    public String deleteObject(String access_token) {\n    \xa0\xa0\xa0\xa0 return(RestRequest.sendRequest(RestConstants.DATASOURCE_PATH + "/externalId:" + RestConstants.DATASOURCE_ID, HttpMethod.DELETE, access_token, ""));\n    }\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Create Body")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    private String getBody() {\n    \xa0\xa0\xa0\xa0 ObjectMapper objMapper = new ObjectMapper();\n    \xa0\xa0\xa0\xa0 JsonNode datasource = objMapper.createObjectNode();\n    \xa0\xa0\xa0\xa0 ((ObjectNode) datasource).put("externalId", RestConstants.DATASOURCE_ID);\n    \xa0\xa0\xa0\xa0 ((ObjectNode) datasource).put("description", RestConstants.DATASOURCE_DESCRIPTION);\n    \xa0\xa0\xa0\xa0 String body = "";\n    \xa0\xa0\xa0\xa0 try {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 body = objMapper.writeValueAsString(datasource);\n    \xa0\xa0\xa0\xa0 } catch (JsonProcessingException e) {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 e.printStackTrace();\n    \xa0\xa0\xa0\xa0 }\n    \xa0\xa0\xa0\xa0 return(body);\n    }\n')),(0,s.kt)("h3",{id:"terms"},"Terms"),(0,s.kt)("p",null,"Terms are handled in ",(0,s.kt)("inlineCode",{parentName:"p"},"bbdn.rest.terms.TermHandler"),". As illustrated above, this\nClass implements the RestHandler interface and exposes four methods. It also\nincludes a private method to create the JSON payload. In this initial release,\nwe are omitting the datasource. This is because the externalId version of the\ndatasource is not accepted in JSON payloads at this time. We could create a\nCONSTANT and set it to what we think it will be, but the ID isn't set until\nthe Datasource is created, so we don't know for sure what it will be."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Create")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public String createObject(String access_token) {\n    \xa0\xa0\xa0\xa0 return(RestRequest.sendRequest(RestConstants.TERM_PATH, HttpMethod.POST, access_token, getBody()));\n    }\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Read")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public String readObject(String access_token) {\n    \xa0\xa0\xa0\xa0 return(RestRequest.sendRequest(RestConstants.TERM_PATH + "/externalId:" + RestConstants.TERM_ID, HttpMethod.GET, access_token, ""));\n    }\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Update")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public String updateObject(String access_token) {\n    \xa0\xa0\xa0\xa0 return(RestRequest.sendRequest(RestConstants.TERM_PATH + "/externalId:" + RestConstants.TERM_ID, HttpMethod.PATCH, access_token, getBody()));\n    }\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Delete")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public String deleteObject(String access_token) {\n    \xa0\xa0\xa0\xa0 return(RestRequest.sendRequest(RestConstants.TERM_PATH + "/externalId:" + RestConstants.TERM_ID, HttpMethod.DELETE, access_token, ""));\n    }\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Create Body")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    private String getBody() {\n    \xa0\xa0\xa0\xa0 ObjectMapper objMapper = new ObjectMapper();\n    \xa0\xa0\xa0\xa0 ObjectNode term = objMapper.createObjectNode();\n    \xa0\xa0\xa0\xa0 term.put("externalId", RestConstants.TERM_ID);\n    \xa0\xa0\xa0\xa0 //term.put("dataSourceId", RestConstants.DATASOURCE_ID);\n    \xa0\xa0\xa0\xa0 term.put("name", RestConstants.TERM_NAME);\n    \xa0\xa0\xa0\xa0 term.put("description", RestConstants.TERM_DISPLAY);\n    \xa0\xa0\xa0\xa0 ObjectNode availability = term.putObject("availability");\n    \xa0\xa0\xa0\xa0 availability.put("available", "Yes");\n    \xa0\xa0\xa0\xa0 ObjectNode duration = availability.putObject("duration");\n    \xa0\xa0\xa0\xa0 duration.put("type",\xa0 "Continuous");\n    \xa0\xa0\xa0\xa0 String body = "";\n    \xa0\xa0\xa0\xa0 try {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 body = objMapper.writeValueAsString(term);\n    \xa0\xa0\xa0\xa0 } catch (JsonProcessingException e) {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 e.printStackTrace();\n    \xa0\xa0\xa0\xa0 }\n    \xa0\xa0\xa0\xa0 return(body);\n    }\n')),(0,s.kt)("h3",{id:"courses"},"Courses"),(0,s.kt)("p",null,"Course are handled in ",(0,s.kt)("inlineCode",{parentName:"p"},"bbdn.rest.course.CourseHandler"),". As illustrated above,\nthis Class implements the RestHandler interface and exposes four methods. It\nalso includes a private method to create the JSON payload. In this initial\nrelease, we are omitting the datasource. This is because the externalId\nversion of the datasource is not accepted in JSON payloads at this time. We\ncould create a CONSTANT and set it to what we think it will be, but the ID\nisn't set until the Datasource is created, so we don't know for sure what it\nwill be."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Create")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public String createObject(String access_token) {\n    \xa0\xa0\xa0\xa0 return(RestRequest.sendRequest(RestConstants.COURSE_PATH, HttpMethod.POST, access_token, getBody()));\n    }\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Read")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public String readObject(String access_token) {\n    \xa0\xa0\xa0\xa0 return(RestRequest.sendRequest(RestConstants.COURSE_PATH + "/externalId:" + RestConstants.COURSE_ID, HttpMethod.GET, access_token, ""));\n    }\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Update")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public String updateObject(String access_token) {\n    \xa0\xa0\xa0\xa0 return(RestRequest.sendRequest(RestConstants.COURSE_PATH + "/externalId:" + RestConstants.COURSE_ID, HttpMethod.PATCH, access_token, getBody()));\n    }\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Delete")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public String deleteObject(String access_token) {\n    \xa0\xa0\xa0\xa0 return(RestRequest.sendRequest(RestConstants.COURSE_PATH + "/externalId:" + RestConstants.COURSE_ID, HttpMethod.DELETE, access_token, ""));\n    }\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Create Body")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    private String getBody() {\n    \xa0\xa0\xa0\xa0 ObjectMapper objMapper = new ObjectMapper();\n    \xa0\xa0\xa0\xa0 ObjectNode course = objMapper.createObjectNode();\n    \xa0\xa0\xa0\xa0 course.put("externalId", RestConstants.COURSE_ID);\n    \xa0\xa0\xa0\xa0 //course.put("dataSourceId", RestConstants.DATASOURCE_ID);\n    \xa0\xa0\xa0\xa0 course.put("courseId", RestConstants.COURSE_ID);\n    \xa0\xa0\xa0\xa0 course.put("name", RestConstants.COURSE_NAME);\n    \xa0\xa0\xa0\xa0 course.put("description", RestConstants.COURSE_DESCRIPTION);\n    \xa0\xa0\xa0\xa0 course.put("allowGuests", "true");\n    \xa0\xa0\xa0\xa0 course.put("readOnly", "false");\n    \xa0\xa0\xa0\xa0 course.put("termId", RestConstants.TERM_ID);\n    \xa0\xa0\xa0\xa0 ObjectNode availability = course.putObject("availability");\n    \xa0\xa0\xa0\xa0 availability.put("duration", "continuous");\n    \xa0\xa0\xa0\xa0 String body = "";\n    \xa0\xa0\xa0\xa0 try {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 body = objMapper.writeValueAsString(course);\n    \xa0\xa0\xa0\xa0 } catch (JsonProcessingException e) {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 e.printStackTrace();\n    \xa0\xa0\xa0\xa0 }\n    \xa0\xa0\xa0\xa0 return(body);\n    }\n')),(0,s.kt)("h3",{id:"users"},"Users"),(0,s.kt)("p",null,"Users are handled in ",(0,s.kt)("inlineCode",{parentName:"p"},"bbdn.rest.users.UserHandler"),". As illustrated above, this\nClass implements the RestHandler interface and exposes four methods. It also\nincludes a private method to create the JSON payload. In this initial release,\nwe are omitting the datasource. This is because the externalId version of the\ndatasource is not accepted in JSON payloads at this time. We could create a\nCONSTANT and set it to what we think it will be, but the ID isn't set until\nthe Datasource is created, so we don't know for sure what it will be."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Create")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public String createObject(String access_token) {\n    \xa0\xa0\xa0\xa0 return(RestRequest.sendRequest(RestConstants.USER_PATH, HttpMethod.POST, access_token, getBody()));\n    }\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Read")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public String readObject(String access_token) {\n    \xa0\xa0\xa0\xa0 return(RestRequest.sendRequest(RestConstants.USER_PATH + "/externalId:" + RestConstants.USER_ID, HttpMethod.GET, access_token, ""));\n    }\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Update")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public String updateObject(String access_token) {\n    \xa0\xa0\xa0\xa0 return(RestRequest.sendRequest(RestConstants.USER_PATH + "/externalId:" + RestConstants.USER_ID, HttpMethod.PATCH, access_token, getBody()));\n    }\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Delete")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public String deleteObject(String access_token) {\n    \xa0\xa0\xa0\xa0 return(RestRequest.sendRequest(RestConstants.USER_PATH + "/externalId:" + RestConstants.USER_ID, HttpMethod.DELETE, access_token, ""));\n    }\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Create Body")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    private String getBody() {\n    \xa0\xa0\xa0\xa0 ObjectMapper objMapper = new ObjectMapper();\n    \xa0\xa0\xa0\xa0 ObjectNode user = objMapper.createObjectNode();\n    \xa0\xa0\xa0\xa0 user.put("externalId", RestConstants.USER_ID);\n    \xa0\xa0\xa0\xa0 //user.put("dataSourceId", RestConstants.DATASOURCE_ID);\n    \xa0\xa0\xa0\xa0 user.put("userName", RestConstants.USER_NAME);\n    \xa0\xa0\xa0\xa0 user.put("password", RestConstants.USER_PASS);\n    \xa0\xa0\xa0\xa0 ObjectNode availability = user.putObject("availability");\n    \xa0\xa0\xa0\xa0 availability.put("available", "Yes");\n    \xa0\xa0\xa0\xa0 ObjectNode name = user.putObject("name");\n    \xa0\xa0\xa0\xa0 name.put("given", RestConstants.USER_FIRST);\n    \xa0\xa0\xa0\xa0 name.put("family", RestConstants.USER_LAST);\n    \xa0\xa0\xa0\xa0 ObjectNode contact = user.putObject("contact");\n    \xa0\xa0\xa0\xa0 contact.put("email", RestConstants.USER_EMAIL);\n    \xa0\xa0\xa0\xa0 String body = "";\n    \xa0\xa0\xa0\xa0 try {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 body = objMapper.writeValueAsString(user);\n    \xa0\xa0\xa0\xa0 } catch (JsonProcessingException e) {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 e.printStackTrace();\n    \xa0\xa0\xa0\xa0 }\n    \xa0\xa0\xa0\xa0\xa0 return(body);\n    }\n')),(0,s.kt)("h3",{id:"memberships"},"Memberships"),(0,s.kt)("p",null,"Memberships are handled in ",(0,s.kt)("inlineCode",{parentName:"p"},"bbdn.rest.memberships.MemberHandler"),". As illustrated\nabove, this Class implements the RestHandler interface and exposes four\nmethods. It also includes a private method to create the JSON payload. In this\ninitial release, we are omitting the datasource. This is because the\nexternalId version of the datasource is not accepted in JSON payloads at this\ntime. We could create a CONSTANT and set it to what we think it will be, but\nthe ID isn't set until the Datasource is created, so we don't know for sure\nwhat it will be. In addition, the endpoint for memberships is a bit different,\nin that it is a sub-call to courses, so the endpoint would look like\n",(0,s.kt)("inlineCode",{parentName:"p"},"/learn/api/public/v1/courses/<courseId>/users/<userId>"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Create")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public String createObject(String access_token) {\n    \xa0\xa0\xa0\xa0 return(RestRequest.sendRequest(RestConstants.COURSE_PATH + "/externalId:" + RestConstants.COURSE_ID + "/users/externalId:"+ RestConstants.USER_ID, HttpMethod.PUT, access_token, getBody()));\n    }\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Read")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public String readObject(String access_token) {\n    \xa0\xa0\xa0\xa0 return(RestRequest.sendRequest(RestConstants.COURSE_PATH + "/externalId:" + RestConstants.COURSE_ID + "/users/externalId:"+ RestConstants.USER_ID, HttpMethod.GET, access_token, ""));\n    }\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Update")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public String updateObject(String access_token) {\n    \xa0\xa0\xa0\xa0 return(RestRequest.sendRequest(RestConstants.COURSE_PATH + "/externalId:" + RestConstants.COURSE_ID + "/users/externalId:"+ RestConstants.USER_ID, HttpMethod.PATCH, access_token, getBody()));\n    }\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Delete")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public String deleteObject(String access_token) {\n    \xa0\xa0\xa0\xa0 return(RestRequest.sendRequest(RestConstants.COURSE_PATH + "/externalId:" + RestConstants.COURSE_ID + "/users/externalId:"+ RestConstants.USER_ID, HttpMethod.DELETE, access_token, ""));\n    }\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Create Body")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    private String getBody() {\n    \xa0\xa0\xa0\xa0 ObjectMapper objMapper = new ObjectMapper();\n    \xa0\xa0\xa0\xa0 ObjectNode membership = objMapper.createObjectNode();\n    \xa0\xa0\xa0\xa0 //membership.put("dataSourceId", RestConstants.DATASOURCE_ID);\n    \xa0\xa0\xa0\xa0 ObjectNode availability = membership.putObject("availability");\n    \xa0\xa0\xa0\xa0 availability.put("available", "Yes");\n    \xa0\xa0\xa0\xa0 membership.put("courseRoleId", "Instructor");\n    \xa0\xa0\xa0\xa0 String body = "";\n    \xa0\xa0\xa0\xa0 try {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 body = objMapper.writeValueAsString(membership);\n    \xa0\xa0\xa0\xa0 } catch (JsonProcessingException e) {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 e.printStackTrace();\n    \xa0\xa0\xa0\xa0 }\n    \xa0\xa0\xa0\xa0 return(body);\n    }\n')),(0,s.kt)("h3",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"All of the code snippets included in this document at included in a sample\nREST Demo Java Webapp application available on\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/blackboard/BBDN-REST-Demo-Java-Webapp"},"GitHub"),". There is a README.html included that talks more specifically about\nbuilding and running the code. Feel free to review the code and run it against\na test or development Learn instance to see how it works."))}u.isMDXComponent=!0}}]);