import { HamburgerIcon, NotAllowedIcon, UnlockIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Center,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
  WrapItem,
} from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { setModal } from '../../redux/slices/authSlice';
import { logOutThunk } from '../../redux/thunkActions/authThunkActions';
import AuthModal from './AuthModal';

export default function NavBar(): JSX.Element {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const modal = useAppSelector((state) => state.auth.authModal);
  const user = useAppSelector((state) => state.auth.user)
  const dispatch = useAppDispatch()
  return (
    <Flex
      borderTopRadius="30px"
      width="full"
      mt={4}
      height="100px"
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
            {user.status === 'logged' && <Text variant="">Привет,{`${user.name}`}</Text>}
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
            {/* <IconButton
              aria-label="Login"
              icon={<AtSignIcon />}
              variant="ghost"
              color="whiteAlpha.900"
            /> */}
            {user.status === 'logged' ? (
              <>
                <IconButton
                  onClick={() => void dispatch(logOutThunk())}
                  aria-label="Logout"
                  icon={<NotAllowedIcon />}
                  variant="ghost"
                  color="whiteAlpha.900"
                />
                <WrapItem>
                  <Avatar size="md" name={user.name} src={user.img} />
                </WrapItem>
              </>
            ) : (
              <IconButton
                onClick={() => dispatch(setModal(true))}
                aria-label="Register"
                icon={<UnlockIcon />}
                variant="ghost"
                color="whiteAlpha.900"
              />
            )}
          </Flex>
        )}
              {modal && <AuthModal />}
      </Box>
    </Flex>
  );
}
