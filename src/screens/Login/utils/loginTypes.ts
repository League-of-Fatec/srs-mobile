export type User = {
  firstName: string;
  lastName: string;
};

export type Professor = {
  id: number;
  teacherId: string;
  user: User;
};

export type Student = {
  id: number;
  studentId: string;
  course: {
    id: number;
    name: string;
  };
  semester: number;
  period: string;
  user: User;
};
