import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Root(): JSX.Element {
  return (
    <Flex minH="100vh" alignItems="flex-start" justifyContent="center">
      <Container maxW="container.xl">
        {' '}
        {/* <NavBar /> */}
        <Outlet />
        {/* <Footer /> */}
      </Container>
    </Flex>
  );
}
