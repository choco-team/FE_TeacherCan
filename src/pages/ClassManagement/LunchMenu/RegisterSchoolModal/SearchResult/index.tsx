import useModal from '@Hooks/useModal';
import useUserInfoAction from '@Hooks/useUserInfoAction';

import Button from '@Components/Button';
import PageLoading from '@Components/PageLoading';

import * as S from './style';
import { SearchResultProps } from './type';

const SEARCH_GUIDE = [
  '근무하고 계신 학교를 검색하세요.',
  '학교 검색은 2글자 이상부터 가능해요.',
  '검색 후 학교를 등록하면 식단표를 확인할 수 있어요.',
  '지역명이 아닌 학교명을 검색하면 더욱 빠르게 찾을 수 있어요.(서울티처캔초)',
];

const NOT_FOUND_RESULT = [
  '검색된 학교가 없어요.',
  '학교명을 다시 확인해 주세요.',
  '같은 결과가 계속 반복된다면 티처캔에 문의해 주세요.',
];

function SearchResult({ isLoading, schoolList }: SearchResultProps) {
  const { updateUser, isLoading: actionLoading } = useUserInfoAction();
  const { closeModal } = useModal();

  const updateSchool = (schoolCode: string) => {
    updateUser({ schoolCode });
    closeModal();
  };

  if (isLoading || actionLoading) return <PageLoading />;

  if (!schoolList)
    return (
      <S.SearchResult>
        {SEARCH_GUIDE.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </S.SearchResult>
    );

  if (schoolList.length === 0)
    return (
      <S.SearchResult>
        {NOT_FOUND_RESULT.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </S.SearchResult>
    );

  if (schoolList)
    return (
      <S.SchoolList>
        {schoolList.map(({ schoolAddress, schoolCode, schoolName }) => {
          return (
            <S.SchoolItem key={schoolCode}>
              <span>{schoolName}</span>
              <Button
                concept="outlined"
                size="sm"
                onClick={() => updateSchool(schoolCode)}
              >
                등록
              </Button>
              <S.SchoolAddress>{schoolAddress}</S.SchoolAddress>
            </S.SchoolItem>
          );
        })}
      </S.SchoolList>
    );

  return <></>;
}

export default SearchResult;
