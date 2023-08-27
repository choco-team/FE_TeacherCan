import { ChangeEvent, FormEventHandler, useState } from 'react';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

import Button from '@Components/Button';
import Input from '@Components/Input';
import PageLoading from '@Components/PageLoading';

import * as S from './style';

type Pagination = {
  pageNumber: number;
  totalPageNumber: number;
  dataSize: number;
};

type School = {
  schoolName: string;
  schoolAddress: string;
  schoolCode: string;
  areaCode: string;
};

type SearchSchoolList = {
  pagination: Pagination;
  schoolList: School[];
};

function RegisterSchoolModal() {
  const [schoolName, setSchoolName] = useState<string>('');
  const [schoolList, setSchoolList] = useState<
    SearchSchoolList | null | 'notFound'
  >(null);
  const [isLoading, setIsLoading] = useState(false);
  const hasPage =
    (schoolList !== 'notFound' &&
      schoolList &&
      schoolList.pagination.totalPageNumber > 1) ||
    false;

  const handleSubmitSearchSchoolForm: FormEventHandler = (event) => {
    event.preventDefault();

    if (schoolName.length < 2) {
      alert('2글자 이상 입력해주세요.');
      return;
    }

    searchSchool();
  };

  const searchSchool = async (page = 1) => {
    setIsLoading(true);

    const response = await fetch(
      `http://13.124.68.20/api/school/list?schoolName=${schoolName}&pageNumber=${page}&dataSize=6`,
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

  const handleClickPagiNationButton = (type: 'next' | 'prev') => {
    if (!hasPage) return;

    if (!schoolList || schoolList === 'notFound') return;

    const {
      pagination: { pageNumber: currentPage, totalPageNumber },
    } = schoolList;

    const searchPageNumber = currentPage + (type === 'next' ? +1 : -1);

    if (searchPageNumber < 1) {
      alert('첫 페이지이에요.');
      return;
    }

    if (searchPageNumber > totalPageNumber) {
      alert('마지막 페이지이에요.');
      return;
    }

    searchSchool(searchPageNumber);
  };

  const SearchResult = () => {
    if (isLoading) return <PageLoading />;

    if (schoolList === 'notFound')
      return (
        <>
          <li>검색된 학교가 없어요.</li>
          <li>학교명을 다시 확인해 주세요.</li>
          <li>같은 결과가 계속 반복된다면 티처캔에 문의해 주세요.</li>
        </>
      );

    if (!schoolList)
      return (
        <>
          <li>근무하고 계신 학교를 검색하세요.</li>
          <li>학교 검색은 2글자 이상부터 가능해요.</li>
          <li>검색 후 학교를 등록하면 식단표를 확인할 수 있어요.</li>
          <li>
            지역명이 아닌 학교명을 검색하면 더욱 빠르게 찾을 수
            있어요.(서울티처캔초)
          </li>
        </>
      );

    if (schoolList)
      return (
        <S.SchoolList>
          {schoolList.schoolList.map((item) => {
            return (
              <S.SchoolItem key={item.schoolCode}>
                <span>{item.schoolName}</span>
                <Button concept="outlined" size="sm">
                  등록
                </Button>
                <S.SchoolAddress>{item.schoolAddress}</S.SchoolAddress>
              </S.SchoolItem>
            );
          })}
        </S.SchoolList>
      );

    return <></>;
  };

  return (
    <S.SearchSchoolLayout>
      <S.SearchSchoolForm onSubmit={handleSubmitSearchSchoolForm}>
        <Input
          size="sm"
          placeholder="학교명을 검색하세요."
          value={schoolName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSchoolName(e.target.value)
          }
        />
        <Button type="submit">검색</Button>
      </S.SearchSchoolForm>
      <S.SearchResult>
        <SearchResult />
      </S.SearchResult>
      <S.PagiNationButton hasPage={hasPage}>
        <BiSolidLeftArrow onClick={() => handleClickPagiNationButton('prev')} />
        <BiSolidRightArrow
          onClick={() => handleClickPagiNationButton('next')}
        />
      </S.PagiNationButton>
    </S.SearchSchoolLayout>
  );
}

export default RegisterSchoolModal;
