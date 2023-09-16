import { ChangeEvent, FormEventHandler, useState } from 'react';

import useSchool from '@Hooks/query/school/useSchool';

import Button from '@Components/Button';
import Input from '@Components/Input';

import PagiNationButton from './PagiNationButton';
import SearchResult from './SearchResult';
import * as S from './style';

function RegisterSchoolModal() {
  const [schoolName, setSchoolName] = useState('');

  const { schoolList, hasPage, searchSchool, isLoading } = useSchool();

  const handleSubmitSearchSchoolForm: FormEventHandler = (event) => {
    event.preventDefault();

    if (schoolName.length < 2) {
      alert('2글자 이상 입력해주세요.');
      return;
    }

    searchSchool({ schoolName, pageNumber: 2 });
  };

  const pagiNationSearchSchool = (pageNumber: number) =>
    searchSchool({ schoolName, pageNumber });

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
        pagiNationSearchSchool={pagiNationSearchSchool}
      />
    </S.SearchSchoolLayout>
  );
}

export default RegisterSchoolModal;
