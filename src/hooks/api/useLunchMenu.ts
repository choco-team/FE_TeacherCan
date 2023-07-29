import { useEffect, useState } from 'react';

type LunchMenu = {
  statusCode: number;
  data: {
    lunchMenu: { menu: string; allergy: number[] }[];
    origins: { ingredient: string; origin: string }[];
  };
};

const useLunchMenu = () => {
  const [lunchMenu, setLunchMenu] = useState<
    undefined | { menu: string; allergy: number[] }[]
  >();
  const [isLoading, setIsLoading] = useState(false);

  const getLunchMenu = async () => {
    setIsLoading(true);

    const response = await fetch(
      '/school/lunch-menu?areaCode=T10&schoolCode=9290083&date=230706',
    );
    const result = (await response.json()) as LunchMenu;

    setIsLoading(false);
    setLunchMenu(result?.data.lunchMenu);
  };

  useEffect(() => {
    getLunchMenu();
  }, []);

  return { lunchMenu, isLoading };
};

export default useLunchMenu;
