import { Container, VStack, Text, Flex, Image, Stack, UnorderedList, ListItem } from '@chakra-ui/react';
import React from 'react';

export default function StaticContent(): JSX.Element {
  return (
    <>
      <Image
        src="/smallStar.svg"
        position={'absolute'}
        zIndex={-1}
        maxW={['40%', '40%', '35%', '30%']}
      ></Image>
      <Image
        src="/mediumStar.svg"
        position={'absolute'}
        zIndex={-1}
        left="-1"
        top="1500"
        maxW={['40%', '40%', '35%', '30%']}
      ></Image>
      <Image
        src="/bigStar.svg"
        position={'absolute'}
        zIndex={-1}
        top="850"
        right="-10"
        maxW={['40%', '40%', '35%', '30%']}
      ></Image>

      <Container justifyContent={'center'} maxW="100%" mt={20} position={'relative'}>
        <Flex flexDirection={{ base: 'column', sm: 'row' }}>
          <VStack flex="2" spacing={6} align="stretch" m="4%" maxW={['80%', '80%', '70%', '60%']}>
            <Text id='about' textStyle={['smallTitleHeading', 'titleHeading']}>
              Мы поможем разобраться в том, как устроена мода
            </Text>
            <Text textStyle="simpleText" mb={20}>
              Какие социокультурные, экономические и политические механизмы влияют на её
              формирование и как мода, в свою очередь, влияет на них
            </Text>
          </VStack>
          <Image src="/Camera.svg" maxW={['50%', '40%']} m={10}></Image>
        </Flex>
        <Flex flexDirection={{ base: 'column', sm: 'row' }}>
          <Image src="/BookStaticPart.svg" maxW={['0%', '30%', '35%', '40%']} m={10}></Image>
          <VStack flex="2" spacing={6} align="stretch" m="2%" maxW={['80%', '80%', '70%', '60%']}>
            <Text textStyle={['smallTitleHeading', 'titleHeading']}>
              Знание культурного контекста и базовых теорий, анализирующих моду, поможет нашим
              слушателям решать их собственные задачи
            </Text>
            <VStack>
            <Text textStyle="simpleText">Лучше понять мир моды, развить ваш стиль и стать более осведомленным и критически мыслящим потребителем.</Text>
            </VStack>
          </VStack>
        </Flex>
        <Flex flexDirection={{ base: 'column', sm: 'row' }} mt={10}>
          <VStack flex="2" spacing={6} align="stretch" m="4%" maxW={['80%', '80%', '70%', '60%']}>
            <Text textStyle={['smallTitleHeading', 'titleHeading']}>
              Школа ориентируется на широкий круг слушателей
            </Text>
            <Text textStyle="simpleText">
              Курсы полезны и тем, кто интересуются современной культурой и искусством, размышляет о
              профессиональной траектории, и профессионалам, уже работающим в моде (журналистам,
              бренд-менеджерам, дизайнерам), которые заинтересованы в получении глубоких и
              экспертных знаний в области моды
            </Text>
          </VStack>
          <Image src={'/Dress.svg'} maxW={['40%', '40%', '35%', '30%']} m={5}></Image>
        </Flex>

        <Text textStyle="titleHeading" fontSize={['30','60']} m="10%" id='courses'>
          Наши курсы
        </Text>
      </Container>
    </>
  );
}
