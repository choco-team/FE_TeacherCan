export type LunchMenus = {
  lunchMenu: LunchMenu[];
};

export type LunchMenu = {
  date: Date;
  menu: {
    name: string;
    allergy: number[];
  }[];
  origin: {
    ingredient: string;
    origin: string;
  }[];
};
