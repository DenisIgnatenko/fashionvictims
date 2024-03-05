import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { fetchCoursesActionThunk } from '../../redux/thunkActions/courseThunkActions';
import { Box, Button, Flex, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { setOpenTest } from '../../redux/slices/testsSlice';
import type { TestType } from '../../types/testsType';
import AuthModal from '../ui/AuthModal';
import CourseCard from '../ui/CourseCard';
import TestDialogueModal from '../ui/TestDialogueModal';
import StaticContent from '../ui/staticContent';
import TeacherCard from '../ui/TeacherCard';

const testItem: TestType = {
  id: 1,
  name: 'Test',
  description: 'Test description',
  userId: 1,
  questions: [
    {
      id: 1,
      testId: 1,
      question: 'Test question',
      answer: 'Test answer',
      points: 1,
    },
  ],
};

export default function MainPage(): JSX.Element {
  const modal = useAppSelector((state) => state.auth.authModal);
  const courses = useAppSelector((state) => state.course.course);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchCoursesActionThunk());
  }, []);

  const openTest = useAppSelector((state) => state.test.openTest);

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
            <Button variant="primeVariant" onClick={() => void dispatch(setOpenTest(testItem))}>
              Пройти тест
            </Button>
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
              right={{ base: 'auto', md:'5'}}
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
              width={{ md: 100, xl: 120, sm: 80 }}
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

     
      <Stack spacing={5}>
        {courses.map((course, index) => (
          <CourseCard key={course.id} index={index} courseId={course.id} course={course} />
        ))}
      </Stack>
      <TeacherCard/>
    </Box>
  );
}
