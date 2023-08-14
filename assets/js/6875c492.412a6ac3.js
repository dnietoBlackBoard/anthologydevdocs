"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[8610],{2568:(e,a,t)=>{t.d(a,{Z:()=>l});var r=t(7294),n=t(7325),o=t(3672);function l(e){const{metadata:a}=e,{previousPage:t,nextPage:l}=a;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},t&&r.createElement(o.Z,{permalink:t,title:r.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&r.createElement(o.Z,{permalink:l,title:r.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},8389:(e,a,t)=>{t.d(a,{Z:()=>l});var r=t(7294),n=t(9107),o=t(1116);function l(e){let{items:a,component:t=o.Z}=e;return r.createElement(r.Fragment,null,a.map((e=>{let{content:a}=e;return r.createElement(n.n,{key:a.metadata.permalink,content:a},r.createElement(t,null,r.createElement(a,null)))})))}},4883:(e,a,t)=>{t.r(a),t.d(a,{default:()=>v});var r=t(7294),n=t(6010),o=t(7325),l=t(3777),s=t(5463),m=t(3702),i=t(3699),c=t(2506),g=t(2568),u=t(3647),d=t(8389);function h(e){const a=function(){const{selectMessage:e}=(0,l.c)();return a=>e(a,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:a}))}();return(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:a(e.count),tagName:e.label})}function p(e){let{tag:a}=e;const t=h(a);return r.createElement(r.Fragment,null,r.createElement(s.d,{title:t}),r.createElement(u.Z,{tag:"blog_tags_posts"}))}function b(e){let{tag:a,items:t,sidebar:n,listMetadata:l}=e;const s=h(a);return r.createElement(c.Z,{sidebar:n},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,s),r.createElement(i.Z,{href:a.allTagsPath},r.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),r.createElement(d.Z,{items:t}),r.createElement(g.Z,{metadata:l}))}function v(e){return r.createElement(s.FG,{className:(0,n.Z)(m.k.wrapper.blogPages,m.k.page.blogTagPostListPage)},r.createElement(p,e),r.createElement(b,e))}},2294:(e,a,t)=>{t.d(a,{Z:()=>D});var r=t(7294),n=t(545);const o=JSON.parse('{"default":{"img":"/img/ANTHOLOGY-Logo-RGB.svg","name":"Anthology Inc","role":"Developer Relations and Standards Team","area":"","username":"blackboard"},"eric preston":{"img":"https://avatars.githubusercontent.com/u/539286?v=4","name":"Eric Preston","role":"Former Staff Software Engineer","area":"Developer Relations and Standards","username":"ewpreston"},"davey herrera":{"img":"https://avatars.githubusercontent.com/u/2322778?v=4","name":"Davey Herrera","role":"Software Engineer","area":"Developer Relations and Standards","username":"daveyherrera"},"mark o\'neil":{"img":"https://avatars.githubusercontent.com/u/5400309?v=4","name":"Mark O\'Neil","role":"Director","area":"Platform and APIs","username":"moneil"},"sebastian silva":{"img":"https://avatars.githubusercontent.com/u/44152511?v=4","name":"Sebastian Silva","role":"Software Engineer - Partnerships","area":"Developer Relations and Standards","username":"onecomputerguy"},"scott hurrey":{"img":"https://avatars.githubusercontent.com/u/886516?v=4","name":"Scott Hurrey","role":"Former Director","area":"Developer Relations and Standards","username":"shurrey"},"mark kauffman":{"img":"https://avatars.githubusercontent.com/u/10159872?v=4","name":"Mark Kauffman","role":"Sr. Software Engineer","area":"Developer Relations and Standards","username":"mark-b-kauffman"},"kelley macewen":{"img":"/img/ANTHOLOGY-Logo-RGB.svg","name":"Kelley MacEwen","role":"Former Sr. Content Designer","area":"Content Team","username":"blackboard"},"hernan ortiz":{"img":"https://avatars.githubusercontent.com/u/10201569?v=4","name":"Hernan Ortiz","role":"Former Sr. Content Designer","area":"Developer Relations and Standards","username":"hernanpl"},"darek sady":{"img":"https://avatars.githubusercontent.com/u/36425568?v=4","name":"Darek Sady","role":"Dormer Director","area":"Teaching and Learning","username":"dareksady"},"simon gaeremynck":{"img":"https://avatars.githubusercontent.com/u/63703963?v=4","name":"Simon Gaeremynck","role":"Software Engineer","area":"Product Development Team","username":"bbsimong"},"ryan haber":{"img":"https://avatars.githubusercontent.com/u/10554169?v=4","name":"Ryan Haber","role":"Sr. Content Designer","area":"Content Team","username":"ryanhaber"},"gokulakrishnan raman":{"img":"/img/ANTHOLOGY-Logo-RGB.svg","name":"Gokulakrishnan Raman","role":"Software Engineer","area":"Product Development Team","username":"blackboard"},"subitha muniasamy":{"img":"/img/ANTHOLOGY-Logo-RGB.svg","name":"Subitha Muniasamy","role":"Sr. Software Engineer","area":"Product Development Team","username":"blackboard"},"sara lehnert":{"img":"/img/ANTHOLOGY-Logo-RGB.svg","name":"Sara Lehnert","role":"Sr. Partner Manager","area":"Business Development Team","username":"blackboard"}}'),l="author_container_d_nI",s="author-card_FPzt",m="author_img_iwVW",i="author_img_default_qaVD",c="author-info_fGJo",g="author-layout_dvat",u="author-name_x2RY",d="author-extra-info_uYFe",h="social-logo_Jd1A",p="author-pill-container_HYUX",b="author-pill_VArL",v="author_img_pill_MEb3",E="author-name-pill_eFIs",f="social-logo-pill_plPK",k="pill-link_mvo0",N=e=>r.createElement("div",{className:l},r.createElement("div",{className:s},r.createElement("img",{className:e.img.includes("ANTHOLOGY")?i:m,src:e.img?e.img:"/img/ANTHOLOGY-Logo-RGB.svg",alt:"Photo of the author"}),r.createElement("div",{className:c},r.createElement("div",{className:g},r.createElement("div",null,r.createElement("p",{className:u},e.name?e.name:"Anthology Inc."),r.createElement("p",{className:d},e.role?e.role:"Developer Relations and Standards Team"),e.area?r.createElement("p",{className:d},e.area):""),r.createElement("a",{href:`https://github.com/${e.username?e.username:"blackboard"}`,target:"_blank"},r.createElement("img",{className:h,src:"/img/github-logo.svg",alt:"GitHub logo"})))))),_=(e,a)=>r.createElement("a",{key:a,className:k,href:`https://github.com/${e.username?e.username:"blackboard"}\n      `,target:"_blank"},r.createElement("div",{className:b},r.createElement("img",{className:v,src:e.img?e.img:"/img/ANTHOLOGY-Logo-RGB.svg",alt:"Photo of the author"}),r.createElement("p",{className:E},e.name?e.name.split(" ")[0]:"Anthology"),r.createElement("img",{className:f,src:"/img/github-logo.svg",alt:"GitHub logo"}))),y=e=>{if(!e.frontMatter.author)return N(o.default);const a=e.frontMatter.author.split(", ");if(a.length>1)return(e=>r.createElement("div",{className:p},e.map(((e,a)=>{const t=o[e.trim().toLowerCase()];return _(t?o[e.trim().toLowerCase()]:o.default,a)}))))(a);{let e=o[a[0].trim().toLowerCase()];return N(e||o.default)}},S="tracker_container_KhwX",T="date_dFdR",w=e=>r.createElement("div",{className:S},r.createElement("p",{className:T},"Published:\xa0",e.frontMatter.published?(e=>{const a=e.split("-");return Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(a[0],a[1]-1,a[2]))})(e.frontMatter.published):"Not Available"),r.createElement("p",{className:T},"Last Update:"," ",e.frontMatter.edited?(e=>{const a=e.split("-");return Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(a[0],a[1]-1,a[2]))})(e.frontMatter.edited):"Not Available"),r.createElement("p",null,"\xa0")),D={...n.Z,AuthorBox:y,VersioningTracker:w}}}]);