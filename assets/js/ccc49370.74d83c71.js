"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[6103],{324:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(7294),r=a(6010),o=a(5463),l=a(3702),i=a(9107),s=a(2506),m=a(1116),c=a(7462),u=a(7325),d=a(3672);function g(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a&&n.createElement(d.Z,(0,c.Z)({},a,{subLabel:n.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&n.createElement(d.Z,(0,c.Z)({},t,{subLabel:n.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function h(){const{assets:e,metadata:t}=(0,i.C)(),{title:a,description:r,date:l,tags:s,authors:m,frontMatter:c}=t,{keywords:u}=c,d=e.image??c.image;return n.createElement(o.d,{title:a,description:r,keywords:u,image:d},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:l}),m.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:m.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&n.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var v=a(7086);function p(e){let{sidebar:t,children:a}=e;const{metadata:r,toc:o}=(0,i.C)(),{nextItem:l,prevItem:c,frontMatter:u}=r,{hide_table_of_contents:d,toc_min_heading_level:h,toc_max_heading_level:p}=u;return n.createElement(s.Z,{sidebar:t,toc:!d&&o.length>0?n.createElement(v.Z,{toc:o,minHeadingLevel:h,maxHeadingLevel:p}):void 0},n.createElement(m.Z,null,a),(l||c)&&n.createElement(g,{nextItem:l,prevItem:c}))}function f(e){const t=e.content;return n.createElement(i.n,{content:e.content,isBlogPostPage:!0},n.createElement(o.FG,{className:(0,r.Z)(l.k.wrapper.blogPages,l.k.page.blogPostPage)},n.createElement(h,null),n.createElement(p,{sidebar:e.sidebar},n.createElement(t,null))))}},7086:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),r=a(7294),o=a(6010),l=a(2728);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},s="table-of-contents__link toc-highlight",m="table-of-contents__link--active";function c(e){let{className:t,...a}=e;return r.createElement("div",{className:(0,o.Z)(i.tableOfContents,"thin-scrollbar",t)},r.createElement(l.Z,(0,n.Z)({},a,{linkClassName:s,linkActiveClassName:m})))}},2728:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(7462),r=a(7294),o=a(107);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...r}=e;a>=0?t[a].children.push(r):n.push(r)})),n}function i(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function m(e,t){let{anchorTopOffset:a}=t;const n=e.find((e=>s(e).top>=a));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function c(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,r.useRef)(void 0),a=c();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:l}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let r=t;r<=a;r+=1)n.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),s=m(i,{anchorTopOffset:a.current}),c=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,a])}function d(e){let{toc:t,className:a,linkClassName:n,isChild:o}=e;return t.length?r.createElement("ul",{className:o?void 0:a},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const g=r.memo(d);function h(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:c,maxHeadingLevel:d,...h}=e;const v=(0,o.L)(),p=c??v.tableOfContents.minHeadingLevel,f=d??v.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,r.useMemo)((()=>i({toc:l(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:p,maxHeadingLevel:f});return u((0,r.useMemo)((()=>{if(s&&m)return{linkClassName:s,linkActiveClassName:m,minHeadingLevel:p,maxHeadingLevel:f}}),[s,m,p,f])),r.createElement(g,(0,n.Z)({toc:b,className:a,linkClassName:s},h))}},2294:(e,t,a)=>{a.d(t,{Z:()=>S});var n=a(7294),r=a(545);const o=JSON.parse('{"default":{"img":"/img/ANTHOLOGY-Logo-RGB.svg","name":"Anthology Inc","role":"Developer Relations and Standards Team","area":"","username":"blackboard"},"eric preston":{"img":"https://avatars.githubusercontent.com/u/539286?v=4","name":"Eric Preston","role":"Former Staff Software Engineer","area":"Developer Relations and Standards","username":"ewpreston"},"davey herrera":{"img":"https://avatars.githubusercontent.com/u/2322778?v=4","name":"Davey Herrera","role":"Software Engineer","area":"Developer Relations and Standards","username":"daveyherrera"},"mark o\'neil":{"img":"https://avatars.githubusercontent.com/u/5400309?v=4","name":"Mark O\'Neil","role":"Director","area":"Platform and APIs","username":"moneil"},"sebastian silva":{"img":"https://avatars.githubusercontent.com/u/44152511?v=4","name":"Sebastian Silva","role":"Software Engineer - Partnerships","area":"Developer Relations and Standards","username":"onecomputerguy"},"scott hurrey":{"img":"https://avatars.githubusercontent.com/u/886516?v=4","name":"Scott Hurrey","role":"Former Director","area":"Developer Relations and Standards","username":"shurrey"},"mark kauffman":{"img":"https://avatars.githubusercontent.com/u/10159872?v=4","name":"Mark Kauffman","role":"Sr. Software Engineer","area":"Developer Relations and Standards","username":"mark-b-kauffman"},"kelley macewen":{"img":"/img/ANTHOLOGY-Logo-RGB.svg","name":"Kelley MacEwen","role":"Former Sr. Content Designer","area":"Content Team","username":"blackboard"},"hernan ortiz":{"img":"https://avatars.githubusercontent.com/u/10201569?v=4","name":"Hernan Ortiz","role":"Former Sr. Content Designer","area":"Developer Relations and Standards","username":"hernanpl"},"darek sady":{"img":"https://avatars.githubusercontent.com/u/36425568?v=4","name":"Darek Sady","role":"Dormer Director","area":"Teaching and Learning","username":"dareksady"},"simon gaeremynck":{"img":"https://avatars.githubusercontent.com/u/63703963?v=4","name":"Simon Gaeremynck","role":"Software Engineer","area":"Product Development Team","username":"bbsimong"},"ryan haber":{"img":"https://avatars.githubusercontent.com/u/10554169?v=4","name":"Ryan Haber","role":"Sr. Content Designer","area":"Content Team","username":"ryanhaber"},"gokulakrishnan raman":{"img":"/img/ANTHOLOGY-Logo-RGB.svg","name":"Gokulakrishnan Raman","role":"Software Engineer","area":"Product Development Team","username":"blackboard"},"subitha muniasamy":{"img":"/img/ANTHOLOGY-Logo-RGB.svg","name":"Subitha Muniasamy","role":"Sr. Software Engineer","area":"Product Development Team","username":"blackboard"},"sara lehnert":{"img":"/img/ANTHOLOGY-Logo-RGB.svg","name":"Sara Lehnert","role":"Sr. Partner Manager","area":"Business Development Team","username":"blackboard"}}'),l="author_container_d_nI",i="author-card_FPzt",s="author_img_iwVW",m="author_img_default_qaVD",c="author-info_fGJo",u="author-layout_dvat",d="author-name_x2RY",g="author-extra-info_uYFe",h="social-logo_Jd1A",v="author-pill-container_HYUX",p="author-pill_VArL",f="author_img_pill_MEb3",b="author-name-pill_eFIs",E="social-logo-pill_plPK",L="pill-link_mvo0",N=e=>n.createElement("div",{className:l},n.createElement("div",{className:i},n.createElement("img",{className:e.img.includes("ANTHOLOGY")?m:s,src:e.img?e.img:"/img/ANTHOLOGY-Logo-RGB.svg",alt:"Photo of the author"}),n.createElement("div",{className:c},n.createElement("div",{className:u},n.createElement("div",null,n.createElement("p",{className:d},e.name?e.name:"Anthology Inc."),n.createElement("p",{className:g},e.role?e.role:"Developer Relations and Standards Team"),e.area?n.createElement("p",{className:g},e.area):""),n.createElement("a",{href:`https://github.com/${e.username?e.username:"blackboard"}`,target:"_blank"},n.createElement("img",{className:h,src:"/img/github-logo.svg",alt:"GitHub logo"})))))),k=(e,t)=>n.createElement("a",{key:t,className:L,href:`https://github.com/${e.username?e.username:"blackboard"}\n      `,target:"_blank"},n.createElement("div",{className:p},n.createElement("img",{className:f,src:e.img?e.img:"/img/ANTHOLOGY-Logo-RGB.svg",alt:"Photo of the author"}),n.createElement("p",{className:b},e.name?e.name.split(" ")[0]:"Anthology"),n.createElement("img",{className:E,src:"/img/github-logo.svg",alt:"GitHub logo"}))),_=e=>{if(!e.frontMatter.author)return N(o.default);const t=e.frontMatter.author.split(", ");if(t.length>1)return(e=>n.createElement("div",{className:v},e.map(((e,t)=>{const a=o[e.trim().toLowerCase()];return k(a?o[e.trim().toLowerCase()]:o.default,t)}))))(t);{let e=o[t[0].trim().toLowerCase()];return N(e||o.default)}},y="tracker_container_KhwX",H="date_dFdR",C=e=>n.createElement("div",{className:y},n.createElement("p",{className:H},"Published:\xa0",e.frontMatter.published?(e=>{const t=e.split("-");return Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(t[0],t[1]-1,t[2]))})(e.frontMatter.published):"Not Available"),n.createElement("p",{className:H},"Last Update:"," ",e.frontMatter.edited?(e=>{const t=e.split("-");return Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(t[0],t[1]-1,t[2]))})(e.frontMatter.edited):"Not Available"),n.createElement("p",null,"\xa0")),S={...r.Z,AuthorBox:_,VersioningTracker:C}}}]);