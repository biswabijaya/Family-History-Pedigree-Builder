import React from 'react';
import { CssBaseline } from '@mui/material';
import ThemeProvider from '../theme'
import Router from '../routes';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};

export default App;
