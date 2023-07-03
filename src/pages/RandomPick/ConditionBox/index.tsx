import { LuLogOut } from 'react-icons/lu';

import StyledConditionBox from './style';
import * as S from './style';

function ConditionBox() {
  return (
    <StyledConditionBox>
      <S.Layout>
        <LuLogOut size="2.2rem" />
        조건설정
      </S.Layout>
    </StyledConditionBox>
  );
}

export default ConditionBox;
