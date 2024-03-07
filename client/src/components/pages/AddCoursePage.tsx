import { Box, Button, Flex, FormControl, Input, useToast, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import type { EventInfo } from '@ckeditor/ckeditor5-utils';
import { useNavigate } from 'react-router-dom';
import ColorPicker from '../ui/ColorPicker'
import type { AddCourseType, CourseType } from '../../types/courseType';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { addCourseThunk } from '../../redux/thunkActions/courseThunkActions';


export default function AddCoursePage(): JSX.Element {
    const [color, setColor] = useState('#E293B6');
    const { user } = useAppSelector((state) => state.auth)
    const [editorData, setEditorData] = useState('');
    const toast = useToast()
    const navigate = useNavigate()

    const handleEditorChange = (event: EventInfo<string, unknown>, editor: ClassicEditor): void => {
        // console.log(editor, typeof editor)
        const data = editor.getData();
        setEditorData(data);
    };

    const dispatch = useAppDispatch()

    const submitCourseHandler = (e: React.FormEvent<HTMLFormElement & AddCourseType>): void => {
        e.preventDefault();

        const { title, file, price, description, duration, startDate } = e.currentTarget;


        const formData = new FormData();
        formData.append('title', title.value);
        formData.append('price', price.value);
        formData.append('startDate', startDate.value);
        formData.append('img', file.files[0]);
        formData.append('description', description.value);
        formData.append('duration', duration.value)
        formData.append('editorData', editorData)
        formData.append('bgColor', color);
        if (user.status === 'logged') formData.append('authorId', user.id.toString())
        dispatch(addCourseThunk(formData))
            .unwrap()
            .then((res):void => {
                const createdId = res.created.id
                console.log(res, createdId)
                navigate(`/course/${createdId}/module`)

            } ) // Выслать с бека в ответе id курса, здесь перехватить и navigate(/addmodules/curse/id)
            .catch(console.log)
        e.currentTarget.reset()
        setEditorData('')
        setColor('#E293B6')
        // toast({
        //     title: 'Course created.',
        //     description: "Курс создан",
        //     status: 'success',
        //     duration: 4000,
        //     isClosable: true,
        // });        
    }




    return (
        <Flex p={5} overflow='hidden' bg='#4D6877'>
            <Box borderRadius='12px' bg='#FFF0F7' p={2} as="form" width="100%" encType='multipart/form-data' display='flex' flexWrap='wrap' justifyContent='space-between'
                // action='/api/courses' method='POST' 
                onSubmit={submitCourseHandler}>
                <Text textStyle={['smallTitleHeading', 'titleHeading']}>
                    Добавим новый курс!
                </Text>
                <Text m={11}>
                    Каждая лекция должна содержать не только теоретический материал, но и практические задания,
                    такие как анализ костюмов в фильмах, проекты по созданию костюмных концепций на основе
                    сценариев и исследовательские работы.
                </Text>
                <FormControl margin='8px 0px 8px 0px'>
                    <Input bg='white' borderRadius='12px' placeholder='Название курса' name='title' isRequired />
                </FormControl>
                <FormControl margin='8px 0px 8px 0px'>
                    <Input bg='white' borderRadius='12px' placeholder='Краткое описание' name='description' type='text' isRequired />
                </FormControl>
                <FormControl width="31%" margin='8px 0px 8px 0px' >
                    <Input bg='white' borderRadius='12px' name='startDate' type='date' isRequired />
                </FormControl>
                <FormControl width="31%" margin='8px 0px 8px 0px' >
                    <Input bg='white' borderRadius='12px' placeholder='Цена, руб.' name='price' type='number' isRequired />
                </FormControl>
                <FormControl width="31%" margin='8px 0px 8px 0px'>
                    <Input bg='white' borderRadius='12px' placeholder='Продолжительность, часов' name='duration' type='number' isRequired />
                </FormControl>
                <FormControl width="auto" margin='8px 0px 8px 0px'>
                    Выберите цвет курса:
                    <ColorPicker color={color} setColor={setColor} />
                </FormControl >
                <FormControl width="auto" margin='8px 0px 8px 0px'>
                    <input placeholder='Изображение для карточки курса' type='file' name='file' required />
                </FormControl>
                <Box width="100%">
                    <CKEditor
                        editor={ClassicEditor}
                        data={editorData}
                        onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                        }}
                        onChange={handleEditorChange}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />

                </Box>
                <Flex m='auto' mt={5} justifyContent="center">
                    <Button variant='primeVariant' type='submit'>Создать курс</Button>
                </Flex>
            </Box>
        </Flex>)
}
