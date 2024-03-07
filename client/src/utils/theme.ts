import { extendTheme } from '@chakra-ui/react';
import '@fontsource/open-sans';
import '@fontsource/montserrat';
import buttonStyles from './buttonStyles';
import linkStyles from './linkStyles';
import scrollLinkStyles from './scrollLinkStyles';
import tabsStyles from './tabsStyles';

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
    simpleText: {
      color: '#425056',
      fontFamily: 'Montserrat',
      fontSize: '18px',
      fontWeight: '400',
      fontStyle: 'normal',
      lineHeight: '26px',
    },
    heroH3heading: {
      color: '#E293B6',
      fontFamily: 'Montserrat',
      fontSize: '28px',
      fontStyle: 'italic',
      fontWeight: '500',
      lineHeight: '24px' /* 85.714% */,
    },
    titleHeading: {
      color: '#242424',
      fontFamily: 'Montserrat',
      fontSize: '40px',
      fontStyle: 'italic',
      fontWeight: '400',
      lineHeight: '54px',
    },
    smallTitleHeading: {
      color: '#242424',
      fontFamily: 'Montserrat',
      fontSize: '25px',
      fontStyle: 'italic',
      fontWeight: '400',
      lineHeight: '34px',
    },
    smallMainHeading: {
      fontSize: '4xl',
      color: '#FFF',
      fontFamily: 'Montserrat',
      fontStyle: 'italic',
      fontWeight: '500',
      lineHeight: 'normal',
    },
  },

  components: {
    Link: {
      ...linkStyles,
    },
    Button: {
      ...buttonStyles,
    },
    ScrollLink: {
      ...scrollLinkStyles,
    },
    Tabs: {
      ...tabsStyles,
    },
  },
});

export default theme;
