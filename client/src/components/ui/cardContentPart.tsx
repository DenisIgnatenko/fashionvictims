import { Container, Flex, VStack, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { useAppSelector } from '../../hooks/useReduxHook';

import { formatDate } from '../../utils/formattedDate';

type CardContentProps = {
  courseId: number;
};

export default function CardContentPart({ courseId }: CardContentProps): JSX.Element {
  const courses = useAppSelector((state) => state.course.course);

  const oneCours = courses.find((el) => el.id === courseId);

  

  if (!oneCours) {
    return <div>Loading...</div>; // Добавлено для обработки случая, когда данные еще не загружены
  }


  return (
    <>
      <Container justifyContent={'center'} m={10}>
        <VStack flex="2" spacing={8} align={["center","stretch"]}>
          <Text textStyle={['smallTitleHeading','titleHeading']}>{oneCours.title}</Text>
          <Flex justify={['center', 'space-between']} flexDirection={['column', 'row']}alignItems="center" width="70%">
            <VStack spacing={2} align={["center","flex-start"]}>
              <div style={{ opacity: 0.6 }}>старт</div>
              <div style={{ fontWeight: 800 }}>{formatDate(oneCours.startDate)}</div>
            </VStack>
            <VStack spacing={2} align={["center","flex-start"]}>
              <div style={{ opacity: 0.6 }}>объем</div>
              <div style={{ fontWeight: 800 }}>{oneCours.duration} часов</div>
            </VStack>
            <VStack spacing={2} align={["center","flex-start"]}>
              <div style={{ opacity: 0.6 }}>стоимость</div>
              <div style={{ fontWeight: 800 }}>{oneCours.price} рублей</div>
            </VStack>
          </Flex>
          <VStack flex="1" gap={10}>
            <Text align={["center", "left"]}>{oneCours.description}</Text>
            <Flex
              flexDirection={{ base: 'column', sm: 'row' }}
              justify={['flex-end', 'space-between']}
              alignItems={{ base: 'center', sm: 'center' }}
              width="100%"
              gap={3}
            >
              <Button variant="primeVariant" onClick={() => console.log('Клик по кнопке')}>
                Kупить курс
              </Button>
              <Button variant="secondVariant" onClick={() => console.log('Клик по кнопке')}>Подробнее о курсе</Button>
            </Flex>
          </VStack>
        </VStack>
      </Container>
    </>
  );
}
