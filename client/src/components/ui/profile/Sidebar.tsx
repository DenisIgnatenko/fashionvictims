import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHook';
import { setAvailableModules } from '../../../redux/slices/courseSlice';
import { getPurchasedCourses } from '../../../redux/thunkActions/courseThunkActions';
import { getQuizResultsByUserId } from '../../../redux/thunkActions/quizThunkActions';
import type { CourseType, ModuleType } from '../../../types/courseType';

type SidebarPropsType = {
  onSelectModule: (module: ModuleType) => void;
};
export default function Sidebar({ onSelectModule }: SidebarPropsType): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const purchasedCourses = useAppSelector((state) => state.courses.purchasedCourses);
  const quizResults = useAppSelector((state) => state.quiz.quizResults);
  const availableModules = useAppSelector((state) => state.courses.availableModules);
  const [searchRequest, setSearchRequest] = useState('');

  useEffect(() => {
    if (user.status === 'logged') {
      void dispatch(getPurchasedCourses(user.id));
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (user.status === 'logged') void dispatch(getQuizResultsByUserId(user.id));
  }, [dispatch, user]);

  useEffect(() => {
    const newAvailableModules = {};

    purchasedCourses.forEach((course) => {
      const firstModule = course.modules.find((module) => module.order === 1);
      if (firstModule) {
        newAvailableModules[firstModule.id] = true;
      }

      const passedModules = quizResults
        .filter(
          (result) =>
            result.score >= 80 && course.modules.some((module) => module.id === result.moduleId),
        )
        .map((result) => course.modules.find((module) => module.id === result.moduleId))
        .sort((a, b) => b.order - a.order);

      if (passedModules.length > 0) {
        const nextModuleOrder = passedModules[0].order + 1;
        const nextModule = course.modules.find((module) => module.order === nextModuleOrder);
        if (nextModule) {
          newAvailableModules[nextModule.id] = true;
        }
      }
    });

    dispatch(setAvailableModules(newAvailableModules));
  }, [quizResults, purchasedCourses, dispatch]);

  // const availableModules: Record<number, boolean> = {};

  // purchasedCourses.forEach((course) => {
  //   const firstModule = course.modules.find((module) => module.order === 1);
  //   if (firstModule) {
  //     availableModules[firstModule.id] = true;
  //   }
  // });
  //
  // console.log('availableModules:', availableModules);
  // quizResults.forEach((result) => {
  //   availableModules[result.moduleId] = true;
  // });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchRequest(e.target.value);
  };

  const filteredCourses = purchasedCourses?.filter((course: CourseType) => {
    return (
      course.title.toLowerCase().includes(searchRequest.toLowerCase()) ||
      course.modules?.some((module: ModuleType) =>
        module.name.toLowerCase().includes(searchRequest.toLowerCase()),
      )
    );
  });

  return (
    <Box>
      <Input
        placeholder="поиск курсов и модулей"
        mb={4}
        value={searchRequest}
        onChange={handleSearchChange}
      />
      <Accordion allowMultiple>
        {filteredCourses?.map((course: CourseType) => (
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
                  <VStack alignItems="flex-start" key={module.id}>
                    <Box
                      as="button"
                      onClick={() => onSelectModule(module)}
                      key={index}
                      borderRadius="md"
                      px={4}
                      h={8}
                      _hover={{ bg: availableModules[module.id] ? '#B3B9BD' : 'none' }}
                      style={{
                        cursor: availableModules[module.id] ? 'pointer' : 'default',
                        opacity: availableModules[module.id] ? 1 : 0.5,
                      }}
                    >
                      {module.name}
                    </Box>
                  </VStack>
                ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}
