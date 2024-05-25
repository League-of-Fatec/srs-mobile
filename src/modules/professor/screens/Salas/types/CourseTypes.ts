export type Course = {
  courseId: number;
  course: {
    id: number;
    name: string;
  };
};

export type ResponseTypeCourses = Course[];
