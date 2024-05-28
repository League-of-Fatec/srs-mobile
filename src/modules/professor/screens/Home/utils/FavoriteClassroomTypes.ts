import { ItemsClassRooms } from '../../Salas/types/ClassroomTypes';

export type ResponseJsonFavoriteClassrooms = [
  {
    id: number;
    classroom: {
      id: number;
      name: string;
      schoolId: number;
      created_at: string;
      floor: string;
      items: ItemsClassRooms[];
    };
  },
];
