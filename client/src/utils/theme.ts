import { extendTheme } from '@chakra-ui/react';
import '@fontsource/open-sans';
import '@fontsource/montserrat';
import linkStyles from './linkStyles';

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: '#FFF0F7',
      },
      h1: {
        fontSize: '3xl',
      },
    },
  },
  components: {
    Link: {
      ...linkStyles,
    },
  },
});

export default theme;
