export type LunchMenus = LunchMenu[];

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
