import { Box, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { Button } from 'react-scroll';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { setOpenPaymentModal } from '../../redux/slices/courseSlice';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

type moreInfoModalPropsType = {
    courseId: number;
}

export default function moreInfoModal({courseId}: moreInfoModalPropsType): JSX.Element {
    const modules = useAppSelector((state) => state.courses.availableModules)
    
    const dispatch = useAppDispatch();
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
                Структура курса
              </Heading>
              <Text></Text>
              <MotionButton
                    type="submit"
                    colorScheme="pink"
                    borderRadius={30}
                    bg="pink.300"
                    _hover={{ bg: 'pink.400' }}
                    _active={{ bg: 'pink.500' }}
                    size="lg"
                    w="full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={()=> onClose()}
                   
                  >
                    понятно
                  </MotionButton>
            </MotionBox>
          </ModalBody>
        </ModalContent>
      </Modal></>
  )
}