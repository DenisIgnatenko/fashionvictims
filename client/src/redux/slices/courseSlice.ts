import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { AllCoursesType } from '../../types/courseType';
import { fetchCoursesActionThunk } from '../thunkActions/courseThunkActions';

const initialState: AllCoursesType = {
  course: [],
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCoursesActionThunk.fulfilled, (state, action) => {
      state.course = action.payload;
    });
  },
});
export default courseSlice.reducer;
