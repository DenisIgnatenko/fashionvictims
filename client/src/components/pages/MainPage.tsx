import { Box, Button, Flex, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { setOpenTest } from '../../redux/slices/quizeSlice';
import { fetchCoursesActionThunk } from '../../redux/thunkActions/courseThunkActions';
import AuthModal from '../ui/AuthModal';
import CourseCard from '../ui/CourseCard';
import TestDialogueModal from '../ui/TestDialogueModal';

export default function MainPage(): JSX.Element {
  const modal = useAppSelector((state) => state.auth.authModal);
  const courses = useAppSelector((state) => state.courses.course);
  const openTest = useAppSelector((state) => state.quiz.openTest);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchCoursesActionThunk());
  }, []);

  return (
    <Box>
      <Flex
        maxWidth="100%"
        minH="500"
        p={4}
        bg="#4D6877"
        alignItems="flex-start"
        justifyContent="center"
        position="relative"
        flexDirection={{
          base: 'column',
          md: 'row',
        }}
        borderBottomRightRadius="30px"
        borderBottomLeftRadius="30px"
      >
        <VStack spacing={2} ml={{ base: 0, md: 8 }} mt={{ base: 8, md: 0 }} alignItems="left">
          <Text textStyle="customHeading">Жертвы (теории) Моды</Text>
          <VStack spacing={4} align="flex-start">
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
            <Button variant="primeVariant" onClick={() => void dispatch(setOpenTest(true))}>
              Пройти тест
            </Button>
          </VStack>
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
              src="/scissors-character.svg"
              alt="Character"
              position="relative"
              top="10"
              right="40"
              width={{ base: 500, md: 400, xl: 500, sm: 300 }}
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
              src="/book.svg"
              alt="book"
              position="relative"
              top="-60"
              right="5"
              width={{ md: 100, xl: 180, sm: 80 }}
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
              src="/star-2.svg"
              alt="star-2"
              position="relative"
              top="0"
              right="1000"
              width={{ md: 100, xl: 180, sm: 80 }}
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
              top="-300"
              right="1050"
              width={{ md: 100, xl: 180, sm: 80 }}
            />
          </Box>
        </VStack>
      </Flex>
      {modal && <AuthModal />}
      {openTest && <TestDialogueModal />}

      <Stack spacing={5}>
        {courses.map((course, index) => (
          <CourseCard key={course.id} index={index} courseId={course.id} course={course} />
        ))}
      </Stack>
    </Box>
  );
}
