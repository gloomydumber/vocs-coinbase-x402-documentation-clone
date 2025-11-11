import Box from '@mui/material/Box';

interface TransparentBoxProps {
  width: string;
  height: string;
  children: React.ReactNode;
};

export default function TransparentBox({ width, height, children }: TransparentBoxProps) {
  return <Box
    sx={{
      width,
      height,
      background: 'transparent',
      backdropFilter: 'blur(40px)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'rgb(31 41 55 / .3)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: '24px',
      paddingBottom: '3rem',
      paddingLeft: '2rem',
      paddingRight: '2rem',
    }}
  >
    {children}
  </Box>
}