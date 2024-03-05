import { createAsyncThunk } from '@reduxjs/toolkit';
import QuizService from '../../services/quizService';

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
  async (moduleId: number, { rejectWithValue }) => {
    try {
      const response = await QuizService.getQuizzes(moduleId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const saveQuizResult = createAsyncThunk(
  'quiz/saveResult',
  async (args: SaveQuizResultArgType, { rejectWithValue }) => {
    try {
      const { userId, moduleId, score } = args;
      const response = await QuizService.saveQuizResult(userId, moduleId, score);
      return response.data as QuizResultResponseType;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
