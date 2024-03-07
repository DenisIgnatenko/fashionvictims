import { Container, Flex, VStack, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';

import { formatDate } from '../../utils/formattedDate';
import PayModal from './payment/PayModal';
import { setOpenPaymentModal } from '../../redux/slices/courseSlice';

type CardContentProps = {
  courseId: number;
};

export default function CardContentPart({ courseId }: CardContentProps): JSX.Element {
  const dispatch = useAppDispatch();
  const courses = useAppSelector((state) => state.courses.course);
  const oneCourse = courses.find((el) => el.id === courseId);
  
  
  const openPaymentModal = useAppSelector((state) => state.courses.openPaymentModal);

  if (!oneCourse) {
    return <div>Loading...</div>; // Добавлено для обработки случая, когда данные еще не загружены
  }

  return (
    <Container justifyContent={'center'} m={10}>
      <VStack flex="2" spacing={8} align={['center', 'stretch']}>
        <Text textStyle={['smallTitleHeading', 'titleHeading']}>{oneCourse.title}</Text>
        <Flex
          justify={['center', 'space-between']}
          flexDirection={['column', 'row']}
          alignItems="center"
          width="70%"
        >
          <VStack spacing={2} align={['center', 'flex-start']}>
            <div style={{ opacity: 0.6 }}>старт</div>
            <div style={{ fontWeight: 800 }}>{formatDate(oneCourse.startDate)}</div>
          </VStack>
          <VStack spacing={2} align={['center', 'flex-start']}>
            <div style={{ opacity: 0.6 }}>объем</div>
            <div style={{ fontWeight: 800 }}>{oneCourse.duration} часов</div>
          </VStack>
          <VStack spacing={2} align={['center', 'flex-start']}>
            <div style={{ opacity: 0.6 }}>стоимость</div>
            <div style={{ fontWeight: 800 }}>{oneCourse.price} рублей</div>
          </VStack>
        </Flex>
        <VStack flex="1" gap={10}>
          <Text align={['center', 'left']}>{oneCourse.description}</Text>
          <Flex
            flexDirection={{ base: 'column', sm: 'row' }}
            justify={['flex-end', 'space-between']}
            alignItems={{ base: 'center', sm: 'center' }}
            width="100%"
            gap={3}
          >
            <Button variant="primeVariant" onClick={() => void dispatch(setOpenPaymentModal(courseId))}>
              Kупить курс
            </Button>
            {/* <PayModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
            <Button variant="secondVariant" onClick={() => console.log('Клик по кнопке')}>
              Подробнее о курсе
            </Button>
          </Flex>
        </VStack>
      </VStack>
      {/* {openPaymentModal && <PayModal courseId={courseId} />} */}
    </Container>
  );
}
