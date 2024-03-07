const buttonStyles = {
    variants: {
        primeVariant:{
            maxW: '260px',
            borderRadius: '30px',
            border: '2px solid #E293B6',
            padding: '1rem 4rem',
            display: 'flex',
            justifyContent: 'center',
            background: '#E293B6',
            _hover: {
                background: '#E378A7',
                border: '2px solid #E378A7', // Новый цвет при нажатии
              },
              _active: {
                background: '#D5759F',
                border: '2px solid #D5759F', // Новый цвет при нажатии
              },
        },
        secondVariant:{
            maxW: '260px',
            borderRadius: '30px',
            border: '2px solid #E293B6',
            padding: '1rem 4rem',
            display: 'flex',
            justifyContent: 'center',
            background:"transparent",
            _hover: {
                background: 'rgba(226, 147, 182, 0.2)',
                border: '2px solid rgba(226, 147, 182, 1)',// менее прозрачный фон при наведении
              },
              _active: {
                background: 'rgba(226, 147, 182, 0.6)',
                border: '2px solid rgba(226, 147, 182, 1)', // Новый цвет при нажатии
              },

        }
    },
};
export default buttonStyles;
