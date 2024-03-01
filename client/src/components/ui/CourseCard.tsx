import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import CardImgPart from './cardImgPart';
import CardContentPart from './cardContentPart';
import { CourseType } from '../../types/courseType';
import { useAppSelector } from '../../hooks/useReduxHook';

type CourseCardType = {
  index: number;
  courseId: CourseType;
};

export default function CourseCard({ index }: CourseCardType): JSX.Element {
  const backColor = '#B9DAF9';



  return (
    <Box backgroundColor={backColor} borderRadius={30} p={6} h="100%">
      <Flex
        h="100%"
        direction={['column', 'row']}
        justifyContent={['center', 'space-between']}
        alignItems={['center', 'stretch']}
      >
        {index % 2 === 0 ? (
          <>
            <CardImgPart />
            <CardContentPart courseId={1}  />
          </>
        ) : (
          <>
            <CardContentPart courseId={1}  />
            <CardImgPart />
          </>
        )}
      </Flex>
    </Box>
  );
}
