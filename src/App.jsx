import React, { useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import getTheme from './themes/applicationTheme';
import AppRouter from './router/AppRouter';

const App = () => {
  const themeMode = useSelector((state) => state.ui.themeMode);

  const theme = useMemo(() => getTheme(themeMode), [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
