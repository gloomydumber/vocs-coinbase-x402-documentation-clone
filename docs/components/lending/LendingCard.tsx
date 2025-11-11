import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface LendingCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
}

export default function LendingCard({ title, description, Icon }: LendingCardProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        color: 'var(--vocs-color_text)',
        gap: '.75em',
      }}
    >
      <Box>
        <Icon sx={{ color: 'var(--vocs-color_textAccent)' }} />
      </Box>
      <Box>
        <Typography variant='h4' sx={{ fontSize: '1rem', fontWeight: '800' }}>{title}</Typography>
        <Typography sx={{ color: 'var(--vocs-color_text4)' }}>
          {description}
        </Typography>
      </Box>
    </Box >
  )
}