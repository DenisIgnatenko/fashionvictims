import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export default function MainPage(): JSX.Element {
  return (
    <Box>
      <Flex
        maxWidth="100%"
        height="500"
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
        {/* Описание курса и кнопка */}
        <VStack spacing={2} ml={{ base: 0, md: 8 }} mt={{ base: 8, md: 0 }} alignItems="left">
          <Text textStyle="customHeading">Жертвы (теории) Моды</Text>
          <VStack spacing={4} align="flex-start">
            <Text textStyle="heroSimpleText" width="300px">
              Курсы о том, как работает мода, что делает её таким мощным и влиятельным феноменом,
              как она формируется
            </Text>
            <Button>Подробнее</Button>
            <Text textStyle="heroH3heading" mt={12}>
              Ближайший старт
            </Text>
            <Text textStyle="heroSimpleText">20 сентября</Text>
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

        {/* Дополнительный текст и кнопка с датой */}
        {/* Векторные изображения */}
      </Flex>
    </Box>
  );
}
