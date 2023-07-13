import { AiOutlineUserAdd } from 'react-icons/ai';
import { HiUserGroup } from 'react-icons/hi';
import { LuLogOut } from 'react-icons/lu';

import CheckBox from './CheckBox';
import ConditionBox from './ConditionBox';
import Container from './Container';
import Result from './Result';
import * as S from './style';

function RandomPick() {
  return (
    <S.RandomPickLayout>
      {/* <ConditionBox Icon={LuLogOut} String="조건설정" /> */}
      <Container>
        <CheckBox name={'기존 명단'}></CheckBox>
        <CheckBox name={'새로운 명단'}></CheckBox>
      </Container>
      <Container>
        <CheckBox name={'한 명 뽑기'}></CheckBox>
        <CheckBox name={'줄 세우기'}></CheckBox>
      </Container>
      <Container>
        <CheckBox name={'인원 설정'}></CheckBox>
        <CheckBox name={'전체 랜덤'}></CheckBox>
      </Container>
    </S.RandomPickLayout>
  );
}

export default RandomPick;
