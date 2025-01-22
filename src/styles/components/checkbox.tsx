import CheckIcon from '@mui/icons-material/Check';
import type { Components } from '@mui/material/styles';

export const MuiCheckbox = {
  defaultProps: {
    checkedIcon: <CheckIcon />,
  },
  styleOverrides: {
    root: {
      padding: 0,
      margin: '9px',
      '& .MuiSvgIcon-root': {
        borderRadius: '50%',
        border: '1px solid #e6e6e6',
        color: 'transparent',
      },
      '&.Mui-checked .MuiSvgIcon-root': {
        borderColor: '#79c0b09e',
        color: '#78bfaf',
      },
    },
  },
} satisfies Components['MuiCheckbox'];
