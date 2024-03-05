import React, { useState } from 'react'
import {
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    ModalBody,
    FormControl,
    Input,
    Button,
    Text,
    VStack,
    StackDivider,
    Spacer,
    Box,
    MenuList,
    HStack,
    Link,
    Flex
} from '@chakra-ui/react'
import { useAppDispatch } from '../../hooks/useReduxHook'
import { signInThunk, signUpThunk } from '../../redux/thunkActions/authThunkActions'
import type { UserSignInType } from '../../types/authType'
import { setModal } from '../../redux/slices/authSlice'

export default function AuthModal(): JSX.Element {
    const [register, setRegister] = useState(false)
    const dispatch = useAppDispatch()
    const onClose = (): void => { dispatch(setModal(false)) }

    const authHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.currentTarget)) as UserSignInType
        void dispatch(register ? signUpThunk(data) : signInThunk(data))
        onClose()
    };
    
    return (
        <Modal isOpen onClose={onClose}>
            <ModalOverlay>
                <ModalContent borderRadius="15px" height="400px">
                    <ModalHeader><HStack>
                        <Box as="button" onClick={() => setRegister(false)} borderBottom={register ? '5px solid transparent' : '5px solid orange' }>
                            Войти
                        </Box>
                        <Box as="button" onClick={() => setRegister(true)} borderBottom={register ? '5px solid orange' : '5px solid transparent' }>
                            Зарегистрироваться
                        </Box>
                    </HStack></ModalHeader>

                    <ModalCloseButton />
                    <ModalBody>
                        <Box as='form' onSubmit={authHandler}>
                            <VStack
                                divider={<StackDivider borderColor='gray.200' />}
                                spacing={4}
                                align='stretch'>
                                <FormControl>
                                    <Input placeholder='email' name='email' />
                                </FormControl>
                                <FormControl>
                                    <Input placeholder='password' name='password' />
                                </FormControl>
                                {register &&
                                    <FormControl>
                                        <Input placeholder='name' name='name' />
                                    </FormControl>
                                }
                            </VStack>
                            {register ?
                                <Text onClick={() => setRegister((prev) => !prev)}>
                                    Уже есть аккаунт? Войти
                                </Text> :
                                <Text onClick={() => setRegister((prev) => !prev)}>
                                    Нет аккаунта? Зарегистрироваться
                                </Text>}
                            <Box h="38px" />
                            <Flex justifyContent="center">
                            <Button variant='primeVariant' position='absolute' bottom='45px' type='submit'>{register ? 'Зарегистрироваться' : 'Войти'}</Button>
                            </Flex>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )
}
