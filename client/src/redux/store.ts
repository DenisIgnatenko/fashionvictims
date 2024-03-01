import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import testsReducer from './slices/testsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    test: testsReducer,
  },
});

export type StoreType = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
