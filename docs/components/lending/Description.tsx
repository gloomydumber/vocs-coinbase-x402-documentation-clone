import * as React from 'react';
import Box from '@mui/material/Box';

interface DescriptionProps {
  children: React.ReactNode;
}

export default function Description({ children }: DescriptionProps) {
  return <Box
    sx={{
      width: '100%',
      padding: '2rem',
      fontSize: '1.25rem',
      fontWeight: '500',
    }}>
    {children}
  </Box>
}
