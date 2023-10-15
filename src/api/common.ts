import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

const BASE_URL = 'https://teachercan.ssambox.com/api';
const LOCAL_URL = 'http://localhost:3000/api';

export type ResponseAPIError = {
  code: number;
  message: string;
};

export class APIError extends Error {
  code: number;
  config: InternalAxiosRequestConfig;

  constructor(
    code: number,
    message: string,
    config: InternalAxiosRequestConfig,
  ) {
    super(message);

    this.name = 'API Error';
    this.code = code;
    this.config = config;
  }
}

class UnknownError extends Error {
  config: InternalAxiosRequestConfig;

  constructor(config: InternalAxiosRequestConfig) {
    super(
      '서버에서 에러가 생겼어요. 잠시 후 다시 시도해주세요. 계속해서 같은 에러가 발생하면 티처캔으로 알려주세요.',
    );

    this.name = 'Unknown Error';
    this.config = config;
  }
}

const isResponseAPIError = (data: object): data is ResponseAPIError => {
  return 'code' in data && data.code !== 2000;
};

export const axiosInstance = axios.create({
  baseURL: `${process.env.NODE_ENV === 'development' ? LOCAL_URL : BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (!error.response || !error.response.data) return;

    if (isResponseAPIError(error.response.data)) {
      const { code, message } = error.response.data;
      const config = error.response.config;

      throw new APIError(code, message, config);
    }

    throw new UnknownError(error.response.config);
  },
);

export const queryParams = (query: Record<string, unknown>) => ({
  params: query,
});

export const headerToken = () => {
  const token = sessionStorage.getItem('token');

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
