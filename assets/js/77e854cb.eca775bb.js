"use strict";(self.webpackChunklmos_website=self.webpackChunklmos_website||[]).push([[6262],{2542:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>m});var o=n(4848),t=n(8453);const s={title:"Memory"},i=void 0,a={id:"arc/memory/index",title:"Memory",description:"The Arc Agent Framework declares the following interface for memory:",source:"@site/docs/arc/07-memory/index.md",sourceDirName:"arc/07-memory",slug:"/arc/memory/",permalink:"/lmos/docs/arc/memory/",draft:!1,unlisted:!1,editUrl:"https://github.com/eclipse-lmos/website/edit/main/docs/arc/07-memory/index.md",tags:[],version:"current",frontMatter:{title:"Memory"},sidebar:"arcSidebar",previous:{title:"Eventing",permalink:"/lmos/docs/arc/eventing/"},next:{title:"Packages",permalink:"/lmos/docs/arc/packages"}},d={},m=[{value:"In-Memory Memory",id:"in-memory-memory",level:2},{value:"Mongo Memory",id:"mongo-memory",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"The Arc Agent Framework declares the following interface for memory:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-kotlin",children:"interface Memory {\n    \n    /**\n     * Store a value in LONG_TERM memory.\n     * @param owner The owner of the memory. For example, the user id.\n     * @param key The key to store the value under.\n     * @param value The value to store. If null, the value is removed from memory.\n     */\n    suspend fun storeLongTerm(owner: String, key: String, value: Any?)\n\n    /**\n     * Store a value in SHORT_TERM memory.\n     * @param owner The owner of the memory. For example, the user id.\n     * @param key The key to store the value under.\n     * @param value The value to store. If null, the value is removed from memory.\n     * @param sessionId The session id to store the value under.\n     */\n    suspend fun storeShortTerm(owner: String, key: String, value: Any?, sessionId: String)\n\n    /**\n     * Fetch a value from memory.\n     * @param owner The owner of the memory. For example, the user id.\n     * @param key The key to fetch the value for.\n     * @param sessionId The session id to fetch the value for. Only used if the value was stored under SHORT_TERM memory.\n     * @return The value stored under the key, or null if no value is stored.\n     */\n    suspend fun fetch(owner: String, key: String, sessionId: String? = null): Any?\n}\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Each application wanting to use memory can provide an implementation of the ",(0,o.jsx)(r.code,{children:"Memory"})," interface."]}),"\n",(0,o.jsx)(r.p,{children:"Arc provides the following implementations:"}),"\n",(0,o.jsx)(r.h2,{id:"in-memory-memory",children:"In-Memory Memory"}),"\n",(0,o.jsxs)(r.p,{children:["The Arc Agent Framework provides a default in-memory implementation of the ",(0,o.jsx)(r.code,{children:"Memory"})," interface.\nThe implementation is automatically configured when the Arc Spring Boot Starter is used\nand no other implementation of the ",(0,o.jsx)(r.code,{children:"Memory"})," interface is provided."]}),"\n",(0,o.jsx)(r.p,{children:"This implementation is good for getting started, but it is not recommended for production use,\nas memory is not persisted or shared between instances."}),"\n",(0,o.jsx)(r.h2,{id:"mongo-memory",children:"Mongo Memory"}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Package Name"}),(0,o.jsx)(r.th,{children:"Type"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"io.github.eclipse-lmos.arc:arc-memory-mongo-spring-boot-starter:$arcVersion"}),(0,o.jsx)(r.td,{children:"Spring Boot Starter"})]})})]}),"\n",(0,o.jsxs)(r.p,{children:["The Mongo Memory implementation uses the ",(0,o.jsx)(r.a,{href:"https://www.mongodb.com/",children:"Mongo Database"})," to store data."]}),"\n",(0,o.jsx)(r.p,{children:"The module is provided as a Spring Boot Starter and under the hood uses Spring Data to access\nthe Mongo Database."}),"\n",(0,o.jsxs)(r.p,{children:["A time-to-live (TTL) index is created for ",(0,o.jsx)(r.code,{children:"short-term"})," memory entries to automatically remove\nthem after a period of time."]}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Configuration"}),(0,o.jsx)(r.th,{children:"Description"}),(0,o.jsx)(r.th,{children:"Type"}),(0,o.jsx)(r.th,{children:"Default"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"arc.memory.short-term-ttl"}),(0,o.jsx)(r.td,{children:"The time-to-live for short-term memory entries."}),(0,o.jsx)(r.td,{children:"Duration"}),(0,o.jsx)(r.td,{children:"PT3H (3 hours)"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"spring.data.mongodb.uri"}),(0,o.jsxs)(r.td,{children:['The uri of the Mongo Database. Example, "mongodb://admin',":password",'@localhost:27017/memory"']}),(0,o.jsx)(r.td,{children:"URI"}),(0,o.jsx)(r.td,{children:"localhost"})]})]})]}),"\n",(0,o.jsxs)(r.p,{children:["For more details on how to configure a Mongo Database with Spring, please refer to\n",(0,o.jsx)(r.a,{href:"https://docs.spring.io/spring-data/mongodb/reference/mongodb.html",children:"https://docs.spring.io/spring-data/mongodb/reference/mongodb.html"}),"."]})]})}function c(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var o=n(6540);const t={},s=o.createContext(t);function i(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);