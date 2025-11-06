import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Docs',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Example',
      link: '/example',
    },
  ],
  sponsors: [ 
    { 
      name: 'Collaborator', 
      height: 120, 
      items: [ 
        [ 
          { 
            name: 'Paradigm', 
            link: 'https://paradigm.xyz', 
            image: 
              'https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/paradigm-light.svg', 
          }, 
        ], 
      ], 
    }, 
    { 
      name: 'Large Enterprise', 
      height: 60, 
      items: [ 
        [ 
          { 
            name: 'WalletConnect', 
            link: 'https://walletconnect.com', 
            image: 
              'https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/walletconnect-light.svg', 
          }, 
          { 
            name: 'Stripe', 
            link: 'https://www.stripe.com', 
            image: 
              'https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/stripe-light.svg', 
          }, 
        ], 
      ], 
    }, 
  ],
})
