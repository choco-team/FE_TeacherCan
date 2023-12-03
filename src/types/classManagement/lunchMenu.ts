export type LunchMenu = {
  date: string;
  mealType: '중식' | '석식';
  menu: {
    dish: string;
    allergy: number[];
  }[];
  origin: {
    ingredient: string;
    place: string;
  }[];
};
