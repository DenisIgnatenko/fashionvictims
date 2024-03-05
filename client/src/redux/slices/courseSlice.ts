import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CourseType } from '../../types/courseTypes';
import { getPurchasedCourses } from '../thunkActions/courseThunkActions';

const initialState = {
  purchasedCourses: [],
  loading: false,
  error: null,
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setPurchasedCourses: (state, action: PayloadAction<CourseType[]>) => {
      state.purchasedCourses = action.payload;
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
  },
});

export default courseSlice.reducer;
