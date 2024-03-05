import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AddCourseType, CourseType } from '../../types/courseType';
import courseService from '../../services/courseService';


export const fetchCoursesActionThunk = createAsyncThunk<CourseType[]>('courses/fetchCourses', async () => 
  courseService.getCourses()
);

export const addCourseThunk = createAsyncThunk<CourseType, FormData>('addCourse', async (data) => courseService.addCourse(data))