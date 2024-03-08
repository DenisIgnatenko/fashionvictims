import React, { useEffect } from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
} from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { getPurchasedCourses, getAuthoredCourses} from '../../redux/thunkActions/courseThunkActions';
import { CourseType } from '../../types/courseType';


export default function AccountPage(): JSX.Element {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.auth.user);
    const purchasedCourses = useAppSelector((state) => state.courses.purchasedCourses);
    const authoredCourses = useAppSelector((state) => state.courses.authoredCourses);


    useEffect(() => {
        if (user.status === 'logged') {
            void dispatch(getPurchasedCourses(user.id));
            void dispatch(getAuthoredCourses(user.id));
        }
    }, [dispatch, user]);
    console.log(user);

    return (
        <Box py={6} display="flex" justifyContent="space-between" p={6}>
            {user.status === 'logged' ? (
                <>
                    <Box h='auto'
                        maxW="270px"
                        w="full"
                        bg='white'
                        boxShadow="2xl"
                        rounded="md">
                        
                            <Accordion>
                            {purchasedCourses?.map((course: CourseType) => (
                                <AccordionItem key={course.id}>

                                  <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                      {course.title}
                                    </Box>
                                    <AccordionIcon />
                                  </AccordionButton>
                                  </AccordionItem>))}
                            </Accordion>
                        
                    </Box>
                    <Box
                        h='auto'
                        maxW="270px"
                        w="full"
                        bg='white'
                        boxShadow="2xl"
                        rounded="md"
                    >
                        <Flex justify="center" >
                            <Avatar
                                size="2xl"
                                src={user.img}
                                css={{
                                    border: '2px solid white',
                                }}
                            />
                        </Flex>

                        <Box p={4}>
                            <Stack spacing={0} align="center" mb={5}>
                                <Heading fontSize="2xl" fontWeight={500} fontFamily="body">
                                    Имя пользователя:
                                </Heading>
                                <Heading fontSize="2xl" fontWeight={500} fontFamily="body">
                                    {user.name}
                                </Heading>
                                <Text color="gray.500">Почта: {user.email}</Text>
                            </Stack>



                            <Button
                                w="full"
                                mt={8}
                                bg="#4D6877"
                                color="white"
                                rounded="md"
                                _hover={{
                                    transform: 'translateY(-2px)',
                                    boxShadow: 'lg',
                                }}>
                                Изменить данные
                            </Button>
                        </Box>
                    </Box>
                </>
            ) : <div>unexpected error</div>}
        </Box>
    )
}
