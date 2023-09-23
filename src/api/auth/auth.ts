import { AxiosResponse } from 'axios';

import { axiosInstance } from '../common';

const SIGN_UP_API = '/auth/signup';
const SIGN_IN_API = '/auth/signin';
const EMAIL_VALIDATION_API = '/auth/signup/validation';

type AuthRequest = {
  email: string;
  password: string;
  nickname: string;
};

export type SignUpRequest = AuthRequest;
export type SignInRequest = Omit<AuthRequest, 'nickname'>;
export type ValidationEmailRequest = Omit<AuthRequest, 'nickname' | 'password'>;

export type SignInResponse = {
  result: boolean;
  token: string;
};

// request 접두사 제거
export const requestPostSignUp = ({
  email,
  password,
  nickname,
}: SignUpRequest) =>
  axiosInstance.post(SIGN_UP_API, { email, password, nickname });

export const requestPostSignIn = ({
  email,
  password,
}: SignInRequest): Promise<AxiosResponse<SignInResponse>> =>
  axiosInstance.post(SIGN_IN_API, { email, password });

export const requestPostEmailValidation = ({ email }: ValidationEmailRequest) =>
  axiosInstance.post(EMAIL_VALIDATION_API, { email });
