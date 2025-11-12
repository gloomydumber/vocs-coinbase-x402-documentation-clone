import{f as l,j as s}from"./index-DqJD2CIO.js";const a={title:"미니앱",description:"undefined"};function e(n){const i={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...l(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(i.header,{children:s.jsxs(i.h1,{id:"x402로-미니앱-빌드",children:["x402로 미니앱 빌드",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#x402로-미니앱-빌드",children:s.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsx(i.p,{children:`이 가이드에서는 공식 템플릿을 사용하여 x402 결제를 통합하는 미니앱을 구축하는 방법을 설명합니다.
이 템플릿은 지갑 통합, 결제 보호, 알림 기능이 미리 구성되어 있어 완벽한 시작점을 제공합니다.`}),`
`,s.jsxs(i.h2,{id:"미니앱이란-무엇인가요",children:["미니앱이란 무엇인가요?",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#미니앱이란-무엇인가요",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(i.p,{children:`미니앱은 TBA와 같은 Farcaster 클라이언트 내에서 실행되는 경량 애플리케이션입니다.
MiniKit 으로 구축되어 Farcaster의 소셜 그래프 및 지갑 기능을 활용하면서 네이티브 앱과 유사한 경험을 제공합니다.
x402를 통합하면 사용자가 앱을 나가거나 복잡한 결제 흐름을 관리할 필요 없이 미니앱에서 즉시 USDC 결제를 처리할 수 있습니다.`}),`
`,s.jsxs(i.h2,{id:"미니앱에-x402를-사용하는-이유는",children:["미니앱에 x402를 사용하는 이유는?",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#미니앱에-x402를-사용하는-이유는",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(i.p,{children:"x402는 다음과 같은 이유로 미니앱에 특히 적합합니다."}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"원활한 결제"})," : 사용자는 미니앱 환경을 벗어나지 않고도 결제할 수 있습니다."]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"계정 설정 없음"})," : 연결된 지갑과 직접 작동"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"즉각적인 수익 창출"})," : 빌더는 콘텐츠나 서비스를 직접 수익화할 수 있습니다."]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"간단한 통합"})," : 미들웨어 구성만으로 결제 보호"]}),`
`]}),`
`,s.jsxs(i.h2,{id:"필수-조건",children:["필수 조건",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#필수-조건",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(i.p,{children:"시작하기 전에 다음 사항을 확인하세요."}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsx(i.li,{children:"Node.js 18+ 및 pnpm v10 설치됨"}),`
`,s.jsxs(i.li,{children:["Coinbase ",s.jsx(i.a,{href:"https://portal.cdp.coinbase.com/",children:s.jsx(i.strong,{children:"개발자 플랫폼"})})," 계정 및 API 키(메인넷용)"]}),`
`,s.jsx(i.li,{children:"결제를 받을 지갑 주소"}),`
`]}),`
`,s.jsxs(i.h2,{id:"x402-템플릿을-사용한-빠른-시작",children:["x402 템플릿을 사용한 빠른 시작",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#x402-템플릿을-사용한-빠른-시작",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(i.p,{children:"x402 기반 미니앱을 빌드하는 가장 빠른 방법은 공식 템플릿을 사용하는 것입니다."}),`
`,s.jsx(s.Fragment,{children:s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Clone the x402 repository"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" clone"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://github.com/coinbase/x402.git"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"cd"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" x402/examples/typescript/fullstack/farcaster-miniapp"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Install dependencies"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"pnpm"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Build all packages (required for monorepo)"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"cd"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ../../"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"pnpm"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" build"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"cd"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" fullstack/farcaster-miniapp"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Copy environment variables"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cp"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" env.example"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" .env.local"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Configure your environment (see below)"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Then start the development server"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"pnpm"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" dev"})]})]})})}),`
`,s.jsxs(i.h2,{id:"템플릿-기능",children:["템플릿 기능",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#템플릿-기능",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(i.p,{children:"x402 미니앱 템플릿에는 다음이 포함됩니다."}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:["TypeScript를 사용한 ",s.jsx(i.strong,{children:"Next.js 앱 라우터"})]}),`
`,s.jsxs(i.li,{children:["지갑 연결을 위한 ",s.jsx(i.strong,{children:"OnchainKit 통합"})]}),`
`,s.jsxs(i.li,{children:["보호된 경로를 위한 ",s.jsx(i.strong,{children:"x402 결제 미들웨어"})]}),`
`,s.jsxs(i.li,{children:["미니앱 감지를 위한 ",s.jsx(i.strong,{children:"Farcaster Frame SDK"})]}),`
`,s.jsxs(i.li,{children:["Redis/Upstash를 이용한 ",s.jsx(i.strong,{children:"알림 시스템"})]}),`
`]}),`
`,s.jsxs(i.h2,{id:"프로젝트-구조",children:["프로젝트 구조",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#프로젝트-구조",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(s.Fragment,{children:s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsx(i.span,{className:"line",children:s.jsx(i.span,{children:"farcaster-miniapp/"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{children:"├── app/"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{children:"│   ├── .well-known/"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{children:"│   │   └── farcaster.json/    # Dynamic Frame configuration"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{children:"│   │       └── route.ts"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{children:"│   ├── api/"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{children:"│   │   ├── notify/            # Notification proxy endpoint"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{children:"│   │   ├── protected/         # x402-protected endpoint"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{children:"│   │   └── webhook/           # Frame webhook handler"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{children:"│   ├── page.tsx               # Main miniapp interface"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{children:"│   ├── layout.tsx             # Root layout with providers"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{children:"│   ├── providers.tsx          # MiniKit and wallet providers"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{children:"│   └── globals.css            # Global styles"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{children:"├── lib/"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{children:"│   └── notification-client.ts # Notification utilities"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{children:"├── middleware.ts              # x402 payment middleware"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{children:"└── .env.local                 # Environment configuration"})})]})})}),`
`,s.jsxs(i.h2,{id:"환경-구성",children:["환경 구성",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#환경-구성",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:[s.jsx(i.code,{children:".env.local"})," 구성을 포함하는 파일을 만듭니다 ."]}),`
`,s.jsxs(i.h3,{id:"x402-지불에-필요한-환경-변수",children:["x402 지불에 필요한 환경 변수",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#x402-지불에-필요한-환경-변수",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(s.Fragment,{children:s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Your wallet address to receive payments"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"RESOURCE_WALLET_ADDRESS"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"0xYourWalletAddress"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:'# Network: "base-sepolia" for testing, "base" for production'})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"NETWORK"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"base-sepolia"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# OnchainKit API key (get from https://portal.cdp.coinbase.com/products/onchainkit)"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"NEXT_PUBLIC_ONCHAINKIT_API_KEY"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"your_api_key_here"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"x402"}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Mini"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" App"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# For mainnet only (get from portal.cdp.coinbase.com)"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"CDP_API_KEY_ID"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"your_cdp_key_id"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"CDP_API_KEY_SECRET"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"your_cdp_key_secret"})]})]})})}),`
`,s.jsxs(i.h3,{id:"프레임-구성자동-생성",children:["프레임 구성(자동 생성)",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#프레임-구성자동-생성",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(i.p,{children:"다음 명령을 실행하여 프레임 구성을 생성합니다."}),`
`,s.jsx(s.Fragment,{children:s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(i.code,{children:s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npx"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" create-onchain"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --manifest"})]})})})}),`
`,s.jsx(i.p,{children:"이렇게 하면 다음에 필요한 환경 변수가 생성됩니다."}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsx(i.li,{children:"프레임 메타데이터 및 계정 연결"}),`
`,s.jsx(i.li,{children:"Redis/Upstash를 통한 알림 지원"}),`
`,s.jsx(i.li,{children:"미니 앱 감지 및 통합"}),`
`]}),`
`,s.jsxs(i.h2,{id:"템플릿-작동-방식",children:["템플릿 작동 방식",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#템플릿-작동-방식",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.h3,{id:"1-결제-미들웨어-설정",children:["1. 결제 미들웨어 설정",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-결제-미들웨어-설정",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:["이 ",s.jsx(i.code,{children:"middleware.ts"})," 파일은 x402를 구성하여 API 경로를 보호합니다."]}),`
`,s.jsx(s.Fragment,{children:s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { facilitator } "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "@coinbase/x402"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { paymentMiddleware } "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "x402-next"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" payTo"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" process.env."}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"RESOURCE_WALLET_ADDRESS"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" as"}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Address"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" network"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" process.env."}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"NETWORK"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ||"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "base-sepolia"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" middleware"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" paymentMiddleware"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  payTo,"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  {"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "/api/protected"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": {"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      price: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"$0.01"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      network,"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      config: {"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        description: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Protected route"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      },"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    },"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  },"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  facilitator"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" config"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  matcher: ["}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"/api/protected"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  runtime: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"nodejs"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})})]})})}),`
`,s.jsxs(i.h3,{id:"2-보호된-api-엔드포인트",children:["2. 보호된 API 엔드포인트",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-보호된-api-엔드포인트",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:["엔드포인트 는 ",s.jsx(i.code,{children:"/api/protected/route.ts"})," 자동으로 보호됩니다."]}),`
`,s.jsx(s.Fragment,{children:s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { NextResponse } "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "next/server"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" async"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" function"}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" GET"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"() {"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  // This only executes if payment is verified"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  return"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" NextResponse."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"json"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    success: "}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    message: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Protected action completed successfully"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    timestamp: "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"new"}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" Date"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"toISOString"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(),"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  });"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsxs(i.h3,{id:"3-프런트엔드-통합",children:["3. 프런트엔드 통합",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-프런트엔드-통합",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(i.p,{children:"메인 페이지는 지갑 연결과 보호된 API 호출을 보여줍니다."}),`
`,s.jsx(s.Fragment,{children:s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { wrapFetchWithPayment } "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "x402-fetch"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { getWalletClient } "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "wagmi/actions"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Get wallet client from wagmi"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" walletClient"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" getWalletClient"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(config, {"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  account: address,"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  chainId: chainId,"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  connector: connector,"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Wrap fetch with x402 payment handling"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" fetchWithPayment"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" wrapFetchWithPayment"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(fetch, walletClient);"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Call protected endpoint - payment is handled automatically"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" response"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" fetchWithPayment"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"/api/protected"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]})]})})}),`
`,s.jsxs(i.h3,{id:"4-미니앱-감지",children:["4. 미니앱 감지",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#4-미니앱-감지",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(i.p,{children:"템플릿은 Farcaster 내부에서 실행될 때 다음을 감지합니다."}),`
`,s.jsx(s.Fragment,{children:s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { sdk } "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "@farcaster/frame-sdk"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"useEffect"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(() "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" initMiniApp"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" async"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" () "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    await"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sdk.actions."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"ready"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" isInMiniApp"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sdk."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"isInMiniApp"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"    setIsInMiniApp"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(isInMiniApp);"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  };"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"  initMiniApp"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}, []);"})})]})})}),`
`,s.jsxs(i.h2,{id:"템플릿-사용자-정의",children:["템플릿 사용자 정의",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#템플릿-사용자-정의",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.h3,{id:"더-많은-보호-경로-추가",children:["더 많은 보호 경로 추가",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#더-많은-보호-경로-추가",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:["새로운 보호된 엔드포인트를 추가하기 위한 업데이트 ",s.jsx(i.code,{children:"middleware.ts"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" middleware"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" paymentMiddleware"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  payTo,"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  {"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "/api/protected"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": {"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      price: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"$0.01"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      network,"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    },"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "/api/premium-content"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": {"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      price: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"$1.00"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      network,"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      config: {"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        description: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Premium content access"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      },"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    },"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "/api/exclusive-feature"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": {"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      price: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"$5.00"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      network,"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      config: {"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        description: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Exclusive feature unlock"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      },"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    },"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  },"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  facilitator"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" config"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  matcher: ["}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"/api/protected"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"/api/premium-content"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"/api/exclusive-feature"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})})]})})}),`
`,s.jsxs(i.h3,{id:"알림-구현",children:["알림 구현",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#알림-구현",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(i.p,{children:"템플릿에는 Redis를 통한 알림 지원이 포함되어 있습니다."}),`
`,s.jsx(s.Fragment,{children:s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { sendFrameNotification } "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "@/lib/notification-client"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Send a notification after successful payment"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" sendFrameNotification"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  fid: userFid,"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  title: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Payment Successful!"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  body: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:`"You've unlocked premium content"`}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  notificationDetails: {"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    url: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"/premium"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    type: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"payment_success"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  },"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})})]})})}),`
`,s.jsxs(i.h3,{id:"ui-사용자-정의",children:["UI 사용자 정의",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ui-사용자-정의",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:["이 템플릿은 픽셀 테마의 Tailwind CSS를 사용합니다. 다음을 수정하여 ",s.jsx(i.code,{children:"theme.css"})," 사용자 정의하세요."]}),`
`,s.jsx(s.Fragment,{children:s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"/* Custom theme variables */"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:":root"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  --ockThemePrimary"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"#4f46e5"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  --ockThemeSecondary"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"#7c3aed"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  --ockConnectWalletBackground"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"#ffffff"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  /* ... more theme variables ... */"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsxs(i.h2,{id:"미니앱-테스트",children:["미니앱 테스트",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#미니앱-테스트",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.h3,{id:"로컬에서-개발",children:["로컬에서 개발",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#로컬에서-개발",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.ol,{children:[`
`,s.jsx(i.li,{children:"개발 서버를 시작하세요:"}),`
`]}),`
`,s.jsx(s.Fragment,{children:s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(i.code,{children:s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"pnpm"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" dev"})]})})})}),`
`,s.jsxs(i.ol,{start:"2",children:[`
`,s.jsxs(i.li,{children:["브라우저에서 ",s.jsx(i.a,{href:"http://localhost:3000",children:s.jsx(i.strong,{children:"http://localhost:3000"})}),"을 엽니다 ."]}),`
`,s.jsx(i.li,{children:"지갑 연결 및 보호된 API 호출 테스트"}),`
`]}),`
`,s.jsxs(i.h3,{id:"farcaster에서-테스트",children:["Farcaster에서 테스트",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#farcaster에서-테스트",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.ol,{children:[`
`,s.jsx(i.li,{children:"ngrok을 사용하여 로컬 서버를 노출하세요."}),`
`]}),`
`,s.jsx(s.Fragment,{children:s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(i.code,{children:s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"ngrok"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" http"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 3000"})]})})})}),`
`,s.jsxs(i.ol,{start:"2",children:[`
`,s.jsxs(i.li,{children:["ngrok URL로 ",s.jsx(i.code,{children:"NEXT_PUBLIC_URL"})," 업데이트 하세요 ",s.jsx(i.code,{children:".env.local"})]}),`
`,s.jsx(i.li,{children:"Warpcast에서 테스트하기 위해 프레임 URL을 캐스팅하세요"}),`
`,s.jsx(i.li,{children:'미니앱에는 "앱 사용" 버튼이 표시됩니다.'}),`
`]}),`
`,s.jsxs(i.h2,{id:"배포",children:["배포",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#배포",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.h3,{id:"프로덕션-체크리스트",children:["프로덕션 체크리스트",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#프로덕션-체크리스트",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.code,{children:"NETWORK=base"})," 메인넷을 위해 설정됨"]}),`
`,s.jsx(i.li,{children:"메인넷 결제를 위한 CDP API 키 구성"}),`
`,s.jsxs(i.li,{children:[s.jsx(i.code,{children:"RESOURCE_WALLET_ADDRESS"})," 프로덕션 지갑을 업데이트하세요"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.code,{children:"NEXT_PUBLIC_URL"})," 도메인에 맞게 적절하게 설정하세요"]}),`
`,s.jsx(i.li,{children:"테스트넷에서 먼저 지불 흐름을 철저히 테스트합니다."}),`
`,s.jsx(i.li,{children:"프로덕션 알림을 위해 Redis 구성"}),`
`]}),`
`,s.jsxs(i.h2,{id:"모범-사례",children:["모범 사례",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#모범-사례",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.h3,{id:"사용자-경험",children:["사용자 경험",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#사용자-경험",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"명확한 가격"})," : 결제를 요구하기 전에 항상 가격을 표시합니다."]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"로딩 상태"})," : 결제 처리 중 진행 상황 표시"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"오류 처리"})," : 명확한 오류 메시지와 복구 옵션 제공"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"성공 피드백*"})," : 성공적인 결제를 즉시 확인하세요"]}),`
`]}),`
`,s.jsxs(i.h3,{id:"보안",children:["보안",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#보안",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"환경 변수"})," : 민감한 키를 절대 커밋하지 마세요"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"서버 검증"})," : 항상 서버 측에서 결제를 검증하세요"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"네트워크 확인"})," : 사용자가 올바른 네트워크에 있는지 확인하세요"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"속도 제한"})," : 보호된 엔드포인트에 속도 제한을 추가하는 것을 고려하세요."]}),`
`]}),`
`,s.jsxs(i.h2,{id:"일반적인-문제-및-해결-방법",children:["일반적인 문제 및 해결 방법",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#일반적인-문제-및-해결-방법",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.h3,{id:"결제가-처리되지-않음",children:["결제가 처리되지 않음",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#결제가-처리되지-않음",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(s.Fragment,{children:s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Ensure wallet client is properly configured"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"if"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"!"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"walletClient) {"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"error"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Wallet client not available"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  return"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Check network matches configuration"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"if"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (chainId "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"!=="}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" expectedChainId) {"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"error"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Wrong network"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  return"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsxs(i.h3,{id:"미니앱이-감지되지-않음",children:["미니앱이 감지되지 않음",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#미니앱이-감지되지-않음",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(s.Fragment,{children:s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Ensure Frame SDK is initialized"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"try"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  await"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sdk.actions."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"ready"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"} "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"catch"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (error) {"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Not in miniapp context"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsxs(i.h3,{id:"402-오류가-처리되지-않음",children:["402 오류가 처리되지 않음",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#402-오류가-처리되지-않음",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(s.Fragment,{children:s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Verify middleware matcher includes your route"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" config"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  matcher: ["}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"/api/your-route"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"], "}),s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Add your route here"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})})]})})}),`
`,s.jsxs(i.h2,{id:"다음-단계",children:["다음 단계",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#다음-단계",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.ol,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"템플릿 탐색"})," : 예제 저장소 의 모든 파일 검토"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"사용 사례에 맞게 사용자 정의"})," : 특정 요구 사항에 맞게 템플릿을 수정하세요."]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"기능 추가"})," : 결제 기반 위에 구축"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"배포 및 공유"})," : Farcaster 커뮤니티에 미니앱을 출시하세요"]}),`
`]}),`
`,s.jsxs(i.h2,{id:"지원",children:["지원",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#지원",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsx(i.li,{children:s.jsx(i.a,{href:"https://docs.cdp.coinbase.com/x402",children:s.jsx(i.strong,{children:"x402 문서"})})}),`
`,s.jsx(i.li,{children:s.jsx(i.a,{href:"https://onchainkit.xyz/",children:s.jsx(i.strong,{children:"OnchainKit 문서"})})}),`
`,s.jsx(i.li,{children:s.jsx(i.a,{href:"https://miniapps.farcaster.xyz/",children:s.jsx(i.strong,{children:"Farcaster Mini 앱 가이드"})})}),`
`,s.jsx(i.li,{children:s.jsx(i.a,{href:"https://discord.gg/cdp",children:s.jsx(i.strong,{children:"CDP Discord 커뮤니티"})})}),`
`]}),`
`,s.jsx(i.p,{children:"지금 당장 x402로 수익 창출이 가능한 Farcaster 미니앱을 만들어 보세요!"})]})}function c(n={}){const{wrapper:i}={...l(),...n.components};return i?s.jsx(i,{...n,children:s.jsx(e,{...n})}):e(n)}export{c as default,a as frontmatter};
