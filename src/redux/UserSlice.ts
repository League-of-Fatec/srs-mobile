import { Professor, Student } from '@/screens/Login/utils/loginTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProfessorState = {
  professor: Professor | null;
  token: string | null;
};

export const initialProfessorState: ProfessorState = {
  professor: null,
  token: null,
};

export type StudentState = {
  student: Student | null;
  token: string | null;
};

export const initialStudentState: StudentState = {
  student: null,
  token: null,
};

export type PayloadProfessorAction = {
  professor: Professor;
};

export type PayloadStudentAction = {
  student: Student;
};

export const professorSlice = createSlice({
  name: 'professor',
  initialState: initialProfessorState,
  reducers: {
    login: (state, action: PayloadAction<PayloadProfessorAction>) => {
      state.professor = action.payload.professor;
    },
    logout: (state) => {
      state.professor = null;
    },
  },
});

export const studentSlice = createSlice({
  name: 'student',
  initialState: initialStudentState,
  reducers: {
    login: (state, action: PayloadAction<PayloadStudentAction>) => {
      state.student = action.payload.student;
    },
    logout: (state) => {
      state.student = null;
    },
  },
});
