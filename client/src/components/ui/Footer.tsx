import { Avatar, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <Flex
      backgroundColor="#4D6877"
      flexDirection={['column', 'row']}
      justifyContent="space-around"
      alignItems="center"
      paddingY={4}
      width="100%"
      maxWidth="100vw"
      borderRadius="0px 0px 30px 30px"
      bottom={0}
      left={0}
    >
      <Stack>
        <Avatar src="/teleg.svg" />
      </Stack>
      <Text color={'#FFFFFF'} fontSize={['12px', '14px', '16px', '18px']} id='contacts'>
        victims@gmail.com
      </Text>
      <Text color={'#FFFFFF'} fontSize={['12px', '14px', '16px', '18px']}>
        Жертвы (теории) Моды © 2024
      </Text>
    </Flex>
  );
}
