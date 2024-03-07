import { createAsyncThunk } from '@reduxjs/toolkit';
import QuizService from '../../services/quizService';
import type { QuizResultType } from '../../types/quizType';

export type SaveQuizResultArgType = {
  userId: number;
  moduleId: number;
  score: number;
};

export type QuizResultResponseType = {
  success: boolean;
  moduleId: number;
  score: number;
  nextModuleId?: number | null;
};

export const getQuizzesByModuleId = createAsyncThunk(
  'quiz/getByModuleId',
  async (moduleId: number) => {
    try {
      const response = await QuizService.getQuizzes(moduleId);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const saveQuizResult = createAsyncThunk(
  'quiz/saveResult',
  async (args: SaveQuizResultArgType, { getState }) => {
    const { userId, moduleId, score } = args;
    try {
      const response = await QuizService.saveQuizResult(userId, moduleId, score);

      const quizResultData: QuizResultResponseType = response.data as QuizResultResponseType;
      const state = getState();
      const purchasedCourses = state.courses.purchasedCourses;

      console.log('response.data: ', response.data);
      const course = purchasedCourses.find((course) =>
        course.modules.some((module) => module.id === moduleId),
      );
      if (!course) {
        return console.log('Course not found');
      }
      const moduleIndex = course.modules.findIndex((module) => module.id === moduleId);
      const nextModule = course.modules[moduleIndex + 1];

      console.log('RESPONSE DATA2: ', quizResultData, 'NextModule: ', nextModule.id);
      return {
        ...quizResultData,
        nextModuleId: nextModule ? nextModule.id : null,
      };
    } catch (error) {
      return console.log(error);
    }
  },
);

export const getQuizResultsByUserId = createAsyncThunk(
  'quiz/getResultsByUserId',
  async (userId: number) => {
    try {
      const response = await QuizService.getQuizResultsByUserId(userId);
      return response.data as QuizResultType;
    } catch (error) {
      console.log(error);
    }
  },
);
