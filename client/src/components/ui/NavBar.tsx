// import { HamburgerIcon, NotAllowedIcon, UnlockIcon } from '@chakra-ui/icons';
// import {
//   Avatar,
//   Box,
//   Center,
//   Flex,
//   IconButton,
//   Link,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuList,
//   useBreakpointValue,
//   WrapItem,
// } from '@chakra-ui/react';
// import { Link as ScrollLink } from 'react-scroll';
// import { Link as RouterLink } from 'react-router-dom';
// import React, { useState } from 'react';
// import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
// import { setModal } from '../../redux/slices/authSlice';
// import { logOutThunk } from '../../redux/thunkActions/authThunkActions';
// import AuthModal from './AuthModal';
// import scrollLinkStyles from '../../utils/scrollLinkStyles';
// import PayModal from './payment/PayModal';

// const NavBar: React.FC = () => {
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const modal = useAppSelector((state) => state.auth.authModal);
//   const user = useAppSelector((state) => state.auth.user);
//   const dispatch = useAppDispatch();

//   const [hoverAbout, setHoverAbout] = useState(false);
//   const [hoverCourses, setHoverCourses] = useState(false);
//   const [hoverTeachers, setHoverTeachers] = useState(false);
//   const [hoverContacts, setHoverContacts] = useState(false);

//   const styleAbout = {
//     ...scrollLinkStyles.baseStyle,
//     ...(hoverAbout ? scrollLinkStyles.variants.underlineHover._hover : scrollLinkStyles.baseStyle),
//   };

//   const styleCourses = {
//     ...scrollLinkStyles.baseStyle,
//     ...(hoverCourses
//       ? scrollLinkStyles.variants.underlineHover._hover
//       : scrollLinkStyles.baseStyle),
//   };
//   const styleTeachers = {
//     ...scrollLinkStyles.baseStyle,
//     ...(hoverTeachers
//       ? scrollLinkStyles.variants.underlineHover._hover
//       : scrollLinkStyles.baseStyle),
//   };
//   const styleContacts = {
//     ...scrollLinkStyles.baseStyle,
//     ...(hoverContacts
//       ? scrollLinkStyles.variants.underlineHover._hover
//       : scrollLinkStyles.baseStyle),
//   };
//   const openPaymentModal = useAppSelector((state) => state.courses.openPaymentModal);
//   console.log(openPaymentModal);

//   const currentPath = window.location.pathname;
//   return (
//     <Flex
//       borderTopRadius="30px"
//       width="full"
//       mt={4}
//       height="100px"
//       maxWidth="100%"
//       background="#4D6877"
//       px={4}
//     >
//       <Box borderTopRadius="30px" background="#4D6877" width="full" height="74px" px={4}>
//        {currentPath === '/' && ()}
//         {isMobile ? (
//           <Menu>
//             <MenuButton
//               top={9}
//               as={IconButton}
//               icon={<HamburgerIcon />}
//               variant="outline"
//               aria-label="Options"
//               color="#FFFFFF"
//             />
//             <MenuList>
//               <MenuList>
//                 <MenuItem>
//                   <ScrollLink variant="burger" smooth={true} duration={500} to="about">
//                     Что это такое?
//                   </ScrollLink>
//                 </MenuItem>
//                 <MenuItem>
//                   <ScrollLink variant="burger" smooth={true} duration={500} to="teachers">
//                     Преподаватели
//                   </ScrollLink>
//                 </MenuItem>
//                 <MenuItem>
//                   <ScrollLink variant="burger" smooth={true} duration={500} to="courses">
//                     Наши курсы
//                   </ScrollLink>
//                 </MenuItem>

