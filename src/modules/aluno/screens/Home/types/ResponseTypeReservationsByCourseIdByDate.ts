export type ResponseTypeReservationsByCourseIdByDate = {
  id: number;
  start_time: string;
  end_time: string;
  class: {
    name: string;
    course: {
      name: string;
    };
  };
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
