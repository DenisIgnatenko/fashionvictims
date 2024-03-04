import { createAsyncThunk } from '@reduxjs/toolkit';
import { CourseType } from '../../types/courseType';
import courseService from '../../services/courseService';


export const fetchCoursesActionThunk = createAsyncThunk<CourseType[]>('courses/fetchCourses', async () => 
  courseService.getCourses()
);