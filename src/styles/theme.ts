import { createTheme } from '@mui/material/styles';

import { MuiCheckbox } from './components/checkbox';
import { MuiPaper } from './components/paper';
import { MuiTextField } from './components/text-field';

const theme = createTheme({
  typography: {
    allVariants: {
      fontWeight: 100,
    },
    overline: {
      fontWeight: 100,
    },
  },
  components: {
    MuiCheckbox,
    MuiPaper,
    MuiTextField,
  },
});

export default theme;
