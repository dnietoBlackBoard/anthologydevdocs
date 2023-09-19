"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[3085],{6252:(e,a,t)=>{t.r(a),t.d(a,{default:()=>u});var n=t(7294),r=t(6010),o=t(5463),l=t(3702),s=t(2574),i=t(2381),m=t(7086);const c={mdxPageWrapper:"mdxPageWrapper_j9I6"};function u(e){const{content:a}=e,{metadata:{title:t,description:u,frontMatter:d}}=a,{wrapperClassName:g,hide_table_of_contents:v}=d;return n.createElement(o.FG,{className:(0,r.Z)(g??l.k.wrapper.mdxPages,l.k.page.mdxPage)},n.createElement(o.d,{title:t,description:u}),n.createElement(s.Z,null,n.createElement("main",{className:"container container--fluid margin-vert--lg"},n.createElement("div",{className:(0,r.Z)("row",c.mdxPageWrapper)},n.createElement("div",{className:(0,r.Z)("col",!v&&"col--8")},n.createElement("article",null,n.createElement(i.Z,null,n.createElement(a,null)))),!v&&a.toc.length>0&&n.createElement("div",{className:"col col--2"},n.createElement(m.Z,{toc:a.toc,minHeadingLevel:d.toc_min_heading_level,maxHeadingLevel:d.toc_max_heading_level}))))))}},7086:(e,a,t)=>{t.d(a,{Z:()=>c});var n=t(7462),r=t(7294),o=t(6010),l=t(2728);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},i="table-of-contents__link toc-highlight",m="table-of-contents__link--active";function c(e){let{className:a,...t}=e;return r.createElement("div",{className:(0,o.Z)(s.tableOfContents,"thin-scrollbar",a)},r.createElement(l.Z,(0,n.Z)({},t,{linkClassName:i,linkActiveClassName:m})))}},2728:(e,a,t)=>{t.d(a,{Z:()=>v});var n=t(7462),r=t(7294),o=t(107);function l(e){const a=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);a.forEach(((e,a)=>{const n=t.slice(2,e.level);e.parentIndex=Math.max(...n),t[e.level]=a}));const n=[];return a.forEach((e=>{const{parentIndex:t,...r}=e;t>=0?a[t].children.push(r):n.push(r)})),n}function s(e){let{toc:a,minHeadingLevel:t,maxHeadingLevel:n}=e;return a.flatMap((e=>{const a=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:n});return function(e){return e.level>=t&&e.level<=n}(e)?[{...e,children:a}]:a}))}function i(e){const a=e.getBoundingClientRect();return a.top===a.bottom?i(e.parentNode):a}function m(e,a){let{anchorTopOffset:t}=a;const n=e.find((e=>i(e).top>=t));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function c(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:a}}=(0,o.L)();return(0,r.useEffect)((()=>{e.current=a?0:document.querySelector(".navbar").clientHeight}),[a]),e}function u(e){const a=(0,r.useRef)(void 0),t=c();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:l}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),s=function(e){let{minHeadingLevel:a,maxHeadingLevel:t}=e;const n=[];for(let r=a;r<=t;r+=1)n.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),i=m(s,{anchorTopOffset:t.current}),c=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(a.current&&a.current!==e&&a.current.classList.remove(r),e.classList.add(r),a.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,t])}function d(e){let{toc:a,className:t,linkClassName:n,isChild:o}=e;return a.length?r.createElement("ul",{className:o?void 0:t},a.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children,className:t,linkClassName:n}))))):null}const g=r.memo(d);function v(e){let{toc:a,className:t="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:c,maxHeadingLevel:d,...v}=e;const h=(0,o.L)(),f=c??h.tableOfContents.minHeadingLevel,p=d??h.tableOfContents.maxHeadingLevel,b=function(e){let{toc:a,minHeadingLevel:t,maxHeadingLevel:n}=e;return(0,r.useMemo)((()=>s({toc:l(a),minHeadingLevel:t,maxHeadingLevel:n})),[a,t,n])}({toc:a,minHeadingLevel:f,maxHeadingLevel:p});return u((0,r.useMemo)((()=>{if(i&&m)return{linkClassName:i,linkActiveClassName:m,minHeadingLevel:f,maxHeadingLevel:p}}),[i,m,f,p])),r.createElement(g,(0,n.Z)({toc:b,className:t,linkClassName:i},v))}},2294:(e,a,t)=>{t.d(a,{Z:()=>C});var n=t(7294),r=t(545);const o=JSON.parse('{"default":{"img":"/img/ANTHOLOGY-Logo-RGB.svg","name":"Anthology Inc","role":"Developer Relations and Standards Team","area":"","username":"blackboard"},"eric preston":{"img":"https://avatars.githubusercontent.com/u/539286?v=4","name":"Eric Preston","role":"Former Staff Software Engineer","area":"Developer Relations and Standards","username":"ewpreston"},"davey herrera":{"img":"https://avatars.githubusercontent.com/u/2322778?v=4","name":"Davey Herrera","role":"Software Engineer","area":"Developer Relations and Standards","username":"daveyherrera"},"mark o\'neil":{"img":"https://avatars.githubusercontent.com/u/5400309?v=4","name":"Mark O\'Neil","role":"Director","area":"Platform and APIs","username":"moneil"},"sebastian silva":{"img":"https://avatars.githubusercontent.com/u/44152511?v=4","name":"Sebastian Silva","role":"Software Engineer - Partnerships","area":"Developer Relations and Standards","username":"onecomputerguy"},"scott hurrey":{"img":"https://avatars.githubusercontent.com/u/886516?v=4","name":"Scott Hurrey","role":"Former Director","area":"Developer Relations and Standards","username":"shurrey"},"mark kauffman":{"img":"https://avatars.githubusercontent.com/u/10159872?v=4","name":"Mark Kauffman","role":"Sr. Software Engineer","area":"Developer Relations and Standards","username":"mark-b-kauffman"},"kelley macewen":{"img":"/img/ANTHOLOGY-Logo-RGB.svg","name":"Kelley MacEwen","role":"Former Sr. Content Designer","area":"Content Team","username":"blackboard"},"hernan ortiz":{"img":"https://avatars.githubusercontent.com/u/10201569?v=4","name":"Hernan Ortiz","role":"Former Sr. Content Designer","area":"Developer Relations and Standards","username":"hernanpl"},"darek sady":{"img":"https://avatars.githubusercontent.com/u/36425568?v=4","name":"Darek Sady","role":"Former Director","area":"Teaching and Learning","username":"dareksady"},"simon gaeremynck":{"img":"https://avatars.githubusercontent.com/u/63703963?v=4","name":"Simon Gaeremynck","role":"Software Engineer","area":"Product Development Team","username":"bbsimong"},"ryan haber":{"img":"https://avatars.githubusercontent.com/u/10554169?v=4","name":"Ryan Haber","role":"Sr. Content Designer","area":"Content Team","username":"ryanhaber"},"gokulakrishnan raman":{"img":"/img/ANTHOLOGY-Logo-RGB.svg","name":"Gokulakrishnan Raman","role":"Software Engineer","area":"Product Development Team","username":"blackboard"},"subitha muniasamy":{"img":"/img/ANTHOLOGY-Logo-RGB.svg","name":"Subitha Muniasamy","role":"Sr. Software Engineer","area":"Product Development Team","username":"blackboard"},"sara lehnert":{"img":"/img/ANTHOLOGY-Logo-RGB.svg","name":"Sara Lehnert","role":"Sr. Partner Manager","area":"Business Development Team","username":"blackboard"}}'),l="author_container_d_nI",s="author-card_FPzt",i="author_img_iwVW",m="author_img_default_qaVD",c="author-info_fGJo",u="author-layout_dvat",d="author-name_x2RY",g="author-extra-info_uYFe",v="social-logo_Jd1A",h="author-pill-container_HYUX",f="author-pill_VArL",p="author_img_pill_MEb3",b="author-name-pill_eFIs",E="social-logo-pill_plPK",L="pill-link_mvo0",N=e=>n.createElement("div",{className:l},n.createElement("div",{className:s},n.createElement("img",{className:e.img.includes("ANTHOLOGY")?m:i,src:e.img?e.img:"/img/ANTHOLOGY-Logo-RGB.svg",alt:"Photo of the author"}),n.createElement("div",{className:c},n.createElement("div",{className:u},n.createElement("div",null,n.createElement("p",{className:d},e.name?e.name:"Anthology Inc."),n.createElement("p",{className:g},e.role?e.role:"Developer Relations and Standards Team"),e.area?n.createElement("p",{className:g},e.area):""),n.createElement("a",{href:`https://github.com/${e.username?e.username:"blackboard"}`,target:"_blank"},n.createElement("img",{className:v,src:"/img/github-logo.svg",alt:"GitHub logo"})))))),_=(e,a)=>n.createElement("a",{key:a,className:L,href:`https://github.com/${e.username?e.username:"blackboard"}\n      `,target:"_blank"},n.createElement("div",{className:f},n.createElement("img",{className:p,src:e.img?e.img:"/img/ANTHOLOGY-Logo-RGB.svg",alt:"Photo of the author"}),n.createElement("p",{className:b},e.name?e.name.split(" ")[0]:"Anthology"),n.createElement("img",{className:E,src:"/img/github-logo.svg",alt:"GitHub logo"}))),k=e=>{if(!e.frontMatter.author)return N(o.default);const a=e.frontMatter.author.split(", ");if(a.length>1)return(e=>n.createElement("div",{className:h},e.map(((e,a)=>{const t=o[e.trim().toLowerCase()];return _(t?o[e.trim().toLowerCase()]:o.default,a)}))))(a);{let e=o[a[0].trim().toLowerCase()];return N(e||o.default)}},H="tracker_container_KhwX",y="date_dFdR",S=e=>n.createElement("div",{className:H},n.createElement("p",{className:y},"Published:\xa0",e.frontMatter.published?(e=>{const a=e.split("-");return Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(a[0],a[1]-1,a[2]))})(e.frontMatter.published):"Not Available"),n.createElement("p",{className:y},"Last Update:"," ",e.frontMatter.edited?(e=>{const a=e.split("-");return Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(a[0],a[1]-1,a[2]))})(e.frontMatter.edited):"Not Available"),n.createElement("p",null,"\xa0")),C={...r.Z,AuthorBox:k,VersioningTracker:S}}}]);