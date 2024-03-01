import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TestsInitialStateType, TestType } from '../../types/testsType';

const initialState: TestsInitialStateType = {
  tests: [],
  selected: null,
  testLoading: false,
  openTest: null,
};

const testSlice = createSlice({
  name: 'test',
  initialState,

  reducers: {
    setOpenTest: (state, action: PayloadAction<TestType | null>) => {
      state.openTest = action.payload;
    },
  },
});

export const { setOpenTest } = testSlice.actions;
export default testSlice.reducer;
