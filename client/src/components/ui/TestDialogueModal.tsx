import {
  Box,
  Button,
  Heading,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { setOpenTest } from '../../redux/slices/quizeSlice';
import { getQuizzesByModuleId, saveQuizResult } from '../../redux/thunkActions/quizThunkActions';
import type { QuizType } from '../../types/quizType';

const listItemStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '70px',
  fontSize: '20px',
  cursor: 'pointer',
  marginBottom: '10px',
  border: '1px solid #686868',
  borderRadius: '16px',
  borderColor: 'gray.200',
  paddingLeft: '30px',
  width: '90%',
  boxSizing: 'border-box',
};

const unorderedListStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  width: '100%',
};

export default function TestDialogueModal(): JSX.Element | null {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [question, setQuestion] = useState<QuizType | null>(null);
  const [choiceMade, setChoiceMade] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [comment, setComment] = useState<string>('');
  const questions = useAppSelector((state) => state.quiz.questions);
  const quiz = useAppSelector((state) => state.quiz);
  const user = useAppSelector((state) => state.auth.user);
  const loading = useAppSelector((state) => state.quiz.loading);
  const dispatch = useAppDispatch();

  let isLastQuestion = currentQuestionIndex + 1 === questions.length;

  useEffect(() => {
    void dispatch(getQuizzesByModuleId(2));
  }, [dispatch]);

  useEffect(() => {
    if (questions.length > 0 && questions[currentQuestionIndex]) {
      setQuestion(questions[currentQuestionIndex]);
      setSelectedAnswerIndex(null);
      setChoiceMade(false);
    }
  }, [questions, currentQuestionIndex]);

  const checkAnswer = (index: number): void => {
    setSelectedAnswerIndex(index);
    setChoiceMade(true);
    const selectedOption = question?.options[index];
    setComment(selectedOption?.comment || '');
    const correct = question?.options[index]?.isCorrect;

    if (correct) {
      setCorrectAnswerCount((prev) => prev + 1);
      console.log('Correct');
    } else {
      console.log('Incorrect');
    }
  };
  const nextQuestion = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    const nextQuestionIndex = currentQuestionIndex + 1;
    isLastQuestion = currentQuestionIndex + 1 === questions.length;

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setQuestion(questions[nextQuestionIndex]);
      setChoiceMade(false);
      setSelectedAnswerIndex(null);
    } else {
      console.log('Квиз завершен');

      const percentageOfCorrectAnswers = (correctAnswerCount / questions.length) * 100;
      const isPassed = percentageOfCorrectAnswers >= 70;

      if (isPassed) {
        console.log('Тест пройден');
        if (user.status === 'logged') {
          void dispatch(
            saveQuizResult({
              userId: user.id,
              moduleId: quiz.questions[currentQuestionIndex].moduleId,
              score: percentageOfCorrectAnswers,
            }),
          );
        }
      }
      setQuizFinished(true);
    }
  };

  const onClose = (): void => {
    setCurrentQuestionIndex(0);
    void dispatch(setOpenTest(null));
  };
  return (
    <Modal isOpen onClose={onClose} isCentered motionPreset="slideInBottom" size="xl">
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(10deg)" />
      <ModalContent borderRadius="20px">
        {/* <ModalHeader>Пройдем тестированиe</ModalHeader> */}
        <ModalCloseButton />
        <ModalBody>
          {quizFinished ? (
            <VStack>
              <Heading as="h3" size="lg">
                Результаты квиза
              </Heading>
              <Text fontSize="md">
                Правильных ответов: {correctAnswerCount} из {questions.length}
              </Text>
              <Text>
                Ваш результат: {Math.round((correctAnswerCount / questions.length) * 100)}%
              </Text>
              <Button variant="primeVariant" onClick={onClose}>
                Закрыть
              </Button>
            </VStack>
          ) : (
            <VStack spacing={3} align="center">
              <Heading as="h2" size="md" m={6}>
                {currentQuestionIndex + 1}. {question?.question}
                <Box height="2px" bg="#E293B6" width="100%" mt={5} />
              </Heading>
              <UnorderedList style={unorderedListStyle}>
                {question?.options.map((option, index) => (
                  <VStack key={option.id} align="stretch" alignItems="center">
                    <ListItem
                      sx={{
                        ...listItemStyle,
                        bg: choiceMade
                          ? option.isCorrect
                            ? 'green.100'
                            : selectedAnswerIndex === index
                              ? 'red.100'
                              : 'initial'
                          : 'initial',
                      }}
                      onClick={() => {
                        if (!choiceMade) {
                          checkAnswer(index);
                        }
                      }}
                    >
                      {option.variant}
                    </ListItem>
                    {choiceMade && selectedAnswerIndex === index && (
                      <Text fontSize="mb" mb={4} ml={30} mr={30}>
                        {comment}
                      </Text>
                    )}
                  </VStack>
                ))}
              </UnorderedList>

              <Button
                type="submit"
                variant="primeVariant"
                onClick={quizFinished ? onClose : nextQuestion}
              >
                {isLastQuestion ? 'К результатам' : 'Следующий вопрос'}
              </Button>
            </VStack>
          )}
        </ModalBody>
        <ModalFooter>
          <Text>
            Вопрос {currentQuestionIndex + 1} из {questions.length}
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
