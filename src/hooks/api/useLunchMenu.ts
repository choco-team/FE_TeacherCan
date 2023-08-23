/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';

import useUserInfo from '@Hooks/useUserInfo';

import { LunchMenu, LunchMenus } from '@Types/classManagement/lunchMenu';

const useLunchMenu = (date: Date, type: 'weekend' | 'day') => {
  const { userInfo } = useUserInfo();
  const [isLoading, setIsLoading] = useState(true);
  const [lunchMenu, setLunchMenu] = useState<LunchMenu[] | null>(null);

  const getOrigins = () => {
    if (!lunchMenu) return null;

    const originsMap = new Map();
    lunchMenu
      .flatMap((item) => item.origin)
      .forEach(({ ingredient, place }) => {
        originsMap.set(ingredient, place);
      });

    const originsObject = Object.fromEntries(originsMap.entries());

    return Object.entries<string>(originsObject);
  };

  const fetchLunchMenu = useCallback(
    async (areaCode: string, code: string) => {
      setIsLoading(true);

      const token = localStorage.getItem('token');

      const response = await fetch(
        `/school/lunch-menu?areaCode=${areaCode}&schoolCode=${code}&date=${date}&type=${type}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = (await response.json()) as LunchMenus;

      setLunchMenu(data.lunchMenu);
      setIsLoading(false);
    },
    [date, type],
  );

  useEffect(() => {
    if (!userInfo) return;

    if (!userInfo.school) {
      setIsLoading(false);
      return;
    }

    const { areaCode, code } = userInfo.school;
    fetchLunchMenu(areaCode, code);
  }, [userInfo, date]);

  return { lunchMenu, origins: getOrigins(), isLoading };
};

export default useLunchMenu;