//                 <MenuItem>
//                   <ScrollLink variant="burger" smooth={true} duration={500} to="contacts">
//                     Контакты
//                   </ScrollLink>
//                 </MenuItem>
//               </MenuList>
//             </MenuList>
//           </Menu>
//         ) : (
//           <Flex justify="center" align="center" height="100%">
//             <WrapItem>
//               <Link as={RouterLink} to={`/`} style={{ textDecoration: 'none' }}>
//                 <Avatar size="sm" name="Home" src="/smallStar.svg" />
//               </Link>
//             </WrapItem>
//             <Center mx="auto">
//               {' '}
//               {/* Центрируем ссылки */}
//               <ScrollLink
//                 style={styleAbout}
//                 to="about"
//                 smooth={true}
//                 duration={500}
//                 onMouseEnter={() => setHoverAbout(true)}
//                 onMouseLeave={() => setHoverAbout(false)}
//               >
//                 Что это такое?
//               </ScrollLink>
//               <ScrollLink
//                 style={styleCourses}
//                 smooth={true}
//                 duration={600}
//                 onMouseEnter={() => setHoverCourses(true)}
//                 onMouseLeave={() => setHoverCourses(false)}
//                 to="courses"
//               >
//                 Наши курсы
//               </ScrollLink>

//               <ScrollLink
//                 style={styleTeachers}
//                 smooth={true}
//                 duration={800}
//                 onMouseEnter={() => setHoverTeachers(true)}
//                 onMouseLeave={() => setHoverTeachers(false)}
//                 to="teachers"
//               >
//                 Преподаватели
//               </ScrollLink>
//               <ScrollLink
//                 style={styleContacts}
//                 smooth={true}
//                 duration={800}
//                 onMouseEnter={() => setHoverContacts(true)}
//                 onMouseLeave={() => setHoverContacts(false)}
//                 to="contacts"
//               >
//                 Контакты
//               </ScrollLink>
//             </Center>

//             {user.status === 'logged' ? (
//               <>
//                 <IconButton
//                   onClick={() => void dispatch(logOutThunk())}
//                   aria-label="Logout"
//                   icon={<NotAllowedIcon />}
//                   variant="ghost"
//                   color="whiteAlpha.900"
//                 />
//                 <WrapItem>
//                   <Avatar size="md" name={user.name} src={user.img} />
//                 </WrapItem>
//               </>
//             ) : (
//               <IconButton
//                 onClick={() => dispatch(setModal(true))}
//                 aria-label="Register"
//                 icon={<UnlockIcon />}
//                 variant="ghost"
//                 color="whiteAlpha.900"
//               />
//             )}
//           </Flex>
//         )}
//         {modal && <AuthModal />}
//       </Box>
//       {openPaymentModal && <PayModal courseId={openPaymentModal} />}
//     </Flex>
//   );
// };
// export default NavBar;
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
  Text,
} from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom'; // Добавлен useLocation
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { setModal } from '../../redux/slices/authSlice';
import { logOutThunk } from '../../redux/thunkActions/authThunkActions';
import AuthModal from './AuthModal';
import scrollLinkStyles from '../../utils/scrollLinkStyles';
import PayModal from './payment/PayModal';

