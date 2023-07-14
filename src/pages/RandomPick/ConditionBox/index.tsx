import { IconType } from 'react-icons';

import StyledConditionBox from './style';
import * as S from './style';

interface ConditionBoxProps {
  Icon: IconType;
  String: string;
  disableCursor: boolean;
}

function ConditionBox({ Icon, String, disableCursor }: ConditionBoxProps) {
  return (
    <S.Layout>
      <StyledConditionBox disableCursor={disableCursor}>
        <S.Layout>
          <S.IconWrapper>{Icon && <Icon size="2.2rem" />}</S.IconWrapper>
          {String}
        </S.Layout>
      </StyledConditionBox>
    </S.Layout>
  );
}

export default ConditionBox;
