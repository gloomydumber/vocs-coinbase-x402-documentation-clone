import Box from '@mui/material/Box'

interface AnchorProps {
  href: string;
  children: React.ReactNode;
}

function Anchor({ href, children }: AnchorProps) {
  return (
    <a href={href} style={{ margin: "0 0.25rem", color: "var(--vocs-color_textAccent)" }}>
      {children}
    </a>
  );
}

export default function Footer() {
  return <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'var(--vocs-color_text4)',
    fontSize: '0.8em',
    paddingTop: '5rem',
  }}>
    <Box><img src='./x402-button-large.webp' /></Box>
    <Box sx={{
      paddingTop: '5rem',
    }}>
      By using this site, you agree to be bound by the
      <Anchor href='https://www.coinbase.com/legal/developer-platform/terms-of-service'>CDP Terms of Service</Anchor>
      and
      <Anchor href='https://www.coinbase.com/legal/privacy'>Global Privacy Policy</Anchor>.
    </Box>
  </Box>
}