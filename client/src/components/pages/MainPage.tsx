import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import CourseCard from '../ui/CourseCard';

export default function MainPage(): JSX.Element {
  return (
    <Box mt={10}>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={2}>
        <h1>mainpage</h1>
        <CourseCard />
      </SimpleGrid>
    </Box>
  );
}
