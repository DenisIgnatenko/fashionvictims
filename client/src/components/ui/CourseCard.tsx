import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import CardImgPart from './cardImgPart';
import CardContentPart from './cardContentPart';

type CourseCardType = {
  index: number;
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
            <CardContentPart />
          </>
        ) : (
          <>
            <CardContentPart />
            <CardImgPart />
          </>
        )}
      </Flex>
    </Box>
  );
}
