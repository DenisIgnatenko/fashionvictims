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
    HStack
} from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/useReduxHook'
import { signInThunk, signUpThunk } from '../../redux/thunkActions/authThunkActions'
import type { UserSignInType } from '../../types/authType'
import { setModal } from '../../redux/slices/authSlice'
import NavBar from './NavBar'

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
                <ModalContent height="400px">
                    <ModalHeader><HStack>
                        <Box onClick={()=>setRegister(false)} borderBottom={register ?'5px solid orange': '5px solid transparent' }>
                            Войти
                        </Box>
                        <Box onClick={()=>setRegister(true)} borderBottom={register ? '5px solid transparent' :'5px solid orange' }>
                            Зарегистрироваться
                        </Box>
                    </HStack></ModalHeader>
                    
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={authHandler}>
                            <VStack
                                divider={<StackDivider borderColor='gray.200' />}
                                spacing={4}
                                align='stretch'>
                                <Input placeholder='email' name='email' />
                                <Input placeholder='password' name='password' />
                                {register && <Input placeholder='name' name='name' />}
                            </VStack>
                            {register ?
                                <Text onClick={() => setRegister((prev) => !prev)}>
                                    Уже есть аккаунт? Войти
                                </Text> :
                                <Text onClick={() => setRegister((prev) => !prev)}>
                                    Нет аккаунта? Зарегистрироваться
                                </Text>}
                            <Box h="38px" />
                            <Button position='absolute' bottom='45px' type='submit'>{register ? 'Зарегистрироваться' : 'Войти'}</Button>
                        </form>

                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )
}
