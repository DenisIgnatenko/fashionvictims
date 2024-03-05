import React from 'react';
import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import { useAppSelector } from '../../hooks/useReduxHook';
import AuthModal from '../ui/AuthModal';
import TestDialogueModal from '../ui/TestDialogueModal';
import StaticContent from '../ui/staticContent';
import TeacherCard from '../ui/TeacherCard';
import CoursesPage from './CoursesPage';

export default function MainPage(): JSX.Element {
  const modal = useAppSelector((state) => state.auth.authModal);
  // const courses = useAppSelector((state) => state.courses.course);
  const openTest = useAppSelector((state) => state.quiz.openTest);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   void dispatch(fetchCoursesActionThunk());
  // }, []);

  return (
    <Box>
      <Flex
        maxWidth="100%"
        height={["1000", "600"]}
        p={4}
        bg="#4D6877"
        alignItems={['flex-start', 'stretch']}
        justifyContent="center"
        position="relative"
        flexDirection={{
          base: 'column',
          md: 'row',
        }}
        borderBottomRightRadius="30px"
        borderBottomLeftRadius="30px"
      >
        {/* Описание курса и кнопка */}
        <VStack spacing={2} ml={{ base: 0, md: 8 }} mt={{ base: 8, md: 0 }} alignItems="left" zIndex="2">
          <Text textStyle={['smallMainHeading','customHeading', ]}>Жертвы (теории) Моды</Text>
          <VStack spacing={4} align={["center","flex-start"]}>
            {/* <Text textStyle="heroSimpleText" width="300px"> */}
            <Text textStyle="heroSimpleText" width={{ base: '100%', md: '300px' }}>
              Курсы о том, как работает мода, что делает её таким мощным и влиятельным феноменом,
              как она формируется
            </Text>
            <Button variant="primeVariant">Подробнее</Button>
            <Text textStyle="heroH3heading" mt={12}>
              Ближайший старт
            </Text>
            <Text textStyle="heroSimpleText">20 сентября</Text>
          </VStack>
        <VStack
          spacing={4}
          position={{ base: 'static', md: 'absolute' }}
          bottom={{ base: 'auto', md: 10}}
          right={{ base: 'auto', md: 10}}
          zIndex="4"
        >
          <Box position="relative" zIndex="1">
            <Image
              src="/scissors-character.svg"
              alt="Character"
              position="relative"
              top={['auto', '20']}
              right={{ base: 'auto', md:'-65'}}
              width={{ base: 500, md: 550, xl: 650, sm: 330 }}
            />
          </Box>
        </VStack>
        </VStack>

        {typeof window !== 'undefined' && window.innerWidth >= 768 && (<>
        
        <VStack
          spacing={4}
          position={{ base: 'static', md: 'absolute' }}
          bottom={{ base: 'auto', md: 4 }}
          right={{ base: 'auto', md: 4 }}
          zIndex="4"
        >
          
            <Image
              src="/book.svg"
              alt="book"
              position="relative"
              zIndex="1"
              bottom="500"
              right="5"
              width={{ md: 100, xl: 120, sm: '' }}
            />
          
        </VStack>
        <VStack
          spacing={4}
          position={{ base: 'static', md: 'absolute' }}
          bottom={{ base: 'auto', md: 4 }}
          right={{ base: 'auto', md: 4 }}
          zIndex="1"
        >
          <Box position="relative" zIndex="-2">
            <Image
              src="/star-2.svg"
              alt="star-2"
              position="relative"
              top="0"
              right="900"
              width={{ md: 100, xl: 220, sm: 80 }}
            />
          </Box>
        </VStack>
        <VStack
          spacing={4}
          position={{ base: 'static', md: 'absolute' }}
          bottom={{ base: 'auto', md: 4 }}
          right={{ base: 'auto', md: 4 }}
          zIndex="4"
        >
          <Box position="relative" zIndex="1">
            <Image
              src="/flower.svg"
              alt="star-2"
              position="relative"
              top="-450"
              right="1050"
              width={{ md: 120, xl: 180, sm: 80 }}
            />
          </Box>
        </VStack>
        </>)}
        
      </Flex>
      {modal && <AuthModal />}
      {openTest && <TestDialogueModal />}

      <StaticContent/>
      <CoursesPage />
      <TeacherCard/>
    </Box>
  );
}
