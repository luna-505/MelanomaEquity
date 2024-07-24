import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// Define your custom theme
const customTheme = extendTheme({
  colors: {
    darkblue: '#125E8A',
    lightblue: '#48A9A6',
    
    darkorange: '#FF914D', 
    lightorange: '#FFBD59', 
  },
  // Add other customizations here
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <Header />
        <App />
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);