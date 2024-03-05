import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AllCoursesType, CourseType } from '../../types/courseType';
import { fetchCoursesActionThunk, getPurchasedCourses } from '../thunkActions/courseThunkActions';

const initialState: AllCoursesType = {
  purchasedCourses: [],
  loading: false,
  error: null,
  availableModules: {},
  course: [],
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
  },
});

export const { setPurchasedCourses, setAvailableModules } = courseSlice.actions;
export default courseSlice.reducer;
