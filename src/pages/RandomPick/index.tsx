import { AiOutlineUserAdd } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';
import { LuLogOut } from 'react-icons/lu';
import { TiFlowMerge } from 'react-icons/ti';

import ConditionBox from './ConditionBox';
import RadioBox from './RadioBox';
import { UpDownWrapper, ChoosedComponentsContainer } from './style';
import * as S from './style';

function RandomPick() {
  return (
    <S.RandomPickLayout>
      <UpDownWrapper>
        <ConditionBox
          Icon={LuLogOut}
          String="조건설정"
          disableCursor={true}
          marginLeft="-8px"
        />
      </UpDownWrapper>
      <ChoosedComponentsContainer>
        <ConditionBox
          Icon={HiUserGroup}
          String="대상"
          disableCursor={true}
          marginLeft="-48px"
          marginRight="48px"
        />
        <RadioBox name="list">기존 명단</RadioBox>
        <RadioBox name="list">새로운 명단</RadioBox>
      </ChoosedComponentsContainer>
      <ChoosedComponentsContainer>
        <ConditionBox
          Icon={TiFlowMerge}
          String="방식"
          disableCursor={true}
          marginLeft="-48px"
          marginRight="48px"
        />

        <RadioBox name="method">한 명 뽑기</RadioBox>
        <RadioBox name="method">줄 세우기</RadioBox>
      </ChoosedComponentsContainer>
      <ChoosedComponentsContainer>
        <ConditionBox
          Icon={BsEye}
          String="대상 설정"
          disableCursor={true}
          marginLeft="-48px"
          marginRight="48px"
        />

        <RadioBox name="target">인원 설정</RadioBox>
        <RadioBox name="target">전체 랜덤</RadioBox>
      </ChoosedComponentsContainer>
      <UpDownWrapper justifyContent="flex-end">
        <ConditionBox
          Icon={AiOutlineUserAdd}
          String="조건저장"
          disableCursor={false}
        />
      </UpDownWrapper>
    </S.RandomPickLayout>
  );
}

export default RandomPick;
