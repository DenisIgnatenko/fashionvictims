import { Box } from '@chakra-ui/react';
import React from 'react';
<<<<<<< HEAD
import CourseCard from '../ui/CourseCard';

export default function MainPage(): JSX.Element {
  return (
    <>
    <CourseCard/>
    </>


  );
=======
import { useAppSelector } from '../../hooks/useReduxHook';
import AuthModal from '../ui/AuthModal';

export default function MainPage(): JSX.Element {
  const modal = useAppSelector((state) => state.auth.authModal)
  return <Box>GreetingsPage
    {modal && <AuthModal />}
  </Box>;
>>>>>>> feae10dd31c33cc7d7fd266761238070ff1f0c84
}
