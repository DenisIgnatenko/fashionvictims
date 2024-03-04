import { Box, Button, Flex, FormControl, Input } from '@chakra-ui/react'
import React from 'react'
import ColorPicker from '../ui/ColorPicker'

export default function AddCoursePage(): JSX.Element {


    return (
        <Box as="form" width="80%" encType='multipart/form-data' display='flex' flexWrap='wrap' alignItems=''>
            <FormControl>
                <Input borderRadius='12px' placeholder='Название курса' name='title' />
            </FormControl>
            <FormControl>
                <Input borderRadius='12px' placeholder='Краткое описание' name='startDate' type='date' />
            </FormControl>
            <FormControl>
                <Input borderRadius='12px' placeholder='Цена, руб.' name='price' type='number' />
            </FormControl>
            <FormControl>
                <Input borderRadius='12px' placeholder='Продолжительность, часов' name='duration' type='number' />
            </FormControl>
            <FormControl>
                <ColorPicker />
            </FormControl>
            <FormControl>
                <Input borderRadius='12px' placeholder='Изображение для карточки курса' type='file' name='img' />
            </FormControl>
            <Flex mt={5} justifyContent="center">
                <Button variant='primeVariant' type='submit'>Создать курс</Button>
            </Flex>
        </Box>)
}
