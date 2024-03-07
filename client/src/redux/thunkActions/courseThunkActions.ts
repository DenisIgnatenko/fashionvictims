import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AddCourseType, CourseType, PurchasedCourseType } from '../../types/courseType';
import courseService from '../../services/courseService';

export const getPurchasedCourses = createAsyncThunk(
  'course/getPurchasedCourses',
  async (userId: number) => {
    console.log('getPurchasedCourses: userId:', userId);
    try {
      const response = await courseService.getPurchasedCourses(userId);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
);
export const addPurchasedCourseThunk = createAsyncThunk<PurchasedCourseType, {userId:number, courseId:number}>(
  'course/addPurchasedCourse', async (data)=> courseService.addPurchasedCourse(data))


export const fetchCoursesActionThunk = createAsyncThunk<CourseType[]>(
  'courses/fetchCourses',
  async () => courseService.getCourses(),
);

export const addCourseThunk = createAsyncThunk<CourseType, FormData>('addCourse', async (data) => courseService.addCourse(data))