import { AspectRatio, Box } from '@chakra-ui/react';
import React from 'react';

export default function VideoPlayer({ videoURL }: string): JSX.Element {
  return (
    <Box mt={10} mb={10} borderRadius="16px" overflow="hidden" boxShadow="xl">
      <AspectRatio maxW="100%" ratio={16 / 9}>
        <iframe title="naruto" src={videoURL} allowFullScreen />
      </AspectRatio>
    </Box>
  );
}
