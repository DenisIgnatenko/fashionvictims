import { Box, Input } from '@chakra-ui/react';
import React from 'react';

export default function CourseSearch(): JSX.Element {
  return (
    <Box>
      <Input placeholder="поиск курсов и модулей" mb={4} />
    </Box>
  );
}
