import{f as r,j as n}from"./index-Clq6riR-.js";const c={title:"퍼실리테이터",description:"undefined"};function i(e){const s={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.header,{children:n.jsxs(s.h1,{id:"퍼실리테이터",children:["퍼실리테이터",n.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#퍼실리테이터",children:n.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,n.jsxs(s.p,{children:["이 페이지에서는 x402 프로토콜에서 ",n.jsx(s.strong,{children:"퍼실리테이터"}),"의 역할을 설명합니다."]}),`
`,n.jsx(s.p,{children:"퍼실리테이터 서비스는 선택 사항이지만 권장되는 서비스로, 클라이언트(구매자)와 서버(판매자) 간의 결제 검증 및 결제 과정을 간소화합니다."}),`
`,n.jsxs(s.h2,{id:"퍼실리테이터란-무엇인가요",children:["퍼실리테이터란 무엇인가요?",n.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#퍼실리테이터란-무엇인가요",children:n.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(s.p,{children:"퍼실리테이터는 다음과 같은 서비스를 제공합니다."}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"클라이언트가 제출한 결제 Payload를 검증합니다."}),`
`,n.jsx(s.li,{children:"서버를 대신하여 블록체인에서 결제를 처리합니다."}),`
`]}),`
`,n.jsx(s.p,{children:"퍼실리테이터를 사용하면 서버는 블록체인에 직접 연결하거나 결제 검증 로직을 직접 구현할 필요가 없습니다. 이를 통해 운영 복잡성이 줄어들고 거래의 정확한 실시간 검증이 보장됩니다."}),`
`,n.jsxs(s.h2,{id:"퍼실리테이터의-책임",children:["퍼실리테이터의 책임",n.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#퍼실리테이터의-책임",children:n.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"결제 검증"}),": 클라이언트의 결제 Payload가 서버에서 선언한 결제 요구 사항을 충족하는지 확인합니다."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"결제 정산"}),": 검증된 결제를 블록체인에 트랜잭션 형태로 제출하고 Confirmation이 이루어졌는지 모니터링합니다."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"응답(Response)"}),": 검증 및 결제 결과를 서버로 반환하여 서버가 클라이언트의 요청을 이행할지 여부를 결정할 수 있도록 합니다."]}),`
`]}),`
`,n.jsx(s.p,{children:"퍼실리테이터는 자금을 보관하거나 보관자 역할을 하지 않습니다. 퍼실리테이터는 클라이언트가 제공한 서명된 Payload를 기반으로 체인상 거래의 검증 및 실행을 수행합니다."}),`
`,n.jsxs(s.h2,{id:"왜-퍼실리테이터를-이용해야-하나요",children:["왜 퍼실리테이터를 이용해야 하나요?",n.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#왜-퍼실리테이터를-이용해야-하나요",children:n.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(s.p,{children:"퍼실리테이터를 활용하면 다음과 같은 이점이 있습니다."}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"운영상의 복잡성 감소"}),": 서버가 블록체인 노드와 직접 상호 작용할 필요가 없습니다."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"프로토콜 일관성"}),": 서비스 전반에 걸쳐 표준화된 검증 및 결제 흐름."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"더욱 빠른 통합"}),": 서비스는 최소한의 블록체인과 관련된 개발만 하고, 결제 과정을 도입할 수 있습니다."]}),`
`]}),`
`,n.jsx(s.p,{children:"검증 및 결제를 로컬 환경에서 구현하는 것이 가능하지만, 퍼실리테이터를 활용하면 도입 속도가 빨라지고 프로토콜의 올바른 동작이 보장됩니다."}),`
`,n.jsxs(s.h2,{id:"cdp-퍼실리테이터",children:["CDP 퍼실리테이터",n.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cdp-퍼실리테이터",children:n.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(s.p,{children:"Coinbase Developer Platform(CDP)은 호스팅된 퍼실리테이터 서비스를 운영합니다."}),`
`,n.jsx(s.p,{children:"CDP의 x402 퍼실리테이터 서비스는 다음을 제공합니다."}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Base에서 수수료 없는 USDC 결제"}),": 현재 추가 수수료 없이 거래를 처리하므로 판매자는 결제 금액의 100%를 받을 수 있습니다."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"USDC 전용 지원"}),": USDC를 결제 자산으로 단독으로 지원합니다(당분간)."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"고성능 정산"}),": 결제는 빠른 Confirmation 시간과 높은 처리량으로 Base Network에 제출됩니다."]}),`
`]}),`
`,n.jsxs(s.p,{children:["CDP 퍼실리테이터를 시작하려면 ",n.jsx(s.a,{href:"https://docs.cdp.coinbase.com/x402/quickstart-for-sellers",children:n.jsx(s.strong,{children:"판매자를 위한 빠른 시작"})}),"을 참조하세요."]}),`
`,n.jsx(s.p,{children:"CDP 퍼실리테이터를 활용하면 판매자는 블록체인 인프라를 관리하지 않고도 빠르게 결제를 통합할 수 있으며, 구매자에게는 예측 가능하고 저렴한 경험을 제공할 수 있습니다."}),`
`,n.jsxs(s.h2,{id:"이용-가능한-퍼실리테이터",children:["이용 가능한 퍼실리테이터",n.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#이용-가능한-퍼실리테이터",children:n.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(s.p,{children:["이용 가능한 지원자와 그들이 지원하는 네트워크 목록을 보려면 ",n.jsx(s.a,{href:"https://docs.cdp.coinbase.com/x402/network-support",children:n.jsx(s.strong,{children:"네트워크 지원"})}),"을 참조하세요."]}),`
`,n.jsxs(s.h2,{id:"작동-원리",children:["작동 원리",n.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#작동-원리",children:n.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(s.p,{children:["x402 지불 흐름 전체에 퍼실리테이터가 어떻게 적용되는지 알아보려면 ",n.jsx(s.a,{href:"https://docs.cdp.coinbase.com/x402/core-concepts/how-it-works",children:n.jsx(s.strong,{children:"x402 작동 방식"})}),"을 참조하세요."]}),`
`,n.jsxs(s.h2,{id:"요약",children:["요약",n.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#요약",children:n.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(s.p,{children:"퍼실리테이터는 x402 프로토콜 내에서 독립적인 검증 및 결제 계층 역할을 합니다. 서버가 직접적인 블록체인 인프라 없이도 결제를 확인하고 온체인에서 거래를 제출할 수 있도록 지원합니다."}),`
`,n.jsx(s.p,{children:"Coinbase가 호스팅 하는 퍼실리테이터 서비스는 Base에서 USDC 지불을 위한 즉시 사용 가능한 무료 환경을 제공함으로써 이를 더욱 간소화합니다."}),`
`,n.jsx(s.p,{children:"더 알아보기:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.a,{href:"https://docs.cdp.coinbase.com/x402/core-concepts/how-it-works",children:n.jsx(s.strong,{children:"x402 작동 방식"})})," - 전체 결제 흐름 보기"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.a,{href:"https://docs.cdp.coinbase.com/x402/network-support",children:n.jsx(s.strong,{children:"네트워크 지원"})})," - 이용 가능한 퍼실리테이터 및 네트워크 찾기"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.a,{href:"https://docs.cdp.coinbase.com/x402/core-concepts/http-402",children:n.jsx(s.strong,{children:"HTTP 402"})})," - 지불 요구 사항이 전달되는 방식을 이해합니다."]}),`
`]})]})}function h(e={}){const{wrapper:s}={...r(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{h as default,c as frontmatter};
