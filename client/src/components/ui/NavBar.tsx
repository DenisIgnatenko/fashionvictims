import { AtSignIcon, HamburgerIcon, LockIcon } from '@chakra-ui/icons';
import {
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
    <Flex height="100px" maxWidth="100%" background="#FFF0F7" alignItems="flex-end">
      <Flex
        height="80px"
        width="full"
        background="#4D6877"
        borderTopRadius="30px"
        alignItems="center"
        justifyContent={isMobile ? 'left' : 'space-between'}
        px={4}
      >
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
              <MenuItem>Что это такое?</MenuItem>
              <MenuItem>Наши курсы</MenuItem>
              <MenuItem>Материалы</MenuItem>
              <MenuItem>Преподаватели</MenuItem>
              <MenuItem>Контакты</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <>
            <Flex flex="1" justifyContent="center">
              {/* Пустой блок для баланса */}
            </Flex>
            <Flex justifyContent="center" flex="6" alignItems="center">
              {/* Ссылки, центрированные */}
              <Link mx="5" variant="underlineHover" href="/">
                Что это такое?
              </Link>
              <Link mx="5" variant="underlineHover" href="/">
                Наши курсы
              </Link>
              <Link mx="5" variant="underlineHover" href="/">
                Материалы
              </Link>
              <Link mx="5" variant="underlineHover" href="/">
                Преподаватели
              </Link>
              <Link mx="5" variant="underlineHover" href="/">
                Контакты
              </Link>
            </Flex>
            <Flex flex="1" justifyContent="flex-end">
              {/* Иконки входа и регистрации */}
              <IconButton
                aria-label="Login"
                icon={<AtSignIcon />}
                variant="ghost"
                color="whiteAlpha.900"
                mr="2"
              />
              <IconButton
                aria-label="Register"
                icon={<LockIcon />}
                variant="ghost"
                color="whiteAlpha.900"
              />
            </Flex>
          </>
        )}
      </Flex>
    </Flex>
  );
}
