import { AxiosResponse } from 'axios';

import { UserInfo } from '@Types/user';

import { axiosInstance, headerToken } from '@Api/common';

const USER_URL = '/user/info';

export type PutUpdateUserRequest = Record<string, unknown>;

type UserResponse = UserInfo;

export const requestGetUser = (): Promise<AxiosResponse<UserResponse>> =>
  axiosInstance.get(USER_URL, {
    ...headerToken(),
  });

export const requestPutUpdateUser = (
  updateFiled: PutUpdateUserRequest,
): Promise<AxiosResponse<UserResponse>> =>
  axiosInstance.put(USER_URL, updateFiled, headerToken());
