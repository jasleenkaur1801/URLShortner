import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import App from './App';
import './index.css';

const theme = createTheme({
  palette: {
    mode: 'light',          // start in light mode
    primary: { main: '#1976d2' },
  },
});

const container = document.getElementById('root');
if (!container) throw new Error('No root element found');

const root = ReactDOM.createRoot(container);
console.log('🌱 Bootstrapping React…');
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
