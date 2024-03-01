import React from 'react';
import { Box, Button, Flex, VStack } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Heading, Text } from '@chakra-ui/react';

export default function CourseCard(): JSX.Element {
  const image = '/src/public/Group13.png';
  const coursTitle = 'История моды (что и когда) и теория моды (почему)';
  const data = '12 октября';
  const backColor = '#B9DAF9';
  const count = 5;
  const price = 5000;
  const description =
    'Может, написать всё-таки хоть пару слов о курсе здесь? Кажется, что не хватает краткого анонса курса в несколько предложений, чтобы понять, подходит мне вообще эта тема или нет.';

  return (
    <Box backgroundColor={backColor} borderRadius={30} p={6} h="100%" >
      <Flex h="100%" direction={['column', 'row']} justifyContent={['center', 'space-between']} alignItems={['center', 'stretch']}>
        <Container>
          <Box flex={['none', '1']} mb={[4, 1]}>
            <Image  src={image}
            />
          </Box>
        </Container>
        <Container justifyContent={'center'} m={10} >
          <VStack flex="2" spacing={6} align="stretch">
            <Heading fontStyle={'italic'}>{coursTitle}</Heading>
            <Flex justify={['flex-start', 'space-between']} alignItems="center" width="70%">
              <VStack spacing={2} align="flex-start">
                <div style={{ opacity: 0.6 }}>старт</div>
                <div style={{ fontWeight: 800 }}>{data}</div>
              </VStack>
              <VStack spacing={2} align="flex-start">
                <div style={{ opacity: 0.6 }}>объем</div>
                <div style={{ fontWeight: 800 }}>{count} часов</div>
              </VStack>
              <VStack spacing={2} align="flex-start">
                <div style={{ opacity: 0.6 }}>стоимость</div>
                <div style={{ fontWeight: 800 }}>{price} рублей</div>
              </VStack>
            </Flex>
            <VStack flex="1" justify="flex-end" gap={10}>
              <Text>{description}</Text>
              <Flex
                justify={['flex-end', 'space-between']}
                alignItems="flex-end"
                width="100%"
                gap={1}
              >
                <Button variant="primeVariant">Kупить курс</Button>
                <Button variant="secondVariant">Подробнее о курсе</Button>
              </Flex>
            </VStack>
          </VStack>
        </Container>
      </Flex>
    </Box>
  );
}
