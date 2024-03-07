import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { useAppDispatch } from '../../hooks/useReduxHook';
import { setModal } from '../../redux/slices/authSlice';
import { signInThunk, signUpThunk } from '../../redux/thunkActions/authThunkActions';
import type { UserSignInType } from '../../types/authType';

const MotionTabPanel = motion(TabPanel);

export default function AuthModal(): JSX.Element {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const dispatch = useAppDispatch();
  const closeModal = (): void => {
    dispatch(setModal(false));
    onClose();
  };

  const authHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as UserSignInType;
    if (e.currentTarget.id === 'signInForm') {
      void dispatch(signInThunk(data));
    } else {
      void dispatch(signUpThunk(data));
    }
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="15px">
        <ModalHeader textAlign="center">Давайте знакомиться!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Tabs variant="enclosed" isFitted colorScheme="pink">
            <TabList mb="1em">
              <Tab>Вход</Tab>
              <Tab>Регистрация</Tab>
            </TabList>
            <TabPanels>
              <MotionTabPanel
                initial={{ opacity: 4 }}
                animate={{ opacity: 30 }}
                exit={{ opacity: 0 }}
              >
                <form id="signInForm" onSubmit={authHandler}>
                  <VStack>
                    <FormControl isRequired>
                      <Input
                        placeholder="введите свой email"
                        name="email"
                        borderRadius="16px"
                        borderColor="#E293B6"
                        mb={2}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <Input
                        placeholder="введите пароль"
                        name="password"
                        type="password"
                        borderRadius="16px"
                        borderColor="#E293B6"
                      />
                    </FormControl>
                    <Button mt={4} type="submit" colorScheme="teal" variant="secondVariant">
                      Войти
                    </Button>
                  </VStack>
                </form>
              </MotionTabPanel>
              <MotionTabPanel
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <form id="signUpForm" onSubmit={authHandler}>
                  <VStack>
                    <FormControl isRequired>
                      <Input
                        placeholder="Как вас зовут?"
                        name="name"
                        borderRadius="16px"
                        borderColor="#E293B6"
                      />
                    </FormControl>
                    <FormControl isRequired mb={2}>
                      <Input
                        placeholder="Введите адрес электронной почты"
                        name="email"
                        borderRadius="16px"
                        borderColor="#E293B6"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <Input
                        placeholder="введите пароль"
                        name="password"
                        type="password"
                        borderRadius="16px"
                        borderColor="#E293B6"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <Input
                        placeholder="подтвердите ввод пароля"
                        name="repeatpassword"
                        type="password"
                        borderRadius="16px"
                        borderColor="#E293B6"
                      />
                    </FormControl>
                    <Button mt={4} type="submit" variant="primeVariant" colorScheme="teal">
                      Зарегистрироваться
                    </Button>
                  </VStack>
                </form>
              </MotionTabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
