"use strict";(self.webpackChunklmos_website=self.webpackChunklmos_website||[]).push([[803],{6999:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=t(4848),a=t(8453);const s={title:"Agent Description Format"},o="Agent Description Format",r={id:"multi_agent_system/agent_description",title:"Agent Description Format",description:"Problem statement",source:"@site/docs/multi_agent_system/agent_description.md",sourceDirName:"multi_agent_system",slug:"/multi_agent_system/agent_description",permalink:"/lmos/docs/multi_agent_system/agent_description",draft:!1,unlisted:!1,editUrl:"https://github.com/eclipse-lmos/website/edit/main/docs/multi_agent_system/agent_description.md",tags:[],version:"current",frontMatter:{title:"Agent Description Format"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/lmos/docs/multi_agent_system/overview"},next:{title:"Agent Discovery",permalink:"/lmos/docs/multi_agent_system/agent_discovery"}},c={},l=[{value:"Problem statement",id:"problem-statement",level:2},{value:"Web of Things",id:"web-of-things",level:2},{value:"Thing Description example",id:"thing-description-example",level:3},{value:"Node.js example",id:"nodejs-example",level:3},{value:"Semantic Web",id:"semantic-web",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"agent-description-format",children:"Agent Description Format"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement",children:"Problem statement"}),"\n",(0,i.jsx)(n.p,{children:"A standardized format is essential for describing the capabilities and metadata of intelligent agents. This specification should offer an appropriate level of abstraction to ensure interoperability across a wide range of agent platforms and domains."}),"\n",(0,i.jsx)(n.p,{children:"Agent metadata is essential for several reasons:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Discovery:"})," It allows agents to find each other based on capabilities, making it easier to assemble multi-agent systems for complex tasks."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Interoperability:"})," By specifying input/output formats and API endpoints, metadata ensures that agents can communicate effectively."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Resource Management:"})," Information about an agent's resource requirements helps in efficient allocation and deployment."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Version information:"})," Version information aids in managing updates and ensuring compatibility between different agent versions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Security:"})," Metadata about authentication and encryption capabilities helps maintain a secure multi-agent environment."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Autonomy:"})," With comprehensive metadata, agents can make informed decisions about which other agents to interact with, enhancing the system's autonomy."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"web-of-things",children:"Web of Things"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.w3.org/WoT/",children:"W3C Web of Things (WoT)"})," offers standardized mechanisms for agent discovery and description through its Thing Description (TD) format. This allows agents to express their capabilities and services in a consistent, machine-readable way. TDs are usually encoded in JSON format that supports JSON-LD."]}),"\n",(0,i.jsx)(n.p,{children:"A Thing Description typically contains:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Metadata about the Thing"}),"\n",(0,i.jsx)(n.li,{children:"A longer explanation of what the Thing does or represents."}),"\n",(0,i.jsx)(n.li,{children:"Interaction affordances (Properties, Actions, and Events)"}),"\n",(0,i.jsx)(n.li,{children:"Data JSON schemas for machine-understandability"}),"\n",(0,i.jsx)(n.li,{children:"Information about the version of the Thing"}),"\n",(0,i.jsx)(n.li,{children:"Security definitions"}),"\n",(0,i.jsx)(n.li,{children:"Web links to related Things or resources"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Interaction affordances define how you can interact with the Thing, which may include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Properties:"})," The state or attributes of the Thing, which can be read."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Actions:"})," Functions that can be invoked on the Thing ."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Events:"})," Notifications emitted by the Thing when certain conditions are met."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The TD allows mapping of these interactions to various transport protocols (HTTP, MQTT, CoAP, etc.). This makes it possible to abstract away the underlying technical details of the protocol. For more details see ",(0,i.jsx)(n.a,{href:"./agent_communication",children:"Agent Communication"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"thing-description-example",children:"Thing Description example"}),"\n",(0,i.jsx)(n.p,{children:'This example illustrates how a Weather Agent can be modeled using a Thing Description, with HTTP as the primary communication protocol, although alternative protocols may also be utilized. The Agent metadata describes that the agent uses the gpt-4o model from Azure and integrates with OpenWeatherMap API to provide weather information. The agent supports both text and voice interactions in English and German, adheres to GDPR compliance, and uses data anonymization. It offers a single action, "getWeather," which takes a natural language question and interaction mode as input and returns weather information in natural language. The service is secured using basic authentication and is accessed via a POST request to a specified endpoint, but other security schemes, such as OAuth2 tokens, can also be used.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "@context": [\n        "https://www.w3.org/2022/wot/td/v1.1",\n        {\n            "htv": "http://www.w3.org/2011/http#",\n            "ex": "https://weatherai.example.com",\n        },\n        "https://schema.org/"\n    ],\n    "id": "urn:uuid:6f1d3a7a-1f97-4e6b-b45f-f3c2e1c84c77",\n    "title": "WeatherAgent",\n    "@type": "ex:Agent",\n    "ex:metadata": {\n        "ex:vendor": {\n            "ex:name": "WeatherAI Inc.",\n            "ex:url": "https://weatherai.example.com"\n        },\n        "ex:model": {\n            "ex:name": "gpt-4o",\n            "ex:provider": "Azure"\n        },\n        "ex:serviceIntegration": {\n            "ex:weatherAPI": "OpenWeatherMap",\n            "ex:apiVersion": "v2.5",\n            "ex:apiDocumentation": "https://openweathermap.org/api"\n        },\n        "ex:dataPrivacy": {\n            "ex:dataRetentionPeriod": "30 days",\n            "ex:anonymizationMethod": "HASHING"\n        },\n        "ex:interaction": {\n            "ex:supportedLanguages": ["en_US", "de_DE"],\n            "ex:interactionMode": ["text", "voice"]\n        },\n        "ex:compliance": {\n            "ex:regulatoryCompliance": "GDPR"\n        }\n    },\n    "securityDefinitions": {\n        "basic_sc": {\n            "scheme": "basic",\n            "in": "header"\n        }\n    },\n    "security": "basic_sc",\n    "actions": {\n        "getWeather": {\n            "description": "Fetches weather information based on user input.",\n            "safe": true, //  Used to signal that there is no internal state changed when invoking the action. \n            "idempotent": false, // Informs whether the Action can be called repeatedly with the same result.\n            "synchronous": true,\n            "input": {\n               "type": "object",\n                "properties": {\n                    "question": {\n                        "type": "string"\n                    },\n                    "interactionMode": {\n                        "type": "string",\n                        "enum": ["text", "voice"]\n                    }\n                },\n                "required": ["question","interactionMode"]\n            },\n            "output": {\n                "type": "string",\n                "description": "Natural language output providing weather information."\n            },            \n            "forms": [\n                {\n                    "op": "invokeaction",\n                    "href": "https://weatherai.example.com/weather",\n                    "contentType": "application/json",\n                    "htv:methodName":"POST"\n                }\n            ]\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"nodejs-example",children:"Node.js example"}),"\n",(0,i.jsxs)(n.p,{children:["Here's a simple example of how you can interact with the Weather Agent from a Node.js application using ",(0,i.jsx)(n.code,{children:"node-wot"}),", without needing to know whether it's an AI Agent or a traditional device."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const WoT = require('@node-wot/core');\nconst HttpClientFactory = require('@node-wot/binding-http');\n\nasync function fetchWeather(question, interactionMode) {\n    try {\n        // Request the Thing Description from the Weather Agent\n        const td = await WoT.requestThingDescription(\"http://weatheragent.example.com/td\");\n        \n        // Consume the Thing Description\n        const thing = await WoT.consume(td);\n\n        // Prepare input parameters for the action\n        const inputParams = {\n            question: question,\n            interactionMode: interactionMode\n        };\n\n        // Invoke the getWeather action\n        const weatherResponse = await thing.invokeAction(\"getWeather\", inputParams);\n        const weatherData = await weatherResponse.value();\n    } catch (err) {\n        console.error(\"Error fetching weather:\", err);\n    }\n}\n\n// Example usage\nconst question = 'What is the weather in berlin?'; \nconst interactionMode = 'text';\nfetchWeather(question, interactionMode);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"semantic-web",children:"Semantic Web"}),"\n",(0,i.jsx)(n.p,{children:"Semantic Web technologies can significantly enhance Thing Descriptions (TDs) and provide valuable benefits for Multi-Agent Systems (MAS)."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Enhanced Interoperability:"}),"\nSemantic Web technologies allow TDs to use standardized vocabularies and ontologies, enabling different systems to understand and interpret the descriptions consistently."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Rich Semantic Annotations:"}),"\nTDs can be enriched with semantic annotations, providing more detailed and machine-readable information about a Thing's capabilities, relationships, and context."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Reasoning Capabilities:"}),"\nSemantic Web technologies enable logical reasoning over TDs, allowing agents to infer additional information and make more intelligent decisions about how to interact with Things."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Linked Data:"}),"\nBy using Semantic Web principles, TDs can easily link to other relevant resources, creating a web of interconnected knowledge about Things and their environments."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Extensibility:"}),"\nThe Semantic Web's flexible nature allows for easy extension of TDs with domain-specific vocabularies and ontologies."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(6540);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);