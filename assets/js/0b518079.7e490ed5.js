"use strict";(self.webpackChunklmos_website=self.webpackChunklmos_website||[]).push([[6023],{9935:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(4848),i=t(8453);const r={title:"Agent Discovery"},o="Agent Discovery",a={id:"multi_agent_system/agent_discovery",title:"Agent Discovery",description:"Problem statement",source:"@site/docs/multi_agent_system/agent_discovery.md",sourceDirName:"multi_agent_system",slug:"/multi_agent_system/agent_discovery",permalink:"/lmos/docs/multi_agent_system/agent_discovery",draft:!1,unlisted:!1,editUrl:"https://github.com/eclipse-lmos/website/edit/main/docs/multi_agent_system/agent_discovery.md",tags:[],version:"current",frontMatter:{title:"Agent Discovery"},sidebar:"lmosSidebar",previous:{title:"Agent Description Format",permalink:"/lmos/docs/multi_agent_system/agent_description"},next:{title:"Agent Registry",permalink:"/lmos/docs/multi_agent_system/agent_registry"}},c={},l=[{value:"Problem statement",id:"problem-statement",level:2},{value:"Web of Things",id:"web-of-things",level:2},{value:"Centralized Registry",id:"centralized-registry",level:3},{value:"Local Network Discovery",id:"local-network-discovery",level:3}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"agent-discovery",children:"Agent Discovery"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem statement"}),"\n",(0,s.jsx)(n.p,{children:"A discovery mechanism is needed for obtaining agent descriptions, supporting both local and global networks. It must accommodate updates to agent descriptions and handle the dynamic nature of agents, allowing for their constant evolution."}),"\n",(0,s.jsx)(n.p,{children:"Agent metadata can be propagated across the network using various transport mechanisms:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Centralized Registry:"})," Agents can publish their metadata to a centralized Agent Registry, which serves as a repository for agent information."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Local Network Discovery:"})," For local networks, protocols like mDNS (Multicast DNS) can be used to propagate agent metadata and enable discovery,"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"web-of-things",children:"Web of Things"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.w3.org/WoT/",children:"W3C Web of Things (WoT)"})," offers a mechanism that things can dynamically propagate metadata using protocols like mDNS for local discovery and/or can register themselves on centralized directories for broader access. In LMOS, this approach can be adapted for agent discovery, where agents dynamically register and propagate their metadata to a centralized Agent Registry for efficient querying. This allows LMOS agents to discover each other in real time based on specific needs or capabilities."]}),"\n",(0,s.jsx)(n.h3,{id:"centralized-registry",children:"Centralized Registry"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.w3.org/TR/wot-discovery/#architecture",children:"W3C Web of Things (WoT) Discovery"})," describes how things can register themselves in a central directory, known as a Thing Description Directory (TDD), through a process that involves several steps:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Directory Discovery:"}),"\nThe Thing first needs to discover the Thing Description Directory (TDD). This can be done through various introduction mechanisms like mDNS, DNS-SD, or well-known URLs."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TD Preparation:"}),"\nThe Thing prepares its Thing Description (TD), which contains metadata about the Thing's capabilities, interfaces, and other relevant information."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Registration Request:"}),"\nThe Thing sends a registration request to the TDD. This is typically done using an HTTP POST."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Updates:"}),"\nThings can update their registered TDs by sending new registration requests with updated information."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Time-to-Live:"}),"\nRegistrations often include a time-to-live value. Things must periodically refresh their registration or send keep-alive messages to maintain their presence in the directory."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"local-network-discovery",children:"Local Network Discovery"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.w3.org/TR/wot-discovery/#architecture",children:"W3C Web of Things (WoT) Discovery"})," is using ",(0,s.jsx)(n.strong,{children:"mDNS (Multicast DNS)"})," and ",(0,s.jsx)(n.strong,{children:"DNS-SD (DNS Service Discovery)"})," on a local network to discover things.\nMulticast DNS (mDNS) is a network protocol used for service discovery on a local network without relying on a centralized DNS server. Devices broadcast their presence on the network, and other devices can listen for these broadcasts to discover available services. It is commonly used in home networks (e.g., for discovering printers, smart TVs, etc.) and works in conjunction with DNS Service Discovery (DNS-SD) to advertise services."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Agent Advertisement:"}),"\nWoT things advertise their presence on the local network by publishing mDNS records. These records contain information about the agent, including its name, IP address, and available services."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Service Type:"}),'\nWoT things use a specific service type for DNS-SD: "_wot._tcp". This allows other agents to easily identify and locate WoT-compatible agents on the network.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TXT Records:"}),"\nAdditional information about the WoT thing is included in TXT records. These records may contain details such as:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The URL of the Thing Description (TD)"}),"\n",(0,s.jsx)(n.li,{children:"Metadata about the agents's capabilities"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Discovery Process:"}),'\nWhen a client or agent wants to discover WoT-compatible agents on the local network, it sends out mDNS queries for the "_wot._tcp" service type.\nThings that match this service type respond with their mDNS records, allowing the client to learn about available WoT things and their capabilities.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Retrieving Thing Descriptions:"}),"\nOnce a client has discovered a WoT-compatible agent, it can retrieve the agents's Thing Description using the URL provided in the TXT records.\nThe Thing Description provides detailed information about the agents's properties, actions, and events."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);