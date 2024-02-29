import React from 'react';
import { Box, Button, Flex, VStack } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

export default function CourseCard(): JSX.Element {
  const coursTitle = 'История моды (что и когда) и теория моды (почему)'
  const data = '12 октября';
  const backColor = '#B9DAF9';
  const count = 5;
  const price = 5000;
  const description =
    'Может, написать всё-таки хоть пару слов о курсе здесь? Кажется, что не хватает краткого анонса курса в несколько предложений, чтобы понять, подходит мне вообще эта тема или нет.';

  return (
    <Box backgroundColor={backColor} borderRadius={30} p={6}>

      <Flex direction={['column', 'row']}>
        <Container>
        <Box flex={['none', '1']} mb={[4, 0]}>
          тут картинка
        </Box>
        </Container>
        <Container>
        <VStack flex="2" spacing={6} align="stretch">
          <Box h="auto" bg="yellow.200" p={4} borderRadius={8}>
            <div>{coursTitle}</div>
          </Box>
          <Flex justify={['flex-start', 'space-between']} alignItems="center" width="100%">
            <VStack spacing={2} align="flex-start">
              <div style={{ opacity: 0.6 }}>старт</div>
              <div>{data}</div>
            </VStack>
            <VStack spacing={2} align="flex-start">
              <div style={{ opacity: 0.6 }}>объем</div>
              <div>{count} часов</div>
            </VStack>
            <VStack spacing={2} align="flex-start">
              <div style={{ opacity: 0.6 }}>стоимость</div>
              <div>{price} рублей</div>
            </VStack>
          </Flex>
          <VStack>
            <>
              <div>{description}</div>
              <Flex justify={['flex-start', 'space-between']} alignItems="center" width="100%" gap="40px">
                <Button variant="primeVariant">купить</Button>
                <Button variant="secondVariant">подробнее</Button>
              </Flex>
            </>
          </VStack>
        </VStack>
        </Container>
      </Flex>
    </Box>
  );
}
