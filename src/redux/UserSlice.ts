import { Professor, Student } from '@/screens/Login/utils/loginTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  user: Student | Professor | null;
  token: string | null;
};

export const initialState: UserState = {
  user: null,
  token: null,
};

export type PayloadUserAction = {
  user: Student | Professor;
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
