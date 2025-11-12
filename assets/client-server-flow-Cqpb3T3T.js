import{f as r,j as n,g as d}from"./index-D9RSfCtP.js";/* empty css                                */const h={title:"클라이언트 / 서버 흐름",description:"undefined"};function i(s){const e={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.header,{children:n.jsxs(e.h1,{id:"클라이언트--서버-흐름",children:["클라이언트 / 서버 흐름",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#클라이언트--서버-흐름",children:n.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,n.jsxs(e.p,{children:["이 페이지에서는 x402 프로토콜에서 ",n.jsx(e.strong,{children:"클라이언트"}),"와 ",n.jsx(e.strong,{children:"서버"}),`의 역할과 책임을 설명합니다.
클라이언트와 서버의 역할을 이해하는 것은 x402를 사용하여 프로그래밍 방식 결제 서비스를 설계, 구축 또는 통합하는 데 필수적입니다.`]}),`
`,n.jsxs(d,{type:"info",children:[n.jsx(e.p,{children:"클라이언트는 HTTP 요청을 하는 기술적 컴포넌트입니다. 일반적으로 리소스 구매자인 경우가 많습니다."}),n.jsx(e.p,{children:"서버는 요청에 응답하는 기술적 컴포넌트입니다. 일반적으로 리소스의 판매자입니다."})]}),`
`,n.jsxs(e.h2,{id:"클라이언트-역할",children:["클라이언트 역할",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#클라이언트-역할",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(e.p,{children:"클라이언트는 유료 리소스를 요청하는 엔티티입니다."}),`
`,n.jsx(e.p,{children:"클라이언트에는 다음이 포함될 수 있습니다:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"인간이 운영하는 애플리케이션"}),`
`,n.jsx(e.li,{children:"자율 AI 에이전트"}),`
`,n.jsx(e.li,{children:"사용자 또는 시스템을 대신하여 작동하는 프로그래밍 서비스"}),`
`]}),`
`,n.jsxs(e.h3,{id:"책임",children:["책임",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#책임",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"요청 시작"}),": 리소스 서버에 HTTP 요청을 보냅니다."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"결제 요구 사항 처리"}),": HTTP 상태 코드 ",n.jsx(e.code,{children:"402 Payment Required"})," 응답을 읽고 결제에 필요한 세부 정보를 추출합니다."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"결제 Payload 준비"}),": 제공된 결제 요구 사항을 사용하여 유효한 결제 Payload를 구성합니다."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"결제 Payload와 함께 요청 다시 제출"}),". ",n.jsx(e.code,{children:"X-PAYMENT"})," 서명된 결제 Payload가 포함된 헤더로 요청을 다시 시도합니다."]}),`
`]}),`
`,n.jsx(e.p,{children:`클라이언트는 암호화폐 지갑 외에 계정, 자격 증명 또는 세션 토큰을 관리할 필요가 없습니다.
모든 상호작용은 상태를 저장하지 않으며 표준 HTTP 요청을 통해 이루어집니다.`}),`
`,n.jsxs(e.h2,{id:"서버-역할",children:["서버 역할",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#서버-역할",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(e.p,{children:"서버는 서비스 이용에 대한 요금 지불을 요구하는 리소스 제공자입니다."}),`
`,n.jsx(e.p,{children:"서버에는 다음이 포함될 수 있습니다."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"API 서비스"}),`
`,n.jsx(e.li,{children:"콘텐츠 제공자"}),`
`,n.jsx(e.li,{children:"수익화가 필요한 HTTP 접근 가능 리소스"}),`
`]}),`
`,n.jsxs(e.h3,{id:"책임-1",children:["책임",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#책임-1",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"결제 요구 사항 정의"}),": 인증되지 않은 요청에는 HTTP를 통해 ",n.jsx(e.code,{children:"402 Payment Required"})," 코드로 응답하고 응답 본문(Body)에 필요한 모든 결제 세부 정보를 포함합니다."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"결제 페이로드 검증"}),": 로컬 또는 퍼실리테이터를 이용하여 수신 결제 페이로드를 검증합니다."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"트랜잭션 정산"}),": 검증이 성공적으로 완료되면 정산을 위해 결제를 제출합니다."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"리소스 제공"}),": 결제가 확인되면 요청한 리소스를 클라이언트에게 반환합니다."]}),`
`]}),`
`,n.jsx(e.p,{children:"서버는 클라이언트 ID를 관리하거나 세션 상태를 유지할 필요가 없습니다. 확인 및 결제는 단위 요청 별로 처리됩니다."}),`
`,n.jsxs(e.h2,{id:"작동-원리",children:["작동 원리",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#작동-원리",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(e.p,{children:["클라이언트와 서버 간의 전체 결제 흐름에 대한 자세한 설명은 ",n.jsx(e.a,{href:"https://docs.cdp.coinbase.com/x402/core-concepts/how-it-works",children:n.jsx(e.strong,{children:"x402 작동 방식"})}),"을 참조하세요."]}),`
`,n.jsxs(e.h2,{id:"요약",children:["요약",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#요약",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(e.p,{children:"x402 프로토콜에서:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"클라이언트"}),"는 리소스를 요청하고 서명된 결제 Payload를 제시합니다."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"서버"}),"는 결제 요구 사항을 정의하고, 거래를 검증하며, 결제가 성공적으로 완료되면 리소스를 제공합니다."]}),`
`]}),`
`,n.jsx(e.p,{children:"이러한 상호작용은 상태를 비저장(stateless)하고 HTTP 기반이며 인간 애플리케이션과 자동화된 AI 에이전트 모두와 호환됩니다."}),`
`,n.jsx(e.p,{children:"더 알아보기:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://docs.cdp.coinbase.com/x402/core-concepts/how-it-works",children:n.jsx(e.strong,{children:"x402 작동 방식"})})," - 전체 결제 흐름 보기"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://docs.cdp.coinbase.com/x402/core-concepts/facilitator",children:n.jsx(e.strong,{children:"퍼실리테이터"})})," - 서버가 지불을 확인하고 결제하는 방법"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://docs.cdp.coinbase.com/x402/core-concepts/http-402",children:n.jsx(e.strong,{children:"HTTP 402"})})," - 서버가 클라이언트에게 지불 요구 사항을 전달하는 방법"]}),`
`]})]})}function t(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{t as default,h as frontmatter};
