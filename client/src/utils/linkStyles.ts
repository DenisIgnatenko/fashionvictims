const linkStyles = {
  baseStyle: {
    margin: '1rem',
    padding: '',
    borderBottom: '4px solid transparent',
    transition: 'border-color 0.4s',
    fontFamily: 'Montserrat',
    lineHeight: '1.5',
    fontWeight: 'medium',
    fontSize: '16px',
    color: '#FFFFFF',
    maxWidth: '100%',
    textAlign: 'center',
  },
  variants: {
    underlineHover: {
      _hover: {
        textDecoration: 'none',
        borderBottomColor: '#E293B6',
      },
    },
    burger: {
      color: '#425056'
    },
  },
};

export default linkStyles;
