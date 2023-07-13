import { IconType } from 'react-icons';

import StyledConditionBox from './style';
import * as S from './style';

interface ConditionBoxProps {
  Icon: IconType;
  String: string;
}

function ConditionBox({ Icon, String }: ConditionBoxProps) {
  return (
    <S.Layout>
      <StyledConditionBox>
        <S.Layout>
          {Icon && <Icon size="2.2rem" />}
          {String}
        </S.Layout>
      </StyledConditionBox>
    </S.Layout>
  );
}

export default ConditionBox;
