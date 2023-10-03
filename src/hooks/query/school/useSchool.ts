import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useState } from 'react';

import { Pagination, School } from '@Types/classManagement/school';

import { SearchSchoolRequest, getSchoolData } from '@Api/school/search';

const useSchool = () => {
  const [schoolList, setSchoolList] = useState<School[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);

  const hasPage = pagination ? pagination.totalPageNumber > 1 : false;

  const { mutate, isLoading } = useMutation({
    mutationKey: ['searchSchool'],
    mutationFn: (params: SearchSchoolRequest) =>
      getSchoolData(params).then((response) => response.data),
    onError: (error) => {
      if (error instanceof AxiosError) {
        const status = error.response?.status;
        if (status === 404) {
          setSchoolList([]);
          setPagination(null);
        }
      }
    },
    onSuccess: (data) => {
      setSchoolList(data.schoolList);
      setPagination(data.pagination);
    },
  });

  return {
    schoolList,
    hasPage,
    pagination,
    isLoading,
    searchSchool: mutate,
  };
};

export default useSchool;
