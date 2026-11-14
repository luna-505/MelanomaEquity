import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <HashRouter>
      <Flex direction="column" minHeight="100vh">
        <Header />
        <App />
        <Footer />
      </Flex>
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>
);