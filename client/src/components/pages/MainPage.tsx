import { Box } from '@chakra-ui/react';
import React from 'react';
import { useAppSelector } from '../../hooks/useReduxHook';
import AuthModal from '../ui/AuthModal';

export default function MainPage(): JSX.Element {
  const modal = useAppSelector((state) => state.auth.authModal)
  return <Box>GreetingsPage
    {modal && <AuthModal />}
  </Box>;
}
