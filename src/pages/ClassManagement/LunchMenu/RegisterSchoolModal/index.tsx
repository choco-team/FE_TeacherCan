import Button from '@Components/Button';
import Input from '@Components/Input';

import * as S from './style';

function RegisterSchoolModal() {
  return (
    <S.SearchSchoolLayout>
      <S.SearchSchoolForm>
        <Input size="sm" placeholder="학교명을 검색하세요." />
        <Button type="submit">검색</Button>
      </S.SearchSchoolForm>
      <S.SearchResult>
        <div>
          돋보기로 무언가를 찾고있는 티처캔 캐릭터를 svg로 만들어 주세요 :)
        </div>
      </S.SearchResult>
    </S.SearchSchoolLayout>
  );
}

export default RegisterSchoolModal;
