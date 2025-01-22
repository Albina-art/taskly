import { createTheme } from '@mui/material/styles';

import { MuiButton } from './components/button';
import { MuiCheckbox } from './components/checkbox';
import { MuiPaper } from './components/paper';
import { MuiTextField } from './components/text-field';

const theme = createTheme({
  breakpoints: { values: { xs: 0, sm: 500, md: 900, lg: 1200, xl: 1440 } },
  typography: {
    allVariants: {
      fontWeight: 100,
    },
  },
  components: {
    MuiCheckbox,
    MuiPaper,
    MuiTextField,
    MuiButton,
  },
});

export default theme;
