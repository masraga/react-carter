import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/roboto/500.css';
import './index.css';

const theme = createTheme({
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    button: {
      fontWeight: 600,
      fontFamily: "'Roboto', sans-serif",
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
