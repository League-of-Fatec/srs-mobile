export type itensSala = {
  qtd: number;
  icon: string;
  nomeItem: string;
};

export type ResponseTypeClassRooms = {
  [key: string]: ClassRoom[];
};

export type ItemsClassRooms = {
  qntd: number;
  type: string;
};

export type ClassRoom = {
  id: number;
  name: string;
  floor: number;
  schoolId: number | null;
  create_at: Date;
  items: ItemsClassRooms[];
};

export type ResponseFavoriteClassroom = {
  data: FavoriteClassroom[];
  error: Error | null | {};
};

export type FavoriteClassroom = {
  id: number;
};
