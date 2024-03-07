import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHook';
import { setOpenTest } from '../../../redux/slices/quizeSlice';
import type { ModuleType } from '../../../types/courseType';
import TestDialogueModal from '../TestDialogueModal';
import VideoPlayer from './VideoPlayer';

export default function ModuleContent({ module }: { module: ModuleType }): JSX.Element {
  const dispatch = useAppDispatch();
  const openTest = useAppSelector((state) => state.quiz.openTest);

  console.log(module);
  return (
    <Box flex="1" p={5}>
      <Heading size="lg" textStyle="customHeading" mb={5}>
        {module.name}
      </Heading>
      <VideoPlayer videoURL={module.videoURL} />
      <Text textStyle="heroSimpleText" dangerouslySetInnerHTML={{ __html: module.article }} />
      <Button variant="primeVariant" onClick={() => void dispatch(setOpenTest(true))} mt={10}>
        Пройти тестирование
      </Button>
      {openTest && <TestDialogueModal moduleId={module.id} />}
    </Box>
  );
}
