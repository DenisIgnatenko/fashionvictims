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
    },
  },
  textStyles: {
    customHeading: {
      fontSize: '7xl',
      color: '#FFF',
      fontFamily: 'Montserrat',
      fontStyle: 'italic',
      fontWeight: '500',
      lineHeight: 'normal',
    },
    heroSimpleText: {
      fontSize: 'lg',
      color: '#FFF',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '24px',
    },
    heroH3heading: {
      color: '#E293B6',
      fontFamily: 'Montserrat',
      fontSize: '28px',
      fontStyle: 'italic',
      fontWeight: '500',
      lineHeight: '24px' /* 85.714% */,
    },
  },
  components: {
    Link: {
      ...linkStyles,
    },
  },
});

export default theme;
