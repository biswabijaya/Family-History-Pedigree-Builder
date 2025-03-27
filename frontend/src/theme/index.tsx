import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#2065D1' },
    secondary: { main: '#3366FF' },
  },
  shape: { borderRadius: 8 },
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
