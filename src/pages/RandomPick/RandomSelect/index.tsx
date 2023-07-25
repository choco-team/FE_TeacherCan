import { AiOutlineUserAdd } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';
import { LuLogOut } from 'react-icons/lu';
import { TiFlowMerge } from 'react-icons/ti';

import RadioBox from './RadioBox';
import SaveConditionButton from './SaveConditionButton';
import SelectBox from './SelectBox';
import { UpDownWrapper, ChoosedComponentsContainer } from './style';
import * as S from './style';

function RandomSelect() {
  return (
    <S.Layout>
      <S.RandomSelectContainer>
        <UpDownWrapper>
          <SelectBox Icon={LuLogOut} String="조건설정" marginLeft="-8px" />
        </UpDownWrapper>
        <ChoosedComponentsContainer>
          <SelectBox
            Icon={HiUserGroup}
            String="대상"
            marginLeft="-48px"
            marginRight="48px"
          />
          <RadioBox name="list">기존 명단</RadioBox>
          <RadioBox name="list">새로운 명단</RadioBox>
        </ChoosedComponentsContainer>
        <ChoosedComponentsContainer>
          <SelectBox
            Icon={TiFlowMerge}
            String="방식"
            marginLeft="-48px"
            marginRight="48px"
          />

          <RadioBox name="method">한 명 뽑기</RadioBox>
          <RadioBox name="method">줄 세우기</RadioBox>
        </ChoosedComponentsContainer>
        <ChoosedComponentsContainer>
          <SelectBox
            Icon={BsEye}
            String="대상 설정"
            marginLeft="-48px"
            marginRight="48px"
          />

          <RadioBox name="target">인원 설정</RadioBox>
          <RadioBox name="target">전체 랜덤</RadioBox>
        </ChoosedComponentsContainer>
        <UpDownWrapper justifyContent="flex-end">
          <SaveConditionButton Icon={AiOutlineUserAdd} String="조건저장" />
        </UpDownWrapper>
      </S.RandomSelectContainer>
    </S.Layout>
  );
}

export default RandomSelect;
