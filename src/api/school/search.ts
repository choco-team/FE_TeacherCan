import { AxiosResponse } from 'axios';

import { SchoolList } from '@Types/classManagement/school';

import { axiosInstance, headerToken, queryParams } from '../common';

const SEARCH_SCHOOL_LIST_URL = '/school/list';

export type SearchSchoolRequest = {
  schoolName: string;
  pageNumber: number;
};

type SearchSchoolResponse = {
  code: number;
  result: boolean;
  data: SchoolList;
};

export const getSchoolData = ({
  schoolName,
  pageNumber,
}: SearchSchoolRequest): Promise<AxiosResponse<SearchSchoolResponse>> =>
  axiosInstance.get(SEARCH_SCHOOL_LIST_URL, {
    ...queryParams({ schoolName, pageNumber, dataSize: 6 }),
    ...headerToken,
  });
