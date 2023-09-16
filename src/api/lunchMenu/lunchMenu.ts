import { AxiosResponse } from 'axios';

import { axiosInstance, headerToken, queryParams } from '../common';

const LUNCH_MENU_API = '/school/lunch-menu';

export type LunchMenuListRequest = {
  date: string;
  type: 'weekend' | 'day';
};

export type LunchMenuResponse = {
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

export const getLunchMenuList = ({
  date,
  type,
}: LunchMenuListRequest): Promise<AxiosResponse<LunchMenuResponse[]>> =>
  axiosInstance.get(LUNCH_MENU_API, {
    ...queryParams({
      date,
      type,
    }),
    ...headerToken(),
  });
