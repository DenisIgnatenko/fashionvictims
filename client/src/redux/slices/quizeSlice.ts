import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { QuizResultType, QuizStateType, QuizType } from '../../types/quizType';
import {
  getQuizResultsByUserId,
  getQuizzesByModuleId,
  saveQuizResult,
} from '../thunkActions/quizThunkActions';

const initialState: QuizStateType = {
  questions: [],
  quizResults: [],
  error: null,
  loading: false,
  selectedQuiz: null,
  openTest: false,
};

const quizeSlice = createSlice({
  name: 'quiz',
  initialState,

  reducers: {
    setOpenTest: (state, action: PayloadAction<boolean>) => {
      state.openTest = action.payload;
    },

    setSelectedQuiz: (state, action: PayloadAction<QuizType | null>) => {
      state.selectedQuiz = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getQuizzesByModuleId.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getQuizzesByModuleId.fulfilled, (state, action: PayloadAction<QuizType[]>) => {
      state.questions = action.payload;
      state.loading = false;
    });
    builder.addCase(getQuizzesByModuleId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(
      getQuizResultsByUserId.fulfilled,
      (state, action: PayloadAction<QuizResultType[]>) => {
        console.log('action.payload: ', action.payload);
        state.quizResults = action.payload;
      },
    );
    builder.addCase(saveQuizResult.fulfilled, (state, action) => {});
    builder.addCase(saveQuizResult.rejected, (state, action): void => {});
    builder.addCase(saveQuizResult.pending, (state) => {});
  },
});

export const { setOpenTest } = quizeSlice.actions;
export default quizeSlice.reducer;
