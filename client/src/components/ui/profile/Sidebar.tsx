import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHook';
import { getPurchasedCourses } from '../../../redux/thunkActions/courseThunkActions';

export default function Sidebar({ onSelectModule }): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const purchasedCourses = useAppSelector((state) => state.courses.purchasedCourses);

  useEffect(() => {
    void dispatch(getPurchasedCourses(user?.id));
  }, [dispatch, user?.id]);

  return (
    <Accordion allowMultiple>
      {purchasedCourses?.map((course) => (
        <AccordionItem key={course.id}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {course.title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            {course.modules &&
              course.modules.map((module, index) => (
                <VStack alignItems="flex-start">
                  <Box as="button" onClick={() => onSelectModule(module)} key={index}>
                    {module.name}
                  </Box>
                </VStack>
              ))}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
