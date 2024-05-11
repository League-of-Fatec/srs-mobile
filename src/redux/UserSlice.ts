import User from '@/utils/User';
import { createSlice } from '@reduxjs/toolkit';

export type UserState = {
  user: User | null;
};

export const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
