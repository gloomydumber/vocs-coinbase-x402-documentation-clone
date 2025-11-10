import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PowerOutlinedIcon from '@mui/icons-material/PowerOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';

interface VocsCardProps {
  href?: string;
  children: React.ReactNode;
};

function VocsCard({ href, children }: VocsCardProps) {
  return (
    <Card
      variant="outlined"
      component='a'
      href={href}
      sx={{
        flex: 1,
        background: 'var(--vocs-color_background)',
        border: 1,
        borderColor: 'var(--vocs-color_border2)',
        borderRadius: 8,
        '&:hover': { borderColor: 'var(--vocs-color_borderAccent)' }
      }}
    >
      {children}
    </Card>
  )
}

interface VocsCardContentProps {
  Icon: React.ElementType;
  title: string;
  bullets: string[];
};

function VocsCardContent({
  Icon,
  title,
  bullets,
}: VocsCardContentProps) {
  return (
    <React.Fragment>
      <CardContent sx={{ background: 'var(--vocs-color_background)' }}>
        <Icon sx={{ color: 'var(--vocs-color_textAccent)', fontSize: 34, m: 1 }} />
        <Typography variant="h2" component="div" sx={{ color: 'var(--vocs-color_text)', fontSize: 20, m: 0.5 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'var(--vocs-color_text3)', m: 1, fontSize: 16 }}>
          {bullets.map((b, i) => (
            <React.Fragment key={i}>
              • {b}
              <br />
            </React.Fragment>
          ))}
        </Typography>
      </CardContent>
    </React.Fragment>)
}

export default function FacillitatorModelCards() {
  return (
    <Box sx={{ flexGrow: 1, background: 'var(--vocs-color_background)' }}>
      <Grid container spacing={2} columns={{ xs: 6, md: 12 }} alignItems="stretch">
        <Grid size={6} sx={{ display: 'flex' }}>
          <VocsCard
            href='#cdp-호스팅-권장'
          >
            <VocsCardContent
              Icon={PowerOutlinedIcon}
              title="CDP-hosted (recommended)"
              bullets={[
                'Production deployments',
                'Compliance/KYT requirements',
                'x402 Bazaar auto-discovery',
                'Optional SLAs',
              ]}
            />
          </VocsCard>
        </Grid>
        <Grid size={6} sx={{ display: 'flex' }}>
          <VocsCard
            href='#커뮤니티-유지-촉진자'
          >
            <VocsCardContent
              Icon={ChatBubbleOutlineOutlinedIcon}
              title="Community-maintained"
              bullets={[
                'Rapid prototyping',
                'SDK examples/tests',
                'No API keys required',
              ]}
            />
          </VocsCard>
        </Grid>
        <Grid size={6} sx={{ display: 'flex' }}>
          <VocsCard
            href='#셀프-호스팅'
          >
            <VocsCardContent
              Icon={StorageRoundedIcon}
              title="Self-hosted"
              bullets={[
                'Full control/private infrastructure',
                'Custom networks/policies',
                'Non-listed chains',
              ]}
            />
          </VocsCard>
        </Grid>
      </Grid>
    </Box >
  );
}