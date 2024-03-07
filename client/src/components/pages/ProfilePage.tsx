import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Collapse, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useAppSelector } from '../../hooks/useReduxHook';
import type { ModuleType } from '../../types/courseType';
import CourseSearch from '../ui/profile/CourseSearch';
import ModuleContent from '../ui/profile/ModuleContent';
import Sidebar from '../ui/profile/Sidebar';
import { useParams } from 'react-router-dom';
import { WiSnow } from 'react-icons/wi';

export default function ProfilePage(): JSX.Element {
  const { user } = useAppSelector((state) => state.auth);
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
  const [selectedModule, setSelectedModule] = useState<ModuleType | null>(null);

  console.log(user);
  const selectModule = (module: ModuleType): void => {
    setSelectedModule(module);
  };
  return (
    <Flex h="100vh" p={5} overflow="hidden" position="relative" bg="#4D6877">
      {/* <Slide direction="left" in={isOpen}> */}
      <Flex>
        <Collapse in={isOpen} animateOpacity>
          {isOpen && (
            <Box
              minW="350px"
              minH="80%"
              bg="#FFF0F7"
              p={5}
              m={4}
              boxShadow="xl"
              borderRadius="16px"
              position="relative"
            >
              <CourseSearch />
              <Sidebar onSelectModule={selectModule} />
            </Box>
          )}
        </Collapse>
      </Flex>
      {/* <ModuleContent /> */}
      {selectedModule && <ModuleContent module={selectedModule} />}
      <IconButton
        aria-label="Toggle Menu"
        icon={isOpen ? <ArrowBackIcon /> : <ArrowForwardIcon />}
        onClick={onToggle}
        position="absolute"
        size="sm"
        top="0rem"
        left="2.5rem"
        zIndex={10}
      />
    </Flex>
  );
}
