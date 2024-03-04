import { Box, Container, Image } from '@chakra-ui/react';
import React from 'react';

type CardImgPartProp = {
  img: string;
};

export default function CardImgPart({ img }: CardImgPartProp): JSX.Element {
  return (
    <Container>
      <Box flex={['none', '1']} mb={[4, 1]}>
        <Image m={1} src={img} />
      </Box>
    </Container>
  );
}
