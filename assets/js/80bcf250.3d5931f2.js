"use strict";(self.webpackChunklmos_website=self.webpackChunklmos_website||[]).push([[6661],{3175:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=i(4848),a=i(8453);const s={title:"Introduction",sidebar_position:1},o="Introduction",r={id:"multi_agent_system/overview",title:"Introduction",description:"What is a Multi-Agent System?",source:"@site/docs/multi_agent_system/overview.md",sourceDirName:"multi_agent_system",slug:"/multi_agent_system/overview",permalink:"/lmos/docs/multi_agent_system/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/eclipse-lmos/website/edit/main/docs/multi_agent_system/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"lmosSidebar",previous:{title:"Getting Started",permalink:"/lmos/docs/getting_started"},next:{title:"Agent Description Format",permalink:"/lmos/docs/multi_agent_system/agent_description"}},c={},l=[{value:"What is a Multi-Agent System?",id:"what-is-a-multi-agent-system",level:2},{value:"Current Challanges",id:"current-challanges",level:2},{value:"Closed ecosystems",id:"closed-ecosystems",level:3},{value:"Lack of standardized data formats",id:"lack-of-standardized-data-formats",level:3},{value:"Single Network vs Internet",id:"single-network-vs-internet",level:3},{value:"Fixed Communication protocol",id:"fixed-communication-protocol",level:3},{value:"Limited Dynamic Grouping",id:"limited-dynamic-grouping",level:3},{value:"What is Web of Things?",id:"what-is-web-of-things",level:2},{value:"Agent Discovery and Description",id:"agent-discovery-and-description",level:3},{value:"Interoperability Across Diverse Networks",id:"interoperability-across-diverse-networks",level:3},{value:"Dynamic Agent Discovery and Metadata Propagation",id:"dynamic-agent-discovery-and-metadata-propagation",level:3},{value:"Security and Trust",id:"security-and-trust",level:3},{value:"Extensibility and Flexibility",id:"extensibility-and-flexibility",level:3},{value:"Adaptive Communication Patterns",id:"adaptive-communication-patterns",level:3},{value:"Cross-Domain Collaboration",id:"cross-domain-collaboration",level:3},{value:"Standardized Testing and Validation",id:"standardized-testing-and-validation",level:3}];function d(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,n.jsx)(t.h2,{id:"what-is-a-multi-agent-system",children:"What is a Multi-Agent System?"}),"\n",(0,n.jsx)(t.p,{children:"A Multi-Agent System (MAS) is a system composed of multiple agents that interact with each other to achieve individual and collective goals. Each agent can potentially operate independently, making decisions based on its environment and objectives, while also having the ability to communicate and coordinate with other agents to collaboratively solve complex problems."}),"\n",(0,n.jsx)(t.p,{children:"Examples of Multi-Agent Systems:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Autonomous Vehicles: Multiple autonomous cars (agents) interacting with each other and road infrastructure, ensuring safety and traffic management."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Digital Assistants: Chatbots can leverage MAS principles to distribute questions to different agents, which are experts in their domain, such as sales, service or technical support."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"current-challanges",children:"Current Challanges"}),"\n",(0,n.jsx)(t.h3,{id:"closed-ecosystems",children:"Closed ecosystems"}),"\n",(0,n.jsxs)(t.p,{children:["Many multi-agent frameworks are built around a closed ecosystem, which limits their ability to interact with external systems or agents outside the defined ecosystem.  ",(0,n.jsx)("br",{}),"\nThis limitation hampers innovation and reduces the overall utility of a multi-agent framework, as it cannot leverage the full spectrum of available agents."]}),"\n",(0,n.jsx)(t.h3,{id:"lack-of-standardized-data-formats",children:"Lack of standardized data formats"}),"\n",(0,n.jsxs)(t.p,{children:["Many frameworks use proprietary or non-standard data formats for agent interactions, making it difficult for agents to interpret and exchange information. ",(0,n.jsx)("br",{}),"\nThis lack of standardization can lead to integration issues and increased complexity when collaborating with other agents. Without a standardized format for agent metadata, different agents may use varying schemas or data structures to describe their capabilities, services, and requirements. This inconsistency creates barriers for agents trying to discover and interact with one another, as each agent may interpret metadata differently."]}),"\n",(0,n.jsx)(t.h3,{id:"single-network-vs-internet",children:"Single Network vs Internet"}),"\n",(0,n.jsxs)(t.p,{children:["Many frameworks run multi-agent systems on a single network, which is not representative of real-world scenarios where agents can be distributed across various networks and locations.",(0,n.jsx)("br",{}),"\nThis limitation prevents frameworks from accurately modeling the interactions and dynamics that occur in distributed systems, thus affecting their scalability and applicability in practical situations."]}),"\n",(0,n.jsx)(t.h3,{id:"fixed-communication-protocol",children:"Fixed Communication protocol"}),"\n",(0,n.jsxs)(t.p,{children:["The communication protocol in many frameworks is fixed. For example some frameworks might only support HTTP for communication, excluding other widely used protocols like MQTT (Message Queuing Telemetry Transport) or WebSockets. ",(0,n.jsx)("br",{}),"\nThis limitation can hinder agents that would benefit from real-time communication or lightweight messaging. Some frameworks enforce a fixed request-response pattern, restricting agents to this interaction style and preventing more dynamic communication patterns such as publish-subscribe or event-driven architectures.\nThis forces developers to adopt specific communication patterns that may not align with their needs."]}),"\n",(0,n.jsx)(t.h3,{id:"limited-dynamic-grouping",children:"Limited Dynamic Grouping"}),"\n",(0,n.jsxs)(t.p,{children:["Existing frameworks often have predefined groups, which can inhibit the ability of agents to form dynamic groups based on different demands.",(0,n.jsx)("br",{}),"\nThis inflexibility means agents may not be able to quickly regroup in response to changing conditions."]}),"\n",(0,n.jsx)(t.h2,{id:"what-is-web-of-things",children:"What is Web of Things?"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://www.w3.org/WoT/",children:"W3C Web of Things (WoT) Architecture"})," can significantly contribute to an open multi-agent architecture by providing a standardized framework for the discovery, interaction, and integration of diverse agents across different networks. Drawing on our principles (Openness, Interoperability, Security and Transparency), the W3C WoT's approach aligns closely with LMOS's vision of an open, scalable, and interoperable AI ecosystem."]}),"\n",(0,n.jsx)(t.h3,{id:"agent-discovery-and-description",children:"Agent Discovery and Description"}),"\n",(0,n.jsx)(t.p,{children:"WoT offers standardized mechanisms for agent discovery and description through its Thing Description (TD) format. This allows agents to express their capabilities and services in a consistent, machine-readable way."}),"\n",(0,n.jsx)(t.h3,{id:"interoperability-across-diverse-networks",children:"Interoperability Across Diverse Networks"}),"\n",(0,n.jsx)(t.p,{children:"WoT uses open standards to ensure interoperability among different agents, even when they are implemented on different platforms. Similarly, in an open multi-agent architecture, agents often need to communicate across different platforms and protocols (HTTP, MQTT, WebSockets, etc.). WoT ensures that agents, regardless of their underlying technology or platform, can communicate and collaborate seamlessly across different networks, following open, protocol-agnostic principles."}),"\n",(0,n.jsx)(t.h3,{id:"dynamic-agent-discovery-and-metadata-propagation",children:"Dynamic Agent Discovery and Metadata Propagation"}),"\n",(0,n.jsx)(t.p,{children:"In WoT, devices and services can dynamically propagate metadata using protocols like mDNS for local discovery and can register on centralized directories for broader access. In LMOS, this approach can be adapted for agent discovery, where agents dynamically register and propagate their metadata to a centralized Agent Registry for efficient querying. This allows LMOS agents to discover each other in real time based on specific needs or capabilities."}),"\n",(0,n.jsx)(t.h3,{id:"security-and-trust",children:"Security and Trust"}),"\n",(0,n.jsx)(t.p,{children:"WoT places a strong emphasis on secure communication and privacy through security mechanisms that protect data and ensure trustworthiness between devices. In LMOS\u2019s multi-agent system, data privacy and security are paramount. The same WoT security frameworks can be applied to ensure that communication between AI agents remains secure, agents adhere to privacy standards, and sensitive data is protected throughout agent interactions."}),"\n",(0,n.jsx)(t.h3,{id:"extensibility-and-flexibility",children:"Extensibility and Flexibility"}),"\n",(0,n.jsx)(t.p,{children:"WoT's architecture allows for the easy addition of new Thing types. Similarly, LMOS\u2019s architecture supports the integration of new agent types without requiring extensive system overhauls. This flexibility fosters an adaptable ecosystem that can evolve with emerging technologies and changing user needs."}),"\n",(0,n.jsx)(t.h3,{id:"adaptive-communication-patterns",children:"Adaptive Communication Patterns"}),"\n",(0,n.jsx)(t.p,{children:"WoT supports various interaction patterns, including request-response, event-driven, and publish-subscribe models. By incorporating these adaptive communication patterns, multi-agent systems can allow agents to choose the most suitable method for their interactions based on specific tasks and contexts. This flexibility enhances collaboration efficiency."}),"\n",(0,n.jsx)(t.h3,{id:"cross-domain-collaboration",children:"Cross-Domain Collaboration"}),"\n",(0,n.jsx)(t.p,{children:"WoT\u2019s interoperability principles allow agents from different domains (e.g., smart homes, industrial automation, healthcare) to collaborate effectively. This cross-domain interaction broadens the scope of problem-solving capabilities, allowing agents to tackle complex challenges that span multiple sectors and applications, ultimately enhancing the utility and innovation of multi-agent systems."}),"\n",(0,n.jsx)(t.h3,{id:"standardized-testing-and-validation",children:"Standardized Testing and Validation"}),"\n",(0,n.jsx)(t.p,{children:"The establishment of common protocols and formats within WoT can enable standardized testing and validation of agents."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>r});var n=i(6540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);