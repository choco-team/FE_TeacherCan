import Button from '@Components/Button';
import PageLoading from '@Components/PageLoading';

import * as S from './style';
import { SearchResultProps } from './type';

function SearchResult({ isLoading, schoolList }: SearchResultProps) {
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
}

export default SearchResult;
