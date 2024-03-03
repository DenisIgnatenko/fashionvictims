// utils/theme-components.ts
import { mode } from '@chakra-ui/theme-tools';

export const CustomListItemStyle = (props) => ({
  display: 'flex',
  alignItems: 'center',
  height: '70px',
  paddingLeft: '15px',
  fontSize: '20px',
  cursor: 'pointer',
  listStyleType: 'none',
  marginBottom: '20px',
  border: '1px solid',
  borderColor: mode('gray.200', 'gray.700')(props), // Прямо здесь используем props
});

export default CustomListItemStyle;
