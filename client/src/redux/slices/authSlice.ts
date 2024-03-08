import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AuthStateType } from '../../types/authType';
import { checkTokenThunk, logOutThunk, signInThunk, signUpThunk } from '../thunkActions/authThunkActions';

const initialState: AuthStateType = {
  accessToken: '',
  user: { status: 'pending' },
  authModal: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<boolean>) => {
      state.authModal = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(checkTokenThunk.fulfilled, (state, action) => {
      const { accessToken, user } = action.payload;
      state.accessToken = accessToken;
      state.user.status = 'logged';
      state.user = { ...user, ...state.user };
    });
    builder.addCase(checkTokenThunk.pending, (state, action) => {
      state.user.status = 'pending';
    });
    builder.addCase(checkTokenThunk.rejected, (state, action) => {
      state.accessToken = '';
      state.user.status = 'guest';
    });

    builder.addCase(signInThunk.fulfilled, (state, action) => {
      const { accessToken, user } = action.payload;
      state.accessToken = accessToken;
      state.user.status = 'logged';
      state.user = { ...user, ...state.user };
    });
    builder.addCase(signUpThunk.fulfilled, (state, action) => {
      const { accessToken, user } = action.payload;
      state.accessToken = accessToken;
      state.user.status = 'logged';
      state.user = { ...user, ...state.user };
    });

    builder.addCase(logOutThunk.fulfilled, (state, action) => {
      state.accessToken = '';
      state.user.status = 'guest'
    })

    builder.addMatcher(
      (action: { type: string }) =>
        action.type.startsWith('auth/') && action.type.endsWith('/pending'),
      (state) => {
        state.user.status = 'pending';
      },
    );

    builder.addMatcher(
      (action: { type: string }) =>
        action.type.startsWith('auth/') && action.type.endsWith('/rejected'),
      (state) => {
        state.user.status = 'guest';
      },
    );
  },
});

export const { setModal } = authSlice.actions;

export default authSlice.reducer;
