import { createAsyncThunk } from '@reduxjs/toolkit';
import courseService from '../../services/courseService';
import type { CourseType } from '../../types/courseTypes';

export const getPurchasedCourses = createAsyncThunk(
  'course/getPurchasedCourses',
  async (userId: number, { rejectWithValue }) => {
    console.log('getPurchasedCourses: userId:', userId);
    try {
      const response = await courseService.getPurchasedCourses(userId);
      return response.data as CourseType[];
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
