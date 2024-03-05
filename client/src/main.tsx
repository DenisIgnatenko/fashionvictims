import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import { store } from './redux/store';
import theme from './utils/theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>,
);
