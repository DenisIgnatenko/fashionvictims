import {
  Modal,
  Button,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  VStack,
  FormControl,
  FormLabel,
  Box,
  Heading,
  Input,
} from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import { setPurchasedCourses } from '../../../redux/slices/courseSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHook';
import { setOpenPaymentModal } from '../../../redux/slices/courseSlice';
import { addPurchasedCourseThunk } from '../../../redux/thunkActions/courseThunkActions';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

type formDataType = {
  owner: string;
  card: string;
  expdate: string;
  cvv: string;
};

type payModalPropsType = {
  courseId: number;
};

export default function PayModal({ courseId }: payModalPropsType): JSX.Element {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  console.log(courseId);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let userId
    if (user.status === 'logged') userId = user.id;
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as formDataType;
    console.log(formData);
    
    if (formData) {
      console.log(userId, courseId);
      void dispatch(addPurchasedCourseThunk({ userId, courseId }));
    }
  };

  const onClose = (): void => {
    void dispatch(setOpenPaymentModal(false));
  };

  return (
    <>
      <Modal isOpen onClose={onClose} isCentered motionPreset="slideInBottom" size="xl">
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(10deg)" />
        <ModalContent borderRadius="20px">
          <ModalCloseButton />
          <ModalBody>
            <MotionBox
              w="100%"
              p={4}
              maxW="md"
              mx="auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading as="h3" size="lg" textAlign="center" mb={6}>
                Данные кредитной карты
              </Heading>
              <form onSubmit={submitHandler}>
                <VStack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Имя владельца</FormLabel>
                    <Input type="text" name="owner" placeholder="Иван Иванов" />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Номер карты</FormLabel>
                    <Input type="text" name="card" placeholder="0000 0000 0000 0000" />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Срок действия</FormLabel>
                    <Input type="text" name="expdate" placeholder="MM/YY" />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>CVV</FormLabel>
                    <Input type="text" name="cvv" placeholder="123" />
                  </FormControl>

                  <MotionButton
                    type="submit"
                    colorScheme="blue"
                    size="lg"
                    w="full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Отправить
                  </MotionButton>
                </VStack>
              </form>
            </MotionBox>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
