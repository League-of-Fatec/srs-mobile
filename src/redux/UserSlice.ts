import User from '@/utils/User';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  user: User | null;
  token: string | null;
};

export const initialState: UserState = {
  user: null,
  token: null,
};

export type PayloadUserAction = {
  user: User;
  //token: string;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<PayloadUserAction>) => {
      state.user = action.payload.user;
      //state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      //state.token = null;
    },
  },
});
