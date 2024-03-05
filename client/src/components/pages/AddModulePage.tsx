import React, { useState } from 'react'
import { Box, Button, Flex, FormControl, Input, useToast, Text } from '@chakra-ui/react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import type { EventInfo } from '@ckeditor/ckeditor5-utils';
import { useParams } from 'react-router-dom';
import type { AddCourseType } from '../../types/courseType';
import { useAppSelector } from '../../hooks/useReduxHook';


export default function AddModulePage(): JSX.Element {
    const { user } = useAppSelector((state) => state.auth)
    const [editorData, setEditorData] = useState('');
    const { id } = useParams();

        // const [question, setQuestion] = useState('');
        // const [options, setOptions] = useState([{ variant: '', isCorrect: false, comment: '' }]);
      
        // const handleChangeOption = (index, key, value) => {
        //   const newOptions = [...options];
        //   newOptions[index][key] = value;
        //   setOptions(newOptions);
        // };
      
        // const handleAddOption = () => {
        //   setOptions([...options, { variant: '', isCorrect: false, comment: '' }]);
        // };
      
        // const handleSubmit = (e) => {
        //   e.preventDefault();
        //   onSubmit({ question, options });
        //   // Reset form state if needed
        //   setQuestion('');
        //   setOptions([{ variant: '', isCorrect: false, comment: '' }]);
        // };



    const handleEditorChange = (event: EventInfo<string, unknown>, editor: ClassicEditor): void => {
        console.log(editor, typeof editor)
        const data = editor.getData();
        setEditorData(data);
    };

    const submitCourseHandler = (e: React.FormEvent<HTMLFormElement & AddCourseType>): void => {
        e.preventDefault();

        // const { title, file, price, description, duration, startDate } = e.currentTarget;


        // const formData = new FormData();
        // formData.append('title', title.value);
        // formData.append('price', price.value);
        // formData.append('startDate', startDate.value);
        // formData.append('img', file.files[0]);
        // formData.append('description', description.value);
        // formData.append('duration', duration.value)
        // formData.append('editorData', editorData)
        // formData.append('bgColor', color);
        // if (user.status === 'logged') formData.append('authorId', user.id.toString())
        // dispatch(addCourseThunk(formData))
        //     .unwrap()
        //     .then() // Выслать с бека в ответе id курса, здесь перехватить и navigate(/addmodules/curse/id)
        //     .catch(console.log)
        // e.currentTarget.reset()
        // setEditorData('')
        // setColor('#E293B6')
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
                    Добавим модули в курс!
                </Text>
                <Text m={11}>
                    Каждая лекция должна содержать не только теоретический материал, но и практические задания,
                    такие как анализ костюмов в фильмах, проекты по созданию костюмных концепций на основе
                    сценариев и исследовательские работы.
                </Text>
                <FormControl margin='8px 0px 8px 0px'>
                    <Input bg='white' borderRadius='12px' placeholder='Название модуля' name='name' isRequired />
                </FormControl>
                <FormControl margin='8px 0px 8px 0px'>
                    <Input bg='white' borderRadius='12px' placeholder='Ссылка на видео' name='videoURL' type='text' isRequired />
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
                {/* <form onSubmit={handleSubmit}>
      <div>
        <label>Question:</label>
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </div>
      {options.map((option, index) => (
        <div key={index}>
          <label>{`Option ${index + 1}:`}</label>
          <input
            type="text"
            value={option.variant}
            onChange={(e) => handleChangeOption(index, 'variant', e.target.value)}
          />
          <label>Correct:</label>
          <input
            type="checkbox"
            checked={option.isCorrect}
            onChange={(e) => handleChangeOption(index, 'isCorrect', e.target.checked)}
          />
          <label>Comment:</label>
          <input
            type="text"
            value={option.comment}
            onChange={(e) => handleChangeOption(index, 'comment', e.target.value)}
          />
        </div>
      ))}
      <button type="button" onClick={handleAddOption}>Add Option</button>
      <button type="submit">Submit</button>
    </form> */}
                <Flex m='auto' mt={5} justifyContent="center">
                    <Button variant='primeVariant' type='submit'>Создать модуль</Button>
                </Flex>
            </Box>
        </Flex>)
}
