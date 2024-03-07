import { Stack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import CourseCard from '../ui/CourseCard';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { fetchCoursesActionThunk } from '../../redux/thunkActions/courseThunkActions';

export default function CoursesPage():JSX.Element {
    const courses = useAppSelector((state) => state.courses.course);
    const dispatch = useAppDispatch();

    useEffect(() => {
      void dispatch(fetchCoursesActionThunk());
    }, []);
  
  return (
    
    <Stack spacing={5}>
        {courses.map((course, index) => (
          <CourseCard key={course.id} index={index} courseId={course.id} course={course} />
        ))}
      </Stack>
  )
}
