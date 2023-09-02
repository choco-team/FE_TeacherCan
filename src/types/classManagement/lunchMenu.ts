export type LunchMenuListRequest = {
  date: string;
  type: 'weekend' | 'day';
};

export type LunchMenu = {
  date: string;
  menu: {
    dish: string;
    allergy: number[];
  }[];
  origin: {
    ingredient: string;
    place: string;
  }[];
};
