import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import courseReducer from './slices/courseSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
  },
});

export type StoreType = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
