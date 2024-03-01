import { Box, FormControl, Input } from '@chakra-ui/react'
import React from 'react'
import ColorPicker from '../ui/ColorPicker'

export default function AddCoursePage(): JSX.Element {


    return (
        <Box as="form" width="80%">
            <FormControl>
                <Input borderRadius='12px' placeholder='Название курса' name='title' />
            </FormControl>
            <FormControl>
                <Input borderRadius='12px' placeholder='Краткое описание' name='description' />
            </FormControl>
            <FormControl>
                <ColorPicker/>
            </FormControl>
            <FormControl>
                <Input borderRadius='12px' placeholder='Изображение для карточки курса' name='description' />
            </FormControl>


        </Box>)
}