const NavBar: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const modal = useAppSelector((state) => state.auth.authModal);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const location = useLocation(); // Подключение useLocation для получения текущего пути

  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverCourses, setHoverCourses] = useState(false);
  const [hoverTeachers, setHoverTeachers] = useState(false);
  const [hoverContacts, setHoverContacts] = useState(false);

  const styleAbout = {
    ...scrollLinkStyles.baseStyle,
    ...(hoverAbout ? scrollLinkStyles.variants.underlineHover._hover : scrollLinkStyles.baseStyle),
  };

  const styleCourses = {
    ...scrollLinkStyles.baseStyle,
    ...(hoverCourses
      ? scrollLinkStyles.variants.underlineHover._hover
      : scrollLinkStyles.baseStyle),
  };
  const styleTeachers = {
    ...scrollLinkStyles.baseStyle,
    ...(hoverTeachers
      ? scrollLinkStyles.variants.underlineHover._hover
      : scrollLinkStyles.baseStyle),
  };
  const styleContacts = {
    ...scrollLinkStyles.baseStyle,
    ...(hoverContacts
      ? scrollLinkStyles.variants.underlineHover._hover
      : scrollLinkStyles.baseStyle),
  };
  const openPaymentModal = useAppSelector((state) => state.courses.openPaymentModal);
  console.log(openPaymentModal);

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
        {location.pathname === '/' ? ( // Условный рендеринг на основе текущего пути
          <Flex justifyContent={'space-between'}>
             <Flex>
                <WrapItem>
                  <Link as={RouterLink} to={`/`} style={{ textDecoration: 'none' }}>
                    <Avatar size="sm" name="Home" src="/smallStar.svg" />
                  </Link>
                </WrapItem>
              </Flex>
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
                      <ScrollLink variant="burger" smooth={true} duration={500} to="about">
                        Что это такое?
                      </ScrollLink>
                    </MenuItem>
                    <MenuItem>
                      <ScrollLink variant="burger" smooth={true} duration={500} to="teachers">
                        Преподаватели
                      </ScrollLink>
                    </MenuItem>
                    <MenuItem>
                      <ScrollLink variant="burger" smooth={true} duration={500} to="courses">
                        Наши курсы
                      </ScrollLink>
                    </MenuItem>

                    <MenuItem>
                      <ScrollLink variant="burger" smooth={true} duration={500} to="contacts">
                        Контакты
                      </ScrollLink>
                    </MenuItem>
                  </MenuList>
                </MenuList>
              </Menu>
            ) : (
              <Flex justify="center" align="center" height="100%">
                <Center mx="auto">
                  {/* Центрируем ссылки */}
                  <ScrollLink
                    style={hoverAbout ? styleAbout : scrollLinkStyles.baseStyle}
                    to="about"
                    smooth={true}
                    duration={500}
                    onMouseEnter={() => setHoverAbout(true)}
                    onMouseLeave={() => setHoverAbout(false)}
                    className="opa"
                  >
                    Что это такое?
                  </ScrollLink>
                  <ScrollLink
                    style={hoverCourses ? styleCourses : scrollLinkStyles.baseStyle}
                    smooth={true}
                    duration={600}
                    onMouseEnter={() => setHoverCourses(true)}
                    onMouseLeave={() => setHoverCourses(false)}
                    to="courses"
                  >
                    Наши курсы
                  </ScrollLink>

                  <ScrollLink
                    style={hoverTeachers ? styleTeachers : scrollLinkStyles.baseStyle}
                    smooth={true}
                    duration={800}
                    onMouseEnter={() => setHoverTeachers(true)}
                    onMouseLeave={() => setHoverTeachers(false)}
                    to="teachers"
                  >
                    Преподаватели
                  </ScrollLink>
                  <ScrollLink
                    style={hoverContacts ? styleContacts : scrollLinkStyles.baseStyle}
                    smooth={true}
                    duration={800}
                    onMouseEnter={() => setHoverContacts(true)}
                    onMouseLeave={() => setHoverContacts(false)}
                    to="contacts"
                  >
                    Контакты
                  </ScrollLink>
                </Center>
              </Flex>
            )}
            {user.status === 'logged' ? (
              <>
                <Flex justifyContent={'flex-end'} align="center">
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
                </Flex>
              </>
            ) : (
              <Flex justifyContent={'flex-end'}>
                <IconButton
                  onClick={() => dispatch(setModal(true))}
                  aria-label="Register"
                  icon={<UnlockIcon />}
                  variant="ghost"
                  color="whiteAlpha.900"
                />
              </Flex>
            )}
          </Flex>
        ) : (
          <>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
              <Flex>
                <WrapItem>
                  <Link as={RouterLink} to={`/`} style={{ textDecoration: 'none' }}>
                    <Avatar size="sm" name="Home" src="/smallStar.svg" />
                  </Link>
                </WrapItem>
              </Flex>
              <Text textStyle={['simpleText', 'smallTitleHeading']} color={['#FFFFFF', '#FFFFFF']}>
                Мои курсы
              </Text>
              <Flex>
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
            </Flex>
          </>
        )}
        {modal && <AuthModal />}
      </Box>
      {openPaymentModal && <PayModal courseId={openPaymentModal} />}
    </Flex>
  );
};
export default NavBar;
