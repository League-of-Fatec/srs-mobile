export type ResponseReservation = {
  id: number;
  start_time: string;
  end_time: string;
  classroom: {
    name: string;
    floor: string;
  };
  class: {
    name: string;
    course: {
      name: string;
    };
  };
};

export type ResponseReservationsJson = ResponseReservation[];
