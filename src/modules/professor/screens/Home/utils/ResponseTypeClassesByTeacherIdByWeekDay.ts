export type ResponseTypeClassesByTeacherIdByWeekDay =
  ClassesByTeacherIdByWeekDay[];

export type ClassesByTeacherIdByWeekDay = {
  id: number;
  name: string;
  time: string;
  userTeacher: {
    user: {
      lastName: string;
      firstName: string;
    };
  };
  classroom: {
    name: string;
    floor: string;
  };
};
