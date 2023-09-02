import { useState } from 'react';

import { SearchSchoolList } from '@Types/classManagement/school';

const useSchool = () => {
  const [schoolName, setSchoolName] = useState<string>('');
  const [schoolList, setSchoolList] = useState<
    SearchSchoolList | null | 'notFound'
  >(null);
  const hasPage =
    (schoolList !== 'notFound' &&
      schoolList &&
      schoolList.pagination.totalPageNumber > 1) ||
    false;

  const [isLoading, setIsLoading] = useState(false);
  const searchSchool = async (page = 1) => {
    setIsLoading(true);

    const response = await fetch(
      `https://teachercan.ssambox.com/api/school/list?schoolName=${schoolName}&pageNumber=${page}&dataSize=6`,
    );

    if (response.status === 404) {
      setIsLoading(false);
      setSchoolList('notFound');

      return;
    }

    const data = (await response.json()) as SearchSchoolList;

    setIsLoading(false);
    setSchoolList(data);
  };

  return {
    schoolName,
    schoolList,
    hasPage,
    isLoading,
    searchSchool,
    setSchoolName,
  };
};

export default useSchool;
