import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Layout/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);