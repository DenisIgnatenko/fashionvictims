import { AspectRatio, Box } from '@chakra-ui/react';
import React from 'react';

type VideoPlayerProps = {
  videoURL: string;
};

export default function VideoPlayer({ videoURL }: VideoPlayerProps): JSX.Element {
  console.log(videoURL);
  return (
    <Box mt={10} mb={10} borderRadius="16px" overflow="hidden" boxShadow="xl">
      {videoURL !== '/' ? (
        <AspectRatio maxW="100%" ratio={16 / 9}>
          <iframe title="embeddedvideo" src={videoURL} allowFullScreen />
        </AspectRatio>
      ) : (
        <p />
      )}
    </Box>
  );
}
