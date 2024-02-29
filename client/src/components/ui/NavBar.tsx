import { AtSignIcon, HamburgerIcon, LockIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';

export default function NavBar(): JSX.Element {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Flex
      height="66px"
      maxWidth="100%"
      borderTopRadius="30px"
      width="full"
      height="74px"
      maxWidth="100%"
      background="#4D6877"
      px={4}
    >
      <Box borderTopRadius="30px" background="#4D6877" width="full" height="74px" px={4}>
        {isMobile ? (
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Options"
              color="#FFFFFF"
            />
            <MenuList>
              <MenuList>
                <MenuItem>Что это такое?</MenuItem>
                <MenuItem>Наши курсы</MenuItem>
                <MenuItem>Материалы</MenuItem>
                <MenuItem>Преподаватели</MenuItem>
                <MenuItem>Контакты</MenuItem>
              </MenuList>
            </MenuList>
          </Menu>
        ) : (
          <Flex justify="center" align="center" height="100%">
            <Center mx="auto">
              {' '}
              {/* Центрируем ссылки */}
              <Link variant="underlineHover" href="/">
                Что это такое?
              </Link>
              <Link variant="underlineHover" href="/">
                Наши курсы
              </Link>
              <Link variant="underlineHover" href="/">
                Материалы
              </Link>
              <Link variant="underlineHover" href="/">
                Преподаватели
              </Link>
              <Link variant="underlineHover" href="/">
                Контакты
              </Link>
            </Center>
            {/* <Spacer /> /!* Элемент для разделения пространства *!/ */}
            <IconButton
              aria-label="Login"
              icon={<AtSignIcon />}
              variant="ghost"
              color="whiteAlpha.900"
            />
            <IconButton
              aria-label="Register"
              icon={<LockIcon />}
              variant="ghost"
              color="whiteAlpha.900"
            />
          </Flex>
        )}
      </Box>
    </Flex>
  );
}
