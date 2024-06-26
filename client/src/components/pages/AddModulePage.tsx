/* eslint-disable prefer-destructuring */
import { Box, Button, Flex, FormControl, Input, Text, useToast } from '@chakra-ui/react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import type { EventInfo } from '@ckeditor/ckeditor5-utils';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { addModuleThunk } from '../../redux/thunkActions/courseThunkActions';
import type { AddCourseType, QuestionType } from '../../types/courseType';
import QuizzConstructor from '../ui/QuizzConstructor';

type DynamicFieldType = [[string[]], FormDataEntryValue];

export default function AddModulePage(): JSX.Element {
  const { user } = useAppSelector((state) => state.auth);
  const [editorData, setEditorData] = useState('');
  const { id } = useParams();
  console.log(id);
  const dispatch = useAppDispatch();
  const toast = useToast();

  const handleEditorChange = (event: EventInfo<string, unknown>, editor: ClassicEditor): void => {
    const data = editor.getData();
    setEditorData(data);
  };

  const submitModuleHandler = (e: React.FormEvent<HTMLFormElement & AddCourseType>): void => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    const { name, videoURL } = Object.fromEntries(
      Object.entries(structuredClone(formData)).filter(
        (el) => el[0] === 'name' || el[0] === 'videoURL',
      ),
    );

    const dynamicFields: DynamicFieldType[] = Object.entries(structuredClone(formData))
      .filter((el) => el[0] !== 'name' && el[0] !== 'videoURL')
      .map((el): DynamicFieldType => [[el[0].split('-')], el[1]]);

    console.log(dynamicFields);

    const questions: QuestionType[] = [];
    dynamicFields.forEach((el) => {
      const questionIndex = parseInt(el[0][0][1], 10) - 1;
      const answerIndex = parseInt(el[0][0][2], 10) - 1;

      if (el[0][0][0] === 'question') {
        questions[questionIndex] = {
          questionText: el[1],
          answers: [],
          num: parseInt(el[0][0][1], 10),
        };
      } else {
        if (!questions[questionIndex].answers[answerIndex]) {
          questions[questionIndex].answers[answerIndex] = {};
        }

        if (el[0][0][0] === 'answer') {
          questions[questionIndex].answers[answerIndex].answer = el[1];
        } else if (el[0][0][0] === 'comment') {
          questions[questionIndex].answers[answerIndex].comment = el[1];
        } else if (el[0][0][0] === 'isCorrect') {
          questions[questionIndex].answers[answerIndex].isCorrect = el[1] === 'true';
        }
      }
    });

    void dispatch(addModuleThunk({ questions, videoURL, name, article: editorData, id }));
    toast({
      title: 'Поздравляю! Модуль создан.',
      description:
        'Модуль создан успешно! Можете добавить еще один или вернуться на главную страницу.',
      status: 'success',
      duration: 4000,
      isClosable: true,
      position: 'top',
      colorScheme: 'pink',
    });
    e.currentTarget.reset();
    setEditorData('');

    console.log(questions, videoURL, name, editorData);
  };
  return (
    <Flex p={5} overflow="hidden" bg="#4D6877">
      <Box
        borderRadius="12px"
        bg="#FFF0F7"
        p={2}
        as="form"
        width="100%"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        onSubmit={submitModuleHandler}
      >
        <Text textStyle={['smallTitleHeading', 'titleHeading']}>Добавим модули в курс!</Text>
        <Text m={11}>
          Каждая лекция должна содержать не только теоретический материал, но и практические
          задания, такие как анализ костюмов в фильмах, проекты по созданию костюмных концепций на
          основе сценариев и исследовательские работы.
        </Text>
        <FormControl margin="8px 0px 8px 0px">
          <Input
            bg="white"
            borderRadius="12px"
            placeholder="Название модуля"
            name="name"
            isRequired
          />
        </FormControl>
        <FormControl margin="8px 0px 8px 0px">
          <Input
            bg="white"
            borderRadius="12px"
            placeholder="Ссылка на видео"
            name="videoURL"
            type="text"
            isRequired
          />
        </FormControl>
        <Box width="100%">
          <CKEditor
            editor={ClassicEditor}
            data={editorData}
            onReady={(editor) => {}}
            onChange={handleEditorChange}
            onBlur={(event, editor) => {}}
            onFocus={(event, editor) => {}}
          />
        </Box>
        <Flex w="100%" m="auto" mt={5} justifyContent="center">
          <QuizzConstructor />
          {/* <DynamicForm/> */}
        </Flex>

        <Flex w="100%" m="auto" mt={5} justifyContent="center">
          <Button variant="primeVariant" type="submit">
            Создать модуль
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
