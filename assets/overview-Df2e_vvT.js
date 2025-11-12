import{f as s,j as n}from"./index-iS1Q-4WK.js";const l={title:"개요",description:"undefined"};function r(i){const e={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.header,{children:n.jsxs(e.h1,{id:"x402에-오신-것을-환영합니다",children:["x402에 오신 것을 환영합니다",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#x402에-오신-것을-환영합니다",children:n.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,n.jsxs(e.h2,{id:"개요",children:["개요",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#개요",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(e.p,{children:`x402는 Coinbase에 의해 개방된 새로운 개방 결제 프로토콜로서, HTTP를 통해 자동화
되고 즉각적인 스테이블 코인 결제를 가능하게 합니다.`}),`
`,n.jsxs(e.p,{children:[`기존에 사용하지 않던
`,n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/402",children:n.jsx(e.strong,{children:"HTTP 402 Payment Required"})}),`
라는 HTTP 상태 코드를 이용해서, x402가 서비스를 API와 디지털 콘텐츠를 체인상에서
수익화할 수 있도록 하여, 인간과 기계 모두의 클라이언트가 계정, 세션 또는 복잡한
인증 없이 프로그래밍 방식으로 엑세스 비용을 지불할 수 있도록 합니다.`]}),`
`,n.jsxs(e.h2,{id:"x402는-누구를-위한-것인가요",children:["x402는 누구를 위한 것인가요?",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#x402는-누구를-위한-것인가요",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"판매자:"}),` API나 콘텐츠를 수익화하려는 서비스 제공자. x402를 사용하면 최소한의
설정만으로 클라이언트로부터 직접 프로그래밍 방식으로 결제할 수 있습니다.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"구매자:"}),` 계정이나 수동 결제 흐름 없이 유료 서비스에 엑세스하려는 인간 개발
자와 AI 에이전트.`]}),`
`]}),`
`,n.jsx(e.p,{children:`판매자와 구매자는 모두 HTTP 요청을 통해 직접 상호 작용하며, 결제는 프로토콜을 통
해 투명하게 처리됩니다.`}),`
`,n.jsxs(e.h2,{id:"사용-사례",children:["사용 사례",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#사용-사례",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(e.p,{children:"x402는 다음을 포함한 다양한 사용 사례를 지원합니다."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"요청당 지불되는 API 서비스"}),`
`,n.jsx(e.li,{children:"API 액세스 비용을 자율적으로 지불하는 AI 에이전트"}),`
`,n.jsx(e.li,{children:"디지털 콘텐츠에 대한 페이월"}),`
`,n.jsx(e.li,{children:"마이크로트랜잭션을 통해 수익화되는 마이크로서비스 및 툴링"}),`
`,n.jsx(e.li,{children:"API 기능을 집계하고 재판매하는 프록시 서비스"}),`
`]}),`
`,n.jsxs(e.h2,{id:"작동-원리",children:["작동 원리",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#작동-원리",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(e.p,{children:[`x402는 프로그래매틱 결제를 통해 간단한 요청-응답 흐름을 사용합니다. 자세한 내용
은 `,n.jsx(e.a,{href:"https://naver.com",children:n.jsx(e.strong,{children:"x402 작동 방식"})}),"을 참조하세요."]}),`
`,n.jsx(e.p,{children:"높은 수준에서:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`구매자는 서버에 리소스를 요청합니다(예: API 호출,
`,n.jsx(e.a,{href:"",children:n.jsx(e.strong,{children:"클라이언트/서버 역할"})})," 참조)"]}),`
`,n.jsxs(e.li,{children:["결제가 필요한 경우 서버는 결제 지침을 포함하여 ",n.jsx(e.a,{href:"",children:n.jsx(e.strong,{children:"402 결제 필요"})}),`를 응답합
니다.`]}),`
`,n.jsx(e.li,{children:"구매자는 결제 페이로드를 구성하여 전송합니다."}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"",children:n.jsx(e.strong,{children:"서버는 중개자"})}),`를 통해 결제를 검증하고 결제합니다. 유효한 경우, 서버는
요청된 리소스를 반환합니다.`]}),`
`]}),`
`,n.jsxs(e.h2,{id:"기존-제한을-넘어서",children:["기존 제한을 넘어서",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#기존-제한을-넘어서",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(e.p,{children:`x402는 현대 인터넷 경제에 맞춰 설계되었으며 기존 시스템의 주요 한계를 해결합니다
.`}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"수수료와 마찰을 줄이세요:"}),` 중개자, 높은 수수료 또는 수동 설정 없이 체인상에
서 직접 결제하세요.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"소액 결제 및 사용량 기반 청구:"}),` 간단하고 프로그래밍 가능한 사용량 기반 결제
방식으로 통화 또는 기능당 요금을 청구합니다.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"기계 간 거래:"}),` AI 에이전트가 키나 인간의 입력 없이 자율적으로 결제하고 서비
스에 액세스할 수 있도록 합니다.`]}),`
`]}),`
`,n.jsxs(e.h2,{id:"인프라를-오프로드하세요",children:["인프라를 오프로드하세요",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#인프라를-오프로드하세요",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(e.p,{children:["x402 ",n.jsx(e.a,{href:"",children:n.jsx(e.strong,{children:"Facilitator"})}),`는 판매자가 자체 블록체인 인프라를 유지할 필요가 없도록
지불 검증 및 정산을 처리합니다.`]}),`
`,n.jsx(e.p,{children:`Coinbase 개발자 플랫폼(CDP)은 Coinbase가 호스팅하는 중개 서비스를 제공하며, Base
네트워크에서 수수료 없이 USDC 결제를 처리하여 구매자와 판매자 모두에게 간소화되
고 예측 가능한 경험을 제공합니다.`}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Base 네트워크에서 수수료 없는 USDC 지불"}),`
`,n.jsx(e.li,{children:"거래의 빠른 온체인 결제"}),`
`,n.jsx(e.li,{children:"판매자가 결제 수락을 시작할 수 있도록 간소화된 설정"}),`
`]}),`
`,n.jsxs(e.h2,{id:"촉진자-로드맵",children:["촉진자 로드맵",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#촉진자-로드맵",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(e.p,{children:`CDP의 x402 퍼실리테이터는 특정 공급업체에 종속되지 않는 개방형 표준 기반의 퍼실
리테이터로 설계되었습니다. 향후에는 다음 퍼실리테이터가 포함됩니다.`}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"구매자(인간 및 에이전트)가 사용 가능한 서비스를 찾을 수 있는 검색 계층"}),`
`,n.jsx(e.li,{children:"추가 결제 흐름 지원(예: 완료된 작업에 대한 지불, 신용 기반 청구 등)"}),`
`,n.jsx(e.li,{children:"판매자가 KYC 또는 지리적 제한을 시행하기 위한 선택적 증명"}),`
`,n.jsx(e.li,{children:"추가 자산 및 네트워킹 지원"}),`
`]}),`
`,n.jsx(e.p,{children:`목표는 프로그래밍 방식의 상거래를 접근 가능하고 허가 없이, 개발자 친화적으로 만
드는 것입니다.`}),`
`,n.jsxs(e.h2,{id:"다음에-무엇을-읽을까요",children:["다음에 무엇을 읽을까요?",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#다음에-무엇을-읽을까요",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"",children:n.jsx(e.strong,{children:"판매자를 위한 빠른 시작"})}),` : 클라이언트로부터 결제를 수락하여 x402를 시작
하세요.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"",children:n.jsx(e.strong,{children:"구매자를 위한 빠른 시작"})})," : 서비스 비용을 지불하여 x402를 시작하세요."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"",children:n.jsx(e.strong,{children:"네트워크 지원"})})," : 이용 가능한 지원자와 지원 네트워크를 확인하세요."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"",children:n.jsx(e.strong,{children:"x402 작동 원리"})})," : 전체 결제 흐름을 이해하세요."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"",children:n.jsx(e.strong,{children:"Discord 커뮤니티에 가입"})}),"하여 도움을 받고 최신 개발 사항을 파악하세요/"]}),`
`]})]})}function h(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{h as default,l as frontmatter};
