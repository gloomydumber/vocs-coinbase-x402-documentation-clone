import TransparentBox from './lending/TransparentBox';
import Description from './lending/Description';
import LendingCard from './lending/LendingCard';
import Grid from '@mui/material/Grid';
import CheckIcon from '@mui/icons-material/Check';

export default function BestWayDigitalPayments() {
  return <TransparentBox width='100%' height='auto' >
    <Description>
      Built around the <a style={{ color: 'var(--vocs-color_textAccent)' }} href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402'>HTTP 402</a> status
      code, x402 enables users to pay for resources via API without registration, emails, OAuth, or complex signatures.
    </Description>
    <Grid container spacing={4}>
      <Grid size={6}>
        <LendingCard
          title='No fees'
          description='x402 as a protocol has 0 fees for either the customer or the merchant.'
          Icon={CheckIcon}
        />
      </Grid>
      <Grid size={6}>
        <LendingCard
          title='Instant settlement'
          description='Accept payments at the speed of the blockchain. Money in your wallet in 2 seconds, not T+2.'
          Icon={CheckIcon}
        />
      </Grid>
      <Grid size={6}>
        <LendingCard
          title='Blockchain Agnostic'
          description='x402 is not tied to any specific blockchain or token, its a neutral standard open to integration by all.'
          Icon={CheckIcon}
        />
      </Grid>
      <Grid size={6}>
        <LendingCard
          title='Frictionless'
          description={`As little as 1 line of middleware code or configuration in your existing web
            server stack and you can start accepting payments. Customers and agents aren't required to create an account or provide any personal information.`}
          Icon={CheckIcon}
        />
      </Grid>
      <Grid size={6}>
        <LendingCard
          title='Security & trust via an open standard'
          description={`Anyone can implement or extend x402. It's not tied to any centralized provider, and encourages broad community participation.`}
          Icon={CheckIcon}
        />
      </Grid>
      <Grid size={6}>
        <LendingCard
          title='No fees'
          description='Activates the dormant 402 HTTP status code and works with any HTTP stack. It works simply via headers and status codes on your existing HTTP server.'
          Icon={CheckIcon}
        />
      </Grid>
    </Grid>
  </TransparentBox >
}