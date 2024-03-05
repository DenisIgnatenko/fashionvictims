import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import type { ModuleType } from '../../../types/courseTypes';
import VideoPlayer from './VideoPlayer';

export default function ModuleContent(module: ModuleType): JSX.Element {
  if (!module)
    return (
      <Box flex="1" p={5}>
        Выберите модуль
      </Box>
    );

  return (
    <Box flex="1" p={5}>
      <Heading size="lg" textStyle={'customHeading'} mb={5}>
        {module.name}
      </Heading>
      <VideoPlayer videoUrl={module.videoURL} />
      <Text textStyle="heroSimpleText" dangerouslySetInnerHTML={{ __html: module.article }} />
    </Box>
  );
}
