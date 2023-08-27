import { ChangeEvent, FormEventHandler } from 'react';

import useSchool from '@Hooks/api/useSchool';

import Button from '@Components/Button';
import Input from '@Components/Input';

import PagiNationButton from './PagiNationButton';
import SearchResult from './SearchResult';
import * as S from './style';

function RegisterSchoolModal() {
  const {
    schoolName,
    schoolList,
    hasPage,
    searchSchool,
    setSchoolName,
    isLoading,
  } = useSchool();

  const handleSubmitSearchSchoolForm: FormEventHandler = (event) => {
    event.preventDefault();

    if (schoolName.length < 2) {
      alert('2글자 이상 입력해주세요.');
      return;
    }

    searchSchool();
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
        <SearchResult isLoading={isLoading} schoolList={schoolList} />
      </S.SearchResult>
      <PagiNationButton
        hasPage={hasPage}
        schoolList={schoolList}
        searchSchool={searchSchool}
      />
    </S.SearchSchoolLayout>
  );
}

export default RegisterSchoolModal;
