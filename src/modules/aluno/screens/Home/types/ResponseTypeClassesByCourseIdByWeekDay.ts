export type ResponseTypeClassesByCourseIdByWeekDay = {
  id: number;
  name: string;
  time: string;
  weekday: number;
  userTeacher: {
    id: number;
    user: {
      lastName: string;
      firstName: string;
    };
  };
  classroom: {
    id: number;
    name: string;
    floor: string;
  };
};
