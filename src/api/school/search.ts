import { AxiosResponse } from 'axios';

import { SchoolList } from '@Types/classManagement/school';

import { axiosInstance, headerToken, queryParams } from '../common';

export type SearchSchoolRequest = {
  schoolName: string;
  pageNumber: number;
};

type SearchSchoolResponse = SchoolList;

export const requestGetSchoolData = ({
  schoolName,
  pageNumber,
}: SearchSchoolRequest): Promise<AxiosResponse<SearchSchoolResponse>> =>
  axiosInstance.get('/school/list', {
    ...queryParams({ schoolName, pageNumber, dataSize: 6 }),
    ...headerToken,
  });
