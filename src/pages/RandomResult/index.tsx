import { AiOutlineUserAdd } from 'react-icons/ai';
import { LuLogOut } from 'react-icons/lu';

import ConditionBox from '@Pages/RandomPick/ConditionBox';

import { UpDownWrapper, ChoosedComponentsContainer } from './style';
import * as S from './style';

function RandomPick() {
  return (
    <S.RandomResultLayout>
      <UpDownWrapper>
        <ConditionBox
          Icon={LuLogOut}
          String="조건설정"
          disableCursor={true}
          marginRight="10%"
        />
      </UpDownWrapper>

      <UpDownWrapper justifyContent="flex-end">
        <ConditionBox
          Icon={AiOutlineUserAdd}
          String="조건저장"
          disableCursor={false}
        />
      </UpDownWrapper>
    </S.RandomResultLayout>
  );
}

export default RandomPick;
