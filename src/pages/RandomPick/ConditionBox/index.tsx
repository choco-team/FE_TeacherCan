import { IconType } from 'react-icons';

import StyledConditionBox from './style';
import * as S from './style';
// import type { ConditionBox } from './type';

interface ConditionBoxProps {
  Icon: IconType;
}

function ConditionBox({ Icon }: ConditionBoxProps) {
  return (
    <StyledConditionBox>
      <S.Layout>
        {Icon && <Icon size="2.2rem" />}
        조건설정
      </S.Layout>
    </StyledConditionBox>
  );
}

export default ConditionBox;
