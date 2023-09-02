import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://teachercan.ssambox.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

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
