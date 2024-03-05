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
  async (args: SaveQuizResultArgType) => {
    try {
      const { userId, moduleId, score } = args;
      const response = await QuizService.saveQuizResult(userId, moduleId, score);
      return response.data as QuizResultResponseType;
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
