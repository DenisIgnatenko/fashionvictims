import { createAsyncThunk } from '@reduxjs/toolkit';
import QuizService from '../../services/quizService';

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
  async ({ userId, moduleId, score }, { rejectWithValue }) => {
    try {
      const response = await QuizService.saveQuizResult(userId, moduleId, score);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
