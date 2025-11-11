import TransparentBox from './lending/TransparentBox';
import Description from './lending/Description';
import LendingCard from './lending/LendingCard';
import Grid from '@mui/material/Grid';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';


export default function NextGenDigitalCommerce() {
  return <TransparentBox width='100%' height='auto' >
    <Description>
      x402 unlocks new monetization models, offering developers and content
      creators a frictionless way to earn revenue from small transactions without forcing subscriptions or showing ads.
    </Description>
    <Grid container spacing={2}>
      <Grid size={4}>
        <LendingCard
          title='AI Agents'
          description='Agents can use the x402 Protocol to pay for API requests in real-time.'
          Icon={ElectricBoltIcon}
        />
      </Grid>
      <Grid size={4}>
        <LendingCard
          title='Cloud Storage Providers'
          description='Using x402, customers can easily access storage services without account creation.'
          Icon={CloudOutlinedIcon}
        />
      </Grid>
      <Grid size={4}>
        <LendingCard
          title='Content Creators'
          description='x402 unlocks instant transactions, enabling true micropayments for content.'
          Icon={MusicNoteOutlinedIcon}
        />
      </Grid>
    </Grid>
  </TransparentBox >
}