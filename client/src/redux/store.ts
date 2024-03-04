import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import courseReducer from './slices/courseSlice';
import testsReducer from './slices/testsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
    test: testsReducer,
  },
});

export type StoreType = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
