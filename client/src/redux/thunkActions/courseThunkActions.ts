import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AddCourseType, CourseStyleType, CourseType, PurchasedCourseType, ModuleType, QuestionType } from '../../types/courseType';
import courseService from '../../services/courseService';

export type AddModuleType = Omit<ModuleType, 'id' | 'order' | 'courseId'> & {
id: string | undefined;
article: string;
questions: QuestionType[]
}

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

export const addCourseThunk = createAsyncThunk<{created: CourseType, newStyle: CourseStyleType}, FormData>('addCourse', async (data) => courseService.addCourse(data))
export const addModuleThunk = createAsyncThunk<object, AddModuleType>('addModule', async (data) => courseService.addModule(data))

