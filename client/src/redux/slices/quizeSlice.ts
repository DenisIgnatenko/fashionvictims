import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { QuizStateType, QuizType } from '../../types/quizType';
import { getQuizzesByModuleId, saveQuizResult } from '../thunkActions/quizThunkActions';

const initialState: QuizStateType = {
  questions: [],
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
    builder
      .addCase(getQuizzesByModuleId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getQuizzesByModuleId.fulfilled, (state, action: PayloadAction<QuizType[]>) => {
        state.questions = action.payload;
        state.loading = false;
      })
      .addCase(getQuizzesByModuleId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(saveQuizResult.fulfilled, (state, action: PayloadAction<QuizType>) => {})
      .addCase(saveQuizResult.rejected, (state, action) => {})
      .addCase(saveQuizResult.pending, (state) => {});
  },
});

export const { setOpenTest } = quizeSlice.actions;
export default quizeSlice.reducer;
