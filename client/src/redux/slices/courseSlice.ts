import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AllCoursesType, CourseType } from '../../types/courseType';
import {
  addPurchasedCourseThunk,
  fetchCoursesActionThunk,
  getPurchasedCourses,
} from '../thunkActions/courseThunkActions';
import { saveQuizResult } from '../thunkActions/quizThunkActions';

const initialState: AllCoursesType = {
  purchasedCourses: [],
  loading: false,
  error: null,
  availableModules: {},
  course: [],
  openPaymentModal: false,
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setPurchasedCourses: (state, action: PayloadAction<CourseType[]>) => {
      state.purchasedCourses = action.payload;
    },
    setAvailableModules: (state, action: PayloadAction<Record<number, boolean>>) => {
      state.availableModules = action.payload;
    },

    setOpenPaymentModal: (state, action: PayloadAction<boolean>) => {
      state.openPaymentModal = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getPurchasedCourses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPurchasedCourses.fulfilled, (state, action) => {
      state.loading = false;
      state.purchasedCourses = action.payload;
    });
    builder.addCase(getPurchasedCourses.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchCoursesActionThunk.fulfilled, (state, action) => {
      state.course = action.payload;
    });
    builder.addCase(saveQuizResult.pending, (state) => {
      state.loading = true;
      console.log('Pending, state: ', state);
    });
    builder.addCase(saveQuizResult.fulfilled, (state, action) => {
      const nextModuleId = action.payload.nextModuleId;
      console.log('nextModuleId: ', nextModuleId);
      if (nextModuleId && !state.availableModules[nextModuleId]) {
        state.availableModules[nextModuleId] = true;
        console.log('state.availableModules: ', state.availableModules);
      }
    });
    builder.addCase(addPurchasedCourseThunk.fulfilled, (state, action) => {});
  },
});


export const { setPurchasedCourses, setAvailableModules, setOpenPaymentModal} = courseSlice.actions;
export default courseSlice.reducer;
