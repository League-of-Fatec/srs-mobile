export type Course = {
  id: number;
  name: string;
  schoolId: number;
  period: string;
  created_at: string;
};

export type ResponseTypeCourses = Course[];
