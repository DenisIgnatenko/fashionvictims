import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import courseReducer from './slices/courseSlice';
import quizeReducer from './slices/quizeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    quiz: quizeReducer,
    courses: courseReducer,
  },
});

export type StoreType = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
