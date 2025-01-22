import type { Components } from '@mui/material/styles';

export const MuiButton = {
  styleOverrides: {
    root: {
      textTransform: 'none',
      minWidth: '30px',
      maxWidth: 'max-content',
    },
  },
} satisfies Components['MuiButton'];
