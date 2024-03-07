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
  useBreakpointValue,
  WrapItem,
} from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { setModal } from '../../redux/slices/authSlice';
import { logOutThunk } from '../../redux/thunkActions/authThunkActions';
import scrollLinkStyles from '../../utils/scrollLinkStyles';
import AuthModal from './AuthModal';

export default function NavBar(): JSX.Element {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const modal = useAppSelector((state) => state.auth.authModal);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const [hover, setHover] = React.useState(false);

  const style = {
    ...scrollLinkStyles.baseStyle,
    ...(hover ? scrollLinkStyles.variants.underlineHover._hover : {}),
  };
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
              top={9}
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Options"
              color="#FFFFFF"
            />
            <MenuList>
              <MenuList>
                <MenuItem>
                  <Link variant="burger" href="#about">
                    Что это такое?
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link variant="burger" href="#teachers">
                    Преподаватели
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link variant="burger" href="#courses">
                    Наши курсы
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link variant="burger" href="#">
                    Материалы
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link variant="burger" href="#contacts">
                    Контакты
                  </Link>
                </MenuItem>
              </MenuList>
            </MenuList>
          </Menu>
        ) : (
          <Flex justify="center" align="center" height="100%">
            <WrapItem>
              <Link as={RouterLink} to={`/`} style={{ textDecoration: 'none' }}>
                <Avatar size="sm" name="Home" src="/smallStar.svg" />
              </Link>
            </WrapItem>
            <Center mx="auto">
              {' '}
              {/* Центрируем ссылки */}
              <ScrollLink
                style={style}
                to="about"
                smooth={true}
                duration={500}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Что это такое?
              </ScrollLink>
              <Link variant="underlineHover" href="#courses">
                Наши курсы
              </Link>
              <Link variant="underlineHover" href="#">
                Материалы
              </Link>
              <Link variant="underlineHover" href="#teachers">
                Преподаватели
              </Link>
              <Link variant="underlineHover" href="#">
                Контакты
              </Link>
            </Center>

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
                  <Link as={RouterLink} to={`/profile1`} style={{ textDecoration: 'none' }}>
                    <Avatar size="md" name={user.name} src={user.img} />
                  </Link>
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
