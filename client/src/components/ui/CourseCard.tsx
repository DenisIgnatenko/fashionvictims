import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { CourseType } from '../../types/courseType';
import CardContentPart from './cardContentPart';
import CardImgPart from './cardImgPart';

type CourseCardType = {
  index: number;
  courseId: number;
  course: CourseType;
};

export default function CourseCard({ index, courseId, course }: CourseCardType): JSX.Element {
  return (
    <Box bgColor={course.CourseStyle?.bgColor} borderRadius={30} p={6} h="100%">
      <Flex
        h="100%"
        direction={['column', 'row']}
        justifyContent={['center', 'space-between']}
        alignItems={['center', 'stretch']}
      >
        {index % 2 === 0 ? (
          <>
            <CardImgPart img={course?.CourseStyle.img} />
            <CardContentPart courseId={courseId} />
          </>
        ) : (
          <>
            <CardContentPart courseId={courseId} />
            <CardImgPart img={course?.CourseStyle.img} />
          </>
        )}
      </Flex>
    </Box>
  );
}
