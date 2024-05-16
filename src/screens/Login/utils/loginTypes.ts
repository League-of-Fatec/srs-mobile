export type ProfessorDetails = {
  car: string;
};

export type StudentDetails = {
  course: string;
  period: string;
  semester: number;
  studentId: string;
};

export type Professor = {
  firstName: string;
  lastName: string;
  userStudent: null;
  userTeacher: ProfessorDetails;
};

export type Student = {
  firstName: string;
  lastName: string;
  userStudent: StudentDetails;
  userTeacher: null;
};
