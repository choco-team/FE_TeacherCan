import { AxiosResponse } from 'axios';

import { UserInfo } from '@Types/user';

import { axiosInstance, headerToken } from '@Api/common';

const USER_URL = '/user/info';

export type PutUpdateUserRequest = Record<string, unknown>;

type UserResponse = {
  result: boolean;
  code: number;
  message: string;
  data: UserInfo;
};

export const getUser = (): Promise<AxiosResponse<UserResponse>> =>
  axiosInstance.get(USER_URL, {
    ...headerToken(),
  });

export const putUpdateUser = (
  updateFiled: PutUpdateUserRequest,
): Promise<AxiosResponse<UserResponse>> =>
  axiosInstance.put(USER_URL, updateFiled, headerToken());
