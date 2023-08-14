/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';

import { useUserInfo } from '@Hooks/useUserInfo';

import { LunchMenu, LunchMenus } from '@Types/lunchMenu';

const useLunchMenu = (date: Date, type: 'weekend' | 'day') => {
  const { data } = useUserInfo();
  const [isLoading, setIsLoading] = useState(true);
  const [lunchMenu, setLunchMenu] = useState<LunchMenu[] | null>(null);

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

      const { lunchMenu } = (await response.json()) as LunchMenus;
      setLunchMenu(lunchMenu);
      setIsLoading(false);
    },
    [date, type],
  );

  useEffect(() => {
    if (!data) return;

    if (!data.school) {
      setIsLoading(false);
      return;
    }

    const { areaCode, code } = data.school;
    fetchLunchMenu(areaCode, code);
  }, [data, date]);

  return { lunchMenu, isLoading };
};

export default useLunchMenu;
