// import { LuLogOut } from 'react-icons/lu';

import StyledConditionBox from './style';
import * as S from './style';
import ConditionBox from './type';

function CBox({ Icon }: ConditionBox) {
  return (
    <StyledConditionBox>
      <S.Layout>
        {Icon && <Icon size="2.2rem" />}
        조건설정
      </S.Layout>
    </StyledConditionBox>
  );
}

export default CBox;
