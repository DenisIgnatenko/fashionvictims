import { Container } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/useReduxHook';
import NavBar from './ui/NavBar';

export default function Root(): JSX.Element {
  const status = useAppSelector((state) => state.auth.user.status);
  return (
    <Container maxW="container.xl">
      {' '}
      <NavBar />
      <Outlet />
    </Container>
  );
}
