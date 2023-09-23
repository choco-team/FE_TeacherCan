import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useState } from 'react';

import { SearchSchoolListResult } from '@Types/classManagement/school';

import { SearchSchoolRequest, getSchoolData } from '@Api/school/search';

const useSchool = () => {
  // 상태 수정

  const [schoolList, setSchoolList] = useState<SearchSchoolListResult>(null);

  const hasPage =
    (schoolList !== 'notFound' &&
      schoolList &&
      schoolList.pagination.totalPageNumber > 1) ||
    false;

  const { mutate, isLoading } = useMutation({
    mutationKey: ['searchSchool'],
    mutationFn: (params: SearchSchoolRequest) =>
      getSchoolData(params).then((response) => response.data),
    onError: (error) => {
      if (error instanceof AxiosError) {
        const status = error.response?.status;
        if (status === 404) setSchoolList('notFound');
      }
    },
    onSuccess: (data) => {
      setSchoolList(data);
    },
  });

  return {
    schoolList,
    hasPage,
    isLoading,
    searchSchool: mutate,
  };
};

export default useSchool;
