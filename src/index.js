import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';

// Define your custom theme
// const customTheme = extendTheme({
//   styles: {
//     global: {
//       html: {
//         height: '100%',
//       },
//     },
//   },
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
      <Flex direction="column" minHeight="100vh">
        <Header />
        <App />
        <Footer />
      </Flex>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);