import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { Pagination, School } from '@Types/classManagement/school';

import { APIError } from '@Api/common';
import { SearchSchoolRequest, getSchoolData } from '@Api/school/search';

const useSchool = () => {
  const [schoolList, setSchoolList] = useState<School[] | null>(null);
  const [pagination, setPagination] = useState<Pagination | null>(null);

  const hasPage = pagination ? pagination.totalPageNumber > 1 : false;

  const { mutate, isLoading } = useMutation({
    mutationFn: (params: SearchSchoolRequest) =>
      getSchoolData(params).then((response) => response.data),
    onError: (error) => {
      if (error instanceof APIError && error.code === 1302) {
        setSchoolList([]);
        setPagination(null);
      }
    },
    onSuccess: ({ data }) => {
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
