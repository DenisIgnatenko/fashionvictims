import React from 'react';
import { Flex, Text, VStack, Image, HStack, Box } from '@chakra-ui/react';


export default function TeacherCard():JSX.Element {
  return (
    <>
      <Text textStyle="titleHeading" fontSize={['30','60']} m="15%" id="teachers">
        Преподаватели
      </Text>
      <Flex flexDirection={'column'} justifyContent={'space-between'} maxH="1550" width="100%" gap={['90','200']}>
        <Box flex={4} flexDirection="row" bgColor={'#FEDE7D'} borderRadius="30" maxH={['100%',"380"]} position={"relative"}>
            <HStack flexDirection={['column', 'row']}>
            <Image src={'/Alabieva.svg'} position="relative"  bottom={['','55','185',"155"]} maxW={['50%','55%','100%']}></Image>
            <VStack maxW={['65%','60%', '50%']} textAlign={['center', 'left']} alignItems="center" mb={['','130']} mr={['','10']}>
                <Text textStyle="smallTitleHeading">Людмила Алябьева</Text>
                <Text textStyle="simpleText" fontSize={['14','18' ]}>Основательница школы, преподаватель. Академический руководитель Аспирантской школы по искусству и дизайну НИУ ВШЭ. Кандидат философских наук, доцент, куратор, шеф-редактор журнала «Теория моды: одежда, тело, культура», редактор книжной серии «Библиотека журнала «Теория моды».</Text>
            </VStack>
            </HStack>
        </Box>
        <Box flex={4} bgColor={'#BBE997'} borderRadius="30" maxH={['100%',"380"]} position={"relative"}>
            <HStack flexDirection={['column', 'row-reverse']}>
            <Image src={'/Bakina.svg'} position="relative"  bottom={['','55',"120"]} mr={['', '26']} maxW={['50%','55%','100%']}></Image>
            <VStack maxW={['65%','60%', '50%']} textAlign={['center', 'left']} alignItems="center" mb={['','130']} mr={['','10']}>
                <Text textStyle="smallTitleHeading">Татьяна Бакина</Text>
                <Text textStyle="simpleText" fontSize={['14', '18' ]}>Преподаватель курсов по истории моды, голливудского и жанрового кино в Школе дизайна НИУ ВШЭ, культуролог, исследователь истории моды и кинематографа, автор научных статей по истории костюма в кино.</Text>
            </VStack>
            </HStack>
        </Box>

        
        <VStack></VStack>
        <VStack></VStack>
      </Flex>
    </>
  );
}
