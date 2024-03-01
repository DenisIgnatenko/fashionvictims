import React, { useState } from 'react'
import { Box, Button, Center, FormControl, FormLabel, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, SimpleGrid } from '@chakra-ui/react'


export default function ColorPicker(): JSX.Element {
    const [color, setColor] = useState("#E293B6");

    const colors = [
        "#E293B6",
        "red.500",
        "gray.700",
        "green.500",
        "blue.500",
        "blue.800",
        "yellow.500",
        "orange.500",
        "purple.500",
        "pink.500"
    ];
    return (
        <Center marginTop={5}>
            <Popover variant="picker">
                <PopoverTrigger>
                    <Button
                        // aria-label={color}
                        // background={color}
                        // height="auto"
                        // width="auto"
                        // padding={0}
                        // minWidth="unset"
                        // borderRadius={3}
                        variant="primeVariant"
                        background={color}
                        marginBottom={5}
                    >
                        Выберите цвет курса

                    </Button>
                </PopoverTrigger>
                <PopoverContent width="170px">
                    <PopoverArrow bg={color} />
                    <PopoverCloseButton color="white" />
                    <PopoverHeader
                        height="100px"
                        backgroundColor={color}
                        borderTopLeftRadius={5}
                        borderTopRightRadius={5}
                        color="white"
                    >
                        <Center height="100%">{color}</Center>
                    </PopoverHeader>
                    <PopoverBody height="120px">
                        <SimpleGrid columns={5} spacing={2}>
                            {colors.map((c) => (
                                <Button
                                    key={c}
                                    aria-label={c}
                                    background={c}
                                    height="22px"
                                    width="22px"
                                    padding={0}
                                    minWidth="unset"
                                    borderRadius={3}
                                    _hover={{ background: c }}
                                    onClick={() => {
                                        setColor(c);
                                    }}
                                />
                            ))}
                        </SimpleGrid>
                        <Input
                            borderRadius={3}
                            marginTop={3}
                            placeholder="red.100"
                            size="sm"
                            value={color}
                            onChange={(e) => {
                                setColor(e.target.value);
                            }}
                        />
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Center>)
}
