"use strict";(self.webpackChunklmos_website=self.webpackChunklmos_website||[]).push([[4686],{1830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(4848),s=n(8453);const o={title:"Html Reader"},l=void 0,c={id:"arc/readers/html",title:"Html Reader",description:"Powered by https://jsoup.org/",source:"@site/docs/arc/03-readers/html.md",sourceDirName:"arc/03-readers",slug:"/arc/readers/html",permalink:"/lmos/docs/arc/readers/html",draft:!1,unlisted:!1,editUrl:"https://github.com/eclipse-lmos/website/edit/main/docs/arc/03-readers/html.md",tags:[],version:"current",frontMatter:{title:"Html Reader"},sidebar:"arcSidebar",previous:{title:"Readers",permalink:"/lmos/docs/arc/readers/"},next:{title:"PDF Reader",permalink:"/lmos/docs/arc/readers/pdf"}},a={},i=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Powered by ",(0,r.jsx)(t.a,{href:"https://jsoup.org/",children:"https://jsoup.org/"})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"html"})," function is used to read the content of html files.\nHtml files are a popular source of data for AI Agents.\nHowever, the html tags can quickly eat up the limited tokens of prompts.\nWith the ",(0,r.jsx)(t.code,{children:"html"})," function, html tags are striped away and only the content of the file is returned."]}),"\n",(0,r.jsx)(t.p,{children:"Html files can be loaded from a local file or a url."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"https://example.com/index.html\nfile://path/to/index.html\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Example of using the ",(0,r.jsx)(t.code,{children:"html"})," function in a Function:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kts",children:'function(\n    name = "get_html_data",\n    description = "Returns the content of a Html file.",\n    params = types(string("file", "the location of the html file."))\n) { (file) ->\n    html(file).getOrNull() ?: "Could not load the html file."\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Furthermore"}),", the ",(0,r.jsx)(t.code,{children:"htmlDocument"})," function can be used to parse the contents of html to a document model\nwhich can be used to select individuals parts of the html file."]}),"\n",(0,r.jsx)(t.p,{children:"For example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kts",children:'val doc = htmlDocument("https://www.telekom.de").getOrThrow()\ndoc.select("p").text() // retrieves all p tags from the html document\n'})}),"\n",(0,r.jsxs)(t.p,{children:["(see ",(0,r.jsx)(t.a,{href:"https://jsoup.org/",children:"https://jsoup.org/"})," for more details)"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var r=n(6540);const s={},o=r.createContext(s);function l(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);