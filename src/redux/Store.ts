import { configureStore } from '@reduxjs/toolkit';
import { professorSlice, studentSlice } from './UserSlice';

export const store = configureStore({
  reducer: {
    professor: professorSlice.reducer,
    student: studentSlice.reducer,
  },
});
