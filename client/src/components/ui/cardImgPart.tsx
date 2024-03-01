import { Box, Container, Image } from '@chakra-ui/react';
import React from 'react';

export default function CardImgPart(): JSX.Element {
  const image = '/src/public/Group13.png';
  return (
    <Container>
      <Box flex={['none', '1']} mb={[4, 1]}>
        <Image m={10} src={image} />
      </Box>
    </Container>
  );
}
