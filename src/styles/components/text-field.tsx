import type { Components } from '@mui/material/styles';

export const MuiTextField = {
  styleOverrides: {
    root: {
      padding: '8px',
      backgroundColor: 'var(--input-color)',
      '& .MuiInputBase-root::before': {
        display: 'none',
      },
      '& .MuiInputBase-root::after': {
        display: 'none',
      },
      '& .MuiInputBase-input::placeholder': {
        fontStyle: 'italic',
        color: '#9e9e9e',
      },
    },
  },
} satisfies Components['MuiTextField'];
