import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Coinbase x402',
  logoUrl: '/x402-logo.png',
  iconUrl: '/x402-icon-black.png',
  theme: {
    colorScheme: 'dark'
  },
  sidebar: [
    {
      text: '개요',
      link: '/overview',
    },
    {
      text: '빠른 시작',
      collapsed: true,
      items: [
        {
          text: '구매자를 위한 빠른 시작',
          link: '/quick-start/quickstart-for-buyers',
        },
        {
          text: '판매자를 위한 빠른 시작',
          link: '/quick-start/quickstart-for-sellers',
        }
      ],
    },
    {
      text: '핵심 개념',
      collapsed: true,
      items: [
        {
          text: 'x402 작동 방식',
          link: '/core-concepts/how-x402-works',
        },
        {
          text: 'HTTP 402',
          link: '/core-concepts/http-x402',
        },
        {
          text: '클라이언트 / 서버 흐름',
          link: '/core-concepts/client-server-flow',
        },
        {
          text: '퍼실리테이터',
          link: '/core-concepts/facilitator',
        },
        {
          text: '월렛',
          link: '/core-concepts/wallet',
        },
        {
          text: 'Bazaar (Discovery Layer)',
          link: '/core-concepts/bazaar-discovery-layer',
        },
      ],
    },
    {
      text: '네트워크 & 토큰 지원',
      link: '/network-and-token-support',
    },
    {
      text: '미니앱',
      link: '/miniapps',
    },
    {
      text: 'x402 MCP 서버',
      link: '/mcp-server-with-x402',
    },
    {
      text: '지원',
      collapsed: true,
      items: [
        {
          text: 'FAQ',
          link: '/support/faq',
        },
        {
          text: 'Github',
          link: 'https://github.com/coinbase/x402',
        },
        {
          text: 'Telegram Chat',
          link: 'https://t.me/+N3-OAnyidThjZmIx',
        },
      ],
    },
  ],
})
