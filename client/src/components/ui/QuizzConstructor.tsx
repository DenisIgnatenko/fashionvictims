import { Box, HStack, Input, Button, Checkbox, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function QuizzConstructor(): JSX.Element {
  const [questionsNum, setNum] = useState(1)

  const createInputs = (): JSX.Element[] => {
    const inputs = []
    for (let i = 1; i <= questionsNum; i += 1) {
      inputs.push(
        <Box key={i} m={2}>
          <Textarea bg='white' borderRadius='12px' placeholder={`Вопрос №${i}`} name={`question-${i}`} />
          <HStack>
            <Input bg='white' borderRadius='12px' placeholder='Ответ №1' type=' text' name={`answer-${i}-1`} />
            <Input bg='white' borderRadius='12px' placeholder='Комментарий к ответу' type='text' name={`comment-${i}-1`} />
            <Checkbox name={`isCorrect-${i}-1`} value='true'>верный</Checkbox>
          </HStack>
          <HStack>
            <Input bg='white' borderRadius='12px' placeholder='Ответ №2' type=' text' name={`answer-${i}-2`} />
            <Input bg='white' borderRadius='12px' placeholder='Комментарий к ответу' type='text' name={`comment-${i}-2`} />
            <Checkbox name={`isCorrect-${i}-2`} value='true'>верный</Checkbox>
          </HStack>
          <HStack>
            <Input bg='white' borderRadius='12px' placeholder='Ответ №3' type=' text' name={`answer-${i}-3`} />
            <Input bg='white' borderRadius='12px' placeholder='Комментарий к ответу' type='text' name={`comment-${i}-3`} />
            <Checkbox name={`isCorrect-${i}-3`} value='true'>верный</Checkbox>
          </HStack>
          <HStack>
            <Input bg='white' borderRadius='12px' placeholder='Ответ №4' type=' text' name={`answer-${i}-4`} />
            <Input bg='white' borderRadius='12px' placeholder='Комментарий к ответу' type='text' name={`comment-${i}-4`} />
            <Checkbox name={`isCorrect-${i}-4`} value='true'>верный</Checkbox>
          </HStack>
        </Box>
      )
    }
    return inputs
  }
  return (
    <Box w='100%'>
      {createInputs().map((el) => el)}
      <Button onClick={() => setNum((prev) => prev + 1)}>
        Добавить вопрос
      </Button>
    </Box>
  )
}
