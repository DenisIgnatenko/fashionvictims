import { Box, Link, Stack, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

export default function NavBar(): JSX.Element {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Stack height="66px" maxWidth="100%" background="#FFF0F7">
      <Stack
        borderTopRadius="30px"
        width="1400px"
        height="74px"
        maxWidth="100%"
        background="#4D6877"
      >
        <Stack direction="row" justify="flex-start" align="flex-start" spacing="28px">
          <Link variant="underlineHover" href="/">
            Что это такое?
          </Link>
          <Link
            fontFamily="Montserrat"
            lineHeight="1.62"
            fontWeight="medium"
            fontSize="16px"
            color="#FFFFFF"
            width="157px"
            textAlign="center"
            variant="underlineHover"
            href="/"
          >
            Наши курсы
          </Link>
          <Link
            fontFamily="Montserrat"
            lineHeight="1.62"
            fontWeight="medium"
            fontSize="16px"
            color="#FFFFFF"
            width="157px"
            textAlign="center"
            variant="underlineHover"
            href="/"
          >
            Материалы
          </Link>
          <Link
            fontFamily="Montserrat"
            lineHeight="1.62"
            fontWeight="medium"
            fontSize="16px"
            color="#FFFFFF"
            width="157px"
            textAlign="center"
            variant="underlineHover"
            href="/"
          >
            Преподаватели
          </Link>
          <Link
            fontFamily="Montserrat"
            lineHeight="1.62"
            fontWeight="medium"
            fontSize="16px"
            color="#FFFFFF"
            width="157px"
            textAlign="center"
            variant="underlineHover"
            href="/"
          >
            Контакты
          </Link>
        </Stack>
        <Box width="105px" height="2px" background="#E293B6" />
      </Stack>
    </Stack>
  );
}
