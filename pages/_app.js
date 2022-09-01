import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import '../styles/globals.css';

const colors = {
  apostar: {
    black: '#000000',
    red50: '#8f1414',
    red100: '#e50e0e',
    red150: '#f3450f',
    white: '#ffffff',
    gray: '#EDEEF7',
    purple: '#7868E6',
    purple50: '#B8B5FF',
    turquoise: '#E4FBFF',
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
