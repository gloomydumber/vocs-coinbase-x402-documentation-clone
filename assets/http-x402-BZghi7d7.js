import{f as r,j as n}from"./index-DqJD2CIO.js";const d={title:"HTTP 402",description:"undefined"};function s(i){const e={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.header,{children:n.jsxs(e.h1,{id:"http-402",children:["HTTP 402",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#http-402",children:n.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,n.jsxs(e.p,{children:[`HTTP 402 Payment Required 상태 코드는 존재는 했지만, 긴 시간동안 실제 사용은 되지 않고 있었습니다.
이제 x402가 해당 상태 코드를 활용해서 `,n.jsx(e.a,{href:"https://economyofbits.substack.com/p/marc-andreessens-original-sin",children:n.jsx(e.strong,{children:"인터넷의 원죄"})}),"를 해결합니다."]}),`
`,n.jsxs(e.h2,{id:"http-402란-무엇인가요",children:["HTTP 402란 무엇인가요?",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#http-402란-무엇인가요",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2",children:n.jsx(e.strong,{children:"HTTP 402"})}),`는 리소스에 접근하려면 결제가 필요하다는 것을 나타내는 표준이지만
거의 사용되지 않는 HTTP 응답 상태 코드입니다.`]}),`
`,n.jsx(e.p,{children:"x402에서 이 상태 코드는 다음을 위해 활성화됩니다."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"고객(구매자 또는 AI 에이전트)에게 지불이 필요하다는 사실을 알립니다."}),`
`,n.jsx(e.li,{children:"금액, 통화, 상품을 받을 주소 등 결제 세부 정보를 전달합니다."}),`
`,n.jsx(e.li,{children:"결제를 프로그래밍 방식으로 완료하는 데 필요한 정보를 제공합니다."}),`
`]}),`
`,n.jsxs(e.h2,{id:"x402가-http-402를-사용하는-이유",children:["x402가 HTTP 402를 사용하는 이유",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#x402가-http-402를-사용하는-이유",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(e.p,{children:"HTTP 402의 주요 목적은 특히 다음과 같은 경우 웹 리소스에 액세스하기 위한 원활하고 API 기반 결제를 가능하게 하는 것입니다."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"기계 간(M2M) 결제(예: AI 에이전트)."}),`
`,n.jsx(e.li,{children:"API 호출이나 유료 콘텐츠와 같은 사용량 기반 모델."}),`
`,n.jsx(e.li,{children:"계좌 생성이나 전통적인 결제 수단 없이 소액 결제가 가능합니다."}),`
`]}),`
`,n.jsx(e.p,{children:"402 상태 코드를 사용하면 x402 프로토콜이 기본적으로 웹과 호환되고 모든 HTTP 기반 서비스에 쉽게 통합될 수 있습니다."}),`
`,n.jsxs(e.h2,{id:"요약",children:["요약",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#요약",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(e.p,{children:"HTTP 402는 x402 프로토콜의 기반이며, 서비스가 HTTP 응답 내에서 직접 결제 요구 사항을 선언할 수 있도록 합니다. 이는 다음과 같습니다."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"결제가 필요하다는 신호"}),`
`,n.jsx(e.li,{children:"필요한 결제 세부 정보를 전달합니다"}),`
`,n.jsx(e.li,{children:"표준 HTTP 워크플로와 완벽하게 통합됩니다."}),`
`]}),`
`,n.jsxs(e.h2,{id:"더-알아보기",children:["더 알아보기",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#더-알아보기",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://docs.cdp.coinbase.com/x402/core-concepts/how-it-works",children:n.jsx(e.strong,{children:"x402 작동 방식"})})," - HTTP 402가 전체 결제 흐름에 어떻게 적용되는지 확인하세요."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://docs.cdp.coinbase.com/x402/core-concepts/client-server",children:n.jsx(e.strong,{children:"클라이언트 및 서버"})})," - x402 프로토콜의 역할 이해"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://docs.cdp.coinbase.com/x402/quickstart-for-sellers",children:n.jsx(e.strong,{children:"판매자를 위한 빠른 시작"})})," - HTTP 402 응답 구현 시작"]}),`
`]})]})}function c(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{c as default,d as frontmatter};
