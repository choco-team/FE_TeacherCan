import { AxiosResponse } from 'axios';

import {
  LunchMenu,
  LunchMenuListRequest,
} from '@Types/classManagement/lunchMenu';

import { axiosInstance, headerToken, queryParams } from '../common';

const LUNCH_MENU_API = '/school/lunch-menu';

export const getLunchMenuList = ({
  date,
  type,
}: LunchMenuListRequest): Promise<AxiosResponse<LunchMenu[]>> =>
  axiosInstance.get(LUNCH_MENU_API, {
    ...queryParams({
      date,
      type,
    }),
    ...headerToken(),
  });
