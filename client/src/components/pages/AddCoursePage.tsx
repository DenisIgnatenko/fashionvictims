import { Box, Button, Flex, FormControl, Input , useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import type { EventInfo } from '@ckeditor/ckeditor5-utils';
import ColorPicker from '../ui/ColorPicker'
import type { AddCourseType, CourseType } from '../../types/courseType';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { addCourseThunk } from '../../redux/thunkActions/courseThunkActions';


export default function AddCoursePage(): JSX.Element {
    const [color, setColor] = useState('#E293B6');
    const {user} = useAppSelector((state)=> state.auth)
    const [editorData, setEditorData] = useState('');

    const handleEditorChange = (event: EventInfo<string, unknown>, editor: ClassicEditor): void => {
        console.log(editor, typeof editor)
        const data = editor.getData();
        setEditorData(data);
    };

    const dispatch = useAppDispatch()

    const submitCourseHandler = (e: React.FormEvent<HTMLInputElement & AddCourseType >): void => {
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
            if (user.status==='logged') formData.append('authorId', user.id.toString())
            void dispatch(addCourseThunk( formData ));
        }
      



    return (
        <Box as="form" width="80%" encType='multipart/form-data' display='flex' flexWrap='wrap' alignItems='' 
        // action='/api/courses' method='POST' 
        onSubmit={submitCourseHandler}>
            <FormControl>
                <Input borderRadius='12px' placeholder='Название курса' name='title' isRequired/>
            </FormControl>
            <FormControl>
                <Input borderRadius='12px' placeholder='Краткое описание' name='description' type='text' isRequired/>
            </FormControl>
            <FormControl>
                <Input borderRadius='12px' placeholder='Краткое описание' name='startDate' type='date' isRequired/>
            </FormControl>
            <FormControl>
                <Input borderRadius='12px' placeholder='Цена, руб.' name='price' type='number' isRequired/>
            </FormControl>
            <FormControl>
                <Input borderRadius='12px' placeholder='Продолжительность, часов' name='duration' type='number' isRequired/>
            </FormControl>
            <FormControl>
                <ColorPicker color={color} setColor={setColor} />
            </FormControl>
            <FormControl>
                <input placeholder='Изображение для карточки курса' type='file' name='file' required/>
            </FormControl>
            <Box width="100%"> 
            <CKEditor 
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor&nbsp;5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ handleEditorChange}
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />

            </Box>
            <Flex mt={5} justifyContent="center">
                <Button variant='primeVariant' type='submit'>Создать курс</Button>
            </Flex>

        </Box>)
}
