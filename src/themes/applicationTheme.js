import { createTheme } from '@mui/material/styles';
import lightPalette from './lightPalette';
import darkPalette from './darkPalette';

const getTheme = (mode = 'light') => {
  const basePalette = mode === 'dark' ? darkPalette : lightPalette;

  return createTheme({
    palette: {
      ...basePalette,
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
    },
  });
};

export default getTheme;
