export type ResponseTypeClasses = Class[];

export type Class = {
  id: number;
  name: string;
  period: string;
  teacherId: number;
  schoolId: number;
  courseId: number;
  time: string;
  weekday: number;
  created_at: string;
  duration: number;
};
