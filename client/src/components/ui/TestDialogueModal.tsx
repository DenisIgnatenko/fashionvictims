import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { setOpenTest } from '../../redux/slices/testsSlice';

export default function TestDialogueModal(): JSX.Element {
  const openTest = useAppSelector((state) => state.test.openTest);
  const dispatch = useAppDispatch();
  const submitHandler = (event): void => {
    event.preventDefault();
  };

  const onClose = (): void => {
    void dispatch(setOpenTest(null));
  };
  return (
    <Modal isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Пройдем тестирование</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={submitHandler}>
            <Stack spacing={3}>
              <Input name="name" />
              <Button colorScheme="blue" type="submit">
                ok
              </Button>
            </Stack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
