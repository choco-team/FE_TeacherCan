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
          <RadioBox
            name="list"
            childrenOne="기존명단"
            childrenTwo="새로운 명단"
          />
        </ChoosedComponentsContainer>
        <ChoosedComponentsContainer>
          <SelectBox
            Icon={TiFlowMerge}
            String="방식"
            marginLeft="-48px"
            marginRight="48px"
          />
          <RadioBox
            name="method"
            childrenOne="한 명 뽑기"
            childrenTwo="줄 세우기"
          />

          {/* <RadioBox name="method">한 명 뽑기</RadioBox>
          <RadioBox name="method">줄 세우기</RadioBox> */}
        </ChoosedComponentsContainer>
        <ChoosedComponentsContainer>
          <SelectBox
            Icon={BsEye}
            String="인원"
            marginLeft="-48px"
            marginRight="48px"
          />
          <RadioBox
            name="target"
            childrenOne="인원 설정"
            childrenTwo="전체 랜덤"
          />

          {/* <RadioBox name="target">인원 설정</RadioBox>
          <RadioBox name="target">전체 랜덤</RadioBox> */}
        </ChoosedComponentsContainer>
        <UpDownWrapper justifyContent="flex-end">
          <SaveConditionButton Icon={AiOutlineUserAdd} string="조건저장" />
        </UpDownWrapper>
      </S.RandomSelectContainer>
    </S.Layout>
  );
}

export default RandomSelect;
