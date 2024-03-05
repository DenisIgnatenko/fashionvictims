import { createAsyncThunk } from '@reduxjs/toolkit';
import courseService from '../../services/courseService';
import type { CourseType } from '../../types/courseType';

export const getPurchasedCourses = createAsyncThunk(
  'course/getPurchasedCourses',
  async (userId: number) => {
    console.log('getPurchasedCourses: userId:', userId);
    try {
      const response = await courseService.getPurchasedCourses(userId);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const fetchCoursesActionThunk = createAsyncThunk<CourseType[]>(
  'courses/fetchCourses',
  async () => courseService.getCourses(),
);
